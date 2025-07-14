'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';
import Dropdown from '../ui/Dropdown';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const freelancerOptions = [
    { label: 'Find Work', value: 'find-work' },
    { label: 'My Jobs', value: 'my-jobs' },
    { label: 'Proposals', value: 'proposals' },
    { label: 'Profile', value: 'profile' }
  ];

  return (
    <header className="bg-main w-full">
      <div className="w-full px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
          {/* Logo and Categories Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 lg:w-auto">
            <div className="flex items-center justify-between">
              <img 
                src="/images/img_header_logo.png" 
                alt="QuantumEdge Software Logo" 
                className="h-12 sm:h-14 w-auto"
              />
              
              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden p-2 text-primary-main"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            <Button
              variant="secondary"
              size="sm"
              leftImage={{ src: "/images/img_bxcategory.svg", width: 18, height: 18 }}
              className="w-full sm:w-auto"
            >
              Categories
            </Button>
          </div>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
              {/* Freelancer Dropdown */}
              <div className="bg-secondary-light rounded-lg p-2">
                <Dropdown
                  placeholder="Freelancer"
                  options={freelancerOptions}
                  rightImage={{ src: "/images/img_materialsymbolslightarrowdropdownrounded.svg", width: 24, height: 24 }}
                  className="min-w-[140px]"
                />
              </div>

              {/* Menu Items */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-7">
                <button 
                  className="text-accent-main text-sm font-semibold hover:text-primary transition-colors duration-200 text-left lg:text-center"
                  role="menuitem"
                >
                  BECAME A SELLER
                </button>
                
                <button 
                  className="text-primary-main text-sm font-semibold hover:text-accent-main transition-colors duration-200 text-left lg:text-center"
                  role="menuitem"
                >
                  LOGIN
                </button>
                
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full lg:w-auto"
                >
                  Registration
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;