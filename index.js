let num = 0;
const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.addEventListener("click", ()=>{
    num-- ;
    value.innerText = num;
    color();
});
increase.addEventListener("click", ()=>{
    num++ ;
    value.innerText = num;
    color();
});
reset.addEventListener("click", ()=>{
    num = 0;
    value.innerText = num;
    color();
});
let color = ()=>{
    if(num > 0){
        value.style.color = "green"
    }else if(num < 0){
        value.style.color = "red"
    }else{
        value.style.color = "white"
    }
}