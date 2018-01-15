"use strict"
window.onload = perpareGallery;
function showPic(whichPic) {
    if (!document.getElementById("placeholder")) {
        return false;
    }
    var src = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName !== "IMG") {
        return false;
    }
    placeholder.setAttribute("src",src);
    if (document.getElementById("description")) {
        var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : '';
        var description = document.getElementById("description");
        if (description.firstChild.nodeType === 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function perpareGallery() {
    // 判断是否支持这两个方法....
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById("imagegallery")) {
        return false;
    }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this);
        }
    }
}