var pathname_ = window.location.pathname;
var page_ = pathname_.substring(pathname_.lastIndexOf('/') + 1);
var swiper;
var parallax;
var lastClick = "";
var searchtoDetail = false;

//URLS
var historia = "haciendo-historia";
var search = "search";

var historiaNH = "haciendo-historia";
var searchNH = "search";
var indexNH = "index.html";
var work = "work.html";
var detalle = "detalle.html"

var ancho;
var alto;
var isIpadPro;
var ios;
var isIpad;


function viewportSize() {
    var test = document.createElement("div");

    test.style.cssText = "position: fixed;top: 0;left: 0;bottom: 0;right: 0;";
    document.documentElement.insertBefore(test, document.documentElement.firstChild);

    ancho = test.offsetWidth;
    alto = test.offsetHeight;
    // console.log(ancho + " " + alto);
    // var dims = { width: test.offsetWidth, height: test.offsetHeight };
    document.documentElement.removeChild(test);

    // return dims;
}

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        ios = navigator.userAgent.match(/iPhone|iPad|iPod/i);
        var mac = navigator.userAgent.match(/Mac/i);
        var s = screen.width + 'x' + screen.height;
        var dpr = devicePixelRatio;

        if (ios) {

            if (ios[0] === "iPad") {
                viewportSize();
                isIpadPro = false;
                isIpad = true;

                if (ancho == 1024 && alto == 1366) {

                    isIpadPro = true;
                    isIpad = false;


                }

                if (ancho == 1366 && alto == 1024) {

                    isIpadPro = true;
                    isIpad = false;

                }

                if (ancho == 1112 && alto == 834) {

                    isIpadPro = true;
                    isIpad = false;

                }

                if (ancho == 2048 && alto == 2732) {

                    isIpadPro = true;
                    isIpad = false;

                }

                if (ancho == 834 && alto == 1112) {

                    isIpadPro = true;
                    isIpad = false;

                }




            }

        } else if (mac) {
            //viewportSize();
            if (dpr == 2 && (s == '1112x834' || s == '1194x834' || s == '1024x768' || s == '1366x1024' || s == '834x1112' || s == '1024x1366' || s == '834x1194')) {
                isIpadPro = true;
                isIpad = false;
                ios = true;
            }
        }


        return ios; //&& ancho < 1366;
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


