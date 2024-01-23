/**
 * 단축평가 short circuit evaluation
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측값 반환
 * ||를 사용했을 때 좌측이 false면 우측값 반환
 */

console.log( true || '아이브');   //true
console.log( false || '아이브');  //'아이브'
console.log( true && '아이브');  //'아이브'
console.log( false && '아이브'); // false

console.log( true && true && '아이브');
console.log( true && false && '아이브');

/**
 * 지수 연산자
 */
console.log( 2**4); 

/**
 * null 병합연산자
 */

let name;
console.log(name);   //undefined

name = name ?? '코드팩토리'; // null이면 '코드팩토리'
console.log(name);   // 코드팩토리

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '코드팩토리';   // name2 = name2 ?? '코드팩토리';
console.log(name2);
