'use client';
import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  loading = false,
  leftImage,
  rightImage,
  ...props
}) => {
  const variants = {
    primary: 'bg-primary text-primary-fg hover:bg-primary/90 active:bg-primary/80 focus:ring-primary',
    secondary: 'bg-primary-light text-accent-main border border-primary-main hover:bg-primary/10 active:bg-primary/20 focus:ring-primary',
    outline: 'border border-primary-main text-accent-main bg-transparent hover:bg-primary/5 active:bg-primary/10 focus:ring-primary'
  };

  const sizes = {
    sm: 'px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm',
    md: 'px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base',
    lg: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg'
  };

  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      className={`
        rounded-3xl
        transition-all 
        duration-200 
        ease-in-out
        focus:outline-none 
        focus:ring-2
        focus:ring-opacity-50
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105 active:scale-95'} 
        font-semibold
        inline-flex
        items-center
        justify-center
        min-h-[44px] sm:min-h-[48px]
        touch-manipulation
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {leftImage && !loading && (
        <img 
          src={leftImage.src} 
          alt="button icon" 
          className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
          style={{ width: leftImage.width, height: leftImage.height }}
        />
      )}
      <span className={loading ? 'opacity-75' : ''}>{children}</span>
      {rightImage && !loading && (
        <img 
          src={rightImage.src} 
          alt="button icon" 
          className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
          style={{ width: rightImage.width, height: rightImage.height }}
        />
      )}
    </button>
  );
};

export default Button;