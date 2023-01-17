
const slider = document.querySelector('.slider');
const items = document.querySelector('.slider-items');
const controls = document.querySelectorAll('.slider-control');

let currentIndex = 0;
const itemWidth = 500; // The width of each item in pixels

// Add click event listeners to the controls
controls.forEach(control => control.addEventListener('click', e => {
  e.preventDefault();
  // Determine the new index based on the control that was clicked
  const direction = control.dataset.direction;
  const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
  // Update the current index and animate the movement of the items
  currentIndex = updateIndex(newIndex);
  animateItems();
}));

// Update the current index to wrap around to the beginning or end if necessary
function updateIndex(newIndex) {
  if (newIndex < 0) {
    return items.children.length - 1;
  } else if (newIndex >= items.children.length) {
    return 0;
  }
  return newIndex;
}

// Animate the movement of the items
function animateItems() {
  items.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

