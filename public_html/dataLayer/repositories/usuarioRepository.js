
/**
 * 
 * @returns {UsuarioRepository} Repositório de usuário
 */

var UsuarioRepository = function(){
    
    /**
     * Insere novo usuário no repositório.
     * 
     * @param {Usuário} usuario Usuário a ser inserido
     * @returns {Promise} Resultado da operação
     */
    
    this.criar = function(usuario){
        return new Promise(function(resolve, reject){
            
            /**
             * Converte usuário para json.
             */
            
            var jsonUsuario = JSON.stringify(usuario);
            
            /**
             * Define chave a ser associada ao usuário.
             */
            
            var chave = "us" + usuario.email;
            
            /**
             * Instancia fonte de dados e insere usuário.
             */
            
            var dataSource = new LocalStorageDataSource();
            var sucesso = dataSource.armazenar(jsonUsuario, chave);
            
            /**
             * Retorna resposta com base no sucesso.
             */
            
            if(sucesso)
                resolve();
            else
                reject();
        });
    }
    
    /**
     * Busca usuário no repositório.
     * 
     * @param {String} email Email do usuário buscado
     * @returns {Promise} Resultado da operação
     */
    
    this.buscar = function(email){
        return new Promise(function(resolve, reject){
            
            /**
             * Define chave associada ao usuário.
             */
            
            var chave = "us" + email;
            
            /**
             * Instancia fonte de dados e busca usuário.
             */
            
            var dataSource = new LocalStorageDataSource();
            var usuarioJson = dataSource.buscar(chave);
            
            /**
             * Caso o usuário tenha sido encontrado, retorna-o.
             */
            
            if(usuarioJson)
                resolve(JSON.parse(usuarioJson));
            else
                reject();
        });
    }
}