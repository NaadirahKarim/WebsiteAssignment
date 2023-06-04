//DOM for essay
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

