
function acessar(){
    let cidade = String(document.querySelector(`ìnput#itext`)).value
    let res = document.querySelector(`h1#res`)
    res.innerHTML = `Tempo em ${cidade}`
    //if(cidade == 0){
        //window.alert('Digite Algo Para Continuar')
    //}else{
        //res.innerHTML = `Tempo em ${cidade}`
    //}
    
}