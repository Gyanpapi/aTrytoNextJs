'use client';
import React, { useState } from 'react';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  leftImage,
  rightImage,
  className = '',
  disabled = false,
  required = false,
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`relative flex items-center w-full ${className}`}>
      {leftImage && (
        <img 
          src={leftImage.src} 
          alt="input icon" 
          className="absolute left-4 z-10 w-6 h-6"
          style={{ width: leftImage.width, height: leftImage.height }}
        />
      )}
      
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        className={`
          w-full px-4 py-3 text-sm font-semibold
          bg-secondary border border-primary-main rounded-3xl
          text-secondary-fg placeholder-secondary-fg
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          transition-all duration-200 ease-in-out
          ${leftImage ? 'pl-14' : 'pl-5'}
          ${rightImage ? 'pr-14' : 'pr-5'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          sm:px-5 sm:py-3 md:px-6 md:py-4
        `}
        {...props}
      />
      
      {rightImage && (
        <img 
          src={rightImage.src} 
          alt="input icon" 
          className="absolute right-4 z-10 w-6 h-6"
          style={{ width: rightImage.width, height: rightImage.height }}
        />
      )}
    </div>
  );
};

export default EditText;