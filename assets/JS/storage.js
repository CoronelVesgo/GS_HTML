//Recebe o setor do formulário
const cadForm = document.getElementById("Formulário");
//Script para salvar os dados do formlário no local storage
cadForm.addEventListener("submit", async(e) => {
    //para previnir de recarregar a página
    e.preventDefault();
    //recebe os valores do formulário
    var Nome =document.getElementById("Nome").value; 
    var Sobrenome =document.getElementById("Sobrenome").value; 
    var Gênero =document.getElementById("Gênero").value; 
    var Dt_nsc =document.getElementById("Dt_nsc").value; 
    var Email =document.getElementById("Email").value;
    var Tel =document.getElementById("Tel").value;  
    var Estado =document.getElementById("Estado").value;  
    var Local =document.getElementById("Local").value;  
    var Motivo =document.getElementById("Motivo").value;  
    var dt_ext =document.getElementById("dt_ext").value;  
    var dt_rtn =document.getElementById("dt_rtn").value; 
    //salva os dados no localstorage
    localStorage.setItem("Agenda_usr", JSON.stringify({Nome,Sobrenome,Gênero,Dt_nsc,Email,Tel,Estado,Local,Motivo,dt_ext,dt_rtn}));
    //Recupera os dados do localstorage
    var usuario_localstorage = localStorage.getItem("Agenda_usr");
    console.log(usuario_localstorage);
    //converte a string JSON em um objeto JS.
    var dados_usuario = JSON.parse(usuario_localstorage);
    console.log(dados_usuario);
    //Enviar os dados do localstorage para o HTML
    document.getElementById("content").innerHTML = "Nome:" + dados_usuario.Nome + "<br>Sobrenome:" + dados_usuario.Sobrenome + "<br>Gênero:" + dados_usuario.Gênero + "<br>Data de nascimento:"+
    dados_usuario.Dt_nsc + "<br>Email:" + dados_usuario.Email + "<br>Telefône de contato:" + dados_usuario.Tel + "<br>Estado:" + dados_usuario.Estado +"<br>Local Escolhido:" + dados_usuario.Local+
    "<br>Intenção:" + dados_usuario.Motivo + "<br>Data de saída:" + dados_usuario.dt_ext + "<br>Data de Retorno:" + dados_usuario.dt_rtn + "<br>"; 
});
//script para remover os dados do localstorage
function excluir(){
    localStorage.removeItem("Agenda_usr");
}
