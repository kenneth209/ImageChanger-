const image = document.getElementById('image');
const changeButton = document.getElementById('changeButton');
let isSmiley = true;

changeButton.addEventListener('click', () => {
    if (isSmiley) {
        image.src = 'images.png.jpg';
        document.body.style.backgroundColor = '#ffcccc'; // light red color
    } else {
        image.src = 'images (6).jpg';
        document.body.style.backgroundColor = '#f0f0f0'; // reset to default background color
    }
    isSmiley = !isSmiley;
});
