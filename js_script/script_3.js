//Передача по ссылке или по значению, spread оператор 


// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //ссылка

// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) { // копирование
//     let objCopy = {}

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a:2,
//     b:5,
//     c:{
//         x:7,
//         y:4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 2;

// console.log(newNumbers);
// console.log(numbers)

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = (Object.assign({}, add));

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); //копирование массива

// newArray[1] = 'sdrfgtyhujikolp';
// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejornal', 'bloger'],
//     internet = [...video, ...blogs, 'vk', 'facebook']; // синтаксис оператора разворота (spread)

//     console.log(internet);

// более сложный пример использования метода spread
// function log(a, b, c) {
//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
//     console.log(`c = ${c}`);
// }

// const num = [2, 5, 7];

// log(...num);
    


// const array = ["a", "b"];

// const newAarray = [...array]; //в переменной newAarray лежит копия переменной array

// const q = {
//     one: 1,
//     two: 2
// };

// let newObj = {...q};
// newObj = {one: 2, two: 1251325};
    
// console.log(newObj);
// console.log(q);


//OOP basics, prototypal inheritance


// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("hello");
//     }
// };

//const jonh  = Object.create(soldier);// создаём новый оъект jonh который будет прототипно наследоваться от soldier
// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier; // старый тип прототипирования

//Object.setPrototypeOf(jonh, soldier); //новый тип протопитирования

//console.log(jonh.armor);
// jonh.sayHello();

//Practic 4

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", " ");
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", " ");
//         }
//     },

//     remeberMyFilms: function() {
//         for (let i = 0; i < 2; i++){
//             const a = prompt ("Один из последниз просмотренных фильмов", ""),
//                   b = prompt ("На сколько цените его?", "");
        
//                   if (a != null && b != null && a != '' && b != '' && a.length <50){
        
//                     personalMovieDB.movies[a] = b;
//                     console.log('done');
//                   }else {
//                       console.log('error');
//                       i--;
        
//                   }   
//         }
//     },

//     detectPersonlLevel: function() {
//         if  (personalMovieDB.count < 10) {
//              console.log('Просмотрено довольно мало фильмов');
//             } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//                 console.log('Вы классический зритель');
//             } else if (personalMovieDB.count >= 30) {
//                 console.log('Вы киноман');
//             } else {
//                 console.log('Ошибка');
//             }
//     },

//     showMyDB: function(hiden) {
//         if (!hiden){
//             console.log(personalMovieDB);
//         }
//     },

//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat){
//             personalMovieDB.privat = false;
//         }
//         else{
//             personalMovieDB.privat = true;
//         }
//     },

//     writeYourGenres: function() {
//         // первый способ
//         // for (let i = 1; i <= 3; i++){
//         // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    
//         // if (genre === '' || genre == null) {
//         //     console.log('Вы ввели некоректные данные или не ввели их вообще');
//         //     i--;
//         //     } else {
//         //     personalMovieDB.genres[i - 1] = genre;
//         //     }
//         //     personalMovieDB.genres.forEach((item, i) => {
//         //         console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         //     });
//         // }
//         // второй способ с помощью split
//         for (let i = 1; i < 2; i++){
//             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase; //toLowerCase используется для правильной сортировки
        
//             if (genres === '' || genres == null) {
//                 console.log('Вы ввели некоректные данные или не ввели их вообще');
//                 i--;
//                 } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//                 }
//                 personalMovieDB.genres.forEach((item, i) => {
//                     console.log(`Любимый жанр ${i + 1} - это ${item}`);
//                 });
//             }
//     }
   

// };