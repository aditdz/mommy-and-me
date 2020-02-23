import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Music', label: 'Music' },
  { value: 'Yoga', label: 'Yoga' },
  { value: 'Swimming', label: 'Swimming' }
];

class SelectWorkshop extends Component {
  render() {
    return (
      <div className='container'>
        <Select
          value={this.props.value}
          onChange={this.props.change}
          options={options}
        />
      </div>
    );
  }
}

export default SelectWorkshop;
