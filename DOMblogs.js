//DOM For Blogs
const blog1 = document.querySelector("#blog1");
blog1.addEventListener("click", () => AccessBlog1());
const blog2 = document.querySelector("#blog2");
blog2.addEventListener("click", () => AccessBlog2());
const blog3 = document.querySelector("#blog13");
blog3.addEventListener("click", () => AccessBlog3());
const blog4 = document.querySelector("#blog4");
blog4.addEventListener("click", () => AccessBlog4());
const blog5 = document.querySelector("#blog5");
blog5.addEventListener("click", () => AccessBlog5());
const blog6 = document.querySelector("#blog6");
blog6.addEventListener("click", () => AccessBlog6());
const blog7 = document.querySelector("#blog7");
blog7.addEventListener("click", () => AccessBlog7());
const blog8 = document.querySelector("#blog8");
blog8.addEventListener("click", () => AccessBlog8());
const blog9 = document.querySelector("#blog9");
blog9.addEventListener("click", () => AccessBlog9());
const blog10 = document.querySelector("#blog10");
blog10.addEventListener("click", () => AccessBlog10());
const blog11 = document.querySelector("#blog11");
blog11.addEventListener("click", () => AccessBlog11());
const blog12 = document.querySelector("#blog12");
blog12.addEventListener("click", () => AccessBlog12());
const blog13 = document.querySelector("#blog13");
blog13.addEventListener("click", () => AccessBlog13());

let blogPage = document.getElementById("BlogPage");
let blogPageInnerHTML =
`<section class="p-card">

    <section id="blogcontainer"> 
        <section class="container">

            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>27 Feb 2023 at 5:45PM</span>
                    </section>
                    <h2>Week 1 - Imagining the Internet / HTML Fundamentals</h2>
                    <p>This week I was introduced to this course with the idea of what the world wide web is about and how we can build and develop websites. We explored the readings which are "As We May Think" and the “Library of Babel” as well as “The Garden of Forking Paths” which were interesting in terms of how the idea of the internet was mapped out before coming into existence. I also learnt how to utilize Github and what my goals for this course are.</p>
                    <a href="./blogpost1.html" class="blogbtn">READ MORE</a>
                </section>
            </section>
    

            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>6 Mar 2023 at 3:06PM</span>
                    </section>
                    <h2>Week 2 - Internet Histories / HTML Fundamentals</h2>
                    <p>This week I began my journey learning, researching, and coding in HTML. My reflection of this week's reading was on Bruce Lawson's articles and Wardrip-Fruin's "What Hypertext Is" which was in connection to last week’s article on "As We May Think". My reflection on Internet Histories is based on how the modern internet came into existence and that there are both advantages and disadvantages of dynamic webpages.</p>
                    <a href="./blogpost2.html" class="blogbtn">READ MORE</a>
                </section>
            </section>
    

            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>12 Mar 2023 at 3:26PM</span>
                    </section>
                    <h2>Week 3 - Interaction and the www / CSS Fundamentals</h2>
                    <p>This week I did research for my website in terms of colour theory, aesthetics, planning of my wireframes and how I will go about coding my website. I used resources such as YouTube to browse ideas for my website. The reading Mailloux’s article, “Convention and Context” was linked to UI and UX in many aspects of interactivity, user-friendly and easy navigation. I also gave my thoughts about the supplementary material being provided to me is extremely beneficial in correlation to my live lectures.</p>
                    <a href="./blogpost3.html" class="blogbtn">READ MORE</a>
                </section>
            </section>
    

            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>20 Mar 2023 at 12:11PM</span>
                    </section>
                    <h2>Week 4 - Interaction Design for the Web / JavaScript Fundamentals</h2>
                    <p>This week we started learning and coding in JavaScript which was exciting. I had to re-analyse my approach to developing my website by changing up my wireframes and colour schemes a user interface is extremely important for a great user experience. User interface in terms of interactivity was placed with great importance this week as it constitutes towards effective user experience and design. My reading reflection was focused on interface design and how interface technology have the same goal in perspective with different approaches.</p>
                    <a href="./blogpost4.html" class="blogbtn">READ MORE</a>
                </section>
            </section>
    

            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>29 Mar 2023 at 10:05PM</span>
                    </section>
                    <h2>Week 5 & 6 - Website Progress Reflection / DOM</h2>
                    <p>This week I learnt about Document Object Module in JavaScript which was slightly confusing. I focused more attention to completing my wireframe design and in general the development my website in terms of design. I paid careful attention to the colours, fonts, and display that I want to use for my website. I mainly focused on how I want to go about building my website throughout the next 2 weeks. I also watched a documentary called “The Social Dilemma” which is about social media and how technology has become a huge influence over our life. As a student of this course, I was deeply affected by the documentary I watched, as it opened my eyes to a new perspective.</p>
                    <a href="./blogpost5.html" class="blogbtn">READ MORE</a>
                </section>
            </section>
    

            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>11 Apr 2023 at 9:49PM</span>
                    </section>
                    <h2>Week 7 - IxD Process Mashup & Ethics of UX Practice / JavaScript</h2>
                    <p>This week I have started developing with the main aspects of my website which is mainly my Design section. Throughout the week I had to change up my colour palette due to changing my aesthetic. While planning my design section I used the “IxD UI UX Process” to answer the questions being asked. The reading reflections emphasised user experience the most and how UX is not just a function but can be seen all around us with mundane activities.</p>
                    <a href="./blogpost6.html" class="blogbtn">READ MORE</a>
                </section>
            </section>


            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>26 Apr 2023 at 9:23AM</span>
                    </section>
                    <h2> Week 8 - The World in www / Semantic Markup</h2>
                    <p>The week started with my submission of Assigmnet 1. We took a look at Semantic Markup and various elements of microformat. Theory wise, the readings were based on thinking of web development as a South African through the knowledge of search engines and information geographies.</p>
                    <a href="./blogpost7.html" class="blogbtn">READ MORE</a>
                </section>
            </section>


            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>9 May 2023 at 7:20AM</span>
                    </section>
                    <h2> Week 9 - Digital Inequalities / CSS</h2>
                    <p>This week we back tracked into learning some basics of CSS that was based on formatting using flexbox and about different units of measurements in CSS. I took into account some of these functions as I may use them for assignment 3. The reading I did this week was based on feminists on the internet and the role of inequality and the need for social justice on the web in Africa. </p>
                    <a href="./blogpost8.html" class="blogbtn">READ MORE</a>
                </section>
            </section>

            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>16 May 2023 at 8:02AM</span>
                    </section>
                    <h2>Week 10 - Decolonising Technology / CSS</h2>
                    <p>Grids were this week’s CSS basic skill lesson. JavaScript is more difficult to grasp. Decolonisation was this week’s theory theme which was extremely interesting and insightful on how we live in the modern-day society of the world wide web. The readings provided great analysations of decolonial technologies and A.I.</p>
                    <a href="./blogpost9.html" class="blogbtn">READ MORE</a>
                </section>
            </section>


            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>23  May 2023 at 10:01PM</span>
                    </section>
                    <h2>Week 11 - Decolonising Technology pt2 / Responsive Design</h2>
                    <p>As we near the end of the semester my attention is more focused on assignment 3, more specifically design response and how to incorporate JavaScript to my CSS and HTML website which is making me anxious. Code matters in digital colonialisms was the lecture material for this week which opened my eyes in understanding the questions I need to ask myself while improving my website.</p>
                    <a href="./blogpost10.html" class="blogbtn">READ MORE</a>
                </section>
            </section>

            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>29  May 2023 at 7:30AM</span>
                    </section>
                    <h2>Week 12 - Internet, Society and Design Justice / Web APIs</h2>
                    <p>APIs was a new concept I learnt this week. I still don’t fully understand what the reason for an API is but by when the exam comes around, I will have the knowledge on how and which API I would like to implement into my website. The reading based on inequality and discrimination of design choices made by people was quite an interesting read as it delves into matrix of domination and design justice.</p>
                    <a href="./blogpost11.html" class="blogbtn">READ MORE</a>
                </section>
            </section>


            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>1 June 2023 at 9:16PM</span>
                    </section>
                    <h2>Week 13 - Internet, Society and Design Justice pt2</h2>
                    <p>The end of a semester means the end of a course that I really did enjoy. I have been working on assignment 3, JavaScript has really been the pits for me. I have decided on an idea for the API I would like to incorporate for the exam, but I am still researching my options. The readings for this week mainly focused on the digital divide in society which exclude marginalized communities. Also how internet connectivity can be a powerful tool if used in the correct way in promoting freedom and education.</p>
                    <a href="./blogpost12.html" class="blogbtn">READ MORE</a>
                </section>
            </section>


            <section class="blogpost">
                <section class="blogimg">
                    <img src="./images/Bicon.jpg" alt="blog icon">
                </section>
                <section class="bloginfo">
                    <section class="blogdate">
                        <span>20 June 2023 at 10:00PM</span>
                    </section>
                    <h2>Semester Reflection</h2>
                    <p>This post is a semester reflection of the amount of knowledge I have I gained and utilized from taking this course through theory and coding practices as well as decisions I made to add to my exam submission.</p>
                    <a href="./blogpost13.html" class="blogbtn">READ MORE</a>
                </section>
            </section>

        </section>
    </section>             
</section>`;

