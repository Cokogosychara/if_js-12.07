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
// (year % 4 === 0 ) && (year % 100 !== 0 ) ?  alert ('высокосный') : alert ('не высокосный');

// const year = prompt ('введите год', '');
// if ((year % 4 === 0 ) && (year % 100 !== 0 )){
//     alert ('высокосный')
// } else{
//     alert ('не высокосный')
// }


// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// let userNum = prompt ('Введите пяти значное число','12345');

// const num5 = userNum % 10;
// userNum = (userNum - num5) % 100;
// alert (userNum);


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



// let birthDates = prompt ('Введите (день, месяц, год) ','31121998');
// if (birthDates === null || birthDates === '' ){
//     alert ('Отменино');
// }else if(birthDates){
//     const num8 = birthDates % 10; 
//     birthDates = (birthDates - num8) / 10;
//     const num7 = birthDates % 10; 
//     birthDates = (birthDates - num7) / 10;
//     const num6 = birthDates % 10; 
//     birthDates = (birthDates - num6) / 10;
//     const num5 = birthDates % 10; 
//     birthDates = (birthDates - num5) / 10;
//     const num4 = birthDates % 10; 
//     birthDates = (birthDates - num4) / 10;
//     const num3 = birthDates % 10; 
//     birthDates = (birthDates - num3) / 10;
//     const num2 = birthDates % 10; 
//     const num1 = (birthDates - num2) / 10;
//     let day = +(String(num1) + String(num2));
//     let month = +(String(num3) + String(num4));
//     let year = +(String(num5) + String(num6) + String(num7) + String(num8));
//     debugger
//     if ((year % 4 === 0 ) && (year % 100 !== 0 )){
//         if (month === 01){
//             if (day < 31){
//                 day +=1;
//             }else if (day > 31){
//                 day = 01;
//                 if (day === 01){
//                     month +=1;
//                 }
//             }
//         }else if (month === 02){
//             if (day < 29){
//                 day +=1;
//             }else if (day > 29){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 03){
//             if (day < 31){
//                 day +=1;
//             }else if (day > 31){
//                 day = 01;
//                 if (day === 01){
//                     month +=1;
//                 }
//             }
//         }else if (month === 04){
//             if (day < 30){
//                 day += 1;
//             }else if (day > 30){
//                 day = 01;
//                 if (day === 01){
//                     month +=1;
//                 }
//             }
//         }else if (month === 05){
//             if (day < 31){
//                 day +=1;
//             }else if (day > 31){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 06){
//             if (day < 30){
//                 day +=1;
//             }else if (day > 30){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 07){
//             if (day < 31){
//                 day +=1;
//             }else if (day > 31){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 08){
//             day < 32;
//             if (day < 31){
//                 day +=1;
//             }else if (day > 31){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 09){
//             day < 31;
//             if (day < 30){
//                 day +=1;
//             }else if (day > 30){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 10){
//             day < 32;
//             if (day < 31){
//                 day +=1;
//             }else if (day > 31){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 11){
//             day < 31;
//             if (day < 30){
//                 day +=1;
//             }else if (day > 30){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 12){
//             day < 32;
//             if (day < 31){
//                 day +=1;
//             }else if (day === 31){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                     if (month > 12){
//                         month = 01;
//                         if(month = 1){
//                             year +=1;
//                         }
//                     }
//                 }
//             }
//         }
//     } else {
//         if (month === 01){
//             day < 32;
//             if (day < 31){
//                 day +=1;
//             }else if (day === 31){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 02){
//             day < 29;
//             if (day < 28){
//                 day +=1;
//             }else if (day === 28){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 03){
//             day < 32;
//             if (day < 31){
//                 day +=1;
//             }else if (day === 31){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 04){
//             day < 31;
//             if (day < 30){
//                 day +=1;
//             }else if (day === 30){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 05){
//             day < 32;
//             if (day < 31){
//                 day +=1;
//             }else if (day === 31){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 06){
//             day < 31;
//             if (day < 30){
//                 day +=1;
//             }else if (day === 30){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 07){
//             day < 32;
//             if (day < 31){
//                 day +=1;
//             }else if (day === 31){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 08){
//             day < 32;
//             if (day < 31){
//                 day +=1;
//             }else if (day === 31){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 09){
//             day < 31;
//             if (day < 30){
//                 day +=1;
//             }else if (day === 30){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 10){
//             day < 32;
//             if (day < 31){
//                 day +=1;
//             }else if (day === 31){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 11){
//             day < 31;
//             if (day < 30){
//                 day +=1;
//             }else if (day === 30){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                 }
//             }
//         }else if (month === 12){
//             day < 32;
//             if (day < 31){
//                 day +=1;
//             }else if (day === 31){
//                 day = 01;
//                 if (day === 01){
//                     month += 1;
//                     if (month > 12){
//                         month = 01;
//                         if(month = 1){
//                             year +=1;
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     alert(' ваша дата ' + day + ' , ' + month + ' , ' + year);
// } else {
//   alert ('Ебать как тяжело');
// }


// Повторять цикл, пока ввод неверен
// важность: 5
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

// мое решение
 
// while (true){
//     let i = +prompt('введите число больше 100','');
//     if (i >= 100) break;
// }

//  решение програмы 
// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);
// alert(num);

// for (let num = 1; num < 10 ; ++num) {
//     if (num % 1 !== 0 || num % num !==0) continue;
//     alert (num);
// }

// let num = 10;
// let count = 0;
// while (count < maxTray){
//     const userInput = prompt ('введите ппароль','');
//     count++;
//     alert('tru ='+ count);
//     if(userInput === userPasswword){
//         alert ('код верен');
//         break;
//     }
// }

// ____________________________________________________________________________________________________________



