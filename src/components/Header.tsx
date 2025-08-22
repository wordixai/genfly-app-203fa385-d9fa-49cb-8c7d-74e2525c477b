import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Banner */}
      <div className="container p-3 relative z-[102]">
        <div className="p-10 rounded-10 overflow-hidden relative text-center bg-black-alpha-4 text-accent-black">
          <div className="text-body-medium">
            We just raised our Series A and shipped Firecrawl /v2 🎉.{' '}
            <a className="text-label-medium text-heat-100 hover:underline" href="#blog">
              Read the blog.
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="sticky top-0 left-0 w-full z-[101] bg-background-base border-b border-border-faint">
        <div className="container lg:px-14 px-4 flex justify-between items-center py-5 lg:py-8">
          {/* Logo and Navigation */}
          <div className="flex gap-6 items-center">
            {/* Logo */}
            <div className="relative">
              <a className="flex items-center gap-2" href="/">
                <div className="w-8 h-8 bg-heat-100 rounded-lg flex-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold text-accent-black">Firecrawl</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="text-black-alpha-16 text-label-medium select-none lg-max:hidden mx-6">·</div>
            <nav className="flex gap-2 relative lg-max:hidden select-none">
              <a className="nav-item flex items-center gap-1 px-3 py-2" href="#products">
                <span className="text-label-medium text-accent-black">Products</span>
                <ChevronDown className="w-4 h-4 text-black-alpha-56" />
              </a>
              <a className="nav-item flex items-center px-3 py-2" href="#playground">
                <span className="text-label-medium text-accent-black">Playground</span>
              </a>
              <a className="nav-item flex items-center px-3 py-2" href="#docs">
                <span className="text-label-medium text-accent-black">Docs</span>
              </a>
              <a className="nav-item flex items-center px-3 py-2" href="#pricing">
                <span className="text-label-medium text-accent-black">Pricing</span>
              </a>
              <a className="nav-item flex items-center px-3 py-2" href="#blog">
                <span className="text-label-medium text-accent-black">Blog</span>
              </a>
              <a className="nav-item flex items-center gap-1 px-3 py-2" href="#extract">
                <span className="text-label-medium text-accent-black">Extract</span>
                <ChevronDown className="w-4 h-4 text-black-alpha-56" />
              </a>
              <a className="nav-item flex items-center gap-1 px-3 py-2" href="#resources">
                <span className="text-label-medium text-accent-black">Resources</span>
                <ChevronDown className="w-4 h-4 text-black-alpha-56" />
              </a>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex gap-2 lg-max:hidden">
            <a href="https://github.com/firecrawl/firecrawl" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="button-tertiary gap-2">
                <Github className="w-5 h-5" />
                50.9K
              </Button>
            </a>
            <a href="#signup">
              <Button className="button-secondary">
                Sign up
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="lg:hidden button-tertiary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;