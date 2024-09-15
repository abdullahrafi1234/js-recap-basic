// Js BOM 
// popup boxes => alert, confirm, prompt

console.log(window);
// alert('this is alert BOM')

// confirm box
// confirm('Are you sure')

function deleteSomething(){
    let value = confirm('Do you want to delete?')

    if (value){
        console.log('Deleted')
    }
    else{
        console.log('Not deleted')
    }
}

deleteSomething();