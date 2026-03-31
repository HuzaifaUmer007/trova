import React from 'react';
import styles from './Card.module.scss';

const Card = ({ 
  children, 
  variant = 'default', 
  hover = true, 
  className = '', 
  ...props 
}) => {
  const classes = [
    styles.card,
    styles[`card--${variant}`],
    hover && styles['card--hover'],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
