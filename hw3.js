/*
    Name: Chelsa Jons
    Data created: June 23, 2025
    Data last edited:
    Version:2.0
    Description: Homework 2 JS Patient Information Form

*/


//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

//first name validation js code
function validateFname() {
    const fname = document.getElementById("fname").value.trim();
    var namePattern = /^[A-Z][a-zA-Z]+$/;
    //chelc if first name fied is empty
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannoot be empty.";
        return false;
    } else if (fname != "") {
        if (fname.match (namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) { //checks if name is at least 2 characters
        document.getElementById("fname-error").innerHTML = "First name must be at least 2 characters.";
        return false;
    } else if (fname.length > 30) { //checks if name is less than 30 characters
        document.getElementById("fname-error").innerHTML = "First name must be less than 30 characters.";
        return false; 
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
    }
    

}
//middle name validation js code
function validateMidd() {
    let midd = document.getElementById("midd").value.trim();
    var namePattern = /^[A-Z]$/;
    //cmakes middle initial uppercase
    midd = midd.toUpperCase();
    document.getElementById("midd").value = midd;

    if (!midd.match(namePattern)) {
        document.getElementById("midd-error").innerHTML = "Middle initial field cannot be more than one character.";
        return false;
    } else {
        document.getElementById("midd-error").innerHTML = "";
        return true;
    }

}
//last name validation js code
function validateLname() {
    let lname = document.getElementById("lname").value.trim();
    var namePattern = /^[A-Z][a-zA-Z]+$/;
    //check if last name field is empty
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannoot be empty.";
        return false;
    } else if (lname != "") {
        if (lname.match (namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) { //checks if name is at least 2 characters
        document.getElementById("lname-error").innerHTML = "Last name must be at least 2 characters.";
        return false;
    } else if (lname.length > 30) { //checks if name is less than 30 characters
        document.getElementById("lname-error").innerHTML = "Last name must be less than 30 characters.";
        return false; 
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
    }
    

}
//DOB validation js code
//Introduces a maximum age limit for valid dates.
function validateDOB() {
    DOB = document.getElementById("DOB");
    let date = new Date(DOB.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("DOB-error").innerHTML = 
        "Date can't be in the future";
        DOB.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("DOB-error").innerHTML = 
        "Date can't be more than 120 years ago";
        DOB.value = "";
       return false;
    } else {
        document.getElementById("DOB-error").innerHTML = "";
        return true;
    }

}
//SSN validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
         return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }

}

//Address 1 validation js code
function validateAddress1() {
    var ad1 = document.getElementById("address1").value.trim();
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = 
        "Please enter something for Address 1";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// city validation js code
function validateCity() {
    let city = document.getElementById("city").value.trim();
    console.log("validateCity called. Value:", city);

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be left blank.";
        return false;
    } else{
        document.getElementById("city-error").innerHTML = "";
        return true;
    }

}


//ZIP Code Validation js code
function validateZipCode() {
    const zipInput = document.getElementById("ZipCode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("ZipCode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

   if (zip.length !== 5 && zip.length !== 10) {
    document.getElementById("ZipCode-error").innerHTML = "Invalid ZIP code format";
    return false;
    }


    zipInput.value = zip;
    document.getElementById("ZipCode-error").innerHTML = "";
    return true;


}
//Email Validation js code
var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validateEmail() {
  const emailInput = document.getElementById("Email").value.trim();
  const errorSpan = document.getElementById("Email-error");

  if (!emailInput) {
    errorSpan.textContent = "Email cannot be blank.";
    return false;
  }

  if (!emailR.test(emailInput)) {
    errorSpan.textContent = "Please enter a valid email (e.g., user@domain.com).";
    return false;
  }

  errorSpan.textContent = ""; // Clear error if valid
  return true;


}

//Phone Number Validation js code
function validatePhone() {
  const phoneInput = document.getElementById("phone").value.trim();
  const errorSpan = document.getElementById("phone-error");

  if (!phoneInput) {
    errorSpan.textContent = "Phone number cannot be blank.";
    return false;
  }

  // Remove all non-digits
  const digitsOnly = phoneInput.replace(/\D/g, "");

  // Check length (10 digits for US numbers)
  if (digitsOnly.length !== 10) {
    errorSpan.textContent = "Phone number must be 10 digits (e.g., 123-456-7890).";
    return false;
  }

  // Format as 000-000-0000
  const formattedPhone = digitsOnly.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  document.getElementById("phone").value = formattedPhone; // Auto-format
  errorSpan.textContent = "";
  return true;
}

function validateUName() {
    let UName = document.getElementById("UName").value.toLowerCase();
    document.getElementById("UName").value = UName;

    if (UName.length == 0) {
        document.getElementById("UName-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(UName.charAt(0))) {
        document.getElementById("UName-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(UName)) {
        document.getElementById("UName-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (UName.length < 5) {
        document.getElementById("UName-error").innerHTML = 
        "User ID must be at least 5 characters";
         return false;
    } else if (UName.length > 30) {
        document.getElementById("UName-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("UName-error").innerHTML = "";
        return true;
    }
}
//Password validation js code
function validatePword() {
    const pword = document.getElementById("pword").value;
    const uid = document.getElementById("UName").value;

    const errorList = validatePassword(pword, uid);
    const errorSpan = document.getElementById("pword-error");

    if (errorList.length > 0) {
        errorSpan.innerHTML = errorList.join("<br>");
        return false;
    } else {
        errorSpan.innerHTML = "";
        return true;
    }
}

function validateConfirm_Pword() {
    const p1 = document.getElementById("pword").value;
    const p2 = document.getElementById("confirm_pWord").value;
    const error = document.getElementById("confirm_pWord-error");

    if (p1 !== p2) {
        error.innerHTML = "Passwords do not match.";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}


function reviewInput() {
    var formcontent = document.forms[0];  
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//removes the user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//show alert box when nessary
function showAlert() {
    var alertBox =  document.getElementById("alert-box");
    var claseAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    }
}
//submit button validation js code
function updateSubmitButtonState() {
    const errors = document.querySelectorAll(".error");
    let hasError = false;

    errors.forEach(err => {
        if (err.textContent.trim() !== "") {
            hasError = true;
        }
    });

    const submitBtn = document.getElementById("submit");
    if (hasError) {
        submitBtn.style.display = "none";
        submitBtn.disabled = true;
    } else {
        submitBtn.style.display = "inline-block";
        submitBtn.disabled = false;
    }
}
//validate all js 
function validateEverything() {
    let valid = true;

    if (!validateFname()) valid = false;
    if (!validateMidd()) valid = false;
    if (!validateLname()) valid = false;
    if (!validateDOB()) valid = false;
    if (!validateSsn()) valid = false;
    if (!validateAddress1()) valid = false;
    if (!validateCity()) valid = false;
    if (!validateZipCode()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validatePhone()) valid = false;
    if (!validateUName()) valid = false;
    if (!validatePword()) valid = false;
    if (!confirmPword()) valid = false;

    

    if (valid) {
        console.log("Form validated successfully.");
        document.getElementById("submit").disabled = false;
        return true;  // allow submit
    } else {
        console.log("Form has validation errors.");
        showAlert();  // your alert box
        return false; // block submit
    }
}

function showAlert() {
    alert("Please fix errors in the form before submitting.");
}


