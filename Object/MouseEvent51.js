// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmouseup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover


const div = document.querySelector('div')

div.addEventListener('click', function(){
    console.log('clicked')
})
div.addEventListener('dblclick', function(){
    console.log('clicked double ')
})
div.addEventListener('mo', function(){
    console.log('clicked double ')
})
