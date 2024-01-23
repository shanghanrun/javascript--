// 클로저는 데이터를 캐싱할 때 많이 사용한다.

function cacheFunction(){
    var number = 10 *10 ; //    시간이 엄청 걸리는 계산과정이 있다고 가정

    function innerCacheFunction(newNumber){ // closure만들기
        return number * newNumber;
    }
    return innerCacheFunction;
}

const runner = cacheFunction(); // runner를 생성할 때 복잡한 계산을 한번만 하고, 클로저 안에 number =100이라는 값을 갖고 있게 된다.
console.log(runner(10)); // 이 이후부터는 복잡한 계산을 하지 않는다.
console.log(runner(30)); // 복잡한 계산을 하지 않는다.



// 반복적으로 데이터값을 변경해야 될 때. 이것도 데이터캐싱이다.
function cacheFunction2(){
    var number =10;

    function increment(){
        number++
        return number;
    }
    return increment;
}

const runner2 = cacheFunction2();
console.log(runner2());
console.log(runner2()); //외부에서 number에 접근할 방법이 없지만, 이런 식으로 접근해서 변화시킬 수 있다.

/**
 * 정보은닉
 */
function Idol(name, year){
    this.name = name;
    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕핫요. 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}
const youjin = new Idol('안유진', 2003);
console.log(youjin.sayNameAndYear());

// console.log(youjin.year)  접근이 안된다.
