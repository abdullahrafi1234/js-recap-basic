var photos = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg']
var imgTag = document.querySelector('img')

var count = 0

function next() {
    count++;
    imgTag.src=(photos[count])

    if(count<photos.length){
         
    }

}


function prev() {

}