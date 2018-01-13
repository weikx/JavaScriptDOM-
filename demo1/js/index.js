function showPic(whichPic) {
    var src = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",src);
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}