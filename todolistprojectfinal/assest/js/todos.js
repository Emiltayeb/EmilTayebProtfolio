$("ul").on("click","li", completed)

$("ul").on("click","span", deleted )


function completed() {
 $(this).toggleClass("completed")
}

function deleted(event){

  $(this).parent().fadeOut(500 , function(){
    $(this)
  });
  event.stopPropagation()


}

$("input[type='text']").keypress(function (event) { 
        
  if (event.which===13) {
    $("#demoTask").fadeOut(500)
    let todoText=$(this).val()
    $(this).val("") //clear input//
 
    //append//
    $("ul").append("<li> <span><i class=\"fas fa-trash-alt\"></i> </span> "+todoText+"</li>")
  }
});



$("#sign").on("click",fun)


function fun(){

  
  $("#sign").toggleClass("fa-minus fa-plus");
  $("input[type='text']").fadeToggle(300)



  }

  