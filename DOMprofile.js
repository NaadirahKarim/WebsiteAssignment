// DOM for navigations header
// header element
const header = document.createElement('header');

// nav element
const nav = document.createElement('nav');
nav.style.marginTop = '-657px';

// input checkbox
const checkboxInput = document.createElement('input');
checkboxInput.type = 'checkbox';
checkboxInput.id = 'check';

// label checkbox
const checkboxLabel = document.createElement('label');
checkboxLabel.setAttribute('for', 'check');
checkboxLabel.className = 'checkbtn';

//  icon menu button
const icon = document.createElement('i');
icon.className = 'fas fa-bars';

// icon checkbox label
checkboxLabel.appendChild(icon);

// logo image
const logoImage = document.createElement('img');
logoImage.src = './images/Logo 2.png';
logoImage.id = 'logo';

// label logo
const logoLabel = document.createElement('label');
logoLabel.setAttribute('for', 'logo');
logoLabel.className = 'logo';
logoLabel.textContent = 'Naadirah Karim.';


const ul = document.createElement('ul');

// Create list item elements with anchor elements
const liHome = document.createElement('li');
liHome.innerHTML = `<a href="index.html" class="active">Home</a>`;

const liProfile = document.createElement('li');
liProfile.innerHTML = `<a href="./profile.html">My Profile</a>`;

const liBlog = document.createElement('li');
liBlog.innerHTML = `<a href="./blog.html">Blogs</a>`;

const liDesign = document.createElement('li');
liDesign.innerHTML = `<a href="./design.html">Design</a>`;

const liEssay = document.createElement('li');
liEssay.innerHTML = `<a href="./essay.html">Essay</a>`;

// Append list item elements to unordered list
ul.innerHTML = liHome.outerHTML + liProfile.outerHTML + liBlog.outerHTML + liDesign.outerHTML + liEssay.outerHTML;

// Append all elements to the DOM
nav.innerHTML = checkboxInput.outerHTML + checkboxLabel.outerHTML + logoImage.outerHTML + logoLabel.outerHTML + ul.outerHTML;
header.innerHTML = nav.outerHTML;

// Append the header to the document body
document.body.innerHTML += header.outerHTML;