$(document).ready(function(){
  // Footer
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn(800);
    } else {
      $('.scrollToTop').fadeOut(800);
    }
  });
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  // Locations
  $('.sd').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.nash, .aus, .newp, .jack').fadeOut(800);
    $('.sand').fadeIn(800);
    return false;
  });
  $('.na').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.aus, .newp, .jack, .sand').fadeOut(800);
    $('.nash').fadeIn(800);
    return false;
  });
  $('.np').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.nash, .aus, .jack, .sand').fadeOut(800);
    $('.newp').fadeIn(800);
    return false;
  });
  $('.au').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.nash, .newp, .jack, .sand').fadeOut(800);
    $('.aus').fadeIn(800);
    return false;
  });
  $('.jax').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.nash, .aus, .newp, .sand').fadeOut(800);
    $('.jack').fadeIn(800);
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

  // File Upload button
  document.getElementById('upload-alt').onchange = function () {
    document.getElementById('uploadFile').value = this.value;
  };
});
