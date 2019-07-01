import React from 'react';
import ItemSummary from './ItemSummary';

export default function ResultTypeContainer(props) {
 let { name, array } = props;
 name = name === 'undefined' ? 'other' : name;
 const list = array.map((item, i) => {
  return <ItemSummary item={item} key={i + '-' + item.trackId} />;
 });
 return (
  <div>
   <h1>{name}s:</h1>
   <ul className="result-container">{list}</ul>
  </div>
 );
}
