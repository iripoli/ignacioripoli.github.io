

var botonMenu = document.querySelector('.nav__btn');
var mostrarMenu=document.querySelector('header');

botonMenu.addEventListener('click', function(){
    mostrarMenu.classList.toggle('headerAmpliado');
});
 botonMenu.addEventListener('click', function(event){
     console.log(event);
 })

var nombre = [];
var botonSubmit= document.getElementById('submit');
var inputNombre=document.getElementById('inputNombre')

botonSubmit.addEventListener('click',
function inputArray (event){
    event.preventDefault();
    var contenidoNombre = inputNombre.value;
    nombre.push(contenidoNombre)
    
}
) 

function myFunction(x) {
    x.classList.toggle("change");
  }


  document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
      console.log(this.nombre.value, this.email.value, this.empresa.value);
  })
  function validateName(nombre){
      return nombre.length>4 ? true : false
  }