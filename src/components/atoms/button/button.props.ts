import React from 'react';

interface ButtonProps extends React.AllHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  icon?: React.ReactNode;
  text: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default ButtonProps;
