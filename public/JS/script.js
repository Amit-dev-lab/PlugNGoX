

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".input-group input");

    inputs.forEach(input => {
        input.addEventListener("input", function() {
            const label = this.previousElementSibling; // Selects the label before input
            if (this.value.trim() !== "") {
                label.style.display = "none"; // Hide label when typing
            } else {
                label.style.display = "block"; // Show label when input is empty
            }
        });
    });
});