// Написать код, который предлагает пользователю угадать "секретное число".

// Секретное число хранится в константе.
// Пользователь пытается угадать, вы в зависимоти от ответа пользователя даете подсказки: больше или меньше секретное число.
// После того, как пользователь угадал секретное число, вы выводите ему количество попыток, которые были потрачены на угадывание.
// const sicrNum = 5;
// let attempt = 0;
// while (attempt >= 0){
//     const userNum = prompt ('угадайте число от 1 до 100','');
//     attempt++;
//     if(userNum > sicrNum){
//         alert ('число меньше заданного');
//     }
//     if(userNum < sicrNum){
//         alert ('число больше заданного');
//     }
//     if(sicrNum == userNum){
//         alert (' вы угодали число ' + userNum + ' поздравляю' );
//         break;
//     }
    
    
// }

// alert ('количество попыток' + attempt);



// for (let count = 1; count <= maxTray ; count++) {
//     const userInput = prompt ('введите ппароль','');
//     alert('tru ='+ count);
//     if(userInput === userPasswword){
//         alert ('код верен');
//         break;
//     }
// }

// 1. Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.  сделал сам.

// let num1 = +prompt ('введите первое число', '');
// const num2 = +prompt ('введите второе число', '');
// let summa = 0;
// while ( num1 < num2 ) {
//     num1++;
//     summa += num1;
// }
// alert ( summa );


// let num1 = +prompt ('введите первое число', '');
// const num2 = +prompt ('введите второе число', '');
// let summa = 0;
// do {
//    num1++;
//    summa += num1;
// } while( num1 < num2 );

// alert ( summa );

// let num1 = +prompt ('введите первое число', '');
// const num2 = +prompt ('введите второе число', '');
// let summa = 0;
// for( num1; num1 < num2;){
//     num1++;
//     summa += num1;
// }
// alert ( summa );


// 2. Запросить 2 числа и найти только наибольший общий
// делитель.


// const num1 = +prompt ('введите первое число', '');
// const num2 = +prompt ('введите второе число', '');

// for (let divider = num1; divider <= num1; divider--) {
//     if ( num1 % divider === 0){
//         if (num2 % divider === 0){
//             alert ( divider );break;
//         }
//     }
// }


// const num1 = +prompt ('введите первое число', '');
// const num2 = +prompt ('введите второе число', '');
// let divider = num1
// while ( num1 ) {
//     if  ( num1 % divider === 0 && num2 % divider === 0 ){
//         alert ( divider );break;
//     }
//     divider--;
// }

// const num1 = +prompt ('введите первое число', '');
// const num2 = +prompt ('введите второе число', '');
// let divider = num1
// do {
//     if  ( num1 % divider === 0 && num2 % divider === 0 ){
//         alert ( divider );break;
//     }
//     divider--;
// } while (true);



// 3. Запросить у пользователя число и вывести все делители
// этого числа.

// const userNum = +prompt ('введите число ', '');
// for (let divider = 0; divider <= userNum; divider++) {
//     if (userNum % divider === 0) {
//         alert (divider);
//     }
// }

// const userNum = +prompt ('введите число ', '');
// let divider = 0;
// while (divider <= userNum) {
//     divider++;
//     if ( userNum % divider === 0 ){
//         alert ( divider );
//     }
// }


// const userNum = +prompt ('введите число ', '');
// let divider = 1;
// do {
//     if ( userNum % divider === 0 ){
//         alert ( divider );
//     }
//     divider++;
// } while (divider <= userNum);

// 4.* Определить количество цифр в введенном числе. Использовать % 

// let userNum = +prompt ('введите число','1234');
// let nums = 0;
// let result = 1;

// if ( userNum === null || userNum === '' || userNum === 0 ) {
//     result = 0;
// } 
// for (result; result < userNum; result++) {
//     if (userNum !== null && userNum !== '' ) {
//         nums = userNum % 10;
//         userNum = (userNum - nums) / 10;  
//     } 
// }
// alert ('количество чисел равно ' +result );


// let userNum = +prompt ('введите число','1234');
// let nums = 0;
// let result = 1;

// if ( userNum === null || userNum == '' || userNum === 0 ) {
//     result = 0;
// } 
// while ( result < userNum ) {
//     if (userNum !== null && userNum !== '' ) {
//         nums = userNum % 10;
//         userNum = (userNum - nums) / 10;  
//         result++;
//     } 
// }
// alert ('количество чисел равно ' +result );


// let userNum = +prompt ('введите число','1234');
// let nums = 0;
// let result = 1;
// do {
//     result++;
//     nums = userNum % 10;
//     userNum = (userNum - nums) / 10;  
    
// } while ( result < userNum );


// alert ('количество чисел равно ' +result );

// 5. Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести
// статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

// const numbers = 10;
// let zero = 0;
// let positively = 0;
// let negative = 0;
// let even = 0;
// let notEven = 0;
// for ( let index = 0; index < numbers; index++ ) {
//      userNum = +prompt ('введите число',''); 
//      console.log ( userNum ); 
//      if ( userNum === 0 ) {
//         ++zero;
//      } else if ( userNum < 0 ) {
//         ++negative;
//      } else if ( userNum > 0 ) {
//         ++positively
//      } 
//      if ( userNum % 2 === 0 ) {
//         ++even;
//      }
//      if ( userNum % 2 !== 0 ) {
//         ++notEven
//      }
// }
// console.log ( zero +' нолей ');
// console.log ( negative +' отрицательных ' );
// console.log (positively +' положительных ' );
// console.log ( even +' четных ' );
// console.log ( notEven +' не четных ' );





