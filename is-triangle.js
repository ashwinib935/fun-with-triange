var angles = document.querySelectorAll(".angle");
var btnIsTriangle = document.querySelector("#btn-is-triangle");
var outputElement = document.querySelector("#outputEl");

function calculateSumOfAngles(angle1, angle2, angle3) {
    var sumofAngles = angle1 + angle2 + angle3;
    return sumofAngles;
}

function isTriangle() {
    var sumofAngles = calculateSumOfAngles(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value));
    if (angles[0].value && angles[1].value && angles[2].value) {
        if (Number(angles[0].value) > 0 && Number(angles[1].value) > 0 && Number(angles[2].value) > 0) {
            if (sumofAngles === 180)
                outputEl.innerText = "It's form a triangle.";
            else
                outputEl.innerText = "No! It's not form a triangle.";
        } else {
            outputEl.innerText = "All fields should be positive.";
        }

    } else {
        outputEl.innerText = "Please enter all fields.";
    }
}

btnIsTriangle.addEventListener("click", isTriangle);