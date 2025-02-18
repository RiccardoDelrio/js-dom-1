const btn = document.querySelector('.btn')
const img = document.querySelector('.lamp')
let onFire = false
btn.addEventListener("click", function () {
    if (onFire) {
        btn.innerText = "Accendi"
        img.src = "./img/white_lamp.png"
    } else {
        btn.innerText = "Spegni"
        img.src = "./img/yellow_lamp.png"
    }
    onFire = !onFire;
})


