import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="container">
      <div className="lg:flex relative border-t border-border-faint">
        {/* Left Column - Logo and Description */}
        <div className="flex-1 relative">
          <div className="lg-max:pb-19 p-8 lg:px-16 lg:py-14 h-full relative">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-heat-100 rounded-lg flex-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold text-accent-black">Firecrawl</span>
            </div>
            <div className="text-label-x-large">
              The easiest way to extract <br />
              data from the web
            </div>
          </div>
        </div>

        {/* Right Columns - Links */}
        <div className="flex-1 lg:-ml-1 flex lg-max:border-t lg-max:-mt-1 border-border-faint relative">
          {/* Social Links */}
          <div className="flex-1">
            <div className="py-4 px-5 lg:p-7 h-42 lg:h-48">
              <div className="mb-5 lg:mb-7 text-black-alpha-64 text-body-medium">Backed by</div>
              <div className="flex gap-4">
                <div className="w-5 h-5 bg-orange-500 rounded"></div>
                <div className="text-body-medium whitespace-nowrap">Y Combinator</div>
              </div>
            </div>
            
            <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border-t border-border-faint" 
               target="_blank" 
               href="https://www.linkedin.com/company/firecrawl">
              <Linkedin className="w-5 h-5" />
              Linkedin
            </a>
            
            <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border-t border-border-faint" 
               target="_blank" 
               href="https://github.com/firecrawl/firecrawl">
              <Github className="w-5 h-5" />
              Github
            </a>
          </div>

          {/* Compliance */}
          <div className="flex-1 -ml-1 border-l border-border-faint">
            <div className="py-4 px-5 lg:p-7 h-42 lg:h-48 relative">
              <div className="mb-7 text-black-alpha-64 flex gap-2 items-center text-body-medium">
                <span>SOC II · Type 2</span>
                <div className="w-5 h-5 bg-blue-500 rounded"></div>
              </div>
              <div className="w-22 relative p-2">
                <div className="w-18 h-18 text-center rounded-full pt-5 bg-white shadow-card">
                  <div className="text-xs font-medium text-heat-100">AICPA</div>
                  <div className="text-black-alpha-40 text-xs">SOC 2</div>
                </div>
              </div>
            </div>
            
            <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border-t border-border-faint" 
               target="_blank" 
               href="https://x.com/firecrawl_dev">
              <Twitter className="w-5 h-5" />
              <div>X <span className="opacity-56">(Twitter)</span></div>
            </a>
            
            <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border-t border-border-faint" 
               target="_blank" 
               href="https://discord.gg/gSmWdAkdwd">
              <div className="w-5 h-5 bg-indigo-500 rounded"></div>
              Discord
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap relative pl-1 border-t border-border-faint">
        <div className="lg-max:w-[calc(50%+1px)] lg:flex-1 lg-max:-mt-1 -ml-1">
          <div className="text-label-medium py-4 px-5 lg:p-7 border border-border-faint">Products</div>
          <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -mt-1" href="#playground">Playground</a>
          <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -mt-1" href="#extract">Extract</a>
          <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -mt-1" href="#pricing">Pricing</a>
        </div>

        <div className="lg-max:w-[calc(50%+1px)] lg:flex-1 lg-max:-mt-1 -ml-1">
          <div className="text-label-medium py-4 px-5 lg:p-7 border border-border-faint">Documentation</div>
          <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -mt-1" href="#docs">Getting started</a>
          <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -mt-1" href="#api">API Reference</a>
          <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -mt-1" href="#integrations">Integrations</a>
        </div>

        <div className="lg-max:w-[calc(50%+1px)] lg:flex-1 lg-max:-mt-1 -ml-1">
          <div className="text-label-medium py-4 px-5 lg:p-7 border border-border-faint">Use Cases</div>
          <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -mt-1" href="#ai-platforms">AI Platforms</a>
          <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -mt-1" href="#lead-enrichment">Lead Enrichment</a>
        </div>

        <div className="lg-max:w-[calc(50%+1px)] lg:flex-1 lg-max:-mt-1 -ml-1">
          <div className="text-label-medium py-4 px-5 lg:p-7 border border-border-faint">Company</div>
          <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -mt-1" href="#blog">Blog</a>
          <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -mt-1" href="#careers">Careers</a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex text-body-medium pl-1 flex-wrap whitespace-nowrap relative border-t border-border-faint">
        <div className="px-4 lg:px-7 py-4 text-black-alpha-20 -mt-1 -ml-1 w-[calc(50%+1px)] lg:flex-1 relative border border-border-faint">
          © 2025 Firecrawl
        </div>
        <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -ml-1 -mt-1 w-[calc(50%+1px)] lg:flex-1" href="#terms">
          Terms of Service
        </a>
        <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -ml-1 -mt-1 w-[calc(50%+1px)] lg:flex-1" href="#privacy">
          Privacy Policy
        </a>
        <a className="text-body-medium group flex gap-4 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-4 px-5 lg:px-7 border border-border-faint -ml-1 -mt-1 w-[calc(50%+1px)] lg:flex-1" href="mailto:help@firecrawl.com">
          Report Abuse
        </a>
      </div>

      {/* Status */}
      <div className="p-4 lg:p-6 text-body-medium relative border-t border-border-faint">
        <a href="https://status.firecrawl.dev" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" className="button-tertiary gap-2">
            <div className="w-5 h-5 flex-center">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-green-600">All systems normal</span>
          </Button>
        </a>
      </div>

      {/* Ready to Build CTA */}
      <div className="flex-1 px-6 py-23 text-center relative border-t border-border-faint">
        <div className="mb-5 mx-auto flex gap-3 bg-background-base relative w-max items-center text-label-x-small border-b border-border-faint pb-4">
          <div className="text-black-alpha-16 pointer-events-none select-none">//</div>
          <div className="flex gap-3 items-center">
            <div className="w-5 h-5 bg-heat-100 rounded"></div>
            Get started
          </div>
          <div className="text-black-alpha-16 pointer-events-none select-none -scale-x-100">//</div>
        </div>
        <div className="text-title-h3 mb-4">Ready to build?</div>
        <div className="text-body-large mb-8">
          Kick off your journey for free and scale seamlessly as your project expands.{' '}
          <span className="text-label-large">No credit card needed.</span>
        </div>
        <div className="flex gap-3 justify-center">
          <a href="#signup">
            <Button className="button-primary">
              Start for free
            </Button>
          </a>
          <a href="#pricing">
            <Button variant="secondary" className="button-secondary">
              See our plans
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;