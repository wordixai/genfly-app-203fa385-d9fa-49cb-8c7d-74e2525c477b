import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Code, Database, Search } from 'lucide-react';

const DeveloperFeatures = () => {
  const [activeTab, setActiveTab] = useState('scrape');
  const [activeLanguage, setActiveLanguage] = useState('python');

  const codeExamples = {
    python: `# pip install firecrawl-py
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

# Scrape a website:
app.scrape('firecrawl.dev')`,
    nodejs: `// npm install @mendable/firecrawl-js
import FirecrawlApp from '@mendable/firecrawl-js';

const app = new FirecrawlApp({apiKey: "fc-YOUR_API_KEY"});

// Scrape a website:
const scrapeResult = await app.scrapeUrl('firecrawl.dev');`,
    curl: `curl -X POST https://api.firecrawl.dev/v0/scrape \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer fc-YOUR_API_KEY' \\
  -d '{
    "url": "firecrawl.dev"
  }'`
  };

  return (
    <section className="container section-spacing">
      <div className="relative overflow-clip">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mx-auto px-3 py-4 flex gap-3 bg-background-base relative w-max items-center text-label-x-small border-b border-border-faint">
            <div className="text-black-alpha-16 pointer-events-none select-none">//</div>
            <div className="flex gap-3 items-center">
              <Code className="w-5 h-5 text-heat-100" />
              <span>Developer First</span>
            </div>
            <div className="text-black-alpha-16 pointer-events-none select-none -scale-x-100">//</div>
          </div>
          
          <h2 className="text-title-h2 text-accent-black pb-2 pt-3 text-center max-w-2xl mx-auto">
            Start <span className="text-heat-100">scraping</span> today
          </h2>
          
          <div className="max-w-md px-5 py-2 text-black-alpha-72 text-body-large text-center mb-8">
            Enhance your apps with industry leading web scraping and crawling capabilities.
          </div>
        </div>

        {/* Feature Tabs */}
        <div className="lg:contents">
          <div className="overflow-x-scroll hide-scrollbar py-8 -my-8 lg:contents relative">
            <div className="flex lg:grid grid-cols-3 lg-max:w-max relative gap-4 lg:gap-0">
              <div className="absolute lg:top-3 lg:translate-x-3 top-2 translate-x-2 left-0 z-[2] inset-y-2 lg:inset-y-3 bg-white-alpha-72 rounded-3xl lg:rounded-5xl backdrop-blur-4 shadow-card transition-transform duration-300"
                   style={{ 
                     width: activeTab === 'scrape' ? '138px' : activeTab === 'search' ? '120px' : '100px',
                     transform: `translateX(${
                       activeTab === 'scrape' ? '8px' : 
                       activeTab === 'search' ? '154px' : 
                       activeTab === 'crawl' ? '282px' : '8px'
                     })`
                   }}></div>
              
              {/* Scrape Tab */}
              <div className="relative p-2 lg:p-3 group">
                <button 
                  className={`py-4 lg-max:pl-5 lg-max:pr-6 lg:py-8 text-center lg-max:flex lg-max:items-center gap-3 block w-full relative z-[3] rounded-3xl lg:rounded-5xl transition-all ${
                    activeTab === 'scrape' ? 'text-accent-black' : 'text-black-alpha-64'
                  }`}
                  onClick={() => setActiveTab('scrape')}
                >
                  <div className="lg-max:contents flex justify-center">
                    <Database className="w-7 h-7" />
                  </div>
                  <div className="text-label-medium justify-center text-current lg:mt-5 lg:mb-2 flex gap-2 items-center">
                    Scrape
                  </div>
                  <div className="text-black-alpha-72 lg-max:hidden text-body-medium max-w-58 mx-auto">
                    Get llm-ready data from websites. Markdown, JSON, screenshot, etc.
                  </div>
                </button>
              </div>

              {/* Search Tab */}
              <div className="relative p-2 lg:p-3 group">
                <button 
                  className={`py-4 lg-max:pl-5 lg-max:pr-6 lg:py-8 text-center lg-max:flex lg-max:items-center gap-3 block w-full relative z-[3] rounded-3xl lg:rounded-5xl transition-all ${
                    activeTab === 'search' ? 'text-accent-black' : 'text-black-alpha-64'
                  }`}
                  onClick={() => setActiveTab('search')}
                >
                  <div className="lg-max:contents flex justify-center">
                    <Search className="w-7 h-7" />
                  </div>
                  <div className="text-label-medium justify-center text-current lg:mt-5 lg:mb-2 flex gap-2 items-center">
                    Search
                    <div className="py-1 px-2 rounded bg-heat-12 text-heat-100 text-xs font-medium">New</div>
                  </div>
                  <div className="text-black-alpha-72 lg-max:hidden text-body-medium max-w-58 mx-auto">
                    Search the web and get full content from results.
                  </div>
                </button>
              </div>

              {/* Crawl Tab */}
              <div className="relative p-2 lg:p-3 group">
                <button 
                  className={`py-4 lg-max:pl-5 lg-max:pr-6 lg:py-8 text-center lg-max:flex lg-max:items-center gap-3 block w-full relative z-[3] rounded-3xl lg:rounded-5xl transition-all ${
                    activeTab === 'crawl' ? 'text-accent-black' : 'text-black-alpha-64'
                  }`}
                  onClick={() => setActiveTab('crawl')}
                >
                  <div className="lg-max:contents flex justify-center">
                    <div className="w-7 h-7 bg-gray-400 rounded"></div>
                  </div>
                  <div className="text-label-medium justify-center text-current lg:mt-5 lg:mb-2 flex gap-2 items-center">
                    Crawl
                  </div>
                  <div className="text-black-alpha-72 lg-max:hidden text-body-medium max-w-58 mx-auto">
                    Crawl all the pages on a website and get data for each page.
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example Section */}
        <div className="lg:grid grid-cols-2 relative mt-8 border-t border-border-faint">
          {/* Language Selector */}
          <div className="relative flex">
            <div className="absolute top-3 left-0 z-[2] inset-y-3 bg-white-alpha-72 rounded-full backdrop-blur-4 shadow-card transition-transform duration-300"
                 style={{ 
                   width: '125px',
                   transform: `translateX(${
                     activeLanguage === 'python' ? '12px' : 
                     activeLanguage === 'nodejs' ? '137px' : 
                     activeLanguage === 'curl' ? '262px' : '12px'
                   })`
                 }}></div>
            
            <div className="relative p-3 group">
              <button 
                className={`py-3 px-6 flex gap-1 justify-center items-center w-full relative z-[3] transition-colors rounded-full ${
                  activeLanguage === 'python' ? 'text-accent-black' : 'text-black-alpha-64 hover:text-black-alpha-88'
                }`}
                onClick={() => setActiveLanguage('python')}
              >
                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                <div className="px-1 text-label-medium">Python</div>
              </button>
            </div>
            
            <div className="relative p-3 group">
              <button 
                className={`py-3 px-6 flex gap-1 justify-center items-center w-full relative z-[3] transition-colors rounded-full ${
                  activeLanguage === 'nodejs' ? 'text-accent-black' : 'text-black-alpha-64 hover:text-black-alpha-88'
                }`}
                onClick={() => setActiveLanguage('nodejs')}
              >
                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                <div className="px-1 text-label-medium">Node.js</div>
              </button>
            </div>
            
            <div className="relative p-3 group">
              <button 
                className={`py-3 px-6 flex gap-1 justify-center items-center w-full relative z-[3] transition-colors rounded-full ${
                  activeLanguage === 'curl' ? 'text-accent-black' : 'text-black-alpha-64 hover:text-black-alpha-88'
                }`}
                onClick={() => setActiveLanguage('curl')}
              >
                <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
                <div className="px-1 text-label-medium">Curl</div>
              </button>
            </div>

            {/* Copy Button */}
            <div className="py-3 px-4 border-l border-border-faint lg-max:hidden">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Copy className="w-4 h-4 text-black-alpha-64" />
                <span className="text-label-medium">Copy code</span>
              </Button>
            </div>
          </div>

          {/* Code Display */}
          <div className="lg:pt-3 lg:pl-7 w-full lg:pb-8 relative border-t lg:border-t-0 lg:border-l border-border-faint">
            <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-800 whitespace-pre">
                {codeExamples[activeLanguage as keyof typeof codeExamples]}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperFeatures;