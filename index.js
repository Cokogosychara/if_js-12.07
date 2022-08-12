// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

// const nameJsvsScript = prompt ('Какое «официальное» название JavaScript?','');
// if(nameJsvsScript == 'ECMAScript'){
//     userResponse = 'Правильно';
// }else{
//     userResponse = 'Не знаете? ECMAScript!';
// }
// alert (userResponse);







// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:


// const userPrice = prompt ('Введите число','');
// if (userPrice > 0 ) {
//     alert ('значение больше 0');
// } else if (userPrice < 0) {
//     alert ('значение емньше 0');
// } else {  
//     alert ('значение равно 0');
// }


// Препишите конструкцию if с использованием условного оператора '?':
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// решение1
// let result = ((a + b) < 4) ? ('мало') :('много');
// решение2
// const a = prompt ('введите число', ''); // +
// const b = prompt ('введите число', ''); // +
// let result = ((+a + +b) < 4) ?  alert ('мало') : alert ('много');//или так



// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости рекомендуется разбить код на несколько строк.

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }


// const login = prompt ('введите вашу должность','Сотрудник или Директор');
// let message = (login == 'Сотрудник') ? alert ('Привет') : (login == 'Директор') ? alert ('Здравствуйте') 
// : alert('Нет логина');






