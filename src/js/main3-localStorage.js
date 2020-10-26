"use strict";

// function save to localStorage

function setLocalStorage() {
  const stringifyFavorites = JSON.stringify(favoritesList);
  localStorage.setItem("favorites", stringifyFavorites);
}

// function to get from localStorage

function getLocalStorage() {
  const localStorageFavorites = localStorage.getItem("favorites");
  if (localStorageFavorites !== null) {
    favoritesList = JSON.parse(localStorageFavorites);
  }
  paintFavorites();
}

getLocalStorage();
