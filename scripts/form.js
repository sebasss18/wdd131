const productSelect = document.querySelector('#product');

const products = [
    "Product A",
    "Product B",
    "Product C",
    "Product D"
];

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product;
    option.textContent = product;
    productSelect.appendChild(option);
});