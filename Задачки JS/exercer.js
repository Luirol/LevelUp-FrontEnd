let myMessage = ""; let i = 0; let j = 0;
//1111111111111111111111111111111111111111111111111111111111111111111
console.log('1. Треугольник в цикле: //111111111111111111111111111111');
while (i < 7) {
  console.log(myMessage += "#");
  i++;
}
//
myMessage = ""; i = 0; j = 0; //Очистил для повторного использования
console.log();
//2222222222222222222222222222222222222222222222222222222222222222222
console.log('2. FizzBuzz: //22222222222222222222222222222222222222222');
for (; i <= 100; i++) {
  myMessage = "";
  if (i % 3 == 0) {
    myMessage += "Fizz"
  }
  if (i % 5 == 0) {
    myMessage += "Buzz"
  }
  myMessage = (myMessage == "") ? i : myMessage;
  console.log(i, myMessage)
}
//
myMessage = ""; i = 0; j = 0; //Очистил для повторного использования
console.log();
//v3.1   v3.1   v3.1   v3.1   v3.1   v3.1   v3.1   v3.1   v3.1   v3.1
console.log('3. Шахматная доска: //  v3.1   v3.1   v3.1   v3.1   v3.1');
let myWidth = 8;
let str = "";
do {
  str += "# ";
  i++;
} while (i < myWidth / 2);
//
console.log(` > Все-таки колонки шахматной доски, так же как и линии чередуются цветом
 > поэтому добавляю пустое поле в начале четных линий:`);
myMessage = ""; i = 1;
do {
  myMessage += (i % 2 == 0) ? " " : "";
  myMessage += str;
  if (i != myWidth) {
    myMessage += "\n";
  }
  i++;
} while (i <= myWidth)
console.log(myMessage);
//
myMessage = ""; i = 0; j = 0; myWidth = 0; str = ""; //Очистил для повторного использования
console.log();
//v3.2   v3.2   v3.2   v3.2   v3.2   v3.2   v3.2   v3.2   v3.2   v3.2
console.log('3. Шахматная доска: //  v3.2   v3.2   v3.2   v3.2   v3.2 : Два цикла - это в 5 раз больше итераций\вычислений по сравнению с первым вариантом!');
//
myWidth = 8;
for (i = 1; i <= myWidth; i++) {
  for (j = 1; j <= myWidth; j++) {
    if ((i % 2 == 0 && j % 2 == 0) || (i % 2 !== 0 && j % 2 !== 0)) { // черное поле --> оба числа либо четные либо нечетные
      myMessage += "#"
    } else {
      myMessage += " ";
    }
  }
  if (i != myWidth) {
    myMessage += "\n";
  }
}
console.log(myMessage);
//
myMessage = ""; i = 0; j = 0; myWidth = 0; str = ""; //Очистил для повторного использования
console.log();
//4444444444444444444444444444444444444444444444444444444444444444444
console.log("4. Рекурсия: //44444444444444444444444444444444444444444");
i = 50; console.log("isEven(" + i + ") = " + isEven(i));
i = 75; console.log("isEven(" + i + ") = " + isEven(i));
i = 0; console.log("isEven(" + i + ") = " + isEven(i));
i = -1; console.log("isEven(" + i + ") = " + isEven(i));
i = -4; console.log("isEven(" + i + ") = " + isEven(i));

//
//определяет четное число или нет
function isEven(from) {
  if (from == 0) {
    return true;
  } else if (from == 1) {
    return false;
  }
  return isEven(from += (from < 0) ? +2 : -2);
  // или так :) return isEven ((from < 0)? from+2:from-2);
  // или же вот так:
  //if (from < 0) {
  //   return isEven (from+2);
  // } else {
  //   return isEven (from-2);
  // }
}
//
//
myMessage = ""; i = 0; myWidth = 0; str = ""; //Очистил для повторного использования
console.log();
//5555555555555555555555555555555555555555555555555555555555555555555
console.log("5. Сумма диапазона 5555555555555555555555555555555555555");
let a = 5;
let b = -7;
console.log("range(a=" + a + ", b=" + b + ") = ", range(a, b));
console.log("sum(range(a=" + a + ", b=" + b + ")) = " + sum(range(a, b)));
//
//Естесственно, функции лучше в "футере" располагать,
//но в данном случае нагляднее сгруппировать в разрезе домашек!
//
//function range (a, b) --> вычисляет общую сумму числового ряда между a и b (включая начало и конец диапазона)

