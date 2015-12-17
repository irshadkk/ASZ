$(document).ready(function(e) {
    //     console.log('foox');
    // $('body').on('hover','.bravo-nav-links li',function(){
    //     console.log('foo');
    //     $('.bravo-nav-links li.active').removeClass('active');
    //     $(this).addClass('active');
    //     $('.bravo-sublink').removeClass('active');
    //     $('.bravo-sublink'+$(this).data('rel')).addClass('active');

    // });
    $('.bravo-nav-links li').hover(function(){
        $('.bravo-nav-links li.active').removeClass('active');
        $(this).addClass('active');
        $('.bravo-sublink').removeClass('active');
        $('.bravo-sublink'+$(this).data('rel')).addClass('active');
    });
    
//    $('ul.nav.nav-tabs li a').click(function (e) {
//         $(e.currentTarget).parent().find('li').parent('ul').children('li.active').first().removeClass('active');
//        $(e.currentTarget).addClass('active');
//    });
});
