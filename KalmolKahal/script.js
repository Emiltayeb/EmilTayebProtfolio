let btn=document.querySelector("#button");
let checkbox=document.querySelectorAll(`input[type="checkbox"]`)
let secondCheckbox=checkbox[1]
let thirCheckbox=checkbox[2]
let onetogo="מעולה. מה עוד צריך לזכור?"

function myFunction() {

  btn.value="הטופס נשלח בהצלחה!"
  btn.style.backgroundColor="green"
  btn.style.color="white"
  event.preventDefault()
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

$(".far").mouseover(function(){
  console.log($(this))
 $(this).toggleClass("far fas ")
})

$("#learnd").on("click","input",function(){
  $(this).parent().toggleClass("checked")
  

})


$(checkbox).first().click(function(){
  // $("#learnd li:first ").append(` <span> `+onetogo+`</span>`)
 
  $("#feedback_text-1").toggle(this.checked);
})

$(secondCheckbox).click(function(){
  // $("#learnd li:first ").append(` <span> `+onetogo+`</span>`)
 
  $("#feedback_text-2").toggle(this.checked);
})

$(thirCheckbox).click(function(){
  // $("#learnd li:first ").append(` <span> `+onetogo+`</span>`)
 
  $("#feedback_text-3").toggle(this.checked);
})

