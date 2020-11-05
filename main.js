// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2cb157a5a05ab7c353b97a7baf7e8847
$(function() { //start document ready function
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top + -75
    }, 1000);
  }); // offsets anchor by 75px (size of the header) and adds in scroll animation 
}); //end of document ready
