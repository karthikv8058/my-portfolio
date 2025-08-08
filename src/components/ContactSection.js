import React from 'react';
import contact from '../data/contact';
import Section from './Section';

const ContactSection = React.forwardRef((props, ref) => (
  <Section id="contact" title="Contact" ref={ref}>
    <div className="flex flex-col items-center gap-4 text-lg">
      <p className="text-gray-200 text-center max-w-xl mb-2">{contact.description}</p>
      <div className="flex flex-col gap-2 text-base">
        <div><span className="font-semibold text-yellow-300">Email:</span> <a href={`mailto:${contact.email}`} className="hover:underline text-gray-100">{contact.email}</a></div>
        <div><span className="font-semibold text-yellow-300">Phone:</span> <a href={`tel:${contact.phone}`} className="hover:underline text-gray-100">{contact.phone}</a></div>
        <div><span className="font-semibold text-yellow-300">Location:</span> <span className="text-gray-100">{contact.location}</span></div>
        <div className="flex gap-4 mt-2">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-yellow-300 transition-colors text-2xl">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-yellow-300 transition-colors text-2xl">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </Section>
));

export default ContactSection;
