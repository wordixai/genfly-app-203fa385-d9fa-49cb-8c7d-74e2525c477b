import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Users, Code, Search, ArrowRight } from 'lucide-react';

const UseCases = () => {
  return (
    <section className="container section-spacing">
      <div className="relative overflow-clip">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mx-auto px-3 py-4 flex gap-3 bg-background-base relative w-max items-center text-label-x-small border-b border-border-faint">
            <div className="text-black-alpha-16 pointer-events-none select-none">//</div>
            <div className="flex gap-3 items-center">
              <Sparkles className="w-5 h-5 text-heat-100" />
              <span>Use cases</span>
            </div>
            <div className="text-black-alpha-16 pointer-events-none select-none -scale-x-100">//</div>
          </div>
          
          <h2 className="text-title-h2 text-accent-black pb-2 pt-3 text-center max-w-[650px] mx-auto">
            Transform <br className="lg:hidden" /> web data into{' '}
            <br className="lg:hidden" /> <span className="text-heat-100">AI-powered</span> solutions
          </h2>
          
          <div className="max-w-md px-6 py-2 text-black-alpha-72 text-body-large text-center mb-8">
            Discover how Firecrawl customers are getting the most out of our API.
          </div>
          
          <a href="#use-cases">
            <Button className="button-primary mx-auto">
              View all use cases
            </Button>
          </a>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-16">
          {/* AI Chats */}
          <div className="lg:flex lg:h-100">
            <div className="p-8 lg:px-16 lg:py-15 z-[2] lg:w-[454px] relative flex flex-col h-full border border-border-faint rounded-16">
              <div className="flex gap-2 items-center text-label-small text-black-alpha-64 mb-4">
                <Sparkles className="w-5 h-5 text-heat-100" />
                Chat with context
              </div>
              <div className="text-title-h4 max-w-88 mb-3">Smarter AI chats</div>
              <div className="text-body-large">Power your AI assistants with real-time, accurate web content.</div>
              <div className="flex-1 mb-6"></div>
              <a href="#docs">
                <Button variant="secondary" className="w-max flex items-center gap-2 group">
                  View docs
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            <div className="flex-1 lg:-ml-1 relative border border-border-faint rounded-16 lg:rounded-l-none">
              <div className="bg-gray-50 h-full p-6 flex-center">
                <div className="bg-white rounded-xl p-6 shadow-card max-w-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">AI Assistant</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">with Firecrawl</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm">What's new in the React docs?</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Real-time · Updated 2 min ago
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Enrichment */}
          <div className="lg:flex lg:h-100">
            <div className="p-8 lg:px-16 lg:py-15 z-[2] lg:w-[454px] relative flex flex-col h-full border border-border-faint rounded-16">
              <div className="flex gap-2 items-center text-label-small text-black-alpha-64 mb-4">
                <Users className="w-5 h-5 text-heat-100" />
                Know your leads
              </div>
              <div className="text-title-h4 max-w-88 mb-3">Lead enrichment</div>
              <div className="text-body-large">Enhance your sales data with web information.</div>
              <div className="flex-1 mb-6"></div>
              <a href="#extract">
                <Button variant="secondary" className="w-max flex items-center gap-2 group">
                  Check out Extract
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            <div className="flex-1 lg:-ml-1 relative border border-border-faint rounded-16 lg:rounded-l-none">
              <div className="bg-gray-50 h-full p-6">
                <div className="bg-white rounded-xl p-4 shadow-card">
                  <div className="text-sm font-medium mb-4 flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Extracting leads from directory
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Tech startups</span>
                      <span>1,243</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">With contact info</span>
                      <span>892</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Decision makers</span>
                      <span>456</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MCPs */}
          <div className="lg:flex lg:h-100">
            <div className="p-8 lg:px-16 lg:py-15 z-[2] lg:w-[454px] relative flex flex-col h-full border border-border-faint rounded-16">
              <div className="flex gap-2 items-center text-label-small text-black-alpha-64 mb-4">
                <Code className="w-5 h-5 text-heat-100" />
                Code with context
              </div>
              <div className="text-title-h4 max-w-88 mb-3">MCPs</div>
              <div className="text-body-large">Add powerful scraping to your code editors.</div>
              <div className="flex-1 mb-6"></div>
              <a href="#mcp">
                <Button variant="secondary" className="w-max flex items-center gap-2 group">
                  Get started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            <div className="flex-1 lg:-ml-1 relative border border-border-faint rounded-16 lg:rounded-l-none">
              <div className="bg-gray-900 h-full text-green-400 font-mono text-sm">
                <div className="flex border-b border-gray-700">
                  <div className="py-4 px-4 flex gap-2 border-r border-gray-700">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="py-3.5 px-4 flex gap-2 items-center">
                    <div className="w-5 h-5 bg-blue-500 rounded"></div>
                    <span className="text-white text-sm">Claude Code</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-orange-400">✻ Welcome to Claude Code!</div>
                  <br />
                  <div className="text-gray-400">/help for help, /status for your current setup</div>
                  <br />
                  <div className="flex items-center">
                    <span>&gt; Extract pricing from stripe.com/pricing</span>
                    <span className="ml-1 w-2 h-4 bg-white animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Research */}
          <div className="lg:flex lg:h-100">
            <div className="p-8 lg:px-16 lg:py-15 z-[2] lg:w-[454px] relative flex flex-col h-full border border-border-faint rounded-16">
              <div className="flex gap-2 items-center text-label-small text-black-alpha-64 mb-4">
                <Search className="w-5 h-5 text-heat-100" />
                No insight missed
              </div>
              <div className="text-title-h4 max-w-88 mb-3">Deep research</div>
              <div className="text-body-large">Extract comprehensive information for in-depth research.</div>
              <div className="flex-1 mb-6"></div>
              <a href="#search">
                <Button variant="secondary" className="w-max flex items-center gap-2 group">
                  Build your own with Search
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            <div className="flex-1 lg:-ml-1 relative border border-border-faint rounded-16 lg:rounded-l-none">
              <div className="bg-gray-50 h-full p-6">
                <div className="bg-white rounded-xl p-4 shadow-card">
                  <div className="flex items-center gap-2 mb-4 text-sm font-medium">
                    <Search className="w-4 h-4" />
                    Deep research in progress...
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Academic papers</span>
                      <span>101 found</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">News articles</span>
                      <span>685 found</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Expert opinions</span>
                      <span>29 found</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;