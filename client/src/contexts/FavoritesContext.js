import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();
export default function FavoritesContextProvider(props) {
 const [favorites, setFavorites] = useState([]);

 useEffect(() => {
  if (window.localStorage.favorites) {
   setFavorites(JSON.parse(window.localStorage.getItem('favorites')));
  }
 }, []);

 //ADD A NEW FAVORITE - Create the favorites property in Local Storage if it doesn't exist
 // stringify the value favorites when setting it local storage and parse when pulling it out of local storage.
 const addFavorite = item => {
  if (!window.localStorage.favorites) {
   window.localStorage.setItem('favorites', JSON.stringify([item]));
  } else {
   const favObj = JSON.parse(window.localStorage.getItem('favorites'));
   window.localStorage.setItem('favorites', JSON.stringify([...favObj, item]));
  }
  setFavorites([...favorites, item]);
 };
 //REMOVE FAVORITE - Filter the existing favorites to remove the selected item and store in local storage as a JSON string
 const removeFavorite = id => {
  const removedFav = favorites.filter(favorite => favorite.trackId !== id);
  setFavorites(removedFav);
  window.localStorage.setItem('favorites', JSON.stringify(removedFav));
 };

 return (
  <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
   {props.children}
  </FavoritesContext.Provider>
 );
}
