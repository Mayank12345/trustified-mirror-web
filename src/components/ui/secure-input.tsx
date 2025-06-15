
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sanitizeInput, validateUrl, validateEmail } from '@/utils/security';

interface SecureInputProps {
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'url' | 'textarea';
  placeholder?: string;
  className?: string;
  required?: boolean;
  maxLength?: number;
  disabled?: boolean;
  rows?: number;
}

const SecureInput = ({ 
  value, 
  onChange, 
  type = 'text',
  placeholder,
  className,
  required,
  maxLength,
  disabled,
  rows = 3
}: SecureInputProps) => {
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);

  const handleChange = (newValue: string) => {
    // Apply maxLength limit
    if (maxLength && newValue.length > maxLength) {
      return;
    }

    // Sanitize input
    const sanitizedValue = sanitizeInput(newValue);
    
    // Validate based on type
    let valid = true;
    if (type === 'email' && sanitizedValue) {
      valid = validateEmail(sanitizedValue);
    } else if (type === 'url' && sanitizedValue) {
      valid = validateUrl(sanitizedValue);
    }
    
    setIsValid(valid);
    onChange(sanitizedValue);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const showValidation = touched && (required || value);
  const hasError = showValidation && (!isValid || (required && !value));

  const inputProps = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
      handleChange(e.target.value),
    onBlur: handleBlur,
    placeholder,
    disabled,
    className: cn(
      hasError && "border-red-500 focus-visible:ring-red-500",
      isValid && showValidation && value && "border-green-500",
      className
    )
  };

  return (
    <div className="relative">
      {type === 'textarea' ? (
        <Textarea {...inputProps} rows={rows} />
      ) : (
        <Input {...inputProps} type={type === 'url' ? 'url' : type} />
      )}
      
      {/* Validation indicators */}
      {showValidation && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {hasError ? (
            <AlertCircle className="h-4 w-4 text-red-500" />
          ) : value ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : null}
        </div>
      )}
      
      {/* Character count for inputs with maxLength */}
      {maxLength && (
        <div className="text-xs text-gray-500 mt-1 text-right">
          {value.length}/{maxLength}
        </div>
      )}
      
      {/* Error message */}
      {hasError && (
        <div className="text-xs text-red-500 mt-1">
          {!value && required ? 'This field is required' : 
           type === 'email' ? 'Please enter a valid email address' :
           type === 'url' ? 'Please enter a valid URL' : 
           'Invalid input'}
        </div>
      )}
    </div>
  );
};

export default SecureInput;
