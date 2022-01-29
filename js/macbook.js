
// 
function findExtraCost(costFor, amount) {
    const extraCost = document.getElementById(costFor + "-cost");
    extraCost.innerText = amount;
    updateCost();
};

// update total cost.....
function updateCost() {
    const memoryCost = document.getElementById("memory-cost");
    const memoryCostText = parseInt(memoryCost.innerText);
    const storageCost = document.getElementById("storage-cost");
    const storageCostText = parseInt(storageCost.innerText);
    const deleveryCost = document.getElementById("delevery-cost");
    const deleveryCostText = parseInt(deleveryCost.innerText);
    const totalCost = document.getElementById("total-cost");

    totalCost.innerText = 1299 + deleveryCostText + storageCostText + memoryCostText;

    document.getElementById("total-Price").innerText = totalCost.innerText;

    return totalCost();
};

// promocode section.....
document.getElementById("promo-button").addEventListener('click', function () {
    const promoCode = document.getElementById("promo-code");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const promo = document.getElementById("div");
    if (promoCode.value == 'secret') {
        const totalCost = document.getElementById("total-cost");
        const totalCostText = totalCost.innerText / 10;
        const totalPrice = document.getElementById("total-Price");
        totalPrice.innerText = totalCost.innerText - totalCostText;
        p.innerText = "";
        p2.innerText = "";
    }

    else if (promoCode.value == "") {
        p2.innerText = 'please input something';
        promo.appendChild(p2);
        p.innerText = "";
    }

    // when input wrong code.....
    else {
        p.innerText = 'Please input secret Promo Code ';
        promo.appendChild(p);
        p2.innerText = "";
    }
});