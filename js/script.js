/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

/* alert('ciao')
document.write('Hello World !'); */

//userName

let userName = prompt('Inserisci il tuo nome ..');
console.log(userName);

//userLastName
let userLastName = prompt('Inserisci il tuo cognome ..')
console.log(userLastName);

//user favorite color
let favColor = prompt("Qual/'è il tuo colore preferito ?");
console.log(favColor);

let user= userName + userLastName;
console.log(user);

//message on webpage
document.getElementById('user').innerHTML =`
Ciao ${userName} ${userLastName} il tuo colore preferito inserito è: ${favColor};
`