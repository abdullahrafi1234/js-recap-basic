const form = document.querySelector('form')
console.log(form)
const name = form.querySelector('div #name')
const email = form.querySelector('div #email')
const password = form.querySelector('div #password')
console.log(name)



function formHandler(e) {
    e.preventDefault()
    console.log('submit')
}