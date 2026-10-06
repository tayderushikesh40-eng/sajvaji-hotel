const menuData = [
    {
        category: "Starter", type: "starter", icon: "fa-sun",
        items: [
            { name: "Roasted papad", full: 15, half: null },
            { name: "Masala papad", full: 25, half: null },
            { name: "Fry papad", full: 20, half: null }
        ]
    },
    {
        category: "Non Veg", type: "nonveg", icon: "fa-drumstick-bite",
        items: [
            { name: "Chicken kari", full: 200, half: 100 },
            { name: "Chicken masala", full: 200, half: 100 },
            { name: "Chicken lapeta", full: 200, half: null },
            { name: "Chicken fry", full: 200, half: null },
            { name: "Chicken sauji", full: 200, half: 100 },
            { name: "Chicken roasted", full: 200, half: null },
            { name: "Chicken handi", full: 700, half: 400 },
            { name: "Matan kari", full: 240, half: 140 },
            { name: "Matan masala", full: 250, half: 150 },
            { name: "Matan lapeta", full: 250, half: null },
            { name: "Matan fry", full: 250, half: null },
            { name: "Matan sauji", full: 250, half: 150 },
            { name: "Matan roasted", full: 250, half: null },
            { name: "Matan handi", full: 1200, half: 600 },
            { name: "Anda kari", full: 100, half: null },
            { name: "Anda masala", full: 100, half: null },
            { name: "Anda burji", full: 90, half: null },
            { name: "Anda burji kari", full: 140, half: null }
        ]
    },
    {
        category: "Veg", type: "veg", icon: "fa-leaf",
        items: [
            { name: "Panir kari", full: 160, half: 100 },
            { name: "Panir masala", full: 160, half: 100 },
            { name: "Panir lapeta", full: 200, half: null },
            { name: "Panir burji", full: 170, half: null },
            { name: "Panir burji kari", full: 200, half: null },
            { name: "Dal fry", full: 140, half: 80 },
            { name: "Dal tadaka", full: 140, half: 80 },
            { name: "Sev baji", full: 140, half: 80 },
            { name: "Jeera rice", full: 100, half: 50 },
            { name: "Plain rice", full: 90, half: 50 },
            { name: "Roti", full: 12, half: null },
            { name: "Bhakar", full: 25, half: null }
        ]
    }
];

let cart = {};

function renderMenu() {
    const menuContainer = document.getElementById("menuContainer");
    menuContainer.innerHTML = "";

    menuData.forEach(cat => {
        const card = document.createElement("div");
        card.className = "category-card";

        let itemsHtml = "";
        cat.items.forEach(item => {
            let priceBtns = "";
            if (item.half !== null) {
                priceBtns += `<button class="btn-add" onclick="addToCart('${escapeQuotes(item.name)}', 'Half', ${item.half})"><span>Half</span> <strong>₹${item.half}</strong></button>`;
            }
            priceBtns += `<button class="btn-add" onclick="addToCart('${escapeQuotes(item.name)}', 'Full', ${item.full})"><span>Full</span> <strong>₹${item.full}</strong></button>`;
            itemsHtml += `
                <div class="item-card">
                    <div class="item-name">${item.name}</div>
                    <div class="price-options">${priceBtns}</div>
                </div>`;
        });

        card.innerHTML = `
            <div class="category-title ${cat.type}"><i class="fa-solid ${cat.icon}"></i> ${cat.category}</div>
            <div class="items-grid">${itemsHtml}</div>`;
        menuContainer.appendChild(card);
    });
}

function escapeQuotes(str) { return str.replace(/'/g, "\\'"); }

function addToCart(name, portion, price) {
    const itemKey = `${name} (${portion})`;
    if (cart[itemKey]) { cart[itemKey].qty += 1; }
    else { cart[itemKey] = { name, portion, price, qty: 1 }; }
    updateCart();
}

function updateQuantity(itemKey, change) {
    if (cart[itemKey]) {
        cart[itemKey].qty += change;
        if (cart[itemKey].qty <= 0) { delete cart[itemKey]; }
    }
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    const grandTotalEl = document.getElementById("grandTotal");
    const keys = Object.keys(cart);

    if (keys.length === 0) {
        cartItemsContainer.innerHTML = `<div class="empty-cart">No items added yet. Click on menu items to add to order.</div>`;
        grandTotalEl.innerText = "₹0";
        return;
    }

    let html = "";
    let total = 0;

    keys.forEach(key => {
        const item = cart[key];
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name} (${item.portion})</div>
                    <div class="cart-item-price">₹${item.price} × ${item.qty} = ₹${itemTotal}</div>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateQuantity('${escapeQuotes(key)}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateQuantity('${escapeQuotes(key)}', 1)">+</button>
                </div>
            </div>`;
    });

    cartItemsContainer.innerHTML = html;
    grandTotalEl.innerText = `₹${total}`;
}

renderMenu();
