let buttons   = document.querySelectorAll(".btn");

buttons.forEach( button => {
    button.addEventListener('click',function(){
        console.log(button.getAttribute("id"));
    })
})