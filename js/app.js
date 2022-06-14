let name = "Yehor";
let age = 21;
let boo = true;

const header = document.querySelector(".header");
const navLink = document.querySelectorAll(".nav_link");
const testBtn = document.querySelector("#testbtn");
let rvwBtn = document.querySelectorAll(".reviews_btn")



function sayhello() {
    let message = "Hello" + name;
    console.log(message);
    
}

sayhello();

function simpleMath(a, b) {
    let result = a + b;
    return result;
}

let sum = simpleMath(121, 221);

console.log(sum);





window.addEventListener("scroll", function(){
    let scrollPos = window.scrollY;
    
    if(scrollPos > 0) {
        header.classList.add('red');
    } else {
        header.classList.remove('red');
    }
    
});



testBtn.addEventListener("click", function() {
    console.log('clicked');
 });




for(let navItem of navLink) {
    navItem.addEventListener("click", function() {
    console.log(navItem.text);
 });
}




for(let rvwBtnE of rvwBtn) {
    rvwBtnE.addEventListener("click", function() {
    console.log(rvwBtnE.text);
 });
}











