import React from 'react';
import ErrorMsg from './ErrorMsg';

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  name,
  id,
  value,
  onChange,
  placeholder = '',
  error,
}) => {
  return (
    <div className="">
      <label className="block mb-2 text-md" htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-2 bg-white rounded-md border text-md"
        placeholder={placeholder}
        autoComplete="true"
      />
      <ErrorMsg message={error}/>
    </div>
  );
};

export default InputField;
