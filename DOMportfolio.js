//DOM For The Portfolio
const profile = document.querySelector("#profile");
profile.addEventListener("click", () => AccessProfilePage());
const portfolio1 = document.querySelector("#profile1");
portfolio1.addEventListener("click", () => AccessPortfolio1());
const portfolio2 = document.querySelector("#profile2");
portfolio2.addEventListener("click", () => AccessPortfolio2());
const portfolio3 = document.querySelector("#profile3");
portfolio3.addEventListener("click", () => AccessPortfolio3());

let portfolioPage = document.getElementById("PortfolioPage");
let portfolioPageInnerHTML =
`<section class="pcontainer">
<section class="pcards">
    <section class="pcontent">
        <h2 class="p-name">I am Naadirah Karim</h2>
        <p class="u-email"><h3>Email: 2427389@gmail.students.wits.ac.za</h3></p>
        <p>Welcome to my website! My name is Naadirah and I am a Engineering in Digital Arts student at the University of the Witwatersrand. I’m passionate about knowledge related to software development and art. I am enthusiastic to share some of my project and experiences with you.
        <p>Every insectionidual has their own unique set of skills and perspectives to offer including myself. I strive to bring my own voice and creativity to everything I do. This including working on group projects, pursuing my personal hobbies and in general completing mundane activities. I am always seeking new challenges and opportunities to learn, create and grow.</p>
        <p>In this website, you will find a collection of my academic and personal work. From blog posts about the various readings, I’ve finished to design samples and write ups about this website as well as my showcase of art works and programming projects I’ve completed. This website has exhibited my skills and interests to an extent that motivates me to achieve my goals.</p>
        <p>Thank you for taking the time to explore my website and I hope you enjoy what you see.</p>   
        </section>
    </section>
</section>`;

portfolioPage.innerHTML = portfolioPageInnerHTML; 

function AccessProfilePage(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/profile.html");
}
function AccessPortfolio1(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/portfolio1.html");
}
function AccessPortfolio2(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/portfolio2.html");
}
function AccessPortfolio3(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/portfolio3.html");
}
