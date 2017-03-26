$(function() {
  if(!localStorage)
    return;

  function href_scroll_restore() {
    if (localStorage['href-keep-scroll']) {
      console.log("href-keep-scroll restoring scroll top")
      $(window).scrollTop(localStorage['href-keep-scroll'])
      localStorage.removeItem('href-keep-scroll')
    }
  }

  href_scroll_restore() //no turbolinks case

  $(document).on("click", ".keep-scroll, .keep-scroll-top", function () {
    console.log("href-keep-scroll saving scroll top")
    localStorage['href-keep-scroll'] = $(window).scrollTop()
  })

  //page:load turbolinks:load - for turbolinks
  $(document).on('ready page:load turbolinks:load', function () {
    href_scroll_restore()
  });

})
