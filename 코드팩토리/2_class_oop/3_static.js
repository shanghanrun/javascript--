// 클래스에 귀속되는 static 프로퍼티 메소드
// 인스턴스와는 상관없다.

// class IdolModel{
//     name;
//     year;
//     static groupName = '아이브';

//     constructor(name,year){
//         this.name =name;
//         this.year = year;;
//     }

//     static getGroupName(){
//         return '아이브';
//     }
// }

// const youjin = new IdolModel('안유진', 2003);
// console.log(IdolModel.groupName);
// console.log(IdolModel.getGroupName());


//! factory constructor
// 원한는 타입( 객체, 리스트)의 데이터를 받아서 인스턴스를 생성할 수 있게 한다.

class IdolModel{
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new IdolModel(
            object.name,
            object.year,
        );
    }
    static fromList(list){
        return new IdolModel(
            list[0],
            list[1]
        );
    }
}

const youjin2 = IdolModel.fromObject({
    name:'안유진',
    year: 2003,
});    // new 키워드 사용하지 않고, object를 넣어서 생성

const wonyoung = IdolModel.fromList(
    [
        '원영',
        2004
    ]
)