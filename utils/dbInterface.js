

async function addUser(username, email, password, zip_code, interest) {
    await User.create({
        username: username,
        email: email,
        password: password,
        zip_code: zip_code,
        interest: interest
     })
}    

exports.addEvent = addEvent;