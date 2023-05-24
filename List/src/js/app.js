const sideLeft = document.getElementById("sideLeft");
const sideRight = document.getElementById("sideRight");
const allLeftBtn = document.getElementById("allLeftBTN");
const allRightBtn = document.getElementById("allRightBTN");
const oneLeftBtn = document.getElementById("oneLeftBTN");
const oneRightBtn = document.getElementById("oneRightBTN");

allRightBtn.addEventListener("click", function (event) {
    const childrens = sideLeft.querySelectorAll("div");
    allLeftBtn.classList.remove("disabled");
    allRightBtn.classList.add("disabled");
    allRightBtn.classList.add("clicked");
    childrens.forEach(element => {
        sideRight.appendChild(element)
    });
    setTimeout(function () {
        allRightBtn.classList.remove("clicked")
    },100)
});

allLeftBtn.addEventListener("click", () => {
    const childrens = sideRight.querySelectorAll("div");
    allLeftBtn.classList.add("disabled");
    allRightBtn.classList.remove("disabled");
    allLeftBtn.classList.add("clicked");
    childrens.forEach(element => {
        sideLeft.appendChild(element)
    });
    setTimeout(function () {
        allRightBtn.classList.remove("clicked")
    },100)
});

oneRightBtn.addEventListener("click", function (event) {
    const childrens = sideLeft.querySelectorAll('input[type="checkbox"]');
    oneRightBtn.classList.add("clicked");
    childrens.forEach(element => {
        if (element.checked) {
            element.checked = false;
            sideRight.appendChild(element.parentNode);
        }
    });
    setTimeout(function () {
        oneRightBtn.classList.remove("clicked")
    },100)
    if(!sideLeft.querySelectorAll("div").length){
        oneRightBtn.classList.add("disabled");
        oneLeftBtn.classList.remove("disabled");
    }
});

oneLeftBtn.addEventListener("click", function (event) {
    const childrens = sideRight.querySelectorAll('input[type="checkbox"]');
    oneLeftBtn.classList.add("clicked");
    childrens.forEach(element => {
        if (element.checked) {
            element.checked = false;
            sideLeft.appendChild(element.parentNode);
        }
    });
    setTimeout(function () {
        oneLeftBtn.classList.remove("clicked")
    },100)
    if(!sideRight.querySelectorAll("div").length){
        oneLeftBtn.classList.add("disabled");
        oneRightBtn.classList.remove("disabled");
    }
});
