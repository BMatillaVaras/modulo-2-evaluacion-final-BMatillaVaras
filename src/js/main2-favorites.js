"use strict";

function favoritesShows(ev) {
  const clicked = parseInt(ev.currentTarget.id);
  const indexFav = favoritesList.findIndex(function (show, index) {
    return show.id === clicked;
  });
  const isFavorite = indexFav !== -1;
  if (isFavorite === true) {
    favoritesList.splice(indexFav, 1);
  } else {
    for (let i = 0; i < showList.length; i++) {
      if (showList[i].show.id === clicked) {
        favoritesList.push(showList[i].show);
      }
    }
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
