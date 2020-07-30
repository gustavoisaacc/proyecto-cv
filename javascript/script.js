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


menu.forEach(function(item,i){
    item.addEventListener('click', function(e){
        e.preventDefault();
        const enlace = item.getAttribute('href').slice(1)
        const sobreMI = document.getElementById(enlace)

        
        const menus = document.querySelectorAll('nav a')
        menus.forEach(m => m.classList.remove('activo'))  
        menus[i].classList.add('activo')

        const datos = document.querySelectorAll('.sobre-mi')
        datos.forEach(info => info.classList.remove('show'))    

        sobreMI.classList.add('show')

    })

})

