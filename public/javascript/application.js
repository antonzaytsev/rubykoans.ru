$(function(){

  // IE FIX for HTML5
  document.createElement('nav');
  document.createElement('header');
  document.createElement('section');

  $('body').append('<div id="top_line"></div>');

  $('a[rel=external]').click(function() {
    var newWindow = window.open($(this).attr('href'), '_blank');
    if(newWindow) { if(newWindow.focus) { newWindow.focus(); return false; } }
    newWindow = null;
  });

  $('#sidebar ol a').click(function(e) {
    e.preventDefault();
    var targetSection = $($(this).attr('href'));
    var scrollTo      = targetSection.offset().top;
    $('html,body').animate({scrollTop: scrollTo});
  });

  $('.email_address').each(function() {
    var address     = $(this).text().replace(' [at] ', '@').replace(' [dot] ', '.');
    var emailLink   = '<a href="mailto:' + address + '">' + address + '</a>';

    $(this).empty().append(emailLink);
  });

});
