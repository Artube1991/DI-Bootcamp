let allBoldItems;

function getBoldItems() {
    allBoldItems = document.getElementsByTagName("strong");
};

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

