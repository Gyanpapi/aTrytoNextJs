'use client';
import React from 'react';
import Button from '../ui/Button';

const Footer = () => {
  const aboutLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Become Seller', href: '/become-seller' },
    { label: 'ProProJobs', href: '/proprojobs' }
  ];

  const categoryLinks = [
    { label: 'Design & Creative', href: '/categories/design' },
    { label: 'Development & IT', href: '/categories/development' },
    { label: 'Music & Audio', href: '/categories/music' },
    { label: 'Programming & Tech', href: '/categories/programming' }
  ];

  const supportLinks = [
    { label: 'Help & Support', href: '/help' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Terms & Services', href: '/terms' }
  ];

  const socialIcons = [
    { src: "/images/img_ri_facebook_fill.svg", alt: "Facebook", href: "#" },
    { src: "/images/img_frame_130.svg", alt: "Instagram", href: "#" },
    { src: "/images/img_pajamas_twitter.svg", alt: "Twitter", href: "#" }
  ];

  const blogPosts = [
    {
      image: "/images/img_rectangle_50.png",
      date: "November 7, 2024",
      title: "Unveils the Best Canadian Cities for Biking"
    },
    {
      image: "/images/img_rectangle_50.png",
      date: "November 7, 2024", 
      title: "Unveils the Best Canadian Cities for Biking"
    }
  ];

  return (
    <footer className="bg-main w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 mb-16 lg:mb-20">
            {/* Hero Text */}
            <div className="lg:w-2/5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-main leading-tight mb-6">
                Reach Your Requirement Goals Right on Schedule
              </h2>
            </div>

            {/* CTA Section */}
            <div className="lg:w-2/5 lg:self-center">
              <p className="text-base text-secondary-main leading-relaxed mb-6">
                Sign up, complete your profile, and start browsing projects. Submit proposals and communicate with clients to get hired.
              </p>
              <Button variant="primary" size="md">
                Get Started
              </Button>
            </div>
          </div>

          {/* Links and Logo Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 mb-12">
            {/* Logo */}
            <div className="lg:w-1/5">
              <img 
                src="/images/img_image_2.png" 
                alt="QuantumEdge Software" 
                className="h-12 sm:h-14 w-auto"
              />
            </div>

            {/* Links Grid */}
            <div className="lg:w-4/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* About Section */}
                <div>
                  <h3 className="text-lg font-bold text-primary-main mb-6">About</h3>
                  <ul className="space-y-3">
                    {aboutLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-base text-secondary-main hover:text-accent-main transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Categories Section */}
                <div>
                  <h3 className="text-lg font-bold text-primary-main mb-6">Categories</h3>
                  <ul className="space-y-3">
                    {categoryLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-base text-secondary-main hover:text-accent-main transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support Section */}
                <div>
                  <h3 className="text-lg font-bold text-primary-main mb-6">Support</h3>
                  <ul className="space-y-3">
                    {supportLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-base text-secondary-main hover:text-accent-main transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Social and Blog Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 lg:gap-12 mb-8">
            {/* Social Media */}
            <div className="lg:w-1/4">
              <div 
                className="relative p-12 rounded-full bg-center bg-cover"
                style={{ backgroundImage: "url('/images/img_ellipse_4.svg')" }}
              >
                <div className="flex justify-center items-center gap-3">
                  {socialIcons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.href}
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        transition-all duration-200 hover:scale-110
                        ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-card' : 'bg-footer'}
                      `}
                    >
                      <img 
                        src={icon.src} 
                        alt={icon.alt}
                        className="w-6 h-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="lg:w-3/4">
              <h3 className="text-lg font-bold text-primary-main mb-5">Our Popular Post</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-11">
                {blogPosts.map((post, index) => (
                  <div key={index} className="flex gap-4">
                    <img 
                      src={post.image} 
                      alt="Blog post"
                      className="w-24 h-16 sm:w-28 sm:h-18 object-cover rounded-md flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="text-xs text-secondary-main mb-2">{post.date}</p>
                      <h4 className="text-sm font-semibold text-primary-main leading-tight">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 bg-divider rounded mb-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm font-semibold text-secondary-main">
              © QuantumEdge Software INC. 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;