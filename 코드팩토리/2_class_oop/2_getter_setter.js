class IdolModel{
    #name;       //! private은 #으로 표시한다.
    year;
    constructor(name,year){
        this.#name =name;
        this.year =year;
    }
    /**
     * getter
     * 1. (데이터를 가공하거나 해서) 데이터를 반환
     * 2. private한 값을 반환
     * 3. 함수이지만 () 없이, 마치 프로퍼티처럼 사용한다. youjin.nameAndYear
     */
    get nameAndYear(){   //    get 키워드 사용
        return `${this.#name} - ${this.year}`;
    },    //!  반드시 콤마를 넣어주어야 된다.  
    get name(){
        return this.#name
    },

    set name(str){    // set 키워드.  파라미터를 사용해야 된다.
        this.#name = str;
    }
}

const youjin = new IdolModel('안유진', 2023);
console.log(youjin.nameAndYear);   // ()실행부 없이 사용한다.
console.log(youjin.name);  // getter는 값을 받아오는 로직에 사용한다.

youjin.name = '장원영';    // setter를 쓸 때는 좌측value(값을 입력받는 위치)에서 사용한다.   이것도 ()실행부를 사용하지 않는다.

// immutable 프로그램밍을 많이 하기 때문에 setter는 잘 사용하지 않는다.



