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
 * Abre a tela de perfil do usuário
 * 
 * @param {String} email Email do usuário dono do perfil
 */

function navegarTelaPerfil(email){
    window.location = "../layouts/perfil.html?email=" + email;
}