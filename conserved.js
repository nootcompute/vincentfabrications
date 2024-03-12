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