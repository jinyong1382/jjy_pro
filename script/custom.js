$(".nav > ul > li").mouseover(function () {
    $(this).find(".submenu").stop().slideDown(200);
});
$(".nav > ul > li").mouseout(function () {
    $(this).find(".submenu").stop().slideUp(200);
});



$(".slidelist").children("div:gt(0)").hide();
var current = 0;

setInterval(function () {
    var next = (current + 1) % 3;
    $(".slidelist").find("div").eq(current).fadeOut();
    $(".slidelist").find("div").eq(next).fadeIn();
    current = next;
}, 3000);



$(".line-over1").click(function (e) {
    e.preventDefault();
    $(".tab-contlayer").show();
});
$(".tab-contlayer .close").click(function (e) {
    e.preventDefault();
    $(".tab-contlayer").hide();
});
