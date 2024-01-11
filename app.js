const bellIcon = document.querySelector('.bell-icon')
const popup = document.querySelector('.popup-container')
bellIcon.addEventListener('click', () => {
    popup.classList.toggle('show')
    myStore.classList.remove('show-profile')
    bellIcon.focus()
})

const profileBtn = document.querySelector('.profile')
const myStore = document.querySelector('.my-store-container')
profileBtn.addEventListener('click', () => {
    myStore.classList.toggle('show-profile')
    popup.classList.remove('show')
})

const deleteBtn = document.getElementById('delete-plan-btn')
const plan = document.querySelector('.plan')
deleteBtn.addEventListener('click', () => {
    plan.remove()
})

const accordionBtn = document.getElementById('accordion-button')
const accordion = document.querySelector('.accordion')
accordionBtn.addEventListener('click', () => {
    accordionBtn.classList.toggle('rotate-btn')
    accordion.classList.toggle('shrink')
})

const allBtn = document.querySelectorAll('#component-btn')
for (let i = 0; i < allBtn.length; i++) {
    const btn = allBtn[i];
    console.log(btn)
    btn.addEventListener('click', () => {
        btn.focus()
        console.log('try')
    })
    
}


const progressBar = document.querySelector('.progress-bar')
const svgInput1 = document.querySelector('.svg-input1')
const container1 = document.getElementById('accordion-component1')

var number = 0
const numCompleted = document.getElementById('number')
numCompleted.innerHTML = number
const header1 = document.getElementById('header1')
svgInput1.addEventListener('click', () => {
    
    if(svgInput1.checked){
        progressBar.value += 1
        number += 1
        numCompleted.innerHTML = number
        contentBody1.classList.remove('display-none')
        img1.classList.remove('display-none')
        container1.classList.remove('shrink-content')
        contentBody2.classList.add('display-none')
        img2.classList.add('display-none')
        container2.classList.add('shrink-content')
        contentBody3.classList.add('display-none')
        img3.classList.add('display-none')
        container3.classList.add('shrink-content')
        contentBody4.classList.add('display-none')
        img4.classList.add('display-none')
        container4.classList.add('shrink-content')
        contentBody5.classList.add('display-none')
        img5.classList.add('display-none')
        container5.classList.add('shrink-content')

        

    } else {
        progressBar.value -=1
        number -= 1
        numCompleted.innerHTML = number
    }
})


header1.addEventListener('click', () => {
    contentBody1.classList.remove('display-none')
    img1.classList.remove('display-none')
    container1.classList.remove('shrink-content')
    contentBody2.classList.add('display-none')
    img2.classList.add('display-none')
    container2.classList.add('shrink-content')
    contentBody3.classList.add('display-none')
    img3.classList.add('display-none')
    container3.classList.add('shrink-content')
    contentBody4.classList.add('display-none')
    img4.classList.add('display-none')
    container4.classList.add('shrink-content')
    contentBody5.classList.add('display-none')
    img5.classList.add('display-none')
    container5.classList.add('shrink-content')
})

const contentBody1 = document.querySelector('#content-body1')
const img1 = document.querySelector('.accordion-img-1')



const header2 = document.getElementById('header2')
const contentBody2 = document.querySelector('#content-body2')
const img2 = document.querySelector('.accordion-img-2')
const svgInput2 = document.querySelector('.svg-input2')
const container2 = document.getElementById('accordion-component2')

svgInput2.addEventListener('click', () => {

    container2.classList.remove('margin')
    if(svgInput2.checked){
    progressBar.value += 1
    number += 1
    numCompleted.innerHTML = number
    contentBody2.classList.remove('display-none')
    img2.classList.remove('display-none')
    container2.classList.remove('shrink-content')
    contentBody1.classList.add('display-none')
    img1.classList.add('display-none')
    container1.classList.add('shrink-content')
    contentBody3.classList.add('display-none')
    img3.classList.add('display-none')
    container3.classList.add('shrink-content')
    contentBody4.classList.add('display-none')
    img4.classList.add('display-none')
    container4.classList.add('shrink-content')
    contentBody5.classList.add('display-none')
    img5.classList.add('display-none')
    container5.classList.add('shrink-content')
    } else {
        progressBar.value -=1
        number -= 1
        numCompleted.innerHTML = number
    }

})


