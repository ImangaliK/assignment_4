const registrationBtn = document.querySelector('.signUpButton')
registrationBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const wrapperOfForm = document.querySelector('.wrapperOfForm')
    wrapperOfForm.classList.toggle('d-none')
})

const closeRegForm = document.querySelector('.closeRegForm')
closeRegForm.addEventListener('click', (event) => {
    event.preventDefault()
    const wrapperOfForm = document.querySelector('.wrapperOfForm')
    wrapperOfForm.classList.toggle('d-none')
})


function showToast(toastId) {
    const warnToast = document.getElementById(toastId)
    const toast = new bootstrap.Toast(warnToast)
    toast.show()
    console.log("SHOWN")
    console.log(warnToast)
}

let passwordEnable = false
let nameEnable = true

const username = document.querySelector('.username')
username.addEventListener('input', event => {
    console.log(event.target.value)
    if (event.target.value.localeCompare('') === 0) {
        showToast('usernameToastWarn')
        nameEnable = false
    } else {
        nameEnable = true
    }
    console.log(nameEnable)

    const btnCloseToast = document.querySelector('.btn-close')
    btnCloseToast.addEventListener('click', (event) => {
        const toast = document.querySelector('.toast')
        toast.style.display = "none"
    })
    const btn = document.querySelector('.btn-dark')

    if (nameEnable && passwordEnable) {
        btn.removeAttribute('disabled')
        console.log("REMOVE")
    } else {
        console.log("SET")
        btn.setAttribute('disabled', '')
    }
})


const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirmPassword')
password.addEventListener('input', event => {
    if (event.target.value.localeCompare(confirmPassword.value) !== 0) {

        showToast('passwordToastWarn')
        passwordEnable = false
    } else if (event.target.value.localeCompare(confirmPassword.value) === 0) {
        console.log(password, confirmPassword)
        passwordEnable = true
    }
    console.log(passwordEnable)
    const btnCloseToast = document.querySelector('.btn-close')
    btnCloseToast.addEventListener('click', (event) => {
        const toast = document.querySelector('.toast')
        toast.style.display = "none"
    })
    const btn = document.querySelector('.btn-dark')

    if (nameEnable && passwordEnable) {
        btn.removeAttribute('disabled')
        console.log("REMOVE")
    } else {
        btn.setAttribute('disabled', '')
    }
})


confirmPassword.addEventListener('input', event => {
    if (event.target.value.localeCompare(password.value) !== 0) {
        showToast('passwordToastWarn')
        passwordEnable = false
    } else if (event.target.value.localeCompare(password.value) === 0) {
        console.log(password, confirmPassword)
        passwordEnable = true
    }
    console.log(passwordEnable, nameEnable)
    const btnCloseToast = document.querySelector('.btn-close')
    btnCloseToast.addEventListener('click', (event) => {
        const toast = document.querySelector('.toast')
        toast.style.display = "none"
    })
    const btn = document.querySelector('.btn-dark')
    if (nameEnable && passwordEnable) {
        btn.removeAttribute('disabled')
        console.log("REMOVE")
    } else {
        console.log("SET")
        btn.setAttribute('disabled', '')
    }
})

const btnReg = document.querySelector('.btn-dark')
btnReg.addEventListener('click', (event) => {
    showToast('success')
    let sound = new Audio('sound/Straight Fuse - French Fuse.mp3');
    sound.play();
})

const formReg = document.querySelector('.formReg')
formReg.addEventListener('keypress', (event) => {
    if (event.keyCode === 13 && passwordEnable && nameEnable){
        event.preventDefault()
        showToast('success')
        let sound = new Audio('sound/Straight Fuse - French Fuse.mp3');
        sound.play();
    }
    else{
        showToast('error')
    }
})


const testimonials = document.getElementById('carouselControls')
testimonials.addEventListener('mouseover', (event) => {
    showToast('getMoreInfo')
})