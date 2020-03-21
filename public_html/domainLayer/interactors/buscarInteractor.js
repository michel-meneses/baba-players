
/**
 * 
 * @param {type} email Email do usuário buscado
 * @param {type} usuarioRepository Implementação de repositório de usuário
 * @returns {BuscarInteractor} Caso de uso referente à busca de usuário
 */

var BuscarInteractor = function (email, usuarioRepository){    
    
    /**
     * Único método do caso de uso.
     * @returns {Promise} resultado do caso de uso
     */
    
    this.run = function(){
        return new Promise(function(resolve, reject){
           
            /**
             * Verifica se o email é válido.
             */
            
            if(!email){
                reject("Email inválido!");
            }
            
            /**
             * Busca usuário no repositório.
             */
            
            usuarioRepository.buscar(email).then(function(usuario){
                resolve(usuario);
            }).catch (function(error){
                reject(error);
            });
        });
    };
};