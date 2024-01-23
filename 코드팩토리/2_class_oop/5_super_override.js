// 생성자에서만 super(name,year)식으로 사용하고
// 다른 곳에서는 super.name 대신에 this.name을 사용한다.

class Idol{
    name;
    year;
    constructor(name,year){
        this.name=name;
        this.year =year;
    }
    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class GirlIdol extends Idol{
    part;        // Idol모델에서 상속받은 생성자는 part프로퍼티를 모른다.
                 // 그래서 새롭게 생성자를 정의해야 된다. 오버라이드
    constructor(name,year,part){
        super(name,year);   //! 부모의 컨스트럭터
        this.part = part;
    }

    sayHello(){
        // return `안녕하세요. ${this.name}입니다. ${this.part}를 맡고 있습니다.`;        //! super.name이 되어야 되지만 JS는 this.name

        return `${super.sayHello()} ${this.part}를 맡고 있습니다.`;
    }

}

const youjin = new GirlIdol('안유진', 2003, '보컬')
console.log(youjin);
console.log(youjin.sayHello());