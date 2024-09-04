//Basic event listener 

document.getElementById('button').addEventListener('click', myFunction )

function myFunction() {
    alert('Clicked')
}

//another way with anonymous function

document.getElementById('button2').addEventListener('click', function(){alert('Clicked by me')})