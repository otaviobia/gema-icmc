function addNews(imagem, texto) {
  const noticiaItem = document.createElement("div");
  noticiaItem.classList.add("noticia-item");

  const noticiaImage = document.createElement("img");
  noticiaImage.src = imagem;
  noticiaImage.alt = texto;

  const noticiaTexto = document.createElement("p");
  noticiaTexto.textContent = texto;

  noticiaItem.appendChild(noticiaImage);
  noticiaItem.appendChild(noticiaTexto);

  const noticiaBox = document.querySelector(".noticias-box");
  noticiaBox.appendChild(noticiaItem);
}

function addCampeonato(nome, nomeCompleto, imagem, medOuro, medPrata, medBronze, anos) {
  // Criar div principal
  const premiacaoItem = document.createElement("div");
  premiacaoItem.classList.add("premiacao-item");

  // Adicionar imagem da olimpíada
  const premiacaoImagem = document.createElement("img");
  premiacaoImagem.src = imagem;
  premiacaoImagem.alt = nomeCompleto;
  premiacaoItem.appendChild(premiacaoImagem);

  // Criar div das medalhas
  const medalhas = document.createElement("div");
  medalhas.classList.add("medalhas");

  // Criar medalha de ouro
  const medalhaOuro = document.createElement("span");
  medalhaOuro.innerHTML = "<svg fill='#C39F00' fill-rule='evenodd' width='20px' height='20px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z' /></svg>";
  const medalhaOuroQtd = document.createElement("p");
  medalhaOuroQtd.textContent = medOuro;
  medalhaOuro.appendChild(medalhaOuroQtd);
  medalhas.appendChild(medalhaOuro);

  // Criar medalha de prata
  const medalhaPrata = document.createElement("span");
  medalhaPrata.innerHTML = "<svg fill='#8A8A8A' fill-rule='evenodd' width='20px' height='20px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z' /></svg>";
  const medalhaPrataQtd = document.createElement("p");
  medalhaPrataQtd.textContent = medPrata;
  medalhaPrata.appendChild(medalhaPrataQtd);
  medalhas.appendChild(medalhaPrata);

  // Criar medalha de bronze
  const medalhaBronze = document.createElement("span");
  medalhaBronze.innerHTML = "<svg fill='#D77025' fill-rule='evenodd' width='20px' height='20px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z' /></svg>";
  const medalhaBronzeQtd = document.createElement("p");
  medalhaBronzeQtd.textContent = medBronze;
  medalhaBronze.appendChild(medalhaBronzeQtd);
  medalhas.appendChild(medalhaBronze);

  // Adicionar div das medalhas
  premiacaoItem.appendChild(medalhas);

  // Criar e adicionar nome da olimpíada
  const premiacaoTexto = document.createElement("p");
  premiacaoTexto.textContent = nomeCompleto + " (" + nome + ")";
  premiacaoItem.appendChild(premiacaoTexto);

  // Criar e adicionar botão de veja mais
  const botao = document.createElement("button");
  botao.type = "button";
  botao.classList.add("btn", "abrir-modal");
  botao.textContent = "Ver Mais";
  botao.onclick = function(){abrirModal(anos, imagem, nomeCompleto + " (" + nome + ")")};
  premiacaoItem.appendChild(botao);

  // Adicionar ao DOM
  const premiacoesBox = document.querySelector(".premiacoes-box");
  premiacoesBox.appendChild(premiacaoItem);
}

var data;

async function getData() {
  const response = await fetch("./assets/data/gema-data.json");
  data = await response.json();

  for (i = 0; i < data["Noticias"].length; i++) {
    addNews(data["Noticias"][i]["imagem"], data["Noticias"][i]["titulo"]);
  }

  for (i = 0; i < data["campeonatos"].length; i++) {
    let it = data["campeonatos"][i];
    addCampeonato(it["nome"], it["nomeCompleto"], it["imagem"], it["medalhas"]["ouro"]["total"], it["medalhas"]["prata"]["total"], it["medalhas"]["bronze"]["total"], i);
  }
}
getData();

window.onscroll = function() { stickyHeader() };

var header = document.querySelector("header");

var sticky = header.offsetTop;

function stickyHeader() {
  if (window.scrollY > sticky)
  {
    header.classList.add("sticky");
  }
  else 
  {
    header.classList.remove("sticky");
  }
}

var sobre = document.querySelector(".sobre");

function mostrarSobre() {
  sobre.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}

var modal = document.querySelector(".modal-olimpiada");
var botaoFecharModal = document.querySelector(".close");

var body = document.querySelector("body");

function abrirModal(anos, imagem, nome) {
  const modalBase = document.querySelector(".modal-base");
  modalBase.innerHTML = '';
  document.querySelector(".foto-olimpiada").src = imagem;
  document.querySelector(".texto-olimpiada").src = nome;

  for (i = Object.keys(data["campeonatos"][anos]["anos"]).length-1; i >= 0; i--) {
    const ano = document.createElement("h2");
    const valorAno = Object.keys(data["campeonatos"][anos]["anos"])[i];
    ano.textContent = valorAno;

    const modalItem = document.createElement("div");
    modalItem.classList.add("modal-item");
    
    modalItem.appendChild(ano);
    const listaPremiados = document.createElement("ol");
    for(j = 0; j < Object.keys(data["campeonatos"][anos]["anos"][valorAno]).length; j++) {
      const itemPremiado = document.createElement("li");
      var corMedalha;
      switch (data["campeonatos"][anos]["anos"][valorAno][j]["medalha"]) {
        case "ouro":
          corMedalha = "#C39F00";
          break;
        case "prata":
          corMedalha = "#8A8A8A";
          break;
        case "bronze":
          corMedalha = "#D77025";
          break;
      }
      itemPremiado.innerHTML = "<p>"+data["campeonatos"][anos]["anos"][valorAno][j]["posicao"]+"</p><svg fill='"+ corMedalha +"' fill-rule='evenodd' width='20px' height='20px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z'></path></svg><p>"+data["campeonatos"][anos]["anos"][valorAno][j]["nome"]+"</p>"
      listaPremiados.appendChild(itemPremiado);
    }
    modalItem.appendChild(listaPremiados);
    modalBase.appendChild(modalItem);

    if (i != 0) {
      modalBase.innerHTML += "<hr>";
    }
  }
  modal.style.display = "block";
  body.classList.add("bloquear-scroll");
  header.style.display = "none";
}

botaoFecharModal.onclick = function() {
  modal.style.display = "none";
  body.classList.remove("bloquear-scroll");
  header.style.display = "flex";
}

// Quando usuário clicar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.classList.remove("bloquear-scroll");
    header.style.display = "flex";
  }
}