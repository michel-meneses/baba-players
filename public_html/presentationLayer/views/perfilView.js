
/**
 * Gets the email given as a parameter to this view.
 */

var email = decodeURIComponent(window.location.search.match(/(\?|&)email\=([^&]*)/)[2]);

/**
 * Instanciate presenter.
 */

var presenter = new PerfilPresenter(this, email);

/**
 * Set up return button's listener.
 */

document.getElementById("btn_sair").onclick = function(){
    presenter.botaoVoltarPressionado();
}

/**
 * Set user's name.
 * 
 * @param {String} nome User's name
 */

function setNome(nome){
    document.getElementById("txt_nome").innerHTML = nome;
}

/**
 * 
 * Set user's email.
 * 
 * @param {String} email User's email
 */

function setEmail(email){
    document.getElementById("txt_email").innerHTML = email;
}

/**
 * 
 * Set user's game position.
 * 
 * @param {String} posicao User's game position
 */

function setPosicao(posicao){
    document.getElementById("txt_posicao").innerHTML = posicao;
}

/**
 * 
 * Shows message to the user.
 * 
 * @param {String} mensagem
 */

function mostrarMensagem(mensagem){
    alert(mensagem);
}

/**
 * Go back to the initial view.
 */

function navegarTelaPrincipal(){
    window.location = "../../index.html";
}

/**
 * Start-up presenter's lifecycle.
 */

presenter.resume();
