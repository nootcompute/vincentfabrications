const headyImage = '<img src="images/HEADING_vinc.jpg" alt="vincenz" class="heady"></img>';
$('#text1').append(headyImage);

document.addEventListener("DOMContentLoaded", function(event) {
    // Page has finished loading
    var image = document.querySelector('.overlay');
    // image.style.zIndex = '-1';
    // Function to handle transition end
    function handleTransitionEnd() {
      // Change additional variables once transition is complete
      image.style.zIndex = '-100'; // Change z-index
      image.removeEventListener('transitionend', handleTransitionEnd); // Remove event listener
    }
  
    // Add event listener for transition end
    image.addEventListener('transitionend', handleTransitionEnd);
  
    // Add class to trigger fade-in effect
    image.classList.add('loaded');
  });
  