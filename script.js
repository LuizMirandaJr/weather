
let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function mostrarDados(dados) {

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".sensacao").innerHTML = Math.floor(dados.main.feels_like) + "ºC"
    document.querySelector(".min").innerHTML = "Min:</br>" + Math.floor(dados.main.temp_min) + "ºC"
    document.querySelector(".clima").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade:</br>" + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".max").innerHTML = "Max:</br>" + Math.floor(dados.main.temp_max) + "ºC"

    console.log(dados)
}


async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric")

        .then(resposta => resposta.json())

    mostrarDados(dados)

}

function buscar() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

