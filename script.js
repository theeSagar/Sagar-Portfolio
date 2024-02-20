var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
var submitContact=document.querySelector("#submit-contact");


function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
    
}

submitContact.addEventListener("click",()=>{
    // alert(`Your Data saved !`)
    setTimeout(()=>{
alert("message sent !")
    },1000)
    // location.reload();
    form.reset()
    
})

