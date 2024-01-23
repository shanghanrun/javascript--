// js -> Lexical Scope
// 선언된 위치가 상위스코프를 정한다. (함수를 선언된 위치 기준)

var number =1;

function functionOne(){
    var number =100;

    functionTwo();
}

function functionTwo(){
    console.log(number);
}

functionOne(); // 실행하면, 1출력된다. functionTwo가 바깥레벨에서 선언되어서


//반대개념: dynamic scope : 실행한 위치가 상위위치를 정한다.


// var, let, const가 스코프를 다르게 만든다.
var i=999;
for (var i=0; i<10; i++){
    console.log(i);
}
console.log(`i in global scope: ${i}`);   // 10

// for문 안에서 i를 선언했지만, global로 작동하는 이유는
// var 로 인한 변수는 함수를 선언했을 때만, local로 작동하고
// for문 if문 같은 곳에서는 local로 작동하지 않는다.

i=999;
for(let i=0; i<10; i++){
    console.log(i);
}
console.log(i);   // 999
// local에서 let으로 선언하면 로컬에서만 작동한다.
// let으로 block level scope를 만들어 낼 수 있다.

//! 결론
// var 는 함수레벨 스코프만 만들어낸다.
// let const는 함수레벨, 블록레벨 스코프 모두를 만들어 낸다.

