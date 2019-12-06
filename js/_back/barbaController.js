
document.addEventListener("DOMContentLoaded", function() {
// Barba.Pjax.start();
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
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
var lastClickEl;
var nextPage;

// URL

  var historiaHtml = "haciendo-historia";
  var indexHtml = "index";
  var searchHtml = "search"

Barba.Pjax.init();
Barba.Prefetch.init();

Barba.Dispatcher.on('linkClicked', function(el) {
  lastClickEl = el;

  if (el.namespace === 'homepage') {

      disableParallax();
      animateOutIndex();
  }




});

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));

      // this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */


     const prev = Barba.HistoryManager.prevStatus();

/*
    const t1 = new TimelineLite({
        pause: true
    });*/
     // var promise = $(this.oldContainer).animate({ opacity: 0 },600).promise();
     return new Promise((resolve, reject) => {


                  // console.log("Hola: " + prev.namespace);
                  if (prev.namespace == "homepage" ) {

                        animateOutIndex();
                        setTimeout(function(){
                          resolve();

                        },4000);

                  }

                  if (prev.namespace == "historia") {


                          resolve();



                  }

                  if (prev.namespace == "detalle") {


                          resolve();



                  }



           });

      // return $(this.oldContainer).animate({ opacity: 0 },600).promise();


  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */


    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();





    $('#main-illustration').css({"display":"none"});

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    TweenLite.to($el, .8, {
      opacity: 1,
      onComplete: function() {



        _this.done();

      }
    });



  }
});


// TO TIMELINE TRANSITION

var TimelineTransition = Barba.BaseTransition.extend({
    start: function() {
      this.newContainerLoading.then(this.shrinkImage.bind(this));
    },

    shrinkImage: function() {
      var _this = this;

      var timeline = this.newContainer.querySelector('.container-timeline');

      var newContainer = this.newContainer;


      TweenLite.set(timeline, { y: '200%', immediateRender: true});

      this.oldContainer.style.zIndex = '500';
      this.newContainer.style.visibility = 'visible';

      var illustration = this.oldContainer.querySelector('#main-illustration');
      var numero = this.newContainer.querySelector('.numero');

      var marker = this.newContainer.querySelector('.marker');
      marker.style.top = "-2px";

      // TweenLite.set(illustration, {autoAlpha: 1}); .container-timeline
      TweenLite.set(numero, { scale: 0.7, autoAlpha: 0, immediateRender: true});

      animateMobileTimeLine();
      // changeSky();

      TweenLite.to(illustration, 1.5, {
        y:'-100%',
        ease: Power4.easeOut,
        delay: 1.8, force3D: false,
        onComplete: function() {

         showHeaderHome(newContainer,800);
        _this.done();

        }
      },'-=1.2');

       TweenLite.to(timeline, 1.5, {
         y: '0%', force3D: false,
              ease: Power4.easeOut, delay:1.8


          });




      TweenLite.to(numero, 1.3, { scale: 1, autoAlpha: 1, delay: 1.8, force3D: false, ease: Power4.easeOut});




    }
  });






// FROM DETALLE TO TIMELINE

