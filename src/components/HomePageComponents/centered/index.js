import React from 'react';
import './Style/index.css';
import WorkshopsDataText from '../../../constants/WorkshopsData';

const Centered = () => {
  return (
    <div className='center'>
      <img
        className='center__image'
        src='http://thedanceworkshop.us/dance/wp-content/uploads/2016/01/mommy-me.jpg'
        alt='our workshop'
      />
      <div>
        <p className='center__text'>{WorkshopsDataText['General']}</p>
      </div>
    </div>
  );
};
export default Centered;
