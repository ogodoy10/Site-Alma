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

//função para fazer a imagem do "alguns de nossos trabalhos" funcionar  
let currentImage = 0;
const images = document.querySelectorAll('.trabalhos img');
const captions = document.querySelectorAll('.trabalhos figcaption');

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


//serve para fazer a parte de perguntas frequentes, mudar o sinal e mostrar as respostas
var faqs = document.getElementsByClassName("faq-question"), i; //declaro a variavel faqs e coloco os elementos HTML que tem a classe "faq-question" e o contador i

for (i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", function () { //declara uma função quando ocorrer o clique pergunta
        this.classList.toggle("active"); //adc ou remove a classe active do elemento, usando o this para se referir ao elemento clicado
        var icon = this.querySelector('.icon'); //procura dentro do elemento clicado por uma classe icon
        icon.textContent = icon.textContent === '+' ? '-' : '+'; //atualiza o conteúdo desse elemento para ficar alternando entre + e -
        var resposta = this.nextElementSibling; //procura o próximo DOM e armazena a resposta dentro da variavel
        if (resposta.style.display === "block") { //alterna entre block e none para mostrar as respostas na tela
            resposta.style.display = "none";
        } else {
            resposta.style.display = "block";
        }
    });
}