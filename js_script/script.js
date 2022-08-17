"use strict";

// console.log('arr' + ' - object');
// console.log(4 +'5');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2+2*2 !== '6');

// const isChecked = false,
//     isClose = false;

// console.log(isChecked || !isClose);


// const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false 
// };

// const a = prompt ("Один из последниз просмотренных фильмов", ""),
//       b = prompt ("На сколько цените его?", ""),
//       c = prompt ("Один из последних просмотренных фильмов?", ""),
//       d = prompt ("На сколько цените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

//второй урок

// if (1) {
//     console.log('OK!');
// } else {
//     console.log('Error');
// }

// // //разветвление

// // if (num < 49){
// //     console.log('Error');
// // } else if (num > 100) {
// //     console.log(' A lot of');
// // } else {
// //     console.log('OK!');
// // }

// // //тернарный оператор

// // (num === 50) ? console.log('OK!') : console.log('Error'); 

// const num = 50;

// // конструкция только для строгово сравнения 
// switch (num) {
//     case 49:
//         console.log('false');
//         break;
//     case 100:
//         console.log('false');
//         break;
//     case 50:
//         console.log('try');
//         break;
//     default:
//         console.log('not today');
//         break;

// }

// // Третий урок

// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);

// for (let i = 1; i < 8; i++){
//     if (i === 6){
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// Практика 2

// const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false 
// };



// for (let i = 0; i < 2; i++){
//     const a = prompt ("Один из последниз просмотренных фильмов", ""),
//           b = prompt ("На сколько цените его?", "");

//           if (a != null && b != null && a != '' && b != '' && a.length <50){

//             personalMovieDB.movies[a] = b;
//             console.log('done');
//           }else {
//               console.log('error');
//               i--;

//           }   
// }

// if  (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Ошибка');
//         }
        
// console.log(personalMovieDB);

//// Функции 

// let num = 20;

// function showFirstMassage(text) {
//     console.log(text);
//     let num = 10;  
//     console.log(num);
// }

// showFirstMassage('hello world');
// console.log(num);

// function calc(a,b){
//     return (a + b);
// }

// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));

// Function declaration
// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

//Function expression
// const logger = function() {
//     console.log("Hello");
// };

// logger();

// стрелочная функция
// const calc = (a, b) => {
//     return a + b;
// };

// console.log(calc(5,9));


