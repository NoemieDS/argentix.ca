/* Script pour la page d'accueil de Argentix.Ca
  ==================================================================================================== */

/*Gestionnaire d'événement scroll sur la fenêtre*/
window.addEventListener("scroll", faireDisparaitre);

/********  Fonction pour faire disparaitre et apparaitre le H1 et le slogan h2 de la page d'accueil
lorsque le premier élément de la balise Main est en contact ***************** ****************************/

function faireDisparaitre() {
  //Le h1
  let h1 = document.querySelector("h1");
  //La position du h1
  let h1Position = h1.getBoundingClientRect().bottom;

  //Les slogan h2
  let sloganAccueil = document.querySelector("h2.slogan-accueil");

  //La position des slogan h2
  let sloganAccueilPosition = sloganAccueil.getBoundingClientRect().bottom;

  //La position du premier element du Main avec la classe
  let premierElMainPosition = document
    .querySelector(".premierElMain")
    .getBoundingClientRect().top;

  //Requete media
  let min768 = window.matchMedia("(min-width: 768px)");
  let min1200 = window.matchMedia("(min-width: 1200px)");

  /**** SLOGAN H2 : On ajoute ou enlève les classes controlant l'opacité SI TÉLÉPHONE*/

 // if (!min768.matches || !min1200) {
    if (premierElMainPosition < sloganAccueilPosition) {
      sloganAccueil.classList.add("disparition");
      sloganAccueil.classList.remove("apparition");
    } else {
      sloganAccueil.classList.remove("disparition");
      sloganAccueil.classList.add("apparition");
    }

    /**** H1 : On ajoute ou enlève les classes controlant l'opacité */
    if (premierElMainPosition < h1Position) {
      h1.classList.add("disparition");
      h1.classList.remove("apparition");
    } else {
      h1.classList.remove("disparition");
      h1.classList.add("apparition");
    }
  }
//}
