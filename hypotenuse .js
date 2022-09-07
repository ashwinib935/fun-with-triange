var inputOfSide = document.querySelectorAll(".input-side");
var btnHypotenuse = document.querySelector("#btn-hypotenuse");
var outputElement = document.querySelector("#outputEl");

function calculateHypotenuse() {

    var a = inputOfSide[0].value;
    var b = inputOfSide[1].value;

    if (a && b) {
        if (Number(a) > 0 && Number(b) > 0) {
            const sumOfSquare = Number(a) * Number(a) + Number(b) * Number(b);
            var hypotenuse = Math.sqrt(sumOfSquare);
            var conertItUptoTwodigits = hypotenuse.toFixed(2)
            outputEl.innerText = "The Hypotenuse of traingle is:" + conertItUptoTwodigits;

        } else {
            outputEl.innerText = "Values should be positive.";
        }
    } else {
        outputEl.innerText = "Please enter both the fields.";
    }
}

btnHypotenuse.addEventListener("click", calculateHypotenuse);