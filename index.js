// carousel section
var swiper = new Swiper(".slider-container", {
    autoplay: {
         delay: 3000,
         disableOnInteraction: false,
       },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
       
     },
     navigation: {
       nextEl: ".swiper-button-next1",
       prevEl: ".swiper-button-prev1",
     },
   });




// counter 

document.addEventListener('DOMContentLoaded', function () {
  var fx = function () {
      var elements = document.querySelectorAll('.number');
      console.log(elements)
      elements.forEach(function (el) {
          var data = parseInt(el.dataset.n, 10);
          var props = {
              count: 0
          };
          var animate = function () {
            props.count += data / 100; // Assuming 100 steps for simplicity
            el.textContent = Math.floor(props.count);
        
            if (props.count < data) {
                requestAnimationFrame(animate);
            } else {
                el.textContent = data; // Set the final value to be exactly the target value
                if (el.dataset.sym !== undefined) {
                    el.textContent = el.textContent.concat(el.dataset.sym);
                }
            }
        };

          animate();
      });
  };

  var isElementInViewport = function (el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0
      );
  };

  var handleScroll = function () {
      var elements = document.querySelectorAll('.number');
      elements.forEach(function (el) {
          if (isElementInViewport(el) && !el.dataset.animated) {
              fx();
              el.dataset.animated = true; // Mark the element as animated to avoid redundant animations
          }
      });
  };

  window.addEventListener('scroll', handleScroll);
});
   

// testimonial slider

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// clients slider

var swiper = new Swiper(".client-slider-container", {
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    // when window width is >= 320px
    250: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    580: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 640px
    740: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    991:{
      slidesPerView: 5,
      spaceBetween: 10
    },
  },
});


// scroll up

// Get the button
var mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // mybutton.style.display = "flex";
        mybutton.style.right= '20px';
    } else {
        // mybutton.style.display = "none";
        
        mybutton.style.right= '-100px';
    }
}

mybutton.onclick = function() {
    topFunction();
};

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
