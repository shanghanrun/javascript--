let skills =['HTML', 'CSS', 'Javascript', 'React']

// javscript와 리액트 둘 다 할 줄 알면 '합격', javscript나 react둘 중 하나하라 줄 알면 '예비', 두 스킬이 없다면 '탈락'하는 프로그램

a = ['HTML', 'CSS']
b = ['Javascript', 'React']
c = ['React', 'CSS']

function verify(list){
    if (list.includes('Javascript') || list.includes('React')){
        if(list.includes('React') && list.includes('Javascript')){
            return '합격'
        } else {
            return '예비'
        }
    } else {
        return '탈락'
    }
}

console.log( verify(a))
console.log( verify(b))
console.log( verify(c))