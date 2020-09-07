



let aboutOffset = $("#about").offset().top;
$(window).scroll( ()=>{
    let windowScrollTop = $(window).scrollTop();
    if(windowScrollTop> aboutOffset-50)
    {
      $("#main-nav").css("backgroundColor","rgba(0,0,0,0.5")
      $("#btnUp").fadeIn(500);
    }
    else
    {
        $("#main-nav").css("backgroundColor","transparent")
        $("#btnUp").fadeOut(500);

    }

})

$("#btnUp").click( ()=>{
    $("html,body").animate({scrollTop:'0'},1000); 
});


$("a[href^='#']").click( function(e){

    let linkHref = $(e.target).attr("href")
   
    let sectionOffset = $(linkHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},1000)

})


//start Box Color Animate 
let colorsWidth = $("#boxColor").innerWidth();
$("#colorToggle").click(function(){
  
   if(($("#opstion").css("left"))=="0px")
   {$(".color-item").fadeOut(500)
    $("#opstion").animate({left:`-${colorsWidth}`},1000)
   }   
  else
  {
    $("#opstion").animate({left:'0px'},1000,()=>{
        $(".color-item").show(500)
    })
  }
})
//end Box Color Animate 

//  start Box color Event

let colorItems = $(".color-item");

colorItems.eq(0).css("backgroundColor","#333");
colorItems.eq(1).css("backgroundColor","#09c");
colorItems.eq(2).css("backgroundColor","tomato");
colorItems.eq(3).css("backgroundColor","#fb3");

$(colorItems).click((e)=>{
 let myColor = $(e.target).css("backgroundColor");
 localStorage.setItem("userColor",myColor)
 $(".myColor").css("color",myColor)


})
if(localStorage.getItem("userColor")!=null)
{
    $(".myColor").css("color",localStorage.getItem("userColor"))
}

//  end Box color Event


// Start when document lodaing
$(document).ready(function(){
    $("#loading .sk-chase").fadeOut(500,
        function(){
            $("#loading").fadeOut(1000,function(){
                $("body").css("overflow",'auto');
            })  }  )
      $("#opstion").animate({left:`-${colorsWidth}`})
})
//End