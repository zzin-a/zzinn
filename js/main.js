$(document).ready(function() {
	$('#fullpage').fullpage({
        scrollingSpeed: 1000,
        onLeave: function(origin, destination, direction){
            if(destination.index >= 1) {
                $('#header .logo').fadeIn();
            }else {
                $('#header').removeClass('on');
                $('#header .logo').fadeOut();
            }
        },
        afterLoad: function(origin, destination, direction){
            if(destination.index >= 1) {
                $('#header').addClass('on');
            }
        },
    });

    // 타블렛,모바일 메뉴여닫기
    $('#header .open_menu').on('click', function() {
        $('#header .menu_wrap').addClass('on');

        // 바디 스크롤 막기
        $('body').on('mousewheel', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    });
    $('#header .btn_close').on('click', function() {
        $('#header .menu_wrap').removeClass('on');
        $('body').off('mousewheel');
    })

    $('#header .menu_gnb>li>a').on('click', function() {
        $('#header .menu_wrap').removeClass('on');
        $('body').off('mousewheel');
    });

    // work slider
    var mainSlider = new Swiper('.work_slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed:1000,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // footer btn copy
    // $('#footer .btn_email_copy').on('click', function() {
    //     var txtCopy = 'zzinn_a@naver.com'
    //     copyToClipboard(txtCopy);
    //     alert('메일 주소가 복사되었습니다.');
    // })

    // work pop-up
    $('.work .detail_open').on('click', function() {
        $('.detail_pop').addClass('on');

        $('body').on('mousewheel', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        $('.detail_pop img').attr('src','images/muhak_detail.jpg');
    });
    $('.work .slide2 .detail_open').click(function() {
        $('.detail_pop img').attr('src','images/sdc_detail.jpg');
    });
    
    // design pop-up
    $('.design .tab_list>li').on('click', function(e) {
        $(this).addClass('on').siblings().removeClass('on');
        $('.design .design_list li').removeClass('blind')
        e.preventDefault();
        var i = $(this).index();

        if (i == 1) {
            $('.design .design_list li').not('.web').addClass('blind')
        }else if (i === 2) {
            $('.design .design_list li').not('.banner').addClass('blind')
        }

    });

    $('.design .design_list>li').on('click', function(e) {
        $('.view_pop').addClass('on');
        $('body').on('mousewheel', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        e.preventDefault();
        var idx = $(this).index();

        $('.view_pop .modal_con li').eq(idx).addClass('on').siblings().removeClass('on');
    });

    // popup창 공통
    $('.popup .btn_close').on('click', function() {
        $('.detail_pop').removeClass('on');
        $('.view_pop').removeClass('on');

        $('body').off('mousewheel');

        // 팝업 스크롤 위치 초기화
    });
    // dimm 클릭시 팝업창 닫기
    $('.dimm').on('click', function() {
        $('.popup .btn_close').trigger('click');
    });


})();