const allImagespt = [
  '<img src="images/s0.jpg" alt="Image 0" class="pt s0">',
  '<img src="images/s1.jpg" alt="Image 1" class="pt s1">',
  '<img src="images/s2.jpg" alt="Image 2" class="pt s2">',
  '<img src="images/s3.jpg" alt="Image 3" class="pt s3">',
  '<img src="images/s8.jpg" alt="Image 8" class="pt s8">',
  '<img src="images/s9.jpg" alt="Image 9" class="pt s9">',
  '<img src="images/s10.jpg" alt="Image 10" class="pt s10">',
  '<img src="images/s11.jpg" alt="Image 11" class="pt s11">',
];

const allImagesls = [
  '<img src="images/s4.jpg" alt="Image 4" class="ls s4">',
  '<img src="images/s5.jpg" alt="Image 5" class="ls s5">',
  '<img src="images/s6.jpg" alt="Image 6" class="ls s6">',
  '<img src="images/s7.jpg" alt="Image 7" class="ls s7">',
  '<img src="images/s12.jpg" alt="Image 12" class="ls s12">'
];

const allHeadings =  [
  '<a class="z"><img src="images/IMG_0088.jpg" alt="Shop" class="ct1"></a>',
  '<a class="x"><img src="images/IMG_0089.jpg" alt="Information" class="ct2"></a>',
  '<a class="c"><img src="images/IMG_0090.jpg" alt="Commissions" class="ct"></a>'
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(allImagespt);
shuffleArray(allImagesls);

function concatenateImagesWithCustomOrder(allImagespt, allImagesls) {
  const concatenatedArray = [];
  let flag = 0;

  for (let i = 0; i < allImagespt.length; i++) {
    if (!flag) {
      concatenatedArray.push(allImagespt[i]); // PT
      if (i < allImagesls.length) concatenatedArray.push(allImagesls[i]); // LS
      flag--;
    } else {
      if (i < allImagesls.length) concatenatedArray.push(allImagesls[i]); // LS
      concatenatedArray.push(allImagespt[i]); // PT
      flag++;
    }
  }

  return concatenatedArray.join('');
}

document.addEventListener("DOMContentLoaded", function() {
  var img = document.querySelector('.heady');
  img.onload = function () {
    document.getElementById('headings').style.display = 'grid';
  }
});

const imgString = concatenateImagesWithCustomOrder(allImagespt, allImagesls);
$('#photos').append(imgString);
$('#headings').append(allHeadings.join(''));

$('#text1').append('<img src="images/TITLE_headervinc.jpg" alt="vincenz" class="heady"></img><img class="ig" src="images/ig sprite.jpg"></img>');

$('.s8').click(function() {
  window.location = 'oathome.html';
});

$('.s5').click(function() {
  window.location = 'sseni.html';
});

$('.s6').click(function() {
  window.location = 'sseni.html';
});

$('.s12').click(function() {
  window.location = 'sseni.html';
});

$('.ct').click(function() {
  window.location = 'https://forms.gle/uBGfx5k3cyxc9Gob9';
});

$('.s7').click(function() {
  window.location = 'BRUNSWICK.html';
});

$('.s1').click(function() {
  window.location = 'copper.html';
});

$('.s10').click(function() {
  window.location = 'studio bags.html';
});

$('.s3').click(function() {
  window.location = 'Sean show.html';
});

$('.s4').click(function() {
  window.location = 'Sean stu.html';
});

$('.s9').click(function() {
  window.location = 'Mira Pedlar.html';
});

$('.s2').click(function() {
  window.location = 'Sean fittings.html';
});

$('.s0').click(function() {
  window.location = 'FAB.html';
});

$('.ct2').click(function() {
  window.location = 'information.html';
});

$('.ct1').click(function() {
  // alert('WORK IN PROGRESS:🐵🙈🐘🙉🙊🦍🍌🥥🔧🧗🦧🌴🐆🐅🦒');
  window.location = 'shop.html';
});

$('.s11').click(function() {
  window.location = 'Mira Pedlar.html';
});

$('.ig').click(function() {
  window.location = 'https://www.instagram.com/vincent.fabrications/';
});

$('.heady').click(function () {
  window.location = 'vinnnweb.html';
});
