import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function ItemSummary(props) {
 const { item } = props;
 const { favorites, addFavorite, removeFavorite } = useContext(
  FavoritesContext
 );

 //check against list of favorites to see if item is already a favorite and handle which button to display Add or Remove
 let isFavorite = false;
 favorites.forEach(favorite => {
  if (favorite.trackId === item.trackId) {
   isFavorite = true;
  }
 });
 const btn = isFavorite ? (
  <button onClick={() => removeFavorite(item.trackId)}>
   Remove from Favorites
  </button>
 ) : (
  <button
   onClick={() => {
    addFavorite(item);
   }}
  >
   Add to Favorites
  </button>
 );
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 return (
  <li className="list-item">
   <a href={item.trackViewUrl} target="_blank">
    <img src={item.artworkUrl100} alt={item.artistName} />
   </a>
   <p>
    <b>{item.trackName}</b> <br />
    Genre: {item.primaryGenreName}
    <br />
    <a href={item.trackViewUrl} target="_blank">
     View on iTunes
    </a>
   </p>
   {btn}
  </li>
 );
}
