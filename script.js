window.alert('Digite Algo Para Continuar')
function acessar(){
    let cidade = String(document.querySelector(`ìnput#itext`).value)
    let res = document.querySelector(`h1#res`)

    if(cidade.value == 0){
        window.alert('Digite Algo Para Continuar')
    }else{
        res.innerHTML = `Tempo em ${cidade}`
    }
    
}