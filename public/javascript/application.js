function iPhone() {
  return (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i));
}

$(function(){

  $('body').append('<div id="top_line"></div>');

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

  var sections = [];
  $('#main_content .koans_section').each(function(){
      sections.push($(this).offset().top);
  });

  function highlightSection(i) {
    $('#sidebar ol li')
      .css('font-weight', 'normal')
      .eq(i).css('font-weight', 'bold');
  }

  function currentIndex() {
    var scrollPosition = $(window).scrollTop(),
        i=0,
        inSection = false;

    while(!inSection) {
      i++;
      if(sections[i-1] > scrollPosition) {
        i = 1;
        inSection = true;
      } else if (scrollPosition >  sections[sections.length-1]) {
        i = sections.length;
        inSection = true;
      } else {
        inSection = sections[i-1] <= scrollPosition && scrollPosition < sections[i];
      }
    }

    return i-1;
  }

  highlightSection(currentIndex());

  $(window).scroll(function() {
    highlightSection(currentIndex());
  });
});
