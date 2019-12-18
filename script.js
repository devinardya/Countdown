
let button = document.querySelector("button");
let clock = document.querySelector(".clock");
let inputCounter = document.querySelector(".inputbox");
let inputHour = document.querySelector(".input.hour");
let inputMins = document.querySelector(".input.mins");
let inputSec = document.querySelector(".input.sec");

button.addEventListener("click", ()=>{
    let hourInput = parseInt(inputHour.value);
    let minsInput = parseInt(inputMins.value);
    let secInput = parseInt(inputSec.value);

    console.log(hourInput, minsInput, secInput);

    if (Number.isNaN(hourInput) || Number.isNaN(minsInput) || Number.isNaN(secInput)){
        console.log("this is NaN")
    } else {
        countdownSecond(hourInput, minsInput, secInput);
    }
})



function countdownThousand(number){
    return number * 1000;
}


function countdownSecond(h, m, s){
    let hour = document.querySelector(".hours");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");
    console.log(h, m ,s)

    inputCounter.style.display = "none";
    clock.style.display = "block";

    second.textContent = s;
    hour.textContent = h;
    minute.textContent = m;

    if(m < 10){
        minute.textContent = "0"+m;
        
    }
    if(h < 10){
        hour.textContent = "0"+h;
    }
    
    if(s < 10){
        second.textContent = "0"+s;
    }

    if (h <= 0){
        h = 0;
        hour.textContent = "0"+h;
    } 
    

    if (m <= 0){
        console.log(m);
        console.log(s);
        //m = 0;
        minute.textContent = "0"+m;
        h--;

        if (h === 0){
            m =60;
        }

    } 

    for (let i = s; i < s+1; i++){
        
        setInterval( () => {
        s--
        second.textContent = s;
    
        
        if(s < 10){
            second.textContent = "0"+s;
            
        }
    
        if (s < 0){
            console.log(s);
            minute.textContent = m;
            if(m < 10){
                minute.textContent = "0"+m;
                
                
            }
            s = 59;
            m--;
    
            countdownSecond(h, m, s);
            
        } 


        }, countdownThousand(1))  

    
        if (h <= -1 && m <= -1 && s === 59){
            console.log("Countdown Finished");
            clock.style.display = "none"
            document.querySelector(".finishbox").style.display = "block";
            document.querySelector(".restart").addEventListener("click", () =>{
                window.location.reload(true);
            })
            break;
        }
        
    }

}

