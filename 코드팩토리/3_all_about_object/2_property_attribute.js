


// Property Attribute
/**
 * property는 2가지가 있다.
 * 1. 데이터 프로퍼티: 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2. 엑세서 프로퍼티: 자체적으로 값을 갖고 있지는 않지만, 다른 값을 가져오거나,
 *          설정할 때 호출되는 함수로 구성된 프로퍼티.
 *          ex. getter, setter
 */

const youjin ={
    name: '안유진',
    year: 2003,
}

console.log(Object.getOwnPropertyDescriptor(youjin, 'name'));
console.log(Object.getOwnPropertyDescriptors(youjin));

const youjin2 ={
    name:'안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },     //  겟터 세터 사이에는 콤마 붙여야 된다.

    set age(age){  // 나이를 입력해서, 태어난 해를 계산하고 할당해줌
        this.year = new Date().getFullYear() - age;
    }
}

console.log(youjin2);
console.log(youjin2.age);
youjin2.age =32;
console.log(youjin2.year)
console.log(youjin2.age)

console.log(Object.getOwnPropertyDescriptor(youjin2, 'age'))

//
Object.defineProperty(youjin2, 'height', {
    value: 172,
    writable:true,
    enmerable: true,
    confiqurable: true,
})