// const numbers = 10;
// let index = 0;
// let zero = 0;
// let positively = 0;
// let negative = 0;
// let even = 0;
// let notEven = 0;
// while (index  < numbers ) {
//     userNum = +prompt ('введите число',''); 
//     console.log ( userNum ); 
//     if ( userNum === 0 ) {
//        ++zero;
//     } else if ( userNum < 0 ) {
//        ++negative;
//     } else if ( userNum > 0 ) {
//        ++positively
//     } 
//     if ( userNum % 2 === 0 ) {
//        ++even;
//     }
//     if ( userNum % 2 !== 0 ) {
//        ++notEven
//     }
//     index++;
// }
// console.log ( zero +' нолей ');
// console.log ( negative +' отрицательных ' );
// console.log (positively +' положительных ' );
// console.log ( even +' четных ' );
// console.log ( notEven +' не четных ' );





// const numbers = 10;
// let index = 0;
// let zero = 0;
// let positively = 0;
// let negative = 0;
// let even = 0;
// let notEven = 0;
// do {
//     userNum = +prompt ('введите число',''); 
//     console.log ( userNum ); 
//     if ( userNum === 0 ) {
//        ++zero;
//     } else if ( userNum < 0 ) {
//        ++negative;
//     } else if ( userNum > 0 ) {
//        ++positively
//     } 
//     if ( userNum % 2 === 0 ) {
//        ++even;
//     }
//     if ( userNum % 2 !== 0 ) {
//        ++notEven
//     }
//     index++;
// } while (index < numbers);

// console.log ( zero +' нолей ');
// console.log ( negative +' отрицательных ' );
// console.log (positively +' положительных ' );
// console.log ( even +' четных ' );
// console.log ( notEven +' не четных ' );


// 6. Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.



// let num1;
// let num2;
// let result = 0;

// for (let index = 1; index; index) {
//     num1 = +prompt ( 'введите число', '' );
//     num2 = +prompt ( 'введите число', '' );
//     sign = prompt ( 'введите знак', '+, -, /, *' );
// debugger
//     switch (sign) {
//         case '+':
//             result = num1 + num2;
//             alert(result);
//             break;
//             case '-':
//             result = num1 - num2;
//             alert(result);
//             break;
//             case '/':
//             result = num1 / num2;
//             alert(result);
//             break;
//             case '*':
//             result = num1 * num2;
//             alert(result);
//             break;
//         default:
//             alert('попробуй те еще раз!');
//             break;
//     }
//     index = confirm ('хотите решить еще один пример?');
  
// }


// let num1;
// let num2;
// let result = 0;
// let index = 1

// while (index) {
//     num1 = +prompt ( 'введите число', '' );
//     num2 = +prompt ( 'введите число', '' );
//     sign = prompt ( 'введите знак', '+, -, /, *' );
//     debugger
//     switch (sign) {
//         case '+':
//             result = num1 + num2;
//             alert (result);
//             break;
//             case '-':
//                 result = num1 - num2;
//                 alert (result);
//                 break;
//                 case '/':
//                 result = num1 / num2;
//                 alert (result);
//                 break;
//                 case '*':
//                 result = num1 * num2;
//                 alert (result);
//                 break;
//                 default:
//                     alert('попробуй те еще раз!');
//                     break;
//                 }
//                 index = confirm ('хотите решить еще один пример?');
               
// }




// let num1;
// let num2;
// let result = 0;
// let index = 1;
// do {
//     num1 = +prompt ( 'введите число', '' );
//     num2 = +prompt ( 'введите число', '' );
//     sign = prompt ( 'введите знак', '+, -, /, *' );
//     switch (sign) {
//         case '+':
//             result = num1 + num2;
//             alert(result);
//             break;
//             case '-':
//                 result = num1 - num2;
//                 alert(result);
//                 break;
//                 case '/':
//                 result = num1 / num2;
//                 alert(result);
//                 break;
//                 case '*':
//                 result = num1 * num2;
//                 alert(result);
//                 break;
//                 default:
//                     alert('попробуй те еще раз!');
//                     break;
//                 }
//                 index = confirm ('хотите решить еще один пример?');

// } while ( index  );

// 7. Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока
// пользователь нажимает OK.(switch внутри цикла)


// let dey = +prompt (' введите день недел ', '1')
// let index = true;
// for (index; index; dey++) { 
//        if (dey > 7 ) {
//         alert ('день не найден'); break; 
//     } else if ( dey !== 0 ) {
//         switch (dey) {
//             case 1:
//              alert ('понелеьник');
//              break;
//              case 2:
//              alert ('вторник');
//              break;
//              case 3:
//              alert ('среда');
//              break;
//              case 4:
//              alert ('четверг');
//              break;
//              case 5:
//              alert ('пятница');
//              break;
//              case 6:
//              alert ('субота');
//              break;
//              case 7:
//              alert ('воскрисение');
//              dey = 0;
//              break;
//             default:
//                 break;   
//         }
//         index = confirm ('хотите увидеть следующий день?');
//     } else {
//         alert ('отмена'); break;
//     }
// }

// let dey = +prompt (' введите день недел ', '1')
// let index = true;
// debugger;
// while (index) {
//     if (dey > 7 ) {
//         alert ('день не найден'); break; 
//     } else if ( dey !== 0 ) {
//         switch (dey) {
//             case 1:
//              alert ('понелеьник');
//              break;
//              case 2:
//              alert ('вторник');
//              break;
//              case 3:
//              alert ('среда');
//              break;
//              case 4:
//              alert ('четверг');
//              break;
//              case 5:
//              alert ('пятница');
//              break;
//              case 6:
//              alert ('субота');
//              break;
//              case 7:
//              alert ('воскрисение');
//              dey = 0;
//              break;
//             default:
//                 break;   
//         }
//         index = confirm ('хотите увидеть следующий день?');
//     } else {
//         alert ('отмена'); break;
//     }
    
