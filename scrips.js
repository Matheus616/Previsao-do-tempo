let chave ="d768a72943db91b64b1860fb1fe90442"

function colocaNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)  + "°C"
    document.querySelector(".Névoa").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"
    document.querySelector(".Umidade").innerHTML = "Umidade:" + dados.main.humidity +"%"
}


async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
        cidade + 
        "&appid=" + 
        chave + 
        "&lang=pt_br" + 
        "&units=metric")
    .then( resposta => resposta.json())

    colocaNaTela(dados)
}




function CliqueiNoBotão() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
