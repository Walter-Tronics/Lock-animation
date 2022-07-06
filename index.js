window.onload=()=>{
let isInMotion = false;
let key = document.getElementById('key');
let cont = document.getElementById('case');
let lockHead = document.getElementById('top');
let openLock = document.querySelector('#openLock');
let notice = document.getElementById('alertCont');
let hide = document.querySelector('#hide');
function open(){
    lockHead.style.transform="translateX(-130%)";
    lockHead.style.transition="transform 2s"
}
function close(){
    lockHead.style.transform="translateX(-50%)";
}
function keymove(){
    cont.style.transform="translateX(-110%)";
    cont.style.transition="transform 3s";
    setTimeout( ()=>{
        key.style.animation="rot 2s linear 1";
    }, 3000);
    setTimeout(open,6000);
    setTimeout( ()=>{notice.style.display="block"}, 8000);
}
function keyReturn(){
    close();
    setTimeout( ()=>{
        cont.style.transform="translateX(0)";
        key.style.animation="";
    }, 2000);
}
openLock.addEventListener('click', ()=>{
    keymove();
    isInMotion = true;
    if (isInMotion==true) {
        openLock.removeEventListener('click');
    }
});
hide.addEventListener('click', ()=>{
    notice.style.display="none";
    setTimeout(keyReturn, 800);
});
}