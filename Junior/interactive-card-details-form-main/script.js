// Display Values

const cardName = document.querySelector('.cardName');
const cardNumber = document.querySelector('.cardNumber');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const cvc = document.querySelector('.cvcNumber');
const form = document.querySelector('.form');
const completed = document.querySelector('.completed');

// Errors

const errorName = document.querySelector('.errorName');
const errorNumber = document.querySelector('.errorNumber');
const errorMonth = document.querySelector('.errorMonth');
const errorYear = document.querySelector('.errorYear');
const errorCVC = document.querySelector('.errorCVC');

// Input Values
const inputName = document.querySelector('[data-name]');
const inputNumber = document.querySelector('[data-number]');
const inputYear = document.querySelector('[data-year]');
const inputMonth = document.querySelector('[data-month]');
const inputCVC = document.querySelector('[data-cvc]');


//  Buttons

const confirmButton = document.querySelector('.buttonForm');
const continueButton = document.querySelector('.buttonContinue');

// Colors

const lightGrey = 'var(--light-grey-violet)';
const darkGrey = 'var(--very-dark-grey-violet)';
// Funtions on click
confirmButton.addEventListener('click', 
    () => {
        form.style.display = 'none';
        completed.style.display = 'flex';
    }
)

continueButton.addEventListener('click', 
    () => {
        form.style.display = 'block';
        completed.style.display = 'none';
        cardName.innerText = 'Jane Appleseed';
        cardNumber.innerText = '0000 0000 0000 0000';
        month.innerText = '00';
        year.innerText = '00';
        cvc.innerText = '000';
        inputName.value = '';
        inputNumber.value = '';
        inputMonth.value = '';
        inputYear.value = '';
        inputCVC.value = '';
    }
)


// Validity funtions

function nameFunction(){
    if(inputName.value.match(/^[a-zA-Z]+$/g) && inputName.value != ''){
        inputName.style.borderColor = 'var(--very-dark-grey-violet)';
        errorName.style.display = 'none';
        return true;
    } else if(inputName.value == ''){
        inputName.style.borderColor = 'var(--light-grey-violet)';
        errorName.style.display = 'none';
        return false;
    } else{
        inputName.style.borderColor = 'red';
        errorName.style.display = 'block';
        errorName.innerText = 'Name can only consist of alphabetic data!';
    }
}

function numberFunction(){
    if(inputNumber.value.match(/^\d{16}$/g) && inputNumber.value != ''){
        inputNumber.style.borderColor = 'var(--very-dark-grey-violet)';
        errorNumber.style.display = 'none';
        return true;
    } else if(inputNumber.value == ''){
        inputNumber.style.borderColor = 'var(--light-grey-violet)';
        errorNumber.style.display = 'none';
    } else if(inputNumber.value.match(/\w/)){
        inputNumber.style.borderColor = 'red';
        errorNumber.style.display = 'block';
        errorNumber.innerText = 'Card number can only consist of numeric data!';
    }
 else if(inputNumber.value.length < 16){
        inputNumber.style.borderColor = 'red';
        errorNumber.style.display = 'block';
        errorNumber.innerText = `Card number can't be shorter than 16 numbers!`;
    } else if(inputNumber.value.length > 16){
        inputNumber.style.borderColor = 'red';
        errorNumber.style.display = 'block';
        errorNumber.innerText = `Card number can't be longer than 16 numbers!`;
    }
}

function monthFunction(){
    if (inputMonth.value == ''){
        inputMonth.style.borderColor = lightGrey;
        month.innerText = '00';
        errorMonth.style.display = 'none';
        return false;
    } else if (Number(inputMonth.value) > 0 && Number(inputMonth.value) <= 12){
        inputMonth.style.borderColor = 'var(--very-dark-grey-violet)';
        month.innerText = inputMonth.value;
        errorMonth.style.display = 'none';
        return true;
    } else {
        month.innerText = '00';
        errorMonth.style.display = 'block';
        inputMonth.style.borderColor = 'red';
        let err = 'an error occured';
        if (inputMonth.value.match(/[A-Z]/i)){
            err = `Month must not be filled with an alphanumeric value`;
        }
         else if(Number(inputMonth.value) > 12 || Number(inputMonth.value) < 1){
            err = 'Number must not be smaller than 1 or greater than 12';
         }
        errorMonth.innerText = err;
        return false;
    }
    
}

function yearFunction(){
    if (inputYear.value == ''){
        inputYear.style.borderColor = lightGrey;
        year.innerText = '00';
        errorYear.style.display = 'none';
        return false;
    } else if (Number(inputYear.value) <= 99){
        inputYear.style.borderColor = 'var(--very-dark-grey-violet)';
        year.innerText = inputYear.value;
        errorYear.style.display = 'none';
        return true;
    } else {
        year.innerText = '00';
        errorYear.style.display = 'block';
        inputYear.style.borderColor = 'red';
        let err = 'an error occured';
        if (inputYear.value.match(/[A-Z]/i)){
            err = `Year must not be filled with an alphanumeric value!`;
        }
         else if(Number(inputYear.value) > 99){
            err = 'Year must not be greater than 99'; 
         }
        errorYear.innerText = err;
        return false;
    }
    
}

function cvcFunction(){
    if (inputCVC.value == ''){
        inputCVC.style.borderColor = lightGrey;
        cvc.innerText = '000';
        errorCVC.style.display = 'none';
        return false;
    } else if (Number(inputCVC.value) <= 999){
        inputCVC.style.borderColor = 'var(--very-dark-grey-violet)';
        cvc.innerText = inputCVC.value;
        errorCVC.style.display = 'none';
        return true;
    } else {
        cvc.innerText = '000';
        errorCVC.style.display = 'block';
        inputCVC.style.borderColor = 'red';
        let err = 'an error occured';
        if (inputCVC.value.match(/[A-Z]/i)){
            err = `CVC must not be filled with an alphanumeric value!`;
        }
         else if(Number(inputCVC.value) > 999){
            err = 'CVC must not be greater than 999'; 
         }
        errorCVC.innerText = err;
        return false;
    }
    
}