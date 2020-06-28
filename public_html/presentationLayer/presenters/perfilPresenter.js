
/**
 * 
 * @param {PerfilView} perfilView User's profile screen
 * @param {String} email User's email  
 * @returns {PerfilPresenter} Presenter of the user's profile screen
 */

function PerfilPresenter(perfilView, email){
    
    /**
     * Set up view.
     */
    
    this.view = perfilView;
    
    /**
     * Save email.
     */
    
    this.email = email;
    
    /**
     * Tells to the presenter the user pressed the return button.
     */
    
    this.botaoVoltarPressionado = function(){
        
        /**
         * Asks the view to go back to the initial view.
         */
        
        perfilView.navegarTelaPrincipal();
    };
    
    /**
     * Starts presenter's lifecycle.
     */
    
    this.resume = function(){
        
        /**
         * Set up user search use case and its dependencies.
         */
        
        this.repository = new UsuarioRepository();
        this.interactor = new BuscarInteractor(this.email, this.repository);
        
        /**
         * Runs use case.
         */
        
        var presenter = this;
        this.interactor.run().then(function(usuario){
            
            /**
             * Load user data into the view.
             */
            
            presenter.view.setNome(usuario.nome);
            presenter.view.setEmail(usuario.email);
            
            switch (usuario.posicao){
                case Usuario.VALORES_POSICAO.indexOf('GOL'):
                    presenter.view.setPosicao('Goleiro');
                    break;
                case Usuario.VALORES_POSICAO.indexOf('DEF'):
                    presenter.view.setPosicao('Zagueiro');
                    break;
                case Usuario.VALORES_POSICAO.indexOf('MEI'):
                    presenter.view.setPosicao('Meio-Campista');
                    break;
                case Usuario.VALORES_POSICAO.indexOf('ATA'):
                    presenter.view.setPosicao('Atacante');
                    break;
            }
        }).catch(function(error){
            
            /**
             * Shows an error message and asks the view to to go back to the initial view.
             */
            
            presenter.view.mostrarMensagem("Falha ao recuperar dados do perfil: " + error);
            presenter.view.navegarTelaInicial();
        });
    }
}
