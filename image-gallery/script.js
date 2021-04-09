const nextButton = document.querySelector('[data-next')
const prevButton = document.querySelector('[data-prev')
const imageDisplay = document.querySelector('[data-image]')
let counter = 0;
const images = ['image0', 'image1', 'image2', 'image3']

nextButton.addEventListener('click', () => {
    counter++;
    if (counter > 3){
        counter = 0
     };
     imageDisplay.style.backgroundImage = `url('${images[counter]}.jpeg')`
})

prevButton.addEventListener('click', () => {
    counter--;
    if (counter < 0){
        counter = 3    
    };
    imageDisplay.style.backgroundImage = `url('${images[counter]}.jpeg')`
})



