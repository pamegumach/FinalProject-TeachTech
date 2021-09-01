const checkbox = document.getElementById('checkbox');
const body = document.querySelector('body');


checkbox.addEventListener('change',() => {

    //Para cambiar el tema de la app web
    document.body.classList.toggle('dark');

    //Para que se mantenga el modo que se haya elegido

});