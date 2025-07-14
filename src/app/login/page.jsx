'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import CheckBox from '../../components/ui/CheckBox';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    // Handle login logic here
  };
  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Handle social login logic here
  };
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col">
      {/* Background decorative elements */}
      <div className="absolute top-8 left-24 w-[206px] h-[226px] opacity-20 hidden lg:block">
        <img src="/images/img_ellipse_4.svg" alt="decorative" className="w-full h-full" />
      </div>
      <div className="absolute top-0 left-0 w-[294px] h-[144px] opacity-30 hidden lg:block">
        <img src="/images/img_ellipse_5.png" alt="decorative" className="w-full h-full" />
      </div>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
        <div className="w-full max-w-[1400px] mx-auto">
          {/* Star decoration */}
          <div className="hidden lg:block absolute top-[202px] right-[674px] w-[120px] h-[120px] bg-[#d9d9d923] rounded-[10px]"></div>
          {/* Login Container */}
          <div className="relative bg-[#061300] rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-[0px_4px_25px_#00000021] max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Close Button */}
              <button className="absolute top-6 right-6 lg:top-8 lg:right-8 w-11 h-11 flex items-center justify-center">
                <img src="/images/img_group_1000003303.svg" alt="close" className="w-11 h-11" />
              </button>
              {/* Login Form Section */}
              <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
                <div className="text-center mb-8 lg:mb-10">
                  <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#ffffff] leading-tight mb-3">
                    Login your account
                  </h1>
                  <p className="text-sm font-semibold text-[#ffffff]">
                    <span>Do not have an account? </span>
                    <Link href="/signup" className="text-[#05af2b] hover:underline">
                      Sign Up
                    </Link>
                  </p>
                </div>
                {/* Login Form */}
                <div className="space-y-6 sm:space-y-7">
                  <EditText
                    placeholder="Email Address"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    leftImage={{ src: "/images/img_icoutlineemail.svg", width: 24, height: 24 }}
                    className="w-full"
                  />
                  <EditText
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    leftImage={{ src: "/images/img_mingcutelockline.svg", width: 24, height: 24 }}
                    rightImage={{ src: "/images/img_tablereye.svg", width: 24, height: 24 }}
                    className="w-full"
                  />
                  {/* Remember Me and Forgot Password */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
                    <CheckBox
                      checked={rememberMe}
                      onChange={setRememberMe}
                      className="text-[#cccccc]"
                    >
                      Remember Me
                    </CheckBox>
                    <Link 
                      href="/forgot-password" 
                      className="text-sm font-semibold text-[#cccccc] hover:text-[#05af2b] transition-colors duration-200"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  {/* Login Button */}
                  <Button
                    onClick={handleLogin}
                    loading={isLoading}
                    className="w-full bg-[#05af2b] text-[#ffffff] font-semibold py-3 sm:py-4 rounded-3xl hover:bg-[#05af2b]/90 transition-all duration-200"
                  >
                    Login Now
                  </Button>
                  {/* Divider */}
                  <div className="flex items-center gap-4 my-6 sm:my-8">
                    <div className="flex-1 h-[1px] bg-[#4b4b4b]"></div>
                    <span className="text-sm font-semibold text-[#ffffff] px-3">or</span>
                    <div className="flex-1 h-[1px] bg-[#4b4b4b]"></div>
                  </div>
                  {/* Social Login Buttons */}
                  <div className="flex justify-center gap-6 sm:gap-8">
                    <button
                      onClick={() => handleSocialLogin('facebook')}
                      className="w-[60px] h-[60px] bg-[#1e1e1e] rounded-[30px] flex items-center justify-center hover:scale-105 transition-transform duration-200"
                    >
                      <img src="/images/img_frame_10.svg" alt="Facebook" className="w-8 h-8" />
                    </button>
                    <button
                      onClick={() => handleSocialLogin('apple')}
                      className="w-[60px] h-[60px] bg-[#1e1e1e] rounded-[30px] flex items-center justify-center hover:scale-105 transition-transform duration-200"
                    >
                      <img src="/images/img_frame_11.svg" alt="Apple" className="w-8 h-8" />
                    </button>
                    <button
                      onClick={() => handleSocialLogin('twitter')}
                      className="w-[60px] h-[60px] bg-[#1e1e1e] rounded-[30px] flex items-center justify-center hover:scale-105 transition-transform duration-200"
                    >
                      <img src="/images/img_prime_twitter.svg" alt="Twitter" className="w-8 h-8" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative hidden lg:block">
                <div className="relative">
                  {/* Background decorative circle */}
                  <div className="absolute top-[106px] left-0 w-[368px] h-[404px] opacity-60">
                    <img src="/images/img_ellipse_4.svg" alt="decorative" className="w-full h-full" />
                  </div>
                  {/* Main login image */}
                  <div className="relative z-10">
                    <img 
                      src="/images/img_subtract.png" 
                      alt="Login illustration" 
                      className="w-full max-w-[646px] h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
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
export default LoginPage;