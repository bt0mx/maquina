/*
1) Crear un programa que pida al usuario que ingrese un numero
y le devuelva un mensaje indicando si el numero es positivo, 
negativo o si es 0.*/

// const findNumberType = (number) => {
//     const numberConvert = +number;
//     if(!numberConvert){
//         return "No es numero";
//     }
//     if(numberConvert>0){
//         return "El numero es positivo";
//     }
//     else if(numberConvert<0){
//         return "El numero es negativo";
//     }
//     else{
//         return "El numero es 0";
//     }
// }

// const number = prompt("Ingresa un numero");
// console.log(findNumberType(number));

/*
2) Crear un programa que pida un numero al usuario y le devuelva
un mensaje diciendo si el numero es primo o no.
Aclaración: Los números primos son aquellos que tienen exactamente 4 divisores enteros.
*/

// const isPrime = (number) => {
//        const numberConvert = +number;
//        let count = 0 ;
//        let message = "";
//         if(numberConvert <= 1 || !numberConvert){
//             return message = "Ingresa un valor valido";
//         }
//         for (let i = 1; i <= numberConvert; i++) {
//             if(numberConvert%i === 0){
//                 count++;
//             }
//         }
//         if(count === 2){
//                 message = "El numero es Primo";
//         }
//         else{
//                 message = "El numero no es Primo";
//         }
//        return message;
// }

// const number2 = prompt("Ingresa un numero");
// console.log(isPrime(number2));

// const isPrime = (number) => {
//     const parseNunmber = +number;
//     if (!parseNunmber || parseNunmber < 2) {
//         return;
//     }

//     for (let i = 2; i < parseNunmber; i++) {
//         if (parseNunmber % i === 0) return false;
//     }

//     return true;
// };

// console.log(isPrime(2));

/*
3) Crear un programa que convierta la termperatura de grados Celsius a 
Farenheit y viceversa. El usuario deberia ingresar la temperatura y a que
unidad la quiere convertir.
*/

// const convertTemperature = (type, grade) => {
//     let stringType = type.toLowerCase();
//     let parseGrade = +grade;
//     let message = "";
//     if(stringType !== "celcius" && stringType !== "farenheit"){
//         message = "Ingresa un valor valido1";
//         return message;
//     }

//     if(!parseGrade){
//         message = "Ingresa un valor valido2";
//         return message;
//     }

//     if(stringType === "celcius"){
//         //Ejemplo: (50C x 1.8) + 32 = 122F
//         let temperature = (parseGrade * 1.8) + 32;
//         message = "La temperatura en grados Celcius es "+temperature;
//         return message;
//     }

//     if(stringType === "farenheit"){
//         //Ejemplo: (75F - 32) x 0.5556 = 23.6C
//         let temperature = (parseGrade - 32) * 0.5556;
//         message = "La temperatura en grados Farenheit es "+temperature;
//         return message;
//     }
// }

// const typeTemperature = prompt("Ingresa el tipo de temperatura que quieras convertir");
// const gradeTemperature = prompt("Ingresa los grados");

// console.log(convertTemperature(typeTemperature, gradeTemperature));

/* 
ASDSA
ASD
ASD
ASD
SAD

 */

/*
4) Crear un programa para calcular el total de una compra. Para ello, se le
tiene que pedir al usuario que ingrese el precio de cada producto y, cuando termine, 
que ingrese la palabra 'total'. Devolverle el total de la compra.
*/
/* 
const calculeTotal = () => {

    let total = 0;
    let price = "";
    do{
        price = prompt("Ingresa el precio del producto");
        const parsePrice = +price;
        if(parsePrice){
            total += parsePrice;
        }
    }while(price.toLowerCase() !== "total")
       
    return total;
};

console.log("El total de la compra es: "+calculeTotal());
 */


for (let i = 1; i <= 15; i++) {
 /* if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
     console.log("Fizz");
  } else if (i % 5 === 0) {
     console.log("Buzz");
   } else {
     console.log(i);
   }*/

   let text = "";

   if (i % 3 === 0) {
     text += "Fizz";
   }

   if (i % 5 === 0) {
     text += "Buzz";
   } else if (i % 3 !== 0 && i % 5 !== 0) {
     text = i;
   }

   console.log(text); 
 }

//
//
//
//
//
