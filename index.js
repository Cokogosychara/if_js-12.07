// задача 1
// 1. Запросить у пользователя его возраст и определить, кем он 
// является: ребенком (0–2), подростком (12–18), взрослым 
// (18_60) или пенсионером (60– ...).


// const age = prompt ('введите ваш возвраст', '');
// if (isNaN (age) || age < 0){
//     alert ('ошибка');
//  } else if ( age < 2) {
//     alert ('малыш');
// } else if (age < 18) {
//     alert ('подросток');
// } else if (age < 60) {
//     alert ('взрослый');
// } else if (age > 60 ) {
//     alert ('пенсионер');
// }

// задача2
// 2. Запросить у пользователя число от 0 до 9 и вывести ему 
// спецсимвол, который расположен на этой клавише (1–!, 
// 2–@, 3–# и т. д).

// const userNum = prompt ('введите цифру от 1 до 9', '');

// if ( userNum ===  ('1')){
//     alert ('!');
// } else if ( userNum ===  ('2')) {
//     alert ('@');
// } else if ( userNum ===  ('3')) {
//     alert ('#');
// } else if ( userNum ===  ('4')) {
//     alert ('$');
// } else if ( userNum ===  ('5')) {
//     alert ('%');
// } else if ( userNum ===  ('6')) {
//     alert ('^');
// } else if ( userNum ===  ('7')) {
//     alert ('&');
// } else if ( userNum ===  ('8')) {
//     alert ('*');
// } else if ( userNum ===  ('9')) {
//     alert ('(');
// } else if (userNum === ('0')) {
//     alert (')');
// } else {
//     alert ('число не верно');
// }

// const userNum = prompt ('введите цифру от 1 до 9', '');
// switch (userNum) {
//     case "1":
//         alert ('!');
//         break;
//     case "2":
//         alert ('@');
//         break;
//     case "3":
//         alert ('#');
//         break;
//     case "4":
//         alert ('$');
//         break;
//     case "5":
//         alert ('%');
//         break;
//     case "6":
//         alert ('^');
//         break;
//     case "7":
//         alert ('&');
//         break;
//     case "8":
//         alert ('*');
//         break;
//     case "9":
//         alert ('(');
//         break;
//     case "0":  
//         alert (')');
//         break;  
//     default:
//         alert('число не известно');
//         break;
// }


// задача 3

// 3. Запросить у пользователя трехзначное и число и проверить, 
// есть ли в нем одинаковые цифры.

// let userNum = prompt ('Введите трех значное число', '');
// const num3 = ( userNum % 10 );
// let integer =  ((userNum - num3) / 10 );
// const num2 = ( integer % 10 );
// let num1 = ( (integer - num2) / 10 );
// if ( userNum === null || userNum === '' ){
//     alert ('Отменино');
// } else if (num1 === num2 || num2 === num3 || num1 === num3 ){
//     alert ('есть сходства');
// } else {
//     alert ('нет сходств');
// }


// let userNum = prompt ('Введите трех значное число', '');
// const num3 = ( userNum % 10 );
// let integer =  ((userNum - num3) / 10 );
// const num2 = ( integer % 10 );
// let num1 = ( (integer - num2) / 10 );
// if ( userNum === null || userNum === '' || userNum === 0 ){
//     alert ('Отменино');
// } else if (num1 === num2) {
//     alert ('есть сходства');
// } else if (num2 === num3) {
//     alert ('есть сходства');
// } else if (num1 === num3) {
//     alert ('есть сходства');
// } else {
//     alert ('нет cходств');
// }

// 4. Запросить у пользователя год и проверить, високосный он 
// или нет. Високосный год либо кратен 400, либо кратен 4 и 
// при этом не кратен 100.


// const year = prompt ('введите год', '');
// if (!((yr % 4) || (!(yr % 100) && (yr % 400)))){
//     alert ('высокосный');
// }else{
//     alert ('не высокосный');
// }
// ily = function(yr) {return !((yr % 4) || (!(yr % 100) && (yr % 400)));};



// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// let userNum = prompt ('Введите пяти значное число','12345');

// const num5 = userNum % 10;
// const num4 = (userNum - num5) % 100 ; 
// const num3 = (userNum - (num5 + num4)) % 1000; 
// const num2 = (userNum - (num5 + num4 + num3)) % 10000; 
// const num1 = (userNum - (num5 + num4 + num3 + num2)) / 100000;

// if (num5 === num1 / 100000 || num2 / 1000 === num4 / 10 ){
//   alert ('число является палиндромом');
// }else{
//   alert ('число не является палиндромом');
// }

// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, 
// UAN или AZN, и получает в ответ соответствующую сумму

// const userSumma = prompt ('введите суму USD', '');

// const currencies = prompt ('выберете валюту в которую перевести: \n1 EUR \n2 UAN \n3 AZN');

// switch (currencies) {
//     case '1':
//     case 'EUR':
//     case 'eur':
//         const EUR  = (userSumma * 0.98);
//         alert (EUR.toFixed(1));
//         break;
//     case '2':
//     case 'UAN':
//     case 'uan':
//         const UAN  = (userSumma * 36.9);
//         alert (UAN.toFixed(1));
//         break;
//     case '3':
//     case 'AZN':
//     case 'azn':
//         const AZN  = (userSumma * 58.82);
//         alert (AZN.toFixed(1));
//         break;
//     default:
//     alert ('неизвестная валюта')
//         break;  
// }

// 7. Запросить у пользователя сумму покупки и вывести сумму 
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 
// до 500 – 5%, от 500 и выше – 7%. 

// const userSumma = prompt ('введите сумму покупки, что бы узнать скидку','');

// if (userSumma === null || userSumma === ''){
//     alert ('отмена');
// } else if (userSumma < 200) {
//     alert (userSumma +' у вас нет скидки');
// } else if (userSumma < 300) {
//     alert ( userSumma - (userSumma * 0.03)+' скидка 3 %');
// } else if (userSumma < 500) {
//     alert ( userSumma - (userSumma * 0.05)+' скидка 5 %');
// } else if (userSumma > 500) {
//     alert ( userSumma - (userSumma * 0.07)+' скидка 7 %');
// }


// 8. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 
// балла. После вопросов выведите пользователю количество 
// набранных баллов.
// let balls = 0;
// const firstQuestion = prompt ('в каком году началась 2 мировая ?','1939');
// (firstQuestion === '1939') ? balls = (balls+ 2)  : alert ('ответ не верен');    
// const secondQuestion = prompt ('в каком году закончилась 2 мировая ?','1945');
// (secondQuestion === '1945') ? balls = (balls+ 2) : alert ('ответ не верен');
// const thirdQuestion = prompt ('в каком году украина стала независимой ?','1991');
// (thirdQuestion === '1991') ? balls = (balls+ 2): alert ('ответ не верен');
// alert ('вы набрали '+ balls +' баллов');

// 9*. Запросить дату (день, месяц, год) и вывести следующую 
// за ней дату. Учтите возможность перехода на следующий 
// месяц, год, а также високосный годы


    