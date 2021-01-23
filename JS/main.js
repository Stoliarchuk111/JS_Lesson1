console.log('Sample JavaScript HW#1');// выводит “Captain’s Log” в панель консоли

/*
 * #1
 *
 * Создайте переменные со значениями
 */
var myNum = 10; // имя переменной: myNum, значение:10
var myStr = 'строка'; // имя переменной: myStr, значение: 'строка'
var myBool = true; // имя переменной: myBool, значение: true
var myArr = [1, 2, 3, 4, 5]; // имя переменной: myArr, значение: [1, 2, 3, 4, 5]
var myObj = {
    first: 'First Name',
    last: 'Last Name'
}// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'

console.log('myNum:', myNum);
console.log('myStr:', myStr);
console.log('myBool:', myBool);
console.log('myArr:', myArr);
console.log('myObj:', myObj);

/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */

 var decimal2 = myNum.toFixed(2);  // decimal2

 /*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

 var i = 10

 console.log('Префиксный инкремент:', ++i); 
 console.log('Постфиксный инкремент:', i++); 
 console.log('Значение i', i);
 console.log('Префиксный декремент:', --i);
 console.log('Постфиксный декремент:', i--,);
 console.log('Значение i', i);


 /*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

var myTest = 20; // myTest

myTest += 10; // +=
console.log('+=',myTest );

myTest -= 20; // –=
console.log('-=',myTest );

myTest *= 100; // *=
console.log('*=',myTest );

myTest /= 100; // /=
console.log('/=',myTest );

myTest %= 0; // %=
console.log('%=',myTest );

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

var myPi = Math.PI;// константа Pi → myPi
console.log('myPi:', myPi)

var myRound = Math.round(89.279); // округленное значение числа 89.279 → myRound
console.log('myRound:', myRound)

var myRandom = Math.random()*10; // случайное число между 0..10 → myRandom
console.log('myRandom:', myRandom)

var myPow = Math.pow(3, 5); // 3 в 5 степени → myPow
console.log('myPow:', myPow)

/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

var strObj = {str: 'Мама мыла раму, рама мыла маму'}; // Мама мыла раму, рама мыла маму
strObj.length = strObj.str.length;
console.log('strObj:', strObj);


/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

var isRamaPos = strObj.str.indexOf('рама'); // isRamaPos
console.log('isRamaPos:', isRamaPos);

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

var strReplace = strObj.str.replace('мыла', 'моет'); // strReplace
strReplace = strReplace.replace ('рама', 'Рама');
strReplace = strReplace.replace ('мыла', 'держит');
console.log('strReplace:', strReplace);

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
console.log(myStr.toUpperCase());
console.log('Любая Строка'.toLowerCase());