function updateProductNumber(product, productPrice, isIncreasing) {
    const inputProduct = document.getElementById(product + "-number");
    let productNumber = inputProduct.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }

    inputProduct.value = productNumber;

    const productTotalPrice = document.getElementById(product + "-total-price");
    productTotalPrice.innerText = productNumber * productPrice;

    calculateTotal();
};


function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById("subtotal").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = total;

}





// phone event handle
document.getElementById("phone-plus-btn").addEventListener("click", function () {
    updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus-btn").addEventListener("click", function () {
    updateProductNumber("phone", 1219, false);
});


// case event handle
document.getElementById("case-plus-btn").addEventListener("click", function () {
    updateProductNumber("case", 59, true);
});
document.getElementById("case-minus-btn").addEventListener("click", function () {
    updateProductNumber("case", 59, false);
});