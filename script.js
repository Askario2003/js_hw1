 /* введение                                                                        */
 alert ('привет')
 alert ('этот сайт сделан для проверки ваших математических знаний')

 /* данные пользователя                                                 */
var name = prompt ('введите свое имя')
console.info ('меня зовут ' + name) 

var year = prompt ('сколько вам лет?')
console.info ('мне ' + year + ' лет')


/* test                                             */
var plus = 1+ +prompt ('2 + 2 =')
console.info ('Пример №1: ' , '2 + 2 = ' + (2 + 2) , ' , Ваш ответ ' + plus)

var minus = prompt ('2 - 1 =')
console.info ('Пример №2: ' , '2 + 1 = ' + (2 - 1) , ' , Ваш ответ ' + minus)

var umnoj = prompt ('2 * 3 =')
console.info ('Пример №3: ' , '2 * 3 = ' + 2 * 3 , ', Ваш ответ ' + umnoj)

var div = prompt ('6 / 3 =')
console.info ('Пример №4: ' , '6 / 3 = ' + 6 / 3 , ', Ваш ответ ' + div)

var ostatok = prompt (' 6 % 2 = ')
console.info ('Пример №5: ' , '6 % 2 = ' + 6 % 2 , ' , Ваш ответ ' + ostatok)

/* конец */

alert('                для проверки ваших ответ прейдите в консоль')