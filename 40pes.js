//função para fazer o "especificações" da navbar funcionar
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Fecha o menu suspenso se o usuário clicar fora dele
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//função para fazer a box "containers usados" funcionar  
let currentImage = 0;
const images = document.querySelectorAll('.ContainersUsados img');
const captions = document.querySelectorAll('.ContainersUsados figcaption');

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
        captions[i].style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage(currentImage); //função para mostrar a imagem que vem a seguir 
}

function lastImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage); //função para mostrar a imagem anterior da que esta sendo mostrada na tela
}
// Exibe a primeira imagem ao carregar a página
showImage(currentImage);


//função para fazer a box "containers semi-novos" funcionar  
let ImagemAtual = 0;
const imagens = document.querySelectorAll('.ContainersSemiNovos img');
const descricao = document.querySelectorAll('.ContainersSemiNovos figcaption');

function mostrarImagem(index) {
    imagens.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
        descricao[i].style.display = i === index ? 'block' : 'none';
    });
}

function ProximaImagem() {
    ImagemAtual = (ImagemAtual + 1) % imagens.length;
    mostrarImagem(ImagemAtual); //função para mostrar a imagem que vem a seguir 
}

function UltimaImagem() {
  ImagemAtual = (ImagemAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem(ImagemAtual); //função para mostrar a imagem anterior da que esta sendo mostrada na tela
}
// Exibe a primeira imagem ao carregar a página
mostrarImagem(ImagemAtual);