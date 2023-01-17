const textArea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter")
const totalRemaining = document.getElementById("total-remaining")

textArea.addEventListener("keyup", ()=>{
    updateCounter();
})

function updateCounter(){
    totalCounter.innerText = textArea.value.length
    totalRemaining.innerText = textArea.getAttribute("maxLength") - textArea.value.length;
}

