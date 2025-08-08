import React from 'react';
import skills from '../data/skills';
import Section from './Section';

const SkillsSection = React.forwardRef((props, ref) => (
  <Section id="skills" title="Skills" ref={ref}>
    <div className="flex flex-wrap gap-2 justify-center">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-black hover:shadow-lg border border-black cursor-pointer group relative overflow-hidden"
        >
          {skill.name} <span className="text-xs text-gray-400 group-hover:text-gray-700 transition-colors duration-300">({skill.level})</span>
          <span className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </span>
      ))}
    </div>
  </Section>
));

export default SkillsSection;
