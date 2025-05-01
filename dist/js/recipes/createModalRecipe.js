import Layer from "../modules/layer.js";
import Card from "../modules/card.js";

function createModalRecipe (obj) {
        const layer = new Layer().create().setHeader(obj.title).show();
    
        return layer;
}

function createCardRecipe(obj) {
    const card = new Card();
    const cardElement = card.init("Калькуляція").show();

    const {table, tableBody} = card.tableInit();

    let countPortion = 1;

    const counterRow = card.setCounter();
    cardElement.append(counterRow.allRow);

    function updateCounter() {
        counterRow.countPortionCol.textContent = `${countPortion} п.`;
        tableBody.innerHTML = "";
        tableBody.append(...createTableRecipe(obj.ingredients, countPortion));
    }

    counterRow.btnMinus.addEventListener("click", () => {
        if (countPortion > 0.2) {
            countPortion = countPortion <= 1 ? +(countPortion - 0.1).toFixed(1) : countPortion - 1;
        }
        updateCounter();
    });
    counterRow.btnPlus.addEventListener("click", () => {
        if (countPortion < 10) {
            countPortion = countPortion < 1 ? +(countPortion + 0.1).toFixed(1) : countPortion + 1;
        }
        updateCounter();
    });
    
    const textRecipe = document.createElement("p");
          textRecipe.textContent = obj.description;
          textRecipe.classList.add("text-all");

    const tableData = createTableRecipe(obj.ingredients);
    tableBody.append(...tableData);
    
    cardElement.append(table, textRecipe);

    return cardElement;
}

function createTableRecipe(arr, countPortion = 1) {

    const rows = [];

    arr.forEach(item => {
        const tr = document.createElement("tr");

        const tdProduct = document.createElement("td");
        tdProduct.textContent = item.name;
    
        const tdCount = document.createElement("td");
        tdCount.textContent = item.name == "Яйце куряче (жовток)" ? Math.round(item.quantity * countPortion) :  Math.round((item.quantity * 1000) * countPortion) + " г.";

        tr.append(tdProduct, tdCount);

        rows.push(tr);
    });

    return rows;
}

function recipeModalInit(obj) {
    const modal = createModalRecipe(obj);
    const table = createCardRecipe(obj);

    const body = modal.querySelector(".layer-body");
        body.append(table);

    return modal;
}

export default recipeModalInit;