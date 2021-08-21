$(document).ready(function (){
    var menuBtn=$(".menu");
    var overlayMenu=$(".overlay-menu")
    var btnClose=$('.btn-close') 
    var btnScrollTop=$('.btn-scroll');
    $('html').niceScroll();
    new WOW().init();
    menuBtn.click(function(){
        console.log('clicked')
                overlayMenu.animate({'width':'100%'},500,function(){
                    
                }
            )

            overlayMenu.children("ul").fadeToggle(500)
        }
    );

    // Close button event or closing overlay event
    btnClose.click(function(){
        overlayMenu.animate({'width':'0'},500,function(){
            
                }
            )  
            overlayMenu.children("ul").fadeToggle(500)
    });

    $(window).scroll(function() {
        console.log($(this).scrollTop());
        $(this).scrollTop()>=700?btnScrollTop.show():btnScrollTop.hide()
    });
    btnScrollTop.click(function (){
        $("html,body").animate({scrollTop:0},1000)
    });
}
);