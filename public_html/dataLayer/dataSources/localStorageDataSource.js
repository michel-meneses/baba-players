
/**
 * 
 * @returns {LocalStorageDataSource} Fonte de dados local
 */

var LocalStorageDataSource = function(){
    
    /**
     * Armazena persistentemente um determinado valor e o associa
     * a uma chave de acesso.
     * 
     * @param {String} dado Dado a ser armazenado
     * @param {String} chave Chave associada ao dado
     * @returns {Boolean} Armazenamento realizado com sucesso?
     */
    
    this.armazenar = function(dado, chave){        
        
        /**
         * Verifica se o cliente possui o recurso de armazenação em questão.
         */
        
        if(typeof(Storage) === "undefined")
            return false;
        
        /**
         * Armazena dado.
         */
        
        localStorage.setItem(chave, dado);
        return true;
    };
    
    /**
     * Busca um determinado valor com base na sua chave de acesso.
     * 
     * @param {String} chave Chave associada ao dado
     * @returns {String} Dado buscado
     */
    
    this.buscar = function(chave){        
        
        /**
         * Verifica se o cliente possui o recurso de armazenação em questão.
         */
        
        if(typeof(Storage) === "undefined")
            return false;
        
        /**
         * Retorna dado.
         */
        
        return localStorage.getItem(chave);
    };
}