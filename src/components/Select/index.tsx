import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  marginTop?: number | string;
}

const Select: React.FC<ISelectProps> = ({
  label,
  name,
  options,
  marginTop,
  ...rest
}) => {
  return (
    <div className="select-block" style={{ marginTop }}>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option value="" disabled hidden>
          Select an option
        </option>

        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
