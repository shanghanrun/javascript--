/**
 * A closure is the combination of a function and the lexical environment within which that function was declared.
 * 함수와 (그 함수가 선언된 lexical(선언된 위치)) 환경의 조합
 * 
 * 상위 함수보다 하위 함수가 더 오래 살아 있는 경우를 closure라 한다.
 * 
 */

function getNumber(){
    var number =5;

    function innerGetNumber(){ // lexical scope로 인해 number인식가능
        return number;
    }

    return innerGetNumber;  //함수를 반환
}

const runner = getNumber();
console.log(runner);  //function
console.log(runner());  //5


