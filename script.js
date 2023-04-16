const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayvlaue = document.getElementById("displayvlaue");

// for decrementbtn
 decrementBtn.addEventListener("click", () => { 
    const value = Number(displayvlaue.innerText);
    if (value > 0) {
        displayvlaue.innerText = ( value - 1 );
     } 
        else {
            alert("Negative value not allowed");
        }
});

// for incrementbtn 
incrementBtn.addEventListener("click", () => {
    const value = Number(displayvlaue.innerText);
    if (value >= 13) {
        alert("10+ Values are not allowed");
    } else {
        displayvlaue.innerText = value + 1;
    }
});

// for reset button 
resetBtn.addEventListener("click", () => {
    displayvlaue.innerText = 0;

});

