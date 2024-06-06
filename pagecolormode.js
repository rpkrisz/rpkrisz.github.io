let pageMode = localStorage.getItem('pageMode');
let NEWpageColors = localStorage.getItem('newPageColors');
let OLDpageColors = localStorage.getItem('oldPageColors');

const cssMode = document.querySelector("#colormode");
const cssColors = document.querySelector("#colors");
const colorThemes = document.querySelectorAll("[name=colortheme]");

const toggel = document.querySelector("#toggel");
const icon = toggel.querySelector("img");


function enableDarkMode() {
    cssMode.attributes.href.value = cssMode.attributes.href.value.replace('light', "dark");
    localStorage.setItem('pageMode', 'dark');
    icon.src = icon.src.replace("sun", 'moon');
    toggel.classList.add("dark");
}

function enableLightMode() {
    cssMode.attributes.href.value = cssMode.attributes.href.value.replace('dark', "light");
    localStorage.setItem('pageMode', 'light');
    icon.src = icon.src.replace('moon', "sun");
    toggel.classList.remove("dark");
}

if (pageMode === "dark") {
    enableDarkMode();
} else {
    enableLightMode();
}

toggel.addEventListener("click", () => {

    pageMode = localStorage.getItem('pageMode');

    if (pageMode === "light") {
        enableDarkMode();
    } else {
        enableLightMode();
    }

})

if (OLDpageColors == null) {
    localStorage.setItem('oldPageColors', "blue");
    localStorage.setItem('newPageColors', "blue");

    cssColors.attributes.href.value = `CSS/blue.css`;
}
cssColors.attributes.href.value = cssColors.attributes.href.value.replace(OLDpageColors, NEWpageColors);

if (colorThemes != null) {
    colorThemes.forEach(theme => theme.addEventListener("change", () => {

        OLDpageColors = NEWpageColors;
        NEWpageColors = theme.value;
        cssColors.attributes.href.value = cssColors.attributes.href.value.replace(OLDpageColors, NEWpageColors);
        localStorage.setItem('newPageColors', NEWpageColors);
        localStorage.setItem('oldPageColors', OLDpageColors);

    }));
}

