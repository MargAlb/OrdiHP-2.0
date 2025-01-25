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
    const oeffnungszeit = "offen";        // "oeffnungszeit kann sein: urlaub, geschlossen oder offen"
    //const geschlossen = "off";  //closed ODER off
    const zusatz_info = "aus"           //info=ein: Zusatz-Info wird angezeigt
    // info=aus     Zusatz-Info wird nicht angezeigt

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

    if (oeffnungszeit=="offen"){
        $(".offen").css("display", "block");
        $(".urlaub").css("display", "none");
        $(".geschlossen").css("display", "none");
    } 
    if (oeffnungszeit=="urlaub"){
        $(".offen").css("display", "none");
        $(".urlaub").css("display", "block");
        $(".geschlossen").css("display", "none");              
    }
    if (oeffnungszeit=="geschlossen"){
        $(".offen").css("display", "none");
        $(".urlaub").css("display", "none");
        $(".geschlossen").css("display", "block");
    } 

    
    //Zusatz-Info anzeigen oder ausblenden
    if (zusatz_info=="ein"){
        $(".ein").css("display", "block");
        $(".aus").css("display", "none");
    } else {
        $(".ein").css("display", "none");
        $(".aus").css("display", "block");        
    }

    //Geschlossen-Seite einblenden, Rest ausblenden
    /* 
    if (geschlossen=="on"){
        $(".on").css("display", "block");
        $(".off").css("display", "none");
    } else {
        $(".on").css("display", "none");
        $(".off").css("display", "block");        
    }
    */


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
