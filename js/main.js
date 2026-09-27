import { getGames } from "./api.js";

const games = await getGames();

console.log(games);

// ----------------------------------------------------------------------------------------------------------------
// to top
// ----------------------------------------------------------------------------------------------------------------

const toTop = document.querySelectorAll(".toTop");
toTop.forEach((data)=>{
    data.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    })
})

// ----------------------------------------------------------------------------------------------------------------
// image slider
// ----------------------------------------------------------------------------------------------------------------

const arr = [games[0],games[1],games[2],games[5],games[7],games[10],games[11],games[12],games[23],games[20],games[32]]
console.log(arr);

let currentIndex = 0;
const slideContainer = document.getElementById("container")

const showSlide = (index)=>{

    slideContainer.innerHTML = "";  

    const game = arr[index];

    const slideImg = document.createElement("img");
    slideImg.src = game.background_image;
    slideImg.classList.add("slide-img")

    const overlay = document.createElement("div")
    overlay.classList.add("overlay");

    const slideTitle = document.createElement("h3");
    slideTitle.innerHTML = game.name;
    slideTitle.classList.add("slide-title")

    slideContainer.appendChild(slideImg)
    slideContainer.appendChild(overlay)
    slideContainer.appendChild(slideTitle);

    slideImg.classList.remove("slide");
    slideTitle.classList.remove("slide")
    void slideImg.offsetWidth;
    slideImg.classList.add("slide");
    slideTitle.classList.add("slide")

}
showSlide(currentIndex);

const next = document.getElementById("next");
next.addEventListener("click",()=>{
    if (currentIndex < arr.length -1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showSlide(currentIndex);
})

const prev = document.getElementById("prev");
prev.addEventListener("click",()=>{
    if(currentIndex === 0){
        currentIndex = arr.length -1
    }else{
        currentIndex--;
    }
    showSlide(currentIndex)
})

let interval;

const startSlider = ()=>{
    clearInterval(interval);
    interval = setInterval(()=>{
        if(currentIndex < arr.length -1){
            currentIndex ++;
        }
        else{
            currentIndex = 0
        }
        showSlide(currentIndex)
    },5000)
}

const stopSlider = ()=>{
    clearInterval(interval);
}

slideContainer.addEventListener("mouseenter",stopSlider);
slideContainer.addEventListener("mouseleave",startSlider);

next.addEventListener("mouseenter",stopSlider)
next.addEventListener("mouseleave",startSlider)

prev.addEventListener("mouseenter",stopSlider)
prev.addEventListener("mouseleave",startSlider)

startSlider();

// ----------------------------------------------------------------------------------------------------------------
//  login modal
// ----------------------------------------------------------------------------------------------------------------

const openModal = document.getElementById("open-login");
const closeModal = document.getElementById("close-login");
const modalOverlay = document.getElementById("modal-overlay");
const loginModal = document.getElementById("login-popup");

openModal.addEventListener("click",()=>{
    loginModal.classList.add("active");
    modalOverlay.classList.add("active");
})

closeModal.addEventListener("click",()=>{
    loginModal.classList.remove("active");
    modalOverlay.classList.remove("active");
})