let scrollToTop = document.getElementById("scrollToTop");

window.onscroll = function(){
    if(window.scrollY > 300) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
}

scrollToTop.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

if(atTop){
    scrollToBottom();
}
else{
    scrollToTop();
}