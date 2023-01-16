const btn = document.querySelector(".btn");
 btn.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btn.offsetLeft);
    const y = (event.pageY - btn.offsetTop)

    btn.style.setProperty("--xPosition", x + "px");
    btn.style.setProperty("--yPosition", y + "px");
 })