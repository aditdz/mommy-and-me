import React from 'react';
import useStyles from './Style/index.style';
import WorkshopsDataText from '../../../constants/WorkshopsData';

const Centered = () => {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <div className={classes.photodiv}>
        <div className='phototitle'>
          {' '}
          <h1>Learn & Play</h1>
          <p className='massage'>
            We work every day to build the foundations for amazing <br />
            futures, both for child and for our community.
          </p>
        </div>

        <svg
          className='svgphoto'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#fff'
            fill-opacity='1'
            d='M0,160L80,154.7C160,149,320,139,480,144C640,149,800,171,960,165.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div>
        Icons made by{' '}
        <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
          Freepik
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div>
      <div>
        <p className={classes.center__text}>{WorkshopsDataText['General']}</p>
      </div>
    </div>
  );
};
export default Centered;
