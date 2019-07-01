import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import ItemSummary from './ItemSummary';

export default function FavList() {
 const { favorites } = useContext(FavoritesContext);
 const list = favorites.map((item, i) => {
  return <ItemSummary item={item} key={'fav-' + i} />;
 });
 if (list.length < 1) {
  return <div />;
 }
 return (
  <div>
   <h1>Favorites:</h1>
   <ul className="result-container">{list}</ul>
  </div>
 );
}
