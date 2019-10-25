/*메뉴*/
$('.main-menu .menu').hover(function(){
    $('.main-menu .main-menu-bg').stop().slideDown('fast');
    $(this).find('.sub-menu').stop().fadeIn();
},
                     function(){
    $('.main-menu .main-menu-bg').stop().slideUp('fast');
    $(this).find('.sub-menu').stop().fadeOut('fast');
});
