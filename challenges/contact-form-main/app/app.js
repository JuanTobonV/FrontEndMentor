
let submitButton = document.getElementById('form__submitButton');

submitButton.addEventListener('click', () => {

    let firstName = document.getElementById('form_firstName').value;
    let lastName = document.getElementById('form_lastName').value;
    let email = document.getElementById('form_email').value;
    let firstOption = document.getElementById('form_firstOption').value;
    let secondOption = document.getElementById('form_secondOption').value;
    let message = document.getElementById('form_message').value;
    let consent = document.getElementById('form_checkbox').value;
        
    console.log(firstName);
})