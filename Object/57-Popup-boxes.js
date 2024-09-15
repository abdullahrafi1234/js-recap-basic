// Js BOM 
// popup boxes => alert, confirm, prompt

// console.log(window);
// alert('this is alert BOM')

// Confirm box

// confirm('Are you sure')

// function deleteSomething(){
//     let value = confirm('Do you want to delete?')

//     if (value){
//         console.log('Deleted')
//     }
//     else{
//         console.log('Not deleted')
//     }
// }

// deleteSomething();


// Prompt box 

function welcomeMessage() {

    var h1 = document.createElement('h1')
    let text;


    var name = prompt('Enter Your name')

    if (name == null || name == '') {
        text = 'no name found'
    }
    else {
        text = name;
    }

    var textNode = document.createTextNode(text)
    textNode.appendChild()

}

welcomeMessage()

