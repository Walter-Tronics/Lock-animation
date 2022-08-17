//adding a load event listener to the window object
window.onload=()=>{

//declaring a boolean variable to check if key is in motion
let isInMotion = false;


//selecting elements from the DOM
let key = document.getElementById('key'),
cont = document.getElementById('case'),
lockHead = document.getElementById('top'),
openLock = document.querySelector('#openLock'),
notice = document.getElementById('alertCont'),
hide = document.querySelector('#hide');


//function to open the lock
function open(){
    //setting the padlock head to be in motion
    //moving the head to the left of the lock
    lockHead.style.transform="translateX(-130%)";
    //adding an ease in motion
    lockHead.style.transition="transform 2s"
}


//function to close the lock
function close(){
    //setting the padlock head to be in motion
    //moving the head to the right of the lock
    lockHead.style.transform="translateX(-50%)";
}


//function to move the key
function keymove(){
    //setting the key to be in motion
    //moving the key to the right of the lock
    cont.style.transform="translateX(-110%)";
    //adding an ease in motion
    cont.style.transition="transform 3s";
    //setting a timeout to rotate the key after 3 seconds
    setTimeout( 
        ()=>{
        //rotating the key
        key.style.animation="rot 2s linear 1";
    }, 
    3000);

    //setting a timeout to open the lock after 6 seconds
    setTimeout(open,6000);

    //setting a timeout to display the alert message after 8 seconds
    setTimeout( 
        ()=>{
            notice.style.display="block"
        }, 
        8000);
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