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

    setTimeout(function(){ 
         $("#product-media").removeClass("fadeInLeft");
              
     }, 400);
   
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
      $("#product-media").removeClass("fadeInLeft");
       $("#product-media").addClass("fadeInLeft");
       var tabId = $(this).attr('data-toggle');
       var folder = "Step2";
        
         switch(tabId){
           case "step-2":
              folder = "Step2";
              break;
            case "step-3":
              folder = "Step3";
              break;
            case "step-4":
              folder = "Step4";
              break;
            case "step-5":
              folder = "Step5";
              break;

         }
         $("#step-images").attr('src', 'images/'+folder+'/1.jpg');
        if(timer){
            clearInterval(timer);
        }
        var reelContainer = $("#product-image-reel");
        if(!reelContainer.hasClass("image-hidden")){
            $("#product-image-reel").addClass("image-hidden");
            $("#product-image").addClass("image-hidden");
            $("#step-images").removeClass("image-hidden");
        }
        $(".tab").removeClass("active");
        $(".step-control li").removeClass("active");
        $(this).addClass("active");
        
        $("#"+tabId).addClass("active");

         var i=1;
         
         setTimeout(function(){ 
             $("#product-media").removeClass("fadeInLeft");
                timer = setInterval(function(){ 
                if(i<20){
                    $("#step-images").attr('src', 'images/'+folder+'/'+ i +'.jpg');
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
