let Nome = prompt("Per favore, inserisci il tuo nome");
let Cognome = prompt("Per favore, inserisci il tuo cognome");
let ColorePreferito = prompt("Per favore, inserisci il tuo colore preferito");
const Numero = '114';
const NuovaPassword = Nome + Cognome + ColorePreferito + Numero + ' :non condivederla con nessuno!';
alert("La tua nuova pasword è: " + Nome + Cognome + ColorePreferito + Numero);
document.writeln(NuovaPassword)