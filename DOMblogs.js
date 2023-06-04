//DOM For Blogs Overview Cards
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
