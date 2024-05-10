import React, { useState } from 'react';
import './Skills.css';
import Card from '../Card/Card';
import data from '../../assets/data';
import SkillsInfoCard from '../SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState('Frontend');

  const handleSelectedSkill = (title) => {
    setSelectedSkill(title);
  };

  return (
    <section id="skills" className="skills-container">
      <h1>Skills</h1>

      <div className="skills-content">
        
        <div className="skills">
          {data.map((item) => (
            <Card
              key={item.id} // Assuming there's an 'id' field in your data
              title={item.title}
              icon={item.icon}
              onClick={() => handleSelectedSkill(item.title)}
            />
          ))}
        </div>

        <div className="skills-info">
          {selectedSkill && (
            <SkillsInfoCard
              heading={selectedSkill}
              skills={data.find((item) => item.title === selectedSkill)?.skills || []} // Handling null or undefined skills
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;