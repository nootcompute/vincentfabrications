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

function generateFilenames2(n, flag, path) {
    const images = [];
    const folder = flag ? "pt" : "ls";
    for (let i = 1; i <= n; i++) {
        images.push(`<img src="${path.slice(0, -4)}/${folder} (${i}).jpg" class="${folder} ${i}">`);
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





// FROM HERE BELOW IS FROM CONSERVED_ WE JUST NEEDED TO REMOVE SOME OF IT::





// HERE BELOW
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
// const arrows = document.getElementsByClassName('arrow');
const o_img = document.getElementById('o_img');
const photos = document.getElementById('photos');
const footer = document.querySelector('.footer');

var $photos = $('#photos img');
var pIndex;
$photos.click(function () {
    // pIndex = $photos.index(this);
    var iteminfo = generateFilenames2(1, 1, this.src)
    $('#itemsContainer').html(iteminfo.join(''));

    o_img.src = $('#itemsContainer img:first').attr('src');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    photos.style.display = 'none';
    footer.style.display = 'none';
});

// var iphotos = $('#photos img');
// iphotos.click(function () {
//     var iteminfo = generateFilenames2(1, 1, this.src)
//     $('#itemsContainer').html(iteminfo.join(''));
//     o_img.src = this.src;

// })

// overlay.addEventListener('click',function () {
//     overlay.style.display = 'none';
//     document.body.style.overflow = 'auto';
//     photos.style.display = 'flex';
//     footer.style.display = 'flex';
// } );

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

//NOW WE ARE BACK TO SHOP SPECIFIC I BELEIVE:

const left = $('.left');
const right = $('.right');

left.click(function() {
    alert('left arrow');
    // o_img.src = $photos.eq(--pIndex % $photos.length % $photos.length).attr('src');
});
right.click(function() {
    alert('right arrow');
});