var TimelineTransition2 = Barba.BaseTransition.extend({
    start: function() {
      this.newContainerLoading.then(this.shrinkImage.bind(this));
    },

    shrinkImage: function() {
      var _this = this;

      var timeline = this.newContainer.querySelector('.container-timeline');


      TweenLite.set(timeline, { y: '200%', immediateRender: true});

      this.oldContainer.style.zIndex = '500';
      this.newContainer.style.visibility = 'visible';



      var numero = this.newContainer.querySelector('.numero');
      var decadasBoton = this.newContainer.querySelector('.filter-bt');

      TweenLite.set($('.big-label'), { opacity: 0, immediateRender: true});

      TweenLite.set($(this.oldContainer), { autoAlpha: 1, ease: Power4.easeOut});
      TweenLite.set(numero, { scale: 0.7, autoAlpha: 0, immediateRender: true});

      TweenLite.to($(this.oldContainer), 0.5, { autoAlpha: 0, force3D: false,  ease: Power4.easeOut});




      if (isMobile.any()) {
          showHeader();
          // animateMobileTimeLine(1);

        TweenLite.set(numero, { scale: 0.7, autoAlpha: 0, immediateRender: true });
        TweenLite.set(decadasBoton, {
          y: '120%',
          immediateRender: true
        });

        TweenLite.to($(this.oldContainer), 0.5, {
          autoAlpha: 0, force3D: false,  ease: Power4.easeOut,



             onComplete: function() {

                 _this.done();

             }

      });


      }

      if (!isMobile.any()) {

        showHeader();
        TweenLite.to($(this.oldContainer), 0.5, { autoAlpha: 0, force3D: false, ease: Power4.easeOut});

        // TweenLite.to(timeline, 1.5, {
        //         y:'0%',
        //         delay: 0.5,
        //         ease: Power4.easeOut,
        //                 onComplete: function() {




        //                 }


        //     });

        _this.done();


      }





      TweenLite.to(numero, 1.5, { scale: 1, delay: 0.5, autoAlpha: 1, force3D: false, ease: Power4.easeOut});

      TweenLite.to($('.big-label'), 0.1, { delay: 1, opacity: 1, force3D: false, immediateRender: true});



    }
  });



// TO HOME TRANSITION


var HomeTransition = Barba.BaseTransition.extend({
    start: function() {
      this.newContainerLoading.then(this.shrinkImage.bind(this));
    },

    shrinkImage: function() {
      var _this = this;

      var timeline = this.oldContainer.querySelector('.container-timeline');








      var illustration = this.newContainer.querySelector('#main-illustration');
      var numero = this.oldContainer.querySelector('#timeline');



      TweenLite.set(timeline, { y: '0%', immediateRender: true });
      TweenLite.set(numero, { scale: 1, autoAlpha: 1, immediateRender: true});

      // TweenLite.set(this.oldContainer.querySelector('.big-label'), { opacity: 0, immediateRender: true});
      // TweenLite.set(this.oldContainer.querySelector('.big-label-mobile'), { opacity:0, immediateRender: true});





      TweenLite.to(numero, 1.2, { scale: 0.7, autoAlpha: 0, force3D: false, ease: Power4.easeOut});

      TweenLite.to(timeline, 1.2, {
              y:'200%',
              ease: Power4.easeOut,
                force3D: false, onComplete:function () {
                  _this.newContainer.style.zIndex = '500';
                  _this.newContainer.style.visibility = 'visible';
                  _this.done();
                }

      });

      // hideHeader();


      // animateMobileTimeLineOut();
      animateIndexFromHistory();




    }
  });




var DetalleTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise.all([
        this.newContainerLoading
      ])
      .then(this.shrinkImage.bind(this));


    },

    shrinkImage: function() {
      var _this = this;


      var timeline = this.oldContainer.querySelector('.container-timeline');


      var newPage = $(this.newContainer);
      var description = this.newContainer.querySelector('.description');


      this.newContainer.style.zIndex = '500';


      var numero = this.oldContainer.querySelector('#timeline');

      var barbaWrapper = $('#barba-wrapper');

      const tl = new TimelineLite({

      });

      tl.set(timeline, { opacity: 1, y: '0%', immediateRender: true});
      tl.set(numero, { scale: 1, autoAlpha: 1, immediateRender: true});
      tl.set(description, {  opacity: 0, immediateRender: true});

      tl.set($('.big-label'), { opacity: 0, immediateRender: true});
      tl.set($('.big-label-mobile'), { opacity:0, immediateRender: true});



      if (searchtoDetail === true) {



            TweenLite.set(".search-container", {
                opacity: 1
            });

            tl.to(timeline, 0.5, {
                    y:'+200%',
                    opacity: 1,
              ease: Power4.easeOut, force3D: false,
            });

            TweenLite.to(".search-container", 0.8, {
                opacity: 0,
              y: '-=' + $(window).height(), force3D: false,
                ease: Power4.easeInOut, onComplete: function(){

                     $(_this.oldContainer).hide();




                         _this.newContainer.style.visibility = 'visible';
                       if (isMobile.any()) {

                         animateDetalleMobile(_this.newContainer, 0);

                       }

                       if (!isMobile.any()) {

                         // ANIMACION DE DETALLE AL VENIR DE HISTORIA/TIMELINE
                         tl.to(description, 1, { opacity: 1, force3D: false, immediateRender: true});
                         animateDetalle();

                       }
                       _this.done();
                       searchtoDetail=false;




                }
            });




      }



      if (searchtoDetail === false) {






            tl.to(timeline, 0.5, {
                    y:'+200%',
                    opacity: 1,
                    force3D: false,
                    ease: Power4.easeOut,
            });

            animateMobileTimeLineOut();
        tl.to(numero, 1, {
          scale: 0.7, autoAlpha: 0, force3D: false, ease: Power4.easeOut, onComplete: function(){


                _this.newContainer.style.visibility = 'visible';
              if (isMobile.any()) {

                animateDetalleMobile(_this.newContainer, 0);

              }

              if (!isMobile.any()) {

                // ANIMACION DE DETALLE AL VENIR DE HISTORIA/TIMELINE
                tl.to(description, 1, { opacity: 1, force3D: false, immediateRender: true});
                animateDetalle();

              }
              _this.done();



            } });





      }







    }
  });



var SearchTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise.all([
        this.newContainerLoading
      ])
      .then(this.shrinkImage.bind(this));


    },

    shrinkImage: function() {
      var _this = this;


      var timeline = this.oldContainer.querySelector('.container-timeline');

      var search = this.newContainer.querySelector('.search-container');

      var newPage = $(this.newContainer);

      this.newContainer.style.zIndex = '500';

      var numero = this.oldContainer.querySelector('#timeline');


      const tl = new TimelineLite({

      });

      tl.set(timeline, { opacity: 1, y: '0%', immediateRender: true});
      tl.set(numero, { scale: 1, autoAlpha: 1, immediateRender: true});

      tl.set($('.big-label'), { opacity: 0, immediateRender: true});
      tl.set($('.big-label-mobile'), { opacity:0, immediateRender: true});





      animateTimeLineOut();




      $("#yearSearch").val('');
      $(".error").empty();
      $('.inner-search button').prop("disabled",false);

      TweenLite.set(search, {
           y: "-100%"
      });
      this.newContainer.style.visibility = "visible";

      TweenLite.to(search, 0.8, {

          y: '+=' + $(window).height(),
        ease: Power4.easeInOut, force3D: false,  onComplete: function(){

            _this.done();
            onResizeReload();
          }
      });








    }
  });


// FROM SEARCH TO TIMELINE

var SearchTransitionOut = Barba.BaseTransition.extend({
    start: function() {
      this.newContainerLoading.then(this.shrinkImage.bind(this));
    },

    shrinkImage: function() {
      var _this = this;

      var search = this.oldContainer.querySelector('.search-container');
      var timeline = this.newContainer.querySelector('.container-timeline');

      TweenLite.set(timeline, { y: '200%', immediateRender: true});

      this.oldContainer.style.zIndex = '500';




      var numero = this.newContainer.querySelector('.numero');

      TweenLite.set($('.big-label'), { opacity: 0, immediateRender: true});

      TweenLite.set(numero, { scale: 0.7, immediateRender: true});


      TweenLite.set(search, {  y:"0%", ease: Power4.easeOut});

      this.newContainer.style.visibility = 'visible';

      if (isMobile.any()) {
          showHeader();
          animateMobileTimeLine(0.5);
          TweenLite.to(search, 1, {  y:"-100%", ease: Power4.easeOut,



             onComplete: function() {
                 _this.done();

             }

      });


      }

      if (!isMobile.any()) {

        showHeader();
        TweenLite.to(search, 1, { y:"-100%", ease: Power4.easeOut});



        TweenLite.to(timeline, 1, {
                y:'0%',
                delay: 0.1,
                ease: Power4.easeOut,
                        onComplete: function() {


                          _this.done();

                        }


            });


      }





      TweenLite.to(numero, 1.5, { scale:1, delay: 0.1, ease: Power4.easeOut});

       TweenLite.to($('.big-label'),0.1, { delay: 1, opacity: 1, immediateRender: true});



    }
  });



