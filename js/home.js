

 $(document).ready(function () {

     // 메뉴에 마우스 올렸을 때
     $('.menu > li > a').on('mouseover', function () {
         $('.tume').css({ backgroundColor: 'rgba(255,255,255,1)' });
         $('.menu > li > a').css({ color: '#000' });
         $('.tume .logo').css({ display: 'block' });
         $('.tume .but:nth-of-type(1)').css({ display: 'block' });
         $('.tume .but:nth-of-type(2)').css({ display: 'block' });
         $('header .logo').css({ display: 'none' });
         $('header .but:nth-of-type(1)').css({ display: 'none' });
         $('header .but:nth-of-type(2)').css({ display: 'none' });
     }).on('mouseout', function () {
         $('.tume').css({ backgroundColor: 'rgba(255,255,255,0)' });
         $('.menu > li > a').css({ color: '#fff' });
         $('.tume .logo').css({ display: 'none' });
         $('.tume .but:nth-of-type(1)').css({ display: 'none' });
         $('.tume .but:nth-of-type(2)').css({ display: 'none' });
         $('header .logo').css({ display: 'block' });
         $('header .but:nth-of-type(1)').css({ display: 'block' });
         $('header .but:nth-of-type(2)').css({ display: 'block' });
     });

        // 서브메뉴 내려옴
            $('.menu > li').on('mouseenter', function(){
                $('.submenu', this).css({ height: '240px', });
	            })
	            .on('mouseleave', function(){
		            $('.submenu').css({height:'0px',});
	            });

        // 서브메뉴에 마우스 올렸을 때
            $('.submenu').on('mouseenter', function () {
                 $('.tume').css({ backgroundColor: 'rgba(255,255,255,1)' });
                 $('.menu > li > a').css({ color: '#000' });
                 $('.tume .logo').css({ display: 'block' });
                 $('.tume .but:nth-of-type(1)').css({ display: 'block' });
                 $('.tume .but:nth-of-type(2)').css({ display: 'block' });
                 $('header .logo').css({ display: 'none' });
                 $('header .but:nth-of-type(1)').css({ display: 'none' });
                 $('header .but:nth-of-type(2)').css({ display: 'none' });
            })
	            .on('mouseleave', function () {
	                $('.tume').css({ backgroundColor: 'rgba(255,255,255,0)' });
	                $('.menu > li > a').css({ color: '#fff' });
	                $('.tume .logo').css({ display: 'none' });
	                $('.tume .but:nth-of-type(1)').css({ display: 'none' });
	                $('.tume .but:nth-of-type(2)').css({ display: 'none' });
	                $('header .logo').css({ display: 'block' });
	                $('header .but:nth-of-type(1)').css({ display: 'block' });
	                $('header .but:nth-of-type(2)').css({ display: 'block' });
	            });



        // 스크롤 내릴 때
            $(window).scroll(function(){

                if ($(this).scrollTop() > 500 ) {
                    $('.sebox1').animate({ opacity:'1', top:'15%', },900);
                }
            });


            $(window).scroll(function(){

                if ($(this).scrollTop() > 1100 ) {
                    $('.sente').animate({ opacity:'1', top:'10%', },900);
                }
            });



		// 버튼을 누를 시 맨 위로

        $('.topbut').click(function(){

            $('html, body').animate({ scrollTop:'0' }, 'slow');
            return false;

        });

        
        // 모바일 화면에서 메뉴누를때

        $('.ham').on('click', function () {
            $('#mobmenu').css({ display: 'block' });
            $('#backb').css({ display: 'block' });
        });
        $('.hambx').on('click', function () {
            $('#mobmenu').css({ display: 'none' });
            $('#backb').css({ display: 'none' });
        });

        $('#backb').on('click', function () {
            $('#mobmenu').css({ display: 'none' });
            $('#backb').css({ display: 'none' });
        });

        

    $(window).on('resize', function(){
    
        if ($(window).width() > 767){
        
         
            $(window).scroll(function(){
                if ($(this).scrollTop() > 100 ) {
                    $('.sebox1').css({ opacity:'1', top:'7%', }, 900);
                }
            });

            $(window).scroll(function(){
                if ($(this).scrollTop() > 100 ) {
                    $('.sente').css({ opacity:'1', top:'10%', }, 900);
                }
            });

        }

    });

        
 });

	