// }
// let dey = +prompt (' введите день недел ', '1')
// let index = true;
// do {
//        if (dey > 7 ) {
//         alert ('день не найден'); break; 
//     } else if ( dey !== 0 ) {
//         switch (dey) {
//             case 1:
//              alert ('понелеьник');
//              break;
//              case 2:
//              alert ('вторник');
//              break;
//              case 3:
//              alert ('среда');
//              break;
//              case 4:
//              alert ('четверг');
//              break;
//              case 5:
//              alert ('пятница');
//              break;
//              case 6:
//              alert ('субота');
//              break;
//              case 7:
//              alert ('воскрисение');
//              dey = 0;
//              break;
//             default:
//                 break;   
//         }
//         index = confirm ('хотите увидеть следующий день?');
//     } else {
//         alert ('отмена'); break;
//     }
// } while (index);

// 8. Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10(вложеный цикл).
// let result = 0
// for (let i = 2; i < 10; i++) {
//     console.log ('умножаем ' + i);
//     for (let j = 1; j <= 10; j++) {
//         result = i * j;
//         console.log ( i +' * ' + j +' = ' + result);
//     } 
// }


// let result = 0
// let i = 2;
// let maxNum = 10
// while(i < maxNum ){
//     console.log ('умножаем ' + i);
//      j = 1;
//     while(j <= maxNum ){
//         result = i * j;
//         console.log ( i +' * ' + j +' = ' + result);
//         j++;
//     }
//     i++;
// }
 

// 9.* Игра «Угадай число». Предложить пользователю загадать
// число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам,
// записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, < N или == N?». В зависимости от того
// что указал пользователь, уменьшаете диапазон. Начальный
// диапазон от 0 до 100, поделили пополам и получили 50.
// Если пользователь указал, что его число > 50, то изменили
// диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

// const userNum = prompt('введите число от 0');
// let N = 50; 
// let maxNum = 100; 
// let minNum = 0;

// for (let index = 1; index ; index) {
//     let j = prompt (' ваше число ' +N +' ?' + ' если нет выберете <, >, =');
//     if (j ==='<' || j ==='>' || j ==='=') {
//     switch (j) {
//         case '>':
//             --N;
//             maxNum = N;
//             N = Math.floor((maxNum - minNum)  / 2 + minNum);
//             break;
//             case '<':
//             ++N;   
//             minNum = N;
//             N = Math.floor((maxNum - N) / 2 + minNum );
//             break;
//             case '=':
//             alert('ваше число =  ' + userNum);    
//             index = null;
//             break;  
//         default:
//             break;
//     } 
//    } else { 
//     alert ('выберете знак');
//    }
    
// }

// const userNum = prompt('введите число от 0');
// let N = 50; 
// let maxNum = 100; 
// let minNum = 0;
// let tru = 1;
// while(tru){
//     let j = prompt (' ваше число ' +N +' ?' + ' если нет выберете <, >, =');
//     if (j ==='<' || j ==='>' || j ==='=') {
//         switch (j) {
//         case '>':
//             --N;
//             maxNum = N;
//             N = Math.floor((maxNum - minNum)  / 2 + minNum);
//             break;
//             case '<':
//             ++N;   
//             minNum = N;
//             N = Math.floor((maxNum - N) / 2 + minNum );
//             break;
//             case '=':
//             alert('ваше число =  ' + userNum);    
//             tru = null;
//             break;  
//         default:
//             break;
//         } 
//     } else { 
//     alert ('выберете знак');
// }
// }


// const userNum = prompt('введите число от 0');
// let N = 50; 
// let maxNum = 100; 
// let minNum = 0;
// let tru = 1;

// do{
//     let j = prompt (' ваше число ' +N +' ?' + ' если нет выберете <, >, =');
//     if (j ==='<' || j ==='>' || j ==='=') {
//         switch (j) {
//         case '>':
//             --N;
//             maxNum = N;
//             N = Math.floor((maxNum - minNum)  / 2 + minNum);
//             break;
//             case '<':
//             ++N;   
//             minNum = N;
//             N = Math.floor((maxNum - N) / 2 + minNum );
//             break;
//             case '=':
//             alert(' ваше число =  ' + userNum);    
//             tru = null;
//             break;  
//         default:
//             break;
//         } 
//     } else { 
//     alert ('выберете знак');
//     }

// } while (tru);








// 10. Треугольник из звездочек в консоле. Размер зависит от ввода пользователя

// Желаемое количество строк
// let max = prompt('введите число');
// let i = 0;
// let space = "";
//  let star = "";
// while (i < max) {
//     space = "";
//     star = "";
//     for (j = 0; j < max - i; j++) space += " ";
//     for (j = 0; j < 2 * i + 1; j++) star += "*";
//     console.log(space + star);
//     i++;
// }

// ______________________________________________________
// 1. Написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше, чем второе; 1 – если первое 
// больше, чем второе; и 0 – если числа равны.
// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
// 3. Написать функцию, которая принимает три отдельные 
// цифры и превращает их в одно число. Например: цифры 
// 1, 4, 9 превратятся в число 149.
// 4. Написать функцию, которая принимает длину и ширину 
// прямоугольника и вычисляет его площадь. Если в функцию 
// передали 1 параметр, то она вычисляет площадь квадрата.
// 5. Написать функцию, которая проверяет, является ли переданное
// ей число совершенным. Совершенное число – это 
// число, равное сумме всех своих собственных делителей.
// 6. Написать функцию, которая принимает минимальное и 
// максимальное значения для диапазона, и выводит только 
// те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, 
// совершенное число или нет.
// 7. Написать функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были 
// переданы, то выводить их как 00.
// 8. Написать функцию, которая принимает часы, минуты и 
// секунды и возвращает это время в секундах.
// 9. Написать функцию, которая принимает количество секунд, 
// переводит их в часы, минуты и секунды и возвращает в 
// виде строки «чч:мм:сс».
// 10*. Написать функцию, которая считает разницу между датами. 
// Функция принимает 6 параметров, которые описывают 2 
// даты, и возвращает результат в виде строки «чч:мм:сс». При 
// выполнении задания используйте функции из предыдущих 2-х заданий:
// сначала обе даты переведите в секунды, 
// узнайте разницу в секундах, а потом разницу переведите 
// обратно в «чч:мм:сс»



