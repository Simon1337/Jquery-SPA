$(document).ready(function(){
  $("#header li a")
    .click(function(){ //on click
      $("#header li a").removeClass("active");
      $(this).addClass("active");
      if($(this).hasClass("hovering"))
        $(this).addClass("activehovering");

      $("#content").html(contentArray[$(this).text()]);
    })
    .hover(
      function(){ //on hover
        if(!$(this).hasClass("active"))
          $(this).addClass("hovering");
        else
          $(this).addClass("activehovering");
      },
      function(){ //on unhover
        $(this).removeClass("hovering").removeClass("activehovering");
    });
});
