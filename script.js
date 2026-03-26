const btn = document.querySelectorAll('.btn')
const caixa = document.querySelector('#caixa')
const steps = document.querySelectorAll('.step')
const summaryNome = document.getElementById('summar-name')
const summaryEmail = document.getElementById('summaru-email')
const options = document.querySelectorAll('.option')
let selecionados = []
const lista = document.getElementById('lista')


btn[0].addEventListener("click", ()=>{
    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    summaryEmail.innerHTML = email;
    summaryNome.innerHTML = nome;

    steps[0].classList.remove('show')
    steps[1].classList.add("show")
})

options.forEach((el)=>{
    el.addEventListener('click', ()=>{
        el.classList.toggle('destaque');
    })
})

btn[1].addEventListener("click", ()=>{

    options.forEach((el)=>{
        if(el.classList.contains('destaque')){
            selecionados.push(el.innerHTML)
        }
    })

    for (let i in selecionados){
        let item = document.createElement('li')
        item.innerHTML = selecionados[i]
        lista.appendChild(item)
    }
    steps[1].classList.remove('show')
    steps[2].classList.add('show')
})
