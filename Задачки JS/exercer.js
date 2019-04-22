let myMessage = ""; let i = 0;
//1111111111111111111111111111111111111111111111111111111111111111111
console.log('1. Треугольник в цикле: //111111111111111111111111111111');
while (i < 7) {
    console.log(myMessage += "#");
    i++;
}
//
myMessage = ""; i = 0; //Очистил для повторного использования
console.log();
//2222222222222222222222222222222222222222222222222222222222222222222
console.log('2. FizzBuzz: //22222222222222222222222222222222222222222');
for (; i <= 100; i++) {
  console.log(i%3==0? "Fizz":i%5==0? "Buzz":i);
  //или так:
    // switch (i) {
    // case i%3 == 0:  console.log("Fizz");
    // case i%5 == 0:  console.log("Buzz");
    // default: console.log(i);
    // }
  //или так
    // if (i % 3 == 0) {
    //     console.log("Fizz");
    // }  else if (i % 5 == 0) {
    //     console.log("Buzz");
    // }  else {
    //     console.log(i);
    // }
}
//
myMessage = ""; i = 0; //Очистил для повторного использования
console.log();
//3333333333333333333333333333333333333333333333333333333333333333333
console.log('3. Шахматная доска: //3333333333333333333333333333333333');
let myWidth = 8;
let str = "";
do {
    str += "# ";
    i++;
} while (i < myWidth/2);
//
console.log(` > Все-таки колонки шахматной доски, так же как и линии чередуются цветом
 > поэтому добавляю пустое поле в начале четных линий:`);
myMessage = ""; i = 1;
do {
    myMessage += (i % 2 == 0)? " ":"" ;
    myMessage += str;
    if (i != myWidth) {
        myMessage += "\n";
    }
    i++;
} while (i <= myWidth)
console.log(myMessage);
//
myMessage = ""; i = 0; myWidth=0; str=""; //Очистил для повторного использования
console.log();
//4444444444444444444444444444444444444444444444444444444444444444444
console.log("4. Рекурсия: //44444444444444444444444444444444444444444");
i=50; console.log("isEven("+i+") = "+isEven(i));
i=75; console.log("isEven("+i+") = "+isEven(i));
i=0; console.log("isEven("+i+") = "+isEven(i));
i=-1; console.log("isEven("+i+") = "+isEven(i));
i=-4; console.log("isEven("+i+") = "+isEven(i));