function range(a, b) {
  let myArray = [];
  let valueArray = a; //Временная переменная //Значение массива
  if (a < b) {
    const l = b - a;
    for (i = 0; i <= l; i++) {
      myArray[i] = valueArray;
      valueArray++;
    }
  } else {
    const l = a - b;
    for (i = 0; i <= l; i++) {
      myArray[i] = valueArray;
      valueArray--;
    }
  }
  return myArray;
} //function range (a, b)
//
// function sum (myArray) --> вычисляет общую сумму элементов числового массива
function sum(myArray) {
  //
  //вариант1 (рабочий)
  //   let total = 0;
  //   for (let i = 0; i < myArray.length; i++) {
  //     total += myArray[i];
  //   } //end for (let i = 0; i < myArray.length; i++)
  //   return total;
  //
  // // или вариант2 (то же рабочий): для каждого элемента массива запустить функцию, промежуточный результат передавать первым аргументом
  //  const total = myArray.reduce(function(subTotal, valueArray) {
  //   return subTotal + valueArray;
  // }, 0);
  // return total;
  //
  //или вариант3:
  const reducer = (total, valueArray) => total + valueArray;
  return myArray.reduce(reducer);
} //function sum (myArray)


myArray = ""; myMessage = ""; i = 0; myWidth = 0; str = ""; valueArray = 0; a = 0; b = 0; total = 0; l = 0; //Очистил для повторного использования
console.log();
//6666666666666666666666666666666666666666666666666666666666666666666
console.log('6. Обращаем вспять массив: //666666666666666666666666666');
//
//function reverseArrayInPlace (paramArray) //меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента
function reverseArrayInPlace(paramArray) {
  //вариант1 (рабочий)
  // let oldArray = paramArray.slice();
  // i = oldArray.length - 1; //начальное значение = длине массива
  // j = 0; //индекс в новом массиве
  // while (i >= 0) {
  //   paramArray[i] = oldArray[j];
  //   j++;
  //   i--;
  // }
  //  вариант2
  i = 0; //индекс1 в парамМассиве //начальное значение// например, первый элемент
  j = paramArray.length - 1; //индекс2 в парамМассиве //конечное значение, например последний элемент
  while (i <= j) {
    a = paramArray[i];
    paramArray[i] = paramArray[j];
    paramArray[j] = a;
    j--;
    i++;
  }

  return paramArray;
} //for (i=0; myArray.length; i++)
//function reverseArray(paramArray) //получает массив как аргумент и выдаёт новый массив – с обратным порядком элементов
function reverseArray(paramArray) {
  let newArray = [];
  i = paramArray.length - 1; //индекс в парамМассиве //начальное значение = длине массива
  //j = 0; //индекс в новом массиве // или без использования j
  while (i >= 0) {
    // так: newArray[i] = paramArray[j]; или без использования j
    newArray.push(paramArray[i]);
    //j++; // или без использования j
    i--;
  }
  return newArray;
}
//
const myArray1 = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь'];
console.log("6.1 Testing function reverseArray()");
console.log(myArray1);
console.log(reverseArray(myArray1));
console.log(myArray1);
//
const myArray2 = ['Один', 'Два', 'Три', 'Четыре', 'Пять'];
console.log("6.2  Testing function reverseArrayInPlace()");
console.log(myArray2);
console.log(reverseArrayInPlace(myArray2));
console.log(myArray2);

//7777777777777777777777777777777777777777777777777777777777777777777
console.log('7. Список: //7777777777777777777777777777777777777777777');
//
//function arrayToList (paramArray) //создает список из массива
function arrayToList(paramArray) {
  _list = {};
  for (i = paramArray.length - 1; i >= 0; i--) {
    _list = prepend(paramArray[i], _list);
  }
  return _list;
} //function arrayToList (paramArray)
//

//function listToArray (paramList) //создаёт массив из списка
function listToArray(paramList) {
  const _arr = [];
  i = 0;
  while (true) {
    i++;
    a = nth(paramList, i);
    if (a !== undefined) {
      _arr.push(a);
    } else {
      break;
    }
  }
  return _arr;
} //function listToArray (paramList)


