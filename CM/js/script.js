$(".icon").click(function() {
  $(this).toggleClass("open");
});

$(".nav-link").click(function(e) {
  e.preventDefault();
  $("a").removeClass("active");
  $(this).addClass("active");
});
