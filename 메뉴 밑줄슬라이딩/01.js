fruit =['apple','mango', 'cherry', 'orange', 'watermelon', 'a', 'b', 'banana', 'bb', 'c']


// 'mango'가 있는가?
console.log(fruit.includes('mango') )
// 'mango'를 찾아서, 'strawberry'로 바꾸라
let index = fruit.indexOf('mango')
fruit[index] = 'strawberry'
console.log(fruit)

// 'mango'로부터 3개의 아이템을 기존의 어레이에서 제거하시오.
fruit.splice(index, 3)
console.log(fruit)
// 'a' 이후의 값을 제거하시오        splice에서 두번째 인자 0혹은 아무것것도 안 넣으면 된다.
// fruit.splice( fruit.indexOf('a'))
// fruit.splice( fruit.indexOf('a'), 0)
// fruit.splice( fruit.indexOf('a'), fruit.length)
// console.log(fruit)


//'b'로 시작하는 'b'부터  'bb'까지를 가져와 새로운 어레이에 저장하라.
let startIndex = fruit.indexOf('b')
let endIndex = fruit.indexOf('bb')

let newFruit = fruit.slice(startIndex, endIndex+1);
console.log(newFruit)