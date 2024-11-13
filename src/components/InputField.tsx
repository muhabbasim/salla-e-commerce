import React from 'react';

interface InputFieldProps {
  type?: string;
  name?: string;
  id?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  id,
  value,
  onChange,
  placeholder = '',
  className
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        autoComplete="true"
      />
    </div>
  );
};

export default InputField;
