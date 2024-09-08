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
video.addEventListener('ended', function(){
    console.log('Thanks for watching')
})
video.addEventListener('volumechange', function(){
    console.log('volumechange')   //volume change korle call hbe
}) 

// -----HTML CODE ----

{/* <video width="600px" controls muted>
<!-- controls dile video er play pause ei option chole ashe, and loop use korle video sesh hole abr notun kore suro hoy. -->
 <!-- muted dile surote mute thakbe -->
<source src="videos/video1.mp4" type="video/mp4">
Your Browser does not support html video
</video> */}