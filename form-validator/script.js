const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// error message
const showError = (input, message) => {
  const fromControl = input.parentElement;
  fromControl.className = 'form-control error';
  const small = fromControl.querySelector('small');
  small.innerText = message;
}

//success message 
const showSuccess = (input) => {
  const fromControl = input.parentElement;
  fromControl.className = 'form-control success';
}

// check for mandatory fields
const checkRequired = (inputArr) => {
  inputArr.forEach(input => {
    if (input.value === "") {
      showError(input, `${getFieldName(input)} is required`);
    }else {
      showSuccess(input);
    }
  });
}

//for checking length 
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// check email
const checkEmail = (input) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// check password
const checkPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, `Passwords doesn't match`);
  }
}


//get field name
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// event listener
form.addEventListener('submit', function(e) {
  e.preventDefault();

  ///refactored
  checkRequired([username,email,password,password2]);
  checkLength(username, 3, 15);
  checkLength(password, 8, 15);
  checkEmail(email);
  checkPasswordMatch(password, password2);
})

//initial code

// if (username.value === '') {
//   showError (username, 'Username is required');
// } else {
//   showSuccess(username);
// }

// if (email.value === '') {
//   showError (email, 'Email is required');
// } else if (!validEmail(email.value)) {
//   showError (email, 'Email is not valid');
// } else {
//   showSuccess(email);
// }

// if (password.value === '') {
//   showError (password, 'Password is required');
// } else {
//   showSuccess(password);
// }

// if (password2.value === '') {
//   showError (password2, 'Confirm password is required');
// } else if (password2.value !== password.value) {
//   showError(password2, 'Password and Confirm Password must be same');
// }
// else {
//   showSuccess(password2);
// }