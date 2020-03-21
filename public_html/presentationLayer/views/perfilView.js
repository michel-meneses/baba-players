
/**
 * Recupera email passado como parâmetro para esta tela.
 */

var email = decodeURIComponent(window.location.search.match(/(\?|&)email\=([^&]*)/)[2]);

/**
 * Instancia apresentador.
 */

var presenter = new PerfilPresenter(this, email);

/**
 * Configura listener do botão de voltar.
 */

document.getElementById("btn_sair").onclick = function(){
    presenter.botaoVoltarPressionado();
}

/**
 * Carrega o nome do usuário.
 * 
 * @param {String} nome Nome do usuário
 */

function setNome(nome){
    document.getElementById("txt_nome").innerHTML = nome;
}

/**
 * 
 * Carrega o email do usuário.
 * 
 * @param {String} email Email do usuário
 */

function setEmail(email){
    document.getElementById("txt_email").innerHTML = email;
}

/**
 * 
 * Carrega a posição do usuário.
 * 
 * @param {String} posicao Posição do usuário
 */

function setPosicao(posicao){
    document.getElementById("txt_posicao").innerHTML = posicao;
}

/**
 * 
 * Exibe mensagem ao usuário.
 * 
 * @param {String} mensagem
 */

function mostrarMensagem(mensagem){
    alert(mensagem);
}

/**
 * Navega para a tela principal.
 */

function navegarTelaPrincipal(){
    window.location = "../../index.html";
}

/**
 * Inicia cilco de vida do apresentador.
 */

presenter.resume();