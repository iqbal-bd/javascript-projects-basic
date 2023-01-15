const hourUpdate = document.getElementById("hour");
const minutesUpdate = document.getElementById("minutes");
const secondsUpdate = document.getElementById("seconds");
const ampmUpdate = document.getElementById("ampm");

function updateClock(){
    let hour = new Date().getHours();
    
    let minutes = new Date().getMinutes();
   
    let seconds = new Date().getSeconds();
    
    let ampm = "AM"
    
    // am and pm  part

    if(hour>6 && hour<20){
        ampmUpdate.style.backgroundColor = "#FDCF74";
        ampmUpdate.style.color = "black";
    }
    else{
        ampmUpdate.style.backgroundColor = "#443c3c";
        ampmUpdate.style.color = "white";
    }

    if(hour>12){
        hour = hour - 12;
        ampm = "PM"
        
    }

    // added 0 before single digit

    hour = hour < 10 ? "0" + hour : hour;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    // disply part

    hourUpdate.innerText = hour;
    minutesUpdate.innerText = minutes;
    secondsUpdate.innerText = seconds;
    ampmUpdate.innerText = ampm;

    // random call 

    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock();
