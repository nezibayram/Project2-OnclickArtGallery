function func(image){
    var p = document.getElementById('p');
    p.src = image.src;
    p.parentElement.style.display = "block";
}

function showProperties(element){
document.getElementById('message').innerHTML = element.alt;
}