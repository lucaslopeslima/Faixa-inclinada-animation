const words = ['Palavra 1', 'Palavra 2', 'Palavra 3', 'Palavra 4', 'Palavra 5', 'Palavra 6', 'Palavra 7', 'Palavra 8', 'Palavra 9', 'Palavra 10', 'Palavra 11', 'Palavra 12','Palavra 13', 'Palavra 14', 'Palavra 15', 'Palavra 16', 'Palavra 17', 'Palavra 18']

const carousel = document.querySelector('.carousel')

words.forEach(word => {
    const span = document.createElement('span')
    span.className = 'carousel-item'
    span.textContent = word
    carousel.appendChild(span)

})

$(document).ready(function(){
    $('.carousel-slick').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      //waitForAnimate: false,
      //accessibility: false,
      arrows: false,
      cssEase: 'linear',
      //easing: 'linear',
      //draggable: true,
      //pauseOnHover: true,

      
    });
  });
  



