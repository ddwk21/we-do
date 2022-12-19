



var createForm = document.getElementById('signupForm')
console.log(createForm)

//account creation submission
function createSubmit(e) {



    e.preventDefault();

    const { nameSignup, emailSignup, ZIPSignup, passwordSignup, passwordConfirm } = e.target.elements


    if (passwordSignup.value !== passwordConfirm.value) return

    let userData = {
        username: nameSignup.value,
        email: emailSignup.value,
        password: passwordSignup.value,
        zip_code: ZIPSignup.value,
        interests: null,
    }

    fetch('/api/users/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then((res) => {
            if (res.ok) window.location.href = '/'
        })
        .catch((err)=>alert('You suck!'))

}

createForm.addEventListener('submit', createSubmit)
