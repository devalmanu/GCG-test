
$(document).ready(function () {

   $('.slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true
   });

   $('#contactUs').click(function (event) {
      event.preventDefault();
      $('.overlay').fadeIn(297, function () {
         $('.modal').css('display', 'block').animate({ opacity: 1 }, 198);
      });
   });

   $('.modal_close, .overlay').click(function () {
      $('.modal').animate({ opacity: 0 }, 198, function () {
         $(this).css('display', 'none');
         $('.overlay').fadeOut(297);
      });
   });
});

function calculate() {
   selectOpen = document.getElementById('selectOpen').value;
   switch (selectOpen) {
      case "noOpen":
         price = 2;
         break
      case "open":
         price = 3;
         break
      default:
         price = 3;
         break
   }
   sizeWidth = document.getElementById('sizeWidth').value;
   sizeHeight = document.getElementById('sizeHeight').value;
   if (sizeWidth == "") {
      alert("Вы не указали ширину");
   } else if (sizeHeight == "") {
      alert("Вы не указали длину");
   } else {
      allSize = (parseFloat(sizeWidth) * parseFloat(sizeHeight)) / 100;
      document.getElementById('allSize').innerHTML = "Площадь равна: " + allSize + " кв. м";
      cost = allSize * price;
      document.getElementById('cost').innerHTML = "Стоимость равна: " + cost + " бел. руб.";
   }
}


