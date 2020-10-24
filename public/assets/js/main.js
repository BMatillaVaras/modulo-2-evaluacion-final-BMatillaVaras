"use strict";

const btn = document.querySelector(".js__btn");
const input = document.querySelector(".js__input");
const list = document.querySelector(".js-shows-list");
const listFavorite = document.querySelector(".js-favorites-list");
let resetBtn = document.querySelector(".js-reset-btn");
let showList = [];
let favoritesList = [];

function getShowsData(ev) {
  ev.preventDefault();
  const inputValue = input.value;
  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      showList = data;
      paintShows();
      listenShows();
      paintFavorites();
      listenFavorites();
    });
}

btn.addEventListener("click", getShowsData);

"use strict";

function paintShows() {
  let html = "";
  for (let i = 0; i < showList.length; i++) {
    let classF = "";
    const favoriteIndex = favoritesList.findIndex(function (show) {
      return show.id === showList[i].show.id;
    });
    if (favoriteIndex !== -1) {
      classF = "show__item--favorite";
    } else {
      classF = "";
    }
    html += `<li class="shows-list js-show-item ${classF}" id="${showList[i].show.id}">`;
    html += `<h3 class="shows-list__title">${showList[i].show.name}</h3>`;
    html += `<div class="shows-list__container">`;
    if (showList[i].show.image === null) {
      html += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?
      text=TV." alt="no existe imagen de la serie">`;
    } else {
      html += `<img src="${
        showList[i].show.image.medium || showList[i].show.image.original
      }" alt="imagen de la serie ${showList[i].show.name}">`;
    }
    html += `</div>`;
    html += `</li>`;
  }
  list.innerHTML = html;
  listenFavorites();
}

"use strict";

function favoritesShows(ev) {
  const clicked = parseInt(ev.currentTarget.id);
  const indexFav = favoritesList.findIndex(function (show) {
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
  setLocalStorage();
  listenFavorites();
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
    html += `<li class="favorite-list js-favorite-item" id="${favoritesList[i].id}">`;
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
  listenFavorites();
}

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

//# sourceMappingURL=main.js.map
