async function switchTab(oldTab, newTab) {
    let oldT = document.getElementById(oldTab);
    let newT = document.getElementById(newTab);
    oldT.style.opacity = "0";
    setTimeout(function () {
        oldT.style.display = "none";
        newT.style.display = "block";
    }, 200);

    setTimeout(function () {
        newT.style.opacity = "1";
    }, 260);
}

let image_array = [
    "FxJ88g5XgAEuRCT.png",
    "Gerudo_Link.png",
    "IMG_2897.png",
    "IMG_2912.png",
    "Untitled_Artwork-28.png",
    "Untitled_Artwork.png",
    "Yshtola.png",
];

function get_random_image() {
    const random_index = Math.floor(Math.random() * image_array.length);
    const selected_image = image_array[random_index];
    document.getElementById(
        "partnerHeader"
    ).style.background = `url(media/partners/${selected_image})`;
    document.getElementById("partnerHeader").style.backgroundRepeat =
        "no-repeat";
    document.getElementById("partnerHeader").style.backgroundSize = "cover";
}

setInterval(() => {
    get_random_image();
}, 1000);

function fixWindow() {
    if (window.innerWidth < 768) {
        document.getElementById("mobileHero").style.display = "flex";
        document.getElementById("heroContent").style.display = "none";
    } else if (window.innerWidth > 768) {
        document.getElementById("mobileHero").style.display = "none";
        document.getElementById("heroContent").style.display = "flex";
    }
}

window.addEventListener("resize", () => {
    fixWindow()
});

fixWindow();