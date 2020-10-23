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
