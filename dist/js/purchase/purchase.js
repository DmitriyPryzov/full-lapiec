import Layer from "../modules/layer.js";
import Card from "../modules/card.js";
import sortByProperty from "../modules/sortProviders.js";
import setTablePurchase from "./rowTablePurchase.js";
import resultLayerInit from "./resultLayer.js";

function purchaseModalInit() {
    const layer = new Layer().create().setHeader("Повна закупка").show();

    return layer;
}

function purchaseCreateCards(arr) {
    const sortObj = sortByProperty(arr, "provider");
    const providers = Object.keys(sortObj);

    const cards = [];
    const inputList = [];

    for (let i = 0; i < providers.length; i++) {
        const item = providers[i];

        const card = new Card();
        const cardElement = card.init(item).show();
        

        const {table, tableBody} = card.tableInit();

        sortObj[item].forEach(product => {
            const {rowTable, inputData} = setTablePurchase(product);
            tableBody.append(rowTable);
            inputList.push(inputData);
        });

        cardElement.append(table);

        cards.push(cardElement);
    }

    return {
        cards,
        inputList: inputList
    };
}

function resultBtnInit(inputList, parentElement) {

    const btn = document.createElement("button");
          btn.classList.add("result-btn");
          btn.textContent = "Підтвердити";

          btn.addEventListener("click", () => createResultPurchase(inputList, parentElement));

    return btn;

}

function createResultPurchase(inputList, parentElement) {    
    const isEmpty = inputList.reduce((i, product) => {
        if (product.input.value == "") {
            return i + 1;
        }
    }, 0);

    if (isEmpty == inputList.length) {
        alert("Будь ласка, заповніть поля форми");
    } else {
        const resultModal = resultLayerInit(inputList);
        document.body.classList.add("no-scroll"); 
        
        parentElement.append(resultModal);
        
        requestAnimationFrame(() => {
            resultModal.scrollIntoView({block: "start" });

            setTimeout(() => {
                // parentElement.classList.add("no-scroll");
                document.body.classList.add("no-scroll"); 
            }, 300);

    })  
}
}

function purchaseInit(arr, parentElement) {
    const modal = purchaseModalInit();
    const {cards, inputList} = purchaseCreateCards(arr); 
    

    const btn = resultBtnInit(inputList, parentElement);

    const a = modal.querySelector(".layer-body");
    a.append(...cards, btn);

    return modal;
    
}

export default purchaseInit;
