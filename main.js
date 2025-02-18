const btn = document.querySelectorAll('.btn')
const img = document.querySelectorAll('.lamp')
console.log(btn);

let onFire = false
/*
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

*/
for (let index = 0; index < btn.length; index++) {
    const element = btn[index];
    const imgEl = img[index]

    element.addEventListener("click", function () {
        console.log("ho cliccato");

        if (onFire) {
            element.innerText = "Accendi"
            imgEl.src = "./img/white_lamp.png"
        } else {
            element.innerText = "Spegni"
            imgEl.src = "./img/yellow_lamp.png"
        }
        onFire = !onFire;
    })

}