function checkPrime() {
    let num = numberInp.value
    let i;

    let prime = true;
    if (num == "") {
        prime = null
    }

    else if (num.toString().includes(".")) {
        prime = "decimal"
    }

    else if (num == 1 || num == 0) {
        prime = false;
    }

    else if (num > 1) {
        for (i = 2; i < num; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
    }

    if (prime == true) {
        if (num == 2) {
            resultContent.innerHTML = `2 is the Only Even Prime Number.`
        }

        else {
            resultContent.innerHTML = `${num} is a Prime Number.`
        }
    }
    else if (prime == false) {
        if (num == 1 || num == 0) {
            resultContent.innerHTML = `${num} is Neither Prime Nor Composite.`
        }

        else {
            resultContent.innerHTML = `${num} is not a Prime Number as it is divisible by ${i}.`
        }
    }
    else if (prime == null) {
        resultContent.innerHTML = "Enter a valid number."
    }

    else if (prime == "decimal") {
        resultContent.innerHTML = "A decimal number cannot be a prime. Prime numbers are defined to be integers - and therefore no number with a fractional part can be primes."
    }
    showResult()
    add_Shortcut_Key_To_Close_Result()
}
function showResult() {
    result.classList.remove("hide")
    result.classList.add("show")

    showResultAnimate()
    if (resultContent.textContent.length > 130) {
        resultContent.style.fontSize = "2.5rem"
    }

    else {
        resultContent.style.fontSize = "3.5rem"
    }
}

function showResultAnimate() {
    resultBlur.style.opacity = "1"
    resultBlur.style.pointerEvents = "unset"
    checkingButton.disabled = true;
}

function hideResult() {
    result.classList.remove("show")
    result.classList.add("hide")
    checkingButton.disabled = false;

    hideResultAnimate()
}

function hideResultAnimate() {
    resultBlur.style.opacity = "0"
    resultBlur.style.pointerEvents = "none"
}
const numberInp = document.getElementById("numberInp")
const result = document.getElementById("result")
const checkingButton = document.querySelector(".check")
const closeResult = document.getElementById("closeResult")
const resultBlur = document.getElementById("resultBlur")

checkingButton.addEventListener("click", checkPrime)
closeResult.addEventListener("click", hideResult)
numberInp.addEventListener("input", ()=>{
    if(numberInp.value.length > numberInp.maxLength){
        numberInp.value = numberInp.value.slice(0, numberInp.maxLength)
    }
})

document.body.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        checkingButton.click()
        showResultAnimate()
    }
})

function add_Shortcut_Key_To_Close_Result() {
    document.body.addEventListener("keyup", (e) => {
        if (e.key == "Escape") {
            closeResult.click()
            hideResultAnimate()
        }
    })
}

numberInp.addEventListener("keydown", (e) => {
    if (e.keyCode == 69 || e.keyCode == 107 || e.keyCode == 109) {
        e.preventDefault()
    }
})

numberInp.addEventListener("blur", (e) => {
    if(numberInp.value != ""){
        numberInp.focus();
    }
})

numberInp.addEventListener("input", (e) => {
    numberInp.value = numberInp.value.replace("e", "")
})
