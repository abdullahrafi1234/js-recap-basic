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


///HTML code here

// <!-- <label for="name"> Name:
// <input type="text" name="name" class="input-class" id="input-id">
// </label> -->

// <!-- <div>
// <h2>Programming: </h2>
// <label for="program">
//     <input type="checkbox" name="program" id="html" value="HTML"> HTML
// </label>
// <label for="css">
//     <input type="checkbox" name="program" id="css" value="Css"> CSS
// </label>
// </div>
// -->
// <label for="">Department: </label>
// <select name="department" id="department">
// <option value="cse">CSE</option>
// <option value="eee">EEE</option>
// <option value="llb">LLB</option>
// </select>







// const input = document.querySelector('input')
// input.addEventListener('change', changeHandler)

// function changeHandler(e){
//     // console.log(e.target)
//     console.log(e.target.value)
// }


const programs = document.querySelectorAll('input[name=program]')
console.log(programs)

Array.from(programs).map((program) => {
    console.log(program)
    program.addEventListener('change', programHandler)
})

function programHandler(e){
    // console.log(e.target)
    if(e.target.checked){
        console.log(e.target.value)
    }
}


const department = document.querySelector('#department')
console.log(department)
department.addEventListener('change', selectHandler)

function selectHandler(e){
    console.log(e)
    console.log(e.target.value)
}







function prepareJuice(fruit) {
    console.log('Juice made from ' + fruit)

    const glass = fruit;
    console.log(glass + ' Juice Poured into a glass');

    return glass;
    //return kore dile ans ta nicher serviceJuice variable er modde jaia thake tokhn console.log e ans dekha jay

}

var serviceJuice = prepareJuice('Mango')
console.log('This is your ' + serviceJuice + ' Juice')

