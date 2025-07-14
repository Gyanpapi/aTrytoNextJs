'use client';
import React, { useState } from 'react';

const SearchView = ({ 
  placeholder = 'Search...', 
  value = '', 
  onChange, 
  onSearch,
  leftImage,
  rightImage,
  className = '',
  disabled = false,
  ...props 
}) => {
  const [searchValue, setSearchValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(searchValue);
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <div className={`relative flex items-center w-full ${className}`}>
      {leftImage && (
        <img 
          src={leftImage.src} 
          alt="search icon" 
          className="absolute left-4 z-10 w-6 h-6"
          style={{ width: leftImage.width, height: leftImage.height }}
        />
      )}
      
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        disabled={disabled}
        className={`
          w-full px-4 py-3 text-sm font-semibold
          bg-secondary-light border-0 rounded-lg
          text-primary-main placeholder-primary-main
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
        <button
          type="button"
          onClick={handleSearchClick}
          disabled={disabled}
          className="absolute right-4 z-10 p-1 hover:scale-110 transition-transform duration-200"
        >
          <img 
            src={rightImage.src} 
            alt="search button" 
            className="w-6 h-6"
            style={{ width: rightImage.width, height: rightImage.height }}
          />
        </button>
      )}
    </div>
  );
};

export default SearchView;