$(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault();
      var animals = $("#animals").val();
      if(animals === "dog") {
        $(".dog-text").slideDown().addClass("showText");
        $(".turtle-text").removeClass("showText");
        $(".panda-text").removeClass("showText");
      } else if (animals === "turtle") {
        $(".turtle-text").slideDown().addClass("showText");
        $(".dog-text").removeClass("showText");
        $(".panda-text").removeClass("showText");
      }
      else {
        $(".panda-text").slideDown().addClass("showText");
        $(".dog-text").removeClass("showText");
        $(".turtle-text").removeClass("showText");
      };
    });
});
