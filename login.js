
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario = document.getElementById("formulario");


formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));

    dados.forEach(elemento => {
        if (elemento.email == email.value && elemento.senha == senha.value){
            evento.preventDefault();

            setTimeout(() => {
                window.location.assign("catalogo.html");
            } , 1000);
            return true;
   
        } else {
            
            evento.preventDefault();
             
        }});
           
}