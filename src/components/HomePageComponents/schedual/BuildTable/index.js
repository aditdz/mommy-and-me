import React from 'react';
import Table from './table';
import './style/index.css';

const BuildTable = props => {
  let transformedclasses = Object.keys(props.classes)
    .map(clas => {
      return [...Array(props.classes[clas])].map((_, i) => {
        return <Table key={clas + i} type={clas} />;
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
      <Table type='nothing' />
      {transformedclasses}
    </div>
  );
};
export default BuildTable;
