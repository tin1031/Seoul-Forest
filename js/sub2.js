
$(document).ready(function () {

        // ��ư�� ���� �� �� ����

        $('.topbut').click(function(){

            $('html, body').animate({ scrollTop:'0' }, 'slow');
            return false;

        });


        $('.menu > li').on('mouseenter', function(){
		        $('.submenu', this).css({height:'240px',});
	        })
	        .on('mouseleave', function(){
		        $('.submenu').css({height:'0px',});
	        });
    

        // �ϴ� ���� �ִϸ��̼�
        $('#topo p').animate({top:'50%', opacity:'1'},700);

        $('#main1 > p').animate({top:'20%', opacity:'1'},900);

        $('#main1 .yeon').animate({ top: '0', opacity: '1' }, 1100);
        
        // ����� ȭ�鿡�� �޴�������

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




});
