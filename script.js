const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const usernameVal = username.Value.trim()
    const emailVal = email.Value.trim();
    const password = password.Value.trim();
    const cpassword = cpassword.Value.trim();

    if(usernameVal===''){
        setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        setError(email,'please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        setError(password,'password is required')
    }
    else if (passwordVal.length<9){
        setError(password,'password must be atleast 8 charecter')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        setError(cpassword,'confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        setError(cpassword,'password does not match')
    }
    else{
        setSuccess(cpassword)
    }

}    
//element - passward, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail =(email) => {
    return String(email)
    .toLowerCase()
    .match(
        ^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$
    );
}