"use strict";

function reset() {
  localStorage.removeItem("favorites"); //por qué no lo borra?
  favoritesList = [];
  paintFavorites();
  paintShows();
  listenShows();
  listenFavorites();
  setLocalStorage();
}

resetBtn.addEventListener("click", reset);

function resetFavorite(ev) {
  console.log(favoritesList);
  const clicked = parseInt(ev.currentTarget.id);
  const indexFav = favoritesList.findIndex(function (favorite) {
    return favorite.id === clicked;
  });
  const isFavorite = indexFav !== -1;
  if (isFavorite === true) {
    favoritesList.splice(indexFav, 1);
  }
  console.log(favoritesList);
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
