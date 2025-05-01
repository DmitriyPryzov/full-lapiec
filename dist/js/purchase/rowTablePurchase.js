export default function setTablePurchase(obj) {

    const tr = document.createElement("tr");

    const tdProduct = document.createElement("td");
    tdProduct.textContent = obj.product;

    const tdLastBuy = document.createElement("td");
    tdLastBuy.textContent = `${obj.lastBuyCount} ${obj.nameWeight}.`;

    const tdInput = document.createElement("td");
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("input");
    tdInput.appendChild(input);

    const tdNameWeight = document.createElement("td");
    tdNameWeight.textContent = obj.nameWeight + `.`;

    tr.append(tdProduct, tdLastBuy, tdInput, tdNameWeight);

    return {
        inputData: { input, product: obj.product, provider: obj.provider, nameWeight: obj.nameWeight},
        rowTable: tr
    };
}