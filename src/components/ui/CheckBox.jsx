'use client';
import React, { useState } from 'react';

const CheckBox = ({ 
  children, 
  checked = false, 
  onChange, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className={`
      flex items-center gap-3 cursor-pointer select-none
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      ${className}
    `}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className={`
          w-4 h-4 text-primary bg-transparent border-2 border-primary-main rounded
          focus:ring-primary focus:ring-2 focus:ring-offset-0
          transition-all duration-200 ease-in-out
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          sm:w-5 sm:h-5
        `}
        {...props}
      />
      {children && (
        <span className="text-sm font-semibold text-secondary-main sm:text-base">
          {children}
        </span>
      )}
    </label>
  );
};

export default CheckBox;