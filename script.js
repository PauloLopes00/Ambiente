let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarnatela(dados){
    var ress = document.querySelector(`h2#res`)
    var temp = document.querySelector(`p.temp`)
    var descricao = document.querySelector(`p.descricao`)
    var icon = document.querySelector(`img.icone`)
    var umidade = document.querySelector(`p.umidade`)

    umidade.innerHTML = `Umidade: ${dados.main.humidity}%`
    icon.src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png" 
    temp.innerHTML = `${Math.round(dados.main.temp)} °C`
    ress.innerHTML = `Tempo em ${dados.name}`
    descricao.innerHTML = ` ${dados.weather[0].description}`

    console.log(dados)
    
    
}


async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric").then(resposta => resposta.json())

    
    colocarnatela(dados)
}



function Verificar(){
    var cidade = String(document.querySelector(`input#itext`).value)
    if(cidade == 0){
        window.alert('Digite Alguna Cidade Para Continuar')
    }else{
        buscarCidade(cidade)
    }
    
}

    
