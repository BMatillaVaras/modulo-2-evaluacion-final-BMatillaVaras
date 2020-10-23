"use strict";

const btn = document.querySelector(".js__btn");
const input = document.querySelector(".js__input");
const list = document.querySelector(".js-shows-list");
let showList = [];
let favoritesList = [];

function getShowsData(ev) {
  ev.preventDefault();
  const inputValue = input.value;
  //console.log(inputValue);
  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      if (data.length === 0) {
        list.innerHTML = "No existe ninguna serie con ese nombre";
      } else {
        showList = data;
        //console.log(showList);
      }
      paintShows();
      listenShows();
    });
}

btn.addEventListener("click", getShowsData);

"use strict";

function paintShows() {
  let html = "";
  for (let i = 0; i < showList.length; i++) {
    let classF = "";
    const favoriteIndex = favoritesList.findIndex(function (show, index) {
      return show.id === showList[i].show.id;
    });
    if (favoriteIndex !== -1) {
      classF = "show__item--favorite";
    } else {
      classF = "";
    }
    html += `<li class="js-show-item ${classF}" id="${showList[i].show.id}">`;
    html += `<h3>${showList[i].show.name}</h3>`;
    html += `<div class="container">`;
    if (showList[i].show.image === null) {
      html += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?
      text=TV." alt="no existe imagen de la serie"`;
    } else {
      html += `<img src="${
        showList[i].show.image.medium || showList[i].show.image.original
      }" alt="imagen de la serie ${showList[i].show.name}"`;
    }
    html += `</div>`;
    html += `</li>`;
  }
  list.innerHTML = html;
}

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

//# sourceMappingURL=main.js.map
