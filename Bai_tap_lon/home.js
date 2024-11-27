 const buttons = document.querySelectorAll(".product button");
    
        buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                const product = button.closest(".product");
                const name = product.querySelector("h3").textContent;
                const price = parseInt(product.querySelector("p").textContent.replace(/[^0-9]/g, ""));
                const productData = { name, price, quantity: 1 };
    
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                const existingProduct = cart.find(item => item.name === name);
    
                if (existingProduct) {
                    existingProduct.quantity += 1;
                } else {
                    cart.push(productData);
                }
    
                localStorage.setItem("cart", JSON.stringify(cart));
                window.location.href = "gio_hang.html";
            });
        });