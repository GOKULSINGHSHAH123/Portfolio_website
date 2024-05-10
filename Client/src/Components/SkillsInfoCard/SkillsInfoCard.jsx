import React from 'react';
import './SkillsInfoCard.css';

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className='SkillCard'>
      
      <p id='heading'>{heading}</p>

      <div className="skill-info-content">
        {skills.map((item, index) => (
          
          <React.Fragment key={`skill_${index}`}>

            <div className="skill-info">

              <p>{item.skill}</p>
              <div className="percentage">{item.percentage}</div>
              </div>

              <div className="skill-progress-bg">
                <div id="skill-progress" style={{ width: item.percentage }}/>
              </div>
            
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SkillsInfoCard;
