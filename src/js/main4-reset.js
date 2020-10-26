"use strict";

// function to delete all favorite series

function reset() {
  favoritesList = [];
  localStorage.removeItem("favorites");
  paintFavorites();
  paintShows();
  listenShows();
  listenFavorites();
}

resetBtn.addEventListener("click", reset);

// function to delete one favorite serie

function resetFavorite(ev) {
  const clicked = parseInt(ev.currentTarget.id);
  const indexFav = favoritesList.findIndex(function (favorite) {
    return favorite.id === clicked;
  });
  const isFavorite = indexFav !== -1;
  if (isFavorite === true) {
    favoritesList.splice(indexFav, 1);
  }
  paintFavorites();
  listenFavorites();
  paintShows();
  listenShows();
  setLocalStorage();
}

function listenFavorites() {
  const favoriteItems = document.querySelectorAll(".js-favorite-item");
  for (const favoriteItem of favoriteItems) {
    favoriteItem.addEventListener("click", resetFavorite);
  }
}
listenFavorites();
