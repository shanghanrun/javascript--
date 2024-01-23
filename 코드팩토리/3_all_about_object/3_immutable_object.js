const youjin ={
    name:'안유진',
    year: 2002,
    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

/**
 * isExtensible 확장가능여부
 */
console.log(Object.isExtensible(youjin)); // true

youjin['position'] = 'vacal';

Object.preventExtensions(youjin);
console.log(Object.isExtensible(youjin)); //false

// 프로퍼티 삭제 delete
delete youjin['position'];
console.log(youjin);

/**
 * isSealed  봉인되었나?
 * seal 봉인하다.
 */

const youjin2 ={
    name:'안유진',
    year: 2002,
    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isSealed(youjin2)); //false
Object.seal(youjin2);  // 새로운 프로퍼티 추가를 못한다.
// configurable을 false로 만든다.

delete youjin2['name']; // 이것을 해도 삭제 안된다. 에러도 안 낸다.

/**
 * freeze  동결되다.  읽기외 모든 기능 정지
 * isFrozen
 */

