document.addEventListener("DOMContentLoaded", function() {
  let images = document.querySelectorAll(".lazyload");
  let active = false;

  // const lazyLoad = function() {
  //   if (active === false) {
  //     active = true;

  //     setTimeout(function() {
  //       new LazyLoad(images);
  //       active = false;
  //     }, 200);
  //   }
  // };


  const lazyLoad = function() {
    new LazyLoad(images, {
         root: null,
         rootMargin: "0px",
         threshold: 0
    });
  }

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});