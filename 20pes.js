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
const images = document.querySelectorAll('.image-container20');
const container = document.querySelector('.ContainersUsados');

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.add('active');
            if (img.querySelector('img').id === 'img3') {
                container.style.height = '810px';  // Ajuste a altura conforme necessário
            } else {
                container.style.height = '565px';
            }
        } else {
            img.classList.remove('active');
        }
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function lastImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Mostrar a primeira imagem ao carregar a página
showImage(currentImageIndex);




//função para fazer a box "containers semi-novos" funcionar  
// Containers Semi-Novos
let currentImageIndexSemiNovo = 0;
const imagesSemiNovo = document.querySelectorAll('.imageContainer-SemiNovo');
const containerSemiNovo = document.querySelector('.ContainersSemiNovos');

function showImageSemiNovo(index) {
    imagesSemiNovo.forEach((img, i) => {
        if (i === index) {
            img.classList.add('ativa');
            if (img.querySelector('img').id === 'img3') {
                containerSemiNovo.style.height = '810px';  // Ajuste a altura conforme necessário
            } else {
                containerSemiNovo.style.height = '565px';
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