var SearchTransitionToDetail = Barba.BaseTransition.extend({
    start: function() {
      this.newContainerLoading.then(this.shrinkImage.bind(this));
    },

    shrinkImage: function() {
      var _this = this;

      var search = this.oldContainer.querySelector('.search-container');
      var description = this.newContainer.querySelector('.description');
      var numero = this.newContainer.querySelector('.first-number');
      // va

      this.oldContainer.style.zIndex = '500';


      TweenLite.set(search, {  y:"0%" });



          TweenLite.to(search, 1, {  y:"-100%", ease: Power4.easeOut,



             onComplete: function() {



                 $(_this.oldContainer).hide();





                   if (isMobile.any()) {
                     description.style.opacity = 0;
                     numero.style.opacity = 0;
                     _this.newContainer.style.visibility = 'visible';

                     animateDetalleMobile(_this.newContainer, 0);

                   }

                   if (!isMobile.any()) {
                    _this.newContainer.style.visibility = 'visible';
                     // ANIMACION DE DETALLE AL VENIR DE SEARCH

                     animateDetalle();

                   }

                   _this.done();

             }

      });


    }
  });



var DetalleTransitionToDetalle = Barba.BaseTransition.extend({
    start: function() {
      Promise.all([
        this.newContainerLoading
      ])
      .then(this.shrinkImage.bind(this));


    },

    shrinkImage: function() {
      var _this = this;





      var newPage = $(this.newContainer);





      TweenLite.to($(this.oldContainer), 0.5, { autoAlpha: 0, ease: Power4.easeOut, onComplete: function(){
      _this.newContainer.style.visibility = 'visible';
      _this.newContainer.style.zIndex = '500';

          if (isMobile.any()) {

            animateDetalleMobile(_this.newContainer, 0);
          }

          if (!isMobile.any()) {
            animateDetalle();
          }


          _this.done();
      }

    });






    }
  });




Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */
   var transitionObj = FadeTransition;
   var next = Barba.HistoryManager.currentStatus().url;
   var nextPage = next.substring(next.lastIndexOf('/') + 1);



  // FROM HOME TO HISTORIA
   if (Barba.HistoryManager.prevStatus().namespace === 'homepage') {

         disableParallax();
         animateOutIndex();
         return TimelineTransition;
    }

    // FROM HISTORIA TO DETALLE
    if (Barba.HistoryManager.prevStatus().namespace === 'historia' && nextPage != indexHtml && nextPage != searchHtml) {


              return DetalleTransition;


     }

     // FROM HISTORIA TO SEARCH
     if (Barba.HistoryManager.prevStatus().namespace === 'historia' && nextPage === searchHtml) {


               return SearchTransition;


      }


     // FROM SEARCH TO HISTORIA
  if (Barba.HistoryManager.prevStatus().namespace === 'search' && nextPage === historiaHtml ) {


             return SearchTransitionOut;

     }

     // FORM SEARCH TO DETALLE
     if (Barba.HistoryManager.prevStatus().namespace === 'search' && nextPage != historiaHtml ) {


             return SearchTransitionToDetail;

     }

     // FROM HISTORIA TO INDEX
     if (Barba.HistoryManager.prevStatus().namespace === 'historia' && nextPage === indexHtml) {


               return HomeTransition;



      }

     // FROM DETALLE TO DETALLE
     if (Barba.HistoryManager.prevStatus().namespace === 'detalle' && nextPage !== historiaHtml && nextPage !== searchHtml) {


            return DetalleTransitionToDetalle;

     }

     // FROM DETALLE TO HISTORIA
     if (Barba.HistoryManager.prevStatus().namespace === 'detalle' && nextPage === historiaHtml ) {


             return TimelineTransition2;

     }

      return FadeTransition;


};


