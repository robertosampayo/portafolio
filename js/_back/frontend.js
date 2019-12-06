var pathname_ = window.location.pathname;
// var pathname_ = $(location).attr('pathname');
var page_ = pathname_.substring(pathname_.lastIndexOf('/') + 1);
var swiper;
var parallax;
var lastClick = "";
var searchtoDetail = false;

//URLS
var historia = "haciendo-historia";
var search = "search";
var ancho;
var alto;
var isIpadPro;


function viewportSize() {
    var test = document.createElement("div");

    test.style.cssText = "position: fixed;top: 0;left: 0;bottom: 0;right: 0;";
    document.documentElement.insertBefore(test, document.documentElement.firstChild);

    ancho = test.offsetWidth;
    alto =  test.offsetHeight;
    console.log(ancho + " " + alto);
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
        var ios = navigator.userAgent.match(/iPhone|iPad|iPod/i);

        if (ios){

            if (ios[0] === "iPad") {
                viewportSize();
                isIpadPro = false;

                if (ancho == 1024 && alto == 1366) {

                    isIpadPro = true;


                }

                if (ancho == 1366 && alto == 1024) {

                    isIpadPro = true;


                }

                if (ancho == 1112 && alto == 834) {

                    isIpadPro = true;


                }

                if (ancho == 834 && alto == 1112) {

                    isIpadPro = true;


                }



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


function animateDetalle() {

    const t1 = new TimelineLite();
    const t2 = new TimelineLite();

    // slideContainer


    TweenMax.set($('.first-number'), {
        opacity: 0,
        x: '200%',
    });


    TweenMax.set($('.description'), {
        y: 500
    });

    TweenMax.to($('.description'), 1.2, { y: 0, delay: 0.5, ease: Power4.easeOut });

    TweenMax.to($('.first-number'), 2, {

        opacity: 1,
        x: '0%',
        // delay:.5,
        ease: Power4.easeOut, onComplete: function () {


        }

    });







}

function animateDetalleMobile($container = document, $delay = 1) {



    var description = $container.querySelector('.description');
    var numero = $container.querySelector('.first-number');

    var tl = new TimelineLite();





    tl.set(description, {
        opacity: 0,
        immediateRender: true
    });

    tl.set(numero, {
        opacity: 0,
        immediateRender: true
    });
    console.log(":D p");

    tl.to(description, 1, {


        rotation: 0.01,
        force3D: true,
        opacity: 1, delay: $delay,
        // espera hasta que la transicion de historia termine
        ease: Power4.easeOut,

    });

    tl.to(numero, 1, {


        rotation: 0.01,
        force3D: true,
        opacity: 1, delay: $delay,
        // espera hasta que la transicion de historia termine
        ease: Power4.easeOut,

    });


}

var animateTween = '';
// HOME ANIMATIONS

// Home intro animation
function animateIndex() {

    var image = document.querySelectorAll('.layer');
    var size = image.length;


    if (size == 5) {

        // Prepare the dom and selectors depend of navigator

        var $ = function (id) {
            return document.getElementById(id);
        };

        function forceSubPixelRendering(el) {
            TweenMax.set(el, {
                z: 0.1,
                rotationZ: 0.01
            });
        };
        TweenLite.to(['.layer1', 'layer2', 'layer3', '.layer4', '#scene'], 0.01, {
            rotation: 0.01,
            force3D: true,
            perspective: 1000,
            transform: 'translate3d(0, 0, 0)'
        });


        // TweenLite.to( ['.layer1','layer2', 'layer3','.layer4'], 0.01, { rotation: 0.0001 });

        // const t1 = new TimelineLite({
        //     pause: true
        // });
        const t1 = new TimelineLite({
            pause: true
        });

        const t2 = new TimelineLite({
            pause: true
        });

        t1.to('#main-illustration', 2.5, {
            y: '0%',
            ease: Expo.easeInOut
        });
        t2.set(['.layer5', '.layer1'], {
            y: '+80%'
        });
        t2.set(['.layer3'], {
            y: '+80%'
        });
        t2.set(['.layer4'], {
            y: '+100%'
        });
        t2.set(['.layer2'], {
            opacity: 0
        });
        t2.set(['.footer-home'], {
            opacity: 0
        });


        // campo
        t2.to(['.layer3'], 1.5, {
            rotation: 0.01,
            delay: 0.5,
            ease: "quad",
            y: '0%',
            ease: Power3.easeOut,
            force3D: true
        });
        // rueda
        t2.to(['.layer5', '.layer1'], 1.5, {
            rotation: 0.01,
            ease: "quad",
            y: '0%',
            ease: Power3.easeOut,
            force3D: true
        }, '-=.8');

        //Andre
        t2.to(['.layer4'], 1.5, {
            rotation: 0.01,
            ease: "quad",
            y: '0%',
            ease: Power3.easeOut,
            force3D: true
        }, '-=.8');
        // t3.to(['.layer4'],1.5,{ rotation:0.01,ease: "quad", scale: "-=0.9", force3D:true});

        //100
        t2.to(['.layer2'], 1.5, {
            rotation: 0.01,
            ease: "quad",
            opacity: 1,
            ease: Power3.easeOut,
            force3D: true
        }, '-=.8');

        t2.to(['.footer-home'], 1.5, {
            rotation: 0.01,
            ease: "quad",
            opacity: 1,
            ease: Power3.easeInOut,
            force3D: true
        }, '-=2');






        //Nubes
        t2.to('#Clouds', 1, {
            rotation: 0.01,
            opacity: 1
        });

        //Objetos
        t2.to('#Objetos', 1, {
            rotation: 0.01,
            opacity: 1
        });



        // }, 1000);


        t1.play();
        t2.play();
        // t1.reverse();
        return t1;


    }
}

function animateIndexFromHistory(this_ = ''){



        var image = document.querySelectorAll('.layer');
        var size = image.length;


        if (size == 5) {

            // Prepare the dom and selectors depend of navigator

            var $ = function (id) {
                return document.getElementById(id);
            };

            function forceSubPixelRendering(el) {
                TweenMax.set(el, {
                    z: 0.1,
                    rotationZ: 0.01
                });
            };
            TweenLite.to(['.layer1', 'layer2', 'layer3', '.layer4', '#scene'], 0.01, {
                rotation: 0.01,
                force3D: true,
                perspective: 1000,
                transform: 'translate3d(0, 0, 0)'
            });



            const t1 = new TimelineLite({
                pause: true
            });

            const t2 = new TimelineLite({
                pause: true
            });

            t2.set('#main-illustration', {
                y: '-100%'
            });


            t2.set(['.layer5', '.layer1'], {
                y: '+80%'
            });
            t2.set(['.layer3'], {
                y: '+80%'
            });
            t2.set(['.layer4'], {
                y: '+100%'
            });
            t2.set(['.layer2'], {
                opacity: 0
            });
            t2.set(['.footer-home'], {
                opacity: 0
            });


            t2.to('#main-illustration', 2, {
                y: '0%',
                ease: Expo.easeInOut
            });

            // campo
            t2.to(['.layer3'], 1.5, {
                rotation: 0.01,
                delay: 0.5,
                ease: "quad",
                y: '0%',
                ease: Power3.easeOut,
                force3D: true
            },'-=.8');
            // rueda
            t2.to(['.layer5', '.layer1'], 1.5, {
                rotation: 0.01,
                ease: "quad",
                y: '0%',
                ease: Power3.easeOut,
                force3D: true
            }, '-=1');

            //Andre
            t2.to(['.layer4'], 1.5, {
                rotation: 0.01,
                ease: "quad",
                y: '0%',
                ease: Power3.easeOut,
                force3D: true
            }, '-=.8');

            //100
            t2.to(['.layer2'], 1.5, {
                rotation: 0.01,
                ease: "quad",
                opacity: 1,
                ease: Power3.easeOut,
                force3D: true
            }, '-=.8');

            t2.to(['.footer-home'], 1.5, {
                rotation: 0.01,
                ease: "quad",
                opacity: 1,
                ease: Power3.easeInOut,
                force3D: true
            }, '-=2');






            //Nubes
            t2.to('#Clouds', 1, {
                rotation: 0.01,
                opacity: 1
            });

            //Objetos
            t2.to('#Objetos', 1, {
                rotation: 0.01,
                opacity: 1
            });



            // }, 1000);


            t1.play();
            t2.play();
            // t1.reverse();
            return t1;


        }

}

function initParallax(page = null) {

    if (page == 'index' || page == 'index' || page == '') {

        var scene = document.getElementById('scene');
        parallax = new Parallax(scene);

    }


}

function disableParallax() {

    parallax.disable();



}

function enableParallax() {

    parallax.enable();



}

// Home outro animation

function animateOutIndex(parallax = null) {

    var image = document.querySelectorAll('.layer');
    var size = image.length;


    if (size == 5) {

        // Prepare the dom and selectors depend of navigator

        var $ = function (id) {
            return document.getElementById(id);
        };

        function forceSubPixelRendering(el) {
            TweenMax.set(el, {
                z: 0.1,
                rotationZ: 0.01
            });
        };
        TweenLite.to(['.layer1', 'layer2', 'layer3', '.layer4', '#scene'], 0.01, {
            rotation: 0.01,
            force3D: true,
            perspective: 1000,
            transform: 'translate3d(0, 0, 0)'
        });

        const t1 = new TimelineLite({
            pause: true
        });
        const t2 = new TimelineLite({
            pause: true
        });


        t1.to('#main-illustration', 2.5, {
            y: '0%',
            ease: Expo.easeInOut
        });
        t2.set(['.layer5', '.layer1'], {
            y: '+0%'
        });
        t2.set(['.layer3'], {
            y: '+0%'
        });
        t2.set(['.layer4'], {
            y: '+0%'
        });
        t2.set(['.layer2'], {
            opacity: 1
        });


        t1.to('.cortina', 1, {
            opacity: 0
        });

        // weave your magic here.


        // campo
        t2.to(['.layer3'], 1, {
            rotation: 0.01,
            delay: 0.5,
            ease: "quad",
            y: '+80%',
            ease: Power3.easeInOut,
            force3D: true
        });
        // rueda
        t2.to(['.layer5', '.layer1'], 1, {
            rotation: 0.01,
            ease: "quad",
            y: '+60%',
            ease: Power3.easeInOut,
            force3D: true
        }, '-=.8');


        //100
        t2.to(['.layer2'], 1, {
            rotation: 0.01,
            y: +300,
            ease: "quad",
            opacity: 0,
            ease: Power3.easeInOut,
            force3D: true
        }, '-=1.2');

        //Andre
        t2.to(['.layer4'], 1, {
            rotation: 0.01,
            ease: "quad",
            y: '+100%',
            ease: Power3.easeInOut,
            force3D: true
        }, '-=.8');
        // t3.to(['.layer4'],1.5,{ rotation:0.01,ease: "quad", scale: "-=0.9", force3D:true});
        t2.to(['.footer-home'], 1.5, {
            rotation: 0.01,
            ease: "quad",
            opacity: 0,
            ease: Power3.easeInOut,
            force3D: true
        }, '-=2');




        //Nubes
        t2.to('#Clouds', 1, {
            rotation: 0.01,
            opacity: 0
        });

        //Objetos
        t2.to('.objetos', 1, {
            rotation: 0.01,
            opacity: 1
        });



        // }, 1000);


        t1.play();
        t2.play();
        // t1.reverse();
        return t1;


    }


}

function animateTimeLine($delay = 0.8) {


    var timeline = $('.container-timeline');
    var numero = $('.numero');


    TweenLite.set(timeline, {
        y: '200%',
        immediateRender: true
    });
    TweenLite.set(numero, {
        scale: 0.7,
        autoAlpha: 0,
        immediateRender: true
    });
    TweenLite.set($('.big-label'), {
        opacity: 0,
        immediateRender: true
    });



    TweenLite.to(timeline, 1.5, {
        y: '0%',
        delay: $delay,
        ease: Power4.easeOut,


    });



    TweenLite.to(numero, 1.3, {
        scale: 1,
        delay: $delay,
        autoAlpha: 1,
        ease: Power4.easeOut
    });
    TweenLite.to($('.big-label'), 0.1, {
        delay: 1.1,
        opacity: 1,
        immediateRender: true
    });


}


function removeStars() {

    $('#particles-js').css('visibility', 'hidden');
}

function addStars() {

    $('#particles-js').css('visibility', 'visible');
}



function changeSkyToNight() {

    // if ($('.barba-container').data('namespace') === 'homepage') {


    addStars();
    $('#main-illustration').removeClass('day').addClass('night');
    // $('.inHead .nightlogo').show();
    // $('.inHead .daylogo').hide();

    // }
}

function changeSkyToDay() {

    // if ($('.barba-container').data('namespace') === 'homepage') {


    removeStars();
    $('#main-illustration').removeClass('night').addClass('day');
    // $('.inHead .nightlogo').hide();
    // $('.inHead .daylogo').show();

    // }


}

function changeLogoToDay() {

    $('.inHead .nightlogo').hide();
    $('.inHead .daylogo').show();
}

function changeLogoToNight() {

    var today = new Date();
    var hora = today.getHours();
    var minutes = today.getMinutes();

    if (hora >= 18 && $('.barba-container').data('namespace') === 'homepage') {

        $('.inHead .nightlogo').show();
        $('.inHead .daylogo').hide();


    }


}

function changeLogoToNightToBarba() {

    var today = new Date();
    var hora = today.getHours();
    var minutes = today.getMinutes();

    if (hora >= 18) {
        $('.inHead').css({ "display": "block" });
        $('.ic-menu').css({ "display": "none" });


        $('.inHead').animate({ opacity: 1 });
        $('.inHead .nightlogo').show();
        $('.inHead .daylogo').hide();


    }


}









function changeSky() {

    var today = new Date();
    var hora = today.getHours();
    var minutes = today.getMinutes();


    if (hora >= 18) {

        changeSkyToNight();
        console.log('listo noche');

    }

    if (hora >= 6 && hora < 18) {

        changeSkyToDay();
        console.log('listo dia');

    }


}



document.addEventListener("DOMContentLoaded", function () {

    changeSky();
    // changeSkyToNight();
    // animateTween = animateIndex();
    initParallax(page_);


    setInterval(changeSky, 60 * 1000);

    changeLogoToNight();
    setInterval(changeLogoToNight, 60 * 1000);



});


var sWidth = $(window).width();



function startSwiper() {

    // var swiper = '';


    if (sWidth > 767) {

        swiper = new Swiper('#timeline', {


            spaceBetween: 30,
            direction: 'horizontal',
            allowTouchMove: false,
            preloadImages: false,
            lazy: true,
            // effect: 'fade',
            loop: false,
            mousewheel: false,
            // parallax:true,
            speed: 0,
            hashNavigation: true,

            on: {
                init: function () {
                    /* do something */
                    const swiper = this;
                    swiper.animating = false;
                    // t1.to('.texto',3, {delay:0.5, opacity:1 });
                    // console.log('en Barba');

                },
                imagesReady() {
                    const swiper = this;
                    TweenMax.set('.numero', {
                        opacity: 0
                    });
                    // do something on swiper position change
                    TweenMax.to('.numero', 0.5, {
                        opacity: 1,
                        delay: .2
                    }, 0.1);
                    // swiper.animating
                    currentSlide = swiper.realIndex;

                    for (var i = 0; i < swiper.slides.length; i++) {
                        var slide = swiper.slides[i];
                        var translate, innerTranslate;

                        if (currentSlide == i) {

                            // TweenMax.set(slide,{opacity:0});
                        }

                    }
                }

            }


        });

    } else {

        swiper = new Swiper('#timeline', {


            spaceBetween: 30,
            direction: 'vertical',
            allowTouchMove: true,
            loop: false,
            mousewheel: false,
            speed: 500,
            hashNavigation: true,


        });
    }


    //    }

    return swiper;

} //



// DRAGGABLE TIMELINE

var thumb;
var $container = $(".time-marks");
var w = $(".time-marks").width();
var h = $(".time-marks").height();
var Xpercent;
var Ypercent;
var actualX;


function calcPercent(x, y) {
    x = x + 1;
    Xpercent = Math.round(x / w * 100); //99_
    Xline = (x / w) * 100;//99_

    // Xpercent = Xpercent - 1;
    // console.log(x);
    // Ypercent = Math.round(y / h * 100);

};
var thix = 0;

function setX(x) {
    thisx = x;
}

function getX() {
    return thisx;
}

function calcSlide(anio) {

    var slideNumber = (anio - 2019) + 100;

    // console.log(slideNumber);
    return slideNumber;
};


function update(swiper = '') {

    if ($(window).width() > 767) {

        $container = $("#containerRange");
        w = $("#containerRange").width();
        h = $("#containerRange").height();

        thumb = Draggable.create("#thumbMarker", {
            bounds: $container,
            dragResistance: 0,
            minimumMovement: 10,
            type: "x",
            throwProps: true,
            autoScroll: true,
            lockAxis: true,
            throwProps: true,
            // snap: { x: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
                // left: function (endValue) {

                //     return Math.round(endValue / 100) * 99; // 99_
                // }
            // },

            onDragStart: function () {

                TweenMax.to('.numero', 0.1, {
                    opacity: 0,
                    delay: 0
                }, 0.1);


            },
            onDrag: function () {

                TweenMax.to('.numero', 0.3, {
                    opacity: 0,
                    delay: .2
                }, 0.1);

                calcPercent(this.x, this.y);



                //            year = Xpercent + 1919;
                //
                //            if (year == 2020) {
                //                year = 2019;
                //            }

                // console.log(Xline);
                $('.line').css('width', (Xline) + "%");
                //$('.rs-label span').text(year);
                $('.rs-label span').text((Xpercent + 1918));
                $('.big-label').text((Xpercent + 1918));
                //$('.big-label').text(year);

                var str = Xpercent + 1919;
                var cut = str.toString();
                var first = cut.substring(0, 2);
                var second = cut.substring(2, 4);
                $('.first-part').text(first);
                $('.second-part').text(second);

                // console.log("xperce: " + Xpercent);

            },
            onThrowUpdate: function () {
                calcPercent(this.x, this.y);
            },
            onRelease: function () {
                TweenMax.to('.numero', 0.5, {
                    opacity: 1,
                    delay: .2
                }, 0.1);
                // swiper.slideTo(Xpercent);
                swiper.slideTo(Xpercent - 1);
            },
            onClick: function () {


            }
        });


        // thumb.maxX = 500;

        return thumb;

    }

}






// SWIPER DETALLE AÑO



function startSwiperDetalle() {


    var yearDetail = new Swiper('.swiper-container', {
        spaceBetween: 0,
        direction: 'horizontal',
        allowTouchMove: false,
        loop: false,
        mousewheel: true,
        progress: true,
        parallax: true,
        speed: 500
    });

}



// Animation Mouse

function setMouse() {



    var container = document.getElementById("main-illustration");
    var circle = document.querySelector(".circle-mouse");

    $('#main-illustration').css({
        "cursor": "none"
    });

    TweenMax.set(circle, {
        scale: 0,
        xPercent: -50,
        yPercent: -50
    });

    container.addEventListener("pointerenter", function (e) {
        TweenMax.to(circle, 0.3, {
            scale: 1,
            opacity: 1
        });
        positionCircle(e);
    });

    container.addEventListener("pointerleave", function (e) {
        TweenMax.to(circle, 0.3, {
            scale: 0,
            opacity: 0
        });
        positionCircle(e);
    });

    container.addEventListener("pointermove", function (e) {
        positionCircle(e);
    });

    function positionCircle(e) {
        var rect = container.getBoundingClientRect();
        var relX = e.pageX - container.offsetLeft;
        var relY = e.pageY - container.offsetTop;

        TweenMax.to(circle, 0.3, {
            x: relX,
            y: relY
        });
    }

}
let scene1;
let scene2;
let scene3;
let scene4;

function startScrollMagic() {
    // init controller
    var pctScrolled;

    $('html,body').scrollTop(0);

    if (isMobile.any()) {
        $("#texto1").clone().prependTo("#texto1-mob");
        $("#texto2").clone().prependTo("#texto2-mob");
        $("#texto3").clone().prependTo("#texto3-mob");
        $("#texto4").clone().prependTo("#texto4-mob");

        $('.two, .three, .four').attr('data-aos', 'fade-up');

        AOS.init({
            offset: 400
        });
    }

    if (!isMobile.any() && !isIpadPro) {
        // SCROLL CONTROLLER
        console.log('Scroll magic iniciado');
        var controller = new ScrollMagic.Controller();
        var wipeAnimation = new TimelineMax()
            .to("#slideContainer", 0.2, {
                x: "-87%"
            });

        var texto2 = $('#texto2')
        // create scene to pin and link animation
        new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "500%",
        })
            .setPin("#pinContainer")
            .setTween(wipeAnimation)
            // .addIndicators()
            .addTo(controller);


        // ANIMATIONS CONTROLLER
        var controller2 = new ScrollMagic.Controller({
            vertical: false
        });


        if ($('#texto1').length) {

            var tweenOne = TweenLite.to("#texto1", 0.2, {
                opacity: 1,
                y: '+=50',
                scale: 1,
                ease: Power4.easeInOut,
                onComplete: function () {

                    TweenLite.to("#texto1", 0.3, {
                        opacity: 0,
                        //y: '-=50',
                    });

                }
            });


            // build scene
            scene1 = new ScrollMagic.Scene({
                triggerElement: ".one .number",
                triggerHook: "onCenter", // show, when scrolled 10% into view
                duration: "80%", // use full viewport
                offset: -100 // move trigger to center of element
            })
                .setTween(tweenOne)
                //.addIndicators({name: "GSAP"}) // add indicators (requires plugin)
                .addTo(controller2);

        }

        if ($('#texto2').length) {

            var tweenTwo = TweenLite.to("#texto2", 0.2, {
                opacity: 1,
                y: '+=50',
                scale: 1,
                ease: Power4.easeInOut,
                onComplete: function () {

                    TweenLite.to("#texto2", 0.3, {
                        opacity: 0,
                        // y: '-=50',
                    });

                }
            });

            scene2 = new ScrollMagic.Scene({
                triggerElement: ".two .number",
                triggerHook: "onCenter", // show, when scrolled 10% into view
                duration: "80%", // use full viewport
                offset: 50 // move trigger to center of element
            })
                .setTween(tweenTwo)

                //.addIndicators({name: "GSAP"}) // add indicators (requires plugin)
                .addTo(controller2);

        }

        if ($('#texto3').length) {

            var tweenThree = TweenLite.to("#texto3", 0.2, {
                opacity: 1,
                y: '+=50',
                scale: 1,
                ease: Power4.easeInOut,
                onComplete: function () {

                    TweenLite.to("#texto3", 0.3, {
                        opacity: 0,
                        // y: '-=50',
                    });

                }
            });


            scene3 = new ScrollMagic.Scene({
                triggerElement: ".three .number",
                triggerHook: "onCenter", // show, when scrolled 10% into view
                duration: "80%", // use full viewport
                offset: 50 // move trigger to center of element
            })
                .setTween(tweenThree)

                //.addIndicators({name: "GSAP"}) // add indicators (requires plugin)
                .addTo(controller2);

        }



        if ($('#texto4').length) {


            var tweenFour = TweenLite.to("#texto4", 0.2, {
                opacity: 1,
                y: '+=50',
                scale: 1,
                ease: Power4.easeInOut,
                onComplete: function () {

                    TweenLite.to("#texto4", 0.3, {
                        opacity: 0,
                        // y: '-=50',
                    });

                }
            });



            scene4 = new ScrollMagic.Scene({
                triggerElement: ".four .number",
                triggerHook: "onCenter", // show, when scrolled 10% into view
                duration: "80%", // use full viewport
                offset: 0 // move trigger to center of element
            })
                .setTween(tweenFour)

                //.addIndicators({name: "GSAP"}) // add indicators (requires plugin)
                .addTo(controller2);


        }


        //share-open
        $(".share").mouseover(function () {
            $(this).addClass("share-open");
        }).mouseout(function () {
            $(this).removeClass("share-open");
        })

    } else {


        //share-open
        $(".share-img").on('click', function () {
            /*JJ: NATIVE SHARE */
            if (navigator.share != undefined){
                navigator.share({ title: "Citroën Centenario", url: window.location.href, text: "Buscá tu año" }).then(() => {
                  //alert('Thanks for sharing!');
                });
            }else{//FALLBACK
                if ($(".share").hasClass('share-open')) {
                    $(".share").removeClass("share-open");
                } else {
                    $(".share").addClass("share-open");
                }
            }
            /*NATIVE SHARE*/

            /*
            if ($(".share").hasClass('share-open')) {
                $(".share").removeClass("share-open");
            } else {
                $(".share").addClass("share-open");
            }
            */
        });


    }

    function amountscrolled() {
        var winheight = $(window).height()
        var docheight = $(document).height()
        var scrollTop = $(window).scrollTop()
        var trackLength = docheight - winheight
        pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
        //console.log(pctScrolled + '% scrolled')
        //$('#percent').text(pctScrolled + '%');
        $('.bar').css('width', pctScrolled + '%');

        if (!isMobile.any()) {
            if (pctScrolled > 85) {
                $('.next').addClass('appear-next');
                $('.walls-list').addClass('appear-list');
                $('.description').addClass('desc-fade');
            } else {
                $('.next').removeClass('appear-next');
                $('.walls-list').removeClass('appear-list');
                $('.description').removeClass('desc-fade');
            }
        }
    }


    function between(x, min, max) {
        return x >= min && x <= max;
    }

    $(window).on("scroll", function () {
        amountscrolled()
    })


    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    lastPathSegment = lastPathSegment.replace("", "");

    $('#iconText')(lastPathSegment);

    console.log('anio ' + lastPathSegment);



    if (lastPathSegment == 2019) {
            $('#year span')('1919');
            $('#year').attr('href', '1919');
    } else if (lastPathSegment >= 1919) {
        anio = ++lastPathSegment;
        $('#year span')(anio);
        $('#year').attr('href', anio + '');
    }

}

function destroyScrollMagic() {

    scene1.destroy();
    scene2.destroy();
    scene3.destroy();
    scene4.destroy();

}

if (page_ == historia || page_ == historia) {



    var swiper = startSwiper();
    update(swiper);

    // Reacomoda el drag a la posicion del numero si viene directamente al link del numero
    if (window.location.hash) {


        // Fragment exists
        var hash = window.location.hash.substring(1);
        var slide = calcSlide(hash);

        // console.log("slide: " + slide);

        $('.line').css('width', (slide - 0.5) + "%");
        $('.rs-label span').text((slide + 1919));
        $('.big-label').text((slide + 1919));


        // Le paso el slide y lo convierto en porcentaje y luego a pixeles para pasarselo al dragg
        slide = slide * 10;
        console.log('slide:' + slide);
        TweenLite.set("#thumbMarker", {
            x: percentToPixel($('#thumbMarker'), slide) + "px"
        });

    }


    // Cuando se hace el resize en la pantalla se reinicia el drag
    window.onresize = function (event) {


        // console.log()
        var swiper = startSwiper();
        update(swiper);
        // console.log("Slide: " + swiper.activeIndex);
        if (window.location.hash) {
            // Fragment exists
            var hash = window.location.hash.substring(1);
            // var slide = calcSlide(hash);

            var slide = swiper.activeIndex;
            console.log("slide: " + slide);

            $('.line').css('width', (slide - 0.5) + "%");
            $('.rs-label span').text((slide + 1919));
            $('.big-label').text((slide + 1919));


            // Le paso el slide y lo convierto en porcentaje y luego a pixeles para pasarselo al dragg
            slide = slide * 10;
            console.log('slide:' + slide);
            TweenLite.set("#thumbMarker", {
                x: percentToPixel($('#thumbMarker'), slide) + "px"
            });

        }


    };

    if (!isMobile.any()) {


        $('.filter-bt').on('click', function () {
            $('.filter-decades').toggleClass('open-filter');
        });

    } else {
        // $('.filter-bt').on('touch', function () {
        //     $('.filter-decades').toggleClass('open-filter');
        // });
    }



    //    $('.inner-filter ul li').on('click', function () {
    //        var dataId = $(this).attr("data-swipe");
    //
    //        //        TweenLite.to(
    //        //            $('#timeline'), .5, { opacity: 1 }, { opacity: 0} ,
    //        //            onComplete:
    //        //                function() {
    //        //                console.log('tween complete');
    //        //                swiper.slideTo(dataId);
    //        //                $('.filter-decades').removeClass('open-filter');
    //        //                TweenLite.to( $('#timeline'), .5, { opacity: 1})
    //        //                }}
    //        //        );
    //
    //        TweenLite.to($('#timeline'), .5, {
    //            autoAlpha: 0,
    //            onComplete: function () {
    //                console.log('tween complete');
    //                swiper.slideTo(dataId);
    //                $('.filter-decades').removeClass('open-filter');
    //            }
    //        });
    //
    //    });
}

function percentToPixel(_elem, _perc) {
    var value = (_elem.parent().outerWidth() / 1000) * parseFloat(_perc);
    console.log(value)
    return (value - 4);
}

if (page_ == 'detalle' || page_ == 'detalle') {
    // startSwiperDetalle();
    startScrollMagic();
}


if (page_ == 'index' || page_ == 'index' || page_ == '') {

    // initParallax(page_);
    // setMouse();
}


function fadeNumber() {

    const tweenNumber = new TimelineLite({
        pause: true
    });

    tweenNumber.set(".swiper-slide", {
        opacity: 0,
        scale: '-=0.3'
    });

    tweenNumber.to(".swiper-slide", .7, {
        opacity: 1,
        scale: 1
    });

    tweenNumber.play();


}






// GO TO SPECIFIC SLIDER


// GO TO SPECIFIC SLIDER



function loadDecadesMobile() {



    $('.filter-bt').on('click', function () {
        $('.filter-decades').toggleClass('open-filter');
    });



    $('.slide-1919').on('click', function () {

        fadeNumber();
        $(".filter-decades").removeClass('open-filter');
        swiper.slideTo(1, 1, false);

    });






    $('.slide-1929').click(function (e) {
        e.preventDefault();



        fadeNumber();
        $(".filter-decades").removeClass('open-filter');



        swiper.slideTo(10, 1, false);
    });



    $('.slide-1939').click(function (e) {
        e.preventDefault();



        fadeNumber();
        $(".filter-decades").removeClass('open-filter');



        swiper.slideTo(20, 1, false);
    });



    $('.slide-1949').click(function (e) {
        e.preventDefault();



        fadeNumber();
        $(".filter-decades").removeClass('open-filter');



        swiper.slideTo(30, 1, false);
    });



    $('.slide-1959').click(function (e) {
        e.preventDefault();



        fadeNumber();
        $(".filter-decades").removeClass('open-filter');



        swiper.slideTo(40, 1, false);
    });



    $('.slide-1969').click(function (e) {
        e.preventDefault();



        fadeNumber();
        $(".filter-decades").removeClass('open-filter');



        swiper.slideTo(50, 1, false);
    });



    $('.slide-1979').click(function (e) {
        e.preventDefault();



        fadeNumber();
        $(".filter-decades").removeClass('open-filter');



        swiper.slideTo(60, 1, false);
    });



    $('.slide-1989').click(function (e) {
        e.preventDefault();



        fadeNumber();
        $(".filter-decades").removeClass('open-filter');



        swiper.slideTo(70, 1, false);
    });



    $('.slide-1999').click(function (e) {
        e.preventDefault();



        fadeNumber();
        $(".filter-decades").removeClass('open-filter');



        swiper.slideTo(80, 1, false);
    });

    $('.slide-2009').on('click', function () {

        fadeNumber();
        $(".filter-decades").removeClass('open-filter');
        swiper.slideTo(90, 1, false);

    });

    // $('.slide-2009').click(function (e) {
    //     e.preventDefault();



    //     fadeNumber();
    //     $(".filter-decades").removeClass('open-filter');



    //     swiper.slideTo(90, 1, false);
    // });




    $('.slide-2019').click(function (e) {
        e.preventDefault();



        fadeNumber();
        $(".filter-decades").removeClass('open-filter');



        swiper.slideTo(100, 1, false);
    });

}


loadDecadesMobile();

function preload() {

    // $('img.lazyload').lazyload();
    $('#overlayer').removeClass('overlayer');
    $('#loader').removeClass('loader').fadeOut("slow");

}


// $.holdReady( true );



// $.holdReady( false );
$(window).on('beforeunload', function () {
    $('body').hide();

    $(window).scrollTop(0);
});


$(document).ready(function () {

    $('#overlayer').addClass('overlayer');
    $('#loader').addClass('loader');

    // Inserto GTM y DATALAYER

    setDataLayer();




    if ($('.barba-container').data('namespace') === 'detalle') {

        $("body").removeClass("add-overflow-y");
    }

    if ($('.barba-container').data('namespace') === 'homepage') {

        hideHeaderOnIndex();


    }

});

function onResizeReload(e = true) {


    var pathname2 = $(location).attr('pathname');
    var page2 = pathname2.substring(pathname2.lastIndexOf('/') + 1);
    console.log(page2);
    if (page2 === historia) {
        if (!isMobile.any()) {

            window.onresize = function () { location.reload(e); }
        }

    } else {

        window.onresize = function () { }
    }


    if (page2 === search) {
        window.onresize = function () { }
    }
}


onResizeReload();




$(window).load(function () {



    $('#overlayer').delay(200).animate({
        top: '-=150%'
    }, 1000);

    $('#overlayer').fadeOut();
    $('#loader').fadeOut();



    if ($('.barba-container').data('namespace') === 'homepage') {

        // $(".inHead").css({"display":"none"});

        animateIndex();

    }


    if ($('.barba-container').data('namespace') === 'detalle') {
        $(window).scrollTop(0, 0);
        setTimeout(function () {

            $("body").addClass("add-overflow-y");

        }, 1300);

        if (isMobile.any()) {

            animateDetalleMobile();
        }
        if (!isMobile.any()) {

            animateDetalle();

        }
        hideHeaderOnDetalil();

    }


    if ($('.barba-container').data('namespace') === 'historia') {

        changeSkyToDay();
        showHeader();
        animateTimeLine();
        animateMobileTimeLine();

    }

    if ($('.barba-container').data('namespace') === 'search') {

        $('.search-container').css({ "transform": "translateY(0%)" });


    }



    $('body').show();

});

function showHeader($delay = 3500) {

    if (isMobile.any()) {

        // On Detail
        $("header a").css({ "display": "initial", "opacity": 0 });
        $("header").css({ "opacity": 1 });
        $(".inHead a").animate({ opacity: 1 }, { duration: 2000, queue: false });

        $("header .ic-menu").css({ "opacity": 0 }).animate({ opacity: 1 }, 2000);
        $("header .ic-menu").animate({ opacity: 1 }, { duration: 200, queue: false });
        $("header .ic-menu").css({ "z-index": 99999 });




        $("header").css({ "background": "#fff", "box-shadow": "2px 0px 5px rgba(0,0,0,0.4)" });

        $("header").css({ "display": "initial" });

    }


    if (!isMobile.any()) {
        $("header").animate({ opacity: 1 }, "slow");
        $(".inHead").css({ "display": "block", "opacity": 0 });
        $(".inHead").animate({ opacity: 1 }, $delay);



    }
}

function showHeaderHome($newContainer, $delay = 3500) {

    if (isMobile.any()) {

        // On Home
        // var logo = $newContainer.querySelector('.linkLogo');
        // logo.style.opacity = "1";



        $("header .inHead a").css({ "opacity": 1 });
        $(".inHead a").animate({ opacity: 1 }, "slow");

        $("header").css({ "background": "#fff", "box-shadow": "2px 0px 5px rgba(0,0,0,0.4)" });
        $("header").css({ "display": "initial" }).animate({ opacity: 1 }, { duration: $delay, queue: false });

        $("header .ic-menu").animate({ opacity: 1 }, { duration: $delay, queue: false });
        $("header .ic-menu").css({ "display": "inline-block" });





    }


    if (!isMobile.any()) {

        $("header .ic-menu").animate({ opacity: 1 }, { duration: $delay, queue: false });
        $("header .ic-menu").css({ "display": "inline-block" });

        $(".inHead").css({ "display": "block" });
        $(".inHead").animate({ opacity: 1 }, $delay);



    }
}

function animateMobileTimeLine($delay = 1, $delay2 = 1.2) {


    if (isMobile.any()) {

        var numero = $('.numero');
        var decadasBoton = $(".filter-bt");

        TweenLite.set(numero, { scale: 0.6, opacity: 0});
        TweenLite.set(decadasBoton, {
            y: '120%'
        });
        // showHeader();
        TweenLite.to(numero, 1.5, {
            scale: 1, delay: 1, opacity: 1, rotation: 0.01,
            force3D: true });

        TweenLite.to(decadasBoton, 1.5, {
            y: '0%', delay: 1,
            rotation: 0.01,
            force3D: true
        },'-=0.5');

    }




}


function animateMobileTimeLineOut($delay = 2) {



    if (isMobile.any()) {

        var decadasBoton = $(".filter-bt");
        TweenLite.set(decadasBoton, {
            y: '0%',
            immediateRender: true
        });

        TweenLite.to(decadasBoton, 1, {
            y: '120%', $delay,
            immediateRender: true
        });


    }




}





function hideHeader() {



    if (isMobile.any()) {

        // $(".inHead a").css({"opacity":0});

        $("header").css({ "background": "none", "box-shadow": "none" });
        $("header .ic-menu").animate({ opacity: 0 }, 50);

        $("header .ic-menu").css({ "display": "none" });

        $(".close").css({ "z-index": 999 });

    }

    if (!isMobile.any()) {

        $(".inHead").animate({ opacity: 0 }, "slow");
        $(".inHead").css({ "display": "none" });


    }
}

function hideHeaderOnIndex() {



    if (isMobile.any()) {

        $("header .ic-menu").animate({ opacity: 0 }, "slow");
        // $("header .ic-menu").css({"opacity": 0});
        $("header").css({ "background": "none" });

        $('header')[0].style.setProperty('box-shadow', 'unset', 'important');


    }

    if (!isMobile.any()) {

        $("header .ic-menu").animate({ opacity: 0 }, "slow");
        $("header .ic-menu").css({ "display": "none" });

    }
}

function hideHeaderOnDetalil() {



    if (isMobile.any()) {

        $("header .ic-menu").animate({ opacity: 0 }, 50);
        $("header .ic-menu").css({ "z-index": -1 });

        $(".inHead a").animate({ opacity: 0 }, 50);
        $(".inHead a").css({ "display": "none" });

        $(".close").css({ "z-index": 999 });


        $("header").css({ "background": "none", "box-shadow": "none" });
        $("header").css({ "display": "none" });

    }

    if (!isMobile.any()) {

        $(".inHead").animate({ opacity: 0 }, "slow");
        $(".inHead").css({ "display": "none" });



    }
}

function animateTimeLineOut() {

    var timeline = $('.container-timeline');
    var numero = $('.numero');


    TweenLite.set(timeline, {
        y: '0%',
        immediateRender: true
    });
    TweenLite.set(numero, {
        scale: 1,
        autoAlpha: 1,
        immediateRender: true
    });
    TweenLite.set($('.big-label'), {
        opacity: 0,
        immediateRender: true
    });

    TweenLite.to(timeline, 1.5, {
        y: '200%',
        // delay: .5,
        ease: Power4.easeOut,


    });


    animateMobileTimeLineOut(2);
    TweenLite.to(numero, 1.3, {
        scale: 0.7,
        // delay: .5,
        autoAlpha: 0,
        ease: Power4.easeOut
    });






}

function openSearch() {

    // $("input [name = 'yearSearch']").val('');
    $("#yearSearch").val('');
    $(".error").empty();
    $('.inner-search button').prop("disabled", false);

    TweenLite.set(".search-container", {
        opacity: 0
    });

    TweenLite.to(".search-container", 0.8, {
        opacity: 1,
        y: '+=' + $(window).height(),
        ease: Power4.easeInOut,
    });

    animateTimeLineOut();

}

function closeSearch() {

    TweenLite.set(".search-container", {
        opacity: 1
    });


    TweenLite.to(".search-container", 0.8, {
        opacity: 0,
        y: '-=' + $(window).height(),
        ease: Power4.easeInOut
    });

    animateTimeLine(0.5);

}

function closeSearchToDetail(year) {


    var hrefSearch = document.location.href;
    //var pathSearch = hrefSearch.replace('search', '');
    var url = hrefSearch.replace('search', '') + year + '';

    Barba.Pjax.goTo(url);




}


$('.inner-search button').on('click', function () {
    $(this).prop("disabled", true);
});


function setDataLayer() {

    //$('body').append("<noscript><iframe src='//www.googletagmanager.com/ns?id=GTM-TJTKXW' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript> <script> (function(w, d, s, l, i)  w[l] = w[l] || []; w[l].push({'gtm.start': new Date().getTime(),event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src ='//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-TJTKXW'); </script>");
    // var $dataLayer = '<script>window.dataLayer = window.dataLayer || [];window.dataLayer.push({ "brand": "citroen", "country": "ar","event": "updatevirtualpath","formsName": "offer request","gtm.uniqueEventId": "null","language": "es","mainStepName": "'+page_+'","pageCategory": "'+ page_ +'","pageName": "'+ page_ +'", "pageVariant": "CITROËN 100 AÑOS", "siteFamily": "", "siteOwner": "central", "siteTarget": "B2C", "siteTypeLevel1": "cpp", "siteTypeLevel2": "promotion landing page index", "vehicleModelBodystyle": "1CM7A4", "vehicleModelBodystyleLabel": "", "vehicleVersionId": "","virtualPageURL": "' + window.location.href +'"}); </script>';
    // var $gtm = "<script> (function(w, d, s, l, i) { w[l] = w[l] || [];  w[l].push({  'gtm.start': new Date().getTime(),  event: 'gtm.js'  }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s),    dl = l != 'dataLayer' ? '&l=' + l : '';  j.async = true;  j.src =    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;  f.parentNode.insertBefore(j, f);   })(window, document, 'script', 'dataLayer', 'GTM-W84VK86');      </script> ";

    // $('head').append($gtm);
    // $('head').append($dataLayer);

    // var $body = "<noscript><iframe src='//www.googletagmanager.com/ns?id=GTM-TJTKXW' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript> <script> (function(w, d, s, l, i)  w[l] = w[l] || []; w[l].push({'gtm.start': new Date().getTime(),event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src ='//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-TJTKXW'); </script>";
    // $('body').append($body);



}

function validSearch() {

    // Numeric only control handler
    jQuery.fn.ForceNumericOnly =
        function () {
            return this.each(function () {
                $(this).keydown(function (e) {
                    var key = e.charCode || e.keyCode || 0;
                    // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
                    // home, end, period, and numpad decimal
                    return (
                        key == 8 ||
                        key == 9 ||
                        key == 13 ||
                        key == 46 ||
                        key == 110 ||
                        key == 190 ||
                        (key >= 35 && key <= 40) ||
                        (key >= 48 && key <= 57) ||
                        (key >= 96 && key <= 105));
                });
            });
        };

    $("#yearSearch").ForceNumericOnly();
    var isValid = document.getElementById('yearSearch').checkValidity();
    var input = $("#yearSearch").val();
    // var input = $("input [name = 'yearSearch']").val();
    console.log(isValid);
    console.log(input);




    if (isValid && input != "") {

        closeSearchToDetail(input);

    }

    if (isValid == false || input === "") {

        $(".error").empty();
        $(".error").append('Ingrese un numero valido');
        var input = "";

        $('.inner-search button').prop("disabled", false);

        $('#yearSearch').on('focus', function () {
            $(".error").empty();
            $("#yearSearch").val('');
        });

    }
}

//JJ CAMBIAR DINÁMICAMENTE LOS META TAGS
/*
$(document).ready(function () {
    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    lastPathSegment = lastPathSegment.replace("", "");

    $("meta[property='og:image']").attr("content", window.location.protocol + "//" + window.location.host + "/centenario/" + "img/" + lastPathSegment + "/share.jpg");
    $("meta[property='og:url']").attr("content", window.location.href);
});
*/

//SHARE JJ
function shareFacebook() {
                window.open("https://www.facebook.com/sharer/sharer.php?u="+window.location.href, "Compartí en Facebook", "width=600,height=400");
            }
function shareTwitter() {
    window.open("https://twitter.com/intent/tweet?text=Centenario Citroën&url="+window.location.href+"&hashtags=centenario,citroën", "Compartí en Twitter", "width=600,height=400");
}


// window.onresize = function () { location.reload(); }

// METAS


function setAllMetas() {

    document.getElementsByTagName('head').innerHTML = "";
    $('head')("");
    //META COMPATIBLE
    var meta = document.createElement('meta');
    meta.setAttribute('charset', 'UTF-8');
    document.getElementsByTagName('head')[0].appendChild(meta);

    //META COMPATIBLE
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'width=device-width, user-scalable=no, initial-scale=1.0');
    document.getElementsByTagName('head')[0].appendChild(meta);

    //META COMPATIBLE
    var meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'X-UA-Compatible');
    meta.setAttribute('content', 'ie=edge');
    document.getElementsByTagName('head')[0].appendChild(meta);

    //LINK ICON
    var link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    link.setAttribute('href', 'img/favicon.png');
    document.getElementsByTagName('head')[0].appendChild(link);


    //LINK ICON 2
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i,400,400i&display=swap');
    document.getElementsByTagName('head')[0].appendChild(link);

    //LINK ICON 3
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'css/estilos.css');
    document.getElementsByTagName('head')[0].appendChild(link);

    //LINK ICON 4
    var link = document.createElement('link');
    meta.setAttribute('rel', 'icon');
    meta.setAttribute('href', 'img/favicon.png');
    document.getElementsByTagName('head')[0].appendChild(link);

    //META DESCRIPTION
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Citroën: 100 años haciendo historia. Un siglo marcado por la creatividad y la tecnología.');
    document.getElementsByTagName('head')[0].appendChild(meta);

    //META OG:TITLE
    var meta = document.createElement('meta');
    meta.setAttribute('property', 'og:title');
    meta.setAttribute('content', 'Citroën: 100 años haciendo historia');
    document.getElementsByTagName('head')[0].appendChild(meta);

    //META OG:DESCRIPTION
    var meta = document.createElement('meta');
    meta.setAttribute('property', 'og:description');
    meta.setAttribute('content', 'Esto pasaba este año en Citroën y en el mundo #Citroen100Años. Conocé toda la historia en www.citroen.com.ar/centenario');
    document.getElementsByTagName('head')[0].appendChild(meta);

    //META OG:site_name
    var meta = document.createElement('meta');
    meta.setAttribute('property', 'og:site_name');
    meta.setAttribute('content', 'Centenario Citroën');
    document.getElementsByTagName('head')[0].appendChild(meta);

    //META og:locale
    var meta = document.createElement('meta');
    meta.setAttribute('property', 'og:locale');
    meta.setAttribute('content', 'es_AR');
    document.getElementsByTagName('head')[0].appendChild(meta);

    //META og:locale
    var meta = document.createElement('meta');
    meta.setAttribute('property', 'og:type');
    meta.setAttribute('content', 'website');
    document.getElementsByTagName('head')[0].appendChild(meta);

    //META og:url
    var meta = document.createElement('meta');
    meta.setAttribute('property', 'og:url');
    meta.setAttribute('content', window.location.href);
    document.getElementsByTagName('head')[0].appendChild(meta);


    //META og:url
    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    lastPathSegment = lastPathSegment.replace("", "");




}

function setMetasDetail() {

    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    lastPathSegment = lastPathSegment.replace("", "");

    // META SHARE
    var meta = document.createElement('meta');
    meta.setAttribute('property', 'og:image');
    meta.setAttribute('content', 'img/' + lastPathSegment + '/share.jpg');
    document.getElementsByTagName('head')[0].appendChild(meta);

    // META FACEBOOK
    var meta = document.createElement('meta');
    meta.setAttribute('property', 'fb:app_id');
    meta.setAttribute('content', '510210386430894');
    document.getElementsByTagName('head')[0].appendChild(meta);


    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.append('.marker{top:10px; }');
    document.getElementsByTagName('head')[0].appendChild(style);



}

// $('head')("");
// setAllMetas();
// setMetasDetail();