//
//определяет четное число или нет
function isEven (from) {
  if (from==0) {
    return true;
  } else if (from==1) {
    return false;
  }
  return isEven (from += (from < 0)? +2:-2);
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
myMessage = ""; i = 0; myWidth=0; str=""; //Очистил для повторного использования
console.log();
//5555555555555555555555555555555555555555555555555555555555555555555
console.log("5. Сумма диапазона 5555555555555555555555555555555555555");
//переменная a должна быть менше b !!! Не проверяю!
let a = -5;
let b = 7;
console.log("range(a="+a+", b="+b+") = ", range(a,b));
console.log("sum(range(a="+a+", b="+b+")) = "+sum(range(a,b)));
//
//Естесственно, функции лучше в "футере" располагать,
//но в данном случае нагляднее сгруппировать в разрезе домашек!
//
//function range (a, b) --> вычисляет общую сумму числового ряда между a и b (включая начало и конец диапазона)
//параметр 'a' должен быть меньше параметра 'b' !!!
function range (a, b) {
let valueArray = a; //Временная переменная //Значение массива
const l=b-a;
let myArray = [];
    for (i = 0; i <= l; i++) {
        myArray[i] = valueArray;
        valueArray++;
    }
    return myArray;
} //function range (a, b)
//
//function sum (myArray) --> вычисляет общую сумму элементов числового массива
function sum (myArray) {
    let total = 0;
    for (let i = 0; i < myArray.length; i++) {
        total += myArray[i];
    } //end for (let i = 0; i < myArray.length; i++)
    return total;
} //function sum (myArray)
//
myArray =""; myMessage = ""; i = 0; myWidth=0; str=""; valueArray=0; a=0; b=0; total =0; l=0; //Очистил для повторного использования
console.log();
//6666666666666666666666666666666666666666666666666666666666666666666
console.log('6. Обращаем вспять массив: //666666666666666666666666666');
//
//меняет порядок элементов в массиве на обратный
//возвращает НОВЫЙ массив //массив переданный по параметру остается без изменений
myArray = ['Один','Два','Три','Четыре','Пять'];
console.log('6.1 --> original array before:', myArray);
console.log('6.1 reverseArrayInPlace :', reverseArrayInPlace(myArray), 'меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента');
//function reverseArrayInPlace (paramArray) //меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента
function reverseArrayInPlace (paramArray) {
  let oldArray = paramArray.slice();
  i=oldArray.length-1; //начальное значение = длине массива
  j=0; //индекс в новом массиве
  while (i >= 0) {
    paramArray[i] = oldArray[j];
    j++;
    i--;
  }
  return paramArray;
} //for (i=0; myArray.length; i++)
//
console.log("6.1 --> original array after:", myArray);
console.log();
// //
myArray = ['Один','Два','Три','Четыре','Пять','Шесть','Семь'];
 console.log('6.2 6.2 --> original array before:', myArray);
 console.log('6.2 6.2 reverseArray :', reverseArray(myArray), 'получает массив как аргумент и выдаёт новый массив – с обратным порядком элементов');
 //function reverseArray(paramArray) //получает массив как аргумент и выдаёт новый массив – с обратным порядком элементов
 function reverseArray(paramArray) {
  let newArray = [];
  i=paramArray.length-1; //индекс в парамМассиве //начальное значение = длине массива
  j=0; //индекс в новом массиве
  while (i >= 0) {
    newArray[i] = paramArray[j];
    j++;
    i--;
  }
  return newArray;
 }
 console.log("6.2 6.2 --> original array after:", myArray);
//
myArray =""; myMessage = ""; i = 0; myWidth=0; str=""; valueArray=0; a=0; b=0; total =0; l=0; //Очистил для повторного использования
console.log();
//7777777777777777777777777777777777777777777777777777777777777777777
console.log('7. Список: //7777777777777777777777777777777777777777777');
console.log("7.1 --> arrayToList:", arrayToList ([12, 99, 37]));
//
//function arrayToList (paramArray) //создает список из массива
function arrayToList (paramArray) {
  let _list = {};
  let _next = {next:null}; //временная переменная //запоминаю последний NEXT //первоначально null //затем переопределяю на структуру
  for (i=paramArray.length-1; i>=0 ;i--) {
    _list = prepend(paramArray[i], _list);
    // _list.value = paramArray[i];
    // _list.next = _next.next;
    // //
    // _next.next = _list;
    // console.log("i=", i,'|', 'value=',paramArray[i] ,'|',"_next =", _next,'|',"_list =", _list);
  } //for (i=paramArray.length; i>=0 ;i--)
  //
  return {head:_list};
} //function arrayToList (paramArray)
//
console.log('========================================');
const list = {head: {value:12, next:{value:99, next:{value:37, next:null}}}}
console.log("7.2 7.2 --> listToArray:", listToArray (list));
//function listToArray (paramList) //создаёт массив из списка
function listToArray (paramList) {
  let map = new Map();
    if (typeof(paramList) == "object") {
      for (key in paramList) {
        value = paramList[key];
        console.log("|",key,"|", value,"|", typeof(value),"|");
        if (typeof(value) != "object") {
          map.set(key, value); //здесь рекурсией получить значение
        } else {

        } //if (typeof(value) != "object")
      } //for (key1 in obj1)
    } //if (typeof(paramList) != "object")
return map;
} //function listToArray (paramList)

console.log("7.... --> prepend (paramValue, paramList):", prepend (37, null));
console.log("7.... --> prepend (paramValue, paramList):", prepend (99, prepend (37, null)));
console.log("7.... --> prepend (paramValue, paramList):", prepend (12, prepend (99, prepend (37, null))));
//function prepend (paramList) //получает элемент и создаёт новый список, где
//этот элемент добавлен спереди к первоначальному списку
function prepend (paramValue, paramList) {
  newList = {};
  newList.value = paramValue;
  newList.next = paramList;
  return newList;
}

//function nth(paramList, paramPositionNumber // качестве аргументов принимает список и число,
//а возвращает элемент на заданной позиции в списке или же undefined в случае отсутствия такого элемента
function nth(paramList, paramPositionNumber) {
  let element;
                        
  return element;
}
console.log();
//8888888888888888888888888888888888888888888888888888888888888888888
console.log('8. deepEqual: //8888888888888888888888888888888888888888');
a='1'; b='1'; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
a='rrr'; b='fff'; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
a=''; b=''; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
a=' '; b=''; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
a=13; b=13; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
a=1; b=0; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
a=true; b=true; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
a=false; b=true; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
a=null; b=null; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
a=false; b=null; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
a=false; b='1'; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
a=[1,2,3]; b=[1,2,3]; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
a=[1,1,1]; b=[3,3,3]; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
console.log("-----------------------------------------------------");
a=isEven; b=isEven; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
console.log("-----------------------------------------------------");
a=isEven; b=reverseArray; console.log("deepEqual(a("+typeof(a)+")="+a+", b("+typeof(b)+")="+b+") =", deepEqual (a, b));
console.log("-----------------------------------------------------");
//function deepEqual (obj1, obj2) //принимает два значения и
//возвращает true, только если это два одинаковых значения или это объекты, свойства которых имеют одинаковые значения
function deepEqual (obj1, obj2) {
  if (obj1 === obj2) {
    return true; //'true сработало самое первое сравнение';
    } else {
    let type1 = typeof(obj1);
    if (type1 !== typeof(obj2)) {
      return false; //"это точно false т.к. структуры разные и далее сравнивать не имеет смысла!";
    } //if (type1 !== type2)
    if (type1 === "object") {
      let counter1 = 0;
      let counter2 = 0;
      for (key1 in obj1) {
        counter1++;
        if (deepEqual(obj1[key1], obj2[key1]) == false) {
          return false;
        }
      } //for (key1 in obj1)
      for (key2 in obj2) {
        counter2++;
      } //for (key2 in obj2)
      if (counter1 !== counter2) {
        return false; //'false //количество параметров различается!';
      } else {
        return true;
      } //if (counter1 != counter2)
    } //if (type1 === "object")
    return false;
  } //if (obj1 === obj2)
} //function deepEqual (obj1, obj2)