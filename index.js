let selectedRating = 0;

// Select all rating circles and add event listeners
document.querySelectorAll(".circle").forEach((circle) => {
  circle.addEventListener("click", () => {
    // Remove active class from all circles
    document
      .querySelectorAll(".circle")
      .forEach((c) => c.classList.remove("active"));

    // Add active class to the selected circle
    circle.classList.add("active");

    // Store the selected rating
    selectedRating = circle.textContent;
  });
});

// Handle submit button click
document.querySelector(".button").addEventListener("click", () => {
  if (selectedRating > 0) {
    // Hide rating card and show thank-you card
    document.querySelector(".rating-card").style.display = "none";
    document.querySelector(".thank-you-card").style.display = "block";

    // Update the rating value in the thank-you message
    document.getElementById("rating").textContent = selectedRating;
  } else {
    alert("Please select a rating before submitting.");
  }
});