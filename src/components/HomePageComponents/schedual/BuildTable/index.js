import React from 'react';
import Table from './table';
import './style/index.css';

const BuildTable = props => {
  console.log('props.classes', props.classes);
  // let transformedclasses = Object.keys(props.classes)
  //   .map(clas => {
  //     return [...Array(props.classes[clas])].map((_, i) => {
  //       return <Table key={clas + i} type={clas} />;
  //     });
  //   })
  //   .reduce((arr, el) => {
  //     return arr.concat(el);
  //   }, []);
  // if (transformedclasses.length === 0) {
  //   transformedclasses = <p>Please start adding your favorite classes</p>;
  // }
  const tableData = [];
  Object.keys(props.classes).forEach(singleClassName => {
    tableData.push({
      type: singleClassName,
      count: props.classes[singleClassName]
    });
  });

  console.log('tableData', tableData);
  return (
    <div className='doS'>
      <Table type='nothing' />
      {/* {transformedclasses} */}
      {tableData.map(singleClass =>
        Array(singleClass.count).map((takenClass, i) => (
          <Table key={takenClass.type + i} type={takenClass.type} />
        ))
      )}
    </div>
  );
};
export default BuildTable;
