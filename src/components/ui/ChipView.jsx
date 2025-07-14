'use client';
import React, { useState } from 'react';

const ChipItem = ({ 
  children, 
  onClick, 
  selected = false,
  variant = 'default',
  leftImage,
  rightImage,
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-chip text-secondary-fg',
    purple: 'bg-button-purple text-button-purple',
    red: 'bg-button-red text-button-red',
    green: 'bg-button-green text-accent-main'
  };

  return (
    <div
      onClick={onClick}
      className={`
        inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-normal
        transition-all duration-200 ease-in-out cursor-pointer
        hover:scale-105 active:scale-95
        ${variants[variant]}
        ${selected ? 'ring-2 ring-primary' : ''}
        ${className}
      `}
      {...props}
    >
      {leftImage && (
        <img 
          src={leftImage.src} 
          alt="chip icon" 
          className="w-4 h-4"
          style={{ width: leftImage.width, height: leftImage.height }}
        />
      )}
      <span>{children}</span>
      {rightImage && (
        <img 
          src={rightImage.src} 
          alt="chip icon" 
          className="w-4 h-4"
          style={{ width: rightImage.width, height: rightImage.height }}
        />
      )}
    </div>
  );
};

const ChipView = ({ 
  children, 
  className = '',
  gap = 'gap-2',
  ...props 
}) => {
  return (
    <div 
      className={`flex flex-wrap items-center ${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

ChipView.Item = ChipItem;

export default ChipView;