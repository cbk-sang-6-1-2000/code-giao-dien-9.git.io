$('.site-banner .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:1
});

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-up"><i class="icofont-simple-up"></i></button>',
    nextArrow: '<button type="button" class="slick-down"><i class="icofont-rounded-down"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  });

  $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var centerIndex = Math.floor(nextSlide + (slick.options.slidesToShow / 2));
    var $centerItem = $('.slider-item[data-slick-index="' + centerIndex + '"]');
    var slideNumber = $centerItem.find('img').data('slide');
    
    $('[data-product]').removeClass('active');
    var productElement = $('[data-product="' + slideNumber + '"]');
    productElement.addClass('active');

    $('.slider-item').removeClass('not-active');
    $('.slider-item').each(function(index, element) {
      if ($(element).data('slick-index') != centerIndex) {
        $(element).addClass('not-active');
      }
    });
  });
});

// $(document).ready(function(){
//   $('.content li span').hide();
  
//   $('.content li').click(function() {
//       if ($(this).hasClass("active")) {
//           $(this).removeClass("active").find("span").slideUp();
//           $(this).find("i").removeClass("icofont-rounded-down").addClass("icofont-simple-right");
//       } else {
//           $(".content li.active").removeClass("active").find("span").slideUp();
//           $(this).addClass("active").find("span").slideDown();
//           $(".content li i").removeClass("icofont-rounded-down").addClass("icofont-simple-right");
//           $(this).find("i").removeClass("icofont-simple-right").addClass("icofont-rounded-down");
//       }
//       return false;
// });
// });

/* venobox*/
new VenoBox({
  selector: '.my-link',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});


//color menu//

$(document).ready(function() {
  // Lấy đường dẫn của trang hiện tại
  var currentPath = window.location.pathname;

  // Tìm liên kết trong menu tương ứng với đường dẫn hiện tại và thêm lớp mới
  $('.site-menu a[href="' + currentPath + '"]').addClass('active');

  // Xóa lớp active trên liên kết được chọn trước đó và thêm lớp mới
  $('.site-menu a').click(function() {
    $('.site-menu a.active').removeClass('active');
    $(this).addClass('active');
  });
});

$(document).ready(function(){
  $('.menu-bar').click(function() {
      $( this ).parent().toggleClass('show');
  });
});