setRandomClass();
setInterval(function () {
    setRandomClass();
}, 5000);

function setRandomClass() {
    var ul = $("ul");
    var items = ul.find("li");
    var number = items.length;
    var random = Math.floor((Math.random() * number));
    items.removeClass("special");
    items.eq(random).addClass("special");
}

$('a').mouseover( function(){
    $('body').addClass('invert');
});

$('a').mouseout( function(){
    $('body').removeClass('invert');
});