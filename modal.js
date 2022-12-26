// Fonction pour rendre le site responsive
function editNav() {
  var x = document.getElementById("myTopnav");
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

// Récupération des inputs et des messages d'erreurs et créations d'objets
const firstNameInput = document.getElementById('first')
const lastNameInput = document.getElementById('last')
const emailInput = document.getElementById('email')
const dateInput = document.getElementById('birthdate')
const quantityInput = document.getElementById('quantity')
const radioInput = document.querySelectorAll('input[type=radio]')
const conditionsInput = document.getElementById('checkbox1')

const formObject = {
  first : firstNameInput,
  last : lastNameInput,
  email : emailInput,
  date : dateInput,
  quantity : quantityInput,
  radio : radioInput,
  conditions : conditionsInput
}

const firstError = document.getElementById('firstError')
const lastError = document.getElementById('lastError')
const emailError = document.getElementById('emailError')
const dateError = document.getElementById('dateError')
const quantityError = document.getElementById('quantityError')
const radioError = document.getElementById('radioError')
const conditionsError = document.getElementById('conditionsError')

const errorObject = {
  firstError : firstError,
  lastError : lastError,
  emailError : emailError,
  dateError : dateError,
  quantityError : quantityError,
  radioError : radioError,
  conditionsError : conditionsError
}

// Calcul de l'année actuelle pour le champ date
let today = new Date()
let  curentYear = today.getFullYear();
console.log(curentYear -3 )


// Ajout d'un event listener sur le bouton submit pour checker les valeurs du form
let data = []

  const submitBtn = document.getElementById('submit')
submitBtn.addEventListener("click", (event) => {
  data = []
  if (formObject.first.value.length < 2) {
    errorObject.firstError.textContent = "Veuillez entrer un prénom avec au minimum 2 caractères"
  } else {
    errorObject.firstError.textContent = ""
    data.push(formObject.first.value)
  }
  if (formObject.last.value.length < 2) {
    errorObject.lastError.textContent = "Veuillez entrer un nom avec au minimum 2 caractères"
  } else {
    errorObject.lastError.textContent = ""
    data.push(formObject.last.value)
  }
  if (!formObject.email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    errorObject.emailError.textContent = "Veuillez entrer une adresse email valide"
  } else {
    errorObject.emailError.textContent = ""
    data.push(formObject.email.value)

  }

  if (formObject.date.value.length == 0) {
    errorObject.dateError.textContent = "Veuillez entrer une date de naissance valide"

  } else if (parseInt(formObject.date.value.split("-")[0]) > curentYear - 3 ) {
    errorObject.dateError.textContent = "Vous devez avoir 3ans ou plus pour participer à nos événements"
  }
  else {
    errorObject.dateError.textContent = ""
    data.push(formObject.date.value)

  }
  if (formObject.quantity.value.length == 0 || formObject.quantity.value < 0 || formObject.quantity.value > 99) {
    errorObject.quantityError.textContent = "Veuillez entrer une quantité de tournois entre 0 et 99"
  } else {
    errorObject.quantityError.textContent = ""
    data.push(formObject.quantity.value)

  }
  let checkedValue = []
  for (let i = 0; i < formObject.radio.length; i ++) {
    if (formObject.radio[i].checked) {
      checkedValue.push(formObject.radio[i].value)
    }
  }
  if (checkedValue.length == 0) {
    errorObject.radioError.textContent = "Veuillez sélectionner une ville"
  } else {
    errorObject.radioError.textContent = ""
    data.push(checkedValue)

  }
  if (!formObject.conditions.checked) {
    errorObject.conditionsError.textContent = "Veuillez accepter les conditions d'utilisation"
  } else {
    errorObject.conditionsError.textContent = ""
    data.push(formObject.conditions.value)

  }
 
  console.log(data)
  if (data.length == 7) {
    validatedModal()
  }
})

// validated function

const modalDisplay = document.getElementById('modal-display')
const validatedDisplay = document.getElementById('valitaded-modal')

function validatedModal () {
  modalDisplay.style.display = "none"
  validatedDisplay.style.display = "block"
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event

const closeBtn = document.getElementById('close')
closeBtn.addEventListener("click", closeModal)

const closeForm = document.getElementById('closeForm')
closeForm.addEventListener("click", closeModal)
// close modal function

function closeModal() {
  modalbg.style.display = "none"

}