// 1. Написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше, чем второе; 1 – если первое 
// больше, чем второе; и 0 – если числа равны.


// const comparison = function (num1, num2) {
//     if (num1 < num2) {
//         return -1;
//     } else if (num1 > num2) {
//         return 1;
//     } else {
//         return 0;
//     } 
// }

// const result = comparison (2, 2);
// console.log(result);


// const input1 = prompt('введите число для сравнения');
// const input2 = prompt('введите число для сравнения');

// const comparison = function (num1, num2) {
//     if (num1 < num2) {
//         return -1;
//     } else if (num1 > num2) {
//         return 1;
//     } else {
//         return 0;
//     } 
// }

// const result = comparison (input1, input2);
// alert(result);



// function comparison (num1, num2) {
//     if (num1 < num2) {
//         return -1;
//     } else if (num1 > num2) {
//         return 1;
//     } else {
//         return 0;
//     } 
// }

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.

// const factorial = function (num) { 
//     let factorial = num; 
//     for (let index = 1; index < num; index++) {
//         factorial = factorial * index;
//     }
//     return factorial;
// }

// const result = factorial (5);
// console.log(result);




// const factorial = function (num) { 
//     return (num != 1) ? num * factorial(num - 1) : 1;
// }
// const result = factorial (5);
// console.log(result);




// const userNun = prompt ('введиите число что бы вычеслить факториал');

// const factorial = function (num) { 
//     let factorial = num; 
//     for (let index = 1; index < num; index++) {
//         factorial = factorial * index;
//     }
//     return factorial;
// }

// const result = factorial (userNun);
// alert(result);

// 3. Написать функцию, которая принимает три отдельные 
// цифры и превращает их в одно число. Например: цифры 
// 1, 4, 9 превратятся в число 149.

// const oneNumber = function (num1,num2,num3) {
//     return String(num1) + String(num2) + String(num3);
// }

// console.log (oneNumber(1,2,3));

// const oneNumber = function (num1,num2,num3) {
//     result = String(num1) + String(num2) + String(num3);
//     return result;
// }
// console.log (oneNumber(1,2,3));



// 4. Написать функцию, которая принимает длину и ширину 
// прямоугольника и вычисляет его площадь. Если в функцию 
// передали 1 параметр, то она вычисляет площадь квадрата.

// const square = function (num1,num2) {
//    if (!isNaN(num1) && !isNaN(num2) && num1 !== 0 && num2 !== 0 ) {
//        return num1 * num2;
//    } else if (num1 === 0 && num2 === 0 ) {
//        return 'вычесление не возможно';
//    } else if ( num1 === 0 ) {
//        return num2 * num2;
//    } else {
//     return num1 * num1;
//    }
// }

// const result = square (3,0);
// alert (result);

// 5. Написать функцию, которая проверяет, является ли переданное
// ей число совершенным. Совершенное число – это 
// число, равное сумме всех своих собственных делителей.

// const perfectNumber = function (num) {
//     let divider = 0;
//     let summa = 0;
//     const result = num;
//     while (divider < num - 1) { 
//         divider++; 
//         if( result % divider === 0 ) {
//             summa += divider;
//             console.log(summa);
//         }    
// }
// if (summa === result) {
//     perfect =  'число ' + result + ' совершенное';
//     return perfect;
// } 
// }
// const result = perfectNumber(6);
// console.log (result);

// const perfectNumber = function (num) {
//     let divider;
//     let summa = 0;
//     for ( let index = 1; index < num - 1; index++) { 
//         divider = num % index;
//         if (divider === 0 ) {
//             summa += index;
//             console.log(summa);
//         }    
// }
// if (summa === num) {
//     perfect =  'число ' + num + ' совершенное';
//     return perfect;
// } 
// }
// const result = perfectNumber(496);
// console.log (result);




// 6. Написать функцию, которая принимает минимальное и 
// максимальное значения для диапазона, и выводит только 
// те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, 
// совершенное число или нет.

// const perfectNumber =  (num) => {
//     const result = num;
//     for (let index = 2; index <= result ; index++) {
//         let divider = 0;
//         let summa = 0;
//         while (divider < index - 1) { 
//             divider++; 
//             if( index % divider === 0 ) {
//                 summa += divider;
//             }    
//         }
//         if (summa === index) {
//             const perfect =  'число ' + index + ' совершенное';
//             console.log(perfect);
//         } 
//     }
// }
// const result = perfectNumber(8128);

// const perfectNumber = function (num) {
//     const result = num;
//     for (let i = 2; i <= result ; i++) {
//         let divider = 0;
//         let summa = 0;
//         for ( let j = 0; j < i - 1; j++) { 
//             divider = i % j;
//             if(divider === 0 ) {
//                 summa += j;
//             }    
//         }
//         if (summa === i) {
//             const perfect =  'число ' + i + ' совершенное';
//             console.log(perfect);
//         } 
//     }
// }
// const result = perfectNumber(496);



// 7. Написать функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были 
// переданы, то выводить их как 00.


// const timeFunct = function (num1,num2,num3) {
    // isNaN(num1) || num1 === 0 ? num1 = '00' : num1 = num1;
