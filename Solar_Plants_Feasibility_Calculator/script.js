let btnContainer = document.getElementById("btnContainer");
let btns = btnContainer.getElementsByClassName("navBtn");
let calculatorBtn = document.getElementById("calculator");
let calculatorContainer = document.getElementById("calculatorContainer");
let aboutUsBtn = document.getElementById("aboutUs");
let aboutUsContainer = document.getElementById("aboutUsContainer");
let contactBtn = document.getElementById("contact");
let contactContainer = document.getElementById("contactContainer");
let homeBtn = document.getElementById("homeBtn");
let homePage = document.getElementById("homeContainer");
let homeContent = document.getElementById("homeContent");

calculatorContainer.style.display = "none";
aboutUsContainer.style.display = "none";
contactContainer.style.display = "none";


homeBtn.addEventListener("click", () => {
  calculatorContainer.style.display = "none";
  aboutUsContainer.style.display = "none";
  contactContainer.style.display = "none";
  homeContent.style.display = "block";
})

calculatorBtn.addEventListener("click", () => {
  calculatorContainer.style.display = "block";
  aboutUsContainer.style.display = "none";
  contactContainer.style.display = "none";
  homeContent.style.display = "none";
});

aboutUsBtn.addEventListener("click", () =>{
  aboutUsContainer.style.display = "block";
  contactContainer.style.display = "none";
  calculatorContainer.style.display = "none";
  homeContent.style.display = "none";
})

contactBtn.addEventListener("click", () =>{
  contactContainer.style.display = "block";
  calculatorContainer.style.display = "none";
  aboutUsContainer.style.display = "none";
  homeContent.style.display = "none";
});

(() => {

  let activeEL;

  document.querySelectorAll('button').forEach(e => {
    e.addEventListener('click', onButtonClick)
  });

  function onButtonClick(e) {
    if (activeEL) {
      if (activeEL != e.currentTarget) {
        activeEL.classList.remove('active');
      }
    }

    activeEL = e.currentTarget;
    activeEL.classList.add('active');
  }

})();



