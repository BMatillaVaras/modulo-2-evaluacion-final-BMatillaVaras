"use strict";

function favoritesShows(ev) {
  const clicked = parseInt(ev.currentTarget.id);
  const indexFav = favoritesList.indexOf(clicked);
  const isFavorite = indexFav !== -1;
  if (isFavorite === false) {
    favoritesList.push(clicked);
  } else {
    favoritesList.splice(indexFav, 1);
  }
  paintShows();
  listenShows();
  console.log(favoritesList);
}

function listenShows() {
  const showsItems = document.querySelectorAll(".js-show-item");
  for (const showItem of showsItems) {
    showItem.addEventListener("click", favoritesShows);
  }
}
