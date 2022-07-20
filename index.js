const tabs = document.querySelectorAll("[data-tab-content-id");
tabs.forEach(tab => tab.addEventListener("click", (e) => {
    changeTabs(e.target)
}))

function changeTabs(tab){
    const tabId = tab.dataset.tabContentId;
    const newTab = document.querySelector(tabId);
    const tabContent = document.querySelectorAll(".tab-content");
    // remove the active status from all tabs
    for (let i = 0; i < tabContent.length; i++){
        tabContent[i].classList.remove("active-tab-content");
    }
    for (let i = 0; i < tabs.length; i++){
        tabs[i].classList.remove("active-tab");
    }

    // re-apply the active status to the tab that was clicked only
    tab.classList.add("active-tab")
    newTab.classList.add("active-tab-content");

}

// change slides when user clicks the next slide button
const nextSlideButton = document.querySelector(".next-slide");
nextSlideButton.addEventListener("click", () => {
    changeSlides(1);
})

// change slides when user clicks the previous slide button

const previousSlideButton = document.querySelector(".previous-slide");
previousSlideButton.addEventListener("click", () => {
    changeSlides(-1);
})

function changeSlides(direction){
    const activeSlide = document.querySelector("[data-active-slide]");
    const slides = document.querySelectorAll(".slide");
    let slidesArray = Array.from(slides);
    let newIndex = slidesArray.indexOf(activeSlide) + direction;

    if (newIndex < 0){
        newIndex = slidesArray.length - 1;
    }  
    if (newIndex > slidesArray.length - 1){
        newIndex = 0;
    }
    slidesArray[newIndex].dataset.activeSlide = true;
    delete activeSlide.dataset.activeSlide;

    const activeSlideIndicator = document.querySelector("[data-active-indicator]");
    const slideIndicators = document.querySelectorAll(".slide-indicator");
    let indicatorArray = Array.from(slideIndicators);
    indicatorArray[newIndex].dataset.activeIndicator = "true";
    delete activeSlideIndicator.dataset.activeIndicator;
}

/* Automatically change slides in the carousel every 5 seconds */
setInterval(() => {
    changeSlides(1)
}, 5000)

const indicators = document.querySelectorAll(".slide-indicator")
indicators.forEach(indicator => indicator.addEventListener("click", (e) => {
    changeSlidesViaIndicators(e.target)
}))

function changeSlidesViaIndicators(indicatorClicked){
    const activeSlideIndicator = document.querySelector("[data-active-indicator]");
    const activeSlide = document.querySelector("[data-active-slide]");
    const slideIndicators = document.querySelectorAll(".slide-indicator");
    const slides = document.querySelectorAll(".slide");
    let slidesArray = Array.from(slides);
    let indicatorArray = Array.from(slideIndicators);
    const newIndicatorIndex = indicatorArray.indexOf(indicatorClicked); // get the index number of the button that was clicked

    delete activeSlideIndicator.dataset.activeIndicator; // remove the active status from the current slide
    delete activeSlide.dataset.activeSlide; // remove the active status from the current indicator
    slidesArray[newIndicatorIndex].dataset.activeSlide = "true"; // apply the active status to the slide corresponding to the new index number
    indicatorArray[newIndicatorIndex].dataset.activeIndicator = "true"; // apply the active status to the indicator that was clicked

}

