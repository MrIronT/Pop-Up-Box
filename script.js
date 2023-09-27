modelBox = document.getElementById("modelBox");
document.onmouseleave = function(){
    modelBox.classList.remove('hidden');
}

const close = document.getElementById("close")
close.onclick = function(){
    modelBox.classList.add('hidden');
}