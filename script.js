let menu=documnet.querySelector("#menu-icon");
let navlist=document.querySelector(".navlist");
menu.addEventListenner("click",function() {
navlist.classList.toggle("active");

});
window.onscroll=()=>{
    navlist.classList.remove("active");
}