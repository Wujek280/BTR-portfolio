     'use strict';


$(function(){
   
   var output = $(window).scrollTop();
   console.log(output);
   
$("#bar").addClass("scrool");

   $(document).scroll(function() { 
      
      if($(window).scrollTop() !== 0) {
         console.log("hedaer.js >> rest");
         
         $("#bar").addClass("scrool");
         
         $(".navbar-default").css("animation","0.3s 'background-color'");
         $(".navbar-default").css("background-color","ivory");
         $(".navbar-default").css("border-bottom","1px solid #1ac056");
         $(".navbar-nav>li>a:hover").css("color","black");
         $(".navbar-nav>li>a").css("color","#1ac056");
  
      }else{
         console.log("hedaer.js >> top");
         
         $("#bar").removeClass("scrool");
         
         $(".navbar-default").css("animation","0.3s 'background-color'");
         $(".navbar-default").css("border-bottom","none");
         $(".navbar-default").css("background-color","transparent");
         $(".navbar-default").css("color","white");
         $(".navbar-nav>li>a").css("color","white");
         $(".navbar-nav>li>a:hover").css("color","#1ac056");

      }
   });

});
