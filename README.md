Original: https://www.instagram.com/p/C4kukrZvpx_/
Original demo: https://john-react.wethemez.com/Home7


# Documentação Animação Diagonal

A Animação é construída usando um carousel infinito de palavras e uma animação.
## Stack
- HTML
- CSS (Sass)
- JavaScript
- Slick Carousel Lib

## Arquitetura

Para chegar ao efeito separei em 3 partes:
1. O que vem antes da linha diagonal
2. A linha diagonal
3. O que vem depois da linha

Construí dessa forma para facilitar o entendimento, visto que é preciso pequenos ajustes nos conteúdos imediatamente anterior e posterior à linha diagonal.

As palavras são inseridas dinamicamente no HTML pelo arquivo `main.js` através de uma função construtora.

## Setup

- HTML:
Importe os arquivos referentes ao JQuery e da biblioteca Slick, no `<head>` do HTML:
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
```

Ajuste as tags html[...]:


- CSS:
Importe o arquivo `_diagonalLine.scss` no seu arquivo `scss` principal.

- JS:
Adicione o arquivo `diagonalLine.js` à sua parta de arquivos JavaScript, e importe o mesmo no seu HTML. 


