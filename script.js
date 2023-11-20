const footer = document.querySelector('footer');
let count = 0;

footer.addEventListener('click', function() {
  count++;
  console.log(`clic numéro ${count}`);
});

/* --------------------------------------- */

const hamburgerButton = document.querySelector('.navbar-toggler');
const navbarHeader = document.getElementById('navbarHeader');

hamburgerButton.addEventListener('click', function() {
  navbarHeader.classList.toggle('collapse');
});

/* --------------------------------------- */

const firstEditButton = document.querySelector('.card .btn-outline-secondary');  
const firstCardText = document.querySelector('.card .card-text');

firstEditButton.addEventListener('click', function() {
   firstCardText.style.color = 'red';
  });

/* --------------------------------------- */

const secondCard = document.querySelectorAll('.album .card')[1];
const secondEditButton = secondCard.querySelector('.btn-outline-secondary');
const secondCardText = secondCard.querySelector('.card-text');

secondEditButton.addEventListener('click', function() {
  
// Vérification de la couleur actuelle du texte
  if (secondCardText.style.color === 'green') {
// Si le texte est déjà vert, le redevient comme avant
    secondCardText.style.color = '';
} else {
// Sinon, le texte devient vert
    secondCardText.style.color = 'green';
      }
});

/* --------------------------------------- */

const navbar = document.querySelector('.navbar');
const linkTags = document.querySelectorAll('link[rel="stylesheet"]');
let bootstrapDisabled = false;

navbar.addEventListener('dblclick', function() {
  linkTags.forEach(function(link) {
    if (link.href.includes('bootstrap')) {
      link.disabled = !link.disabled; // Inversion de l'état actuel
      bootstrapDisabled = !bootstrapDisabled; // Mise à jour du statut
    }
  });
});

/* -------------------------------------- */

const viewButtons = document.querySelectorAll('.card .btn-success');

viewButtons.forEach(function(button) {
  button.addEventListener('mouseover', function(event) {
    const card = event.currentTarget.closest('.card');
    const cardText = card.querySelector('.card-text');
    const cardImage = card.querySelector('.card-img-top');
    let isReduced = card.classList.contains('card-reduced'); // Vérifie si la carte est déjà réduite

    if (!isReduced) {
      cardText.style.display = 'none';
      cardImage.style.width = '20%';
      card.classList.add('card-reduced'); // Ajoute une classe pour marquer que la carte est réduite
    } else {
      cardText.style.display = 'block';
      cardImage.style.width = '100%';
      card.classList.remove('card-reduced'); // Retire la classe pour marquer que la carte est à l'état normal
    }
  });
});

