var min = 0;
var sec = 0;
var msec = 0;

var DisplayWatch = document.getElementById("stopwatch");

var interval;

function timer(){
    DisplayWatch.innerHTML = (min < 10 ? "0" + min : min)  + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (msec < 10 ? "0" + msec : msec);

    msec++;
    if(msec >= 100){
        sec++;
        msec = 0
    }else if(sec >= 60){
        min++;
        sec = 0;
    }
}

function start(){
    if(!interval){
        interval = setInterval(timer, 10)
    }
        
 }

 function stop(){
     clearInterval(interval);
     interval = false;
 }

 function reset(){
     min = 0;
     sec = 0;
     msec = 0;
     DisplayWatch.innerHTML = (min < 10 ? "0" + min : min)  + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (msec < 10 ? "0" + msec : msec);
     stop();
     interval = false;
 }