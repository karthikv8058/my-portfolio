import React from 'react';
import projects from '../data/projects';
import Section from './Section';

const ProjectsSection = React.forwardRef((props, ref) => (
  <Section id="projects" title="Projects" ref={ref}>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((proj) => (
        <div
          key={proj.title}
          className="bg-black text-white rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-black hover:shadow-2xl hover:border hover:border-black group cursor-pointer relative overflow-hidden"
        >
          <div className="font-semibold text-white mb-1 group-hover:text-black transition-colors duration-300">{proj.title}</div>
          {proj.role && <div className="text-xs text-gray-400 mb-1 group-hover:text-gray-700 transition-colors duration-300">{proj.role}</div>}
          <div className="text-gray-200 mb-2 group-hover:text-gray-800 transition-colors duration-300">{proj.description}</div>
          {proj.tools && (
            <div className="flex flex-wrap gap-1 mb-2">
              {proj.tools.map((tool) => (
                <span key={tool} className="bg-gray-900 text-white px-2 py-0.5 rounded text-xs group-hover:bg-gray-200 group-hover:text-black transition-colors duration-300 border border-black">{tool}</span>
              ))}
            </div>
          )}
          {proj.responsibilities && (
            <ul className="list-disc ml-6 text-gray-300 group-hover:text-gray-700 text-sm transition-colors duration-300">
              {proj.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          )}
          <span className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  </Section>
));

export default ProjectsSection;
