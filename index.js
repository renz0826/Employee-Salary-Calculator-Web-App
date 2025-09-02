// Function to calculate and display salary
function solve() {
  // Get input values
  const employeeName = document.getElementById("name").value;
  const hours = parseFloat(document.getElementById("hours").value) || 0;
  const rate = parseFloat(document.getElementById("rate").value) || 0;

  // Salary computation
  const salary = hours * rate;

  // Update output fields
  document.getElementById("out-name").textContent = employeeName;
  document.getElementById("out-hours").textContent = hours;
  document.getElementById("out-rate").textContent = rate.toFixed(2);
  document.getElementById("out-salary").textContent = "₱ " + salary.toFixed(2);
}

// Disables number input for name
document.getElementById("name").addEventListener("keypress", function (e) {
  if (e.key >= "0" && e.key <= "9") {
    e.preventDefault();
  }
});

// Event listener for clicking enter
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    solve();
  }
});

// Preventing reload and triggers function solve
document.querySelector(".SalaryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  solve();
});
