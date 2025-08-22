import React from 'react';
import { Shield, Zap, Globe } from 'lucide-react';

const CorePrinciples = () => {
  const performanceData = [
    { name: 'Firecrawl', coverage: 96, color: 'bg-heat-100' },
    { name: 'Puppeteer', coverage: 79, color: 'bg-gray-400' },
    { name: 'cURL', coverage: 75, color: 'bg-gray-400' }
  ];

  const speedData = [
    { url: 'firecrawl.dev/features', crawl: '739 ms', scrape: '744 ms' },
    { url: 'firecrawl.dev/careers', crawl: '744 ms', scrape: '796 ms' },
    { url: 'firecrawl.dev/docs', crawl: '751 ms', scrape: '765 ms' },
    { url: 'firecrawl.dev/blog', crawl: '50 ms', scrape: '49 ms' },
    { url: 'firecrawl.dev/login', crawl: '49 ms', scrape: '50 ms' }
  ];

  return (
    <section className="container section-spacing">
      <div className="relative overflow-clip">
        {/* Section Header */}
        <div className="lg:max-w-[736px] lg:mx-auto lg:flex justify-between">
          <div className="mx-auto px-3 py-4 h-max lg:!mx-0 flex gap-3 bg-background-base relative w-max items-center text-label-x-small border-b border-border-faint">
            <div className="text-black-alpha-16 pointer-events-none select-none">//</div>
            <div className="flex gap-3 items-center">
              <Zap className="w-5 h-5 text-heat-100" />
              <span>Built to outperform</span>
            </div>
            <div className="text-black-alpha-16 pointer-events-none select-none -scale-x-100">//</div>
          </div>
          
          <div>
            <h2 className="lg:w-max relative mx-auto text-accent-black text-title-h2 pb-2 pt-3 text-center lg:max-w-[600px] lg:!text-title-h3 lg:!mx-0 lg:!text-start lg:!pt-0">
              Core principles, <br /> proven{' '}
              <span className="text-heat-100">performance</span>
            </h2>
            <div className="max-w-[369px] px-5 py-2 relative w-full mx-auto !text-black-alpha-72 text-body-large text-center mb-8 lg:!mx-0 lg:!text-start lg:!max-w-none">
              Built from the ground up to outperform traditional scrapers.
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="lg:flex gap-4">
          {/* Reliability Section */}
          <div className="relative flex-1">
            <div className="p-8 lg:pt-15 lg:pb-14 lg:pl-16 lg:pr-22 w-full border-t border-border-faint relative">
              <div className="flex gap-2 items-center text-label-small text-black-alpha-64 mb-4">
                <Shield className="w-5 h-5 text-heat-100" />
                No proxy headaches
              </div>
              <div className="text-body-x-large text-black-alpha-64">
                <span className="text-label-x-large text-accent-black">Reliable.</span>{' '}
                Covers 96% of the web, <br className="lg-max:hidden" /> 
                including JS-heavy and protected pages. No proxies, no puppets, just clean data.
              </div>
            </div>
            
            {/* Performance Chart */}
            <div className="w-full border-t border-border-faint p-6">
              {performanceData.map((item, index) => (
                <div key={item.name} className="flex items-center py-6 lg:py-8 px-5 lg:px-16 gap-4 lg:gap-5 border-b border-border-faint last:border-b-0">
                  <div className="flex gap-3 lg:gap-4 w-35 lg:w-34 items-center">
                    <div className="w-10 h-10 flex-center relative border border-border-faint rounded-full">
                      {item.name === 'Firecrawl' ? (
                        <div className="w-6 h-6 bg-heat-100 rounded-full"></div>
                      ) : (
                        <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                      )}
                    </div>
                    <div className="text-body-large">{item.name}</div>
                  </div>
                  <div className="flex-1 rounded-full p-1 h-10 border border-border-faint relative">
                    <div 
                      className={`h-full relative rounded-full overflow-clip ${
                        item.name === 'Firecrawl' ? 'bg-heat-100' : 'bg-gray-400'
                      }`}
                      style={{ width: `${item.coverage}%` }}
                    >
                      <div className="absolute top-1.5 right-1.5 rounded-full py-1 w-12 text-center text-mono-small font-mono text-white">
                        {item.coverage}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Speed Section */}
          <div className="relative flex-1 lg:border-l border-border-faint lg:-ml-1">
            <div className="p-8 lg:pt-15 lg:pb-14 lg:pl-16 lg:pr-22 w-full border-t border-border-faint relative">
              <div className="flex gap-2 items-center text-label-small text-black-alpha-64 mb-4">
                <Zap className="w-5 h-5 text-heat-100" />
                Speed that feels invisible
              </div>
              <div className="text-body-x-large text-black-alpha-64">
                <span className="text-label-x-large text-accent-black">Blazingly fast.</span>{' '}
                Delivers results in less than 1 second, fast for real-time agents{' '}
                <br className="lg-max:hidden" /> and dynamic apps.
              </div>
            </div>
            
            {/* Speed Table */}
            <div className="w-full border-t border-border-faint">
              <div className="px-5 lg:px-16 py-3.5 border-b border-border-faint flex lg:gap-12 text-body-small text-black-alpha-48">
                <div className="flex-1">URL</div>
                <div className="w-18">Crawl</div>
                <div className="w-18">Scrape</div>
              </div>
              
              <div className="relative overflow-hidden">
                {speedData.map((item, index) => (
                  <div key={index} className="px-5 lg:px-16 h-10 items-center border-b border-border-faint flex lg:gap-12 text-body-small text-black-alpha-48">
                    <div className="flex-1">
                      <div>
                        <span className="text-black-alpha-32">firecrawl.dev</span>
                        <span className="text-accent-black">/{item.url.split('/')[1]}</span>
                      </div>
                    </div>
                    <div className="w-18">
                      <span className="w-4 inline-block">{item.crawl.split(' ')[0]}</span>
                      <span className="text-black-alpha-32 ml-1.5">ms</span>
                    </div>
                    <div className="w-18">
                      <span className="w-4 inline-block">{item.scrape.split(' ')[0]}</span>
                      <span className="text-black-alpha-32 ml-1.5">ms</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples;