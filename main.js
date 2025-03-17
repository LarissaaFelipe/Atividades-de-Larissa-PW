function OK(){
    document.getElementById('d1').style.color = "pink";
}

function carregar(){
    alert("Sua conta bancária foi raqueada. Clique em ok para poder recuperar")
}


function passar(){
    document.getElementById('d2').style.color = "red";
}


function sair(){
    document.getElementById('d3').style.color = "blue";
}

function focar() {
    document.getElementById('campo').style.backgroundColor = "yellow"; 
}


function perder() {
    document.getElementById('campo').style.backgroundColor = ""; 
}


function mudarValor() {
    const valorSelecionado = document.getElementById('opcao').value;
    alert("Você selecionou a opção: " + valorSelecionado); 
}

function selecionarTexto() {
    const campoTexto = document.getElementById('campoTexto');
    campoTexto.style.color = "green"; 
}


function enviarFormulario() {
    alert("Formulário enviado com sucesso!");
}


function keyDown() {
    document.getElementById('resultado').innerHTML = "KeyDown" 
}

function keyPress() {
    document.getElementById('resultado').innerHTML = "KeyPress" 
}

function keyUp() {
    document.getElementById('resultado').innerHTML = "KeyUp" 
}