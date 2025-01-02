import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imagePath] = useState('/src/assets/');
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
    <div className="min-h-screen">
      <Navbar />
      
      {/* First Section */}
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

        <div className="relative z-10">
          <div className="container mx-auto px-4 pt-20">
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
                <div className="w-full max-w-4xl aspect-video bg-white rounded-lg shadow-lg mb-12">
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                Welcome to About Us
              </h1>
              <button className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-12 py-3 rounded-full transition-colors my-6">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section with Blue Gradient */}
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(-174deg, #5AC4FF 80%, white 80%)'
          }}
        />
        <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-0 pb-24 flex items-center justify-center min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full flex justify-center">
              {secondImageLoaded ? (
                <div className="bg-white aspect-square w-full max-w-md rounded-lg shadow-lg">
                  <img 
                    src={secondImagePath} 
                    alt="Second Demo content" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="bg-white aspect-square w-full max-w-md rounded-lg shadow-lg"></div>
              )}
            </div>
            
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold mb-6">About the Company</h2>
              <p className="text-lg text-justify leading-relaxed">
              Synergim is a premier software development company and IT consulting firm based in the USA. We offer a wide range of global services, including product development, customized solutions, strategic consulting, website development, and dynamic mobile applications.
              </p>
              <p className="text-lg text-justify leading-relaxed">
              Synergim’s impact on the software development landscape is undeniable. With a commitment to innovation, excellence, and tailoring solutions to unique business needs, it stands as a top software development company and IT consulting firm, and the best web development service provider in the USA. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section with Diagonal Background */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `
              linear-gradient(101deg, 
                white 30%,
                white 70%,
                
              )
            `
          }}
        />
        
        <div className="container mx-auto px-[-20] relative z-10">
        </div>
      </div>

      {/* Third Section with Purple Gradient */}
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 z-15 mb-30"
          style={{
            background: 'linear-gradient(174deg, white 20%, #9370DB 20%)'
          }}
        />
        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-14 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white mt-40">
              <h2 className="text-4xl font-bold mb-5 ">Why GameCraftor?</h2>
              <p className="text-lg mb-5 ">
                What sets us apart is our focus on enhancing both creativity and efficiency.
              </p>
              <ul className="space-y-3 text-lg">
                <li>- Create new game designs from scratch</li>
                <li>- Edit and fine-tune existing designs</li>
                <li>- Test gameplay dynamics with real-time simulations</li>
                <li>- Export game files</li>
                <li>- Order hard copies through trusted vendors</li>
              </ul>
            </div>
            <div className="bg-white aspect-square w-full max-w-md rounded-lg shadow-lg mx-auto mt-40">
              {/* Placeholder for future image */}
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default AboutUs;