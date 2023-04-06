
// console.log(!!num);
/* alert(`asd
asdasd`) */
// Asumimos las siguientes variables
//  x = 5
  // n = 10;
  // z = 25

// x = n     // La variable x contiene el valor 10
// x = n = z // x = n (es decir 10) y z pisa el valor total remplazandolo por 25
// console.log(x)

// triangulo de # 
// #
// ##
// ###
// ####
// #####

// let figure = "";
// for (let i = 0; i < 5; i++) {
//   figure=figure+"#";
//   console.log(figure);
// }


/*2) Numeros pares e impares. Hacer un programa que itere por los numeros del 0 al 10 y, por cada uno de ellos, imprima el numero y
nos diga si es par o impar. 
Ejemplo:

0 es par
1 es impar
2 es par
...
*/

/*3) FizzBuzz. Generar un programa que itere del 1 al 15. Por cada iteracion, mostrar por consola lo siguiente:

1- Si el numero es multimo de 3, mostrar la palabra "Fizz"
2- Si el numero es multiplo de 5, mostrar la palabra "Buzz"
3- Si el numero es multiplo de 3 y 5, mostrar la palabra "FizzBuzz"
4- En los demas casos, mostrar el numero

*/

// for(let i=1;i<=15;i++){

//     if(i%3 === 0 && i%5 === 0){   
//         //fizz//buzz
//         console.log("FizzBuzz");
//     }
//     else if(i%3 === 0){
//         //fizz
//         console.log("Fizzz");
//       }
//       else if(i%5 === 0){
//         //buzz
//         console.log("Buzz");
//       }
//       else{
//          //buzz
//          console.log(i);
//       }
//   }



// for(let i=1;i<=15;i++){
//   let text = "";
//   if(i%3 === 0){
//      text += "Fizz";
//   }
//   if(i%5 === 0){
//     text += "Buzz";
//  }
//  if(i%3 !== 0 && i%5 !== 0){
//   text = i;
//   }
// console.log(text);
// }




//CODING CHALLENGE

/*1) REGISTRO.

  Vamos a construir un programa que permita al usuario registrarse en nuestra aplicacion. Para ello, en primer lugar vamos a
  mostrar un mensaje que le de la bienvenida al usuario y le pregunte si desea registrarse (PISTA: recuerden que habia un metodo del 
  navegador que permitia hacer este tipo de consultas al usuario, devolviendo true o false segun el caso).
  En caso de que el usuario acepte registrarse, le vamos a pedir que ingrese su nombre de usuario en primer lugar. El nombre de usuario
  tiene que tener por lo menos 3 caracteres y no va a ser case sensitive, por lo que lo vamos a almacenar en minusculas, independientemente
  de como lo ingrese el usuario. Agregar la validacion necesaria para que en caso de que el usuario no cumpla con las concidiones, 
  se muestre un mensaje de error.
  Si el nombre de usuario es ingresado correctamente, le vamos a pedir al usuario que ingrese una contrasena, la que tiene que tener
  por lo menos 6 caracteres. La contrasena tiene que ser case sensitive, por lo que se respetan las mayusculas y minusculas segun lo ingrese
  el usuario.
  En caso de que la contrasena no cumpla con el requisito anterior, se debe mostrar un mensaje de error. De lo contrario, se debe mostrar un
  mensaje de exito informando al usuario que se completo el registro. (OTRA PISTA: Para ver como validar la longitud de un string, pueden ver el siguiente
    enlace: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length )

*/

//NOMBRE - 3 CARACTERES minusculas
// const wishesToRegister = confirm("Desea registrarse");
// let nameUser = "", passUser = "";
//   if(wishesToRegister){
//     do{
//       nameUser = prompt("Ingrese nombre Usuario").toLowerCase();
//       if(nameUser.length<3){
//         alert("Ingresa un usuario valido");
//       }else{
//         do{
//         passUser = prompt("Ingrese la contrseña");
//         if(passUser.length<6){
//           alert("Ingresa contraseña valida");
//         }
//         else{
//           alert("Datos correctos");
//         }
//        } while(passUser.length<3)
//       }
//     } while(nameUser.length<3)
//   }



