/**
 * 타입 변환  type conversion
 * 1)명시적,
 * 2)암묵적
 */

let age = 32;
// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

let test = age + '';   // 숫자와 문자열을 더하면, 숫자가 암묵적으로 문자열로 변화된다.
console.log(typeof test, test);

console.log('98' + 2);  // 숫자가 문자열로 변환됨   '98'+'2' -> '982'

// 문자와 숫자가 곱하면, 문자는 숫자로 암묵적으로 변환된다.
console.log('98'*2);  // 196
// 빼기를 하면 또 달라진다
console.log('98' -2);  // 96  그래서 이렇게 숫자와 문자를 섞어 계산하지 마라.


//-----------------------
console.log((99).toString());  // 숫자를 괄호로 감싸야 에러 안난다.
console.log(true.toString());
console.log(Infinity.toString());

console.log(parseInt('1.2'));
console.log(parseFloat('0.1'))


/**
 * boolean 타입으로 변환
 */
console.log('---------')
console.log(!'x')    
console.log(!!'x')  // true
console.log(!!''); // string 값이 없으면 false
console.log(!!0);  // 숫자 0은 false
console.log(!!'0'); // '0'은 문자라서 true

console.log(!!'false');  // true
console.log(!!false);   // false

console.log(!!undefined);  // false
console.log(!!null)   // false

console.log(!!{})  // object는 불리안으로 true
console.log(!![]) // true

/** 
 * 정리. 아무것도 없는 문자, 값이 없는 경우, 0 --> false 
 */
