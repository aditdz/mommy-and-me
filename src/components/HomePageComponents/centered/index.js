import React from 'react';
import './Style/index.css';

const Centered = () => {
  return (
    <div className='Centered'>
      <div className='container1'>
        <img
          className='image1'
          src='http://thedanceworkshop.us/dance/wp-content/uploads/2016/01/mommy-me.jpg'
          alt='our workshop'
        />
        <div className='text1 middle1'>Mommy&me workshop</div>
        <div>
          <p className='textt'>
            Joining a playgroup is a fun way to get baby to experience new
            things and for you to get out and make new-mom friends. Play
            sessions can be formal classes with music, movement, songs and
            learning at places such our club's salons and outdoor.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Centered;
