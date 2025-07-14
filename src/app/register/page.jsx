'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Handle registration logic here
  };
  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Handle social login logic here
  };
  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      {/* Background decorative elements */}
      <div className="absolute top-8 left-24 w-52 h-52 opacity-20">
        <img 
          src="/images/img_ellipse_4.svg" 
          alt="decorative" 
          className="w-full h-full"
        />
      </div>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 relative">
        {/* Background star decoration */}
        <div className="absolute top-0 right-64 w-32 h-32 bg-[#d9d9d923] rounded-lg opacity-50"></div>
        {/* Registration Card */}
        <div className="w-full max-w-6xl bg-main rounded-3xl shadow-[0px_4px_25px_#00000021] overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Side - Form */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button className="w-11 h-11 bg-extra-1 border border-muted-main rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                  <img 
                    src="/images/img_vector.svg" 
                    alt="close" 
                    className="w-5 h-5"
                  />
                </button>
              </div>
              {/* Form Content */}
              <div className="max-w-md mx-auto w-full">
                <h1 className="text-2xl lg:text-3xl font-bold text-primary-main mb-3">
                  Open your account
                </h1>
                <p className="text-sm font-semibold text-primary-main mb-10">
                  <span className="text-primary-main">Already have an account? </span>
                  <Link href="/login" className="text-accent-main hover:underline">
                    Sign in
                  </Link>
                </p>
                {/* Form Fields */}
                <div className="space-y-8">
                  <EditText
                    placeholder="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(value) => handleInputChange('email', value)}
                    leftImage={{ src: "/images/img_icoutlineemail.svg", width: 24, height: 24 }}
                    className="w-full"
                  />
                  <div className="relative">
                    <EditText
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(value) => handleInputChange('password', value)}
                      leftImage={{ src: "/images/img_mingcutelockline.svg", width: 24, height: 24 }}
                      className="w-full"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20"
                    >
                      <img 
                        src="/images/img_tablereye.svg" 
                        alt="toggle password" 
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                  <div className="relative">
                    <EditText
                      placeholder="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(value) => handleInputChange('confirmPassword', value)}
                      leftImage={{ src: "/images/img_mingcutelockline.svg", width: 24, height: 24 }}
                      className="w-full"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20"
                    >
                      <img 
                        src="/images/img_tablereye.svg" 
                        alt="toggle password" 
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                  <Button
                    onClick={handleSubmit}
                    loading={isLoading}
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="mt-8"
                  >
                    Create Account
                  </Button>
                </div>
                {/* Divider */}
                <div className="flex items-center justify-center my-8">
                  <div className="flex-1 h-px bg-muted-main"></div>
                  <span className="px-4 text-sm font-semibold text-primary-main">or</span>
                  <div className="flex-1 h-px bg-muted-main"></div>
                </div>
                {/* Social Login Buttons */}
                <div className="flex justify-center gap-8">
                  <button
                    onClick={() => handleSocialLogin('facebook')}
                    className="w-30 h-15 bg-extra-2 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    <img 
                      src="/images/img_frame_10.svg" 
                      alt="Facebook" 
                      className="w-8 h-8"
                    />
                  </button>
                  <button
                    onClick={() => handleSocialLogin('apple')}
                    className="w-30 h-15 bg-extra-2 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    <img 
                      src="/images/img_frame_11.svg" 
                      alt="Apple" 
                      className="w-8 h-8"
                    />
                  </button>
                  <button
                    onClick={() => handleSocialLogin('twitter')}
                    className="w-30 h-15 bg-extra-2 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    <img 
                      src="/images/img_prime_twitter.svg" 
                      alt="Twitter" 
                      className="w-8 h-8"
                    />
                  </button>
                </div>
                {/* Terms and Privacy */}
                <p className="text-sm font-semibold text-center text-muted-main leading-relaxed mt-12 max-w-sm mx-auto">
                  <span className="text-extra-2">By joining, you agree to the Fiverr </span>
                  <Link href="/terms" className="text-accent-main underline">
                    Terms of Service
                  </Link>
                  <span className="text-extra-2"> and to occasionally receive emails from us. Please read our </span>
                  <Link href="/privacy" className="text-accent-main underline">
                    Privacy Policy
                  </Link>
                  <span className="text-extra-2"> to learn how we use your personal data.</span>
                </p>
              </div>
            </div>
            {/* Right Side - Image */}
            <div className="flex-1 relative bg-main hidden lg:flex items-center justify-center">
              {/* Background decorative circle */}
              <div className="absolute top-24 left-0 w-96 h-96 opacity-30">
                <img 
                  src="/images/img_ellipse_4.svg" 
                  alt="decorative" 
                  className="w-full h-full"
                />
              </div>
              {/* Main image */}
              <div className="relative z-10 -ml-16">
                <img 
                  src="/images/img_subtract.png" 
                  alt="Team collaboration" 
                  className="w-full max-w-2xl h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default RegisterPage;