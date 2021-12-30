const app = ()=> {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video =  document.querySelector(".vid-container video");

    //sound buttons
    const soundPickingBtns = document.querySelectorAll(".sound-picker button");

    //time buttons
    const timeSelectBtns = document.querySelectorAll(".time-select button");

    //time display
    const timeDisplay = document.querySelector(".time-display")

    // Get the Outline length
    const outlineLength = outline.getTotalLength();
    
    // duration
    let meditationDuration = 600;

    //Time display String formatting to 5:0
    const timeDisplayFormat = (timeInSeconds) => {
        let seconds = Math.floor(timeInSeconds % 60);
        let minutes = Math.floor(timeInSeconds / 60);

        return `${minutes}:${seconds}`
    };


    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //Time selection
    timeSelectBtns.forEach(btn=>{
        btn.addEventListener("click", function(){
            meditationDuration = this.getAttribute('data-time');
            timeDisplay.textContent = timeDisplayFormat(meditationDuration)
        });
    });

    //Sound Picking
    soundPickingBtns.forEach(btn =>{
        btn.addEventListener("click", function(){
            song.src = this.getAttribute("data-sound");
            video.src = this.getAttribute("data-video");

            playBackToggle(song);
        });
    });


    // Play sound
    play.addEventListener("click", ()=>{
        playBackToggle(song);
    });

    const playBackToggle = (song)=>{
        if(song.paused){
            video.play()
            song.play();
            play.src = "./svg/pause.svg";
        } else {
            video.pause();
            song.pause();
            play.src = "./svg/play.svg";
        }
    };


    // Add life to the circle
    song.ontimeupdate = ()=>{
        let currentTime = song.currentTime;
        let elapsedTime = meditationDuration - currentTime;
        // the life of the circle
        let progress = outlineLength - (currentTime / meditationDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

        // the life of the time dispaly
        timeDisplay.textContent = timeDisplayFormat(elapsedTime);

        if(currentTime >= meditationDuration){
            video.pause();
            song.pause();
            play.src = "./svg/play.svg";
            timeDisplay.textContent = "0:00";
        };
    }

};


app();