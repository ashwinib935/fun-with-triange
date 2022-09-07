var inputOfSide = document.querySelectorAll(".input-side");
var btnArea = document.querySelector("#btn-area");
var outputElement = document.querySelector("#outputEl");


function calculateArea() {
    var base = inputOfSide[0].value;
    var height = inputOfSide[1].value;
    if (base && height) {
        if (Number(base) > 0 && Number(height) > 0) {
            var area = (Number(base) * Number(height)) / 2;
            outputEl.innerText = "The Area of traingle is:" + area.toFixed(2);
        } else {
            outputEl.innerText = "Values should be positive.";
        }
    } else {
        outputEl.innerText = "Please enter both the fields.";
    }
}

btnArea.addEventListener("click", calculateArea);