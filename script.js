let fName = document.getElementById("firstName")
let lName = document.getElementById("lastName")
let eMail = document.getElementById("email")
let msg = document.getElementById("msg")

let subBtn = document.getElementById("sub")
let resetBtn = document.getElementById("reset")

resetBtn.addEventListener("click",function() {
    fName.value= ""
    lName.value=""
    eMail.value=""  
     msg.value=""
})
subBtn.addEventListener("click",function(){
    localStorage.setItem("First-Name",fName.value)
    localStorage.setItem("Last-Name",lName.value)
    localStorage.setItem("Email",eMail.value)
    localStorage.setItem("Message",msg.value)

})
