  $(document).ready(function(){
     

      // header_toggle

  $(".header__sandwich").click(function() {


          // меняем сендвич на крестик
          $(".header__sandwich").toggleClass("active");

          // показываем меню мобильной версии
          $(".header__nav, .header__btn, .header__address").toggleClass('header--hide');

        });


//////////////////////////////////////////////////////////////////////////


      //подключаем появление на втором экране
      
        //   var $menu = $(".header");

        //    $(window).scroll( function(){

        //     if ( $(this).scrollTop() > 850 ){

        //         $menu.fadeIn('fast');

        //     } else if( $(this).scrollTop() <= 850 ) {
              
        //         $menu.fadeOut('fast');
        //     }
        // });

        
	 });