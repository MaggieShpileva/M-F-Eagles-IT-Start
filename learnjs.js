 alert("«Я JavaScript!»")
 
Работа с переменными
 let admin;
 let name;
 name = "Джон";
 admin=name;
 alert(admin)

Придумайте правильные имена
 let ourPlanerName;
 let currentUserName;
Какие буквы (заглавные или строчные) использовать для имён констант?
Для birthday можно использовать заглавные,т.к константа.
Для age нельзя, потому что значение меняется в зависимости от константы

Шаблонные строки
 let name = "Ilya";
 alert( `hello ${1}` ); // hello 1
 alert( `hello ${"name"}` ); // hello name
 alert( `hello ${name}` ); //hello Ilya

Простая страница
 let name = prompt("Введите имя")
 alert(name);

Постфиксная и префиксная формы
 let a = 1, b = 1;
 let c = ++a; // c = 2 a = 2
 let d = b++; // b = 2 d = 1

Результат присваивания
 a = 4
 x = 5

Преобразование типов
 "" + 1 + 0 //10
 "" - 1 + 0 //-1
 true + false //1
 6 / "3" //2
 "2" * "3" //6
 4 + 5 + "px" //9px
 "$" + 4 + 5 //$45
 "4" - 2 //2
 "4px" - 2 //Nan
 "  -9  " + 5 // -9 5
 "  -9  " - 5 // -14
 null + 1 // 1
 undefined + 1 //Nan
 " \t \n" - 2 //-2

Исправьте сложение
 let a = prompt("Первое число?", 1);
 let b = prompt("Второе число?", 2);
 alert(+a + +b); // 3

Операторы сравнения
 5 > 4 // true
 "ананас" > "яблоко" //false
 "2" > "12" // true
 undefined == null //true
 undefined === null // false
 null == "\n0\n" //false
 null === +"\n0\n" //false

Название JavaScript
 let value = prompt('Какое "официальное" название JavaScript?', '');
 if (value == 'ECMAScript') {
   alert('Верно!');
 } else {
   alert('Не знаете? ECMAScript!');
 }

Покажите знак числа
 let value = prompt('Введите число', 0);
 if (value > 0) {
   alert( 1 );
 } else if (value < 0) {
   alert( -1 );
 } else {
   alert( 0 );
 }

Перепишите 'if' в '?'
result = (a + b < 4) ? 'Мало' : 'Много';
let message = (login == 'Сотрудник') ? 'Привет' :(login == 'Директор') ? 'Здравствуйте' :(login == '') ? 'Нет логина' :'';
Логические операторы
if (age >= 14 && age <= 90)
if (age < 14 || age > 90)
 if (-1 || 0) alert( 'first' ); //выполнится
 if (-1 && 0) alert( 'second' );//не выполнится
 if (null || -1 && 1) alert( 'third' );//выполнится
 let userName = prompt("Кто там?", '');
 if (userName === 'Админ') {
   let pass = prompt('Пароль?', '');
   if (pass === 'Я главный') {
     alert( 'Здравствуйте!' );
   } else if (pass === '' || pass === null) {
     alert( 'Отменено' );
   } else {
     alert( 'Неверный пароль' );
   }
 }
 else if (userName === '' || userName === null) {
   alert( 'Отменено' );
 }
 else {
   alert( "Я вас не знаю" );
 }
let i = 0;
 while (i < 3) {
   alert( `number ${i}!` );
   i++;
 }
let num;
 do {
   num = prompt("Введите число больше 100?", 0);
 } while (num <= 100 && num);
let n = 10;
 nextPrime:
 for (let i = 2; i <= n; i++) {
   for (let j = 2; j < i; j++) {
     if (i % j == 0) continue nextPrime;
   }
   alert( i );
 }
if(browser == 'Edge') {
   alert("You've got the Edge!");
 } else if (browser == 'Chrome'
  || browser == 'Firefox'
  || browser == 'Safari'
  || browser == 'Opera') {
   alert( 'Okay we support these browsers too' );
 } else {
   alert( 'We hope that this page looks ok!' );
 }
const number = +prompt('Введите число между 0 и 3', '');
 switch (number) {
   case 0:
     alert('Вы ввели число 0');
     break;
   case 1:
     alert('Вы ввели число 1');
     break;
   case 2:
   case 3:
     alert('Вы ввели число 2, а может и 3');
     break;
 }
function checkAge(age) {
 return (age > 18) ? true : confirm('Родители разрешили?');
 }
function checkAge(age) {
 return (age > 18) || confirm('Родители разрешили?');
 }
function min(a, b) {
 return a < b ? a : b;
 }
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
 let isEmpty = (obj) => {
   for (let item in obj) {
     return true;
   }
   return false;
 };
 let sum = 0;
 for (let item in salaries ){
   sum += salaries[item]
 }
 let multiplyNumeric =(obj) => {
   for (let item in obj){
     obj[item] *=2
   }
 }
 let calculator = {
   read(){
     return(`${this.a} and  ${this.b}`)
   },
   sum(){
 return(this.a+this.b)
   },
   mul(){
     return(this.a*this.b)
   }
 }
 let a = +prompt("chislo a")
 let b = +prompt("chislo b")
 console.log(a+b);
let ucFirst = (str) => {
return(str[0].toUpperCase());
 };
 let checkSpam = (str) => {
   return(
     str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")
   );
 };
 let truncate = (str, maxlength) => {
   if (str.length > maxlength) {
     return(str.substr(0, maxlength - 1) + "...");
   }
 };
 let extractCurrencyValue = (str) => {
   return (Number(str.substr(1)));
 };
 let styles = ["Джаз", "Блюз"];
 styles.push("Рок-н-ролл");
 styles[Math.floor((styles.length - 1) / 2)] = "Классика";
 styles.shift()
 styles.unshift("Рэп", "Регги");
 a,b,(function() {alert( this )});
 
 В массив помещается вся функция целеком, и при выводе 2 элемента начальных и написанная функция
 let sumInput = () =>  {
   let arr = [];
   while (true) {
     let num = prompt("Введите число", 0);
     if (num === "" || num === null || !isFinite(num)) break;
     arr.push(+num);
   }
   let sum = 0;
   for (let item of arr) {
     sum += item;
   }
   return sum;
 }