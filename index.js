var openmenu = document.querySelector(".profile-menu-wrap");
function menuee(){
    openmenu.classList.toggle("open-menu");
}



var showMore =document.querySelector(".sidebar-activity");
var showmor =document.querySelector(".showmore")
function showmore(){
    showMore.classList.toggle("sidebar-activit");
    if(showMore.classList.contains("sidebar-activit")){
        showmor.innerHTML ="show less <b>-</b>";
    }
    else{
        showmor.innerHTML ="show more <b>+</b>";
    }
}