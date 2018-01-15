"use strict"
window.onload = perpareGallery;
function showPic(whichPic) {
    var src = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",src);
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}
function perpareGallery() {
    // 判断是否支持这两个方法.... 好多余啊..
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementsByTagName) {
        return fasle;
    }
    if (!document.getElementById("imagegallery")) {
        return fasle;
    }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showPic(this);
            return false;
        }
    }
}