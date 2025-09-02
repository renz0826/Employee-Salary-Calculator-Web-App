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

document.querySelector(".SalaryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  solve();
});