/*2) LOGIN

  Partiendo de la base del punto anterior, en caso de que se complete el registro, vamos a mostrarle un mensaje al usuario preguntandole
  si desea iniciar sesion. En caso de que el usuario haga click en aceptar, vamos a pedirle que ingrese su nombre de usuario y luego su contrasena
  Si alguno de los datos ingresados no coinciden con los informados al momento del registro, le vamos a mostrar un mensaje de error al usuario.
  Caso contrario, le mostraremos un mensaje que diga que el login fue exitoso. Recordar el tema de normalizar los inputs en caso de que sea necesario,
  para poder hacer la comparacion contra los valores almacenados.

  */


  
/*3) EXTRA
  Tomando los ejercicios anteriores, los vamos a modificar para que, en el caso de que cualquiera de las validaciones anteriores arroje un error
  el programa vuelva a pedir al usuario la informacion solicitada en ese punto. Tener en cuenta que el usuario podra dar por terminado el programa
  tocando el boton de cancelar al momento en que se le pide ingresar un dato o se le consulta si desea registrarse o iniciar sesion.
*/

// const sum = function (n1, n2){
//   return n1+n2;
// }
/* 
var x = 5;

// (function () {
//     console.log("x:", x); // no obtenemos '5' sino 'undefined'
//     var x = 10;
//     console.log("x:", x); // 10
// }());

// console.log(typeof sum);

const array = ['angel','clown','sturgeon','other'];

var removed = array.splice(3,2);


console.log(array);

console.log("Removed :"+removed);
 */
/* 
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
[2, 5, , 9].forEach(logArrayElements);
// salida:
// a[0] = 2
// a[1] = 5
// a[2] = 9 */
/*  
const miArray = [
   "Alexis",
  "Juan",
   "Pedro",
   "Marcelo",
  "Luis",
   "Armando",
  "Martina",
 ];
 
 const newArray = new Array();

 miArray.forEach((element, index) => {
    const Name = `Nombre ${element}`;
    newArray.push(Name);
    // newArray[index] = Name;
 });

 console.log(newArray);
 */
//////////////////////////EJERCICIOS FUNCIONES//////////////////////////////////////////
/*
Dada la siguiente lista de invitados en ese orden:

Lucas,
Matias,
Jose,
Pedro,
Martina, 
Marcelo, 
Esteban, 
Marcela, 
Martin


*/

// const list = [
//   "Lucas",
//   "Matias",
//   "Jose",
//   "Pedro",
//   "Martina",
//   "Marcelo",
//   "Esteban",
//   "Marcela",
//   "Martin",
// ];

// 1) Informar por consola el numero de invitados  
//console.log(list.length);


/*2) Imprimir por consola el nombre del ultimo invitado
 */
//console.log(list[list.length-1]);


/*3) A ultimo momento, se invito a Pedro a la fiesta, por lo que
 hay que agregarlo al final de la lista.
 */
 //const newInvited = list.push("Pedro");
 //console.log(list);

 
/*4) Media hora antes de empezar Marcela confirmo que no podia asistir.
 Generar una nueva lista que contenga los invitados que confirmaron su
 presencia.
 */
//filter
// const confirmInvited = list.filter((element) => element!="Marcela" );
// console.log(confirmInvited);

 /*4) Por cada invitado, asignarle un numero de orden conforme
su posicion en la lista. Mostrar este numero de orden en un nuevo
array de la siguiente manera: "Juan. Orden: 1".
*/
// const numberInvited = list.map((name, index) => {
//   return `${name} Orden: ${index+1}`; 
// });
// console.log(numberInvited);

/*5) Suponiendo que los invitados consumieron la siguente cantidad de platos

    Lucas: 3 platos
    Esteban: 1 platos
    Jose: 1 plato
    Los restantes: 4 platos
// */
// const totalDishes = list.reduce((acc, name) => {
//   if(name === "Lucas"){
//     return acc += 3;
//   }
//   else if(name === "Esteban" || name === "Jose"){
//     return acc += 1;
//   }
//   else{
//     return acc += 4;
//   }
// }, 0);

