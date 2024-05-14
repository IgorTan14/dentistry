$(function(){
   $('.benefits__more-open').on('click', function(){
    $('.benefits__inner-bottom').addClass('active-grid');
    $('.benefits__more-open').addClass('none');
    $('.benefits__more-close').addClass('active-block');
   })

   $('.benefits__more-close').on('click', function(){
    $('.benefits__inner-bottom').removeClass('active-grid');
    $('.benefits__more-close').removeClass('active-block');
    $('.benefits__more-open').removeClass('none');
   })

   

   $('.gallery__inner').slick({
     arrows: true,
     dots: false,
     nextArrow: '<button type="button" class="slick-next slick-arr"><img src="images/icons/arr-right.svg" alt="next"></button>',
     prevArrow: '<button type="button" class="slick-prev slick-arr"><img src="images/icons/arr-left.svg" alt="prev"></button>',
     slidesToShow: 1,
     slidesToScroll: 1,
     Infinite: true,
     responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
                 }
        }
     ],
});

$('.consultation__inner').slick({
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  Infinite: true,
});

$('.team__slider').slick({
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  Infinite: true,
  responsive: [
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
             }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
             }
    }
 ],
});

$('.team__slider-info-slider-inner').slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  Infinite: true,
  nextArrow: '<button type="button" class="team__slider-next slick-arr"><img src="images/icons/arr-right.svg" alt="next"></button>',
  prevArrow: '<button type="button" class="team__slider-prev slick-arr"><img src="images/icons/arr-left.svg" alt="prev"></button>',
});

$('.revies__inner').slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  Infinite: true,
  nextArrow: '<button type="button" class="revies-next slick-arr"><img src="images/icons/arr-right.svg" alt="next"></button>',
  prevArrow: '<button type="button" class="revies-prev slick-arr"><img src="images/icons/arr-left.svg" alt="prev"></button>',
});


$('.header__burger').on('click', function(){ 
  $('.burger__content').toggleClass('burger__content--active');

  // $('.product-list__filter ').toggleClass('hidden');
  // $('.main').toggleClass('off');
  $('.header__burger').toggleClass('header__burger--active');
});



 
  $('.service__more-open').on('click', function(){
    $('.service__item-6').addClass('on');
    $('.service__item-7').addClass('on');
    $('.service__item-8').addClass('on');
    $('.service__item-9').addClass('on');
    $('.service__item-10').addClass('on');
    $('.service__more-open').addClass('none');
    $('.service__more-close').addClass('active-block');
   })

   $('.service__more-close').on('click', function(){
    $('.service__item-6').removeClass('on');
    $('.service__item-7').removeClass('on');
    $('.service__item-8').removeClass('on');
    $('.service__item-9').removeClass('on');
    $('.service__item-10').removeClass('on');

    $('.benefits__inner-bottom').removeClass('active-grid');
    $('.service__more-close').removeClass('active-block');
    $('.service__more-open').removeClass('none');
   })
});



let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
