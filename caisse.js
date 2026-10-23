let budget = 20000;

let prixCahier = 1500;

let quantiteCahiers = 4;

let prixStylo = 500;

let quantiteStylos = 3;

let montantCahiers = prixCahier * quantiteCahiers;

let montantStylos = prixStylo * quantiteStylos;

let total = montantCahiers + montantStylos;

let message;

if (total <= budget) {

  message = "Budget suffisant";

} else {

  message = "Budget insuffisant";
  
}
