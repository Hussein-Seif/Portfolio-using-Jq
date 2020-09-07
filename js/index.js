
// let aboutOffset = $("#about").offset().left;
// $(window).scroll(()=>{
//     let windowScroll =$(window).scrollTop(); 

//     if (windowScroll > aboutOffset-50)
//     {
//         $("#main-nav").css("backgroundColor ","rgba(0,0,0,06");
//         $("#btnUp").fadeIn(500)
//     }
//     else{
//         $("#main-nav").css("backgroundColor ","blak ");
//         $("#btnUp").fadeIn(0)
//     }
// })
// $("#btnUp")


let aboutOffset = $("#about").offset().top;


$(window).scroll( ()=>{
    let windowScrollTop = $(window).scrollTop();
    if(windowScrollTop>aboutOffset-50)
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