import {formSuccess} from './renderComponents.js'

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.querySelector("#email").value;
    const career = document.querySelector("#career").value;
    const semester = document.querySelector("#semester").value;
    const rating = document.querySelector('input[name="rating"]:checked').value;


    emailjs.send("service_ybjy8ih", "template_3ptksec", {
        from_name: `${name} ${surname}`,
        email: email,
        career: career,
        semester: semester,
        rating: rating,
        message: document.getElementById('opinion').value,
    }).then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        formSuccess();
        
    }, function(error) {
        console.log("FAILED...", error);
    });
});