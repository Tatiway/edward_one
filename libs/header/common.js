  $(document).ready(function(){
     

      // header_toggle

  $(".header__sandwich ").click(function() {
          
          $(".header__sandwich").toggleClass("active");

          $(this).toggleClass("on");

          $(".header__toggle-menu").slideToggle();

        });


    $( window ).resize(function() {

        if($(window).width() > 992){

           $(".header__sandwich").removeClass("active");

          $(".header__toggle-menu").fadeOut("fast");

        };

      });
//////////////////////////////////////////////////////////////////////////


      // header_toggle_fide_and_show
          var $menu = $(".header");

           $(window).scroll( function(){

            if ( $(this).scrollTop() > 850 ){

                $menu.fadeIn('fast');

            } else if( $(this).scrollTop() <= 850 ) {
              
                $menu.fadeOut('fast');
            }
        });

        
	 });