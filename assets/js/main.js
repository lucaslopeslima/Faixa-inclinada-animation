const words = ['Palavra 1', 'Palavra 2', 'Palavra 3', 'Palavra 4', 'Palavra 5', 'Palavra 6', 'Palavra 7', 'Palavra 8', 'Palavra 9', 'Palavra 10', 'Palavra 11', 'Palavra 12','Palavra 13', 'Palavra 14', 'Palavra 15', 'Palavra 16', 'Palavra 17', 'Palavra 18'];
const carousel = document.querySelector('.carousel');
let itemCounter = 0
words.forEach(word => {
    const span = document.createElement('span');
    span.className = 'carousel-item';
    span.textContent = word;
    carousel.appendChild(span);
    itemCounter++
    console.log(itemCounter)

});

// Código para o carrossel infinito com sistema de fila
setInterval(() => {
    const firstItem = carousel.firstElementChild;
    firstItem.style.transition = "none";
    firstItem.style.transform = "translateX(-100%)";

    setTimeout(() => {
        firstItem.style.transition = "transform 0.2s ease";
        firstItem.style.transform = "translateX(10px)";
        carousel.appendChild(firstItem);
    }, 1);
}, 1000); // Tempo em milissegundos




