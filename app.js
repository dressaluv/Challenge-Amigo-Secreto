let listaAmigos = [];
let nomesSorteados = [];

function adicionarAmigo() {
    let amigoOriginal = document.querySelector('#amigo').value.trim();
    let amigo = amigoOriginal.charAt(0).toUpperCase() + amigoOriginal.slice(1).toLowerCase();

    if (amigo === "") {
        alert("Por favor, insira um nome!");
        return;
    }
    if (listaAmigos.includes(amigo)) {
        alert("Esse nome já foi adicionado. Se for outro amigo, por favor insira um sobrenome.");
        return;
    }

    listaAmigos.push(amigo);
    document.querySelector('#amigo').value = "";
    atualizarLista();
    atualizarBotao();
}

function atualizarLista() {
    let listaElementos = document.querySelector('#listaAmigos');
    listaElementos.innerHTML = ""; 

    listaAmigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaElementos.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos antes de sortear!");
        return;
    }
    if (nomesSorteados.length === listaAmigos.length) {
        document.getElementById("resultado").textContent = "Todos os amigos foram sorteados!";
        atualizarBotao();
        return;
    }

    let nomeSorteado;
    do { 
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        nomeSorteado = listaAmigos[indiceAleatorio];
    } while (nomesSorteados.includes(nomeSorteado));

    nomesSorteados.push(nomeSorteado);
    document.getElementById("resultado").textContent = `O nome sorteado é ${nomeSorteado}`;

    if (nomesSorteados.length === listaAmigos.length) {
        document.getElementById("resultado").textContent = `O nome sorteado é ${nomeSorteado}. Todos os amigos foram sorteados!`;
    }

    atualizarBotao();
}

function atualizarBotao() {
    let botaoSortear = document.querySelector(".button-draw");
    botaoSortear.disabled = (listaAmigos.length === 0 || nomesSorteados.length === listaAmigos.length);
}

function reiniciarSorteio() {
    nomesSorteados = [];
    listaAmigos = [];
    document.querySelector(".button-draw").disabled = false;
    document.querySelector('#amigo').value = "";
    document.getElementById("resultado").textContent = ""; 
    atualizarLista(); 
    alert("Sorteio reiniciado!");
}
