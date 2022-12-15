// Fonction qui permet d'ajouter la classe responsive et rendre effectif le menu "burger" dans la navigation

function editNav() {
  var x = document.getElementById("myTopnav");
  let width = document.documentElement.clientWidth || window.innerWidth
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Lien entre les for et les valeurs des locations

// const locations = document.getElementsByClassName('checkbox-label')

// locations.for = locations.value

// Récupération des inputs et création de form data
const firstNameInput = document.getElementById('first')
const lastNameInput = document.getElementById('last')
const emailInput = document.getElementById('email')
const dateInput = document.getElementById('birthdate')
const quantityInput = document.getElementById('quantity')
const radioInput = document.querySelectorAll('input[type=radio]')
const radio = document.getElementById('location1')
const conditionsInput = document.getElementById('checkbox1')

// Création d'un event listener sur le submit btn
let checked = false
const submitBtn = document.getElementById('submit')
submitBtn.addEventListener("click", (event) => {

  for (let i = 0; i < radioInput.length; i ++) {
    if(radioInput[i].checked) {
      checked = true
    }
  }
  if (!checked) {
    radio.setCustomValidity("Veuillez choisir une ville")
    radio.reportValidity()
  } else {
    radio.setCustomValidity("")
  }
})



// Event listeners sur les inputs
// Prénom :
firstNameInput.addEventListener("input", (event) => {
  if (firstNameInput.validity.tooShort) {
    firstNameInput.setCustomValidity("Veuillez entrer un prénom avec au minimum 2 caractères")
    firstNameInput.reportValidity()
  } else {
    firstNameInput.setCustomValidity("")
  }
})

// Nom :

lastNameInput.addEventListener("input", (event) => {
  if (lastNameInput.validity.tooShort) {
    lastNameInput.setCustomValidity("Veuillez entrer un nom avec au minimum 2 caractères")
    lastNameInput.reportValidity()
  } else {
    lastNameInput.setCustomValidity("")
  }
})
// Email :

emailInput.addEventListener("input", (event) => {
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("Veuillez entrer une adresse email valide")
    emailInput.reportValidity()
  } else {
    emailInput.setCustomValidity("")
  }
})

// Quantité de tournois :

quantityInput.addEventListener("input", (event) => {
  if (quantityInput.validity.rangeOverflow) {
    quantityInput.setCustomValidity("Veuillez entrer une quantité inférieure à 100")
    quantityInput.reportValidity()
  } else if (quantityInput.validity.rangeUnderflow) {
    quantityInput.setCustomValidity("Veuillez entrer une quantité supérieur à 0")
    quantityInput.reportValidity()
  } else {
    quantityInput.setCustomValidity("")
  }
})

// Conditions d'utilisation :

conditionsInput.addEventListener("change", (event) => {
  if (this.checked) {
    conditionsInput.setCustomValidity("Veuillez accepter les conditions d'utilisation")
    conditionsInput.reportValidity()
  } else {
    conditionsInput.setCustomValidity("")
  }
})


// Fonction pour checker les valeurs du form

function validate() {
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture du formulaire

const closeBtn = document.getElementById('close')

closeBtn.addEventListener("click", event => {
  modalbg.style.display = "none"
})

