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

const overlay = document.getElementById('overlay');
const o_img = document.getElementById('o_img');
const photos = document.getElementById('photos')

var $photos = $('#photos img');
var pIndex
$photos.click(function () {
    pIndex = $photos.index(this);
    overlay.style.display = 'block';
    o_img.src = this.src;
    document.body.style.overflow = 'hidden';
    photos.style.display = 'hidden'
    
    // alert(nextImage.attr('src'))
});


overlay.addEventListener('click',function () {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    photos.style.display = 'flex'
} );

let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if (touchendX < touchstartX) o_img.src = $photos.eq(++pIndex % $photos.length).attr('src');
  if (touchendX > touchstartX) o_img.src = $photos.eq(--pIndex + $photos.length % $photos.length).attr('src');
}
  
document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

overlay.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})

document.addEventListener("DOMContentLoaded", function() {
    var lazyLoadInstance = new LazyLoad({
        // Options can be specified here
    });
});