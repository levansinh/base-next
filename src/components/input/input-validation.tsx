'use client';

import { Controller, useFormContext } from 'react-hook-form';
import React from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input, InputProps } from '@/components/ui/input';

interface IInputValidation extends InputProps {
  name: string;
  label?: string;
}

const InputValidation = ({ name, ...passProps }: IInputValidation) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  console.log(String(errors[name]));
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input errorMessage={(errors[name] as unknown as string) || ''} {...field} {...passProps} />
      )}
    />
  );
};

export default InputValidation;

