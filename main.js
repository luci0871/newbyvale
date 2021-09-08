"use strict";
window.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("working");
}

function init() {
  fetch("https://byvalentin.skmmd.dk/wp-json/wp/v2/products?_embed")
    .then((initial) => initial.json())
    .then(callBack);
}

function callBack(data) {
  console.log(data);
  data.forEach(showService);
}

function showService(singleService) {
  console.log(singleService);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  const img_url = singleService._embedded["wp:featuredmedia"][0].source_url;
  clone.querySelector(".name").textContent = singleService.title.rendered;
  clone.querySelector(".price").innerHTML = singleService.price;
  // clone.querySelector(".sdesc").innerHTML = singleService.shortdescription;
  clone.querySelector(".product-img").src = img_url;

  clone.querySelector("button").addEventListener("click", () => {
    const modal = document.querySelector(".modal-background");
    const img_urlTwo =
      singleService._embedded["wp:featuredmedia"][0].source_url;
    modal.classList.remove("hide");
    modal.querySelector("h3").textContent = singleService.title.rendered;
    modal.querySelector("p").textContent = singleService.longdescription;
    modal.querySelector(".modal-image").src = img_urlTwo;

    const elmaint = document.querySelector(".cont");
    elmaint.appendChild(clone);
  });

  const elmain = document.querySelector(".content");
  elmain.appendChild(clone);
}

const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
  modal.classList.add("hide");
});
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const toTop = document.querySelector("#myBtn");
toTop.addEventListener("click", topFunction);
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
