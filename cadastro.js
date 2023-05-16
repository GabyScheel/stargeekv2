const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const telefone = document.getElementById("ttelefone");
const email = document.getElementById("iemail");
const senha = document.getElementById("tsenha");

formulario.onsubmit = (evento) => {
    if (telefone.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite seu telefone! </p>";
        telefone.focus();
        return null;
    }
    if (email.value == ""){
    evento.preventDefault();
    mensagem.innerHTML = "</p> Digite seu email </p>"
    email.focus();
    return null;
    }

    if (senha.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "</p> Digite sua senha </p>"
        senha.focus();
        return null;
        }

        let dados = JSON.parse(localStorage.getItem("dados")) || [];
        dados.push({
            telefone:telefone.value,
            email : email.value,
            senha : senha.value
        })

        localStorage.setItem("dados" , JSON.stringify(dados));
        evento.preventDefault();
        mensagem.innerHTML= "<p> Parabéns! Cadastro feito com sucesso </p>"

        setTimeout(() => {
            window.location.assign("login.html");
        } , 3000);
}