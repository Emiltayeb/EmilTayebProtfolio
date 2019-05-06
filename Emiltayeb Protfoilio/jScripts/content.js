let btn=document.querySelector("#button")

btn.addEventListener("click", Send)




function Send (e){

  btn.textContent="נשלח!"
  btn.style.backgroundColor="white"
  btn.style.color="#529FCC"

  event.preventDefault()

}