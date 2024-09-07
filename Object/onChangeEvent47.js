// DOM events
// 1. Event Object

//-- event type: change, submit, load, unload, open, play, canplay, pause, playing, progress, ended, resize, scroll, toggle etc.

//-- properties: type, target, preventDefault()

// 2. MouseEvent Object
// 3. KeyboardEvent Object
// 4. FocusEvent Object
// 5. ClipboardEvent Object
// 6. DragEvent Object

//where we use this type of event
//input tag
//select tag
//textarea tag


// const input = document.querySelector('input')
// input.addEventListener('change', changeHandler)

// function changeHandler(e){
//     // console.log(e.target)
//     console.log(e.target.value)
// }


const programme = document.querySelectorAll('input[name=program]')
console.log(programme)
// programme.addEventListener('change')
// console.log(programme)

// function changeHandler(e){
//     // console.log(e.target)
//     console.log(e.target.value)
// }







function prepareJuice(fruit) {
    console.log('Juice made from ' + fruit)

    const glass = fruit;
    console.log(glass + ' Juice Poured into a glass');

    return glass;
    //return kore dile ans ta nicher serviceJuice variable er modde jaia thake tokhn console.log e ans dekha jay

}

var serviceJuice = prepareJuice('Mango')
console.log('This is your ' + serviceJuice + ' Juice')

