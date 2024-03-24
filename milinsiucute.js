const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = document.querySelector("#code").value;

    if (inputValue == "1009") {
        window.location.href = "letter.html";
    } else {
        alert("The password is in DDMM format.")
    }
});

window.addEventListener('load', function () {
    var floatingDiv = document.querySelector('.floating-div');
    floatingDiv.classList.add('floating-div');
});