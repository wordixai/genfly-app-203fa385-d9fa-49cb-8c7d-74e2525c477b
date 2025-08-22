import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, DollarSign } from 'lucide-react';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('yearly');

  const plans = [
    {
      name: 'Free Plan',
      description: 'A lightweight way to try scraping. No cost, no card, no hassle.',
      credits: '500 credits',
      price: { monthly: 0, yearly: 0 },
      features: [
        'Scrape 500 pages',
        '2 concurrent requests',
        'Low rate limits'
      ],
      cta: 'Get started',
      popular: false
    },
    {
      name: 'Hobby',
      description: 'Great for side projects and small tools. Fast, simple, no overkill.',
      credits: '3,000 credits',
      price: { monthly: 20, yearly: 16 },
      features: [
        'Scrape 3,000 pages',
        '5 concurrent requests',
        'Standard support'
      ],
      cta: 'Subscribe',
      popular: false
    },
    {
      name: 'Standard',
      description: 'Perfect for scaling with less effort. Simple, solid, dependable.',
      credits: '100,000 credits',
      price: { monthly: 104, yearly: 83 },
      features: [
        'Scrape 100,000 pages',
        '50 concurrent requests',
        'Standard support'
      ],
      cta: 'Subscribe',
      popular: true
    },
    {
      name: 'Growth',
      description: 'Built for high volume and speed. Firecrawl at full force.',
      credits: '500,000 credits',
      price: { monthly: 416, yearly: 333 },
      features: [
        'Scrape 500,000 pages',
        '100 concurrent requests',
        'Priority support'
      ],
      cta: 'Subscribe',
      popular: false
    }
  ];

  return (
    <section className="container section-spacing">
      <div className="relative overflow-clip">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mx-auto px-3 py-4 flex gap-3 bg-background-base relative w-max items-center text-label-x-small border-b border-border-faint">
            <div className="text-black-alpha-16 pointer-events-none select-none">//</div>
            <div className="flex gap-3 items-center">
              <DollarSign className="w-5 h-5 text-heat-100" />
              <span>Transparent</span>
            </div>
            <div className="text-black-alpha-16 pointer-events-none select-none -scale-x-100">//</div>
          </div>
          
          <h2 className="text-title-h2 text-accent-black pb-2 pt-3 text-center">
            Flexible <span className="text-heat-100">pricing</span>
          </h2>
          
          <div className="max-w-[450px] px-5 py-2 text-black-alpha-72 text-body-large text-center mb-8 mx-auto">
            Explore transparent pricing built for real-world scraping.{' '}
            <span className="text-label-large">Start for free, then scale as you grow.</span>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="lg:w-max lg:mx-auto flex justify-center relative mb-8">
          <div className="absolute top-3 left-0 z-[2] inset-y-3 bg-white-alpha-72 rounded-full backdrop-blur-4 shadow-card transition-transform duration-300"
               style={{
                 width: 'calc(50% - 24px)',
                 transform: `translateX(${billingPeriod === 'yearly' ? 'calc(100% + 36px)' : '12px'})`
               }}></div>
          
          <div className="p-3 border-x border-border-faint flex-1 lg:flex-none">
            <button 
              className="w-full lg:w-39 py-3 flex items-center justify-center relative z-[2] gap-1"
              onClick={() => setBillingPeriod('monthly')}
            >
              <span className={`px-1 text-label-medium transition-all ${
                billingPeriod === 'monthly' ? 'text-accent-black' : 'text-black-alpha-64'
              }`}>
                Monthly
              </span>
            </button>
          </div>
          
          <div className="p-3 border-x border-border-faint flex-1 lg:flex-none -ml-px">
            <button 
              className="w-full lg:w-39 py-3 flex items-center justify-center relative z-[2] gap-1"
              onClick={() => setBillingPeriod('yearly')}
            >
              <span className={`px-1 text-label-medium transition-all ${
                billingPeriod === 'yearly' ? 'text-accent-black' : 'text-black-alpha-64'
              }`}>
                Annual
              </span>
              <span className="py-1 px-1.5 text-heat-100 bg-heat-12 rounded text-xs font-medium">
                20% off
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="lg:flex gap-4">
          {plans.map((plan, index) => (
            <div key={plan.name} className="flex-1 border border-border-faint rounded-16 lg-max:-mt-1 lg:-ml-1 first:ml-0 relative mb-4 lg:mb-0">
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-heat-100 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most popular
                </div>
              )}
              
              <div className="px-6 xl:px-7 pt-6 xl:pt-7 text-label-large mb-2 flex gap-2 items-center">
                {plan.name}
                {plan.popular && (
                  <div className="px-1.5 py-1 text-heat-100 text-xs font-medium bg-heat-12 rounded">
                    Most popular
                  </div>
                )}
              </div>
              
              <div className="pl-6 xl:min-h-10 lg:min-h-15 xl:pl-7 pr-6 text-black-alpha-72 text-body-medium mb-5 xl:mb-8">
                {plan.description}
              </div>
              
              <div className="px-7 pb-8 items-center border-b border-border-faint flex gap-2 xl:gap-3">
                <div className="w-5 h-5 bg-gray-400 rounded"></div>
                <div className="text-body-medium">{plan.credits}</div>
              </div>
              
              <div className="p-6 xl:p-7 border-b border-border-faint relative">
                <div className="mb-6">
                  <div className="flex gap-2">
                    <div className="text-title-h3 h-11">
                      <div className="-mt-1.5">
                        ${plan.price[billingPeriod as keyof typeof plan.price]}
                      </div>
                    </div>
                  </div>
                  <div className="text-black-alpha-40 pt-5.5 text-body-medium">
                    {plan.price.monthly === 0 ? 'one-time' : '/monthly'}
                  </div>
                </div>
              </div>
              
              <div className="p-6 xl:p-7">
                <Button 
                  className={`w-full z-[1] ${
                    plan.popular ? 'button-primary' : 'button-secondary'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
              
              {/* Features */}
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex gap-3 items-center px-6 xl:px-7 py-4 border-b border-border-faint text-body-medium text-black-alpha-72">
                  <Check className="w-5 h-5 text-gray-400" />
                  <div className="relative">{feature}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Additional Credits Info */}
        <div className="p-6 lg:p-8 relative -mt-1 flex lg-max:flex-col lg-max:text-center gap-2 items-center justify-center border-t border-border-faint">
          <div className="w-5 h-5 bg-gray-400 rounded"></div>
          <div className="text-body-medium text-black-alpha-64">
            Additional <span className="text-accent-black">1000</span> credits available{' '}
            <br className="lg:hidden" /> for <span>$9/month.</span>{' '}
            <a className="text-heat-100 inline-flex items-center gap-1 hover:cursor-pointer hover:underline" href="#signup">
              Purchase <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Enterprise Section */}
        <div className="grid lg:grid-cols-2 relative -mt-1 border-t border-border-faint">
          <div className="p-6 lg:px-16 lg:py-14 flex flex-col relative overflow-hidden border-r border-border-faint">
            <div className="text-title-h5 mb-4">Enterprise</div>
            <div className="text-body-large">Power at your pace</div>
            <div className="text-label-large">Unlimited credits. Custom RPMs.</div>
            <div className="flex-1 min-h-20"></div>
            <a className="relative block w-max z-[2]" href="#contact">
              <Button className="button-primary w-38 z-[2]">
                Contact sales
              </Button>
            </a>
          </div>
          
          <div className="grid grid-cols-2 relative border-t lg:border-t-0 border-border-faint">
            {[
              { icon: '💰', feature: 'Bulk discounts' },
              { icon: '🎧', feature: 'Top priority support' },
              { icon: '⚡', feature: 'Custom concurrency limits' },
              { icon: '🔒', feature: 'Advanced security & controls' }
            ].map(({ icon, feature }, index) => (
              <div key={index} className="p-6 lg:p-7 border-b border-border-faint border-l border-border-faint">
                <div className="text-2xl mb-5">{icon}</div>
                <div className="text-body-medium">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;