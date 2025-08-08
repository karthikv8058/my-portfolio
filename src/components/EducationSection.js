import React from 'react';
import education from '../data/education';
import Section from './Section';

const EducationSection = React.forwardRef((props, ref) => (
  <Section id="education" title="Education" ref={ref}>
    <div className="flex flex-col gap-4">
      {education.map((edu) => (
        <div
          key={edu.institution + edu.degree}
          className="bg-black text-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-black hover:shadow-2xl hover:border hover:border-black group cursor-pointer relative overflow-hidden"
        >
          <div>
            <div className="font-semibold text-white group-hover:text-black transition-colors duration-300">{edu.institution}</div>
            <div className="text-gray-200 group-hover:text-gray-800 transition-colors duration-300">{edu.degree}</div>
          </div>
          <div className="text-sm text-gray-400 mt-2 md:mt-0 md:text-right group-hover:text-gray-700 transition-colors duration-300">
            {edu.year} | {edu.percentage}
          </div>
          <span className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  </Section>
));

export default EducationSection;
