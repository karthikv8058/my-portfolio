import React from 'react';
import experience from '../data/experience';
import Section from './Section';

const ExperienceSection = React.forwardRef((props, ref) => (
  <Section id="experience" title="Experience" ref={ref}>
    <div className="flex flex-col gap-6">
      {experience.map((exp) => (
        <div
          key={exp.company + exp.role}
          className="bg-black text-white rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-black hover:shadow-2xl hover:border hover:border-black group cursor-pointer relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-white group-hover:text-black transition-colors duration-300">{exp.company}</span>
            <span className="text-xs text-gray-400 group-hover:text-gray-700 transition-colors duration-300">{exp.duration}</span>
          </div>
          <div className="font-medium text-gray-200 group-hover:text-gray-800 transition-colors duration-300">{exp.role}</div>
          <ul className="list-disc ml-6 mt-2 text-gray-300 group-hover:text-gray-700 text-sm transition-colors duration-300">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          <span className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  </Section>
));

export default ExperienceSection;
