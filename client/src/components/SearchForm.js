import React, { useContext, useState } from 'react';
import { SearchResultsContext } from '../contexts/SearchResultsContext';

export default function SearchForm() {
 const { handleSearch } = useContext(SearchResultsContext);
 const [search, setSearch] = useState('');
 const handleSubmit = e => {
  e.preventDefault();
  handleSearch(search);
 };
 return (
  <div>
   <form onSubmit={handleSubmit}>
    <input
     type="text"
     placeholder="Enter Search..."
     value={search}
     onChange={e => {
      setSearch(e.target.value);
     }}
     required
    />
    <button type="submit">
     <i className="fa fa-search" />
    </button>
   </form>
  </div>
 );
}
