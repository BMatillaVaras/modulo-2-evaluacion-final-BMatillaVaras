"use strict";const btn=document.querySelector(".js__btn"),input=document.querySelector(".js__input"),list=document.querySelector(".js-shows-list");let showList=[],favoritesList=[];function getShowsData(s){s.preventDefault();const t=input.value;fetch("//api.tvmaze.com/search/shows?q="+t).then(s=>s.json()).then(s=>{0===s.length?list.innerHTML="No existe ninguna serie con ese nombre":showList=s,paintShows(),listenShows()})}function paintShows(){let s="";for(let t=0;t<showList.length;t++){let e="";e=-1!==favoritesList.findIndex((function(s,e){return s.id===showList[t].show.id}))?"show__item--favorite":"",s+=`<li class="shows-list js-show-item ${e}" id="${showList[t].show.id}">`,s+=`<h3 class="shows-list__title">${showList[t].show.name}</h3>`,s+='<div class="shows-list__container">',null===showList[t].show.image?s+='<img src="https://via.placeholder.com/210x295/ffffff/666666/?\n      text=TV." alt="no existe imagen de la serie"':s+=`<img src="${showList[t].show.image.medium||showList[t].show.image.original}" alt="imagen de la serie ${showList[t].show.name}"`,s+="</div>",s+="</li>"}list.innerHTML=s}function favoritesShows(s){const t=parseInt(s.currentTarget.id),e=favoritesList.findIndex((function(s,e){return s.id===t}));if(!0===(-1!==e))favoritesList.splice(e,1);else for(let s=0;s<showList.length;s++)showList[s].show.id===t&&favoritesList.push(showList[s].show);paintShows(),listenShows(),console.log(favoritesList)}function listenShows(){const s=document.querySelectorAll(".js-show-item");for(const t of s)t.addEventListener("click",favoritesShows)}btn.addEventListener("click",getShowsData);