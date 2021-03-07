// JavaScript, Texto
const texto = document.querySelector('.text');
texto.innerHTML = texto.textContent.replace(/\S/g, "<span>$&</span>");

const elemento = document.querySelectorAll('span');
for(let i = 0; i < elemento.length; i++) {
    elemento[i].style.animationDelay = i * 0.05 + 's';
}