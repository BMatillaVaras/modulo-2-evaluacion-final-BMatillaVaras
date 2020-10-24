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
  paintFavorites();
  console.log(favoritesList);
}

function listenShows() {
  const showsItems = document.querySelectorAll(".js-show-item");
  for (const showItem of showsItems) {
    showItem.addEventListener("click", favoritesShows);
  }
}

function paintFavorites() {
  let html = "";
  for (let i = 0; i < favoritesList.length; i++) {
    html += `<li class="favorite-list" id="${i}">`;
    html += `<div class="favorite-list__container">`;
    if (favoritesList[i].image === null) {
      html += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?
      text=TV." alt="no existe imagen de la serie" class="favorite-list__container--img">`;
    } else {
      html += `<img src="${
        favoritesList[i].image.medium || favoritesList[i].image.original
      }" alt="imagen de la serie ${
        favoritesList[i].name
      }" class="favorite-list__container--img">`;
    }
    html += `</div>`;
    html += `<h4 = class="favorite-list__title">${favoritesList[i].name}</h4>`;
  }
  listFavorite.innerHTML = html;
}
