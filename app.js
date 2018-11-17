const btns = document.querySelectorAll('.btn');
const screen = docuement.querySelector('.screen');
const equalBtn = docuement.querySelector('.btn-equal');
const clearBtn = docuement.querySelector('.btn-clear');

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    });
}

equalBtn.addEventListener('click', function(){
    
    if(screen.value === ''){
        alert('Input is empty');
    } else {
        let value = eval(screen.value);
        screen.value = value;
    }  
});

clearBtn.addEventListener('click', function(){
    screen.value = '';
});