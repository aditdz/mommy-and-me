import React from 'react';
import Table from './table';
import './style/index.css';
import workshops from '../../../../constants/Workshops';

const BuildTable = (props) => {
  let transformedclasses = Object.keys(props.classes)
    .map((clas) => {
      return [...Array(props.classes[clas])].map((_, i) => {
        return <Table key={clas + i} data={workshops[clas]} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedclasses.length === 0) {
    transformedclasses = <p>Please start adding your favorite classes</p>;
  }

  return (
    <div className='doS'>
      <table>
        <tr>
          <td>WorkshopName</td>
          <td>Day</td>
          <td>Hour</td>
          <td>StartDate</td>
        </tr>
        {transformedclasses}
      </table>
    </div>
  );
};
export default BuildTable;
