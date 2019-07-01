import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SearchResultsContext = createContext();
export default function SearchResultsContextProvider(props) {
 const [item, setItem] = useState({});
 const [search, setSearch] = useState('');

 const handleSearch = str => {
  setSearch(str);
 };

 //Trigger api call when search value is updated
 useEffect(() => {
  const getData = async () => {
   const result = await axios.get('http://localhost:3001/search', {
    params: {
     search: search
    }
   });
   setItem(result.data);
  };
  if (search.length > 0) {
   getData();
  }
 }, [search]);

 return (
  <SearchResultsContext.Provider value={{ item, handleSearch }}>
   {props.children}
  </SearchResultsContext.Provider>
 );
}
