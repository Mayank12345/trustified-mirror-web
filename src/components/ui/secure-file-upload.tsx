
import React, { useCallback, useState } from 'react';
import { Upload, AlertCircle, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { validateFileType, validateFileSize } from '@/utils/security';
import { toast } from '@/hooks/use-toast';

interface SecureFileUploadProps {
  onFileSelect: (file: File) => void;
  allowedTypes: string[];
  maxSizeInMB: number;
  className?: string;
  disabled?: boolean;
}

const SecureFileUpload = ({ 
  onFileSelect, 
  allowedTypes, 
  maxSizeInMB, 
  className,
  disabled 
}: SecureFileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [validationError, setValidationError] = useState<string>('');

  const validateFile = (file: File): string => {
    if (!validateFileType(file, allowedTypes)) {
      return `File type not allowed. Accepted types: ${allowedTypes.join(', ')}`;
    }
    
    if (!validateFileSize(file, maxSizeInMB)) {
      return `File size exceeds ${maxSizeInMB}MB limit`;
    }
    
    return '';
  };

  const handleFileSelect = useCallback((file: File) => {
    const error = validateFile(file);
    
    if (error) {
      setValidationError(error);
      setSelectedFile(null);
      toast({
        title: "File validation failed",
        description: error,
        variant: "destructive",
      });
      return;
    }
    
    setValidationError('');
    setSelectedFile(file);
    onFileSelect(file);
    
    toast({
      title: "File selected",
      description: `${file.name} is ready for upload`,
    });
  }, [allowedTypes, maxSizeInMB, onFileSelect]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (disabled) return;
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect, disabled]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (disabled) return;
    
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect, disabled]);

  const clearFile = () => {
    setSelectedFile(null);
    setValidationError('');
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "relative border-2 border-dashed rounded-lg p-6 text-center transition-colors",
          dragActive ? "border-green-400 bg-green-50" : "border-gray-300",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-gray-400",
          validationError ? "border-red-400 bg-red-50" : "",
          selectedFile && !validationError ? "border-green-400 bg-green-50" : ""
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleChange}
          accept={allowedTypes.join(',')}
          disabled={disabled}
        />
        
        <div className="space-y-2">
          {selectedFile && !validationError ? (
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Check className="h-8 w-8" />
              <div>
                <p className="font-medium">{selectedFile.name}</p>
                <p className="text-sm text-gray-500">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  clearFile();
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : validationError ? (
            <div className="flex items-center justify-center space-x-2 text-red-600">
              <AlertCircle className="h-8 w-8" />
              <p className="text-sm">{validationError}</p>
            </div>
          ) : (
            <>
              <Upload className="h-8 w-8 mx-auto text-gray-400" />
              <div>
                <p className="text-sm font-medium">
                  Drop files here or click to browse
                </p>
                <p className="text-xs text-gray-500">
                  Max {maxSizeInMB}MB • {allowedTypes.join(', ')}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecureFileUpload;