//function prepend (paramList) //получает элемент и создаёт новый список, где
//этот элемент добавлен спереди к первоначальному списку
function prepend(paramValue, paramList) {
  newList = {};
  newList.head = {};
  newList.head.value = paramValue;
  if (paramList.head === undefined) {
    newList.head.next = null;
  } else {
    newList.head.next = paramList.head;
  }
  return newList;
}
//function nth(paramList, paramPositionNumber) // в качестве аргументов принимает список и число,
//а возвращает элемент на заданной позиции в списке или же undefined в случае отсутствия такого элемента
function nth(paramList, paramPositionNumber) {
  if (paramPositionNumber === 0) {
    return paramList.value;
  }
  if (paramList.next === null) {
    return undefined;
  }
  if (paramList.next === undefined) {
    return (nth(paramList.head, paramPositionNumber - 1));
  }
  return (nth(paramList.next, paramPositionNumber - 1));
}
console.log("7.1 test функции nth (List, 1)=", nth({ head: { value: 12, next: { value: 99, next: { value: 37, next: null } } } }, 1));
console.log("7.1 test функции nth (List, 2)=", nth({ head: { value: 12, next: { value: 99, next: { value: 37, next: null } } } }, 2));
console.log("7.1 test функции nth (List, 3)=", nth({ head: { value: 12, next: { value: 99, next: { value: 37, next: null } } } }, 3));
console.log("7.1 test функции nth (List, 4)=", nth({ head: { value: 12, next: { value: 99, next: { value: 37, next: null } } } }, 4));
list = prepend(37, {});
console.log("7.2 test функции prepend (37, List)=", nth(list, 1), nth(list, 2), nth(list, 3), nth(list, 4), nth(list, 5));
list = prepend(99, list);
console.log("7.2 test функции prepend (99, List)=", nth(list, 1), nth(list, 2), nth(list, 3), nth(list, 4), nth(list, 5));
list = prepend(12, list);
console.log("7.2 test функции prepend (12, List)=", nth(list, 1), nth(list, 2), nth(list, 3), nth(list, 4), nth(list, 5));
list = arrayToList([12, 99, 37]);
console.log("7.3 --> arrayToList([12, 99, 37])=", nth(list, 1), nth(list, 2), nth(list, 3), nth(list, 4), nth(list, 5));
list = arrayToList([1, 2, 3]);
console.log("7.3 --> arrayToList([1, 2, 3])=", nth(list, 1), nth(list, 2), nth(list, 3), nth(list, 4), nth(list, 5));
console.log("7.4 --> listToArray:", listToArray(list));
console.log("7.4 --> listToArray:", listToArray({ head: { value: 12, next: { value: 99, next: { value: 37, next: null } } } }));
console.log(" ");
//
//8888888888888888888888888888888888888888888888888888888888888888888
console.log('8. deepEqual: //8888888888888888888888888888888888888888');
a = null; b = null; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = null; b = undefined; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = undefined; b = undefined; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = '1'; b = '1'; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = 'rrr'; b = 'fff'; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = ''; b = ''; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = ' '; b = ''; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = 13; b = 13; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = 1; b = 0; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = true; b = true; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = false; b = true; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = false; b = null; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = false; b = '1'; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = [1, 2, 3]; b = [1, 2, 3]; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
a = [1, 1, 1]; b = [3, 3, 3]; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
console.log("-----------------------------------------------------");
a = isEven; b = isEven; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
console.log("-----------------------------------------------------");
a = isEven; b = reverseArray; console.log("deepEqual(a(" + typeof (a) + ")=" + a + ", b(" + typeof (b) + ")=" + b + ") =", deepEqual(a, b));
console.log("-----------------------------------------------------");
//function deepEqual (obj1, obj2) //принимает два значения и
//возвращает true, только если это два одинаковых значения или это объекты, свойства которых имеют одинаковые значения
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true; //'true сработало самое первое сравнение';
  } else {
    let type1 = typeof (obj1);
    if (type1 !== typeof (obj2)) {
      return false; //"это точно false т.к. структуры разные и далее сравнивать не имеет смысла!";
    } //if (type1 !== type2)
    if (type1 === "object") {
      if (Object.keys(obj1) !== Object.keys(obj2)) {
        return false; //'false //количество параметров различается!';
      } else {
        for (key1 in obj1) {
          if (deepEqual(obj1[key1], obj2[key1]) == false) {
            return false;
          }
        } //for (key1 in obj1)
        return true;
      } //if (Object.keys(obj1) !== Object.keys(obj2))
    } //if (type1 === "object")
    return false;
  } //if (obj1 === obj2)
} //function deepEqual (obj1, obj2)
//
//9999999999999999999999999999999999999999999999999999999999999999999
console.log('9. Создание динамической функции из строки: //9999999999999999999999');
// Я добавил тест jsperf для 4 различных способов создания функции из строки:

// Использование RegExp с классом Function
// var func = "function (a, b) { return a + b; }".parseFunction();

// Использование класса Function с "return"
// var func = new Function("return " + "function (a, b) { return a + b; }")();

// Использование официального конструктора функций
// var func = new Function("a", "b", "return a + b;");

// Использование Eval
// eval("var func = function (a, b) { return a + b; };");

function v1sum(paramA,paramB) {
  return paramA+paramB;
}
const textFunction1 = ""+v1sum; //получил текст функции1 //это строковое значение!
a=1;
b=2;
console.log("v1sum("+a+","+b+")=", v1sum(a,b));
//
const nameFunction2 = "v2sum";
const textFunction2 = textFunction1.replace("v1sum", nameFunction2); //получил текст функции2
console.log(textFunction2);
eval(textFunction2);
console.log("v2sum("+a+","+b+")=", v2sum(a,b));

