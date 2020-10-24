"use strict";

const btn = document.querySelector(".js__btn");
const input = document.querySelector(".js__input");
const list = document.querySelector(".js-shows-list");
const listFavorite = document.querySelector(".js-favorites-list");
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
    });
}

btn.addEventListener("click", getShowsData);
