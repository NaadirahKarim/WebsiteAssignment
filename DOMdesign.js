//DOM For Design Pages
const design1 = document.querySelector("#design1");
design1.addEventListener("click", () => AccessDesign1());
const design2 = document.querySelector("#design2");
design2.addEventListener("click", () => AccessDesign2());
const design3 = document.querySelector("#design3");
design3.addEventListener("click", () => AccessDesign3());
const design4 = document.querySelector("#design4");
design4.addEventListener("click", () => AccessDesign4());

function AccessDesign1(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/designpost1.html");
}
function AccessDesign2(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/designpost1.html");
}
function AccessDesign3(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/designpost1.html");
}
function AccessDesign4(){
    window.location.replace("https://naadirahkarim.github.io/WebsiteAssignment/designpost1.html");
}

//Gallery for Design Section - Wireframes
const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{ //once window is loaded
    for(let i= 0; i < gallery.length; i++){
        totalImg.textContent = gallery.length; //passing gallery images length to totalImg
        let newIndex = i; //passing i value to newIndex variable
        let clickImgIndex;
        gallery[i].onclick = ()=>{
            currentImg.textContent = newIndex + 1; //passing newIndex value to currentImg by adding +1
            clickImgIndex = newIndex; //passing clicked img index to clickImgIndex variable
            console.log(i);
            function preview(){
                currentImg.textContent = newIndex + 1; //passing newIndex value to currentImg by adding +1
                let selectedImgUrl = gallery[newIndex].querySelector("img").src; //getting user clicked image url
                previewImg.src = selectedImgUrl; //passing user clicked image url to previewing source
                console.log(selectedImgUrl);
            }

            //prev and next buttons
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }

            prevBtn.onclick = ()=>{
                newIndex--; //decrement newIndexvalue
                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = "none";
                }else{
                    preview(); //calling function again to update image   
                    nextBtn.style.display = "block";
                }
            }

            nextBtn.onclick = ()=>{
                newIndex++; //decrement newIndexvalue
                if(newIndex >= gallery.length - 1){
                    preview();
                    nextBtn.style.display = "none";
                }else{
                    preview(); //calling function again to update image   
                    prevBtn.style.display = "block";
                }
            }

            preview(); //calling above function
            previewBox.classList.add("show");
            shadow.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";

            closeIcon.onclick = ()=>{
                newIndex = clickImgIndex; //assigning user first click img index to newIndex variable
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            }
        }
    }
}

