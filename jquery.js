$(document).ready(function(){
    // function elementResize(){
    //     var browserwidth=$(window).width();
    //     if ((browserwidth) < '760') {
    //         $(".dropdwn").click(function(){
    //             $("#navigation").fadeToggle();
    //         });
    //     } else {
    //         $("#navigation").css("display", "block");
    //     }
    // }
    // elementResize();        
    // Konstanten Deklarationen:
    const urlaub = "on";

    // --------------------------



    $('a.top').click(function () {        
    $('body,html').animate({scrollTop: 0}, 800);       
    return false;        
    });

    // Info-Popup ausblenden
    $("#info").click(function(){
        $("#info").css("display", "none");
    });
    // $(".menubtn").click(function(){
    //     $("#navigation li").css("display","visible");
    // })
    $(".menuicon").click(function(){
        $("#navigation li").toggle(500, "linear");
    })

    //Urlaub-Seite einblenden, Rest ausblenden
    if (urlaub=="on"){
        $(".on").css("display", "block");
        $(".off").css("display", "none");
    } else {
        $(".on").css("display", "none");
        $(".off").css("display", "block");        
    }




    // Wär bei Gelegenheit zu testen!
    //Zu zentrierendes Element definieren
    var CenterBox = '#xyz';     // id des OFG containers
    
    //Mindest-Randabstand definieren
    var MinimumMargin = 10;
    
    //Vertikaler Offset (Pixel, um die das Element nach oben aus der Mitte verschoben wird)
    var YOffset = 0;
    
    //Ab hier sind keine weiteren Konfigurationen nötig
    $(window).resize(function(){
        var leftmargin = parseInt(($(window).width() - $(CenterBox).outerWidth())/2);
        var topmargin = parseInt(($(window).height() - $(CenterBox).outerHeight())/2);
    
        //Vertikalen Offset anwenden
        topmargin = topmargin - YOffset;
    
        //Viewport Overflow verhinden, Mindest-Randabstand anwenden
        if(leftmargin <= MinimumMargin) {leftmargin = MinimumMargin;}
        if(topmargin <= MinimumMargin) {topmargin = MinimumMargin;}
    
        //Errechnete Werte anwenden
        $(CenterBox).css({
            position:'absolute',
            left: leftmargin,
            top: topmargin
        });
    });
    // Initialer Aufruf nach dem Laden der Seite
    $(window).resize();
});
