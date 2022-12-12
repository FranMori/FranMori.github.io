// Fonction qui permet d'ajouter la classe responsive et rendre effectif le menu "burger" dans la navigation

function editNav() {
  var x = document.getElementById("myTopnav");
  let width = document.documentElement.clientWidth || window.innerWidth
  if (x.className === "topnav" && width <= 768) {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


