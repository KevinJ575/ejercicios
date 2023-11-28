//Declara las variables de la edad
const age1 = parseInt(prompt("Enter age 1:"));
const age2 = parseInt(prompt("Enter age 2:"));
const age3 = parseInt(prompt("Enter age 3:"));
//Declara las variables del nombre
const name1 = prompt("Enter name 1:");
const name2 = prompt("Enter name 2:");
const name3 = prompt("Enter name 3:");
//variable que almacenara la edad
let mayor = "";
//operacion
if (age1 > age2 && age1 > age3) {
  mayor= name1;
} else if (age2 > age1 && age2 > age3) {
  mayor = name2;
} else if (age3 > age1 && age3 > age2) {
  mayor = name3;
} else {
  mayor = "Todos son iguales";
}
//imprime el resultado
document.write("La persona mayor es: " + mayor);