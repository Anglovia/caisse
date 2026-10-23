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

console.log("===== CAISSE =====");

console.log(`Cahiers : ${montantCahiers} FCFA`);

console.log(`Stylos : ${montantStylos} FCFA`);

console.log(`Total :  ${total} FCFA`);

console.log(`Budget : ${budget} FCFA`);

console.log(message);

console.log("")

for (let i = 1; i <= 5; i++) {

  console.log("Achat numéro " + i);

}
