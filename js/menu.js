const menu = document.querySelector('.menu');
const menuNavegation = document.querySelector('.menu-navegation');

console.log(menu);
console.log(menuNavegation);

menu.addEventListener('click', ()=>{
    //alert("Click prueba")
    menuNavegation.classList.toggle("spread");
})

//Para que el menu aparezca una vez abiero
//Usando funcion de flecha
window.addEventListener('click', e=>{
    //Para saber donde esto haciendo click?
    //console.log(e.target);
    if (menuNavegation.classList.contains('spread') && e.target != menu && e.target != menu){
        menuNavegation.classList.toggle("spread");

    }
})