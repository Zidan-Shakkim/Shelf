import { getGames } from "./api.js";

const games = await getGames();

console.log(games);

const info = games[0];

    const slideImg = document.createElement("img");
    slideImg.src = info.background_image;
    slideImg.classList.add("slide-img")
    const slideTitle = document.createElement("h3");
    slideTitle.innerHTML = info.name;
    slideTitle.classList.add("slide-title")
    const slideContainer = document.getElementById("container")
    slideContainer.appendChild(slideImg)
    slideContainer.appendChild(slideTitle);


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