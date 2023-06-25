
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


// DOM for navigations header

const home = document.querySelector("#home");
home.addEventListener("click", () => AccessHomePage());
const profile = document.querySelector("#profile");
profile.addEventListener("click", () => AccessProfilePage());
const blog = document.querySelector("#blog");
blog.addEventListener("click", () => AccessBlogPage());
const design = document.querySelector("#design");
design.addEventListener("click", () => AccessDesignPage());
const essay = document.querySelector("#essay");
essay.addEventListener("click", () => AccessEssayPage());

let displayNavigation = document.getElementById("Navigation");
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

// // Create the header element
// const header = document.createElement('header');

// // Create the nav element
// const nav = document.createElement('nav');
// nav.style.marginTop = '-1500px';
// // Create the input element for the checkbox

// const input = document.createElement('input');
// input.type = 'checkbox';
// input.id = 'check';

// // Create the label element for the checkbox
// const label = document.createElement('label');
// label.htmlFor = 'check';
// label.classList.add('checkbtn');

// // Create the icon element
// const icon = document.createElement('i');
// icon.classList.add('fas', 'fa-bars');

// // Append the icon to the label
// label.appendChild(icon);

// // Create the logo image element
// const logoImg = document.createElement('img');
// logoImg.src = './images/Logo 2.png';
// logoImg.id = 'logo';

// // Create the label element for the logo
// const logoLabel = document.createElement('label');
// logoLabel.htmlFor = 'logo';
// logoLabel.classList.add('logo');
// logoLabel.textContent = 'Naadirah Karim.';

// // Create the unordered list element
// const ul = document.createElement('ul');

// // Create an array of menu items
// const menuItems = [
//   { text: 'Home', href: 'index.html', className: 'active' },
//   { text: 'My Profile', href: './profile.html' },
//   { text: 'Blogs', href: './blog.html' },
//   { text: 'Design', href: './design.html' },
//   { text: 'Essay', href: './essay.html' }
// ];

// // Create list items and anchor elements for each menu item
// const liElements = menuItems.map(menuItem => {
//   const li = document.createElement('li');
//   const a = document.createElement('a');
//   a.href = menuItem.href;
//   a.textContent = menuItem.text;
//   if (menuItem.className) {
//     a.classList.add(menuItem.className);
//   }
//   li.appendChild(a);
//   return li;
// });

// // Append the list items to the unordered list
// ul.append(...liElements);

// // Append all the elements to the DOM
// nav.append(input, label, logoImg, logoLabel, ul);
// header.appendChild(nav);

// // Append the header to the document body
// document.body.appendChild(header);



