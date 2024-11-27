const cartTable = document.querySelector("#cart-table tbody");
        const totalPrice = document.getElementById("total-price");

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        function renderCart() {
            cartTable.innerHTML = "";
            let total = 0;

            cart.forEach((item, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.price.toLocaleString()} VND</td>
                    <td>
                        <div class="quantity-controls">
                            <button onclick="decreaseQuantity(${index})">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="increaseQuantity(${index})">+</button>
                        </div>
                    </td>
                    <td>${(item.quantity * item.price).toLocaleString()} VND</td>
                    <td><button onclick="removeFromCart(${index})">Xóa</button></td>
                `;
                cartTable.appendChild(row);
                total += item.quantity * item.price;
            });

            totalPrice.textContent = `${total.toLocaleString()} VND`;
        }

        function increaseQuantity(index) {
            cart[index].quantity++;
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }

        function decreaseQuantity(index) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            } else {
                alert("Số lượng không thể nhỏ hơn 1!");
            }
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }

        function checkout() {
            const customerName = document.getElementById("customer-name").value.trim();
            const customerPhone = document.getElementById("customer-phone").value.trim();
            const customerAddress = document.getElementById("customer-address").value.trim();

            if (!customerName || !customerPhone || !customerAddress) {
                alert("Vui lòng nhập đầy đủ thông tin khách hàng!");
                return;
            }

            alert(`Cảm ơn ${customerName}! Đơn hàng của bạn sẽ được giao tới ${customerAddress}.`);
            localStorage.removeItem("cart");
            renderCart();
        }

        renderCart();