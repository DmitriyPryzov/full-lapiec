import Layer from "../modules/layer.js";
import Card from "../modules/card.js";
import sortByProperty from "../modules/sortProviders.js";

function createResultLayer() {
    const layer = new Layer().create().setHeader("Список закупки").show();

    return layer;
}

function createResultCards(arr) {
    const listProduct = getValueInputs(arr);

    const providers = Object.keys(listProduct);

    const cards = [];


    for (let i = 0; i < providers.length; i++) {
        let pList = [];
        const item = providers[i];

        const card = new Card();
        const cardElement = card.init(item).show();

        let clipboardText = ``;

        listProduct[item].forEach(product => {
            const text = `${product.product} - ${product.input.value} ${product.nameWeight}.`;
            const p = document.createElement("p");
                  p.classList.add("result-list");
                 p.textContent = text;
                 clipboardText += text + `\n`;

            pList.push(p);
        });

        cardElement.addEventListener("dblclick", (e) => {
            navigator.clipboard.writeText(`**Замовлення**:\n${clipboardText}`)
                .then(() => cardElement.classList.add("copy"))
                .catch(() => alert("Error copy text"));
        });

        cardElement.append(...pList);

        cards.push(cardElement);
    }

    return cards;
}

function getValueInputs(arr) {

    const filterArr = arr.filter(product => product.input.value !== "");
    const sortObj = sortByProperty(filterArr, "provider");

    return sortObj;
    

}

function resultLayerInit(arr) {
    const layer = createResultLayer();
    const cards = createResultCards(arr);

    const body = layer.querySelector(".layer-body");

    body.append(...cards);

    return layer;
}

export default resultLayerInit;