import { Checkbox, CheckboxProps } from '@radix-ui/react-checkbox';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface ICCheckbox extends CheckboxProps {
  name: string;
  id: string;
  label: string;
  title: string;
}

const CheckboxValidation = ({ name, title, required, label, id, ...passProps }: ICCheckbox) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className='flex items-center space-x-2'>
          {title && (
            <label>
              {title}
              {required && <span className='text-danger font-bold'>*</span>}
            </label>
          )}
          <Checkbox id={id} {...field} {...passProps} />
          {label && (
            <label
              htmlFor={id}
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              {label}
            </label>
          )}
        </div>
      )}
    />
  );
};

export default CheckboxValidation;

