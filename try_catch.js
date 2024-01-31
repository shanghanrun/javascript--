let weight =20

try{
    console.log('몸무게가 어떻게 되나요?')
    if(weight<30){
        throw new Error('당신은 너무 말랐어')
    }
    //에러가 발생하면 try문은 끝난다.
    console.log('밥먹자')
}catch(e){
    console.log(e.message)
}