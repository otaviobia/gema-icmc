window.onscroll = function() { stickyHeader() };

var header = document.querySelector(".header");

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

// Get the modal
var modal = document.querySelector(".modal-olimpiada");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

var body = document.querySelector("body");

// When the user clicks on the button, open the modal
function abrirModal() {
  modal.style.display = "block";
  body.classList.add("stop-scrolling");
  header.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  body.classList.remove("stop-scrolling");
  header.style.display = "flex";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.classList.remove("stop-scrolling");
    header.style.display = "flex";
  }
}