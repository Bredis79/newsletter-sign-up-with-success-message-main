
const main = document.querySelector("main")
const inputEmail = document.querySelector("#email");
const subscribeBtn = document.querySelector(".subscribe");
const thanksCard = document.querySelector(".thanks-card");
const cardEmail = document.querySelector("#cardEmail");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const dismissBtn = document.querySelector(".dismiss");
const error = document.createElement("p");
    error.textContent = "Valid email required";
const errorMessage = document.querySelector(".errorMessage");

// input check  
subscribeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    // email validation
    if (emailRegex.test(inputEmail.value)) {
        main.style.display = "none";
        thanksCard.classList.toggle("visible", true);
        cardEmail.textContent = inputEmail.value;
    } else {
        inputEmail.classList.toggle("error", true);
        errorMessage.style.display = "flex";
        console.log(inputEmail.value);
        errorMessage.appendChild(error)
    }
    


});


// close thanks card
dismissBtn.addEventListener("click", (e) => {
    thanksCard.classList.toggle("visible", false);
    main.style.display = "flex";
    inputEmail.value = "";
});