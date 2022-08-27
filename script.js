function backHome () {
    const backTime = new Date("September 17, 2022 00:00");
    const now = new Date ();

    const diff = backTime - now;

    const msInSecond = 1000;
    const msInMinute = 60* 1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor ((diff/msInDay));
    document.querySelector ('.days').textContent = displayDay;

    const displayHour = Math.floor ((diff % msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor ((diff % msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor ((diff % msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if (diff <=0) {
        document.querySelector ('.days').textContent = 0;
        document.querySelector ('.hours').textContent = 0;
        document.querySelector ('.minutes').textContent = 0;
        document.querySelector ('.seconds').textContent = 0;
    
        clearInterval (timerID);
        welcomeBack ();
        changeBg ();
    }
}

let timerID = setInterval (backHome, 1000);

function welcomeBack () {
    const heading = document.querySelector('h1');
    heading.textContent = "Welcome back, daddy!!!)))";
    heading.classList.add ('wb');
}

function changeBg () {
    const change = document.querySelector("body");
    change.classList.add ("background");
}




const button = document.querySelector ("#myButton");
button.addEventListener ("click", () => {
    document.querySelector("#myAudio").play();
})