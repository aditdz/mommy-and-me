import React from 'react';
import './Style/index.css';
function Table(props) {
  const { data } = props;
  return (
    <tr>
      <td>{data.WorkshopName}</td>
      <td>{data.Day}</td>
      <td>{data.Hour}</td>
      <td>{data.StartDate}</td>
    </tr>
  );
}

export default Table;
