$(document).ready(function(){
  // Footer
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  // Locations
  $('.sd').on('click', function () {
    $(".our-locations").css({
      "background": "linear-gradient(rgba(194, 139, 84, 0.7), rgba(194, 139, 84, 0.7)), url('../images/sandiego.jpg') top center no-repeat",
      "background-size": "cover"
    });
    $(this).toggleClass('active').siblings().removeClass('active');
    return false;
  });
  $('.na').on('click', function () {
    $(".our-locations").css({
      "background": "linear-gradient(rgba(64, 112, 160, 0.7), rgba(64, 112, 160, 0.7)), url('../images/nashville.jpg') top center no-repeat",
      "background-size": "cover"
    });
    $(this).toggleClass('active').siblings().removeClass('active');
    return false;
  });
  $('.np').on('click', function () {
    $(".our-locations").css({
      "background": "linear-gradient(rgba(88, 158, 166, 0.7), rgba(88, 158, 166, 0.7)), url('../images/newportbeach.jpg') top center no-repeat",
      "background-size": "cover"
    });
    $(this).toggleClass('active').siblings().removeClass('active');
    return false;
  });
  $('.au').on('click', function () {
    $(".our-locations").css({
      "background": "linear-gradient(rgba(178, 63, 59, 0.7), rgba(178, 63, 59, 0.7)), url('../images/austin.jpg') top center no-repeat",
      "background-size": "cover"
    });
    $(this).toggleClass('active').siblings().removeClass('active');
    return false;
  });
  $('.jax').on('click', function () {
    $(".our-locations").css({
      "background": "linear-gradient(rgba(179, 154, 36, 0.7), rgba(179, 154, 36, 0.7)), url('../images/jacksonville.jpg') top center no-repeat",
      "background-size": "cover"
    });
    $(this).toggleClass('active').siblings().removeClass('active');
    return false;
  });

  // Mobile Nav
  $('.ui.modal.mobile-nav')
    .modal('attach events', '.mobile-btn', 'show')
  ;

  // Form Modal
  $('.ui.modal.form')
    .modal('attach events', '.form-btn', 'show')
  ;

  // toggle buttons
  $('.toggle-btn').click(function () {
    $(this).toggleClass('active');
  });
});
