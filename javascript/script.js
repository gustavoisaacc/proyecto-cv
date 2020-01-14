let name = document.getElementById('nombre');

let str = name.innerHTML;
        name.innerHTML= "";

let speed = 200;
let i = 0;

function typeWriter(){
    
    if(i < str.length){
        name.innerHTML += str.charAt(i);

        i++;
        setTimeout(typeWriter, speed);
    }
}

setTimeout(typeWriter, speed);


const menu = document.querySelectorAll('.menu a');


menu.forEach(function(item){
    item.addEventListener('click', function(e){
        const datos = document.querySelectorAll('.sobre-mi')
        datos.forEach(function(info){
            info.classList.toggle('active');
         

        })
        e.preventDefault();
        

    })
       

})

