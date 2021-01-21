$(function() {
  //start document ready function
  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault()
    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top + -75
      },
      1000
    )
  }) // offsets anchor by 75px (size of the header) and adds in scroll animation

  $(window).resize(() => {
    if ($(window).width() > 1024) {
      $('.nav-list').removeAttr('style')
    }
  })

  $('.burger-btn, .nav-link').on('click', event => {
    // $('.nav-list').toggleClass('open')
    event.preventDefault()

    if ($(window).width() <= 1024) {
      $('.nav-list').slideToggle(250)
    }
  })
}) //end of document ready
