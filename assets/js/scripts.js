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

var modal = document.querySelector(".modal-olimpiada");
var botaoFecharModal = document.querySelector(".close");

var body = document.querySelector("body");

function abrirModal() {
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