function IdolModel(name,year){
    if(!new.target){
        return new IdolModel(name,year);
    }
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const youjin = new IdolModel('안유진', 2003);
// console.log(youjin.dance());

const youjin2 = IdolModel('안유진',2003);
// console.log(youjin2); // new 없이 객체 생성하면 undefined 가 된다.
// console.log(global.name);   //global은 파일이 실행되었을 때 생성되는 객체이다.
// web에서 진행하면 윈도우객체이다.

// new 키워드 없이 생성자 함수를 실행하면, global키워드에 붙어 버린다.
// 그래서 global의 값들을 설정하게 된다.