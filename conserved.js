document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowRight':
            o_img.src = $photos.eq(++pIndex % $photos.length).attr('src');
            break;
        case 'ArrowLeft':
            o_img.src = $photos.eq(--pIndex % $photos.length % $photos.length).attr('src');
            break;
        case 'Escape':
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
            break;
    }
})

// Define a function to check container visibility and update body overflow
function checkContainerVisibility() {
    var container = document.getElementById('overlay');
    var containerStyle = window.getComputedStyle(container);
    var containerDisplay = containerStyle.getPropertyValue('display');
    
    if (containerDisplay === 'block') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  
  // Attach an event listener to the click event on the document
  document.addEventListener('click', checkContainerVisibility);
  