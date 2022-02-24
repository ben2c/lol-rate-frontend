import React from 'react';
import './Champion.css';

const Stats = ( {numChampions, topThree} ) => {

  let items = topThree.map((i, key) => {
    return <div key={key}>{i.name} </div>
  })

  return (
    <div className='stats-container'>
      <i className='stats' /><strong>Total Champions</strong><p>{numChampions} </p>
      <i className='stats' className='hotjar icon hot-class' /><strong>Top Champions</strong>
      {items}

    </div>
  );
}



export default Stats