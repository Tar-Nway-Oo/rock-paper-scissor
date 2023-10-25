$(".main").hide();

$(".dark-mode").on("click", () => {
  $(".container").toggleClass("dark");
});

$(".start").on("click", () => {

  if ($(".input").val().toLowerCase() === "zac") {
    $(".main").fadeIn(1000, () => {
      $(".start").fadeOut();
    });

    $(".warning").fadeOut();
  } else {
    $("<h3>Wrong User</h3>").addClass("warning").appendTo("body");
  }

});
