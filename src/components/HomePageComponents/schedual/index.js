import React, { Component } from 'react';
import './Style/index.css';
import BuildTable from './BuildTable';
import AddsRemoves from './AddsRemoves';

const PRICES = {
  Music: 25,
  Yoga: 30,
  Swimming: 40,
};

class Schedual extends Component {
  state = {
    classes: {
      Music: 0,
      Yoga: 0,
      Swimming: 0,
    },
    price: 0,
    registrable: false,
  };

  addClasses = (type) => {
    const oldclass = this.state.classes[type];
    const updateclass = oldclass + 1;
    const updated = { ...this.state.classes };
    updated[type] = updateclass;
    const newprice = this.state.price + PRICES[type];
    this.setState({
      classes: updated,
      price: newprice,
    });
  };
  removeClasses = (type) => {
    const oldclass = this.state.classes[type];
    if (oldclass <= 0) {
      return;
    }
    const updateclass = oldclass - 1;
    const updated = { ...this.state.classes };
    updated[type] = updateclass;
    const newprice = this.state.price - PRICES[type];
    this.setState({
      classes: updated,
      price: newprice,
    });
  };
  registrable = () => {
    this.setState({
      classes: {
        Music: 0,
        Yoga: 0,
        Swimming: 0,
      },
      price: 0,
    });
  };
  render() {
    return (
      <div>
        <h2>Make your own Schedual</h2>
        <div className='Table'>
          <BuildTable classes={this.state.classes} />
        </div>
        <div className='SchedualCons'>
          <AddsRemoves
            registrable={this.registrable}
            price={this.state.price}
            add={this.addClasses}
            remove={this.removeClasses}
          />{' '}
        </div>
      </div>
    );
  }
}
export default Schedual;
