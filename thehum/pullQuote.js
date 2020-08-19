$(function () {
    count = 0;
    wordsArray = [
        "It's a bit like a faint whirring sound as if a washing machine is constantly struggling with a heavy load in a small room not too far away.", 
        "Low droning, like a large engine idling. Sometimes you can feel the vibration from it.", 
        "low frequency drone, consistent frequency. Amplitude goes up and down a little.", 
        "A low hum that resonates inside your head like the sound of electricity humming or a fan set on high.",
        "Low rumbling or just a strange sound, like distant thunder or possibly a jet, though I am in an area with no planes. Lasts for 10-15 seconds."
    ];

    setInterval(function () {
      count++;
      $("#pullQuote").fadeOut(200, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(200);
        $(".timer::after").css("animation", "timer");
      });
    }, 20000);
});


$("#inf-trigger").click( function(){
  $("aside.inf").removeClass("hidden");
  $("aside.tin").addClass("hidden");
  $(this).addClass("close");
});

$("#tin-trigger").click( function(){
  $("aside.tin").removeClass("hidden");
  $("aside.inf").addClass("hidden");
  $(this).addClass("close");
});

$(".vizPosition svg").click( function(){
  $("aside").addClass("hidden");
});