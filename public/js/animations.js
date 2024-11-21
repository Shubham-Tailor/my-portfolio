/* -- Smooth Scrolling -- */

$('.btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate( {
      scrollTop: $(hash).offset().top
    }, 800);
  }
});

/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}


$('.open-overlay').click(function() {
  $('.open-overlay').css('pointer-events', 'auto');
  var overlay_navigation = $('.overlay-navigation'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');

  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {

    top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
    middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
    bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    overlay_navigation.velocity('transition.slideLeftIn', {
      duration: 300,
      delay: 0,
      begin: function() {
        $('nav ul li').velocity('transition.perspectiveLeftIn', {
          stagger: 150,
          delay: 0,
          complete: function() {
            $('nav ul li a').velocity({
              opacity: [1, 0],
            }, {
              delay: 10,
              duration: 140
            });
            $('.open-overlay').css('pointer-events', 'auto');
          }
        })
      }
    })

  } else {
    $('.open-overlay').css('pointer-events', 'none');
    top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
    middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
    bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    $('nav ul li').velocity('transition.perspectiveRightOut', {
      stagger: 150,
      delay: 0,
      complete: function() {
        overlay_navigation.velocity('transition.fadeOut', {
          delay: 0,
          duration: 300,
          complete: function() {
            $('nav ul li a').velocity({
              opacity: [0, 1],
            }, {
              delay: 0,
              duration: 50
            });
            $('.open-overlay').css('pointer-events', 'auto');
          }
        });
      }
    })
  }
})