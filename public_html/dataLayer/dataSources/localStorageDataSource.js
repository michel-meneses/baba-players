
/**
 * 
 * @returns {LocalStorageDataSource} Local data source
 */

var LocalStorageDataSource = function(){
    
    /**
     * Persistenly stores a given value associated to an access key.
     * 
     * @param {String} dado Data to be stored
     * @param {String} chave Key assossiated to the data
     * @returns {Boolean} Was the data successfuly stored?
     */
    
    this.armazenar = function(dado, chave){        
        
        /**
         * Check if the client has the required store resource.
         */
        
        if(typeof(Storage) === "undefined")
            return false;
        
        /**
         * Save data.
         */
        
        localStorage.setItem(chave, dado);
        return true;
    };
    
    /**
     * Search data based on its access key.
     * 
     * @param {String} chave Key assossiated to the value
     * @returns {String} Searched data
     */
    
    this.buscar = function(chave){        
        
        /**
         * Check if the client has the required store resource.
         */
        
        if(typeof(Storage) === "undefined")
            return false;
        
        /**
         * Return data.
         */
        
        return localStorage.getItem(chave);
    };
}
