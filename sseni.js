const headyImage = '<img src="images/TITLE_headervinc.jpg" alt="vincenz" class="heady">';
$('#text1').append(headyImage);

function generateFilenames(n, flag) {
    const folder = flag ? "pt" : "ls";
    const images = Array.from({ length: n }, (_, i) => `<img src="images/sprite.jpg" data-src="images/Sato Seni/${folder} (${i + 1}).jpg" class="${folder} ${i + 1}">`);
    return images;
}

const allImagesls = generateFilenames(153, 0);
const allImagespt = generateFilenames(32, 1);

const concatenatedArray = [];

for (let i = 0, j = allImagespt.length; i < allImagesls.length || j > 0;) {
    concatenatedArray.push(allImagesls[allImagesls.length - ++i]); // LS
    if (i % 2 === 1 && j > 0) {
        concatenatedArray.push(allImagespt[allImagespt.length - j--]); // PT
    }
}

$('#photos').append(concatenatedArray.join(''));

$('.heady').click(() => window.location.href = 'vinnnweb.html');

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

overlay.addEventListener('touchstart', e => {
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