header2.addEventListener('click', () => {
    contentBody2.classList.remove('display-none')
    img2.classList.remove('display-none')
    container2.classList.remove('shrink-content')
    contentBody2.classList.remove('display-none')
    img2.classList.remove('display-none')
    container2.classList.remove('shrink-content')
    contentBody1.classList.add('display-none')
    img1.classList.add('display-none')
    container1.classList.add('shrink-content')
    contentBody3.classList.add('display-none')
    img3.classList.add('display-none')
    container3.classList.add('shrink-content')
    contentBody4.classList.add('display-none')
    img4.classList.add('display-none')
    container4.classList.add('shrink-content')
    contentBody5.classList.add('display-none')
    img5.classList.add('display-none')
    container5.classList.add('shrink-content')
})

const header3 = document.getElementById('header3')
const contentBody3 = document.querySelector('#content-body3')
const img3 = document.querySelector('.accordion-img-3')
const svgInput3 = document.querySelector('.svg-input3')
const container3 = document.getElementById('accordion-component3')

svgInput3.addEventListener('click', () => {

    if(svgInput3.checked){
        progressBar.value += 1
        number += 1
        numCompleted.innerHTML = number
        contentBody3.classList.remove('display-none')
        img3.classList.remove('display-none')
        container3.classList.remove('shrink-content')
        contentBody1.classList.add('display-none')
        img1.classList.add('display-none')
        container1.classList.add('shrink-content')
        contentBody2.classList.add('display-none')
        img2.classList.add('display-none')
        container2.classList.add('shrink-content')
        contentBody4.classList.add('display-none')
        img4.classList.add('display-none')
        container4.classList.add('shrink-content')
        contentBody5.classList.add('display-none')
        img5.classList.add('display-none')
        container5.classList.add('shrink-content')
    } else {
        progressBar.value -=1
        number -= 1
        numCompleted.innerHTML = number
    }

})


header3.addEventListener('click', () => {
    contentBody3.classList.remove('display-none')
    img3.classList.remove('display-none')
    container3.classList.remove('shrink-content')
    contentBody3.classList.remove('display-none')
    img3.classList.remove('display-none')
    container3.classList.remove('shrink-content')
    contentBody1.classList.add('display-none')
    img1.classList.add('display-none')
    container1.classList.add('shrink-content')
    contentBody2.classList.add('display-none')
    img2.classList.add('display-none')
    container2.classList.add('shrink-content')
    contentBody4.classList.add('display-none')
    img4.classList.add('display-none')
    container4.classList.add('shrink-content')
    contentBody5.classList.add('display-none')
    img5.classList.add('display-none')
    container5.classList.add('shrink-content')
})

const header4 = document.getElementById('header4')
const contentBody4 = document.querySelector('#content-body4')
const img4 = document.querySelector('.accordion-img-4')
const svgInput4 = document.querySelector('.svg-input4')
const container4 = document.getElementById('accordion-component4')

svgInput4.addEventListener('click', () => {

    if(svgInput4.checked){
        progressBar.value += 1
        number += 1
        numCompleted.innerHTML = number
        contentBody4.classList.remove('display-none')
        img4.classList.remove('display-none')
        container4.classList.remove('shrink-content')
        contentBody1.classList.add('display-none')
        img1.classList.add('display-none')
        container1.classList.add('shrink-content')
        contentBody2.classList.add('display-none')
        img2.classList.add('display-none')
        container2.classList.add('shrink-content')
        contentBody3.classList.add('display-none')
        img3.classList.add('display-none')
        container3.classList.add('shrink-content')
        contentBody5.classList.add('display-none')
        img5.classList.add('display-none')
        container5.classList.add('shrink-content')
    } else {
        progressBar.value -=1
        number -= 1
        numCompleted.innerHTML = number
    }

})


