const headyImage = '<img src="images/TITLE_headervinc.jpg" alt="vincenz" class="heady"></img>';
$('#text1').append(headyImage);

function generateFilenames(n, flag) {
    const images = [];
    const folder = flag ? "pt" : "ls";
    for (let i = 1; i <= n; i++) {
        images.push(`<img src="images/sprite.jpg" data-src="images/FAB/${folder} (${i}).jpg" class="${folder} ${i}">`);
    }
    return images;
}

const allImagesls = generateFilenames(1, 0);
const allImagespt = generateFilenames(55, 1);

const concatenatedArray = [];
let i2 = 0;
let flag = 9;
for (let i = 0; i < allImagespt.length; i++) {
    concatenatedArray.push(allImagespt[i]); // PT
    flag--;
    if (i2 < allImagesls.length && !flag) {
        concatenatedArray.push(allImagesls[i2]); // LS
        flag += 1;
        i2++;
    }
}

$('#photos').append(concatenatedArray.join(''));

$('.heady').click(function () {
    window.location = 'vinnnweb.html';
});

