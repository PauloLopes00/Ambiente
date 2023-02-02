
function Verificar(){
    var cidade = String(document.querySelector(`input#itext`).value)
    var res = document.querySelector(`h1#res`)
    res.innerHTML +=''
    
    if(cidade == 0){
        window.alert('Digite Alguna Cidade Para Continuar')
    }else{
        res.innerHTML = `Tempo em ${cidade}`
    }
}

    
