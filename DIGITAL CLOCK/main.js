const hourUpdate = document.getElementById("hour");
const minutesUpdate = document.getElementById("minutes");
const secondsUpdate = document.getElementById("seconds");
const ampmUpdate = document.getElementById("ampm");

function updateClock(){
    let hour = new Date().getHours();
    
    let minutes = new Date().getMinutes();
   
    let seconds = new Date().getSeconds();
    
    let ampm = "AM"

    if(hour>12){
        hour = hour - 12;
        ampm = "PM"
        ampmUpdate.style.backgroundColor = "#FDCF74";
        ampmUpdate.style.color = "black";
    }

    hourUpdate.innerText = hour;
    minutesUpdate.innerText = minutes;
    secondsUpdate.innerText = seconds;
    ampmUpdate.innerText = ampm;

    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock();
