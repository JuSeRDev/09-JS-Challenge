const outerCircle = document.querySelectorAll(".outerCircle")
const innerCircle = document.querySelectorAll(".innerCircle")

const bottonsFirst = document.querySelectorAll(".ge, .sr")
const backgroundbutton = "var(--Green-200-lighter)"
const borderColor = "var(--Grey-500-medium)"
const borderColorActive = "var(--Grey-900-darker)"

bottonsFirst.forEach((botton, i) => {
    botton.addEventListener("click", ()=>{
        bottonsFirst.forEach((botton, i)=>{
            botton.style.background = "none"
            botton.style.borderColor = borderColor
            innerCircle[i].style.opacity = 0
            outerCircle[i].style.borderColor = borderColor
        })
        botton.style.background = backgroundbutton
        botton.style.borderColor = borderColorActive
        botton.style.transition = "border-color 0.3s ease"
        innerCircle[i].style.opacity = 1
        outerCircle[i].style.borderColor = borderColorActive
    })
});

const check = document.querySelector(".check")
const checkbox = document.querySelector(".checkbox")

const checkText = document.querySelector(".checkboxText").addEventListener("click", ()=>{
    // check.style.display = "flex"
    check.classList.toggle("active")
    checkbox.classList.toggle("actvieCheckBox")
})