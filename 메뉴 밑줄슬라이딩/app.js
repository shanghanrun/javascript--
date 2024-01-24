let hUnderline = document.getElementById('horizontal-underline')
let vUnderline = document.getElementById('vertical-underline')
let hMenus = document.querySelectorAll('nav:first-child a')   // 첫번째 nav   의 a tag들
let vMenus = document.querySelectorAll('nav:nth-child(2) a')
console.log(hUnderline);
console.log(hMenus);


hMenus.forEach( menu => menu.addEventListener("click",(e)=> hIndicator(e)))

function hIndicator(e){
    hUnderline.style.left = e.currentTarget.offsetLeft - 8 + "px";
    hUnderline.style.width = e.currentTarget.offsetWidth + 15 +"px";
    hUnderline.style.top = e.currentTarget.offsetTop -5 + "px";
}

vMenus.forEach( menu => menu.addEventListener("click",(e)=> vIndicator(e)))

function vIndicator(e){
    vUnderline.style.left = e.currentTarget.offsetLeft +"px";
    vUnderline.style.width = e.currentTarget.offsetWidth +"px";
    vUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 2+ "px";
}