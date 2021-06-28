$(".nav > ul > li").mouseover(function(){
//                    $(".nav > ul > li > .subMenu")
    $(this).find(".submenu").stop().slideDown(200);
});
$(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
});



var currentIndex = 0;

setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    }else{
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-360)+"px";
    $(".slidelist").animate({top: slidePosition}, 400);
}, 3000);



$(".line-over1").click(function(e){
    e.preventDefault();
    $(".tab-contlayer").show();
});
$(".tab-contlayer .close").click(function(e){
    e.preventDefault();
    $(".tab-contlayer").hide();
});
