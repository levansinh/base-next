import * as React from 'react';

import { cn } from '@/lib/utils';
import { FormLabel } from '@/components/ui/form';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, label, className, type, ...props }, ref) => {
    return (
      <>
        {label && <FormLabel> {label}</FormLabel>}
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        {errorMessage && (
          <>
            <p>{errorMessage}</p>
          </>
        )}
      </>
    );
  }
);
Input.displayName = 'Input';

export { Input };

