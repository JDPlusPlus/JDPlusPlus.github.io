import { useState } from 'react';
import NavItem, { navItems } from './NavItem/NavItem.tsx';
import './App.css';
import Section, { allSections } from './Section/Section';

function showSection(sectionId: string) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Show selected section
  document.getElementById(sectionId)!.classList.add('active');

  // Update active button
  document.querySelectorAll('nav button').forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector(`button[onclick="showSection('${sectionId}')"]`)!.classList.add('active');
}

const App = () => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <div className="app">
      <div className="portfolio">

        <div className="header">
          <div className="title">Software Engineer</div>
          <h1>Your Name</h1>
          <p>A brief tagline about yourself</p>
        </div>
        <nav>
          {navItems.map(({key, icon, label}) => (
            <NavItem
              key={key}
              icon={icon}
              label={label}
              isActive={activeSection === key}
              onClick={() => setActiveSection(key)}
            />
          ))}
        </nav>
    
        <div className="content">
          {activeSection in allSections && (
            <Section
              title={allSections[activeSection as keyof typeof allSections].title}
              content={allSections[activeSection as keyof typeof allSections].content}
            />
          )}
        </div>

         
      </div>
      </div>
  );
};

export default App;