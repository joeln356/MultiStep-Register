const btn = document.querySelectorAll('.btn')
const caixa = document.querySelector('#caixa')
const steps = document.querySelectorAll('.step')

btn[0].addEventListener("click", ()=>{
    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value

    steps[0].classList.remove('show')
    steps[1].classList.add("show")
})

// let options = document.querySelectorAll('.option')

// options.forEach((el)=>{
//     el.addEventListener('click', ()=>{
//         el.classList.toggle('selecionado')
//     })
// })

const options = document.querySelectorAll('.option')

options.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('selecionado')
    })
})



btn[1].addEventListener("click", ()=>{

    steps[1].classList.remove('show')
    steps[2].classList.add('show')
})