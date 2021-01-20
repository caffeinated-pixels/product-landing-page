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

  $('.burger-btn, .nav-link').on('click', event => {
    // $('.nav-list').toggleClass('open')
    $('.nav-list').slideToggle(250)
  })
}) //end of document ready
