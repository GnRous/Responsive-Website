var menu = document.getElementsByClassName("menu");
var listMenu = document.getElementById("listMenu");

function tombolMenu() {
    listMenu.classList.toggle("aktif");
}

window.onclick = function(aksi) {
    if (!aksi.target.matches('.tombol-menu')) {
        for ( var i=0; i < menu.length; i++ ) {
            var tampilkanMenu = menu[i];
            if (tampilkanMenu.classList.contains('aktif')) {
                tampilkanMenu.classList.remove('aktif');
            }
        }
    }
}