const counterElement = document.querySelector(".count-hearts");
let heartCount = 0;

const heartButtons = document.getElementsByClassName("heart-btn");

for(let i = 0; i < heartButtons.length; i++){
    heartButtons[i].addEventListener("click",function(){
        if(heartButtons[i].classList.contains("fa-solid")){
            heartCount--;
            heartButtons[i].classList.remove("fa-solid","text-red-500");
            heartButtons[i].classList.add("fa-regular");
        }
        else{
            heartCount++;
            heartButtons[i].classList.remove("fa-regular");
            heartButtons[i].classList.add("fa-solid","text-red-500");
        }
        counterElement.innerText = heartCount;
    });
}