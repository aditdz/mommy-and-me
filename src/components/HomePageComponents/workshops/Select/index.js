import React from 'react';
import Select from 'react-select';
import './style/index.css';
const options = [
  { value: 'Music', label: 'Music' },
  { value: 'Yoga', label: 'Yoga' },
  { value: 'Swimming', label: 'Swimming' }
];

const SelectWorkshop = props => {
  return (
    <div className='container'>
      <Select value={props.value} onChange={props.change} options={options} />
    </div>
  );
};

export default SelectWorkshop;
