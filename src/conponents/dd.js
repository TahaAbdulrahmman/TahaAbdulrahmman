// Get all elements with the class 'element'
const elements = document.querySelectorAll('.element');
// Function to add class to clicked element and remove it from others
function toggleClass(event) {
  // Remove the class from all elements
  elements.forEach((element) => {
    element.classList.remove('active');
  });
  // Add the class to the clicked element
  event.target.classList.add('active');
}

// Attach click event listener to each element
elements.forEach((element) => {
  element.addEventListener('click', toggleClass);
});