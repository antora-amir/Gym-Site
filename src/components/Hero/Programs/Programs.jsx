import React from 'react';
import './Programs.css';
import {ProgramsData} from '../../data/ProgramsData';
import RightArrow from '../../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/*  header */}
      <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      <div className="program-categories">
        {ProgramsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span> <span><img src={RightArrow} alt="" /></span>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Programs
