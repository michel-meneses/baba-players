
/**
 * 
 * @param {PerfilView} perfilView Tela de perfil de usuário
 * @param {String} email Email do usuário dono do perfil 
 * @returns {PerfilPresenter} Apresentador da tela de perfil de usuário
 */

function PerfilPresenter(perfilView, email){
    
    /**
     * Inicializa view.
     */
    
    this.view = perfilView;
    
    /**
     * Armazena email.
     */
    
    this.email = email;
    
    /**
     * Avisa o apresentador que o usuário pressionou o botão de voltar.
     */
    
    this.botaoVoltarPressionado = function(){
        
        /**
         * Solicita à tela que navegue para a tela inicial.
         */
        
        perfilView.navegarTelaPrincipal();
    };
    
    /**
     * Inicia ciclo de vida do apresentador.
     */
    
    this.resume = function(){
        
        /**
         * Inicializa caso de uso de busca de usuário e suas dependências.
         */
        
        this.repository = new UsuarioRepository();
        this.interactor = new BuscarInteractor(this.email, this.repository);
        
        /**
         * Executa caso de uso.
         */
        
        var presenter = this;
        this.interactor.run().then(function(usuario){
            
            /**
             * Carrega na tela os dados do usuário encontrado.
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
             * Exibe mensagem de erro e solicita à tela que navegue
             * para a tela inicial.
             */
            
            presenter.view.mostrarMensagem("Falha ao recuperar dados do perfil: " + error);
            presenter.view.navegarTelaInicial();
        });
    }
}