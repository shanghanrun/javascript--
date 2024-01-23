const testObj ={};

console.log(testObj.__proto__);
// __proto__ 는 모든 객체에 존재하는 프로퍼티이다.
// 부모클래스를 참조하는 프로퍼티이다.

function IdolModel(name,year){
    this.name =name;
    this.year = year;
}

console.log(IdolModel.prototype);   // 이걸로는 {} 빈 객체만 보인다.
console.dir(IdolModel.prototype, {showHidden:true});
console.log(IdolModel.prototype.constructor === IdolModel); // true