//     isNaN(num3) || num3 === 0 ? num3 = '00' : num3 = num3;
//     isNaN(num2) || num2 === 0 ? num2 = '00' : num2 = num2;
//     return String(num1) + 'ч:' + String(num2) + 'м:' + String(num3) + 'с';
//  }
// console.log(timeFunct(12));


// const hour = +prompt ('введите какой сейчас час', '11');
// const minutes = +prompt ('введите минуты', '11');
// const second = +prompt ('введите секунды', '11');

// const timeFunct = function (num1,num2,num3) {
//     isNaN(num1) || num1 === 0 ? num1 = '00' : num1 = num1;
//     isNaN(num2) || num2 === 0 ? num2 = '00' : num2 = num2;
//     isNaN(num3) || num3 === 0 ? num3 = '00' : num3 = num3;
//     return mesege = String(num1) + 'ч:' + String(num2) + 'м:' + String(num3) + 'с';
//  }
// console.log(timeFunct(hour,minutes,second));


// 8. Написать функцию, которая принимает часы, минуты и 
// секунды и возвращает это время в секундах.

// const returnsSecond = function (num1,num2,num3) {
//    return ( num1 * 60 + num2 ) * 60 + num3;
// }
// console.log(returnsSecond(12,13,40));

// const hour = +prompt ('введите какой сейчас час', '11');
// const minutes = +prompt ('введите минуты', '11');
// const second = +prompt ('введите секунды', '11');

// const returnsSecond = function (num1,num2,num3) {
//     isNaN(num1) ? num1 = 0 : num1 = num1;
//     isNaN(num2) ? num2 = 0 : num2 = num2;
//     isNaN(num3) ? num3 = 0 : num3 = num3;
//    return ( num1 * 60 + num2 ) * 60 + num3 + 'c';
// }
// console.log(returnsSecond(hour,minutes,second));


// 9. Написать функцию, которая принимает количество секунд, 
// переводит их в часы, минуты и секунды и возвращает в 
// виде строки «чч:мм:сс».

// const returnsTames = function ( num ) {
//    const hour = Math.floor(num / 60 / 60);
//    const minutes = Math.floor(num / 60) - hour * 60;
//    const second = num % 60;
//    return mesege = String(hour) + 'ч:' + String(minutes) + 'м:' + String(second) + 'с';
   
// }
// console.log(returnsTames (4378));

// 10*. Написать функцию, которая считает разницу между датами. 
// Функция принимает 6 параметров, которые описывают 2 
// даты, и возвращает результат в виде строки «чч:мм:сс». При 
// выполнении задания используйте функции из предыдущих 2-х заданий:
// сначала обе даты переведите в секунды, 
// узнайте разницу в секундах, а потом разницу переведите 
// обратно в «чч:мм:сс»

// const returnsSecond = function (num1,num2,num3) {
//     return ( num1 * 60 + num2 ) * 60 + num3;
//  }

// const returnsTames = function ( num ) {
//     const hour = Math.floor(num / 60 / 60);
//     const minutes = Math.floor(num / 60) - hour * 60;
//     const second = num % 60;
//     return String(hour) + 'ч:' + String(minutes) + 'м:' + String(second) + 'с';
//  }

// const returnsDifferenceInDays = function (num1,num2,num3,num4,num5,num6) {
//     let difference;

//     const dey1 = returnsSecond (num1,num2,num3);
//     const dey2 = returnsSecond (num4,num5,num6);

//     dey1 < dey2 ? difference = dey2 - dey1 : difference = dey1 - dey2;

//     return returnsTames(difference);
// }
   

   
//   let result = returnsDifferenceInDays(12,12,12,11,11,11);
//   console.log(result);
   
//  alert(returnsDifferenceInDays(12,12,12,11,11,11));
// ______________________________________________________________________

// 4.* Определить количество цифр в введенном числе. Использовать % 

// let userNum = +prompt ('введите число','1234');
// let nums = 0;
// let result = 1;

// if ( userNum === null || userNum === '' || userNum === 0 ) {
//     result = 0;
// } 
// for (result; result < userNum; result++) {
//     if (userNum !== null && userNum !== '' ) {
//         nums = userNum % 10;
//         userNum = (userNum - nums) / 10;  
//     } 
// }
// alert ('количество чисел равно ' +result );

//ИСПРАВИЛ
// let userNum = +prompt ('введите число','1234');
// let nums = 0;
// let result = 0;

// while (true) {
//     if (userNum !== 0) {
//         nums = userNum % 10;
//         userNum = (userNum - nums) / 10;  
//         result++; 
//     } else {
//         alert ('количество чисел равно ' +result );
//         break;
//     } 
// }



// let userNum = +prompt ('введите число','1234');
// let nums = 0;
// let result = 0;
// do {
//     if (userNum !== 0) {
//         nums = userNum % 10;
//         userNum = (userNum - nums) / 10;  
//         result++; 
//     } else {
//         alert ('количество чисел равно ' +result );
//         break;
//     }  
    
// } while ( true );



// _________________________________________________________

// 1.Есть три числа. Найти среди них найбольшее.

// const num1 = 12;
// const num2 = 15234;
// const num3 = 1120;

// if (num1 > num2 && num1 > num3) {
//     console.log(num1);
// } else if (num2 > num1 && num2 > num3){
//     console.log(num2);
// } else console.log(num3);

// (num1 > num2 && num1 > num3) 
// ? console.log(num1) 
// : (num2 > num1 && num2 > num3) 
// ? console.log(num2)
// : console.log(num3);



// 2.Есть две кредитные карты. На одной есть деньги(x) и на второй(y).
// Написать программу, которая будет сообщать сможем ли мы купить 
// товар за n-денег. С карты на карту деньги переводить нельзя. 
// Суммировать их тоже нельзя.


