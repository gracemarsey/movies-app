import React from 'react';
import styles from './index.module.css';

interface InputProps {
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  type?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, value, setValue, name }) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
      name={name}
    />
  );
};

export default Input;
