// Function to calculate and display salary
function solve() {
  // Get input values
  const employeeName = document.getElementById("name").value;
  const hours = parseFloat(document.getElementById("hours").value) || 0;
  const rate = parseFloat(document.getElementById("rate").value) || 0;

  // Salary computation
  const salary = hours * rate;

  // Update output fields
  let outEmployee = (document.getElementById("out-name").textContent =
    employeeName);
  let outHours = (document.getElementById("out-hours").textContent = hours);
  let outRate = (document.getElementById("out-rate").textContent =
    rate.toFixed(2));
  let outSalary = (document.getElementById("out-salary").textContent =
    salary.toFixed(2));
}

// Attach event listener
document.getElementById("solve").addEventListener("click", solve);
