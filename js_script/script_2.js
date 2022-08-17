// // методы
// const str = "teSt";

// // console.log(str[2] = '2');
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// //поиск по строке
// const fruit = "Some Fruit";
// console.log(fruit.indexOf("Fruit"))

// //вырезание от и до
// const logg = "Hello World";
// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// //округление
// const num = 12.2;
// console.log(Math.round(num));

// //перевод в другую систему исчесления
// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// // Третья практика

//  let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function remeberMyFilms() {
//     for (let i = 0; i < 2; i++){
//         const a = prompt ("Один из последниз просмотренных фильмов", ""),
//               b = prompt ("На сколько цените его?", "");
    
//               if (a != null && b != null && a != '' && b != '' && a.length <50){
    
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//               }else {
//                   console.log('error');
//                   i--;
    
//               }   
//     }
// }

// remeberMyFilms();

// function detectPersonlLevel() {
//     if  (personalMovieDB.count < 10) {
//          console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Ошибка');
//         }
// }
// detectPersonlLevel();

// function showMyDB() {
//     if (personalMovieDB.privat == false){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++){
//     const genre = prompt("Ваш любимый жанр под номером " +i);

//     if (genre != null && genre != ''){
//         personalMovieDB.genres[i - 1] = genre;
    
//         }
//     }
// }
// writeYourGenres();

// console.log(personalMovieDB);

// call back функция 

// function first() {
//     //do something
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second () {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошёл этот урок');
// }

// learnJS(' JavaScript',  done);

// Объекты
// const options = {
//     name: 'test',
//     with: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors; // деструктуризация объектов
// console.log(border);

// console.log(Object.keys(options).length); //узнать длинну объекта без цикла 


// console.log(options.name);

// delete options.name;

// console.log(options);


//конструкция для перебора объектов
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options [key][i]}`);
//             counter++;
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options [key]}`);
//         counter++;
//     } 
// }
// console.log(counter);

//массивы и псевдомассивы

// const arr = [1, 12, 3, 24, 45];
// arr.sort(compaireNum);
// // arr[99] = 0;
// // console.log(arr.length);
//  console.log(arr); 
//  function compaireNum(a,b) { //функция для сортировки как числа
//    return a-b;
//}

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

//arr.pop();
// arr.push(6);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", ""); //создание строки   
// const product = str.split(", "); // перевод из строки в массив
// product.sort();// сортировка
// console.log(product.join('; '));// перевод из массива в строку