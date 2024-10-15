let allBoldItems;

const paragraphs = document.getElementsByTagName("p");

function getBoldItems() {
    allBoldItems = document.getElementsByTagName("strong");
};

getBoldItems();

console.log(allBoldItems);

function highlight() {
    for (bold of allBoldItems) {
        bold.setAttribute("style", "color: blue");
    };
};

function returnItemsToDefault() {
    for (bold of allBoldItems) {
        bold.setAttribute("style", "color: black");
    }
};

for (p of paragraphs) {
    p.addEventListener("mouseover", highlight)
};

for (p of paragraphs) {
    p.addEventListener("mouseout", returnItemsToDefault)
};

