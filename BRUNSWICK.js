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

