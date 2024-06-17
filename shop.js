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

function grabfile(path) {
    const pathman = `${path.slice(0, -4)}/text.txt`;
    return pathman
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



const overlay = document.getElementById('overlay');

// HERE BELOW
overlay.addEventListener('keydown', function(event) {
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


// const arrows = document.getElementsByClassName('arrow');
const o_img = document.getElementById('o_img');
const o_img2 = document.getElementById('o_img2');
const o_img3 = document.getElementById('o_img3');
const photos = document.getElementById('photos');
const footer = document.querySelector('.footer');

var $photos = $('#photos img');
var pIndex;
var $phot2

$photos.click(function () {
    // pIndex = $photos.index(this);
    $('#itemsContainer').append(generateFilenames2(6, 1, this.src).join(''));
    $phot2 = $('#itemsContainer img');
    o_img.src = $phot2.eq(0).attr('src');
    o_img2.src = $phot2.eq(1).attr('src');
    o_img3.src = $phot2.eq(2).attr('src');

    pIndex = 0;

    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    photos.style.display = 'none';
    footer.style.display = 'none';

    fetch( grabfile(this.src) ) // fetch the text file
        .then(response => response.text()) // get the text from the response
        .then(text => {
            document.getElementById('fileContent').innerHTML = text; // update the DOM
        })
        .catch(err => console.log('Error reading file', err));







});

// var iphotos = $('#photos img');
// iphotos.click(function () {
//     var iteminfo = generateFilenames2(1, 1, this.src)
//     $('#itemsContainer').html(iteminfo.join(''));
//     o_img.src = this.src;

// })



let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if (touchendX < touchstartX) o_img.src = $photos.eq(++pIndex % $photos.length).attr('src');
  if (touchendX > touchstartX) o_img.src = $photos.eq((--pIndex + $photos.length) % $photos.length).attr('src');
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
    o_img.src = $phot2.eq((--pIndex + $phot2.length) % $phot2.length).attr('src');
    o_img2.src = $phot2.eq((pIndex + 1 + $phot2.length) % $phot2.length).attr('src');
    o_img3.src = $phot2.eq((pIndex + 2 + $phot2.length) % $phot2.length).attr('src');

    // o_img.src = $photos.eq(--pIndex % $photos.length % $photos.length).attr('src');
});

right.click(function() {
    o_img.src = $phot2.eq(++pIndex % $phot2.length).attr('src');
    o_img2.src = $phot2.eq((pIndex + 1) % $phot2.length).attr('src');
    o_img3.src = $phot2.eq((pIndex + 2) % $phot2.length).attr('src');


});
