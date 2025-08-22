import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Globe, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [url, setUrl] = useState('');

  return (
    <section className="hero-section" id="home-hero">
      <div className="container px-4">
        {/* Pricing CTA */}
        <a 
          className="p-1 rounded-full flex w-max mx-auto mb-12 lg:mb-16 items-center relative border border-border-faint group hover:border-heat-100 transition-colors"
          href="#pricing"
        >
          <div className="px-8 py-2 text-label-x-small text-accent-black">
            2 Months Free — Annually
          </div>
          <div className="p-1">
            <div className="w-8 h-8 bg-accent-black flex-center rounded-full group-hover:bg-heat-100 transition-all group-hover:w-12">
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </a>

        {/* Main Heading */}
        <h1 className="text-title-h1 mx-auto text-center mb-12 lg:mb-16 max-w-4xl">
          Turn websites into{' '}
          <br className="lg-max:hidden" />
          <span className="text-heat-100">LLM-ready</span> data
        </h1>

        {/* Subtitle */}
        <p className="text-center text-body-large mb-16 max-w-2xl mx-auto">
          Power your AI apps with clean data crawled
          <br className="lg-max:hidden" />
          from any website.
          <a 
            className="bg-black-alpha-4 hover:bg-black-alpha-6 lg:ml-4 rounded-lg px-3 lg:px-2 text-label-large lg-max:py-2 h-8 lg:h-6 block lg-max:mt-2 lg-max:mx-auto lg-max:w-max lg:inline-block transition-all"
            target="_blank"
            href="https://github.com/firecrawl/firecrawl"
          >
            It's also open source.
          </a>
        </p>

        {/* Hero Input */}
        <div className="max-w-xl mx-auto w-full relative z-[11] rounded-20 lg:-mt-19 mb-20">
          <div className="bg-white shadow-elevated rounded-20 overflow-hidden">
            <label className="p-4 flex gap-3 items-center w-full relative border-b border-black-alpha-5">
              <Globe className="w-6 h-6 text-black-alpha-32" />
              <Input
                className="w-full bg-transparent border-none text-body-input text-accent-black placeholder:text-black-alpha-48 focus-visible:ring-0"
                placeholder="https://example.com"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </label>
            
            <div className="p-3 flex justify-between items-center">
              {/* Feature Tabs - Desktop */}
              <div className="bg-black-alpha-4 flex items-center rounded-lg p-1 relative lg-max:hidden">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="relative text-accent-black bg-white shadow-sm"
                >
                  <div className="w-5 h-5 bg-heat-100 rounded mr-2"></div>
                  Scrape
                </Button>
                <Button variant="ghost" size="sm" className="text-black-alpha-56">
                  <div className="w-5 h-5 bg-gray-400 rounded mr-2"></div>
                  Search
                  <span className="ml-2 px-2 py-1 rounded text-xs bg-heat-12 text-heat-100">New</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-black-alpha-56">
                  <div className="w-5 h-5 bg-gray-400 rounded mr-2"></div>
                  Map
                </Button>
                <Button variant="ghost" size="sm" className="text-black-alpha-56">
                  <div className="w-5 h-5 bg-gray-400 rounded mr-2"></div>
                  Crawl
                </Button>
              </div>

              {/* Mobile Dropdown */}
              <Button className="py-2 px-3 flex items-center rounded-lg lg:hidden gap-2 border border-black-alpha-4">
                <div className="w-5 h-5 bg-heat-100 rounded"></div>
                <span className="text-label-medium">Scrape</span>
                <ChevronDown className="w-4 h-4 text-black-alpha-48" />
              </Button>

              {/* Action Button */}
              <a href="#playground">
                <Button className="button-primary flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Code Example Preview */}
        <div className="lg:grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left - Website Preview */}
          <div className="flex-1 bg-white rounded-t-4 lg:h-96 relative border border-border-faint">
            <div className="p-4 border-b border-border-faint flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-mono-x-small font-mono text-black-alpha-20 ml-auto">[ .JSON ]</div>
            </div>
            
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm text-gray-800">
{`[
  {
    "url": "https://example.com",
    "markdown": "# Example\n\nThis is content...",
    "json": { "title": "Example", "desc": "..." },
    "screenshot": "https://example.com/screenshot.png"
  }
]`}
              </pre>
            </div>

            <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 flex items-center gap-2 border border-border-faint">
              <div className="w-5 h-5 bg-heat-100 rounded animate-spin"></div>
              <span className="text-mono-small font-mono">Scraping...</span>
            </div>
          </div>

          {/* Right - Markdown Preview */}
          <div className="flex-1 bg-white rounded-t-4 lg:h-96 relative border border-border-faint lg-max:mt-4">
            <div className="p-4 border-b border-border-faint flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-mono-x-small font-mono text-black-alpha-20 ml-auto">[ .MD ]</div>
            </div>
            
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm text-gray-800">
{`# Firecrawl

Firecrawl is a powerful web scraping
library that makes it easy to extract
data from websites.

## Installation

To install Firecrawl, run:`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;