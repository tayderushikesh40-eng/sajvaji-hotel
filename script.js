 // Menu dataset with image links added for every item
const menuData = [
    {
        category: "Starter", type: "starter", icon: "fa-sun",
        items: [
            { name: "bisleri", full: 20, half: null, image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=500&q=80" },
            { name: "papad R", full: 15, half: null, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
            { name: "papad M", full: 25, half: null, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
            { name: "papad F", full: 20, half: null, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" }
        ]
    },
    {
        category: "Non Veg", type: "nonveg", icon: "fa-drumstick-bite",
        items: [
            { name: "Chicken", full: 200, half: 100, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
            { name: "Chicken M", full: 200, half: 100, image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
            { name: "Chicken L", full: 200, half: null, image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=500&q=80" },
            { name: "Chicken F", full: 200, half: null, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
            { name: "Chicken S", full: 200, half: 100, image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
            { name: "Chicken R", full: 200, half: null, image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=500&q=80" },
            { name: "Chicken handi", full: 700, half: 400, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80" },
            { name: "Matan", full: 240, half: 150, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
            { name: "Matan M", full: 250, half: 150, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
            { name: "Matan L", full: 250, half: null, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
            { name: "Matan F", full: 250, half: null, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
            { name: "Matan S", full: 250, half: 150, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
            { name: "Matan R", full: 250, half: null, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
            { name: "Matan handi", full: 1200, half: 600, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
            { name: "Anda kari", full: 100, half: null, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80" },
            { name: "Anda M", full: 100, half: null, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80" },
            { name: "Anda burji", full: 90, half: null, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80" },
            { name: "Andaburjikari", full: 140, half: null, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80" }
        ]
    },
    {
        category: "Veg", type: "veg", icon: "fa-leaf",
        items: [
            { name: "Panir kari", full: 160, half: 100, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80" },
            { name: "Panir M", full: 160, half: 100, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80" },
            { name: "Panir L", full: 200, half: null, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80" },
            { name: "Panir burji", full: 170, half: null, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80" },
            { name: "Panir burji kari", full: 200, half: null, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80" },
            { name: "Dal fry", full: 140, half: 80, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80" },
            { name: "Dal tadaka", full: 140, half: 80, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80" },
            { name: "Sev baji", full: 140, half: 80, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
            { name: "Jeera rice", full: 100, half: 50, image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80" },
            { name: "Plain rice", full: 90, half: 50, image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=500&q=80" },
            { name: "Roti", full: 12, half: null, image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=500&q=80" },
            { name: "boil", full: 15, half: null, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80" },
            { name: "Bhakar", full: 25, half: null, image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=500&q=80" }
        ]
    }
];

let cart = {};

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    checkSession();
    bindEvents();
});

function bindEvents() {
    document.getElementById("registerForm").addEventListener("submit", handleRegister);
    document.getElementById("loginForm").addEventListener("submit", handleLogin);
    document.getElementById("linkToLogin").addEventListener("click", switchToLogin);
    document.getElementById("linkToRegister").addEventListener("click", switchToRegister);
    document.getElementById("menuIcon").addEventListener("click", toggleDropdown);
    document.getElementById("btnLogout").addEventListener("click", () => { logoutUser(); closeDropdown(); });
    document.getElementById("btnProfile").addEventListener("click", () => { openProfile(); closeDropdown(); });
    document.getElementById("btnHistory").addEventListener("click", () => { openHistory(); closeDropdown(); });
    document.getElementById("btnBluetooth").addEventListener("click", () => { openBluetooth(); closeDropdown(); });
    document.getElementById("headerPrinterBtn").addEventListener("click", openBluetooth);
    document.getElementById("btnSaveProfile").addEventListener("click", saveProfile);
    document.getElementById("btnConnectPrinter").addEventListener("click", connectPrinter);
    document.getElementById("btnPrintBill").addEventListener("click", printCurrentBill);
    document.getElementById("selectAllHistory").addEventListener("change", toggleSelectAllHistory);
    document.getElementById("btnDeleteSelectedHistory").addEventListener("click", deleteSelectedHistory);

    // Modal Close Buttons
    document.querySelectorAll(".close-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const modalId = e.target.getAttribute("data-close");
            closeModal(modalId);
        });
    });
}

function checkSession() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        unlockWebsite();
    } else {
        lockWebsite();
    }
}

function lockWebsite() {
    document.getElementById("mainWebsite").classList.add("protected-content");
    closeModal("loginModal");
    document.getElementById("registerModal").classList.add("show");
}

function unlockWebsite() {
    document.getElementById("mainWebsite").classList.remove("protected-content");
    closeModal("registerModal");
    closeModal("loginModal");
}

function handleRegister(e) {
    e.preventDefault();

    const name = document.getElementById("regName").value.trim();
    const mobile = document.getElementById("regMobile").value.trim();
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (!name || !mobile || !username || !password) {
        alert("Please fill in all details!");
        return;
    }

    localStorage.setItem("user_name", name);
    localStorage.setItem("user_mobile", mobile);
    localStorage.setItem("registered_username", username);
    localStorage.setItem("registered_password", password);
    localStorage.setItem("isLoggedIn", "true");

    document.getElementById("profileName").value = name;
    document.getElementById("profileMobile").value = mobile;

    alert("Registration successful! Directing to Home Page...");
    unlockWebsite();
}

function handleLogin(e) {
    e.preventDefault();

    const un = document.getElementById("loginUsername").value.trim();
    const pw = document.getElementById("loginPassword").value.trim();

    const savedUn = localStorage.getItem("registered_username");
    const savedPw = localStorage.getItem("registered_password");

    if (!savedUn) {
        alert("No registered user found. Please register first!");
        switchToRegister();
        return;
    }

    if (un === savedUn && pw === savedPw) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        unlockWebsite();
    } else {
        alert("Invalid Username or Password!");
    }
}

function logoutUser() {
    localStorage.setItem("isLoggedIn", "false");
    alert("You have logged out successfully.");
    lockWebsite();
}

function switchToLogin() {
    closeModal("registerModal");
    document.getElementById("loginModal").classList.add("show");
}

function switchToRegister() {
    closeModal("loginModal");
    document.getElementById("registerModal").classList.add("show");
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("show");
}

function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

function closeDropdown() {
    document.getElementById("dropdownMenu").classList.remove("show");
}

function openProfile() {
    document.getElementById("profileName").value = localStorage.getItem("user_name") || "";
    document.getElementById("profileMobile").value = localStorage.getItem("user_mobile") || "";
    document.getElementById("profileAddress").value = localStorage.getItem("user_address") || "";
    document.getElementById("profileModal").classList.add("show");
}

function saveProfile() {
    localStorage.setItem("user_name", document.getElementById("profileName").value);
    localStorage.setItem("user_mobile", document.getElementById("profileMobile").value);
    localStorage.setItem("user_address", document.getElementById("profileAddress").value);
    alert("Profile saved successfully!");
    closeModal("profileModal");
}

// History Management with Single and Multi-Delete
function openHistory() {
    renderHistoryList();
    document.getElementById("historyModal").classList.add("show");
}

function renderHistoryList() {
    const historyList = document.getElementById("historyList");
    const history = JSON.parse(localStorage.getItem("savajiBillingHistory") || "[]");
    document.getElementById("selectAllHistory").checked = false;

    if (history.length === 0) {
        historyList.innerHTML = "<p style='color:#64748b; text-align:center; padding: 20px;'>No billing history available.</p>";
        return;
    }

    historyList.innerHTML = history.map((b, index) => `
        <div class="history-item">
            <input type="checkbox" class="history-item-checkbox" data-index="${index}">
            <div class="history-item-details">
                <strong>Bill No: ${b.billNumber} - ₹${b.total}</strong>
                <small>Date: ${b.date}</small>
            </div>
            <button class="btn-delete-single" onclick="deleteHistorySingle(${index})" title="Delete Item">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `).join("");
}

function deleteHistorySingle(index) {
    if (!confirm("Are you sure you want to delete this bill record?")) return;
    let history = JSON.parse(localStorage.getItem("savajiBillingHistory") || "[]");
    history.splice(index, 1);
    localStorage.setItem("savajiBillingHistory", JSON.stringify(history));
    renderHistoryList();
}

function toggleSelectAllHistory(e) {
    const checkboxes = document.querySelectorAll(".history-item-checkbox");
    checkboxes.forEach(cb => cb.checked = e.target.checked);
}

function deleteSelectedHistory() {
    const checkboxes = document.querySelectorAll(".history-item-checkbox:checked");
    if (checkboxes.length === 0) {
        alert("Please select at least one record to delete.");
        return;
    }

    if (!confirm(`Are you sure you want to delete ${checkboxes.length} selected record(s)?`)) return;

    const indicesToDelete = Array.from(checkboxes).map(cb => parseInt(cb.getAttribute("data-index")));
    let history = JSON.parse(localStorage.getItem("savajiBillingHistory") || "[]");

    history = history.filter((_, index) => !indicesToDelete.includes(index));
    localStorage.setItem("savajiBillingHistory", JSON.stringify(history));
    renderHistoryList();
}

function openBluetooth() {
    document.getElementById("bluetoothModal").classList.add("show");
}

function escapeQuotes(str) {
    return str.replace(/'/g, "\\'");
}

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
                priceBtns += `<button class="btn-add" onclick="addToCart('${escapeQuotes(item.name)}', 'Half', ${item.half})">
                    <span>Half</span><strong>₹${item.half}</strong>
                </button>`;
            }

            priceBtns += `<button class="btn-add" onclick="addToCart('${escapeQuotes(item.name)}', 'Full', ${item.full})">
                <span>Full</span><strong>₹${item.full}</strong>
            </button>`;

            itemsHtml += `
                <div class="item-card">
                    <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
                    <div class="item-name">${item.name}</div>
                    <div class="price-options">${priceBtns}</div>
                </div>`;
        });

        card.innerHTML = `
            <div class="category-title ${cat.type}">
                <i class="fa-solid ${cat.icon}"></i> ${cat.category}
            </div>
            <div class="items-grid">${itemsHtml}</div>`;

        menuContainer.appendChild(card);
    });
}

function addToCart(name, portion, price) {
    const itemKey = `${name} (${portion})`;

    if (cart[itemKey]) {
        cart[itemKey].qty += 1;
    } else {
        cart[itemKey] = { name, portion, price, qty: 1 };
    }

    updateCart();
}

function updateQuantity(itemKey, change) {
    if (cart[itemKey]) {
        cart[itemKey].qty += change;

        if (cart[itemKey].qty <= 0) {
            delete cart[itemKey];
        }
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
                    <button class="qty-btn" onclick="updateQuantity('${escapeQuotes(key)}', -1)">−</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateQuantity('${escapeQuotes(key)}', 1)">+</button>
                </div>
            </div>`;
    });

    cartItemsContainer.innerHTML = html;
    grandTotalEl.innerText = `₹${total}`;
}

function getCartTotal() {
    return Object.values(cart).reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function generateBillNumber() {
    return "SV-" + Date.now().toString().slice(-8);
}

function saveBillToHistory(billNumber, dateText) {
    const items = Object.values(cart).map(item => ({
        name: item.name,
        portion: item.portion,
        price: item.price,
        qty: item.qty,
        total: item.price * item.qty
    }));

    const bill = {
        billNumber,
        date: dateText,
        total: getCartTotal(),
        items
    };

    const history = JSON.parse(localStorage.getItem("savajiBillingHistory") || "[]");
    history.unshift(bill);
    localStorage.setItem("savajiBillingHistory", JSON.stringify(history.slice(0, 100)));
}

async function connectPrinter() {
    alert("Connecting Bluetooth / Serial printer...");
}

async function printCurrentBill() {
    const keys = Object.keys(cart);

    if (keys.length === 0) {
        alert("Please select items in Current Order first.");
        return;
    }

    const now = new Date();
    const billNumber = generateBillNumber();
    const dateText = now.toLocaleString("en-IN");

    saveBillToHistory(billNumber, dateText);
    alert("Bill saved and sent for printing!");
    cart = {};
    updateCart();
}