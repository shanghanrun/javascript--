// 클래스는 객체지향 프로그래밍에서, 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀이다. - 위키피티아
// 클래스는 정보를 일반화해서 정리하는 방법(틀) - 코드팩토리
// 인스턴스는 실제데이터

// class IdolModel{
//     name ='안유진';
//     year = 2023;
// }

// const youjin = new IdolModel();
// console.log(youjin);

class IdolModel{
    // name;     프러퍼티를 생략하고, 생성자만 기록해도 된다.
    // year;    좋은 개발자는 정의해놓는 것이 좋다. 
    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    sayName(){     //! 클래스 내에서는 function 키워드를 사용하지 않는다
        console.log(`my name is ${this.name}`)
    }   //! 메소드 사이에는 콤마를 붙이지 않는다.
    sing(){
        console.log('sing');
    }
}

const youjin = new IdolModel('안유진', 2003);
const gaeul = new IdolModel('가을', 2002);

console.log(youjin.name);
console.log(gaeul.year);

youjin.sayName();
youjin.sing();
console.log(youjin.sayName());  // 이렇게 하면, 추가로 undefined
// 왜냐면 youjin.sayName() 자체가 console.log()로 출력하고, 추가로 undefined를 반환한다.
// 이것을 없애려면 sayName() 메소드를 return 문자열 할 수도 있다.

console.log(typeof IdolModel);  //! function
console.log(typeof youjin);  //! object   인스턴스는 객체이다.

