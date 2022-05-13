let display = document.querySelectorAll('#display')

let buttons = Array.from(document.querySelectorAll('.button'))

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            default:
                display.innerText += e.target.innerText;

        }
    });

});

