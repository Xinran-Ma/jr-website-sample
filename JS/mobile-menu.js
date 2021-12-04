function openMobileMenu() {
    var mobileMenuWrapper = document.querySelector(".header__mobile-menu-wrapper");
    mobileMenuWrapper.classList.remove("closed");
    mobileMenuWrapper.classList.add("opened");
}

function closeMobileMenu() {
    var mobileMenuWrapper = document.querySelector(".header__mobile-menu-wrapper");
    mobileMenuWrapper.classList.remove("opened");
    mobileMenuWrapper.classList.add("closed");
}

function toggleSearchField() {
    var mobileSearchBar = document.querySelector(".header__mobile-search-area");
    if(!mobileSearchBar.classList.contains("opened")) {
        mobileSearchBar.classList.add("opened")
        mobileSearchBar.classList.remove("closed")
    } else {
        mobileSearchBar.classList.add("closed")
        mobileSearchBar.classList.remove("opened")
    }
}