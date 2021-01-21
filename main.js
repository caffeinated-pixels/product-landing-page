$(function() {
  //start document ready function

  // fn to offsets anchor scrolling by 75px (size of the header) and adds in a nice scroll animation
  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault()
    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top + -75
      },
      1000
    )
  })

  // click hander for burger btn and nav-links on smaller screens; toggles dropdown menu
  $('.burger-btn, .nav-link').on('click', event => {
    event.preventDefault()

    // check window size so only executed on smaller screens
    if ($(window).width() <= 1024) {
      $('.nav-list').slideToggle(250)
    }
  })

  // the click handler above adds a display style attr to .nav-list, which can cause problems when enlarging the window (i.e. the menu items dissappear!). This event listener removes that attr when window > 1024px
  $(window).resize(() => {
    if ($(window).width() > 1024) {
      $('.nav-list').removeAttr('style')
    }
  })
}) //end of document ready
