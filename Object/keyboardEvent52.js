//    Keyboard Mouse
// 1. keydown - pressing a key, can repeat
// 2. keypress (may not supported by some browsers) 
// 3. keyup
// 4. some properties - key, keyCode, code, shiftKey, cltKey, repeat

var div = document.querySelector('textarea')
div.addEventListener('keydown', function(e){
    // console.log('keydown hosse keyboard e click kora')
    if(e.repeat){
        console.log('repeat')
        alert('do not repeat')  //keydown e repeat use kora jay
    }
})

// div.addEventListener('keyup', function(e){
//     console.log('keyup hosse keyboard e click sere deoa')
//     // console.log(e.keyCode);
//     // console.log(e.code);
//     // console.log(e.shiftKey);
//     // console.log(e.ctrlKey);
// })

// div.addEventListener('keypress', function(){
//     console.log('keypress hosse just pess kora ')
// })