var Usuario = function(nome, posicao, email, senha){
    
    this.nome = nome;
    this.posicao = posicao;
    this.email = email;
    this.senha = senha;
    
    this.validar = function(){
        return this.nome && this.email && this.senha 
                && this.posicao !== 'undefined' && this.posicao >= 0
                && this.posicao < Usuario.VALORES_POSICAO.length;
    }
}
Usuario.VALORES_POSICAO = ['GOL', 'DEF', 'MEI', 'ATA'];