header4.addEventListener('click', () => {
    contentBody4.classList.remove('display-none')
    img4.classList.remove('display-none')
    container4.classList.remove('shrink-content')
    contentBody4.classList.remove('display-none')
    img4.classList.remove('display-none')
    container4.classList.remove('shrink-content')
    contentBody1.classList.add('display-none')
    img1.classList.add('display-none')
    container1.classList.add('shrink-content')
    contentBody2.classList.add('display-none')
    img2.classList.add('display-none')
    container2.classList.add('shrink-content')
    contentBody3.classList.add('display-none')
    img3.classList.add('display-none')
    container3.classList.add('shrink-content')
    contentBody5.classList.add('display-none')
    img5.classList.add('display-none')
    container5.classList.add('shrink-content')
})

const header5 = document.getElementById('header5')
const contentBody5 = document.querySelector('#content-body5')
const img5 = document.querySelector('.accordion-img-5')
const svgInput5 = document.querySelector('.svg-input5')
const container5 = document.getElementById('accordion-component5')

svgInput5.addEventListener('click', () => {
    if(svgInput5.checked){
        progressBar.value += 1
        number += 1
        numCompleted.innerHTML = number
        contentBody5.classList.remove('display-none')
        img5.classList.remove('display-none')
        container5.classList.remove('shrink-content')
        contentBody1.classList.add('display-none')
        img1.classList.add('display-none')
        container1.classList.add('shrink-content')
        contentBody2.classList.add('display-none')
        img2.classList.add('display-none')
        container2.classList.add('shrink-content')
        contentBody3.classList.add('display-none')
        img3.classList.add('display-none')
        container3.classList.add('shrink-content')
        contentBody4.classList.add('display-none')
        img4.classList.add('display-none')
        container4.classList.add('shrink-content')
    } else {
        progressBar.value -=1
        number -= 1
        numCompleted.innerHTML = number
    }
})


header5.addEventListener('click', () => {
    contentBody5.classList.remove('display-none')
    img5.classList.remove('display-none')
    container5.classList.remove('shrink-content')
    contentBody5.classList.remove('display-none')
    img5.classList.remove('display-none')
    container5.classList.remove('shrink-content')
    contentBody1.classList.add('display-none')
    img1.classList.add('display-none')
    container1.classList.add('shrink-content')
    contentBody2.classList.add('display-none')
    img2.classList.add('display-none')
    container2.classList.add('shrink-content')
    contentBody3.classList.add('display-none')
    img3.classList.add('display-none')
    container3.classList.add('shrink-content')
    contentBody4.classList.add('display-none')
    img4.classList.add('display-none')
    container4.classList.add('shrink-content')
})


// if (!svgInput1.checked) {
//     contentBody1.classList.remove('display-none')
//     img1.classList.remove('display-none')
//     container1.classList.remove('shrink-content')
// } else if (!svgInput2.checked) {
//     contentBody2.classList.remove('display-none')
//     img2.classList.remove('display-none')
//     container2.classList.remove('shrink-content')
// } else if (!svgInput3.checked) {
//     contentBody3.classList.remove('display-none')
//     img3.classList.remove('display-none')
//     container3.classList.remove('shrink-content')
// } else if (!svgInput4.checked) {
//     contentBody4.classList.remove('display-none')
//     img4.classList.remove('display-none')
//     container4.classList.remove('shrink-content')
// } else if (!svgInput5.checked) {
//     contentBody5.classList.remove('display-none')
//     img5.classList.remove('display-none')
//     container5.classList.remove('shrink-content')
// }