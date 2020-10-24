"use strict";

// guardamos en localStorage

function setLocalStorage() {
  const stringifyFavorites = JSON.stringify(favoritesList);
  localStorage.setItem("favorites", stringifyFavorites);
}

// traemos del localStorage

function getLocalStorage() {
  const localStorageFavorites = localStorage.getItem("favorites");
  if (localStorageFavorites !== null) {
    favoritesList = JSON.parse(localStorageFavorites);
  }
  paintFavorites();
}

getLocalStorage();
