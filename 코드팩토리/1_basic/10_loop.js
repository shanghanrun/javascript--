for( let i=0; i<3 ; i++){
    for (let j=3; j>0; j--){
        console.log(i, j);     //   두개 출력 가능
    }
}


// *으ㄹ 이용해서 6x6 정사각형 만들기

let square ='';
let side = 6;
for(let i =0; i<side ; i++){
    for(let j=0; j<side; j++){
        square +='*';
    }
    square += '\n';
}
console.log(square);

//
const youjin ={
    name: '안유진',
    year: 2023,
}
for (let key in youjin){
    console.log(`key: ${key}, value: ${youjin[key]}`);
}

//   Array 에서는  for of를 사용한다.
const ive =[
    '안유진', '장원영',
]
for (let item of ive){
    console.log(item);
}
// Array 에서 for in 을 사용하면 index값을 받아올 수 있다.
for (let i in ive){
    console.log(ive[i]);
}

/**
 * break   해당문을 빠져나가기
 * continue
 */
for(let i=0; i<10; i++){
    if (i==3){
        continue;  // = skip 순회를 돌 경우에는 이번 것은 쉬고, 다음
    }
    if(i ===5 ){
        break;
    }
    console.log(i);
    
}