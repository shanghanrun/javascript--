
// arrow 함수
const multi =(x,y)=> x*y;   // return이 한 줄문장일 경우

// 파라미터가 하나일 경우에는 ()도 생략가능
const multi2 = x => x * 3;

//함수를 반환하는 경우 
const multi3 = x => y => z => `x:${x} y:${y} z:${z}`;
console.log(multi3(3)(5)(7));
// 처음에 x를 파라미터로 하고, 반환된 함수에 y 파라미터를 입력하면, 
// 또 함수를 반환하고, 거기에 z 파라미터를 입력하면,
// 각각에 입력된 x,y,z 값을 갖고 출력하는 문자열포맷에 따라 출력한다.
// multi3(3)은 첫번째 multi3함수에 인자 3일 넣어서 실행한 결과이고,
// 그 결과는 함수가 된다. 그래서 거기에 인자 5를 입력한 것이다.
// multi(3)(5)는 해당함수를 실행한 결과 이면서, 함수이다.
// 그래서 다시 인자 7을 입력받을 수 있다.
// 그 결과로 반환하는 것이 `x:${x} y:${y} z:${z}` 형태이다.

// 무명함수
// function (x)=> x*2
// function y => y*3;    이런 식으로 정의하지만, 에러 난다.
// 그 이유는 함수 이름이 없으면 사용할 방법이 없으니, 무의미하기 때문이다.
// 다만, 다른 유명함수의 콜백함수로 사용될 경우에는 가능하다.

//
function someFunc1(x){    
    return function (y){ // 무명함수
        return function (z){
            return `x:${x} y:${y} z:${z}`;
        }
    }
}
// 줄여서
const someFunc2 = x => y => z => `x:${x} y:${y} z:${z}`;

// 다음 두가지는 동일한 것이다.
const funcB =(x,y)=> x *y;
const funcC = function(x,y){  // =>를 쓰지 않을 경우는 function써야 된다.
    return x *y;
}
// 무명함수라서 function이라는 것을 생략한 것이고, 
// 그것의 이름을 변수 funcB, funcC에 할당한 것이다.
// 즉 함수도 변수로 할당할 수 있는 것이다.
//  이렇게 funcB, funcC 가 함수에 관한 변수(함수명)이므로
// 함수를 실행하려면,
console.log(funcB(2,3));  // 이렇게 변수명+() 실행부를 결합해서 실행한다.
//즉, funcB는 타입이 함수이고, 함수명이다. 



console.log('----------------')
//arguments 키워드.   Object 형식
const multiThree =function(x,y,z){
    console.log(arguments); // [Arguments]{'0':10, '1':20, '2':30}
    return x *y*z;
}
console.log( multiThree(10,20,30));


const multiplyAll = function(...arguments){
    console.log(Object.values(arguments));
    return Object.values(arguments).reduce((a,b)=> a*b, 1);
}
// Object.values(arguments) 는 arguments 에서의 value값들을 리스트로 반환
console.log( multiplyAll(1,2,3,4,5));
// [1,2,3,4,5]
// 120



// 실 실행함수 immediately invoked function
// 무명함수를 만들고  (무명함수)(); 하면 바로 실행된다.
( function(x,y){console.log(x*y)} )(4,5);

// typeof instanceof
console.log(typeof multi);  // function
console.log(multi instanceof Object);  // true
//  자바스크립트에서 함수는 객체(Object)이다.