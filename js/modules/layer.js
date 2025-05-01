export default class Layer {
    constructor () {
        
    }

    create() {
        const layer = document.createElement("div");
                layer.classList.add("layer");

                layer.style.top = window.scrollY + "px";
        const body = document.createElement("div");
                body.classList.add("layer-body");

        layer.append(body);

        this._layer = layer;

        return this;
    }

    setHeader(text) {
        if (this._layer) {
            const header = document.createElement("div");

            header.classList.add("layer-header");

            const headerText = document.createElement("div");
            headerText.classList.add("header__text");
            headerText.textContent = text.length > 30 ? console.error("Header text length > 30 symbols") : text;
            ;

            const backBtn = document.createElement("button");
            backBtn.classList.add("back__btn");
            backBtn.textContent = "<";
            backBtn.addEventListener("click", () => {
                document.body.classList.remove("no-scroll");
                this._layer.remove();
                // if (this._layer.parentNode) {
                //     this._layer.parentNode.classList.remove("no-scroll");
                //     this._layer.remove();
                // } else {
                    
                // }
            });

            header.append(backBtn, headerText);

            this._layer.insertAdjacentElement("afterbegin", header);

            return this;
        }
    }

    removeLayer() {
        this._layer.remove();
    } 

    show() {
        return this._layer;
    }
}