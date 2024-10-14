//Introduccion a JavaScript
//Ejercicio 2
let a = 5;
let b = 4;
let c = a + b;
console.log("El valor de c es " + c);
//Ejercicio 3
let nombre = prompt("¿Cual es su nombre?");
console.log("Hola, " + nombre + "! Bienvenido a este curso de Javascript");

//Operadores Logicos Condicionales
//Ejercicio 1
let d = 10;
let e = 20;
let f = 15;
let mayor;

if (d >= e && d >= f) {
    mayor = d;
} else if (e >= d && e >= f) {
    mayor = e;
} else {
    mayor = f;
}
console.log("El mayor valor es: " + mayor);

//Ejercicio 2
let num = prompt("Ingresar un numero y te dire si es par o impar");

if (num % 2 == 0) {
    console.log("El numero ingresado " + num + " es par")
}
else {
    console.log("El numero ingresado " + num + " es impar")
}

//Operadores y Bucles
//Ejercicio 1
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//Ejercicio 2
let bandera;
do {
    bandera = prompt("Ingrese un numero mayor a 100");
    if (bandera <= 100) {
        console.log("El numero no es valido, Ingrese un valor mayor a 100")
    }
}
while (isNaN(bandera) || bandera <= 100);

console.log("El numero es " + bandera);

//Funciones de JavaScript
//Ejercicio 1
let par = prompt("Ingrese un numero y le dire si es par")
const esPar = (num1) => {
    if (num1 % 2 == 0) {
        return true
    }
    else {
        return false
    }
}
console.log(esPar(par));


//Ejercicio 2
let celsius = prompt("Ingrese un valor en celsius y le devolvera fahrenheit")
function convertirCelsiusAFahrenheit(celsius1) {
    let fahrenheit = celsius1 * 1.8 + 32;
    console.log(celsius1 + " grados Celsius son " + fahrenheit + " grados Fahrenheit.");
}
convertirCelsiusAFahrenheit(celsius);

//Objetos en JavaScript
//Ejercicio 1
let persona = {
    nombre: "Facundo",
    edad: 22,
    ciudad: "Mendoza",
    cambiarCiudad: function (nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
}
let cambiar = prompt("Eligue a la ciudad que quiere cambiar");
persona.cambiarCiudad(cambiar);
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

//Ejercicio 2
let libro = {
    titulo: "El retrato de Dorian Gray",
    autor: "Oscar Wilde",
    año: 1890,
    esAntiguo: function (año) {
        let añoActual = new Date().getFullYear();
        let diferenciadeaños = añoActual - año;
        if (diferenciadeaños > 10) {
            return true
        }
        else {
            return false
        }
    }
}

if (libro.esAntiguo(libro.año)) {
    console.log("El libro '" + libro.titulo + "' es antiguo.");
} else {
    console.log("El libro '" + libro.titulo + "' es reciente.");
}

//Arrays
//Ejercicio 1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doble = numeros.map(numero => numero * 2);
console.log("Números originales: " + numeros);
console.log("Números multiplicados por 2: " + doble);

//Ejercicio 2
let pares = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}
console.log("Los numeros pares hasta el 20: " + numeros);