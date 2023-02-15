function reiniciar() {
    let reiniciar = prompt ("Deseja reiniciar o site? \n 1-Sim \n 2-Não")
    if(reiniciar == "1"){
    location.reload() ;
    }
}
let nomeCliente = "";
function confirNome() {
    nomeCliente = document.getElementById("ClienteDigita").value;
    document.getElementById("nomeCliente").innerHTML = "Olá " + nomeCliente + ", esses são os filmes disponível! ";
}
function confirmar() {
    let mensagem;
    let horarios;
    //seleção de horario
    switch (true) {
        case document.getElementById("horario1").checked:
            horarios = "13:00hr"
            document.getElementById("horario1").innerHTML=horarios;
            break;
        case document.getElementById("horario2").checked:
            horarios = "14:30hr"
            document.getElementById("horario2").innerHTML=horarios;
            break;
        case document.getElementById("horario3").checked:
            horarios = "15:50hr"
            document.getElementById("horario3").innerHTML=horarios;
            break;
        case document.getElementById("horario4").checked:
            horarios = "16:00hr"
            document.getElementById("horario4").innerHTML=horarios;
            break;
        case document.getElementById("horario5").checked:
            horarios = "17:20hr"
            document.getElementById("horario5").innerHTML=horarios;
            break;
        case document.getElementById("horario6").checked:
            horarios = "18:00hr"
            document.getElementById("horario6").innerHTML=horarios;
            break;
    
        default:
            horarios = "nenhum horario selecionado."
            break;
    }
    //seleção de filmes
    if (document.getElementById("filme1").checked) {
        mensagem = "Pantera Negra: Wakanda Para Sempre";
    } else if (document.getElementById("filme2").checked) {
        mensagem = "Avatar: O Caminho da Água";
    } else if (document.getElementById("filme3").checked) {
        mensagem = "Interestelar";
    } else if (document.getElementById("filme4").checked) {
        mensagem = "Moonfall - Ameaça Lunar";
    } else if (document.getElementById("filme5").checked) {
        mensagem = "Avengers: Secret Wars";
    } else {
        mensagem = "nenhum filme."
    }
    document.getElementById("resultado").innerHTML = nomeCliente + ", você selecionou " + mensagem + ", para o seguinte horário: " + horarios;
}