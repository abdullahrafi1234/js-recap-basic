
for(i=0; i<3; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('click', function () {
        var text = this.innerHTML
        document.querySelector('h2').innerHTML = 'Clicked by ' + text;  
    })
}


// document.querySelectorAll('.myButton')[0].addEventListener('click', function () {
//     var text = this.innerHTML
//     document.querySelector('h2').innerHTML = 'Clicked by ' + text;  
// })

// document.querySelectorAll('.myButton')[1].addEventListener('click', function () {
//     var text = this.innerHTML
//     document.querySelector('h2').innerHTML = 'Clicked by ' + text;  
// })