
/**
 * 
 * @param {type} email User's email
 * @param {type} usuarioRepository Implementation of a user repository
 * @returns {BuscarInteractor} Use case related to user search
 */

var BuscarInteractor = function (email, usuarioRepository){    
    
    /**
     * Only method of this use case.
     * @returns {Promise} use case result
     */
    
    this.run = function(){
        return new Promise(function(resolve, reject){
           
            /**
             * Check if the email is valid.
             */
            
            if(!email){
                reject("Email inválido!");
            }
            
            /**
             * Use the repository to search for the user.
             */
            
            usuarioRepository.buscar(email).then(function(usuario){
                resolve(usuario);
            }).catch (function(error){
                reject(error);
            });
        });
    };
};
