// Check if email is valid
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

// Check if the value has only numbers
function isNumeric(value) {
  return /^\d+$/.test(value);
}

// Check if password has uppercase, lowercase, number and is 6+ characters long
function isValidPassword(password) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  return regex.test(password);
}

// Run this when the form is submitted
$("#registrationForm").submit(function (event) {
  event.preventDefault(); // Stop the form from refreshing the page

  var errorMessage = "";

  var name = $("#name").val().trim();
  var email = $("#email").val().trim();
  var phone = $("#phone").val().trim();
  var password = $("#password").val();

  // Clear old messages
  $("#messageBox").removeClass("error success").hide();

  // Check each input and add errors if any
  if (name === "") {
    errorMessage += "<p>Name is required.</p>";
  }

  if (email === "") {
    errorMessage += "<p>Email is required.</p>";
  } else if (!isEmail(email)) {
    errorMessage += "<p>Email format is invalid.</p>";
  }

  if (phone === "") {
    errorMessage += "<p>Phone number is required.</p>";
  } else if (!isNumeric(phone) || phone.length !== 10) {
    errorMessage += "<p>Phone number must be exactly 10 digits.</p>";
  }

  if (password === "") {
    errorMessage += "<p>Password is required.</p>";
  } else if (!isValidPassword(password)) {
    errorMessage += "<p>Password must have uppercase, lowercase, number and be at least 6 characters.</p>";
  }

  // If there are no errors, show success
  if (errorMessage === "") {
    $("#messageBox")
      .addClass("success")
      .html("<p>Form submitted successfully!</p>")
      .slideDown();
  } else {
    // If there are errors, show them
    $("#messageBox")
      .addClass("error")
      .html(errorMessage)
      .slideDown();
  }
});

// When the checkbox is clicked, show or hide the password
$("#togglePassword").change(function () {
  var passwordInput = $("#password");
  if ($(this).is(":checked")) {
    passwordInput.attr("type", "text");
  } else {
    passwordInput.attr("type", "password");
  }
});