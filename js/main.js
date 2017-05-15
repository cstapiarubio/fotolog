function agregaPosteo() {
var containerPosteos=document.getElementById("contenedor-posteos");
var nombreFF=document.getElementById("nombre").value;
var contenidoFF=document.getElementById("cajaposteos").value;
var nuevoPost=document.createElement("div");
var contenedorNombre=document.createElement("strong");
var contenedorPost=document.createElement("p");
var separacion=document.createElement("hr");
var parrafCorazon =document.createElement("p");
var i=document.createElement("i");
parrafCorazon.appenChild(i);
parrafCorazon.setAttribute("class", "corazon");
i.setAttribute("class", "fa fa-heart");
i.setAttribute("arial-hidden", "true");
var nodoNombre=document.createTextNode(nombreFF + " escribió:");
var nodoPosteo=document.createTextNode(contenidoFF);
contenedorNombre.appenChild(nodoNombre);
contenedorPost.appenChild(nodoPosteo);
nuevoPost.appenChild(contenedorNombre);
nuevoPost.appenChild(contenedorPost);
nuevoPost.appenChild(parrafCorazon);
nuevoPost.appenChild(separacion);
i.addEventListener("click", function(){
	i.classList.toogle("rojo");
});
nuevoPost.setAttribute("class", "posteo");
containerPosteos.appenChild(nuevoPost);
document.getElementById("nombre").value="";
document.getElementById("cajaposteos").value="";
}
agregaPosteo();