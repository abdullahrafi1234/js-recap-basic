//FocusEvent Object
// <br>, <head> , <tittle>, <html>, <iframe> , <meta> , <pram> , <script> , <style> , <base>, <bdo> (agulay use hoyna focus)

// 1. onblur
// 2. onfocus
// 3. onfocusin
// 4. onfocusout


const input = document.querySelector('input')
console.log(input)

input.addEventListener('blur', function(){
    console.log('blur is occurred')
})

input.addEventListener('focus', function(){
    // console.log('focus is occurred')
    input.style.backgroundColor = 'orange'
    input.style.padding = '20px'
})

// input.addEventListener('focusin', function(){
//     console.log('focusin is occurred')
// })

// input.addEventListener('focusout', function(){
//     console.log('focusout is occurred')
// })