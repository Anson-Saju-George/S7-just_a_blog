import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          About This Site
        </h1>
        <div className="space-y-4 text-base text-gray-700 leading-relaxed">
          {/*
            ABOUT PAGE CONTENT
            ====================
            Replace the content inside this <p> tag with your own "About" text.
            You can add more <p> tags if you need multiple paragraphs.
          */}
          <p>
            This website is a dedicated space for exploring the transformative impact of artificial intelligence. Our goal is to provide a clear, strategic framework for individuals and organizations to navigate the complexities of the AI revolution. We believe that with the right approach, what seems like an overwhelming wave of new technology can become a significant competitive advantage.
          </p>
          <p>
            Here, you'll find in-depth articles, analyses of emerging trends, and curated lists of tools designed to help you make informed decisions and implement AI effectively. Thank you for joining the conversation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
