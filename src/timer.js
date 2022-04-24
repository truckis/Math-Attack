let mathTimer = setInterval(function(){
    countDown()
}, 1000)

// Print Time 
function countDown() {
    time = time - 1
    console.log(time)
    // Discplay Time in HTML
    document.getElementById("time").innerHTML="Time: " + time;
    // Clear numbers
    if(time == 0){
        clearTimeout(mathTimer)
        console.log("TIMER DONE")
        window.alert("NICE JOB! YOUR SCORE IS " + score)
    }
    
}