Barba.Dispatcher.on('initStateChange', function (currentStatus) {

});


Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {


});

/// EJECUTAR JSs POR VISTAS
var Homepage = Barba.BaseView.extend({
  namespace: 'homepage',
  onEnter: function() {

      // The new Container is ready and attached to the DOM.

     setTimeout(function(){
        $('#main-illustration').css({"visibility":"visible"});
        $('#main-illustration').css({"display":"block"});

        changeSky();


      },800);



      setInterval(changeSky, 60 * 1000);

      // Se Inicializa el Parallax
      var pathname = $(location).attr('pathname');
      var page = pathname.substring(pathname.lastIndexOf('/') + 1);
      initParallax(page);
      hideHeaderOnIndex();

  },
  onEnterCompleted: function() {
    changeLogoToNightToBarba();
    onResizeReload();


  },
  onLeave: function() {
      // A new Transition toward a new page has just started.


  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.

  }
});

var Search = Barba.BaseView.extend({
  namespace: 'search',
  onEnter: function() {


    onResizeReload();
  },
  onEnterCompleted: function() {

    onResizeReload();
  },
  onLeave: function() {
      // A new Transition toward a new page has just started.
      $("body").removeClass("add-overflow-y");

  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.

  }
});

var Historia = Barba.BaseView.extend({
  namespace: 'historia',
  onEnter: function() {
      // The new Container is ready and attached to the DOM.

      var swiper = startSwiper();
      update(swiper);
      loadDecadesMobile();
      $("body").removeClass("add-overflow-y");


  },
  onEnterCompleted: function() {
      // The Transition has just finished.

    animateMobileTimeLine();
      $("body").removeClass("add-overflow-y");
      changeLogoToDay();
      onResizeReload();
    //ipadd
    if ($(window).width() <= 1025 || $(window).width() >= 1366) {

      console.log('hola ipad');
      var timeline = $('.container-timeline');
      TweenLite.set(timeline, {
        y: '200%', force3D: false,
        ease: Power4.easeOut


      });
      TweenLite.to(timeline, 1.5, {
        y: '0%', force3D: false, delay:1,
        ease: Power4.easeOut


      });
    }
      //ipadd
  },
  onLeave: function() {
      // A new Transition toward a new page has just started.

  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
  }
});

var Detalle = Barba.BaseView.extend({
  namespace: 'detalle',
  onEnter: function() {
      // The new Container is ready and attached to the DOM.

      hideHeaderOnDetalil();
      if (!isMobile.any()) {

          $('.first-number').css({'transform':'translateX(100%)'});
          $('.description').css({'transform':'translateY(120%)'});
      }


      if (isMobile.any()) {

          $('.first-number').css({'opacity':0});
          $('.description').css({'opacity':0});
      }

  },
  onEnterCompleted: function() {
    onResizeReload();
    if (!isMobile.any()) {

      // TweenMax.set($('.first-number'), {
      //     opacity: 0,
      //     x: '200%',
      // });


      // TweenMax.set($('.description'), {
      //     y: 500
      // });


    }

    if (isMobile) {

      $('.first-number').animate({opacity:1},"slow");
      $('.description').animate({opacity:1},"slow");


    }

      $("body").addClass("add-overflow-y");
      startScrollMagic();

  },
  onLeave: function() {
      // A new Transition toward a new page has just started.
      $("body").removeClass("add-overflow-y");
      var body = $("html, body");
      body.fadeOut(200,function(){

          body.stop().animate({scrollTop:0}, 1, 'swing');
      });
      var body = $("html, body");
      body.fadeIn(1);


  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.




  }
});


Homepage.init();
Historia.init();
Detalle.init();



});