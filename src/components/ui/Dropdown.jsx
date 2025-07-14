'use client';
import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ 
  placeholder = 'Select option', 
  options = [],
  value = '',
  onChange,
  rightImage,
  leftImage,
  disabled = false,
  className = '',
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedValue(option.value || option);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value || option);
    }
  };

  const displayValue = selectedValue || placeholder;

  return (
    <div className={`relative w-full ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full px-3 py-2 text-sm font-semibold text-left
          bg-overlay text-primary-main rounded-md
          border-0 focus:outline-none focus:ring-2 focus:ring-primary
          transition-all duration-200 ease-in-out
          flex items-center justify-between
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-overlay/80'}
          ${leftImage ? 'pl-10' : 'pl-3'}
          ${rightImage ? 'pr-10' : 'pr-8'}
          sm:px-4 sm:py-2.5 md:px-5 md:py-3
        `}
        {...props}
      >
        {leftImage && (
          <img 
            src={leftImage.src} 
            alt="dropdown icon" 
            className="absolute left-3 w-5 h-5"
            style={{ width: leftImage.width, height: leftImage.height }}
          />
        )}
        
        <span className={selectedValue ? 'text-primary-main' : 'text-secondary-main'}>
          {displayValue}
        </span>
        
        {rightImage ? (
          <img 
            src={rightImage.src} 
            alt="dropdown arrow" 
            className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            style={{ width: rightImage.width, height: rightImage.height }}
          />
        ) : (
          <svg 
            className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-card border border-primary-main rounded-md shadow-lg max-h-60 overflow-auto">
          {options.length > 0 ? (
            options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(option)}
                className="w-full px-4 py-2 text-left text-sm font-medium text-secondary-fg hover:bg-primary/10 focus:bg-primary/10 focus:outline-none transition-colors duration-150"
              >
                {option.label || option}
              </button>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-secondary-main">No options available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;