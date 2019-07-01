import React, { useContext } from 'react';
import { SearchResultsContext } from '../contexts/SearchResultsContext';
import ResultTypeContainer from './ResultType';

export default function ResultList() {
 const { item } = useContext(SearchResultsContext);
 const resultTypes = Object.keys(item);
 return resultTypes.map(type => {
  return (
   <ResultTypeContainer key={'result-' + type} name={type} array={item[type]} />
  );
 });
}
