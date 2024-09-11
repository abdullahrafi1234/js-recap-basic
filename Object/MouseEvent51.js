// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmouseup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover


const div = document.querySelector('div')

// div.addEventListener('click', function(){
//     console.log('clicked')
// })
// div.addEventListener('dblclick', function(){
//     console.log('clicked double ')
// })
// div.addEventListener('mousedown', function(){
//     console.log('mouse down is mouse clicked')
// })
// div.addEventListener('mouseup', function(){
//     console.log('mouse up is mouse click sere dibo')
// })
div.addEventListener('mouseenter', function () {
    console.log('mouseenter mane oi element e mouse neoa')
})
div.addEventListener('mouseleave', function () {
    console.log('mouseleave mane oi element theke mouse ber kora ')
})

div.addEventListener('mouseover', function () {
    console.log('mouseover')
})
div.addEventListener('mousemove', function () {
    console.log('mousemove')
})
