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