// Get reference to the display and all buttons
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Event handling for button clicks
buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      // Clear the display
      display.innerText = "";
    } else if (item.id == "backspace") {
      // Remove the last character
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      // Evaluate the expression and show result
      display.innerText = eval(display.innerText);
      // Handle division by zero case
      if (display.innerText == "Infinity") {
        display.innerText = "Infinity";
        // Clear the display after 1 second
        setTimeout(() => (display.innerText = ""), 1000);
      }
    } else if (display.innerText == "" && item.id == "equal") {
      // Display "Empty!" if no input
      display.innerText = "Empty!";
      // Clear the display after 1 second
      setTimeout(() => (display.innerText = ""), 1000);
    } else {
      // Append the clicked button's value to the display
      display.innerText += item.id;
    }
  };
});

// Get references for theme toggle button and calculator container
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

// Event handling for theme toggle
themeToggleBtn.onclick = () => {
  // Toggle dark mode class on the calculator and theme toggle button
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
};
