"use strict";

const btn = document.querySelector(".js__btn");
const input = document.querySelector(".js__input");
const list = document.querySelector(".js-shows-list");
const listFavorite = document.querySelector(".js-favorites-list");
let resetBtn = document.querySelector(".js-reset-btn");
const logBtn = document.querySelector(".js-log-btn");
let showList = [];
let favoritesList = [];

// function to get data from the server

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

function numberFavorites() {
  console.log(`Tienes ${favoritesList.length} favoritos`);
}

logBtn.addEventListener("click", numberFavorites);