blogPage.innerHTML = blogPageInnerHTML;

function AccessBlog1(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost1.html");
}
function AccessBlog2(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost2.html");
}
function AccessBlog3(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost3.html");
}
function AccessBlog4(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost4.html");
}
function AccessBlog5(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost5.html");
}
function AccessBlog6(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost6.html");
}
function AccessBlog7(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost7.html");
}
function AccessBlog8(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost8.html");
}
function AccessBlog9(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost9.html");
}
function AccessBlog10(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost10.html");
}
function AccessBlog11(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost11.html");
}
function AccessBlog12(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost12.html");
}
function AccessBlog13(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/blogpost13.html");
}

var blogPosts = [];

// Function to fetch and store the blog posts
function fetchBlogPosts() {
    
    var container = document.getElementById("blog-posts-container");
    var blogPostSections = container.getElementsByClassName("blog-post");

    // Loop through the blog post sections
    for (var i = 0; i < blogPostSections.length; i++) {
        var blogPostSection = blogPostSections[i];

        // Extract the relevant information from the blog post section
        var blogPost = {
            image: blogPostSection.querySelector(".blog-img img").src,
            date: blogPostSection.querySelector(".blog-date span").textContent,
            title: blogPostSection.querySelector(".blog-info h2").textContent,
            content: blogPostSection.querySelector(".blog-info p").textContent,
            link: blogPostSection.querySelector(".blog-info .blog-btn").href
        };
        blogPosts.push(blogPost);
    }
}

// Call the fetchBlogPosts function to populate the array
fetchBlogPosts();

console.log(blogPosts);
