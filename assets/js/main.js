(function($) {
  "use strict";

  $('.mobile__nav_btn').click(function() {
    $('.side__nav').toggleClass('active')
  })

  $('select').niceSelect();

  let trBtn = document.querySelectorAll('.job-Area tbody tr td .tab_opt')

  trBtn.forEach(trBtns => {
    trBtns.addEventListener('click', () => {
      trBtns.parentElement.parentElement.parentElement.parentElement.classList.toggle('active')
    })
  })


})(jQuery);
