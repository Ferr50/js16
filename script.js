var drawNumbers = [];
var count = 0;
var myInterval;

function roll() {
    drawNumbers = [];
    count = 0;
    document.getElementById("boxDraw").innerHTML = "";
    myInterval = setInterval(drawOneNumber, 1000);
    console.log(myInterval);
    
}

function drawOneNumber() {
    let numb = Math.ceil(Math.random()*60); 

    while (drawNumbers.includes(numb) == true) {
        console.log("oi");
        numb = Math.ceil(Math.random()*60);
        }

    if(count<6){
        drawNumbers.push(numb);
        callback(drawNumbers);
    }else{
        clearInterval(myInterval)
    }
    count ++; 
}

function callback(arg) {
    document.getElementById("boxDraw").innerHTML = arg;
}
