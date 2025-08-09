import React from 'react';
import Section from './Section';
import liveWorks from '../data/liveWorks';

const LiveWorksSection = React.forwardRef((props, ref) => (
  <Section id="liveworks" title="Live Works" ref={ref}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {liveWorks.map((work) => (
        <a
          key={work.title}
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-black/80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-yellow-300 flex flex-col md:flex-row hover:scale-105 hover:bg-white hover:text-black hover:shadow-2xl hover:border hover:border-black"
        >
          <img
            src={work.thumbnail}
            alt={work.title}
            className="w-full md:w-48 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="p-5 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-yellow-300 mb-2 group-hover:text-yellow-400 transition-colors">{work.title}</h3>
            <p className="text-gray-200 group-hover:text-gray-900 transition-colors">{work.description}</p>
            <span className="mt-3 inline-block text-sm text-yellow-200 group-hover:text-yellow-500 font-semibold">Visit Site &rarr;</span>
          </div>
        </a>
      ))}
    </div>
  </Section>
));

export default LiveWorksSection;