export default class Card {
    constructor() {
        this.inputList = [];
    }

    create() {
        const card = document.createElement("div");
            card.classList.add("layer-card");

        const cardBody = document.createElement("div");
              cardBody.classList.add("card-body");

        card.append(cardBody);
        
        this._card = card;

        return this;
    }

    setHeader(text) {
        const title = document.createElement("h2");
                title.classList.add("card-title");
              title.textContent = text.length > 30 ? console.error("Header text length > 30 symbols") : text;

              this._card.insertAdjacentElement("afterbegin", title);
        
        return this;
    }

    setCounter() {
        const counterRow = document.createElement("div");
              counterRow.classList.add("counter");
        
        const counterCol = document.createElement("div");
              counterCol.classList.add("counter-col");
        const countPortionCol = document.createElement("div");
              countPortionCol.classList.add("counter-col", "counter-text");
              countPortionCol.textContent = "1 п.";
    
        const wrapper = document.createElement("div");
              wrapper.classList.add("counter-wrapper");
    
        const btnMinus = document.createElement("button");
              btnMinus.classList.add("counter-btn");
              btnMinus.textContent = "-";
    
        const btnPlus = document.createElement("button");
              btnPlus.classList.add("counter-btn");
              btnPlus.textContent = "+";
    
        wrapper.append(btnMinus, btnPlus);
        counterCol.append(wrapper);
    
        counterRow.append(counterCol, countPortionCol);
    
        return {
            allRow: counterRow,
            btnMinus,
            btnPlus,
            countPortionCol
        }
    }



    show() {
        return this._card;
    }

    init(text) {
        this.create().setHeader(text); 

        return this;
    }

    tableInit() {
        const table = document.createElement("table");
            table.classList.add("card-table");
        const tableBody = document.createElement("tbody");
              table.append(tableBody);

        return {table, tableBody};
    }
}