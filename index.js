//*********************** */ EJERCICIOS NIVEL 1 ***************

//*************** #1 ***********

// const fullName = () => {
//     console.log(`STEVEN JESUS DELGADO BENAVIDES`);
// }

// fullName();



//*************** #2 ***********

// const fullName = (firstName, lastName) => {
//     console.log(`${firstName} ${lastName}`);
// }

// fullName("STEVEN JESUS", "DELGADO BENAVIDES");



//*************** #3 ***********

// const addNumbers = (n1, n2) => n1 + n2;
// console.log(addNumbers(2, 5));


//*************** #4 ***********

// const areaOfRectangle = (length, width) => {
//     return length * width;
// }

// console.log(areaOfRectangle(5, 2));




//*************** #5 ***********

// const perimeterOfRectangle = (length, width) => 2 * (length + width);
// console.log(perimeterOfRectangle(5, 3));


//*************** #6 ***********

// const volumeOfRectPrism = (length, width, height) => length * width * height;

// console.log(volumeOfRectPrism(5, 2, 3));


//*************** #7 ***********

// const areaOfCircle = (r) => Math.PI * r * r;
// console.log(areaOfCircle(2));


//*************** #8 ***********

// const circumOfCircle = (r) => 2 * Math.PI * r;
// console.log(circumOfCircle(2));


//*************** #9 ***********

// const density = (mass, volume) => mass / volume;
// console.log(density(5, 3));

//*************** #10 ***********

// const speed = (distance, time) => distance / time;
// console.log(speed(5, 4));


//*************** #11 ***********

// const weight = (mass, gravity) => mass * gravity;
// console.log(weight(5, 3));


//*************** #12 ***********

// const convertCelsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

// console.log(convertCelsiusToFahrenheit(20));


//*************** #13 ***********

// const IMC = (pesoKG, altura, edad) => {
//     if (edad >= 20) {
//         let imc = pesoKG / (altura * altura);
//         if (imc < 18.5) {
//             return "Peso bajo";
//         } else if (imc >= 18.5 && imc <= 24.9) {
//             return "Peso normal";
//         } else if (imc >= 25 && imc <= 29.9) {
//             return "Sobrepeso";
//         } else if (imc >= 30) {
//             return "Obeso";
//         }
//     } else {
//         return "la persona no tiene la edad suficiente";
//     }
// }
// console.log(IMC(80, 1.70, 25));



//*************** #14 ***********

// const checkSeason = (mes) => {
//     let mensaje = "";
//     switch (mes.toLowerCase()) {
//         case "marzo": case "abril": case "mayo":
//             mensaje = "Primavera";
//             break;

//         case "septiembre": case "octubre": case "noviembre":
//             mensaje = "Otoño";
//             break;

//         case "diciembre": case "enero": case "febrero":
//             mensaje = "Invierno";
//             break;

//         case "junio": case "julio": case "agosto":
//             mensaje = "Verano";
//             break;
//         default:
//             mensaje = "entrada incorrecta";
//             break;
//     }
//     return mensaje;
// }

// console.log(checkSeason("enero"));



//*************** #15 ***********


// const findMax = (num1, num2, num3) => {
//     let mayor = 0;
//     let numeros = [num1, num2, num3];
//     for (let i = 0; i < numeros.length; i++) {
//         if (numeros[i] > mayor) {
//             mayor = numeros[i];
//         }
//     }
//     return mayor;
// }

// console.log(findMax(3, 8, 7));




//*********************** */ EJERCICIOS NIVEL 2 ***************



//*************** #1 ***********

// const solveLinEquation = (a, b, c, x, y) => a * x + b * y + c;
// console.log(solveLinEquation(2, 3, 5, 4, 8));


//*************** #2 ***********

// const solveQuadEquation = (a, b, c) => {
//     let ecua = 0;
//     let x1 = 0;
//     let x2 = 0;
//     if (a != 0) {
//         ecua = b ** 2 - 4 * a * c;
//         if (ecua > 0) {
//             x1 = (-b + Math.sqrt(ecua)) / (2 * a);
//             x2 = (-b - Math.sqrt(ecua)) / (2 * a);
//         } else if (ecua == 0) {
//             x1 = -b / (2 * a);
//             x2 = -b / (2 * a);
//         } else if (ecua < 0) {
//             return {};
//         }
//     }
//     return [x1, x2];
// }
// console.log(solveQuadEquation(1, 4, 4));



