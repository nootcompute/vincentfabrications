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
