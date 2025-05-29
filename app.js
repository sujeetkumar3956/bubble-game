
// let rn;
// let score = 0;
// let rn;
// let score = 0;
// let heading = document.querySelector("#head");
// var score = 0;

function makeBubble() {
    // let rn;


    let clutter = "";
    for (i = 0; i <= 170; i++) {
        let random = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${random}</div>`

    }
    document.querySelector(".p-bottom").innerHTML = clutter;
}
makeBubble()
// function hitval() {
//     rn = Math.floor(Math.random() * 10);
//     document.querySelector("#hitvalue").textContent = rn;
//     console.log(rn)
// }
// document.querySelector(".p-bottom").addEventListener("click", function (dets) {
//     let target = (Number(dets.target.textContent));
//     if (rn == target) {
//         console.log("hello brother");
//         score += 10;
//         document.querySelector("#score").textContent = score;
//         makeBubble();
//         hitval();
//         heading.style.color = "white";
//         heading.textContent = "Bubble Game";
//     }
//     else {
//         console.log("hello bhayiyon")
//         console.log(rn)
//         heading.textContent = "please choose correct button";
//         score -= 10;
//         document.querySelector("#score").textContent = score;
//         // document.querySelector("#head").color = red;
//         // document.querySelector(".main").style.background = red;

//     }
// })
// var timer = 60;
// function runtimer() {
//     let runTimer = setInterval(function () {
//         if (timer > 0) {
//             timer--;
//             document.querySelector("#timer").textContent = timer;
//         }
//         else {
//             clearInterval(runTimer);
//             document.querySelector(".p-bottom").textContent = "";
//             let finalScore = document.querySelector("#head").textContent = `congratulation your score=${score}`;
//         }
//     }, 1000)
// }
// runtimer()

let btnn = document.querySelector(".btn");
btnn.addEventListener("click", function () {
    // document.querySelector("#score").textContent = `${score}`;
    // finalScore.textContent = "Bubble Game"
    let heading = document.querySelector("#head");
    var score = 0;
    let rn;
    makeBubble()
    var timer = 60;
    function runtimer() {
        let runTimer = setInterval(function () {
            if (timer > 0) {
                timer--;
                document.querySelector("#timer").textContent = timer;
            }
            else {
                clearInterval(runTimer);
                document.querySelector(".p-bottom").textContent = "";
                let finalScore = document.querySelector("#head").textContent = `congratulation your score=${score}`;
            }
        }, 1000)
    }
    runtimer()

    function hitval() {
        rn = Math.floor(Math.random() * 10);
        document.querySelector("#hitvalue").textContent = rn;
        console.log(rn)
    }
    function updateScore() {
        score += 10;
        document.querySelector("#score").textContent = score;

    }
    hitval();
    document.querySelector(".p-bottom").addEventListener("click", function (dets) {
        let target = (Number(dets.target.textContent));
        if (rn == target) {
            console.log("hello brother");
            score += 10;
            document.querySelector("#score").textContent = score;
            makeBubble();
            hitval();
            heading.style.color = "white";
            heading.textContent = "Bubble Game";
        }
        else {
            console.log("hello bhayiyon")
            console.log(rn)
            heading.textContent = "please choose correct button";
            score -= 10;
            document.querySelector("#score").textContent = score;
            // document.querySelector("#head").color = red;
            // document.querySelector(".main").style.background = red;

        }
    })
    // document.querySelector("#score").textContent = `${score}`;
    // finalScore.textContent = "Bubble Game"

})

