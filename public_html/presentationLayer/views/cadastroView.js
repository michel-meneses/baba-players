var presenter = new CadastroPresenter(this);

document.getElementById("btn_cadastrar").onclick = function(){
    presenter.botaoCadastrarPressionado();
}

function getNome(){
    return document.getElementById("txt_nome").value;
}
function getEmail(){
    return document.getElementById("txt_email").value;
}
function getSenha(){
    return document.getElementById("txt_senha").value;
}
function getPosicao(){
    return parseInt(document.getElementById("sel_posicao").selectedIndex);
}
function mostrarMensagem(mensagem){
    alert(mensagem);
}

/**
 * 
 * Opens user's profile view
 * 
 * @param {String} email User's email
 */

function navegarTelaPerfil(email){
    window.location = "../layouts/perfil.html?email=" + email;
}
