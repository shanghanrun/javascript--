// copy by value, or copy by reference

/**
 * copy by value: 값에 의한 전달
 * copy by reference: 참조에 의한 전달
 * 
 * 1. 기본적인 모든 primitive 값은 copy by value 이다.
 * 2. 객체는 copy by reference 다.
 */

let original ='안녕'
let clone = original;
clone += ' 안유진입니다.';
console.log('----------')
console.log(original);
console.log(clone);

let originalObj ={
    name: '안유진',
    group: 'ive'
};
let cloneObj = originalObj;
cloneObj.name ='장원영';
console.log(originalObj);
console.log(cloneObj);

// 얕은 복사. copy by value
const youjin ={
    name: '안유진',
    group: 'ive',
}
const youjin2 ={
    ...youjin,
}
console.log(youjin === youjin2)  // false

// spead할 때 주의할 점. 순서가 중요하다.
const youjin3 ={
    name: '코드팩토리',
    ...youjin,  // name:'안유진'이 나오면서 덮어쓰게 된다.
}

// 어레이도 spead 된다.
const numbers =[1,2,3]
const numbers2 =[
    ...numbers,
    4,
]
console.log(numbers2)