//*************** #3 ***********


// let array = [5, 4, 8, 5, 2, 3, 6, 9]
// const printArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

// printArray(array);



//*************** #4 ***********

// const showDateTime = () => {
//     let date = new Date();
//     let dia = date.getDay();
//     let mes = date.getMonth();
//     if (dia < 10) {
//         dia = "0" + dia;
//     } if (mes < 10) {
//         mes = "0" + mes;
//     }
//     console.log(`${dia}/${mes}/${date.getFullYear()} ${date.getHours()}:${date.getSeconds()}`);
// }
// showDateTime();



//*************** #5 ***********

// const swapValues = (x, y) => {
//     let z = 0;
//     z = y;
//     y = x;
//     x = z;
//     console.log(`x: ${x}`);
//     console.log(`y: ${y}`);
// }
// swapValues(3, 4);



//*************** #6 ***********

// const reverseArray = (array) => {
//     let arrayN = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         arrayN.push(array[i]);
//     }
//     return arrayN;
// }
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



//*************** #7 ***********


// const capitalizeArray = (array) =>{

// }



//*************** #8 ***********

// const addItem = (item) => {
//     return [item];
// }
// console.log(addItem(10));



//*************** #10 ***********


// const sumOfNumbers = (num) => {
//     let suma = 0;
//     for (let i = 0; i <= num; i++) {
//         suma += i;
//     }
//     return suma;
// }
// console.log(sumOfNumbers(3));



//*************** #11 ***********


