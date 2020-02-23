import React from 'react';
import './Style/index.css';

const AddRemove = props => {
  return (
    <div className='SchedualCon'>
      <div className='llabel'>{props.label}</div>
      <button onClick={props.add}>Add</button>
      <button onClick={props.remove}> Remove</button>
    </div>
  );
};
export default AddRemove;
