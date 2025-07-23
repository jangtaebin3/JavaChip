import React from 'react';
import './style.css';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  ...props
}) => {
  const buttonClass = `
    btn 
    btn--${variant} 
    btn--${size} 
    ${disabled ? 'btn--disabled' : ''} 
    ${loading ? 'btn--loading' : ''} 
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading && <span className="btn__spinner"></span>}
      <span className="btn__content">{children}</span>
    </button>
  );
};

export default Button;
