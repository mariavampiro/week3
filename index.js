const form = document.getElementById('form');
const input = document.querySelectorAll('#form input');

const expressions = {
    fullname: /^[a-zA-ZÀ-ÿ\s]{6,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9]{8,20}$/,
    age: /^\d{2}$/,
    phone: /^\d{7,15}$/,
    address: /^[a-zA-Z0-9-ÿ\s]{1,40}$/,
    city: /^[a-zA-Z0-9]{3,20}$/,
    zipcode: /^[a-zA-Z0-9]{3,20}$/,
    dni: /^\d{7,8}$/,
}

const fields = {
    fullname: false,
    email: false,
    password: false,
    age: false,
    phone: false,
    address: false,
    city: false,
    zipcode: false,
    dni: false,
}

function validation (e) {
    e.preventDefault();
    console.log(e.target.value);
    switch (e.target.name){
        case 'fullname':
            validateInput(expressions.fullname, e.target, 'fullname');
            eraseError(expressions.fullname, e.target,'fullname');
        break;
        case 'email':
            validateInput(expressions.email, e.target, 'email');
        break;
        case 'password':
            validateInput(expressions.password, e.target, 'password');
            validatePassword();
        break;
        case 'repeatpass':
            validatePassword();
        break;
        case 'age':
            validateInput(expressions.age, e.target, 'age');
        break;
        case 'phone':
            validateInput(expressions.phone, e.target, 'phone');
        break;
        case 'address':
            validateInput(expressions.address, e.target, 'address');
        break;
        case 'city':
            validateInput(expressions.city, e.target, 'city');
        break;
        case 'zipcode':
            validateInput(expressions.zipcode, e.target, 'zipcode');
        break;
        case 'dni':
            validateInput(expressions.dni, e.target, 'dni');
        break;
    }
}

function validateInput(expression,input,field){
    if(expression.test(input.value)){
        document.getElementById(`group-${field}`).classList.remove('wrong-group');
        document.getElementById(`group-${field}`).classList.add('right-group');
        document.querySelector(`#group-${field} .input-error`).classList.add('input-error-notactive');
        fields[field] = true;
    }else{
        document.getElementById(`group-${field}`).classList.add('wrong-group');
        document.getElementById(`group-${field}`).classList.remove('right-group');
        document.querySelector(`#group-${field} .input-error`).classList.add('input-error-active');
        fields[field] = false;
    }
}

function eraseError(expression,input,field){
    document.querySelector(`#group-${field} .input-error`).classList.add('input-error-notactive');
}


function validatePassword(){
    const inputPass = document.getElementById('password');
    const inputRepeatPass = document.getElementById('repeatpass');

    if(inputPass.value !== inputRepeatPass.value){
        document.getElementById(`group-repeatpass`).classList.add('wrong-group');
        document.getElementById(`group-repeatpass`).classList.remove('right-group');
        document.querySelector(`#group-repeatpass .input-error`).classList.add('input-error-active');
        fields['password'] = true;
    }else{
        document.getElementById(`group-repeatpass`).classList.remove('wrong-group');
        document.getElementById(`group-repeatpass`).classList.add('right-group');
        document.querySelector(`#group-repeatpass .input-error`).classList.remove('input-error-active');
        fields['password'] = true;
    }
}


input.forEach((input) => {
    input.addEventListener('blur', validation);
});

input.forEach((input) => {
    input.addEventListener('focus', eraseError);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function runEvent(e){
    console.log('Event type: '+e.type);
}




function sendform(){
    alert();
    return false;
}
