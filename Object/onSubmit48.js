const form = document.querySelector('form')
// console.log(form)
const name = form.querySelector('div #name')
const email = form.querySelector('div #email')
const password = form.querySelector('div #password')
// console.log(name)

form.addEventListener('submit', formHandler)



function formHandler(e) {
    e.preventDefault()
    console.log(name.value)
    const user = {
        name: name.value,
        email: email.value,
        password: password.value
    }
    console.log(user)

    name.value = '';
    email.value = '';
    password.value = '';
}



//     HTMl Code --------------
{/* <form action="">
<div>
    <label for="name">Name:
        <input type="text" name="name" id="name">
    </label>
</div>
<div>
    <label for="email">Email:
        <input type="email" name="email" id="email">
    </label>
</div>
<div>
    <label for="name">Password:
        <input type="password" name="password" id="password">
    </label>
</div>
<div>
    <input type="submit" value="signup">
</div>
</form> */}
