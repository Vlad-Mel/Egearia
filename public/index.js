let introduction_background = document.getElementById('introduction_background');
const flatBackground = "./assets/introduction_full_background.svg";
const curveBackground = './assets/homepage_first_section.png';

window.addEventListener('resize', function () {
    const height = this.window.innerHeight;
    const width = this.window.innerWidth;

    if (height > width) {
        introduction_background.src = flatBackground;
    } else {
        introduction_background.src = curveBackground
    }
    console.log(height, width)
})