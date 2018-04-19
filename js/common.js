$(document).ready(function () {
    $('.bxslider').bxSlider({
        auto: true,
        mode: 'fade',
        speed: 800
        //autoControls: true
    });
    if ($(window).width() <= 1366) {
        $('.icon-slider').css('right', '10px')
    }
    //导航链接
    //var header_top = $("#head").offset().top + 65;
    //var service_top = $("#serv").offset().top + 65;
    //var company_top = $("#comp").offset().top + 65;
    //var culture_top = $("#cult").offset().top+65;
    $(window).scroll(function () {
        var header_top = $("#banner").offset().top
        var service_top = $("#serv").offset().top - 160;
        var company_top = $("#comp").offset().top - 210;
        var culture_top = $("#cult").offset().top - 175;
        //var cooperative_top = $("#coop").offset().top - 175; 
        var cooperative_top = "";
        var cooper_top = $("#cooper").offset().top - 250;
        var about_top = $("#about").offset().top - 175;
        var scroH = $(this).scrollTop();
        //alert(scroH + "===" + service_top + "====" + ($("#serv").offset().top ));
        //console.log('scroH:', scroH)
        //console.log('header_top--------------:', header_top)
        if (scroH >= about_top) {
            set_cur(".about");
            document.title = '关于我们';
        } else if (scroH >= cooper_top) {
            set_cur(".cooper");
            document.title = '合作单位';
        }         
        else if (scroH >= culture_top) {
            set_cur(".cult");
            document.title = '企业文化';
        }
        else if (scroH >= company_top) {
            set_cur(".comp");
            document.title = '公司介绍';

        } else if (scroH >= service_top) {
            set_cur(".serv");
            document.title = '产品与服务';
        } else if (scroH >= header_top) {
            set_cur(".banner");
            document.title = '南京希时';
        }

        if (scroH > 0) {
            $('#head').addClass('headFixed');
        } else {
            $('#head').removeClass('headFixed');
        }
    });
    $(".nav-link a").click(function () {
        var el = $(this).attr('class');
        var elScrollTop = $("#" + el).offset().top - 110;
        var winScrolltop = $(window).scrollTop();
        //if (winScrolltop == 0) {//如果头部不是fixed，则document高度需要加上header高度65，滚动的时候就要少滚动65px
            elScrollTop = elScrollTop - 65;
        //}
        $('html, body').animate({
            scrollTop: elScrollTop
        }, {
            easing: 'easeOutSine',
            duration: 300,
            complete: function () {
            }
        });
    });
    function set_cur(n) {
        $(".nav-link a").siblings().removeClass("active");
        $(".nav-link a" + n).addClass("active");
    }
    $('.cooperativeImg').hover(function () {
        var idx = $('.cooperativeImg').index(this);
        idx++;
        $(this).attr('src', 'images/Cooperative0' + idx + '_hover.jpg');
    }, function () {
        var idx = $('.cooperativeImg').index(this);
        idx++;
        $(this).attr('src', 'images/Cooperative0' + idx + '.jpg');
    })
});

