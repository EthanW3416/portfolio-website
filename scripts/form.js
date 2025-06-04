// Display welcome alert on page load
function welcomeMessage() {
  const banner = document.createElement("div");
  banner.className = "welcome-banner";
  banner.innerText = "👋 Welcome to the Electric Car Company - Newsletter Signup";

  document.body.appendChild(banner);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    banner.style.opacity = "0";
    setTimeout(() => banner.remove(), 500);
  }, 5000);
}

// Validate first and last name fields
function validateForm() {
  // Get values from input fields and trim whitespace
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();

  // Regex to check for a valid email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!firstName || !lastName) {
    alert("Please fill in both your First and Last Name.");
    return false;
  }

  // Validate email format
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check if any age range radio button is selected
  const ageRadios = document.getElementsByName("age");
  let ageSelected = false;
  for (let i = 0; i < ageRadios.length; i++) {
    if (ageRadios[i].checked) {
      ageSelected = true;
      break;
    }
  }
  if (!ageSelected) {
    alert("Please select your age range.");
    return false;
  }

  // Check if at least one checkbox is selected in the services group
  const checkboxes = document.querySelectorAll('input[name="interest"]:checked');
  if (checkboxes.length === 0) {
    alert("Please select at least one area of interest.");
    return false;
  }

  // All validation passed
  return true;
}

// Opens the form in a new tab/window
function openForm() {
  window.open("/form-page.html", "_blank");
}