/**
 * 1. 발생시킬 때, throw(던진다.)
 * 2. 명시적으로 인지할 때: catch(잡는다.)
 */

function runner(){
    console.log('Hello')
    throw new Error('big problem'); // 에러를 던지만, 함수실행정지
    console.log('code factory'); // 다음 코드 실행되지 않는다.
}
// runner();

function runner2(){
    try{
    console.log('Hello')
    throw new Error('big problem'); // 에러를 던지만, 함수실행정지
    console.log('code factory'); // 다음 코드 실행되지 않는다.
    } catch(e){
        console.log('-----catch------');
        console.log(e);
    } finally{  // 무조건 실행되는 코드
        console.log('---- finally ------')
    }
}
runner2();