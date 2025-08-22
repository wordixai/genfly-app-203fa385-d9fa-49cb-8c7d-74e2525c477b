import React from 'react';

const LogoCloud = () => {
  const logos = [
    'https://images.unsplash.com/photo-1549924231-f129b911e442?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop'
  ];

  return (
    <div className="section-spacing container">
      <div className="lg:flex relative border-t border-border-faint">
        {/* Text */}
        <div className="p-4 lg-max:text-center lg:p-10 border-b lg:border-b-0 lg:border-r border-border-faint">
          <div className="text-body-large text-accent-black">
            Trusted by{' '}
            <span className="text-label-large text-heat-100">
              5000+ <br className="lg:hidden" /> companies
            </span>{' '}
            of all sizes
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="flex-1 min-w-0 relative">
          <div className="w-full h-full overflow-x-clip">
            <div className="flex h-24 lg:h-32 logocloud-items">
              {/* First set */}
              <div className="flex h-full">
                {logos.map((logo, index) => (
                  <div 
                    key={`first-${index}`}
                    className="h-full aspect-[204/96] lg:aspect-[204/128] relative w-max border-r border-border-faint"
                  >
                    <img 
                      alt={`Logo ${index + 1}`}
                      className="absolute object-cover w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                      src={logo}
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex h-full">
                {logos.map((logo, index) => (
                  <div 
                    key={`second-${index}`}
                    className="h-full aspect-[204/96] lg:aspect-[204/128] relative w-max border-r border-border-faint"
                  >
                    <img 
                      alt={`Logo ${index + 1}`}
                      className="absolute object-cover w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                      src={logo}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;