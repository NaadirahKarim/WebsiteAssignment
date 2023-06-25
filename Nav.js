// DOM for navigations 

const home = document.querySelector("#home");
home.addEventListener("click", () => AccessHomePage());
const profile = document.querySelector("#profile");
profile.addEventListener("click", () => AccessProfilePage());
const blog = document.querySelector("#blog");
blog.addEventListener("click", () => AccessBlogPage());
const design = document.querySelector("#design");
design.addEventListener("click", () => AccessDesignPage());
const essay = document.querySelector("#essay0");
essay.addEventListener("click", () => AccessEssayPage());

let navigation = document.getElementById("Navigation");
let backToTopInnerHTML =
`<a class="gotop" href="#"> <i class="fa-solid fa-arrow-up"></i> </a>`;

navigation.innerHTML = backToTopInnerHTML;

let homePage = document.getElementById("HomePage");
let homePageInnerHTML =
`<section class="p-card">
<section class="container">
        <section class="content">
            <section class="profileimg">
           <p><img  src="./images/Profile.jpg" class="u-photo" alt="Profile Pic Icon"></p>     
            </section>
            <p class="p-name"><h1> Introducing Naadirah Karim... </h1></p> 
            <h2>A Digital Arts Engineering Student</h2>
            <a href="./profile.html" class="About-btn">MORE ABOUT ME</a>
        </section>
    </section>                  
</section>`;

homePage.innerHTML = homePageInnerHTML;

function AccessHomePage(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/index.html");
}

function AccessProfilePage(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/profile.html");
}

function AccessBlogPage(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blog.html#gsc.tab=0");
}

function AccessDesignPage(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/design.html#gsc.tab=0");
}

function AccessEssayPage(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/essay.html");
}



////Appearacnce Animation
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if(entry.isIntersecting){
//             entry.target.classList.add("visible");
//         }else{
//             entry.target.classList.remove("visible");
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((element) => observer.observe (element));



