// Heart Buttons Functionality
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

// Coin and Call Histories Functionality.

const callButtons = document.querySelectorAll(".btn");
const coinElement = document.getElementById("coin-count");
let coin = parseInt(coinElement.innerText);
const historyListContainer = document.getElementById("history-list");


for(let i = 0; i < callButtons.length; i++){
    const btn = callButtons[i];
    
    if(btn.innerText.includes("Call")){
        btn.addEventListener("click",function(){
        if(coin < 20){
            alert("Sorry!!You don't have enough coins to make this call.");
            return;
        }

        coin = coin - 20;
        coinElement.innerText = coin;
       
        let serviceCard = btn.parentNode;
        while (serviceCard && !(serviceCard.classList.contains("flex") && serviceCard.classList.contains("flex-col"))){
            serviceCard = serviceCard.parentNode;
        }

        let headings = serviceCard.getElementsByTagName("h1");
        let serviceName = "";
        let serviceNumber = "";

        for(let j = 0; j < headings.length; j++){
            let h = headings[j];
            if (h.classList.contains("font-bold") && h.classList.contains("text-xl")) {
            serviceName = h.innerText;
             break;
             }

        }

        for (let k = 0; k < headings.length; k++) {
            let h = headings[k];
            if (h.classList.contains("font-bold") && h.classList.contains("text-2xl")) {
            serviceNumber = h.innerText; 
            break;
            }
        }

        alert("Calling " + serviceName + " at number " + serviceNumber);

        const date = new Date();
        const timeString = date.toLocaleTimeString();
 
        let history = document.createElement("div");
        history.style.display = "flex";
        history.style.justifyContent = "space-between";
        history.style.alignItems ="center";
        history.style.marginTop = "8px";
        history.style.padding = "8px";
        history.style.backgroundColor = "#f3f3f3";
        history.style.borderRadius = "8px";

        let info = document.createElement("div");
        let name = document.createElement("div");
        name.style.fontWeight = "bold";
        name.innerText = serviceName;

        let number = document.createElement("div");
        number.style.fontSize = "14px";
        number.style.color = "#555";
        number.innerText = serviceNumber;

        info.appendChild(name);
        info.appendChild(number);

        let time = document.createElement("div");
        time.style.fontSize = "14px";
        time.style.color = "black";
        time.innerText = timeString;

        history.appendChild(info);
        history.appendChild(time);

        historyListContainer.appendChild(history);
    
    });
   
    // Clean Buttons Functionality.

    const clearHistoryBtn = document.getElementById("clear-history");

    clearHistoryBtn.addEventListener("click",function(){
        historyListContainer.innerHTML = "";
    });
 }  
}

// Copy count element and counter Functionality.
let copyCount = 0;
let copyCountElement = document.getElementById("copy-count");

// Loop all buttons
let copyButtons = document.getElementsByClassName("btn");
for (let i = 0; i < copyButtons.length; i++) {
    (function(index) {
        let btn = copyButtons[index];

        if (btn.innerText.indexOf("Copy") !== -1) {
            btn.addEventListener("click", function() {
                let serviceCard = btn.closest(".flex.flex-col");
                let serviceNumberElement = serviceCard.querySelector("h1.text-2xl");
                let serviceNumber = serviceNumberElement.innerText;

                let tempInput = document.createElement("textarea");
                tempInput.value = serviceNumber;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);

                alert("Number is copied: " + serviceNumber);
                copyCount++;
                copyCountElement.innerText = copyCount + " Copy";
            });
        }

    })(i);
}

