import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imagePath] = useState('/src/assets/aboutbg.jpg');
  const [secondImageLoaded, setSecondImageLoaded] = useState(false);
  const [secondImagePath] = useState('/src/assets/secondimage.jpeg');

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
  }, [imagePath]);

  useEffect(() => {
    const img = new Image();
    img.src = secondImagePath;
    img.onload = () => setSecondImageLoaded(true);
    img.onerror = () => setSecondImageLoaded(false);
  }, [secondImagePath]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/src/assets/homebg1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 pt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              {imageLoaded ? (
                <div className="w-full max-w-3xl aspect-video rounded-lg shadow-lg mb-12 overflow-hidden my-10">
                  <img 
                    src={imagePath}
                    alt="Demo content"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full max-w-4xl aspect-video bg-white rounded-lg shadow-lg mb-12"></div>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center px-4">
                Welcome to About Us
              </h1>
              <button className="bg-pink-500 hover:bg-pink-600 text-white text-lg md:text-xl px-8 md:px-12 py-3 rounded-full transition-colors my-6">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Section */}
      <div className="relative min-h-screen overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(-174deg, #5AC4FF 80%, white 80%)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="w-full flex justify-center">
              {secondImageLoaded ? (
                <div className="bg-white aspect-square w-full max-w-md rounded-lg shadow-lg">
                  <img 
                    src={secondImagePath} 
                    alt="Company"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="bg-white aspect-square w-full max-w-md rounded-lg shadow-lg"></div>
              )}
            </div>
            
            <div className="text-white">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Company</h2>
                <div className="max-h-[500px] overflow-y-auto pr-4">
                  <p className="text-base md:text-lg leading-relaxed mb-4">
                    Synergim is a premier software development company and IT consulting firm based in the USA. We offer a wide range of global services, including product development, customized solutions, strategic consulting, website development, and dynamic mobile applications.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Synergim's impact on the software development landscape is undeniable. With a commitment to innovation, excellence, and tailoring solutions to unique business needs, it stands as a top software development company and IT consulting firm, and the best web development service provider in the USA. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="relative min-h-screen overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(174deg, white 20%, #9370DB 20%)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            <div className="text-white mt-32">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission</h2>
              <div className="max-h-[500px] overflow-y-auto pr-4">
                <p className="text-base md:text-lg mb-6 leading-relaxed">
                  To provide exceptional software development and IT consulting services that help businesses streamline operations, enhance productivity, and achieve sustainable growth. Our mission is to:
                </p>
                <ul className="space-y-2 md:space-y-3 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="mr-2">1.</span>
                    <span>Deliver High-Quality Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.</span>
                    <span>Foster Innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">3.</span>
                    <span>Enhance Customer Success</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">4.</span>
                    <span>Build Lasting Relationships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">5.</span>
                    <span>Empower Through Technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">6.</span>
                    <span>Promote Continuous Learning</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-white mt-32">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vision</h2>
              <div className="max-h-[500px] overflow-y-auto pr-4">
                <p className="text-base md:text-lg leading-relaxed">
                  To be a global leader in software development and IT consulting by delivering innovative, reliable, and customer-centric solutions that empower businesses to achieve their full potential. At Synergim, our vision is to drive technological advancement and create impactful solutions that transform businesses across the world. We aspire to set new standards of excellence in the industry through continuous innovation, cutting-edge technology, and a steadfast commitment to quality and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;