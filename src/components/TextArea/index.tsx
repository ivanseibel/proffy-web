import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  marginTop?: number | string;
}

const TextArea: React.FC<ITextareaProps> = ({
  label,
  name,
  marginTop,
  ...rest
}) => {
  return (
    <div className="textarea-block" style={{ marginTop }}>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
};

export default TextArea;
