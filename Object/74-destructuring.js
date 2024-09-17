// Destructuring array and objects



























//    html code
{/* <h1 id="heading">My github delete confirmation</h1>
<input type="text" name="" id="dlt-input" placeholder="please type delete">
<button id="dlt-btn" disabled>Delete</button> */}





document.getElementById('dlt-input').addEventListener('keyup', function (event) {
    const p = event.target.value;
    console.log(p);
    const buttonDelete = document.getElementById('dlt-btn');

    if (p === 'delete') {
        buttonDelete.removeAttribute('disabled');

    } else {
        buttonDelete.setAttribute('disabled', true);

    }
});

document.getElementById('dlt-btn').addEventListener('click', function () {
    const secret = document.getElementById('heading');
    secret.style.display = 'none'; // Correct way to hide the heading

    // Disable button after clicking
    const buttonDelete = document.getElementById('dlt-btn');
    buttonDelete.setAttribute('disabled', true);

    // Clear the input
    document.getElementById('dlt-input').value = '';
});
