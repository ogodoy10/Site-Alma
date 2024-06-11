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
let currentImageIndex = 0;
const images = document.querySelectorAll('.image-container40'); //Variável para armazenar as imagens 
const container = document.querySelector('.ContainersUsados'); //Variável para armazenar toda a div dos containers usados
const seta = document.querySelector('.seta-container'); //Variável para armazenar as setas que ficam ao lado das imgs

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index){
            img.classList.add('active');
            if (img.querySelector('img').id === 'img3'){
                container.style.height = '815px';  //Ajusta a altura do container para a 3º imagem, pois ela esta na vertical
                seta.style.transform = 'translateY(-2000%)';  //Centraliza as setas para a 3º imagem
            } else {
                container.style.height = '565px'; //Reajusta a altura do container para as outras imagens, após a 3º imagem passar
                seta.style.transform = 'translateY(-1400%)';  //Reajusta as setas para sua centralização padrão após a 3º imagem passar
            }
        } else {
            img.classList.remove('active');
        }
    });
}

function nextImage(){ //função para passar para a próxima img
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function lastImage(){ //função para voltar para a img anterior 
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Mostrar a primeira imagem ao carregar a página
showImage(currentImageIndex);


//função para fazer a box "containers semi-novos" funcionar  
let currentImageIndexSemiNovo = 0;
const imagesSemiNovo = document.querySelectorAll('.imageContainer-SemiNovo'); //Variável para armazenar as imagens
const containerSemiNovo = document.querySelector('.ContainersSemiNovos'); //Variável para armazenar toda a div dos containers SemiNovos
const setaSemiNovo = document.querySelector('.seta-containerSemiNovo'); //Variável para armazenar as setas que ficam ao lado das imgs

function showImageSemiNovo(index) {
    imagesSemiNovo.forEach((img, i) => {
        if (i === index) {
            img.classList.add('ativa');
            if (img.querySelector('img').id === 'img3') {
                containerSemiNovo.style.height = '815px';  // Ajuste a altura conforme necessário
                setaSemiNovo.style.transform = 'translateY(-2000%)';
            } else {
                containerSemiNovo.style.height = '565px';
                setaSemiNovo.style.transform = 'translateY(-1400%)';
            }
        } else {
            img.classList.remove('ativa');
        }
    });
}

function nextImageSemiNovo() {
    currentImageIndexSemiNovo = (currentImageIndexSemiNovo + 1) % imagesSemiNovo.length;
    showImageSemiNovo(currentImageIndexSemiNovo);
}

function lastImageSemiNovo() {
    currentImageIndexSemiNovo = (currentImageIndexSemiNovo - 1 + imagesSemiNovo.length) % imagesSemiNovo.length;
    showImageSemiNovo(currentImageIndexSemiNovo);
}

// Mostrar a primeira imagem ao carregar a página
showImageSemiNovo(currentImageIndexSemiNovo);