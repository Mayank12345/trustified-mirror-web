import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertTriangle, Eye } from 'lucide-react';

interface ContrastResult {
  element: string;
  foreground: string;
  background: string;
  ratio: number;
  wcagAA: boolean;
  wcagAAA: boolean;
  status: 'pass' | 'fail' | 'warning';
}

interface AccessibilityTestProps {
  className?: string;
}

const AccessibilityTest = ({ className }: AccessibilityTestProps) => {
  const [contrastResults, setContrastResults] = useState<ContrastResult[]>([]);
  const [touchTargetResults, setTouchTargetResults] = useState<any[]>([]);
  const [isTestingComplete, setIsTestingComplete] = useState(false);

  // Function to calculate luminance
  const getLuminance = (rgb: number[]): number => {
    const [r, g, b] = rgb.map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  // Function to calculate contrast ratio
  const getContrastRatio = (color1: number[], color2: number[]): number => {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  };

  // Function to parse RGB color
  const parseRGB = (color: string): number[] => {
    const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    return match ? [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])] : [0, 0, 0];
  };

  // Function to convert hex to RGB
  const hexToRgb = (hex: string): number[] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : [0, 0, 0];
  };

  // Test color contrast
  const testColorContrast = () => {
    const results: ContrastResult[] = [];
    
    // Test common elements
    const testElements = [
      { selector: '.text-gray-900', name: 'Primary Text', expectedBg: '#ffffff' },
      { selector: '.text-gray-600', name: 'Secondary Text', expectedBg: '#ffffff' },
      { selector: '.text-gray-500', name: 'Muted Text', expectedBg: '#ffffff' },
      { selector: '.bg-green-500', name: 'Primary Button', expectedText: '#ffffff' },
      { selector: '.bg-red-500', name: 'Fail Status', expectedText: '#ffffff' },
      { selector: '.bg-amber-500', name: 'Expired Status', expectedText: '#ffffff' },
      { selector: '.text-green-600', name: 'Success Text', expectedBg: '#ffffff' },
    ];

    testElements.forEach(({ selector, name, expectedBg, expectedText }) => {
      const element = document.querySelector(selector);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const textColor = computedStyle.color;
        const bgColor = computedStyle.backgroundColor || expectedBg || '#ffffff';
        
        let foregroundRGB: number[];
        let backgroundRGB: number[];

        // Parse colors
        if (textColor.startsWith('rgb')) {
          foregroundRGB = parseRGB(textColor);
        } else if (textColor.startsWith('#')) {
          foregroundRGB = hexToRgb(textColor);
        } else {
          foregroundRGB = expectedText ? hexToRgb(expectedText) : [0, 0, 0];
        }

        if (bgColor.startsWith('rgb')) {
          backgroundRGB = parseRGB(bgColor);
        } else if (bgColor.startsWith('#')) {
          backgroundRGB = hexToRgb(bgColor);
        } else {
          backgroundRGB = [255, 255, 255];
        }

        const ratio = getContrastRatio(foregroundRGB, backgroundRGB);
        const wcagAA = ratio >= 4.5;
        const wcagAAA = ratio >= 7;

        results.push({
          element: name,
          foreground: textColor,
          background: bgColor,
          ratio: Math.round(ratio * 100) / 100,
          wcagAA,
          wcagAAA,
          status: wcagAA ? 'pass' : ratio >= 3 ? 'warning' : 'fail'
        });
      }
    });

    setContrastResults(results);
  };

  // Test touch targets
  const testTouchTargets = () => {
    const results: any[] = [];
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, select, textarea');
    
    interactiveElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const minSize = 44; // WCAG recommended minimum
      const isAdequateSize = rect.width >= minSize && rect.height >= minSize;
      
      results.push({
        element: element.tagName.toLowerCase(),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        adequate: isAdequateSize,
        status: isAdequateSize ? 'pass' : 'fail'
      });
    });

    setTouchTargetResults(results);
  };

  // Run tests
  useEffect(() => {
    const runTests = () => {
      testColorContrast();
      testTouchTargets();
      setIsTestingComplete(true);
    };

    // Run tests after a short delay to ensure DOM is ready
    const timer = setTimeout(runTests, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-amber-600" />;
      case 'fail':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pass: 'bg-green-100 text-green-800',
      warning: 'bg-amber-100 text-amber-800',
      fail: 'bg-red-100 text-red-800'
    };
    return variants[status as keyof typeof variants] || variants.fail;
  };

  if (!isTestingComplete) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Running Accessibility Tests...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const passedContrast = contrastResults.filter(r => r.status === 'pass').length;
  const passedTouchTargets = touchTargetResults.filter(r => r.status === 'pass').length;

  return (
    <div className={className}>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Accessibility Test Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {passedContrast}/{contrastResults.length}
              </div>
              <div className="text-sm text-green-700">Color Contrast Tests Passed</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {passedTouchTargets}/{touchTargetResults.length}
              </div>
              <div className="text-sm text-blue-700">Touch Targets Adequate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Color Contrast Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {contrastResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {getStatusIcon(result.status)}
                  <div>
                    <div className="font-medium">{result.element}</div>
                    <div className="text-sm text-gray-600">
                      Ratio: {result.ratio}:1
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge className={getStatusBadge(result.status)}>
                    {result.wcagAA ? 'WCAG AA' : 'Fails WCAG AA'}
                  </Badge>
                  {result.wcagAAA && (
                    <Badge className="bg-green-200 text-green-900">
                      WCAG AAA
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Touch Target Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {touchTargetResults.slice(0, 10).map((result, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {getStatusIcon(result.status)}
                  <div>
                    <div className="font-medium capitalize">{result.element}</div>
                    <div className="text-sm text-gray-600">
                      {result.width}×{result.height}px
                    </div>
                  </div>
                </div>
                <Badge className={getStatusBadge(result.status)}>
                  {result.adequate ? 'Adequate' : 'Too Small'}
                </Badge>
              </div>
            ))}
            {touchTargetResults.length > 10 && (
              <div className="text-center text-sm text-gray-600 pt-2">
                ... and {touchTargetResults.length - 10} more elements
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccessibilityTest;