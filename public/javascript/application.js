$(function(){
  document.createElement('header');
  document.createElement('section');

  $('body').append('<div id="top_line"></div>');

  $('a[rel=external]').click(function() {
    var newWindow = window.open($(this).attr('href'), '_blank');
    if(newWindow) { if(newWindow.focus) { newWindow.focus(); return false; } }
    newWindow = null;
  });

  $('#navigation ol a').click(function(e) {
    var section = $($(this).attr('href'));
    var scroll = section.offset().top - 50;
    $('html,body').animate({scrollTop: scroll});
    e.preventDefault();
  });

  $('.email_address').each(function() {
    var address     = $(this).text().replace(' [at] ', '@').replace(' [dot] ', '.');
    var emailLink   = '<a href="mailto:' + address + '">' + address + '</a>';

    $(this).empty().append(emailLink);
  });

});
