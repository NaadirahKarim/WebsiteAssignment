// Motivational Quotes API
const url = "https://type.fit/api/quotes";
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", fetchQuote);

//Fetch the quote
function fetchQuote() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
//Jquery
    .then(function(data) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const quote = data[randomIndex].text;
      result.textContent = quote;
    })
    .catch(function(error) {
      console.log("Error fetching quote:", error);
    });
}