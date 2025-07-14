'use client';
import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

import Button from '../../components/ui/Button';
import ChipView from '../../components/ui/ChipView';
const JobCard = ({ job, featured = false }) => {
  const [isApplying, setIsApplying] = useState(false);
  const handleApply = async () => {
    setIsApplying(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsApplying(false);
  };
  return (
    <div className={`
      bg-card rounded-xl p-5 sm:p-6 
      ${featured ? 'border border-white shadow-[0px_4px_65px_#0000003f]' : ''}
      transition-all duration-300 hover:shadow-lg
    `}>
      {/* Header */}
      <div className="flex flex-col gap-5 sm:gap-6 mb-5">
        <div className="flex-1">
          <div className="flex flex-col gap-2 mb-5 sm:mb-6">
            <p className="text-sm text-extra-2 font-normal">Apr 30, 2024</p>
            <h3 className="text-lg sm:text-xl font-bold text-muted-main leading-tight">
              Website Design and Front-End Development
            </h3>
          </div>
          <div className="bg-extra-4 rounded-md px-5 sm:px-6 py-3 flex justify-between items-center">
            <span className="text-sm text-extra-2 font-normal">Fixed Price Project</span>
            <span className="text-sm text-muted-main font-semibold">$1,200-$1,400</span>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="mb-8 sm:mb-10">
        <p className="text-base text-extra-2 leading-relaxed mb-8 sm:mb-9">
          In this role, you will be responsible for conducting comprehensive SEO audits and implementing strategies to optimize websites...
        </p>
        {/* Status Chips */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-9">
          <ChipView.Item 
            variant="purple"
            leftImage={{ src: "/images/img_proiconslocation.svg", width: 16, height: 16 }}
          >
            Remote
          </ChipView.Item>
          <ChipView.Item 
            variant="red"
            leftImage={{ src: "/images/img_icon.svg", width: 16, height: 16 }}
          >
            Senior level
          </ChipView.Item>
          <ChipView.Item 
            variant="green"
            leftImage={{ src: "/images/img_icon_green_a700.svg", width: 16, height: 16 }}
          >
            2 Freelancer
          </ChipView.Item>
        </div>
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-3">
          <ChipView.Item>App Design</ChipView.Item>
          <ChipView.Item>Art Generation</ChipView.Item>
          <ChipView.Item>Illustration</ChipView.Item>
        </div>
        <p className="text-sm text-extra-1 font-semibold mb-4">+5 more</p>
        {/* Divider */}
        <div className="h-0.5 bg-extra-4 rounded w-full mb-4"></div>
      </div>
      {/* Footer */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-secondary-main font-normal self-end">Posted by</span>
          <span className="text-base text-muted-main font-semibold">Eamman Olio</span>
        </div>
        <Button
          variant={featured ? "primary" : "secondary"}
          size="md"
          onClick={handleApply}
          loading={isApplying}
          className={`w-fit ${featured ? 'bg-primary text-primary-fg' : 'bg-extra-2 text-primary-fg'}`}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};
const JobSearchResults = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const jobs = [
    { id: 1, featured: false },
    { id: 2, featured: true },
    { id: 3, featured: false },
    { id: 4, featured: false },
    { id: 5, featured: false },
    { id: 6, featured: false }
  ];
  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };
  return (
    <div className="min-h-screen bg-card flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-main">
        {/* Background Images */}
        <img 
          src="/images/img_ellipse_4.svg" 
          alt="background decoration" 
          className="absolute top-8 left-24 w-56 h-52 opacity-80"
        />
        <img 
          src="/images/img_ellipse_5.png" 
          alt="background decoration" 
          className="absolute top-0 left-0 w-72 h-36 opacity-60"
        />
        {/* Star decoration */}
        <div className="absolute top-48 right-32 w-32 h-32 bg-transparent rounded-lg opacity-40"></div>
        <Header />
        {/* Search Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-5 sm:gap-6">
              {/* Search Bar */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative bg-secondary-light rounded-lg border-2 border-transparent bg-gradient-to-r from-orange-400 via-primary to-gray-400 p-0.5">
                  <div className="bg-secondary-light rounded-lg p-1.5">
                    <div className="flex items-center">
                      <div className="flex-1 px-4 py-2">
                        <p className="text-base text-extra-2 text-center mb-2">Search your needs</p>
                        <div className="flex items-center justify-end gap-2">
                          <div className="flex items-center gap-2 px-5 py-1">
                            <span className="text-base text-primary-main font-semibold">Web Developer</span>
                            <img 
                              src="/images/img_vector_white_a700.svg" 
                              alt="dropdown" 
                              className="w-1.5 h-1"
                            />
                          </div>
                          <button className="bg-primary rounded-full p-3.5 hover:scale-105 transition-transform">
                            <img 
                              src="/images/img_search.svg" 
                              alt="search" 
                              className="w-5 h-5"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Advanced Search Button */}
              <Button variant="primary" size="md" className="w-full lg:w-auto">
                Advanced search
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Results Section */}
      <div className="flex-1 px-4 sm:px-6 lg:px-14 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Results Header */}
          <h1 className="text-2xl sm:text-3xl font-bold text-extra-1 mb-7 sm:mb-10">
            5 search result(s) found
          </h1>
          {/* Job Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} featured={job.featured} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default JobSearchResults;