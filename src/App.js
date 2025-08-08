

import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';


function App() {
  return (
    <div className="bg-neutral-900 min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <main className="flex flex-col snap-y snap-mandatory" style={{ scrollSnapType: 'y mandatory' }}>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="text-center text-gray-500 py-6 text-sm">
        &copy; {new Date().getFullYear()} Karthik V. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
