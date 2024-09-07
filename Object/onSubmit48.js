const form = document.querySelector('form')
console.log(form)
const name = form.querySelector('div #name')
console.log(name)



function formHandler(e){
    e.preventDefault()
console.log('submit')
}