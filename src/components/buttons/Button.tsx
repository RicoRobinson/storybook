// src/components/buttons/Button.tsx
import React, { FC } from 'react';
import './Button.css';

export enum ButtonType {
  Primary = 'button--primary',
  Secondary = 'button--secondary',
}

export interface ButtonProps {
  onClick?: () => void;
  label: string;
}

const Button: FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
