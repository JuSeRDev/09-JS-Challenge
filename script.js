const outerCircle = document.querySelectorAll(".outerCircle")
const innerCircle = document.querySelectorAll(".innerCircle")

const bottonsFirst = document.querySelectorAll(".ge, .sr")
const backgroundbutton = "var(--Green-200-lighter)"
const borderColor = "var(--Grey-500-medium)"
const borderColorActive = "var(--Grey-900-darker)"

let queryType

bottonsFirst.forEach((botton, i) => {
    botton.addEventListener("click", ()=>{
        bottonsFirst.forEach((botton, i)=>{
            botton.style.background = "none"
            botton.style.borderColor = borderColor
            innerCircle[i].style.opacity = 0
            outerCircle[i].style.borderColor = borderColor
        })
        queryType = botton.classList.value
        botton.style.background = backgroundbutton
        botton.style.borderColor = borderColorActive
        innerCircle[i].style.opacity = 1
        outerCircle[i].style.borderColor = borderColorActive
    })
});

const check = document.querySelector(".check")
const checkbox = document.querySelector(".checkbox")

const checkText = document.querySelector(".checkboxText").addEventListener("click", ()=>{
    check.classList.toggle("active")
    checkbox.classList.toggle("actvieCheckBox")
})

const errorMessage = document.querySelectorAll(".error")


let inName, lastName, Email, message

const inputName = document.querySelector(".inputName")
const inputLastName = document.querySelector(".inputLastName")
const inputEmail = document.querySelector(".inputEmail")
const textarea = document.querySelector(".textarea")
const messageConfirm = document.querySelector(".sectionSix")

const botton = document.querySelector(".button").addEventListener("click",(e)=>{
    inName = inputName.value
    lastName = inputLastName.value
    Email = inputEmail.value
    message = textarea.value

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
    const textPattern = /^.{10,}$/;

    let isFormValue = true

    const validForm = (name, lastName, email, message) =>{
        if (!namePattern.test(name)) {
            errorMessage[0].style.overflow = "visible"
            e.preventDefault()
            isFormValue = false
        } else{
            errorMessage[0].style.overflow = "hidden"
        }
        if (!namePattern.test(lastName)) {
            errorMessage[1].style.overflow = "visible"
            e.preventDefault()
            isFormValue = false
        } else {
            errorMessage[1].style.overflow = "hidden"
        }
        if (!emailPattern.test(email)) {
            errorMessage[2].style.overflow = "visible"
            e.preventDefault()
            isFormValue = false
        } else {
            errorMessage[2].style.overflow = "hidden"
        }

        if (!textPattern.test(message)) {
            errorMessage[4].style.overflow = "visible"
            e.preventDefault()
            isFormValue = false
        } else {
            errorMessage[4].style.overflow = "hidden"
        }
    }

    bottonsFirst.forEach(botton => {
        if (botton.style.background === "") {
            errorMessage[3].style.overflow = "visible"
            e.preventDefault()
            isFormValue = false
        }else{
            errorMessage[3].style.overflow = "hidden"
        }
    });

    if (!check.classList.contains("active")) {
        errorMessage[5].style.overflow = "visible"
        e.preventDefault()
        isFormValue = false
    } else{
        errorMessage[5].style.overflow = "hidden"
    }
    
    validForm(inName, lastName, Email, message)

    if(isFormValue){
        messageConfirm.style.opacity = "1"
        console.log("fomulario valido y listo para enviar")
        console.log("Name: ", inName)
        console.log("Last Name: ",lastName)
        console.log("Email: ",Email)
        console.log("Message: ",message)
        console.log("Query Type:", queryType)

        inputName.value = ""
        inputLastName.value = ""
        inputEmail.value = ""
        textarea.value = ""

        bottonsFirst.forEach((botton, i) => {
            botton.style.background = "none"
            botton.style.borderColor = borderColor
            innerCircle[i].style.opacity = 0
            outerCircle[i].style.borderColor = borderColor
        });

    } else {
        console.log("l evento fue detenido")
    }
})