// console.log(totalDishes);

// /*    Calular el numero total de platos consumidos al final de la fiesta
    

//     6) Acomodar los invitados por orden alfabetico.
    
//     */
//     const order = list.sort();
//     console.log(order);
//     console.log("asd");

// // 3 propiedades
// class Persona {
//   constructor(firstName, city, job){
//     this.firstName = firstName;
//     this.city = city;
//     this.job = job;
//   }
// }

// const persona = {
//   firstName: "bet0",
//   city: "Oax",
//   job: "Developer",
// };

// const Alexis = new Persona("Alexis", "Buenos", "Developer");

// const Juan = new Persona("Juan", "Buenos", "Developer");

// const Pedro = new Persona("Pedro", "Buenos", "Developer");

// console.log(Alexis, Juan, Pedro);



//EJERCICIOS

/*
1) Crear una clase Deportes, que reciba el atributo nombre
y un metodo que permita mostrar por consola ese nombre.
Ademas, crear un metodo que permita mostrar si el deporte es
individual o por equipos.


PARA ESTA ACTIVIDAD, USAR LO VISTO RESPECTO DE CLASES Y OBJETOS
*/

/*
class Sport {
  constructor(name, isIndividual){
    this.name = name;
    this.isIndividual = isIndividual;
  }

  sayName(){
    console.log(`EL deporte ${this.name} `);
  }

  isSportTeam(){
    console.log(`Es ${this.isIndividual ? "Individual" : "Equipo"}`);
  }

}*/

/*

Crear una subclase que sea DeportesDeEquipo que permita ademas del nombre, 
el numero de integrantes que deben formar parte de ese equipo. 
Crear un metodo para
mostrar el siguiente mensaje: 
" 11 jugadores por equipo".
 Tener en cuenta que 'futbol' y 11 son valores que 
 pueden variar dependiedo
 del deporte (por ejemplo, si fuese basket, seria 5 jugadores)

 Futbol
 Basket
 Tenis */
/*
 class DeportesDeEquipo extends Sport {
  constructor(name, noIntegrantes){
    super(name);
    this.noIntegrantes = noIntegrantes;
  }

  isTeam(){
    console.log(`Para jugar ${this.name} necesitas ${this.noIntegrantes} jugadores por equipo`);
    /*if(noIntegrantes == 11){
      console.log(`Puedes jugar  con ${this.noIntegrantes}`);
    }
    if(noIntegrantes == 5){
    
    }
    if(noIntegrantes == 2){
      console.log(`Puedes jugar ${this.name}con ${this.noIntegrantes}`);
    }
    else{
      console.log(`Para jugar al futbol necesitas 11 jugadores por equipo`);
    }*/
  /*}
}
*/
/*
const Futbol = new DeportesDeEquipo("Futbol", 10);
Futbol.sayName();
Futbol.isSportTeam();
Futbol.isTeam();
*/


//  class Persona {
//    constructor(firstName, city, job) {
//      this.firstName = firstName;
//      this.city = city;
//      this.job = job;
//    }

//    saludar() {
//      console.log(`Hola, soy ${this.firstName}`);
//    }
//  }

//  const Alexis = new Persona("Alexis", "Buenos Aires", "Developer");
//  const Juan = new Persona("Juan", "Cordoba", "Arquitecto");
//  const Martin = new Persona("Martin", "Rosario", "Abogado");
 
// // console.log(Alexis, Juan, Martin);

//  Juan.saludar();
//  Alexis.saludar();
//  Martin.saludar();



