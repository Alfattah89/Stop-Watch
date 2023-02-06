window.onload= function(){
    var seconds = 00;
    var tens = 00;
    var appendSeconds = document.getElementById("seconds")
    var appendTens = document.getElementById("tens")
    var startBtn = document.getElementById("start-btn")
    var stopBtn = document.getElementById("stop-btn")
    var resetBtn = document.getElementById("reset-btn")
    var Interval;
    
    startBtn.onclick = function(){
       Interval = setInterval(startTimer, 10)
    }
    
    stopBtn.onclick = function(){
        clearInterval(Interval)
    }

    resetBtn.onclick = function(){
        clearInterval(Interval) 
        tens = "00"
        seconds ="00"
        appendTens.innerHTML = tens
        appendSeconds.innerHTML = seconds
    }

    function startTimer(){
        tens++;
        if(tens <=9){
            appendTens.innerHTML = "0" + tens
            console.log(tens + "one")
        }
        if(tens >9){
            appendTens.innerHTML = tens
            console.log(tens + "two")
        }
        if(tens >99){
            seconds++;
            appendSeconds.innerHTML = "0" +seconds
            console.log(tens + "three")
            tens = 0
            appendTens.innerHTML = "0" + 0
        }
        
        if(seconds >9){
            appendSeconds.innerHTML = seconds
            console.log(seconds + "four")
        }
    }
}