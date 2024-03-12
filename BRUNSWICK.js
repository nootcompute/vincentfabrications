const headyImage = '<img src="images/TITLE_headervinc.jpg" alt="vincenz" class="heady"></img>';
$('#text1').append(headyImage);

function generateFilenames(n, flag) {
    const images = [];
    const folder = flag ? "pt" : "ls";
    for (let i = 1; i <= n; i++) {
        images.push(`<img src="images/sprite.jpg" data-src="images/BRUNSWICK/${folder} (${i}).jpg" class="${folder} ${i}">`);
    }
    return images;
}

const allImagesls = generateFilenames(12, 0);
const allImagespt = generateFilenames(3, 1);

const concatenatedArray = [];
let i = 0;
let j = 0;

while (i < allImagesls.length || j < allImagespt.length) {
    concatenatedArray.push(allImagesls[i]); // LS

    // Check if we need to insert an element from allImagespt
    if (i % 3 === 1 && j < allImagespt.length) {
        concatenatedArray.push(allImagespt[j]); // PT
        j++;
    }
    i++;
}

// Add remaining elements from allImagespt if any
while (j < allImagespt.length) {
    concatenatedArray.push(allImagespt[j]); // PT
    j++;
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
    document.body.style.overflow = 'hidden';
    o_img.src = this.src;
    
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