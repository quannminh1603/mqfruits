var images = [];
var index = 0;
var sohinh = 4;
for (var i = 0; i < sohinh; i++){
    images[i] = new Image();
    images[i].src = "./slide/" + i + ".jpg"
}

function next(){
    index++;
    if(index >= images.length) index = 0;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
}setInterval("next()", 2000);

function prev(){
    index--;
    if(index < 0) index = images.length - 1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
}