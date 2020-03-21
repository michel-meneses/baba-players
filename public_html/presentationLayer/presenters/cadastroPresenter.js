function CadastroPresenter(cadastroView){
    
    /**
     * Inicializa view.
     */
    
    this.view = cadastroView;
    
    this.botaoCadastrarPressionado = function(){
        
        /**
         * Recupera dados do cadastro.
         */
        
        var nome = this.view.getNome();
        var email = this.view.getEmail();
        var senha = this.view.getSenha();
        var posicao = this.view.getPosicao();
        
        /**
         * Inicializa model, repository e interactor.
         */
        
        this.model = new Usuario(nome, posicao, email, senha);
        this.repository = new UsuarioRepository();
        this.interactor = new CadastrarInteractor(this.model, this.repository);
        
        /**
         * Executa o caso de uso.
         */
        
        var presenter = this;
        this.interactor.run().then(function(fulfilled){
           presenter.view.mostrarMensagem("Sucesso no cadastro!");
           presenter.view.navegarTelaPerfil(presenter.model.email);
        }).catch(function(error){
           presenter.view.mostrarMensagem("Falha durante o cadastro."); 
        });
    };
}