// const sumOfOdds = (num) => {
//     let impares = 0;
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 != 0) {
//             impares += i;
//         }
//     }
//     return impares;
// }
// console.log(sumOfOdds(3));


//*************** #12 ***********


// const sumOfEven = (num) => {
//     let pares = 0;
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 == 0) {
//             pares += i;
//         }
//     }
//     return pares;
// }
// console.log(sumOfEven(3));



//*************** #13 ***********


// const evensAndOdds = (num) => {
//     let contPares = 0;
//     let contImpares = 0;
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 0) {
//             contPares += 1;
//         } else {
//             contImpares += 1;
//         }
//     }
//     console.log(`numeros pares: ${contPares}    numeros impares: ${contImpares}`);
// }
// evensAndOdds(3);



//*************** #14 ***********


// const suma = (...arguments) => {
//     let suma = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         suma += arguments[i];
//     }
//     return suma;
// }

// console.log(suma(1, 2, 3));




//*************** #15 ***********

// const randomUserIp = () => {
//     let ip = "";
//     for (let i = 0; i <= 20; i++) {
//         ip = ip + Math.round(Math.random() * 9);
//     }
//     console.log(ip);
// }
// randomUserIp();


//*************** #16 ***********

// const randomMacAddress = () => {
//     let ip = "";
//     for (let i = 0; i <= 20; i++) {
//         ip = ip + Math.round(Math.random() * 9);
//     }
//     console.log(ip);
// }
// randomMacAddress();



//*************** #17 ***********


// const randomHexaNumberGenerator = () => {
//     let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//     let hexa = "";
//     for (let i = 0; i < 20; i++) {
//         hexa += array[Math.round(Math.random() * array.length-1)];
//     }
//     return hexa;
// }
// console.log(randomHexaNumberGenerator());



//*************** #18 ***********

// const userIdGenerator = () => {
//     let array = "0123456789abcdefghijkmnñlopqrstuvwxyz".split("");
//     let user = "";
//     for (let i = 0; i < 7; i++) {
//         user += array[Math.round(Math.random() * array.length - 1)];
//     }
//     return user;
// }
// console.log(userIdGenerator());





//*********************** */ EJERCICIOS NIVEL 3 ***************


//*************** #1 ***********


// const userIdGenerator = (nCaracteres) => {
//     let array = "0123456789abcdefghijkmnñlopqrstuvwxyz".split("");
//     let user = "";
//     for (let i = 0; i < nCaracteres; i++) {
//         user += array[Math.round(Math.random() * array.length - 1)];
//     }
//     return user;
// }
// console.log(userIdGenerator());

// const userIdGeneratedByUser = () => {
//     let nCaracteres = parseInt(prompt("ingrese cantidad de caracteres:"));
//     let nCantidadId = parseInt(prompt("ingrese cantidad de ID:"));
//     let ids = "";
//     for (let i = 0; i < nCantidadId; i++) {
//         ids += " " + userIdGenerator(nCaracteres);
//     }
//     return ids;
// }
// console.log(userIdGeneratedByUser());



//*************** #2 ***********

// const rgbColorGenerator = () => console.log(`rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`);

// console.log(rgbColorGenerator());


//*************** #3 ***********

// const arrayOfHexaColors = (cantidad) => {
//     let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//     let colores = [];
//     for (let i = 0; i < cantidad; i++) {
//         let color = "#";
//         for (let j = 0; j < 6; j++) {
//             color += array[Math.round(Math.random() * array.length - 1)]
//         }
//         colores.push(color);
//     }
//     return colores;
// }
// console.log(arrayOfHexaColors(3));


//*************** #4 ***********


// const arrayOfRgbColors = (cantidad) =>{
// let array = [];
// for (let i = 0; i < cantidad; i++) {
//     let colores = [];
//     for (let j = 0; j < 3; j++) {
//         colores.push(Math.round(Math.random()*255));
//     }
//     array.push(colores);
// }
// return array;
// }

// console.log(arrayOfRgbColors(4));



//*************** #5 ***********


// const convertHexaToRgb = (hexa) => {
//     let hexadecimal = hexa.replaceAll("#", "").split("");
//     let letras = ['a', 'b', 'c', 'd', 'e', 'f'];
//     let numeros = [10, 11, 12, 13, 14, 15];
//     for (let i = 0; i < hexadecimal.length; i++) {
//         for (let j = 0; j < letras.length; j++) {
//             if (hexadecimal[i] == letras[j]) {
//                 hexadecimal[i] = numeros[j];
//             }
//         }
//     }
//     let decimal = [parseInt(hexadecimal[0]) * 16 + parseInt(hexadecimal[1]), parseInt(hexadecimal[2]) * 16 + parseInt(hexadecimal[3]), parseInt(hexadecimal[4]) * 16 + parseInt(hexadecimal[5])];

// }
// convertHexaToRgb("#ff1a2c");


//*************** #6 ***********


// const convertRgbToHexa = (r, g, b) => {
//     return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
// }

// console.log(convertRgbToHexa(255, 255, 255));



//*************** #7 ***********


// const arrayOfRgbColors = (cantidad) => {
//     let array = [];
//     for (let i = 0; i < cantidad; i++) {
//         let colores = [];
//         for (let j = 0; j < 3; j++) {
//             colores.push(Math.round(Math.random() * 255));
//         }
//         array.push(colores);
//     }
//     return array;
// }

// const arrayOfHexaColors = (cantidad) => {
//     let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//     let colores = [];
//     for (let i = 0; i < cantidad; i++) {
//         let color = "#";
//         for (let j = 0; j < 6; j++) {
//             color += array[Math.round(Math.random() * array.length - 1)]
//         }
//         colores.push(color);
//     }
//     return colores;
// }

// const generateColors = (opcion, cantidad) => {
//     let array = [];
//     if (opcion == "hexa") {
//         array = arrayOfHexaColors(cantidad);
//     } else if (opcion == "rgb") {
//         array = arrayOfRgbColors(cantidad);
//     }
//     return array;
// }

// console.log(generateColors("hexa", 3));



//*************** #8 ***********

// const shuffleArray = (array) => {
//     let arrayNuevo = [];
//     for (let i = 0; i < array.length; i++) {
//         do {
//             let posicion = Math.round(Math.random() * array.length - 1);
//             let bandera = false;
//             if (!(arrayNuevo.includes(array[posicion]))) {
//                 arrayNuevo.push(array[posicion]);
//                 bandera = true;
//             }
//         } while (bandera = false);
//     }
//     return arrayNuevo;
// }

// console.log(shuffleArray([5, 8, 6, 1, 6, 8]));



//*************** #9 ***********

// const factorial = (num) => {
//     numFac = 1;
//     for (let i = 1; i <= num; i++) {
//         numFac = numFac * i;
//     }
//     return numFac;
// }

// console.log(factorial(5));



//*************** #10 ***********


// const isEmpty = (...x) => {
//     if (x.length > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isEmpty(5));


//*************** #11 ***********


// const sum = (...x) => {
//     let suma = 0;
//     for (let i = 0; i < x.length; i++) {
//         suma += x[i];
//     }
//     return suma;
// }

// console.log(sum(5, 3));


//*************** #12 ***********


// const sumOfArrayItems = (array) => {
//     let suma = 0;
//     let cont = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] == "number") {
//             suma += array[i];
//             cont += 1;
//         }
//     }
//     if (cont != array.length) {
//         console.log("no todos los elementos son de tipo 'Number'");
//     } else {
//         console.log("todos los elementos son de tipo 'Number'");
//     }
//     return suma;
// }

// console.log(sumOfArrayItems([5, 3, "5"]));


//*************** #13 ***********

// const average = (array) => {
//     let suma = 0;
//     let cont = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] == "number") {
//             suma += array[i];
//             cont += 1;
//         }
//     }
//     if (cont != array.length) {
//         console.log("no todos los elementos son de tipo 'Number'");
//     } else {
//         console.log("todos los elementos son de tipo 'Number'");
//     }
//     return suma / cont;
// }

// console.log(average([5, 3, "2"]));



//*************** #14 ***********


// const modifyArray = (array) => {
//     if (array.length >= 5) {
//         array[4] = Math.round(Math.random() * 10);
//         return array;
//     } else {
//         return "elemento no encontrado"
//     }
// }

// console.log(modifyArray([5, 2, 3, 4, 8]));


//*************** #15 ***********


// const isPrime = (num) => {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(7));



//*************** #16 ***********

// const isAllUnique = (array) => {
//     let arrayNuevo = [];
//     let bandera = true;
//     for (let i = 0; i < array.length; i++) {
//         if (!(arrayNuevo.includes(array[i]))) {
//             arrayNuevo.push(array[i]);
//         } else {
//             bandera = false;
//             break;
//         }
//     }
//     return bandera;
// }

// console.log(isAllUnique([2, 3, 4, 3]));


//*************** #17 ***********


// const isAllUniqueType = (array) => {
//     let bandera = true;
//     let type = typeof array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (type != typeof array[i]) {
//             bandera = false;
//             break;
//         }
//     }
//     return bandera;
// }

// console.log(isAllUniqueType([2, 3, "4", 3]));


//*************** #18 ***********


// const isValidVariable = (nombre) => {
//     if (/[^a-z0-9$\_]+/g.test(nombre)) {
//         return false;
//     } else {
//         return true;
//     }
// }

// console.log(isValidVariable("nuns01*"));


//*************** #19 ***********

// const arrayUnique = () => {
//     let array = [];
//     for (let i = 0; i < 7; i++) {
//         do {
//             bandera = false;
//             let numero = Math.round(Math.random() * 9);
//             if (!(array.includes(numero))) {
//                 array.push(numero);
//                 bandera = true;
//             }
//         } while (bandera == false);
//     }
//     return array;
// }

// console.log(arrayUnique());


//*************** #20 ***********

// const countries = [
//     'Afghanistan',
//     'Albania',
//     'Algeria',
//     'Andorra',
//     'Angola',
//     'Antigua and Barbuda',
//     'Argentina',
//     'Armenia',
//     'Australia',
//     'Austria',
//     'Azerbaijan',
//     'Bahamas',
//     'Bahrain',
//     'Bangladesh',
//     'Barbados',
//     'Belarus',
//     'Belgium',
//     'Belize',
//     'Benin',
//     'Bhutan',
//     'Bolivia',
//     'Bosnia and Herzegovina',
//     'Botswana',
//     'Brazil',
//     'Brunei',
//     'Bulgaria',
//     'Burkina Faso',
//     'Burundi',
//     'Cambodia',
//     'Cameroon',
//     'Canada',
//     'Cape Verde',
//     'Central African Republic',
//     'Chad',
//     'Chile',
//     'China',
//     'Colombi',
//     'Comoros',
//     'Congo (Brazzaville)',
//     'Congo',
//     'Costa Rica',
//     "Cote d'Ivoire",
//     'Croatia',
//     'Cuba',
//     'Cyprus',
//     'Czech Republic',
//     'Denmark',
//     'Djibouti',
//     'Dominica',
//     'Dominican Republic',
//     'East Timor (Timor Timur)',
//     'Ecuador',
//     'Egypt',
//     'El Salvador',
//     'Equatorial Guinea',
//     'Eritrea',
//     'Estonia',
//     'Ethiopia',
//     'Fiji',
//     'Finland',
//     'France',
//     'Gabon',
//     'Gambia, The',
//     'Georgia',
//     'Germany',
//     'Ghana',
//     'Greece',
//     'Grenada',
//     'Guatemala',
//     'Guinea',
//     'Guinea-Bissau',
//     'Guyana',
//     'Haiti',
//     'Honduras',
//     'Hungary',
//     'Iceland',
//     'India',
//     'Indonesia',
//     'Iran',
//     'Iraq',
//     'Ireland',
//     'Israel',
//     'Italy',
//     'Jamaica',
//     'Japan',
//     'Jordan',
//     'Kazakhstan',
//     'Kenya',
//     'Kiribati',
//     'Korea, North',
//     'Korea, South',
//     'Kuwait',
//     'Kyrgyzstan',
//     'Laos',
//     'Latvia',
//     'Lebanon',
//     'Lesotho',
//     'Liberia',
//     'Libya',
//     'Liechtenstein',
//     'Lithuania',
//     'Luxembourg',
//     'Macedonia',
//     'Madagascar',
//     'Malawi',
//     'Malaysia',
//     'Maldives',
//     'Mali',
//     'Malta',
//     'Marshall Islands',
//     'Mauritania',
//     'Mauritius',
//     'Mexico',
//     'Micronesia',
//     'Moldova',
//     'Monaco',
//     'Mongolia',
//     'Morocco',
//     'Mozambique',
//     'Myanmar',
//     'Namibia',
//     'Nauru',
//     'Nepal',
//     'Netherlands',
//     'New Zealand',
//     'Nicaragua',
//     'Niger',
//     'Nigeria',
//     'Norway',
//     'Oman',
//     'Pakistan',
//     'Palau',
//     'Panama',
//     'Papua New Guinea',
//     'Paraguay',
//     'Peru',
//     'Philippines',
//     'Poland',
//     'Portugal',
//     'Qatar',
//     'Romania',
//     'Russia',
//     'Rwanda',
//     'Saint Kitts and Nevis',
//     'Saint Lucia',
//     'Saint Vincent',
//     'Samoa',
//     'San Marino',
//     'Sao Tome and Principe',
//     'Saudi Arabia',
//     'Senegal',
//     'Serbia and Montenegro',
//     'Seychelles',
//     'Sierra Leone',
//     'Singapore',
//     'Slovakia',
//     'Slovenia',
//     'Solomon Islands',
//     'Somalia',
//     'South Africa',
//     'Spain',
//     'Sri Lanka',
//     'Sudan',
//     'Suriname',
//     'Swaziland',
//     'Sweden',
//     'Switzerland',
//     'Syria',
//     'Taiwan',
//     'Tajikistan',
//     'Tanzania',
//     'Thailand',
//     'Togo',
//     'Tonga',
//     'Trinidad and Tobago',
//     'Tunisia',
//     'Turkey',
//     'Turkmenistan',
//     'Tuvalu',
//     'Uganda',
//     'Ukraine',
//     'United Arab Emirates',
//     'United Kingdom',
//     'United States',
//     'Uruguay',
//     'Uzbekistan',
//     'Vanuatu',
//     'Vatican City',
//     'Venezuela',
//     'Vietnam',
//     'Yemen',
//     'Zambia',
//     'Zimbabwe'
// ]
// console.log(countries);
// const reverseCountries = () => countries.reverse();

// console.log(reverseCountries());
