//DOM For The Portfolio
const portfolio1 = document.querySelector("#profile1");
portfolio1.addEventListener("click", () => AccessPortfolio1());
const portfolio2 = document.querySelector("#profile2");
portfolio2.addEventListener("click", () => AccessPortfolio2());
const portfolio3 = document.querySelector("#profile3");
portfolio3.addEventListener("click", () => AccessPortfolio3());

function AccessPortfolio1(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/portfolio1.html");
}
function AccessPortfolio2(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/portfolio2.html");
}
function AccessPortfolio3(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/portfolio3.html");
}
