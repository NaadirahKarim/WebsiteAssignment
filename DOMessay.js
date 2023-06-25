//DOM For the Essay
const essay1 = document.querySelector("#essay1");
essay1.addEventListener("click", () => AccessEssayOne());
const essay2 = document.querySelector("#essay2");
essay2.addEventListener("click", () => AccessEssayTwo());


let essayPage = document.getElementById("EssayPage");
let essayPageInnerHTML =
`<section class="p-card">
<section id="essaycontainer"> 
    <section class="container">
        <!-- Essay -Assignmnt 2 -->
        <section class="essaypost">
            <section class="essayimg">
                <img src="./images/Eicon.jpg" alt="">
            </section>
            <section class="essayinfo">
                <section class="essaydate">
                    <span>1 May 2023 at 6:55PM</span>
                </section>
                <h2>The Ethics, User Interface (UI), User Experience (UX), and Interaction of Takealot.com</h2>
                <p>The world wide web is a vast system of knowledge that provides users with the information they require through countless diverse forms of websites. With the continual evolution of the internet through technological advancements, websites are significantly important to provide users with a satisfactory experience when seeking information...</p>
                <a href="./essaypost1.html" class="essaybtn">READ MORE</a>
            </section>
        </section>

        <section class="essaypost">
            <section class="essayimg">
                <img src="./images/Eicon.jpg" alt="">
            </section>
            <section class="essayinfo">
                <section class="essaydate">
                    <span> 21 Jun 2023 at 3:00PM</span>
                </section>
                <h2>The Impact of Algorithmic Culture and Artificial Intelligence on The Internet, Society and Design Justice.</h2>
                <p>The rapid advancements in algorithmic culture and Artificial Intelligence (AI) have transformed the landscape of various aspects of our lives, including the internet, society, and the concept of design justice. This essay critically examines the impact of algorithmic culture and AI using the "Statement on AI Risk"...</p>
                <a href="./essaypost2.html" class="essaybtn">READ MORE</a>
            </section>
        </section>
</section>`;

essayPage.innerHTML = essayPageInnerHTML;

function AccessEssayOne(){
  window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/essaypost1.html");
}
function AccessEssayTwo(){
  window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/essaypost2.html");
}

// Select the essay section by its ID
const essaySection = document.getElementById('essay');
const paragraphs = essaySection.getElementsByTagName('p');
const section = document.createElement('section');
section.className = 'essaycon';

const article1 = document.createElement('article');
const article2 = document.createElement('article');
const article3 = document.createElement('article');
const article4 = document.createElement('article');
const article5 = document.createElement('article');

const p1 = document.createElement('p');
p1.className = 'p-name';
const h2 = document.createElement('h2');
h2.textContent = 'The Ethics, User Interface (UI), User Experience (UX), and Interaction of Takealot.com';
p1.appendChild(h2);

// Loop through each paragraph and add a class
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].classList.add('essay-paragraph');
}

const image = essaySection.querySelector('img');

image.classList.add('essay-image');

// Select all the links within the essay section
const links = essaySection.getElementsByTagName('a');

// Loop through each link and add a class
for (let i = 0; i < links.length; i++) {
  links[i].classList.add('essay-link');
}


const referencesHeading = essaySection.querySelector('h2');

// Add a class to the references heading
referencesHeading.classList.add('essay-references');