// const caredit1 = 500;
// const caredit2 = 500;
// const n = 1000;

// if ( n < caredit1 || n < caredit2 || n - caredit1 <= caredit2) console.log('покупеп успешна');
// else console.log('ищи денюжку не хватает');

// 3.Есть кредитная карта. Есть возраст пользователя.
// Он сможет купить фалос, только если он совершеннолетний и хватает денег.

// const credit = 100;
// const earUser = 18;
// const sum = 200;

// if (earUser >= 18 && credit > sum ) console.log('дрочи на здоровье');
// else console.log('подрочишь огурцом');


// 4.Пользователь вводит число. Если число четное или трехзначное,
// сообщить ему, что он красавчик. В другом случае сообщить, что
// он будет батраком в Польше.


// const userNum = prompt ('введи число ботрак, смотри не проеби!');

// if (userNum % 2 === 0 ||  userNum >= 100 ) {
//     alert('поздравляю ты не батрак');
// } else alert('пиздуй на строку батрак');



// -____________________________________________________________________________

// 0. Переписать все задания из предыдущего д.з. стрелочными функциеми.


// ____________________Переделал_____________________
// 1. Написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше, чем второе; 1 – если первое 
// больше, чем второе; и 0 – если числа равны.


// const comparison = (num1, num2) => {
//     if (num1 < num2) {
//         return -1;
//     } else if (num1 > num2) {
//         return 1;
//     } else {
//         return 0;
//     } 
// }

// const result = comparison (1, 2);
// console.log(result);

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.

// const factorial = (num) => { 
//     let factorial = num; 
//     for (let index = 1; index < num; index++) {
//         factorial *= index;
//     }
//     return factorial;
// }

// const result = factorial (5);
// console.log(result);

// 3. Написать функцию, которая принимает три отдельные 
// цифры и превращает их в одно число. Например: цифры 
// 1, 4, 9 превратятся в число 149.

// const oneNumber = (num1,num2,num3) => String(num1) + String(num2) + String(num3);

// console.log (oneNumber(1,2,3));

// 4. Написать функцию, которая принимает длину и ширину 
// прямоугольника и вычисляет его площадь. Если в функцию 
// передали 1 параметр, то она вычисляет площадь квадрата.

// const square = (num1,num2) => {
//    if (!isNaN(num1) && !isNaN(num2) && num1 !== 0 && num2 !== 0 ) {
//        return num1 * num2;
//    } else if (num1 === 0 && num2 === 0 ) {
//        return 'вычесление не возможно';
//    } else if ( num1 === 0 ) {
//        return num2 * num2;
//    } else {
//     return num1 * num1;
//    }
// }

// const result = square (3,0);
// alert (result);

// 5. Написать функцию, которая проверяет, является ли переданное
// ей число совершенным. Совершенное число – это 
// число, равное сумме всех своих собственных делителей.

// const perfectNumber = (num) => {
//     let divider = 0;
//     let summa = 0;
//     const result = num;
//     while (divider < num - 1) { 
//         divider++; 
//         if( result % divider === 0 ) {
//             summa += divider;
//             console.log(summa);
//         }    
// }
// if (summa === result) {
//     perfect =  'число ' + result + ' совершенное';
//     return perfect;
// } 
// }
// const result = perfectNumber(6);
// console.log (result);

// 6. Написать функцию, которая принимает минимальное и 
// максимальное значения для диапазона, и выводит только 
// те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, 
// совершенное число или нет.


// const perfectNumber = (amxNum,minNum) => {
//     const result = amxNum;
//     for ( minNum ; minNum <= result ; minNum++) {
//         let divider = 0;
//         let summa = 0;
//         for ( let j = 0; j < minNum - 1; j++) { 
//             divider = minNum % j;
//             if(divider === 0 ) {
//                 summa += j;
//             }    
//         }
//         if (summa === minNum) {
//             const perfect =  'число ' + minNum + ' совершенное';
//             console.log(perfect);
//         } 
//     }
// }
// const result = perfectNumber(496,6);

// 7. Написать функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были 
// переданы, то выводить их как 00.


// const timeFunct = (num1,num2,num3) => {
//     isNaN(num1) || num1 === 0 ? num1 = '00' : num1 = num1;
//     isNaN(num3) || num3 === 0 ? num3 = '00' : num3 = num3;
//     isNaN(num2) || num2 === 0 ? num2 = '00' : num2 = num2;
//     return String(num1) + 'ч:' + String(num2) + 'м:' + String(num3) + 'с';
//  }
// console.log(timeFunct(12));

// 8. Написать функцию, которая принимает часы, минуты и 
// секунды и возвращает это время в секундах.

// const returnsSecond = (num1,num2,num3) => {
//    return ( num1 * 60 + num2 ) * 60 + num3;
// }
// console.log(returnsSecond(12,13,40));

// 9. Написать функцию, которая принимает количество секунд, 
// переводит их в часы, минуты и секунды и возвращает в 
// виде строки «чч:мм:сс».

// const returnsTames = ( num ) => {
//    const hour = Math.floor(num / 60 / 60);
//    const minutes = Math.floor(num / 60) - hour * 60;
//    const second = num % 60;
//    return mesege = String(hour) + 'ч:' + String(minutes) + 'м:' + String(second) + 'с';
   
// }
// console.log(returnsTames (4378));


// 10*. Написать функцию, которая считает разницу между датами. 
// Функция принимает 6 параметров, которые описывают 2 
// даты, и возвращает результат в виде строки «чч:мм:сс». При 
// выполнении задания используйте функции из предыдущих 2-х заданий:
// сначала обе даты переведите в секунды, 
// узнайте разницу в секундах, а потом разницу переведите 
// обратно в «чч:мм:сс»

