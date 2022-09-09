let nome = document.querySelector ('#titulo')
let nomecientifico = document.querySelector('#data')
let especie = document.querySelector('#comentario')

function cadastrar(){
   let cadNoticia = localStorage.getItem('cadNoticia')

let linha = `<tr>`
    linha += `<td>${titulo.value}</td>`
    linha += `<td>${data.value}</td>`
    linha += `<td>${comentario.value}</td>`


    linha += `</tr>`

if(cadNoticia == null){
    cadNoticia = linha
}else{
    cadNoticia += linha
}

localStorage.setItem('cadNoticia' ,cadNoticia)
msgSucesso.innerHTML = '<strong>Cadastrado com Sucesso....</strong>'
setTimeout(() => {
document.location.reload(true)
    
}, 2000);

}