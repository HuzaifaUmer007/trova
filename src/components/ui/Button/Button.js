import React from 'react';
import styles from './Button.module.scss';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  href, 
  onClick, 
  disabled = false, 
  className = '',
  ...props 
}) => {
  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    disabled && styles['btn--disabled'],
    className
  ].filter(Boolean).join(' ');

  const Component = href ? 'a' : 'button';
  const componentProps = href 
    ? { href, ...props }
    : { onClick, disabled, type: 'button', ...props };

  return (
    <Component className={classes} {...componentProps}>
      {children}
    </Component>
  );
};

export default Button;
