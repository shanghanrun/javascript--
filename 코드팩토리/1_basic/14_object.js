// 자바스크립트의 Object는 두 가지 특징이 있다.
// 1. 파이썬의 사전, java의 Map 처럼 key:value의 쌍
// 2. 함수도 value가 될 수 있다.

let youjin ={
    name: '안유진',
    group: '아이브',
    dance: function (){
        return `${this.name}이 춤을 춥니다.`; // this 현재 객체
    }
}

console.log(youjin);
console.log(youjin.name);
console.log(youjin['name']);

const key = 'name';
console.log(youjin[key]);

console.log(youjin.dance()); // 싫행해야 된다.

// 객체를 작성할 때, 변수만을 이용해서 작성할 경우에는
// key 부분에 [변수명] 으로 입력한다.
const nameKey ='name';
const nameValue ='안유진';
const groupKey ='group';
const groupValue = '아이브';

const youjin2 ={
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
        // return `${this.nameKey}이 춤을 춥니다.` <-에러는 안나지만, 인식안된다. undefined가 된다.
    }
}
// 이렇게 하는 이유는 nameKey가 문자열이 아니라, 변수로서 다른 문자열을 갖고 있다는 것을 확실하게 알려주기 위한 것이다. 안그러면 그냥 nameKey가 되어 버릴 수 있다.
// 즉, 프로퍼티 부분에 적을 때만 [변수명]으로 입력해서 변수임을 알려준다.
console.log(youjin2.dance());

youjin2.group = '블랙핑크';
console.log(youjin2);

// 만약 존재하지 않는 프로퍼티와 그에 대한 밸류를 넣는다면? -> 추가
youjin2.age = 25;
console.log(youjin2);

// 삭제하기  delete
delete youjin2.age;
console.log(youjin2);

// const youjin2 로 상수로 선언했음에도 불구하고, 추가와 삭제가 가능했던 것은
// youjin2 객체의 메모리 위치자체가 고정이기 때문이다. 참조형 객체라서 그렇다.
// 객체의 특징: 1. const로 선언하면 객체 자체를 변경할 수는 없다.
// 2. 객체 안의 프로퍼티나 메서드는 변경할 수 있다.

const wonyoung ={
    name: '장원영',
    group: 'ive',
}
// wonyoung = {};   const로 선언했으므로 변경 불가능하다.


// 객체에서 키값(프로퍼티)를 모두 가져오기  Object.keys(해당객체)
// value값 모두 가져오기 Object.values(해당객체)
// 당연히 리스트(어레이) 형태로 반환된다.  ['name','group']
console.log(Object.keys(wonyoung));
console.log(Object.values(wonyoung));


//! 비록 변수로 프로퍼티를 작성하더라도 
//! 프로퍼티(key) 이름과 value 가 같다면, <변수명 하나만> 적어도 된다.

const name = '안유진';
const youjin3 ={
    [name]: name,
    group: 'ive',
}
const youjin4 ={
    name,        //! <---- 변수 하나만 적어도 된다.
    group: 'ive'
}