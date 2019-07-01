import React from 'react';
import SearchResultsContextProvider from './contexts/SearchResultsContext';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';
import FavoritesContextProvider from './contexts/FavoritesContext';
import FavList from './components/FavList';

function App() {
 return (
  <div className="App">
   <FavoritesContextProvider>
    <SearchResultsContextProvider>
     <SearchForm />
     <FavList />
     <ResultList />
    </SearchResultsContextProvider>
   </FavoritesContextProvider>
  </div>
 );
}

export default App;
