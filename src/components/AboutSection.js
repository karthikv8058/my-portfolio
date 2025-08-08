import React from 'react';
import Section from './Section';
import { useState, useEffect } from 'react';
// Make sure the file exists at this path, or update the path below if it's located elsewhere
import resumePDF from '../data/Karthik-v-8129198487.pdf';

const typingText = "I'm Karthik V";
const typingSpeed = 200; // ms per character

const AboutSection = React.forwardRef((props, ref) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            setDisplayedText(typingText.slice(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === typingText.length) {
                clearInterval(interval);
            }
        }, typingSpeed);
        return () => clearInterval(interval);
    }, []);

    return (
        <Section id="me" title="" ref={ref}>
            <div className="text-lg text-gray-700 max-w-2xl mx-auto">
                <h6 className="text-yellow-300 text-lg font-semibold mb-2 animate-pulse">Hi There !</h6>
                <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-300 mb-4 drop-shadow-lg">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                </h1>
                <p>
                    a Senior React Front-End Developer with a passion for building scalable, user-centric web applications. I have extensive experience in React, Redux, and modern front-end technologies, and I enjoy collaborating with teams to deliver high-quality products.
                </p>
                <a
                  href={resumePDF}
                  download="KarthikV_Resume.pdf"
                  className="inline-block mt-6 px-6 py-3 bg-yellow-300 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  Download Resume
                </a>
            </div>
        </Section>
    );
});

export default AboutSection;
