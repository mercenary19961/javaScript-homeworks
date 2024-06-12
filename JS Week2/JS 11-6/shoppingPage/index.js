document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    let cart = {};

    const updateTotal = () => {
        let total = 0;
        for (let key in cart) {
            total += cart[key].price * cart[key].quantity;
        }
        totalAmount.textContent = total;
    };

    const renderCart = () => {
        cartContainer.innerHTML = '';
        for (let key in cart) {
            const item = cart[key];
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            cartItem.appendChild(img);

            const name = document.createElement('p');
            name.textContent = item.name;
            cartItem.appendChild(name);

            const controls = document.createElement('div');
            controls.classList.add('cart-item-controls');

            const decreaseButton = document.createElement('button');
            decreaseButton.classList.add('decrease');
            decreaseButton.setAttribute('data-name', item.name);
            decreaseButton.textContent = '-';
            controls.appendChild(decreaseButton);

            const quantitySpan = document.createElement('span');
            quantitySpan.textContent = item.quantity;
            controls.appendChild(quantitySpan);

            const increaseButton = document.createElement('button');
            increaseButton.classList.add('increase');
            increaseButton.setAttribute('data-name', item.name);
            increaseButton.textContent = '+';
            controls.appendChild(increaseButton);

            const price = document.createElement('p');
            price.textContent = `${item.price * item.quantity}`;
            controls.appendChild(price);

            const removeButton = document.createElement('button');
            removeButton.classList.add('remove');
            removeButton.setAttribute('data-name', item.name);
            removeButton.textContent = '×';
            controls.appendChild(removeButton);

            cartItem.appendChild(controls);
            cartContainer.appendChild(cartItem);
        }
        updateTotal();
    };

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const productCard = event.target.closest('.product-card');
            const name = productCard.getAttribute('data-name');
            const price = parseFloat(productCard.getAttribute('data-price'));
            const image = productCard.querySelector('img').src;

            if (!cart[name]) {
                cart[name] = { name, price, quantity: 1, image };
            } else {
                cart[name].quantity += 1;
            }
            renderCart();
        });
    });

    cartContainer.addEventListener('click', event => {
        const name = event.target.getAttribute('data-name');
        if (event.target.classList.contains('increase')) {
            cart[name].quantity += 1;
        } else if (event.target.classList.contains('decrease')) {
            if (cart[name].quantity > 1) {
                cart[name].quantity -= 1;
            }
        } else if (event.target.classList.contains('remove')) {
            delete cart[name];
        }
        renderCart();
    });

    document.getElementById('save').addEventListener('click', () => {
        alert('Cart saved!');
        console.log('Cart saved:', cart);
    });
});
