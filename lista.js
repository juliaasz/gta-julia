function listar(){
    cadNoticia = localStorage.getItem('cadNoticia')
    
    if(cadNoticia == null){
        msgError.innerHTML = 'Nenhum animal Cadastrado'
    return
    }
    
    const listardados = localStorage.getItem('cadNoticia')
    msglista.innerHTML = listardados
    
    
    }