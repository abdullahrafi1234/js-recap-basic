//    Keyboard Mouse
// 1. keydown - pressing a key, can repeat
// 2. keypress (may not supported by some browsers) 
// 3. keyup
// 4. some properties - key, keyCode, code, shiftKey, cltKey, repeat

var div = document.querySelector('textarea')
div.addEventListener('keydown', function(){
    console.log('keydown')
})

div.addEventListener('keyup', function(){
    console.log('keydown')
})