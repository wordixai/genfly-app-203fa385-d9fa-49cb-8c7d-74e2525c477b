import React from 'react';
import { FileText, Clock, Shield, MousePointer, Globe } from 'lucide-react';

const MainFeatures = () => {
  return (
    <section className="container section-spacing">
      <div className="relative overflow-clip">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mx-auto px-3 py-4 flex gap-3 bg-background-base relative w-max items-center text-label-x-small border-b border-border-faint">
            <div className="text-black-alpha-16 pointer-events-none select-none">//</div>
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-heat-100 rounded-full"></div>
              <span>Zero configuration</span>
            </div>
            <div className="text-black-alpha-16 pointer-events-none select-none -scale-x-100">//</div>
          </div>
          
          <h2 className="text-title-h2 text-accent-black pb-2 pt-3 text-center">
            We handle the <span className="text-heat-100">hard stuff</span>
          </h2>
          
          <div className="max-w-md px-5 py-2 text-black-alpha-72 text-body-large text-center mb-8">
            Rotating proxies, orchestration, rate limits, js-blocked content and more.
          </div>
        </div>

        {/* Features Grid */}
        <div className="lg:grid grid-cols-2 gap-4">
          {/* Media Parsing */}
          <div className="relative border border-border-faint rounded-16 lg:mb-0 mb-4">
            <div className="p-8 lg:pt-15 lg:pb-12 lg:pl-16 lg:pr-18 border-b border-border-faint">
              <div className="flex gap-2 items-center text-label-small text-black-alpha-64 mb-4">
                <FileText className="w-5 h-5 text-heat-100" />
                Docs to data
              </div>
              <div className="text-body-x-large max-w-88 text-black-alpha-64">
                <span className="text-label-x-large text-accent-black">Media parsing.</span>{' '}
                Firecrawl can parse and output content from web hosted pdfs, docx, and more.
              </div>
            </div>
            
            <div className="flex w-full relative h-88 overflow-hidden">
              <div className="w-full p-6">
                <div className="bg-white rounded-lg p-4 h-full border border-border-faint relative">
                  <FileText className="w-12 h-12 text-heat-100 mx-auto mb-4" />
                  <div className="text-center text-sm text-gray-600">PDF Document</div>
                  <div className="absolute bottom-4 right-4 bg-heat-100 text-white px-2 py-1 rounded text-xs">
                    DOCX
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Wait */}
          <div className="relative border border-border-faint rounded-16 lg:mb-0 mb-4">
            <div className="p-8 lg:pt-15 lg:pb-12 lg:pl-16 lg:pr-18 border-b border-border-faint">
              <div className="flex gap-2 items-center text-label-small text-black-alpha-64 mb-4">
                <Clock className="w-5 h-5 text-heat-100" />
                Knows the moment
              </div>
              <div className="text-body-x-large max-w-88 text-black-alpha-64">
                <span className="text-label-x-large text-accent-black">Smart wait.</span>{' '}
                Firecrawl intelligently waits for content to load, making scraping faster and more reliable.
              </div>
            </div>
            
            <div className="flex w-full relative h-88 overflow-hidden">
              <div className="w-full p-6">
                <div className="bg-white rounded-lg p-4 h-full border border-border-faint relative flex-center">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-heat-100 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    <div className="text-sm text-gray-600">Page is loading...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stealth Mode */}
          <div className="relative border border-border-faint rounded-16 lg:mb-0 mb-4">
            <div className="p-8 lg:pt-15 lg:pb-12 lg:pl-16 lg:pr-18 border-b border-border-faint">
              <div className="flex gap-2 items-center text-label-small text-black-alpha-64 mb-4">
                <Shield className="w-5 h-5 text-heat-100" />
                Invisible access
              </div>
              <div className="text-body-x-large max-w-88 text-black-alpha-64">
                <span className="text-label-x-large text-accent-black">Stealth mode.</span>{' '}
                Crawls the web without <br className="lg-max:hidden" /> 
                being blocked, mimics real users to access protected or dynamic content.
              </div>
            </div>
            
            <div className="flex w-full relative h-88 p-6">
              <div className="w-full bg-gray-50 rounded-lg border border-border-faint relative overflow-hidden">
                <div className="absolute inset-0 flex-center">
                  <div className="w-16 h-16 border-2 border-heat-100 rounded-full flex-center relative">
                    <div className="w-8 h-8 bg-heat-100 rounded-full"></div>
                    <div className="absolute inset-0 border-2 border-heat-100 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Scraping */}
          <div className="relative border border-border-faint rounded-16">
            <div className="p-8 lg:pt-15 lg:pb-12 lg:pl-16 lg:pr-18 border-b border-border-faint">
              <div className="flex gap-2 items-center text-label-small text-black-alpha-64 mb-4">
                <MousePointer className="w-5 h-5 text-heat-100" />
                Interactive scraping
              </div>
              <div className="text-body-x-large max-w-83 text-black-alpha-64">
                <span className="text-label-x-large text-accent-black">Actions.</span>{' '}
                Click, scroll, write, wait, press and more before extracting content.
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6">
              {[
                { icon: Globe, label: 'Navigate' },
                { icon: MousePointer, label: 'Click' },
                { icon: FileText, label: 'Type' },
                { icon: Clock, label: 'Wait' }
              ].map(({ icon: Icon, label }, index) => (
                <div key={label} className="text-center group">
                  <div className="py-3 rounded-full mb-4 flex-center transition-all backdrop-blur-6 group-hover:bg-white-alpha-72 group-hover:shadow-card">
                    <Icon className="w-6 h-6 text-black-alpha-64 group-hover:text-heat-100 transition-colors" />
                  </div>
                  <div className="py-1 px-3 bg-background-base w-max mx-auto rounded-full text-body-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;