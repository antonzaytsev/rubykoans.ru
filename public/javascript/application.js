function iPhone() {
  return (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i));
}

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
    if(iPhone()) { return; }

    e.preventDefault();
    var targetSection = $($(this).attr('href'));
    var scrollTo      = targetSection.offset().top;
    $('html,body').animate({scrollTop: scrollTo});
  });

  $('.email_address').each(function() {
    var address   = $(this).text().replace(' [at] ', '@').replace(' [dot] ', '.');
    var emailLink = '<a href="mailto:' + address + '">' + address + '</a>';

    $(this).replaceWith(emailLink);
  });


  var BWLogo = $('#edgecase_bw');
  BWLogo.before("<img src='/images/edgecase_logo.gif' id='edgecase_color' alt='EdgeCase'>");

  $('#edgecase_logo').hover(function() {
    BWLogo.stop().fadeOut(200);
  }, function() {
    BWLogo.stop().fadeIn(200);
  });

  var logo = document.getElementById('edgecase_logo');
      logo.ontouchstart = function() { BWLogo.stop().fadeOut(200); }
      logo.ontouchend   = function() { BWLogo.stop().fadeIn(200);  }

});
