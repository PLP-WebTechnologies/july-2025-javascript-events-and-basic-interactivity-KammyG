
// Part 1: Event Handling

// Click Event
document.getElementById("myBtn").addEventListener("click", () => {
    alert("Button was clicked!");
  });
  
  // Mouseover Event
  document.getElementById("hoverText").addEventListener("mouseover", () => {
    document.getElementById("hoverText").textContent = "You hovered over me!";
  });
  
 
  // Part 2: Interactive Features
  
  // Dark/Light Mode Toggle
  document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // Counter Feature
  let count = 0;
  const counterDisplay = document.getElementById("counter");
  document.getElementById("countBtn").addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
  });
  
  
  // Part 3: Form Validation
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errors = [];
  
    // Validation rules
    if (name === "") errors.push("Name cannot be empty.");
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) errors.push("Invalid email format.");
    if (password.length < 6) errors.push("Password must be at least 6 characters.");
  
    // Show errors or success
    const errorBox = document.getElementById("formErrors");
    if (errors.length > 0) {
      errorBox.innerHTML = errors.join("<br>");
      errorBox.style.color = "red";
    } else {
      errorBox.textContent = "Form submitted successfully!";
      errorBox.style.color = "green";
      this.reset(); // Reset form if valid
    }
  });
  