// Function to calculate and display salary
function solve() {
  // Get input values
  const employeeName = document.getElementById("name").value;
  const hours = parseFloat(document.getElementById("hours").value) || 0;
  const rate = parseFloat(document.getElementById("rate").value) || 0;
  const warning = document.getElementById("warning");

  // Intialize warning content to blank
  warning.textContent = "";

  if (!employeeName || isNaN(hours) || isNaN(rate)) {
    warning.textContent = "⚠️ Please fill out all the fields to proceed.";
    return;
  }

  if (hours < 0 || rate < 0) {
    warning.textContent = "⚠️ Hours and rate must be a non-negative.";
    return;
  }

  // Salary computation
  const salary = hours * rate;

  // Update output fields
  document.getElementById("out-name").textContent = employeeName;
  document.getElementById("out-hours").textContent = hours;
  document.getElementById("out-rate").textContent = rate.toFixed(2);
  document.getElementById("out-salary").textContent = salary.toFixed(2);
}

// Attach event listener
document.getElementById("solve").addEventListener("click", solve);
