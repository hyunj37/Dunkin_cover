/*메뉴*/
$('.main-menu .menu').hover(function(){
    $('.main-menu .main-menu-bg').stop().slideDown('fast');
    $(this).find('.sub-menu').stop().fadeIn();
},
                     function(){
    $('.main-menu .main-menu-bg').stop().slideUp('fast');
    $(this).find('.sub-menu').stop().fadeOut('fast');
});

/*클릭버튼*/
var check = false;
$('.toggle-btn').click(function(){
    if(check == false){
        $('.toggle-cont').show();
        $('.toggle-btn').addClass('on');
        check = true;
    }else{
        $('.toggle-cont').hide();
        $('.toggle-btn').removeClass('on');
        check = false;
    }
});

/*스크롤효과*/
$(window).on("scroll", function(){
    var scroll = $(window).scrollTop();
    var headerTop = $('#header').outerHeight();
    var contTop1 = $('.banner1').offset().top-$('.banner1').outerHeight()/2-headerTop;
    var contTop2 = $('.store-catering').offset().top-$('.store-catering').outerHeight()/2-headerTop;

    /*banner1*/
    if(scroll >= contTop1){
        $('.show-left').addClass('on');
        $('.show-right').addClass('on');
    }else if(scroll < contTop1){
        $('.show-left').removeClass('on');
        $('.show-right').removeClass('on');
    }

    /*store-catering*/
    if(scroll >= contTop2){
        $('.store').fadeIn();
        $('.catering').fadeIn();
        $('.store').addClass('on');
        $('.catering').addClass('on');
    }else{
        $('.store').fadeOut();
        $('.catering').fadeOut();
        $('.store').removeClass('on');
        $('.catering').removeClass('on');
    }
});


