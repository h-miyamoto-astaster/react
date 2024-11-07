$(function(){
   $(".header__btn").click(function(){
      $(".header__btn .openbtn1").toggleClass("active");
      if($(".header-spmenu").hasClass("active")){
         $(".header-spmenu").removeClass("active");
      }else{
         $(".header-spmenu").addClass("active");
      }
   });
});