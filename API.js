// Motivational Quotes
const url = "https://type.fit/api/quotes";
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", fetchQuote);

function fetchQuote() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const quote = data[randomIndex].text;
      result.textContent = quote;
    })
    .catch(function(error) {
      console.log("Error fetching quote:", error);
    });
}

//Dad Jokes API
// const url = "https://icanhazdadjoke.com";
// const btn = document.querySelector(".btn");
// const result = document.querySelector(".result");

// btn.addEventListener("click", fetchJoke);

// async function fetchJoke() {
//   result.textContent = "Loading ...";
//   try {
//     const response = await fetch(url, {
//       headers: {
//         Accept: "application/json",
//       },
//     });
//     if (!response.ok) {
//       throw new Error();
//       //This will end the current 'try' block, and immediately pass control to the 'catch' block with a new Error object. 'new' is optional.
//     }
//     const data = await response.json();
//     result.textContent = data.joke;
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchJoke();