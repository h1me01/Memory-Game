const grid = document.getElementById('content');
const imgs = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
    'img/img6.jfif',
    'img/img7.jpg',
    'img/img8.jfif'
];

const CreateImg = () => {
    const randomizedImgs = ShuffleArray(imgs.concat(imgs));
    let currentIndex = 0;

    for (let i = 0; i < 16; i++) {
        const currentDiv = document.createElement('div');
        currentDiv.className = 'img';

        const currentImg = document.createElement('img');
        currentImg.className = 'imgs';
        currentImg.id = i;
        currentImg.src = randomizedImgs[currentIndex];
        currentImg.alt = '...';

        currentDiv.appendChild(currentImg);
        grid.appendChild(currentDiv);

        currentIndex++;
    }
};

const ShuffleArray = (array) => {
    const shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
};

$(function () {
    CreateImg();

    const $img = $('.img');
    let checkClick = 0;
    let firstImg = '';
    let secondImg = '';

    $img.on('click', function () {
        const $this = $(this);
        const currentImgSrc = $this.children().css({ display: 'block' });

        checkClick++;
        firstImg = checkClick === 1 ? currentImgSrc : firstImg;
        secondImg = checkClick === 2 ? currentImgSrc : secondImg;

        if (checkClick === 2) {
            setTimeout(() => {
                if (firstImg.attr('src') === secondImg.attr('src')) {
                    firstImg.parent().remove();
                    secondImg.parent().remove();
                } else {
                    $img.children().css({ display: 'none' });
                }
            }, 2000);

            checkClick = 0;
        }
    });
});  