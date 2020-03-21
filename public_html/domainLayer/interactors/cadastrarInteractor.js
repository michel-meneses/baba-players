var CadastrarInteractor = function (usuario, usuarioRepository){    
    
    /**
     * Único método do caso de uso.
     * @returns {Promise} resultado do caso de uso
     */
    
    this.run = function(){
        return new Promise(function(resolve, reject){
           
            /**
             * Verifica se o usuário é válido.
             */
            
            if(!usuario || !usuario.validar()){
                reject("Usuário inválido!");
            }
            
            /**
             * Insere usuário no repositório.
             */
            
            usuarioRepository.criar(usuario).then(function(fulfilled){
                resolve();
            }).catch (function(error){
                reject(error);
            });
        });
    };
};