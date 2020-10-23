"use strict";

const btn = document.querySelector(".js__btn");
const input = document.querySelector(".js__input");
const list = document.querySelector(".js-shows-list");
let showList = "";

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
    });
}

function paintShows() {
  let html = "";
  for (let i = 0; i < showList.length; i++) {
    html += `<li>`;
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

btn.addEventListener("click", getShowsData);
