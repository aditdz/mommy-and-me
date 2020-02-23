import React, { Component } from 'react';
import './Style/index.css';
class Form extends Component {
  state = {
    name: '',
    email: '',
    feedback: '',
    show: false
  };
  forInput1 = e => {
    this.setState({
      name: e.target.value
    });
  };
  forInput2 = event => {
    this.setState({
      email: event.target.value
    });
  };
  forInput3 = e => {
    this.setState({
      feedback: e.target.value
    });
  };
  formm = () => {
    this.setState({
      name: '',
      email: '',
      feedback: ''
    });
  };
  form1 = () => {
    const shown = this.state.show;
    this.setState({
      show: !shown
    });
  };

  render() {
    return (
      <div className='container'>
        <button className='button1 row' onClick={this.form1}>
          Please Submitt your feedback about our site
        </button>

        {this.state.show ? (
          <div>
            <form>
              <div className='row'>
                {' '}
                <div className='col-25'>
                  <label for='name'>Name:</label>
                </div>{' '}
                <div className='col-75'>
                  <input
                    id='name'
                    onChange={this.forInput1}
                    type='text'
                    placeholder='Full Name'
                    value={this.state.name}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-25'>
                  <label for='email'>Email:</label>
                </div>
                <div className='col-75'>
                  <input
                    id='email'
                    onChange={this.forInput2}
                    type='text'
                    placeholder='Email Adress'
                    value={this.state.email}
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-25'>
                  <label for='feedback'>Feedback:</label>
                </div>
                <div className='col-75'>
                  <input
                    className='f-b ii'
                    id='feedback'
                    onChange={this.forInput3}
                    value={this.state.feedback}
                    type='text'
                    placeholder='What is your feedback'
                  />
                </div>
              </div>
              <button className='button2 row' onClick={this.formm}>
                Submit
              </button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Form;
