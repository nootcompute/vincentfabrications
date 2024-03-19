const headyImage = '<img src="images/TITLE_headervinc.jpg" alt="vincenz" class="heady"></img>';
$('#text1').append(headyImage);

function generateFilenames(n, flag) {
    const images = [];
    const folder = flag ? "pt" : "ls";
    for (let i = 1; i <= n; i++) {
        images.push(`<img src="images/sprite.jpg" data-src="images/shop/${folder} (${i}).jpg" class="${folder} ${i}">`);
    }
    return images;
}

const allImagesls = generateFilenames(0, 0);
const allImagespt = generateFilenames(7, 1);

const concatenatedArray = [];
for (let i = 0, j = allImagespt.length; i < allImagesls.length || j > 0;) {
  concatenatedArray.push(allImagesls[allImagesls.length - ++i]); // LS
  if (i % 2 === 1 && j > 0) {
      concatenatedArray.push(allImagespt[allImagespt.length - j--]); // PT
  }
}


$('#photos').append(concatenatedArray.join(''));

$('.heady').click(function () {
    window.location = 'vinnnweb.html';
});

const overlay = document.getElementById('overlay');
const o_img = document.getElementById('o_img');

var $photos = $('#photos img');
var pIndex
$photos.click(function () {
    pIndex = $photos.index(this);
    overlay.style.display = 'block';
    o_img.src = this.src;
    document.body.style.overflow = 'hidden';
    
    // alert(nextImage.attr('src'))
});


overlay.addEventListener('click',function () {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
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