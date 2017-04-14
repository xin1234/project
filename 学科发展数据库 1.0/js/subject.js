$(function(){
    'use strict';
    // click menu the nav show or hide
    $(".menu").on("click",function(){
		if($(this).hasClass("h")){
			$(this).removeClass("h");
		} else {
			$(this).addClass("h");
		}
	});
    
    $(".nav").on("click",function(){
        $(".menu").addClass("h");
    });//click on nav this nav display 
    
    
    //click on nav  scroll go to the appropriate location 
    $(".a").eq(0).on("click",function(){
        $("body").stop(true).animate({"scrollTop":0});
    })
    $(".a").eq(1).on("click",function(){
        $("body").stop(true).animate({"scrollTop":580});
    })
    $(".a").eq(2).on("click",function(){
        $("body").stop(true).animate({"scrollTop":850});
    })
    $(".a").eq(3).on("click",function(){
        $("body").stop(true).animate({"scrollTop":1010});
    })
    $(".a").eq(4).on("click",function(){
        $("body").stop(true).animate({"scrollTop":1380});
    })
    $(".a").eq(5).on("click",function(){
        $("body").stop(true).animate({"scrollTop":2300});
    })
    $(".a").eq(6).on("click",function(){
        $("body").stop(true).animate({"scrollTop":3400});
    })
    
    
    
    $(".back1").on("click",function(){
        $("body").stop(true).animate({"scrollTop":0},2000);
    })//back to top
  
    
    $(".font_1,.font_2").fadeIn(1000);
    $(window).scroll(function(){
        var w_t = $(window).scrollTop();
        if(w_t >0 && w_t <= 200){
            $(".font_1,.font_2").fadeIn(1000);//text fade-in
        }else if(w_t >400 && w_t <= 1100){
            $(".font_9,.data,.font_3").fadeIn(1000);
        }else if(w_t > 1000 && w_t <= 1380){
            $(".data1,.font_8").fadeIn(1000);
        }else if(w_t >2200 && w_t <= 3000){
            $(".base,p").fadeIn(1000);
        }else if(w_t >3000){
            $(".contact,.font_6,.address,.http,.icon").fadeIn(1000);
        }
    })
    
    $(".btn").on("click",function(){
        $(".map").fadeIn();
    })
    $(".closed").on("click",function(){
        $(".map").fadeOut();
    })
})