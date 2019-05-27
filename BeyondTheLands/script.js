
let logoImg=document.getElementById("nav-logo")
let sidebar=document.getElementById("mySidebar")

$(logoImg).mouseover(function(){


  $(".sidebar").addClass("openNav")
  $(".sidebar").toggleClass("showNav")
  $("#main-content").toggleClass("blur")
})



$(".sidebar").mouseleave(function(){

$(".sidebar").toggleClass("showNav")
$("#main-content").toggleClass("blur")

})







