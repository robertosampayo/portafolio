
document.addEventListener("DOMContentLoaded", function() {


        // URL

          var historiaHtml = "haciendo-historia";
          var indexHtml = "home";
          var searchHtml = "search"

          var historiaNH = "haciendo-historia";
          var indexNH = "home";
          var searchNH = "search"





         

          var FadeTransition = Barba.BaseTransition.extend({
            start: function() {
              /**
               * This function is automatically called as soon the Transition starts
               * this.newContainerLoading is a Promise for the loading of the new container
               * (Barba.js also comes with an handy Promise polyfill!)
               */

              // As soon the loading is finished and the old page is faded out, let's fade the new page
              Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
            },

            fadeOut: function() {
              /**
               * this.oldContainer is the HTMLElement of the old Container
               */

              return $(this.oldContainer).animate({ opacity: 0 }).promise();
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

              $el.css({
                visibility : 'visible',
                opacity : 0
              });

              $el.animate({ opacity: 1 }, 400, function() {
                /**
                 * Do not forget to call .done() as soon your transition is finished!
                 * .done() will automatically remove from the DOM the old Container
                 */

                _this.done();
              });
            }
          });

          /**
           * Next step, you have to tell Barba to use the new Transition
           */





          Barba.Pjax.getTransition = function() {
            /**
             * Here you can use your own logic!
             * For example you can use different Transition based on the current page or link...
             */

            return FadeTransition;
          };



          var About = Barba.BaseView.extend({
            namespace: 'about',
            onEnter: function() {

              animateAbout();
              activeParallax();
              hoverHead();
              $('.sobremi').css({'pointer-events':"none"});
              $('body').css({'overflowY':'hidden'});
              $('.imagenes-home').css({'pointer-events':'none'});
              $('.imagenes>img').css({'opacity':0});
            },
            onEnterCompleted: function() {
            
              hoverHoyVideo();

            },
            onLeave: function() {
           

            },
            onLeaveCompleted: function() {
                // The Container has just been removed from the DOM.
                $('.sobremi').css({'pointer-events':"all"});
            }
          });


          var Home = Barba.BaseView.extend({
            namespace: 'home',
            onEnter: function() {

                


                animateIndex();
                startMarquee();
                generatePhrases();

                activeParallax();
                hoverBigText();
                
                hoverHead();

                $('.roberto').css({'pointer-events':"none"});
                $('.imagenes>img').css({'opacity':0});
                startHoverEffect();
                $('body').css({'overflowY':'hidden'});
                $('.imagenes-home').css({'pointer-events':'all', 'zIndex': 9999});
            },
            onEnterCompleted: function() {
            
                
                

            },
            onLeave: function() {
                $('.imagenes-home').css({'zIndex':0, 'pointer-events':'none'});

            },
            onLeaveCompleted: function() {
                // The Container has just been removed from the DOM.
                $('.roberto').css({'pointer-events':"all"});
            }
          });

          var Work = Barba.BaseView.extend({
            namespace: 'work',
            onEnter: function() {

              animateWork();
              activeParallax();
              hoverWork();
              hoverHead();
              $('.proyecto').css({'pointer-events':"none"});
              $('.imagenes').css({'opacity':1});
              $('.imagenes>img').css({'opacity':0});
               $('body').css({'overflowY':'hidden'});
               $('.imagenes-home').css({'pointer-events':'none'});
              
            },
            onEnterCompleted: function() {
            


            },
            onLeave: function() {
           
              $('.imagenes-home').css({'zIndex':9999})
            },
            onLeaveCompleted: function() {
                // The Container has just been removed from the DOM.
                $('.proyecto').css({'pointer-events':"all"});
            }
          });

  
          var Detalle = Barba.BaseView.extend({
            namespace: 'detalle',
            onEnter: function() {
                animateIndex();
                activeParallax();
                hoverBigText();
                hoverHead();
                startMarquee();

                generatePhrases();


                $('.imagenes-home').css({'pointer-events':'none'});
                
                $('.detalle').css({'pointer-events':"none"});
                
                
                $('.imagenes').css({'opacity':1});
            },
            onEnterCompleted: function() {
              
       

                

            },
            onLeave: function() {
             

            },
            onLeaveCompleted: function() {
                // The Container has just been removed from the DOM.
                $('.detalle').css({'pointer-events':"all"});
                $('.imagenes>img').css({'opacity':0});



            }
          });




          Barba.Pjax.init();
          Barba.Prefetch.init();

          Home.init();
          About.init();
          Work.init();
         

});