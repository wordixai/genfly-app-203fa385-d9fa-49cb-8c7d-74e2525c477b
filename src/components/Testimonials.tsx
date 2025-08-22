import React from 'react';
import { ExternalLink } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Morgan Linton',
      handle: '@morganlinton',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      content: 'If you\'re coding with AI, and haven\'t discovered @firecrawl_dev yet, prepare to have your mind blown 🤯',
      url: '#'
    },
    {
      name: 'Chris DeWeese',
      handle: '@chrisdeweese_',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      content: 'Started using @firecrawl_dev for a project, I wish I used this sooner.',
      url: '#'
    },
    {
      name: 'Alex Reibman',
      handle: '@AlexReibman',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      content: 'Moved our internal agent\'s web scraping tool from Apify to Firecrawl because it benchmarked 50x faster with AgentOps.',
      url: '#'
    },
    {
      name: 'Tom - Morpho',
      handle: '@TomReppelin',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face',
      content: 'I found gold today. Thank you @firecrawl_dev',
      url: '#'
    }
  ];

  return (
    <section className="container section-spacing">
      <div className="relative overflow-clip">
        {/* Section Header */}
        <div className="lg:max-w-[736px] lg:mx-auto lg:flex justify-between mb-16">
          <div className="mx-auto px-3 py-4 h-max lg:!mx-0 flex gap-3 bg-background-base relative w-max items-center text-label-x-small border-b border-border-faint">
            <div className="text-black-alpha-16 pointer-events-none select-none">//</div>
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-heat-100 rounded-full"></div>
              <span>Community</span>
            </div>
            <div className="text-black-alpha-16 pointer-events-none select-none -scale-x-100">//</div>
          </div>
          
          <div>
            <h2 className="lg:w-max relative mx-auto text-accent-black text-title-h2 pb-2 pt-3 text-center lg:max-w-[600px] lg:!text-title-h3 lg:!mx-0 lg:!text-start lg:!pt-0">
              People love <br /> building with{' '}
              <span className="text-heat-100">Firecrawl</span>
            </h2>
            <div className="max-w-md px-5 py-2 text-black-alpha-72 text-body-large text-center lg:!mx-0 lg:!text-start lg:!max-w-none">
              Discover why developers choose Firecrawl every day.
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="w-full overflow-hidden">
            <div className="flex w-max testimonials-scroll">
              {/* First set */}
              <div className="flex w-max">
                {testimonials.map((testimonial, index) => (
                  <a
                    key={`first-${index}`}
                    className="w-82 lg:w-90 relative group block hover:bg-black-alpha-2 transition-all duration-200 border-r border-border-faint"
                    target="_blank"
                    href={testimonial.url}
                  >
                    <div className="h-6 w-1 transition-all duration-200 scale-x-0 origin-left group-hover:scale-x-100 absolute left-0 top-8 bg-heat-100"></div>
                    
                    <div className="px-7 py-5 lg:p-6 flex-1 lg:pl-8 border-b border-border-faint flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-full bg-background-base relative border border-black-alpha-5 overflow-hidden">
                        <img alt={testimonial.name} className="w-10 h-10 object-cover" src={testimonial.avatar} />
                      </div>
                      <div className="flex-1">
                        <div className="text-label-medium">{testimonial.name}</div>
                        <div className="text-body-small text-black-alpha-56">{testimonial.handle}</div>
                      </div>
                      <div className="-translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200">
                        <ExternalLink className="w-5 h-5 text-heat-100" />
                      </div>
                    </div>
                    
                    <div className="h-53 lg:h-36 p-7 lg:px-8 lg:py-6 text-body-large">
                      "{testimonial.content.replace('@firecrawl_dev', '')}"
                      <span className="text-heat-100">@firecrawl_dev</span>
                      {testimonial.content.includes('🤯') && ' 🤯'}
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="flex w-max">
                {testimonials.map((testimonial, index) => (
                  <a
                    key={`second-${index}`}
                    className="w-82 lg:w-90 relative group block hover:bg-black-alpha-2 transition-all duration-200 border-r border-border-faint"
                    target="_blank"
                    href={testimonial.url}
                  >
                    <div className="h-6 w-1 transition-all duration-200 scale-x-0 origin-left group-hover:scale-x-100 absolute left-0 top-8 bg-heat-100"></div>
                    
                    <div className="px-7 py-5 lg:p-6 flex-1 lg:pl-8 border-b border-border-faint flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-full bg-background-base relative border border-black-alpha-5 overflow-hidden">
                        <img alt={testimonial.name} className="w-10 h-10 object-cover" src={testimonial.avatar} />
                      </div>
                      <div className="flex-1">
                        <div className="text-label-medium">{testimonial.name}</div>
                        <div className="text-body-small text-black-alpha-56">{testimonial.handle}</div>
                      </div>
                      <div className="-translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200">
                        <ExternalLink className="w-5 h-5 text-heat-100" />
                      </div>
                    </div>
                    
                    <div className="h-53 lg:h-36 p-7 lg:px-8 lg:py-6 text-body-large">
                      "{testimonial.content.replace('@firecrawl_dev', '')}"
                      <span className="text-heat-100">@firecrawl_dev</span>
                      {testimonial.content.includes('🤯') && ' 🤯'}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;