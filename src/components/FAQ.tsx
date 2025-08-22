import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const faqSections = [
    {
      title: 'General',
      questions: [
        {
          question: 'What is Firecrawl?',
          answer: 'Firecrawl is a powerful web scraping API that converts websites into LLM-ready data formats like markdown, JSON, and more.'
        },
        {
          question: 'What sites work?',
          answer: 'Firecrawl works with 96% of websites, including JavaScript-heavy sites, SPAs, and protected content.'
        },
        {
          question: 'Who can benefit from using Firecrawl?',
          answer: 'Developers building AI applications, data scientists, researchers, and anyone needing clean web data extraction.'
        },
        {
          question: 'Is Firecrawl open-source?',
          answer: 'Yes! Firecrawl is open-source and available on GitHub with over 50,000 stars.'
        }
      ]
    },
    {
      title: 'Scraping & Crawling',
      questions: [
        {
          question: 'How does Firecrawl handle dynamic content on websites?',
          answer: 'Firecrawl uses advanced browser automation to wait for content to load and execute JavaScript before scraping.'
        },
        {
          question: 'Why is it not crawling all the pages?',
          answer: 'Firecrawl respects robots.txt and rate limits. You can configure crawling depth and patterns in your requests.'
        },
        {
          question: 'What formats can Firecrawl convert web data into?',
          answer: 'Firecrawl supports markdown, JSON, HTML, plain text, and can capture screenshots.'
        }
      ]
    },
    {
      title: 'API Related',
      questions: [
        {
          question: 'Where can I find my API key?',
          answer: 'Your API key is available in your Firecrawl dashboard after signing up.'
        }
      ]
    },
    {
      title: 'Billing',
      questions: [
        {
          question: 'Is Firecrawl free?',
          answer: 'Yes, we offer a free plan with 500 credits. No credit card required.'
        },
        {
          question: 'Do credits roll over to the next month?',
          answer: 'No, credits reset each billing cycle. We recommend choosing a plan that fits your monthly usage.'
        }
      ]
    }
  ];

  const toggleQuestion = (sectionIndex: number, questionIndex: number) => {
    const id = sectionIndex * 100 + questionIndex;
    setOpenQuestions(prev => 
      prev.includes(id) 
        ? prev.filter(q => q !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="container section-spacing">
      <div className="relative overflow-clip">
        {/* Section Header */}
        <div className="lg:max-w-[736px] lg:mx-auto lg:flex justify-between mb-16">
          <div className="mx-auto px-3 py-4 h-max lg:!mx-0 flex gap-3 bg-background-base relative w-max items-center text-label-x-small border-b border-border-faint">
            <div className="text-black-alpha-16 pointer-events-none select-none">//</div>
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-heat-100 rounded-full"></div>
              <span>FAQ</span>
            </div>
            <div className="text-black-alpha-16 pointer-events-none select-none -scale-x-100">//</div>
          </div>
          
          <div>
            <h2 className="lg:w-max relative mx-auto text-accent-black text-title-h2 pb-2 pt-3 text-center lg:max-w-[600px] lg:!text-title-h3 lg:!mx-0 lg:!text-start lg:!pt-0">
              Frequently <br /> asked{' '}
              <span className="text-heat-100">questions</span>
            </h2>
            <div className="max-w-md px-5 py-2 text-black-alpha-72 text-body-large text-center lg:!mx-0 lg:!text-start lg:!max-w-none">
              Everything you need to know about Firecrawl.
            </div>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="lg:grid lg:grid-cols-2 gap-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={section.title} className="lg:mb-0 mb-8">
              <div className="lg:flex relative border-t border-border-faint">
                <div className="text-title-h5 flex-1 relative">
                  <div className="px-5 lg:px-16 py-6 lg:py-10 relative">
                    {section.title}
                  </div>
                </div>
              </div>
              
              <div className="lg:pt-28 lg:-ml-1 relative border-t border-border-faint lg:border-t-0">
                {section.questions.map((item, questionIndex) => {
                  const id = sectionIndex * 100 + questionIndex;
                  const isOpen = openQuestions.includes(id);
                  
                  return (
                    <div key={questionIndex} className="border-b border-border-faint relative">
                      <button 
                        className="text-label-large w-full p-5 lg:px-16 py-5 flex relative gap-4 items-center cursor-pointer text-left hover:bg-black-alpha-2 transition-colors"
                        onClick={() => toggleQuestion(sectionIndex, questionIndex)}
                      >
                        <div className="flex-1 min-w-0">{item.question}</div>
                        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                          <ChevronDown className="w-4.5 h-4.5 text-black-alpha-56" />
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-5 lg:px-16 pb-5 text-body-medium text-black-alpha-72">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;