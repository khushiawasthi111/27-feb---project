const decrementBtn = document.getElementById("Decrement");
const incrementBtn = document.getElementById("increment");
const zero = document.getElementById("zero");
const Resetbtn = document.getElementById("Reset");

decrementBtn.addEventListener("click", () => {
    const value = Number(zero.innerText);
    if(value  > 0  ) {
     zero.innerText = value -1;
    
    }else {
    
    alert("Nagative value is not allowed");
    }
            
});


incrementBtn.addEventListener("click", () => {
    const value = Number(zero.innerText);
    if (value >= 20) {
    alert("value is greaten than 10");
    } else {
    zero.innerText = value + 1;
    }
})


Resetbtn .addEventListener("click", () => {
    zero.innerText = 0;

      
})