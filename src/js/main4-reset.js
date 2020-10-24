"use strict";

function reset() {
  favoritesList = [];
  paintFavorites();
  paintShows();
  listenShows();
  setLocalStorage();

  console.log(favoritesList);
}

resetBtn.addEventListener("click", reset);
