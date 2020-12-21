document.getElementById("timeout").addEventListener("click", function (){
    setTimeout(function () {
        let div1 = document.createElement("div");
        div1.style.backgroundColor = "turquoise";
        div1.style.border = "3px solid chartreuse";
        div1.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !"
        document.getElementById("timeout-div").appendChild(div1);
    }, 2000);
});

let interval1;
let decompte = 0;
document.getElementById("interval-start").addEventListener("click", function () {
    interval1 = setInterval(function () {
        if(decompte <= 60) {
            let div2 = document.createElement("div");
            document.getElementById("interval-div").appendChild(div2);
            decompte ++
        }
    }, 6000);
});

document.getElementById("interval-stop").addEventListener("click",function () {
    clearInterval(interval1);
})