/*2) Andrea y Martin deciden hacer un picnic al aire libre.
Andrea propone llevar una bolsa con 2 cervezas, 2 sandwiches y 1 bolsa
de papas fritas. Por su parte, Martin lleva 1 porcion de torta, una gaseosa
y 1 paquete de galletitas dulces.

CREAR UN OBJETO QUE REPRESENTE CADA UNA DE LAS BOLSAS,
DONDE CADA PRODUCTO TENGA LA CANTIDAD QUE LLEVO CADA UNO.

REALIZAR LAS SIGUIENTES TAREAS:

a) Mostrar por consola los productos que llevo cada uno
(solo el nombre del producto)

b) En el camino al picnic, la bolsa de Andrea se rompio, 
por lo que tuvieron que poner todo en la bolsa de Martin.
Realizar el cambio correspondiente para que la bolsa de Martin
tenga el total de los productos del picnic.

c) Calcular el total de productos que llevaron al picnic
*/
/*
const martinBag = {torta: 1,gaseosa: 1, galleta: 1};
const andreaBag = {cervezas: 2,sandwiches: 2, papas: 1};

const valuesMartin = Object.keys(martinBag);
const valuesAndrea = Object.keys(andreaBag);

Object.assign(martinBag, andreaBag)

console.log(valuesMartin, valuesAndrea, join);

let total = 0;

//EJEMPLO 1
for (const key in martinBag) {
  if (Object.hasOwnProperty.call(martinBag, key)) {
   // const element = join[key];
   // console.log(join[key]);
    total += martinBag[key];
  }
}

total = 0;
//EJEMPLO 2
const productsName = Object.keys(martinBag);
productsName.forEach((key) => (total += martinBag[key]));
// productsName.forEach((product) => (totalProducts += MartinBag[product]));

console.log(total);


//EJEMPLO 3
const productsQuantity = Object.values(MartinBag);
const totalProductsWithReduce = productsQuantity.reduce(
  (acumulador, currentValue) => acumulador + currentValue,
  0
);

console.log(totalProductsWithReduce);


*/



//setTimeout()
/*
 console.log("Me despierto");
 console.log("Me lavo la cara");
 console.log("Pongo la cafetera");
 
 setTimeout(() => {
   console.log("El cafe esta listo");
 }, 5000);

 console.log("Me doy una ducha");
 console.log("Desayuno");

 console.log("Me despierto");
 console.log("Me lavo la cara");
 console.log("Pongo la cafetera");

 setTimeout(() => {
   console.log("El cafe esta listo");
 }, 0);

 console.log("Me doy una ducha");
 console.log("Desayuno")
 */
 
 // Ejercicio #1
// Crear una función que tome como parámetro un arreglo, retornar el último elemento del arreglo
/*
function lastElement (array){
  return array[array.length-1];
}


console.log(lastElement([2,4,1,8,5]));*/

//Ejercicio #2
//Crear una función que tome como parámetro un arreglo, retornar el primer elemento del arreglo
/*function lastElement (array){
  return array.shift();
}


console.log(lastElement([2,4,1,8,5]));*/

//Ejercicio #3
//Crear una función que tome como parámetro un arreglo y un número, retornar un nuevo arreglo con todos los elementos y el número agregado al final del arreglo
/*
function pushElement(array, number){
  array.push(number);
  return array;
}

const reponse =  pushElement([2, 6, 1, 8], 10);

console.log(reponse);*/

//Crear una función que tome como parámetro un arreglo de números, retornar la suma de todos los elementos del arreglo
/*
function sumElement(array){
  let sum = 0; 
  array.forEach(element => {
    sum += element;
   });

   return  sum;
}*/
/*
function sumElement(array){

  const sum = array.reduce((accu, element) => accu + element,0);
  return  sum;
}

const reponse =  sumElement([2, 6, 1, 9]);

console.log(reponse);*/

//1
/*
const asyncOperation = new Promise ((resolve) => resolve());
asyncOperation.then((resolvedValue) => console.log('Mario'));
console.log('Brenda');*/

//2
/*
const asyncOperation = fetch('https://jsonplaceholder.typicode.com/todos/1');
asyncOperation.then((resolvedValue) => {
  const getData = async() => {
   const responsejson = await resolvedValue.json();
   console.log(responsejson);
  }
  getData();
});*/

const temporizador = (second) => {
    setTimeout(() => {
      if(second < 0) return
      console.log(second);
      temporizador(second-1);
    }, 1000);
};
temporizador(10);




