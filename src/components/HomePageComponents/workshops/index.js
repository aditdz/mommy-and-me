import React, { Component } from 'react';
import './Style/index.css';
import SelectWorkshop from './Select';
class Workshops extends Component {
  state = {
    value: ''
  };
  handle = event => {
    this.setState({
      value: event
    });
    console.log(this.state.value.value);
  };
  render() {
    return (
      <div className='containerw'>
        <h3>Which workshop you want to know about?</h3>

        <div className='select1'>
          <label for='workshops'>Our Workshops:</label>

          <SelectWorkshop
            change={this.handle}
            value={this.state.value}
            id='workshops'
            name='workshops'
          />
        </div>
        {this.state.value.value === 'Music' ? (
          <div className='containerw'>
            <img
              className='imagew'
              src='https://static.mommypoppins.com/styles/image620x420/s3/zumbini5_edit.jpg'
              alt='Music Class'
            />
            <p className='textw'>
              Who wouldn’t enjoy listening to some live music? While baby’s
              little, you can bounce and rock her to the beat . As she gets
              older, baby can use instruments and clap and dance around. She
              just might learn some stuff along the way too. Try Music Together
              for classes near you.
            </p>
          </div>
        ) : this.state.value.value === 'Yoga' ? (
          <div className='containerw'>
            <img
              className='imagew'
              src='https://cdn.kinsights.com/cache/c5/7c/c57c4fe75d506266567fc369fad850e0.jpg'
              alt='Yoga Class'
            />
            <p className='textw'>
              Not only is mom-and-baby yoga an awesome way to release some of
              the stress of new motherhood, but you can tone that postbaby bod—
              and bring baby along for some bonding. Check your favorite yoga
              studio for times and pricing.
            </p>
          </div>
        ) : this.state.value.value === 'Swimming' ? (
          <div className='containerw'>
            <img
              className='imagew'
              src='https://www.swimway.co.uk/wp-content/uploads/2019/03/SwimWay_StockImage_04-1024x576.jpg'
              alt='swimming class'
            />
            <p className='textw'>
              We’re not saying you’re training the next Michael Phelps (but hey,
              you never know!). Exposing baby to the pool now gives her plenty
              of time to get acclimated to water, plus it’s a great chance to
              bond. Try your local YMCA for classes specially designed for
              babies.
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Workshops;
