"use strict"
window.onload = function () {
    perpareGallery();
    preparePlaceholder();
};
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

function preparePlaceholder() {
    var img = document.createElement('img');
    img.setAttribute('src', 'http://via.placeholder.com/600x400?text=this%20is%20a%20default%20image');
    img.setAttribute('id', 'placeholder');
    var p = document.createElement('p');
    p.setAttribute('id', "description");
    var text = document.createTextNode('this is description.');
    p.appendChild(text);

    var imagegallery = document.getElementById('imagegallery');
    imagegallery.parentNode.insertBefore(img, imagegallery);
    imagegallery.parentNode.insertBefore(p, imagegallery);
}