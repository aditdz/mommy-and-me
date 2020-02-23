import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style/index.css';
class Table extends Component {
  render() {
    let mine = null;

    switch (this.props.type) {
      case 'nothing':
        mine = (
          <tr>
            <td>
              <strong>Workshop</strong>
            </td>
            <td>
              <strong>Day</strong>
            </td>
            <td>
              <strong>Hour</strong>
            </td>
            <td>
              <strong>Start Date</strong>
            </td>
          </tr>
        );

        break;
      case 'Music':
        mine = (
          <tr>
            <td>Music</td>
            <td>Monday</td>
            <td>13-14:30</td>
            <td>17.May.2020</td>
          </tr>
        );

        break;
      case 'Yoga':
        mine = (
          <tr>
            <td>Yoga</td>
            <td>Wendsday</td>
            <td>10-12</td>
            <td>11.Fev.2020</td>
          </tr>
        );

        break;
      case 'Swimming':
        mine = (
          <tr>
            <td>Swimming</td>
            <td>Tuesday</td>
            <td>15-16:30</td>
            <td>21.Jan.2020</td>
          </tr>
        );

        break;

      default:
        mine = null;
    }
    return <div className='cor'>{mine}</div>;
  }
}
Table.propTypes = {
  type: PropTypes.string.isRequired
};
export default Table;
