
$(".map").click(function () {
    $("button").css("display", "block");
    $("button").css("margin","auto");
    $("button").css("margin-top","100px");
    $(".map").remove();
    $("h1").remove();
});
$(".steptwo").dblclick(function () {
    $(".tree").css("display", "block");
    $("div").before("<h1>You run into a clue that gives you a riddle to solve</h1>");
    $("div").before("<p>Black beards gold was hidden well. Hidden so well no one could tell. Not under a rock. Not under a dock. I cannot tell you where it could be. but the last person to see it said I'll just leaf it be.</p>");
    $(".riddle").append("<img class='cove' src='https://upload.wikimedia.org/wikipedia/commons/8/89/McWay_cove_1.jpg'> <img class='waterfall' src='https://ashevilletrails.com/wp-content/uploads/2018/04/waterfalls-near-asheville-under-two-miles-1024x683.jpg'>");
    $(".steptwo").remove();
});
$(".tree").click(function () {
    $(".b").css("display","block");
    $(".cove").remove();
    $(".tree").remove();
    $(".waterfall").remove();
    $("h1").remove();
    $("p").remove();
    $("body").before("<h1> Oh no! You ran into a boulder! Click on it to crush it</h1>");
});
$(".b").click(function () {
    $(".b").slideToggle();
    $("h1").remove();
    $(".chest").css("display","block");
    $("body").before("<h1> Click on the chest to collect your reward!!</h1>");
});
$(".chest").click(function () {
    $(".chest").toggle();
    $("h1").remove();
    $("body").append("<div class='reward'></div");
    $(".reward").append("<img src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpre00.deviantart.net%2F52c4%2Fth%2Fpre%2Ff%2F2017%2F288%2F5%2Fa%2Fpng_confetti_by_natalianaty5-dbqprcc.png&f=1'>");
    $(".reward").append("<h2> You just wasted your time!</h2>");
    $(".reward").append("<img src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpre00.deviantart.net%2F52c4%2Fth%2Fpre%2Ff%2F2017%2F288%2F5%2Fa%2Fpng_confetti_by_natalianaty5-dbqprcc.png&f=1'>");
    $("img").css("width","200px");
    $(".reward").css("display","flex");
    $(".reward").css("justify-content","spacearound");
});
