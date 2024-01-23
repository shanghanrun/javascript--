// 부모클래스 parent, super class
// 자식클래스 child class

class Idol{
    name;
    year;
    constructor(name,year){
        this.name= name;
        this.year= year;
    }
}

class GirlIdol extends Idol{
    dance(){
        return '여자 아이돌이 춤을 춥니다.';
    }

}

class BoyIdol extends Idol{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

const youjin = new GirlIdol('안유진',2003);
console.log(youjin);
console.log(youjin.dance());

console.log(youjin instanceof Idol);
console.log(youjin instanceof GirlIdol);