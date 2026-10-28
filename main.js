let inputNumber = document.querySelector('#inputNumber');
let btnStartPause = document.querySelector('#btnStartPause');
let btnReset = document.querySelector('#btnReset');
let countdownDisplay = document.querySelector('#countdownDisplay');

let check = true;
let timeleft = 0;
let timer = null;

btnStartPause.addEventListener('click', ()=>{
    if(check === true && (inputNumber.value > 0 || timeleft > 0)){
        if (timeleft === 0) {
            timeleft = inputNumber.value;
        };
        check = false;
        btnStartPause.textContent = "Pause";
        timer = setInterval(()=>{
            timeleft--;
            countdownDisplay.textContent = timeleft;
            if(timeleft === 0){
                clearInterval(timer);
                timer = null;
                check = true;
                btnStartPause.textContent = "Start";
            }
        }, 1000)
    }else if (check === false) {
        clearInterval(timer);
        timer = null;
        check = true;
        btnStartPause.textContent = "Start";
    }
});
btnReset.addEventListener('click', ()=>{
    clearInterval(timer);
    timer = null;
    timeleft = 0;
    inputNumber.value = '';
    countdownDisplay.textContent = '0';
    check = true;
    btnStartPause.textContent = 'Start';
});

