
   const slider = document.querySelector('.slider');
   const items = document.querySelectorAll('.gallery-item');
   const leftArrow = document.querySelector('.left-arrow');
   const rightArrow = document.querySelector('.right-arrow');

   let currentIndex = 0;

   function updateSliderPosition() {
      const itemWidth = items[0].offsetWidth + parseFloat(getComputedStyle(slider).gap); // Item width + gap
      slider.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
   }

   leftArrow.addEventListener('click', () => {
      currentIndex = Math.max(0, currentIndex - 1); // Prevent moving beyond the first item
      updateSliderPosition();
   });

   rightArrow.addEventListener('click', () => {
      const maxIndex = items.length - 3; // Ensure at least 3 items remain visible
      currentIndex = Math.min(maxIndex, currentIndex + 1);
      updateSliderPosition();
   });
