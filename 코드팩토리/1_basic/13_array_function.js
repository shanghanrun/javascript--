// Method   클래스에 귀속되는 함수를 메소드라고 부른다.

let iveMembers =[
    '안유진','이서',
    '가을','레이','리즈',
    '장원영',
]

// push() 맨 끝에 아이템 추가.  array를 직접적으로 변경시킨다.
// return 값으로 전체길이를 반환한다.
console.log(iveMembers.push('choco'));  // 7 이 출력된다.

// pop()
console.log(iveMembers.pop());  
//맨마지막 요소를 제거하고, 제거요소를 반환한다 'choco'

// shift()  맨처음 요소를 제거하고, 반환한다. '안유진'
console.log(iveMembers.shift());
// unshift() 맨처음 요소로 추가하고, 전체 길이를 반환한다.
console.log(iveMembers.unshift('안유진')); // 6

// splice(시작인덱스, 몇개삭제) : 삭제.     [삭제된 리스트반환]
console.log(iveMembers.splice(0, 3));


// immutable 프로그래밍
console.log('-----------------')

iveMembers =[
    '안유진','이서',
    '가을','레이','리즈',
    '장원영',
]

// concat()      새 아이템을 끝에 추가한 어레이를 만들어서, 새 어레이를 반환한다. 
// 기존 어레이는 그대로 있다.
console.log(iveMembers.concat('choco'));
console.log(iveMembers);

// slice(시작인덱스, 끝인덱스+1)    splice(시작인덱스, 몇개)
// slice는 잘라오는데, 원본 어레이는 변경되지 않는다.
console.log(iveMembers.slice(0,3)); // 0~2번 인덱스요소까지 잘라서 반환


// ...spread operator
let iveMembers2 =[...iveMembers]
console.log(iveMembers);
// spread operator를 갖고 새로운 어레이를 만들면, 새로운 메모리에 만들어지는 것이다.   immutable 프로그래밍때 잘 사용한다.


console.log('=======================')
//---- 기타 유용한 메소드 ------------
// join()  : 리스트 안의 요소들을 묶어서 [하나의 문자열]로 만든다.
console.log(iveMembers.join());   
// join()은 디폴트로 join(',')  --> 안유진,이서,가을,레이,리즈,장원영
console.log(iveMembers.join(':')); // 안유진:이서:가을:레이
console.log(iveMembers.join(''));  //안유진이서가을레이

// split() : 넣은 인자를 기준으로 나누어 문자열 요소의 리스트로 반환
const members = '안유진 이서 가을 레이';
console.log(members.split(' ')); // ['안유진', '이서', '가을','레이']
const members2 = '안유진:이서:가을';
console.log(members2.split(':')); // ['안유진','이서','가을']


// sort() 오름차순   변경하지만 반환값은 없다.
iveMembers.sort(); // 원래 어레이를 오름차순으로 변경한다.

// reverse() 내림차순. 변경하고 변경된 리스트를 반환한다.
console.log(iveMembers.reverse());

// sort()함수 응용
let numbers =[1,9,3,7,5,8]
// a,b를 비교했을 때
// 1. a를 b보다 나중에 정렬하려면 (뒤로 두려면) 0 보다 큰 숫자를 반환
// 2. a를 b보다 먼저 정렬하려면(앞에 두려면) 0보다 작은 순자를 반환
// 3. 원래 순서대로 두려면 0을 반환
numbers.sort((a,b)=>{
    return a > b ? 1 : -1;
})  // 오름차순 정렬
console.log(numbers);

numbers.sort((a,b)=> a >b ? -1: 1); // 내림차순 정렬
console.log(numbers);


// map()   어레이의 모든 값들을 순회하면서, 맵핑해서 새로운 어레이반환
console.log('=================')
console.log(iveMembers.map((x)=> `아이비: ${x}`));

console.log(iveMembers.map((x)=>{
    if(x ==='장원영'){
        return `ive 리더: ${x}`
    } else {
        return `${x}`
    }
}))


// filter()   조건 만족하는 모든 값을 어레이로 반환
numbers = [1,6,3,7, 5, 4]
console.log(numbers.filter((x)=> true));  // return  부위에 조건식넣는다.
console.log(numbers.filter((x)=> x%2 ===0)); // [6, 4]

// find()  조건만족하는 첫번째 요소를 반환
console.log(numbers.find((x)=> x%2 ===0));  // 6

// findIndex() 조건은 만족하는 첫번째요소의 인덱스를 반환
console.log(numbers.findIndex((x)=> x%2 ===0)); 

// reduce()
console.log(numbers.reduce((p, n)=> p+n,0))// previous,next, 0초기값
// 초기값은 0이 되고, p도 0이 된다.  그러고서 요소하나(n)을 받아와서 p+n한다.
// 다시 p+n한 것이 p가 되고,  새롭게 받아온 요소(n)과 더한다.
// 구조는  reduce에 두개의 파라미터를 넣은 것이다. 콜백함수, 초기값
// 초기값은 0이고, 콜백함수: (p,n)=> p+n

// 진행순서
// 초기값이 0이 p에 입력된다.
// 어레이의 첫번째 요소(1)가 n에 입력된다.(0, 1)
// 그러면 p+n 은 1이 되고, 이것이 반환되는데, 이것이 p에 입력된다.
// 어레이 다음번 요소(8)이 n에 입력된다. (1,8)...

// reduce 퀴즈
// iveMembers 변수에 있는 모든 요소들의 스트링 값들의 길이를 더해서 반환
console.log(iveMembers.reduce((p,n)=> p + n.length, 0));