// const returnsSecond = (num1,num2,num3) => ( num1 * 60 + num2 ) * 60 + num3;
 

// const returnsTames = ( num ) => {
//     const hour = Math.floor(num / 60 / 60);
//     const minutes = Math.floor(num / 60) - hour * 60;
//     const second = num % 60;
//     return String(hour) + 'ч:' + String(minutes) + 'м:' + String(second) + 'с';
//  }

// const returnsDifferenceInDays = (num1,num2,num3,num4,num5,num6) => {
//     let difference;

//     const dey1 = returnsSecond (num1,num2,num3);
//     const dey2 = returnsSecond (num4,num5,num6);

//     dey1 < dey2 ? difference = dey2 - dey1 : difference = dey1 - dey2;

//     return returnsTames(difference);
// }
   

   
//   let result = returnsDifferenceInDays(12,12,12,11,11,11);
//   console.log(result);
 

// _______________________________НОВЫЕ_ЗАДАНИЯ_ОБЕКТЫ_____________________________________

// Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость).
// Cледующие функции для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.


const Cars = function (model,yearIssue,averageSpeed) {
    this.model = model;
    this.yearIssue = yearIssue;
    this.averageSpeed = averageSpeed;
}

const car1 = new Cars ('Renault', 2006, 90);

// car1 = {
//     model: 'Renault',
//     yearIssue: 2006,
//     averageSpeed: 90,
// }
const infoCar1 = () => console.log( `model - ${car1.model} \nyearIssue - ${car1.yearIssue} \naverageSpeed - ${car1.averageSpeed}`);
infoCar1(car1);

const  returnSecond = (time) => {
    
    let second = time * 60;

    return returnsTames(second);
}

const returnsTames = ( num ) => {

    let hour = Math.floor(num / 60 / 60);

    const minutes = Math.floor(num / 60) - hour * 60 ;
    const second = num % 60;
    let relaxation = 0;
    for (let index = 1 ; index < hour; index++) {
        if (index % 4 === 0) {
            relaxation++;
        } 
    }
    console.log(`отдыхад ${relaxation} часа`)

    hour = hour - relaxation;

    return `${hour}ч:${minutes}м:${second}с`;
}

const distanceAverageSpeed = (distance) => {
    let time = ( distance * 60 / `${car1.averageSpeed}` ); 

    return returnSecond(time);
}
console.log(distanceAverageSpeed(1257));





// Задание 2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
// и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.
// *Одну функция высшего поярдка(принимает колбэки: сложения,вычитания...)

const numberatorDenominatorFraction = {
    numerator : 2,
    denominator : 4,
}

const returnAdditions = (numerator,denominator ) => {
    let result = +numerator + +denominator;
    return result;
}
const resultAdditions = returnAdditions(`${numberatorDenominatorFraction.numerator}`, `${numberatorDenominatorFraction.denominator}`);
console.log(resultAdditions);


const returnSubtraction = (numerator,denominator ) => {
    let result = numerator - denominator;
    return result;
}
const resultSubtraction = returnSubtraction(`${numberatorDenominatorFraction.numerator}`, `${numberatorDenominatorFraction.denominator}`)
console.log(resultSubtraction);


const returnMultiplication = (numerator,denominator ) => {
    let result = numerator * denominator;
    return result;
}
console.log(returnMultiplication(`${numberatorDenominatorFraction.numerator}`, `${numberatorDenominatorFraction.denominator}`));


const returnDivision = (numerator,denominator ) => {
    let result = numerator / denominator;
    return result;
}
console.log(returnDivision(`${numberatorDenominatorFraction.numerator}`, `${numberatorDenominatorFraction.denominator}`));


const higherOrderFunction = (func,numerator,denominator ) => {
        return func(numerator,denominator)
}
console.log( higherOrderFunction(returnAdditions,`${numberatorDenominatorFraction.numerator}`, `${numberatorDenominatorFraction.denominator}`));
console.log(higherOrderFunction(returnSubtraction,`${numberatorDenominatorFraction.numerator}`, `${numberatorDenominatorFraction.denominator}`));



// Задание 3
// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество
// секунд.
// 3. Функция изменения времени на переданное количество
// минут.
// 4. Функция изменения времени на переданное количество
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например: если ко
// времени «20:30:45» добавить 30 секунд, то должно получиться
// «20:31:15», а не «20:30:75».

const date = {
    hour: 12,
    minutes: 30,
    seconds: 45,
}
 
const retuenTime = () => {
    return `${date.hour}:` +`${date.minutes}:` + `${date.seconds}.`;
}

const secondsToTime =(seconds) => {
   const hour = Math.floor(seconds / 60 / 60);
   const minutes = Math.floor(seconds / 60) - hour * 60 ;
   const second = seconds % 60;
   date.seconds += second;
  
   if(date.seconds > 59){
       date.seconds = date.seconds % 60;
       date.minutes += 1;
   }
   date.minutes += minutes;

   if(date.minutes > 59){
       date.minutes = 0
       date.hour += 1;
   }
   date.hour += hour;
   
}

const minutesToTime = (minute) => {
    const second = minute * 60;

    const hour = Math.floor(second / 60 / 60);
    const minutes = Math.floor(second / 60) - hour * 60 ;
    const seconds = second % 60;

    date.seconds +=seconds;
    date.minutes += minutes;
    date.hour += hour;
   
    if(date.seconds > 59){
        date.seconds = date.seconds % 60;;
        date.minutes += 1;
    }
    if(date.minutes > 59){
        date.minutes = date.minutes % 60; 
        date.hour += 1;
    }
}

const hoursToTime = (hours) => {
    date.hour += hours;
}


