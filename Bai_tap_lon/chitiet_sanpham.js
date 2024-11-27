const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const quantityInput = document.getElementById('quantity');

    decreaseButton.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseButton.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value, 10);
        quantityInput.value = currentValue + 1;
    });

    const addToCartButton = document.getElementById('add-to-cart');

    addToCartButton.addEventListener('click', () => {
        const productName = document.getElementById('product-name').textContent;
        const productPrice = parseInt(
            document.getElementById('product-price').textContent.replace(/[^0-9]/g, ''),
            10
        );
        const quantity = parseInt(quantityInput.value, 10);

        const productData = {
            name: productName,
            price: productPrice,
            quantity: quantity
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.name === productName);

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push(productData);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'gio_hang.html';
    });