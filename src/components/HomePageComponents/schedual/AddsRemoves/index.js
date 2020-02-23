import React from 'react';
import './style/index.css';
import AddRemove from './addRemove';
const controls = [
  { label: 'Music', type: 'Music' },
  { label: 'Yoga', type: 'Yoga' },
  { label: 'Swimming', type: 'Swimming' }
];
const AddsRemoves = props => {
  return (
    <div className='SchedualCons'>
      <h4>Total price:{props.price}$</h4>
      {controls.map(cntr => {
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
