var CadastrarInteractor = function (usuario, usuarioRepository){    
    
    /**
     * Only method of this repository.
     * @returns {Promise} result of this use case
     */
    
    this.run = function(){
        return new Promise(function(resolve, reject){
           
            /**
             * Check if the user is valid.
             */
            
            if(!usuario || !usuario.validar()){
                reject("Usuário inválido!");
            }
            
            /**
             * Insert user into the repository.
             */
            
            usuarioRepository.criar(usuario).then(function(fulfilled){
                resolve();
            }).catch (function(error){
                reject(error);
            });
        });
    };
};
