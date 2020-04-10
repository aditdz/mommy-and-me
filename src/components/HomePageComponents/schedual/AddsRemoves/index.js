import React from 'react';
import './style/index.css';
import AddRemove from './addRemove';
const controls = [
  { label: <p className='label1'>Music</p>, type: 'Music' },
  { label: <p className='label2'>Yoga</p>, type: 'Yoga' },
  { label: <p className='label3'>Swimming</p>, type: 'Swimming' },
];
const AddsRemoves = (props) => {
  return (
    <div className='SchedualCons'>
      <h4 className='price'>Total price:{props.price}$</h4>
      {controls.map((cntr) => {
        return (
          <AddRemove
            remove={() => props.remove(cntr.type)}
            add={() => props.add(cntr.type)}
            key={cntr.label}
            label={cntr.label}
          />
        );
      })}
      <button onClick={props.registrable} className='regBtn'>
        registrate now
      </button>
    </div>
  );
};
export default AddsRemoves;
