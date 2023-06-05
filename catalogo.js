const cards = document.querySelector(".cards");

function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadsatrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        let divcard = document.createElement("div");
        divcard.innerHTML = `<div class="card">
        <img src="img/${elemento.foto}" alt="">
        <div class = "cardbtn">
        <i  onclick="editar(${indice})">Editar</i>
        <i  onclick="excluir(${indice})">Excluir</i>
        </div>
      </div>` ;

        cards.appendChild(divcard);
        
    });
}
carregarCatalogo();

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}
