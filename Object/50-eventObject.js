//DOM events, Event Objects , 
// 1.  load, unload
// 2. scroll
// 3. resize
// 4. toggle

window.addEventListener('load', function () {
    console.log('load')
})
window.addEventListener('unload', function () {
    console.log('unload')
})

window.addEventListener('scroll', function () {
    console.log('scrolling')
})

window.addEventListener('resize', function () {
    console.log('resize')
    const width = window.outerWidth;
    const height = window.outerHeight;

    console.log(`height: ${height}, width: ${width}`)
})

const toggle = document.querySelector('details')

toggle.addEventListener('toggle', function () {
    console.log('toggle')
})
toggle.addEventListener('toggle', function (e) {
    console.log(e.target.open)
})