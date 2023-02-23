let movies = [
    {
        name: "falcon and the winter soldier",
        des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero commodo",
        image: "images/slider 1.png"
    },
    {
        name: "loki",
        des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero commodo",
        image: "images/slider 2.png"
    },
    {
        name: "wanda vision",
        des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero commodo",
        image: "images/slider 3.png"
    },
    {
        name: "raya and the last dragon",
        des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero commodo",
        image: "images/slider 4.png"
    },
    {
        name: "luca",
        des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero commodo",
        image: "images/slider 5.png"
    }
    
];

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;  //to track the current slide

const createSlide = () => {
    if(slideIndex >=movies.length){
        slideIndex = 0;
    }
    //create DOM elements
    let slide = document.createElement('div');
    var imageElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all the elements
    imageElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imageElement);
    carousel.appendChild(slide);

    //setting up images
    imageElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting elements classnames
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if(sliders.length)
    {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
};

for(let i=0; i<3; i++){
    createSlide();
}
setInterval(() => {
    createSlide();
}, 3000);


//video cards

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

//Card sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.next-btn')];

cardContainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth -200;
    })

    preBtns[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth +200;
    })
})