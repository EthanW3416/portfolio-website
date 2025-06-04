// Get modal elements
const modal = document.getElementById("fullscreenModal");
const modalImg = document.getElementById("fullscreenImg");
const closeBtn = document.querySelector(".close-button");

// Show image in modal when any clickable image is clicked
document.querySelectorAll('.clickable-image').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// Close modal on 'X'
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Optional: Close modal if user clicks outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});