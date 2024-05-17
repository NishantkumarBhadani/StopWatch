let [ms, s, m, hr] = [0, 0, 0, 0];
/*

ms-millisecond
s-second
m-minute
hr-hour

 */
let timer = document.querySelector(".display_time");
let int = null;

document.getElementById("start_timer").
    addEventListener("click", () => {
        if (int !== null) {
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
    });


function displayTimer() {
    
        ms += 10;
        if (ms === 1000) {
            ms = 0;
            s += 1;
            if (s === 60) {
                s = 0;
                m += 1;
                if (m === 60) {
                    m = 0;
                    hr += 1;
                }
            }
        }

    let hour = String(hr).padStart(2, "0");
    let min = String(m).padStart(2, "0");
    let sec = String(s).padStart(2, "0");
    let millisec = String(ms).padStart(3, "0");
    timer.innerHTML = `${hour}: ${min} : ${sec}: ${millisec}`;

}

document.getElementById("pause_timer").
addEventListener("click",()=>{
    clearInterval(int);
})


document.getElementById("reset_timer").
addEventListener("click",()=>{
    clearInterval(int);
    [ms, s, m, hr] = [0, 0, 0, 0];
    timer.innerHTML = "00 : 00 : 00 : 000";
        
})
