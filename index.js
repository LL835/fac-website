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