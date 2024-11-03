/*const form = document.querySelector("form");
const email = document.querySelector("#email");
const errorMsg = document.querySelector("#error-msg");

form.addEventListener("submit", (event) => {
    if (!form.checkValidity() || !isSomeRadioBtnChecked() ) {
        event.preventDefault();
        isEmailValid();
        errorMsg.classList.remove("hidden");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    isEmailValid();
});


const isEmailValid = () => {
    email.addEventListener("focusout", () => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Ingresa un mail valido");
            email.reportValidity();
            email.classList.add("invalid"); 
        } else {
            email.setCustomValidity("");
            email.classList.remove("invalid");
            email.classList.add("valid"); 
        }
    });
};

const isSomeRadioBtnChecked = () => {
    const radioButtons = document.querySelectorAll('input[name="rating"]');
    let isChecked = false;
    radioButtons.forEach(radio => {
        if (radio.checked) {
            isChecked = true;
        }
    });
    return isChecked;
}*/

// const form = document.querySelector("form");
// const email = document.querySelector("#email");
// const errorMsg = document.querySelector("#error-msg");

// form.addEventListener("submit", (event) => {
//     if (!validateFields() || !form.checkValidity() || !isSomeRadioBtnChecked()) {
//         event.preventDefault();
//         errorMsg.classList.remove("hidden");
//     } else {
//         errorMsg.classList.add("hidden");
//     }
// });

// document.addEventListener("DOMContentLoaded", () => {
//     isEmailValid();
// });

// const validateFields = () => {
//     let isValid = true;

//     // Validate text inputs
//     const requiredTextInputs = document.querySelectorAll('input[type="text"][required]');
//     requiredTextInputs.forEach(input => {
//         if (!input.value.trim()) {
//             input.classList.add("invalid");
//             isValid = false;
//         } else {
//             input.classList.remove("invalid");
//         }
    // });

    // Validate select elements
    // const requiredSelects = document.querySelectorAll('select[required]');
    // requiredSelects.forEach(select => {
    //     if (!select.value.trim()) {
    //         select.classList.add("invalid");
    //         isValid = false;
    //     } else {
    //         select.classList.remove("invalid");
    //     }
    // });

    // Validate textarea if required
//     const opinionField = document.querySelector('#opinion');
//     if (opinionField && opinionField.value.trim() === "") {
//         opinionField.classList.add("invalid");
//         isValid = false;
//     } else {
//         opinionField.classList.remove("invalid");
//     }

//     return isValid;
// }

// const isEmailValid = () => {
//     email.addEventListener("focusout", () => {
//         if (email.validity.typeMismatch || email.value === "") {
//             email.setCustomValidity("Ingresa un mail valido");
//             email.reportValidity();
//             email.classList.add("invalid"); 
//         } else {
//             email.setCustomValidity("");
//             email.classList.remove("invalid");
//             email.classList.add("valid"); 
//         }
//     });
// };

// const isSomeRadioBtnChecked = () => {
//     const radioButtons = document.querySelectorAll('input[name="rating"]');
//     let isChecked = false;
//     radioButtons.forEach(radio => {
//         if (radio.checked) {
//             isChecked = true;
//         }
//     });
//     if (!isChecked) {
//         document.querySelector('#error-msg').classList.remove('hidden');
//     } else {
//         document.querySelector('#error-msg').classList.add('hidden');
//     }
//     return isChecked;
// }


const form = document.querySelector("form");
const email = document.querySelector("#email");
const errorMsg = document.querySelector("#error-msg");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission for validation checks
    isSomeRadioBtnChecked();
    // Check validation
    if (!validateFields() || !form.checkValidity() || !isSomeRadioBtnChecked()) {
        console.log('lol');
    } else {
        errorMsg.classList.add("hidden");

        // Dispatch a custom event for successful validation
        form.dispatchEvent(new Event("validSubmit"));
    }
});

document.addEventListener("DOMContentLoaded", () => {
    isEmailValid();
});

const validateFields = () => {
    let isValid = true;

    const requiredTextInputs = document.querySelectorAll('input[type="text"][required]');
    requiredTextInputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add("invalid");
            isValid = false;
        } else {
            input.classList.remove("invalid");
        }
    });

    return isValid;
};

const isEmailValid = () => {
    form.addEventListener("submit", () => {
        if (email.validity.typeMismatch || email.value === "") {
            email.setCustomValidity("Please enter a valid email");
            email.reportValidity();
            email.classList.add("invalid"); 
        } else {
            email.setCustomValidity("");
            email.classList.remove("invalid");
            email.classList.add("valid"); 
        }
    });
};

const isSomeRadioBtnChecked = () => {
    const radioButtons = document.querySelectorAll('input[name="rating"]');
    let isChecked = false;
    radioButtons.forEach(radio => {
        if (radio.checked) {
            isChecked = true;
        }
    });
    if (!isChecked) {
        document.querySelector('#error-msg').classList.remove('hidden');
    } else {
        document.querySelector('#error-msg').classList.add('hidden');
    }
    return isChecked;
};