let names =[
    "Steven Paul Jobs",
    "Bill Gates",
    'Mark Elliot',
    "Elon Musk",
    "Jeff Bezos",
    'Warren Edward',
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
]

// 모든 이름을 대문자로 바꾸어서 출력하시오.
// 성을 제외한 이름만 출력하시오(  "Steven", "Bill")
// 이름의 이니셜만 출력하시오

names.forEach(name =>{
    console.log(name.toUpperCase());
})

const data1 = names.map(name => name.toUpperCase())
console.log(data1)

names.forEach(name =>{
    let temp = name.split(' ')
    console.log(temp[0])
})


const data2 = names.map(name =>{
    return name.split(' ')[0]
})
console.log(data2)

names.forEach(name =>{
    let temp ='';
    let temp2 = name.split(' ')
    temp2.forEach( e =>{
        temp += (e.split(''))[0]
    })
    console.log(temp)
})

const data3 = names.map(name =>{
    let temp ='';
    let temp2 = name.split(' ')
    temp2.forEach( e =>{
        temp += e.split('')[0]
    })
    return temp
})
console.log(data3)

// 이름에 a를 포함한 사람들을 출력하시오.
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오.

const data4 = names.filter( name => name.includes('a'))
console.log(data4)

const data5 = names.filter(name => 중복되었나(name) )
function 중복되었나(name){
    const temp = name.split('')
    for (let i=0; i<temp.length-1; i++){
        if (temp[i] == temp[i+1]){
            console.log(temp[i], ' ', temp[i+1])
            return true;  // 함수종료
        }
    }
    return false;
}
console.log(data5)


///이런 방법도 있다.
let doubleLetter =  names.filter((item) => {
    let splitName = item.split("");
    return splitName.some((letter, index) => letter == splitName[index + 1]);
  })

console.log(doubleLetter)


// 전체이름의 길이가 10자 이상인 사람이 있는가?  -- some
// 성을 제외한 이름(Steve)에 p를 포함한 사람이 있는가?(대소문자 상관없음)

data6 = names.some(name => name.length >= 10)
console.log(data6)

const 이름들 = names.map( name => {
    const 이름 = name.split(' ')[0]
    return 이름;
})
console.log(이름들)
data7 = 이름들.some(이름 => 이름.includes('w') || 이름.includes('W') )
console.log(data7)


//모두의 전체 이름 길이가 20자 이상인가?
// 모두의 이름에 a가 포함되어 있는가?
data8 = names.every(name => name.length >= 20)
console.log(data8)

data9 = names.every(name => name.includes('a'))
console.log(data9)

//전체 이름의 길이가 14자 이상인 사람을 찾으시오.
// 미들 네임이 포함되어 있는 사람을 찾으시오. (Steven Paul Jobs)
// find는 첫번째만 찾는다. 모두 찾으려면 filter만 for문(return)을 사용해야 된다.

data10 = names.find(name => name.length > 13)
console.log(data10)  // 첫번째 하나만 찾아진다.

data11 = names.filter(name => name.length >13)
console.log(data11)

const temp = names.map(name =>{
    const temp2 = name.split(' ')
    return temp2   // ['', '', '']
})

data12 = temp.filter( e => e.length == 3)
console.log(data12)       // [['Steven', 'Paul', 'Jobs']]
data13 = data12[0].join(' ')  
console.log(data13)    // Steven Paul Jobs


// 혹은 3개 이상으로 나누어지는 사람이 없으니
data14 = names.filter ( name => name.split(' ').length > 2)
console.log(data14)



// 전체 이름의 길이가 14자 이상인 사람의 인덱스를 찾으시오.
// 미들네임이 포함되어 있는 사람의 인덱스를 찾으시오
console.log(names.findIndex(item => item.length >14))
console.log(names.findIndex(item => item.split(' ').length >2))