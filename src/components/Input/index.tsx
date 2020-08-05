import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  marginTop?: number | string;
}

const Input: React.FC<IInputProps> = ({ label, name, marginTop, ...rest }) => {
  return (
    <div className="input-block" style={{ marginTop }}>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default Input;
