const   btn = document.querySelector('.header__nav-burger'),
        menu =document.querySelector('.menu');

function showAndHideMenu() {
    menu.classList.toggle('active');
    btn.classList.toggle('active');
}

btn.addEventListener('click', () => {
    showAndHideMenu();
});
$(document).ready(function(){
    $('.popular__burgers_wrapper').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/popular/arrow-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/popular/arrow-right.png" alt=""></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 1000
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 1000
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 1000
              }
            }
          ]
      });
  });
  $(document).ready(function(){
    $('.feedback-wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/feedback/ArrowLeft.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/feedback/ArrowRight.png" alt=""></button>'
      });
  });
