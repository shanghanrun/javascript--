// js는 lexical scope를 사용하기 때문에,
// 함수의 상위스코프가, 정의 시점에 평가된다.

// 하지만, this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.

const testFunction = function(){
    return this;
}

console.log(testFunction());
console.log(testFunction() === global); //true

const youjin ={
    name:'안유진',
    year: 2003,
    sayHello: function(){
        return `안녕하세요. 저는 ${this.name}입니다.`;
    }
}

function Person(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

const youjin2 = new Person('안유진', 2003);

Person.prototype.dance = function(){
    function dance2(){
        return `${this.name}이 춤을 춥니다.`;// global object에 매핑된다.
    }

    return dance2();
}

console.log(youjin2.dance());  // undefined

/**
 * this 키워드가 어떤 걸 가리키냐는 세가지만 기억하면 된다.
 * 1. 일반함수 호출할 땐, this가 최상위 객체(global 또는 window)를 가리킨다.
 * 2. 메서드로 호출할 땐, 호출된 객체를 가리킨다.
 * 3. new 키워드를 사용해서 객체를 생성했을 땐 해당객체를 가리킨다.
 */


/**
 * 원한는 대상으로 this를 매핑하는 방법
 * apply()
 * call()
 * bind()
 */

function returnName(){
    return this.name;   // 일반함수에서 this는 global에 매핑됨
}

console.log(returnName());  // global에서 name프로퍼티가 지금 없으니, undefined

const youjin3 ={ name: '안유진'};
// returnName함수의 this를 youjin3객체에 매핑하고 싶으면
// returnName.call(youjin3)
console.log(returnName.call(youjin3));
console.log(returnName.apply(youjin3));

/**
 * call : 콤마를 기반으로, 아규먼트를 순서대로 넘겨준다.
 * apply: 아규먼트를 리스트로 입력해야 된다.
 */

function multiply(x,y,z){
    return `${this.name} - 결과값: ${x*y*z}`;
}

console.log(multiply.call(youjin3, 3,4,5));
console.log(multiply.apply(youjin3, [3,4,5]));

/**
 * call, apply는 this를 바인딩하고 바로 실행이 되지만,
 * bind는 this를 바인딩만 할 수 있다.  나중에 실행해야 된다.
 */

const laterFunc = multiply.bind(youjin3, 3,4,5);// bind만 한다.
console.log(laterFunc);  // [Function: bound multiply]
console.log(laterFunc());