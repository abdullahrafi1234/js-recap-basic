for (i = 0; i < 3; i++) {
    document.querySelectorAll('.myButton')[0].addEventListener('click', function () {
        var text = this.innerHTML
        console.log(text)
    })
}

