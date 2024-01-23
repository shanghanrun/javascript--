/**
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1. 직접 object 생성  {}
 * 2. class를 통해 instance 생성
 * 3. function을 사용해서 객체 생성
 */

const youjin={
    name: '안유진',
    year: 2003,
}

class Idol{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}
const youjin2 = new Idol('안유진', 2003);


// 생성자 함수. 대문자로 시작
function IdolFunction(name, year){
    this.name = name;    
    this.year = year;
}
const gaeul = new IdolFunction('가을', 2002);
// 타입만 달라질 뿐 모두 객체이다.

