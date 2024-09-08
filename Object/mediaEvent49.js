//  audio  / video events
//  canplay, play, plying, pause, progress, ended, volumeChange, waiting

const video = document.querySelector('video');

video.addEventListener('canplay', function(){
    console.log('can play')
})
video.addEventListener('play', function(){
    console.log('play')
})
video.addEventListener('pause', function(){
    console.log('paused')
})
video.addEventListener('playing', function(){
    console.log('playing')
})
// video.addEventListener('progress', function(){
//     console.log('progress')
// })
video.addEventListener('ended', function(){
    console.log('ended')
})
video./