let age =10
let person ={
    name: 'haha',
    age: 20,
    getInfo: function(){
        console.log(age) //전역변수가 객체안으로 침투.영향줌
    }
}
person.getInfo();  // 17

//전역변수가 객체(인스턴스)안에도 영향을 미치고 있는 현상.
// 그래서 해당메소드를 부른 객체를 인식시키기 위해 this를 사용하게 됨

age =10
let person2 ={
    name: 'haha',
    age: 20,
    getInfo: function(){
        console.log(this.age)  // 20
        console.log(age)  // 10
    },
    getTotalInfo: function(){
        console.log(this)
    }
}
person2.getInfo();
person2.getTotalInfo();

// 클래스에서도 전역변수라던가 입력되는 인자의 변수의 이름이 같다면,
// 반드시 this를 통해서 구별해주어야 된다.


age =10;
class Person{
    constructor(name, age){this.name =name; this.age=age}
    printAge(){
        console.log(age);  //전역변수 age  10
        console.log(this.age);
    }
}

const p1 = new Person("haha", 30)
p1.printAge()   // 10, 30


///! 함수에는 전역변수가 침투하더라도, 지역변수가 우선한다.
age =10;
function printAge2(){
    const age = 20;
    console.log(age);  // 지역변수가 우선한다.  20
}

printAge2();