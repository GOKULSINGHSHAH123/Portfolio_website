import React from 'react';
import './Card.css'

const Card = ({title,isActive,onClick}) => {
  return (
      
    <div className={`skills-card${isActive? "active":""  }`}
      onClick={()=>onClick()}
    >
      <div className='Card'>
      <span>{title}</span>
      </div>
      
    </div>
  );
}



export default Card;
