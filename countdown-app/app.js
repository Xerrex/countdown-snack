const countdown = (eatingdate)=>{
    const timenow = new Date().getTime();
    const gap = eatingdate - timenow;

    //time  in milliseconds
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days =  hours *24;

    // extract time
    const textDays = Math.floor(gap / days);
    const textHours = Math.floor((gap % days)/ hours);
    const textMinutes = Math.floor((gap % hours)/ minutes);
    const textSeconds = Math.floor((gap % minutes)/ seconds);


    //post the time
    document.querySelector(".day").innerHTML = textDays;
    document.querySelector(".hour").innerHTML = textHours;
    document.querySelector(".minute").innerHTML = textMinutes;
    document.querySelector(".second").innerHTML = textSeconds;

};


const setEatingCountdown = () => {
    const countdown_btn = document.getElementById("countdown_time_btn");
    countdown_btn.addEventListener("click", ()=>{
        const countdown_time = document.getElementById("countdown_time_input").value;
        const eatingdate = new Date(countdown_time).getTime();
        setInterval(countdown, 1000, eatingdate);
    });
}

setEatingCountdown()