if ($(window).width() <= 1025 || $(window).width() >= 1366) {
    vertScroll = false;
} else {
    vertScroll = true;
}



    function animateWork(){

        $(".big-text").animate({"opacity":1});
        texto1 = $(".work1");

        
        TweenLite.set(texto1, { x: "-130%" });


        TweenLite.to(texto1, 5.3, {
            x: "0%", ease: Power4.easeInOut
        });


        texto2 = $(".work2");
        
        TweenLite.set(texto2, { x: "130%", y:"130%" });


        TweenLite.to(texto2, 5, {
            x: "0%", y:"130%", ease: Power4.easeInOut
        });

        texto3 = $(".work3");

        
        TweenLite.set(texto3, { x: "-100%", y:"260%"});


        TweenLite.to(texto3, 5.3, {
            x: "0%", y:"260%",ease: Power4.easeInOut
        });




    }


    function animateIndex(){



        texto1 = $(".texto1");
        texto2 = $(".texto2");
        texto3 = $(".texto3");
        texto4 = $(".texto4");


        

        
        TweenLite.set(texto2, { x: "-100%" , y:0 });
        TweenLite.set(texto3, { x: "100%", y:0  });






     


        TweenLite.to(texto3, 5, {
            x: "0%",  ease: Power4.easeInOut
        });

        TweenLite.to(texto2, 5.3, {
            x: "0%",   ease: Power4.easeInOut, onComplete: function(){

                $(".texto1").animate({opacity:1}, "slow");
                $(".texto4").animate({opacity:1}, "slow");
            }
        });


    }



    function activeParallax(){

        var pathname = $(location).attr('pathname');
        var page = pathname.substring(pathname.lastIndexOf('/') + 1);

        console.log(page);
        if (page === indexNH || page === "" ) {
            
            var scene = document.getElementById('scene2');
            var parallaxInstance = new Parallax(scene,{relativeInput: true});
        } 

        if (page === work && page != "" ) {
            
            var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene,{relativeInput: true});
        } 

        if (page === detalle && page != "" ) {
            
            // var scene = document.getElementById('scene3');
            // var parallaxInstance = new Parallax(scene,{relativeInput: true});
        } 


    }

    function hoverBigText(){
        
        texto = $([".texto2", ".texto3"]);



        $(".sandro").hover(function(){

            $(".sandro").animate({'opacity':1},"slow", function(){
            });

        },function(){


            $(".sandro").animate({'opacity':0},"slow", function(){
            });

        });



    }

    function hoverHead(){
        
        head = $(".inHead");

        head.hover(function(){

            console.log("hover");

        });

    }


    function hoverWork(){


        texto1 = $("#work .panel1>a>p");


        texto1.hover(function(){
            $(".byma").animate({'opacity':1},200);
            $(".citroen").animate({'opacity':0},200);
            $(".origins").animate({'opacity':0},200);

            TweenMax.to($(".work1"), 1, { css: { "letter-spacing":'5px'}, ease:Expo.easeOut });

            TweenMax.to($(".work2"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut});
            TweenMax.to($(".work3"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut });



        
            

        });

        var flag = true;

        // texto1.click(function(){
        //     $(".byma").animate({'pointer-events':'none','opacity':1},200);
        //     $('body').css({'overflowY':'auto'});
        //     flag = false;
        // });

        texto1.mouseleave(function () {
                if (flag) {

                    $(".byma").animate({'opacity':0},200);
                    
                }

                TweenMax.to($(".work1"), 1, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut });

                TweenMax.to($(".work2"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut });
                TweenMax.to($(".work3"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut });
           
        });

  




        texto2 = $("#work .panel2>a>p");

        texto2.hover(function(){
            $(".byma").animate({'opacity':0},200);
            $(".citroen").animate({'opacity':1},200);
            $(".origins").animate({'opacity':0},200);


            TweenMax.to($(".work2"), 0.4, { css: { "letter-spacing":'5px'}, ease:Expo.easeOut  });

                TweenMax.to($(".work1"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut  });
                TweenMax.to($(".work3"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut  });
        });

        texto2.click(function(){
            $(".citroen").animate({'pointer-events':'none','opacity':1},200);
            $('body').css({'overflowY':'auto'});
            flag = false;
        });

        texto2.mouseleave(function () {
                if (flag) {

                    $(".citroen").animate({'opacity':0},200);


                    
                }

                TweenMax.to($(".work1"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut  });

                TweenMax.to($(".work2"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut  });
                TweenMax.to($(".work3"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut  });
           
        });

        texto3 = $("#work .panel3>a>p");

        texto3.hover(function(){
            $(".byma").animate({'opacity':0},200);
            $(".citroen").animate({'opacity':0},200);
            $(".origins").animate({'opacity':1},200);

            TweenMax.to($(".work3"), 0.4, { css: { "letter-spacing":'5px'}, ease:Expo.easeOut  });

                TweenMax.to($(".work2"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut  });
                TweenMax.to($(".work1"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut  });

        });

        // texto3.click(function(){
        //     $(".origins").animate({'pointer-events':'none','opacity':1},200);
        //     $('body').css({'overflowY':'auto'});
        //     flag = false;
        // });

        texto3.mouseleave(function () {
                if (flag) {

                    $(".origins").animate({'opacity':0},200);
                    
                }

                TweenMax.to($(".work1"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut  });

                TweenMax.to($(".work2"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut  });
                TweenMax.to($(".work3"), 0.4, { css: { "letter-spacing":'0px'}, ease:Expo.easeOut  });
           
        });

    }


    function animateAbout(){

        content = $(".big-text .content");
        github = $("#about .big-text .redes>a>.github");
        linkedin = $("#about .big-text .redes>a>.linkedin");
        instagram = $("#about .big-text .redes>a>.instagram");

        var tl = new TimelineLite();

        tl.set(content, {  opacity: 0, y:"+=10%" });

        tl.set(instagram, {  opacity: 0, x:"-=200%" });
        tl.set(github, {  opacity: 0, x:"-=100%" });
        tl.set(linkedin, {  opacity: 0 });


        tl.to(content, 2.6, {
            y:"-=10%",opacity:1, ease: Power4.easeInOut, onComplete: function(){

            }
        });

                    tl.to(linkedin, 0.8, {  opacity:1},"-=1");
                    tl.to(github, 1.2, {  opacity: 1, x:"+=100%" },"-=1.2");
                    tl.to(instagram, 1.5, {  opacity: 1, x:"+=200%" },"-=1.2");

    }


    function generatePhrases(){

        var phrases = ["<span>DEVELOPER</span>","<span>BATMAN WANNABE</span>","<span>DON SATUR'S LOVER</span>"];
        var phrases2 = ["<span>ALSO ARTIST</span>","<span>MACDONALD'S HATER</span>","<span>DRAKE'S FAN</span>"];
        var i = 0;


        // TweenMax.fromTo(".texto1", 25, {x:"-=250%", opacity:0}, {x:"+=350%", opacity:1,ease:Linear.easeNone, repeat:-1});

        // TweenMax.fromTo(".texto4", 25, {x:"+=150%", y:"330%", opacity:0}, {x:"-=350%", y:"330%",opacity:1,ease:Linear.easeNone, repeat:-1});

        // TweenMax.fromTo(".texto1_2", 20, {x:"-=50%"}, {x:"+=350%", ease:Linear.easeNone, repeat:-1});

        // setInterval(function(){

        //     console.log(i);
        //     $("#home .texto1").animate({opacity:0},"slow", function(){

        //             $("#home .texto1").empty();
        //             $("#home .texto1").append(phrases[i]);
        //             $("#home .texto1").animate({opacity:1},"slow");
                
        //     });

        //     $("#home .texto4").animate({opacity:0},"slow", function(){

        //             $("#home .texto4").empty();
        //             $("#home .texto4").append(phrases[i]);
        //             $("#home .texto4").animate({opacity:1},"slow");
                
        //     });

        //     i = i + 1;

        //     if (i >= 3) {
        //         i = 0;
        //     }


        // }, 10000);

    }

    function startMarquee(){
       
       $('.marquee1').marquee({
           //duration in milliseconds of the marquee
           duration: 15000,
           //gap in pixels between the tickers
           gap: 0,
           //time in milliseconds before the marquee will start animating
           delayBeforeStart: 0,
           //'left' or 'right'
           direction: 'right',
           //true or false - should the marquee be duplicated to show an effect of continues flow
           duplicated: true
       });

        $('.marquee').marquee({
            //duration in milliseconds of the marquee
            duration: 15000,
            //gap in pixels between the tickers
            gap: 0,
            //time in milliseconds before the marquee will start animating
            delayBeforeStart: 0,
            //'left' or 'right'
            direction: 'left',
            //true or false - should the marquee be duplicated to show an effect of continues flow
            duplicated: true
        });


    }

    function startHoverEffect(){

        $('.imagenes-home').empty();
        $(".big-text .imagenes-home").hover(function(){

            $(this).css({ opacity:1 });
        },function(){

            $(this).css({ opacity:0 });

        });
        
        var myAnimation = new hoverEffect({
            parent: document.querySelector('.imagenes-home'),
            intensity: 0.3,
            image1: 'img/Sandro_retrato.jpg',
            image2: 'img/Sandro_retrato.jpg',
            angle: Math.PI / 4,
            displacementImage: 'img/heightMap.png',
            speedIn: 2,
            speedOut: 5

        });

    }

    function hoverHoyVideo(){

        $('.hoyagency').hover(function(){

            $('.video__hoy').css({'opacity':1});

        }, function(){
            $('.video__hoy').css({'opacity':0});
        })
    }

    $(window).load(function () {





    });




    $(document).ready(function () {

        var body = document.getElementById('barba-wrapper');
        body.style.setProperty( 'overflow-y', 'hidden' );


        $('.imagenes>img').css({'opacity':0});

        $('.imagenes-home').css({'zIndex':0});
        if (page_ == 'index.html' || page_ == '') {

            $('.imagenes-home').css({'zIndex':99999});
            animateIndex();
            startMarquee();
            generatePhrases();


            startHoverEffect();


        }

        if (page_ == 'work.html') {
            animateWork();
            hoverWork();

        }

        if (page_ == 'about.html') {

            hoverHoyVideo();
            
        }



        if (page_ == 'detalle.html') {

            var body = document.getElementById('barba-wrapper');
            body.style.setProperty( 'overflow-y', 'auto' );

            $('.byma').css({'opacity':1});



        }else{

            
            animateAbout();
            activeParallax();
            hoverBigText();
            
            hoverHead();

           

        }


        if (page_ == 'citroen-centenario.html') {

            var body = document.getElementById('barba-wrapper');
            body.style.setProperty( 'overflow-y', 'auto' );

            $('.citroen').css({'opacity':1});
        }
    });