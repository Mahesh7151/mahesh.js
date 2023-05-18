function validateForm() {

    let name = document.getElementById('userName').value
    let password = document.getElementById('password').value
    console.log(password)
    if (name == "") {
        document.getElementById('userMessage').innerHTML = "Please Ener User Name"
    }
    if (password == "") {
        document.getElementById('passwordMessage').innerHTML = "Please Enter Password"
    }
    if (password.length < 3) {
        document.getElementById('passwordMessage').innerHTML = "Min 5 Char"
    }
    return false
}