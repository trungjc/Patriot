$(document).ready(function () {
           
   $('.gallery-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow:$("#next-btn"),
      prevArrow:$("#prev-btn"),
      responsive:[
           {
              breakpoint: 1200,
              settings: {
              slidesToShow: 3,
              }
            },
             {
              breakpoint: 991,
              settings: {
              slidesToShow: 4,
              }
            },
            {
              breakpoint: 767,
              settings: {
              slidesToShow: 2,
              }
            }
      ]
    });
   
   $("#step-control-1").click(function(){
        $(".tab").removeClass("active");
        if(!$(this).hasClass("active")){
            $(".step-control li").removeClass("active");
            $(this).addClass("active");
        }
        
        $("#product-media").removeClass("fadeInLeft");
        setTimeout(function(){
            $("#product-media").addClass("fadeInLeft");
        },200);
        
        if(!$("#product-media").hasClass("fadeInLeft")){
            $("#product-media").addClass("fadeInLeft");
        }
        
        var reelContainer = $("#product-image-reel");
        if(!$("#step-1").hasClass("active")){
            $("#step-1").addClass("active");
        }
        if(reelContainer.hasClass("image-hidden")){
            $("#product-image-reel").removeClass("image-hidden");
            $("#product-image").removeClass("image-hidden");
            $("#step-images").addClass("image-hidden");
        }

       
        
   });

   
   var timer;
    $(".step-control ul li.static-images").click(function(event){
        $("#step-images").attr('src', 'images/Center/1.jpg');
       
        if(timer){
            clearInterval(timer);
        }
        var reelContainer = $("#product-image-reel");
        if(!reelContainer.hasClass("image-hidden")){
            $("#product-image-reel").addClass("image-hidden");
            $("#product-image").addClass("image-hidden");
            $("#step-images").removeClass("image-hidden");
        }
        $("#product-media").addClass("fadeInLeft");
        $(".tab").removeClass("active");
        $(".step-control li").removeClass("active");
        $(this).addClass("active");
        var tabId = $(this).attr('data-toggle');
        $("#"+tabId).addClass("active");

         var i=2;
         setTimeout(function(){ 
            $("#product-media").removeClass("fadeInLeft");
                timer = setInterval(function(){ 
                if(i<20){
                    $("#step-images").attr('src', 'images/Center/'+ i +'.jpg');
                }
                else{
                    $("#product-media").removeClass("fadeInLeft");
                    clearInterval(timer);
                    
                }
                
                i++;
            }, 200);
        }, 1000);
         
        
    });

    $(".fancybox").fancybox({
        openEffect  : 'none',
        closeEffect : 'none'
    });

    /*Mobile Main navigation*/
    $("#mobile-control").click(function(){
       $("#main-navigation").slideToggle();
    });
})
