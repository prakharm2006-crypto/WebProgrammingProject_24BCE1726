//  DATA LAYER 
const restaurantsData = [
    {
        id: 1,
        name: "Mario's Pizza",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=200&fit=crop",
        rating: 4.5,
        deliveryTime: "30 min",
        cuisines: "Pizza, Italian",
        category: "pizza",
        distance: 2.5,
        menu: [
            // Vegetarian
            { id: 101, name: "Margherita", price: 220, desc: "Fresh cheese & basil", veg: true },
            { id: 102, name: "Farmhouse", price: 320, desc: "Corn, capsicum, mushroom", veg: true },
            { id: 105, name: "Veggie Supreme", price: 240, desc: "Mixed vegetables", veg: true },
            { id: 112, name: "Paneer Makhani", price: 260, desc: "Paneer in creamy makhani sauce", veg: true },
             { id: 113, name: "Spinach & Feta", price: 280, desc: "Spinach with feta cheese", veg: true },
             { id: 114, name: "Mushroom Truffle", price: 350, desc: "Mushrooms with truffle oil", veg: true },
             { id: 115, name: "Veggie Delight", price: 230, desc: "Bell peppers, olives, onions", veg: true },
             { id: 116, name: "Corn & Cheese", price: 210, desc: "Sweet corn with extra cheese", veg: true },
            // Non-Vegetarian
            { id: 103, name: "Pepperoni", price: 280, desc: "Classic pepperoni pizza", veg: false },
            { id: 104, name: "BBQ Chicken", price: 350, desc: "Smoked chicken & BBQ sauce", veg: false },
            { id: 106, name: "Meat Lovers", price: 400, desc: "Pepperoni, sausage, bacon", veg: false },
            { id: 107, name: "Chicken Sausage", price: 300, desc: "Spicy chicken sausage", veg: false },
             { id: 108, name: "Chicken Tikka", price: 320, desc: "Indian spiced chicken", veg: false },
             { id: 109, name: "Prawn Pizza", price: 380, desc: "Spicy prawn topping", veg: false },
             { id: 110, name: "Lamb Keema", price: 350, desc: "Minced lamb with spices", veg: false }
        ]
    },
    {
        id: 2,
        name: "Burger Paradise",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
        rating: 4.3,
        deliveryTime: "25 min",
        cuisines: "Burgers, American",
        category: "burger",
        distance: 1.8,
        menu: [
            // Vegetarian
            { id: 203, name: "Paneer Burger", price: 160, desc: "Grilled paneer delight", veg: true },
            { id: 206, name: "Veggie Burger", price: 140, desc: "Mixed veggie patty", veg: true },
            { id: 207, name: "Mushroom Swiss", price: 180, desc: "Sautéed mushrooms & swiss cheese", veg: true },
            { id: 208, name: "Falafel Burger", price: 150, desc: "Crispy falafel patty", veg: true },
            { id: 209, name: "Black Bean Burger", price: 170, desc: "Spicy black bean patty", veg: true },
            // Non-Vegetarian
            { id: 201, name: "Classic Cheeseburger", price: 180, desc: "Beef patty & cheddar", veg: false },
            { id: 202, name: "Bacon Burger", price: 220, desc: "Crispy bacon & egg", veg: false },
            { id: 204, name: "Double Cheese Burger", price: 200, desc: "Double patty extra cheese", veg: false },
            { id: 205, name: "Spicy Chicken Burger", price: 190, desc: "Spiced chicken breast", veg: false },
            { id: 210, name: "Lamb Burger", price: 250, desc: "Juicy lamb patty with mint chutney", veg: false },
            { id: 211, name: "Fish Burger", price: 210, desc: "Crispy fish fillet with tartar sauce", veg: false },
            { id: 212, name: "Shrimp Burger", price: 230, desc: "Spicy shrimp patty with aioli", veg: false }
        ]
    },
    {
        id: 3,
        name: "Tandoori Tales",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop",
        rating: 4.7,
        deliveryTime: "40 min",
        cuisines: "North Indian, SouthIndian",
        category: "indian",
        distance: 4.2,
        menu: [
            // Vegetarian
            { id: 503, name: "Paneer Tikka Masala", price: 240, desc: "Paneer in spiced gravy", veg: true },
            { id: 505, name: "Butter Garlic Naan ", price: 70, desc: "Soft & fluffy naan", veg: true },
            { id: 506, name: "Veg Biryani", price: 200, desc: "Fragrant rice with veggies", veg: true },
            { id: 507, name: "Dal Makhani", price: 180, desc: "Creamy lentil curry", veg: true },
            { id: 508, name: "Mix Veg", price: 90, desc: "Mixed vegetables with spiced masala", veg: true },
            { id: 509, name: "Chole Bhature", price: 150, desc: "Spicy chickpeas with bhature", veg: true },
            { id: 511, name: "Masala Dosa", price: 120, desc: "Crispy dosa with potato filling and chutney", veg: true },
            { id: 512, name: "Idli Sambar", price: 100, desc: "Steamed idlis with sambar and chutney", veg: true },
            { id: 513, name: "Rava Idli", price: 80, desc: "Semolina idlis with sambar", veg: true },
            { id: 514, name: "Vada Sambar", price: 90, desc: "Crispy vadas with sambar and chutney", veg: true },
            // Non-Vegetarian
            { id: 501, name: "Tandoori Chicken", price: 280, desc: "Grilled marinated chicken", veg: false },
            { id: 502, name: "Butter Chicken", price: 260, desc: "Creamy tomato curry", veg: false },
            { id: 504, name: " Mutton Biryani", price: 220, desc: "Fragrant rice with mutton", veg: false },
            { id: 510, name: "Fish Curry", price: 200, desc: "Spicy fish curry with coconut milk", veg: false },
            { id: 515, name: "Chicken Dosa", price: 150, desc: "Crispy dosa with spiced chicken filling and chutney", veg: false },
            { id: 516, name: "Egg Dosa", price: 130, desc: "Crispy dosa with egg filling and chutney", veg: false },
        ]
    },
    {
        id: 4,
        name: "Theos",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
        rating: 4.8,
        deliveryTime: "15 min",
        cuisines: "Desserts, Bakery",
        category: "pizza",
        distance: 1.2,
        menu: [
            // Vegetarian
            { id: 601, name: "Chocolate Cake", price: 300, desc: "Rich chocolate layers", veg: true },
            { id: 602, name: "Cheesecake", price: 280, desc: "Creamy NY cheesecake", veg: true },
            { id: 603, name: "Croissant", price: 120, desc: "Butter croissant fresh", veg: true },
            { id: 604, name: "Brownies", price: 150, desc: "Fudgy brownies (2pcs)", veg: true },
            { id: 605, name: "Ice Cream Sundae", price: 180, desc: "Mixed flavors", veg: true },
            // Non-Vegetarian
                { id: 606, name: "Egg Tart", price: 100, desc: "Flaky tart with custard", veg: false },
                { id: 607, name: "Chicken Puff", price: 130, desc: "Spiced chicken in puff", veg: false },
                { id: 608, name: "Meat Pie", price: 150, desc: "Savory meat pie", veg: false },
                { id: 609, name: "Sausage Roll", price: 120, desc: "Juicy sausage in roll", veg: false },
                { id: 610, name: "Bacon Danish", price: 140, desc: "Sweet & savory danish", veg: false }
        ]

    },
    {
        id: 5,
        name: "Sushi Paradise",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
        rating: 4.9,
        deliveryTime: "45 min",
        cuisines: "Sushi, Japanese",
        category: "burger",
        distance: 5.7,
        menu: [
            // Vegetarian
            { id: 701, name: "Veggie Roll", price: 280, desc: "Cucumber & avocado roll", veg: true },
            { id: 707, name: "Edamame", price: 150, desc: "Steamed soybeans with salt", veg: true },
            { id: 708, name: "Miso Soup", price: 120, desc: "Traditional miso soup", veg: true },
            { id: 709, name: "Seaweed Salad", price: 200, desc: "Fresh seaweed with sesame", veg: true },
            
            // Non-Vegetarian
            { id: 702, name: "California Roll", price: 320, desc: "Crab & avocado", veg: false },
            { id: 703, name: "Spicy Tuna", price: 380, desc: "Spicy tuna roll", veg: false },
            { id: 704, name: "Dragon Roll", price: 450, desc: "Premium dragon roll", veg: false },
            { id: 705, name: "Salmon Nigiri", price: 280, desc: "6 pieces salmon", veg: false },
            { id: 706, name: "Tempura Shrimp", price: 350, desc: "Crispy tempura shrimp roll", veg: false }
        ]
    },
    {
        id: 6,
        name: "California Burrito",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop",
        rating: 4.7,
        deliveryTime: "35 min",
        cuisines: "Mexican",
        category: "indian",
        distance: 6.7,
        menu: [
            // Vegetarian
            { id: 801, name: "Bean Burrito", price: 180, desc: "Black beans, rice, salsa, cheese", veg: true },
            { id: 802, name: "Veggie Burrito", price: 200, desc: "Mixed veggies, guacamole, sour cream", veg: true },
            { id: 803, name: "Cheese Quesadilla", price: 160, desc: "Melted cheese in tortilla", veg: true },
            { id: 804, name: "Guacamole Burrito", price: 190, desc: "Fresh guacamole, rice, beans", veg: true },
            { id: 805, name: "Spinach Quesadilla", price: 170, desc: "Spinach and cheese in tortilla", veg: true },
            { id: 806, name: "Mushroom Burrito", price: 210, desc: "Sautéed mushrooms, peppers, cheese", veg: true },
            // Non-Vegetarian
            { id: 807, name: "Chicken Burrito", price: 240, desc: "Grilled chicken, rice, beans, salsa", veg: false },
            { id: 808, name: "Beef Burrito", price: 260, desc: "Seasoned beef, cheese, guacamole", veg: false },
            { id: 809, name: "Carnitas Burrito", price: 280, desc: "Slow-cooked pork, pico de gallo", veg: false },
            { id: 810, name: "Fish Tacos", price: 220, desc: "Grilled fish, cabbage slaw, lime", veg: false },
            { id: 811, name: "Shrimp Burrito", price: 290, desc: "Spicy shrimp, rice, black beans", veg: false },
            { id: 812, name: "Chicken Quesadilla", price: 230, desc: "Chicken and cheese in tortilla", veg: false }
        ]
    }
];
//  UI STATE MANAGEMENT 
const uiState = {
    currentUser: null,
    cart: [],
    currentRestaurant: null,
    lastOrder: null,
    orderDetails: {}
};
//  STORAGE MANAGER 
const storageManager = {
    // Save user data to localStorage
    saveUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    },

    // Get user data from localStorage
    getUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    // Clear user from localStorage
    clearUser() {
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
        localStorage.removeItem('orders');
    },

    // Save cart to localStorage
    saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    },

    // Get cart from localStorage
    getCart() {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    },

    // Save orders to localStorage
    saveOrders(orders) {
        localStorage.setItem('orders', JSON.stringify(orders));
    },

    // Get orders from localStorage
    getOrders() {
        const orders = localStorage.getItem('orders');
        return orders ? JSON.parse(orders) : [];
    }
};
// AUTH MANAGER 
const authManager = {
    goToAuth(page) {
        // Hide landing page
        document.getElementById('landingPage').classList.add('hidden');
        
        // Show requested auth page
        if (page === 'login') {
            document.getElementById('loginPage').classList.remove('hidden');
            document.getElementById('signupPage').classList.add('hidden');
        } else if (page === 'signup') {
            document.getElementById('signupPage').classList.remove('hidden');
            document.getElementById('loginPage').classList.add('hidden');
        }
    },
    goBack() {
        // Go back to landing page from auth pages
        document.getElementById('landingPage').classList.remove('hidden');
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('signupPage').classList.add('hidden');
    },
    toggleAuth() {
        document.getElementById('loginPage').classList.toggle('hidden');
        document.getElementById('signupPage').classList.toggle('hidden');
    },
    
    // Local Login
    handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const loginBtn = e.target.querySelector('button[type="submit"]');
        
        try {
            loginBtn.disabled = true;
            loginBtn.textContent = 'Logging in...';
            
            // Simple local authentication - check if user exists in localStorage
            const savedUser = storageManager.getUser();
            if (savedUser && savedUser.email === email) {
                uiState.currentUser = savedUser;
                navigationManager.showApp();
            } else {
                alert('User not found. Please sign up first.');
            }
        } catch (error) {
            alert('Login failed: ' + error.message);
            console.error('Login error:', error);
        } finally {
            loginBtn.disabled = false;
            loginBtn.textContent = 'Login';
        }
    },
    
    // Local Signup
    handleSignup(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const phone = document.getElementById('signupPhone').value;
        const password = document.getElementById('signupPassword').value;
        const signupBtn = e.target.querySelector('button[type="submit"]');
        
        try {
            signupBtn.disabled = true;
            signupBtn.textContent = 'Creating account...';
            
            // Validation
            if (!name.trim()) {
                alert('Please enter your name.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Phone validation - must be exactly 10 digits
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone)) {
                alert('Phone number must be exactly 10 digits.');
                return;
            }
            
            // Password validation - must be at least 8 characters
            if (password.length < 8) {
                alert('Password must be at least 8 characters long.');
                return;
            }
            
            // Check if user already exists
            const existingUser = storageManager.getUser();
            if (existingUser && existingUser.email === email) {
                alert('User already exists. Please login instead.');
                return;
            }
            
            // Create user locally
            const user = { 
                name, 
                email, 
                phone, 
                createdAt: new Date(),
                cart: [],
                orders: []
            };
            
            // Save user data
            storageManager.saveUser(user);
            uiState.currentUser = user;
            
            navigationManager.showApp();
        } catch (error) {
            alert('Signup failed: ' + error.message);
            console.error('Signup error:', error);
        } finally {
            signupBtn.disabled = false;
            signupBtn.textContent = 'Sign Up';
        }
    },
    
    // Local Logout
    handleLogout() {
        storageManager.clearUser();
        uiState.currentUser = null;
        uiState.cart = [];
        location.reload();
    }
};
//  NAVIGATION MANAGER
const navigationManager = {
    showApp() {
        document.getElementById('landingPage').classList.add('hidden');
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('signupPage').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');
        
        document.getElementById('userName').textContent = uiState.currentUser.name;
        restaurantManager.loadRestaurants();
        cartSystemManager.updateCartUI();
    },
    toggleUserMenu() {
        const dropdown = document.getElementById('userDropdown');
        dropdown.classList.toggle('hidden');
    },
    closeUserMenu() {
        document.getElementById('userDropdown').classList.add('hidden');
    }
};
//  RESTAURANT LISTING MANAGER 
const restaurantManager = {
    loadRestaurants() {
        this.displayRestaurants(restaurantsData);
        this.initSearch();
    },
    displayRestaurants(restaurants) {
        const container = document.getElementById('restaurantList');
        container.innerHTML = '';
        restaurants.forEach(restaurant => {
            const card = document.createElement('div');
            card.className = 'restaurant-card';
            card.onclick = () => menuViewManager.openMenu(restaurant);
            card.innerHTML = `
                <img src="${restaurant.image}" class="restaurant-image">
                <div class="restaurant-info">
                    <div class="restaurant-name">${restaurant.name}</div>
                    <div class="restaurant-rating">⭐ ${restaurant.rating}</div>
                    <div class="restaurant-cuisines">${restaurant.cuisines}</div>
                    <div class="restaurant-distance">📍 ${restaurant.distance} km</div>
                </div>
            `;

            container.appendChild(card);
        });
    },
    initSearch() {
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = restaurantsData.filter(r =>
                r.name.toLowerCase().includes(term) ||
                r.cuisines.toLowerCase().includes(term)
            );
            this.displayRestaurants(filtered);
        });
    }
};
//  MENU VIEW MANAGER 
const menuViewManager = {
    currentFilter: 'all',
    openMenu(restaurant) {
        // Check if user already has items from different restaurant
        if (uiState.cart.length > 0 && uiState.currentRestaurant && uiState.currentRestaurant.id !== restaurant.id) {
            const confirmSwitch = confirm(`You have items from ${uiState.currentRestaurant.name}. Clear cart and order from ${restaurant.name}?`);
            if (confirmSwitch) {
                uiState.cart = [];
                storageManager.saveCart([]);
            } else {
                return;
            }
        }
        uiState.currentRestaurant = restaurant;
        this.currentFilter = 'all';
        const header = document.getElementById('menuRestaurantInfo');
        header.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p>⭐ ${restaurant.rating} • ${restaurant.cuisines} • 📍 ${restaurant.distance} km</p>
        `;
        // Reset filter buttons
        document.getElementById('filterAll').classList.add('active');
        document.getElementById('filterVeg').classList.remove('active');
        document.getElementById('filterNonVeg').classList.remove('active');
        this.displayMenuItems();
        document.getElementById('menuModal').classList.remove('hidden');
    },
    filterMenuItems(type) {
        this.currentFilter = type;
        // Update active button
        document.getElementById('filterAll').classList.remove('active');
        document.getElementById('filterVeg').classList.remove('active');
        document.getElementById('filterNonVeg').classList.remove('active');
        if (type === 'all') {
            document.getElementById('filterAll').classList.add('active');
        } else if (type === 'veg') {
            document.getElementById('filterVeg').classList.add('active');
        } else if (type === 'non-veg') {
            document.getElementById('filterNonVeg').classList.add('active');
        }
        this.displayMenuItems();
    },
    displayMenuItems() {
        const container = document.getElementById('menuItemsList');
        container.innerHTML = '';
        // Separate items into veg and non-veg
        let vegItems = uiState.currentRestaurant.menu.filter(item => item.veg === true);
        let nonVegItems = uiState.currentRestaurant.menu.filter(item => item.veg === false);
        // Apply filter
        if (this.currentFilter === 'veg') {
            vegItems = vegItems;
            nonVegItems = [];
        } else if (this.currentFilter === 'non-veg') {
            vegItems = [];
            nonVegItems = nonVegItems;
        }
        // Display Vegetarian section
        if (vegItems.length > 0) {
            const vegHeader = document.createElement('div');
            vegHeader.className = 'menu-section-header veg';
            vegHeader.innerHTML = '<span>🥬 Vegetarian</span>';
            container.appendChild(vegHeader);
            vegItems.forEach(item => {
                container.appendChild(this.createMenuItemElement(item));
            });
        }
        // Display Non-Vegetarian section
        if (nonVegItems.length > 0) {
            const nonVegHeader = document.createElement('div');
            nonVegHeader.className = 'menu-section-header non-veg';
            nonVegHeader.innerHTML = '<span>🍗 Non-Vegetarian</span>';
            container.appendChild(nonVegHeader);
            nonVegItems.forEach(item => {
                container.appendChild(this.createMenuItemElement(item));
            });
        }
        // Show message if no items
        if (vegItems.length === 0 && nonVegItems.length === 0) {
            const noItems = document.createElement('div');
            noItems.className = 'no-items-message';
            noItems.innerHTML = '<p>No items available for this filter</p>';
            container.appendChild(noItems);
        }
    },
    createMenuItemElement(item) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        const inCart = uiState.cart.find(i => i.id === item.id);
        const qty = inCart ? inCart.qty : 0;
        const vegIcon = item.veg ? '🟢' : '🔴';
        itemDiv.innerHTML = `
            <div class="menu-item-left">
                <div class="menu-item-badge">${vegIcon}</div>
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-desc">${item.desc}</div>
                <div class="menu-item-price">₹${item.price}</div>
            </div>
            <div class="menu-item-right">
                ${qty > 0 ? `
                    <button class="qty-btn" onclick="cartSystemManager.updateQty(${item.id}, -1)">−</button>
                    <span class="qty-display">${qty}</span>
                    <button class="qty-btn" onclick="cartSystemManager.updateQty(${item.id}, 1)">+</button>
                ` : `
                    <button class="add-btn" onclick="cartSystemManager.addItem(${item.id}, '${item.name}', ${item.price})">Add</button>
                `}
            </div>
        `;
        return itemDiv;
    },
    closeMenu() {
        document.getElementById('menuModal').classList.add('hidden');
    }
};
// CART SYSTEM MANAGER 
const cartSystemManager = {
    addItem(itemId, itemName, itemPrice) {
        const existing = uiState.cart.find(i => i.id === itemId);
        if (existing) {
            existing.qty++;
        } else {
            uiState.cart.push({ id: itemId, name: itemName, price: itemPrice, qty: 1 });
        }
        storageManager.saveCart(uiState.cart);
        this.updateCartUI();
        this.showCartPanel();
        
        if (uiState.currentRestaurant) {
            menuViewManager.openMenu(uiState.currentRestaurant);
        }
    },
    toggleCartPanel() {
        const cartPanel = document.getElementById('cartPanel');
        const mainContent = document.querySelector('.main-content');
        cartPanel.classList.toggle('cart-hidden');
        mainContent.classList.toggle('cart-hidden');
    },
    showCartPanel() {
        const cartPanel = document.getElementById('cartPanel');
        const mainContent = document.querySelector('.main-content');
        cartPanel.classList.remove('cart-hidden');
        mainContent.classList.remove('cart-hidden');
    },
    updateQty(itemId, change) {
        const item = uiState.cart.find(i => i.id === itemId);
        if (item) {
            item.qty += change;
            if (item.qty <= 0) {
                uiState.cart = uiState.cart.filter(i => i.id !== itemId);
            }
            storageManager.saveCart(uiState.cart);
            this.updateCartUI();
            
            if (uiState.currentRestaurant) {
                menuViewManager.openMenu(uiState.currentRestaurant);
            }
        }
    },
    removeItem(itemId) {
        uiState.cart = uiState.cart.filter(i => i.id !== itemId);
        storageManager.saveCart(uiState.cart);
        this.updateCartUI();
    },
    updateCartUI() {
        const cartItemsList = document.getElementById('cartItemsList');
        const emptyMsg = document.getElementById('emptyCart');
        const summary = document.getElementById('cartSummary');
        const badge = document.getElementById('cartBadge');
        // Update badge
        const totalQty = uiState.cart.reduce((sum, item) => sum + item.qty, 0);
        badge.textContent = totalQty;
        if (uiState.cart.length === 0) {
            cartItemsList.classList.add('hidden');
            emptyMsg.style.display = 'block';
            summary.classList.add('hidden');
            return;
        }
        emptyMsg.style.display = 'none';
        cartItemsList.classList.remove('hidden');
        summary.classList.remove('hidden');
        cartItemsList.innerHTML = '';
        let subtotal = 0;
        uiState.cart.forEach(item => {
            subtotal += item.price * item.qty;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price} × ${item.qty}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="cartSystemManager.updateQty(${item.id}, -1)">−</button>
                    <span style="min-width: 20px; text-align: center; font-weight: bold;">${item.qty}</span>
                    <button class="qty-btn" onclick="cartSystemManager.updateQty(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="cartSystemManager.removeItem(${item.id})">✕</button>
                </div>
            `;

            cartItemsList.appendChild(cartItem);
        });
        document.getElementById('subtotalAmount').textContent = subtotal;
        const gst = Math.round(subtotal * 0.18);
        document.getElementById('gstAmount').textContent = gst;
        const deliveryFee = uiState.currentRestaurant ? Math.round(20 + uiState.currentRestaurant.distance * 5) : 40;
        document.getElementById('deliveryFeeAmount').textContent = deliveryFee;
        const total = subtotal + deliveryFee + gst;
        document.getElementById('totalAmount').textContent = total;
    }
};
// ORDER SIMULATION MANAGER
const orderSimulationManager = {
    currentOrderId: null,
    proceedToCheckout() {
        if (uiState.cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        const subtotal = uiState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const gst = Math.round(subtotal * 0.18);
        const deliveryFee = uiState.currentRestaurant ? Math.round(20 + uiState.currentRestaurant.distance * 5) : 40;
        let discount = 0;
        let discountPercent = 0;
        // Apply  discounts based on subtotal
        if (subtotal > 6000) {
            discountPercent = 30;
            discount = Math.floor(subtotal * 0.30);
        } else if (subtotal > 4000) {
            discountPercent = 25;
            discount = Math.floor(subtotal * 0.25);
        } else if (subtotal > 2500) {
            discountPercent = 20;
            discount = Math.floor(subtotal * 0.20);
        } else if (subtotal > 1500) {
            discountPercent = 15;
            discount = Math.floor(subtotal * 0.15);
        } else if (subtotal > 500) {
            discountPercent = 10;
            discount = Math.floor(subtotal * 0.10);
        }
        const total = subtotal + gst + deliveryFee - discount;
        // Store payment details in state
        uiState.orderDetails = {
            subtotal: subtotal,
            gst: gst,
            deliveryFee: deliveryFee,
            discount: discount,
            discountPercent: discountPercent,
            total: total
        };
        // Show payment modal
        document.getElementById('paySubtotal').textContent = subtotal;
        document.getElementById('payGst').textContent = gst;
        document.getElementById('payTotal').textContent = total;
        if (discount > 0) {
            document.getElementById('discountRow').style.display = 'flex';
            document.getElementById('discountAmount').textContent = discount;
            document.getElementById('discountLabel').textContent = `Discount (${discountPercent}%):`;
        } else {
            document.getElementById('discountRow').style.display = 'none';
        }
        document.getElementById('paymentModal').classList.remove('hidden');
    },
    processPayment() {
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
        if (!paymentMethod) {
            alert('Please select a payment method');
            return;
        }
        const orderId = Math.floor(100000 + Math.random() * 900000);
        const methodNames = {
            'upi': 'UPI',
            'cash': 'Cash on Delivery'
        };
        // Get current restaurant info
        let restaurantName = 'Food Express';
        if (uiState.currentRestaurant) {
            restaurantName = uiState.currentRestaurant.name;
        }
        // Save order to history with restaurant info
        const orders = storageManager.getOrders();
        const orderData = {
            id: orderId,
            items: [...uiState.cart],
            total: uiState.orderDetails.total,
            subtotal: uiState.orderDetails.subtotal,
            gst: uiState.orderDetails.gst,
            deliveryFee: uiState.orderDetails.deliveryFee,
            discount: uiState.orderDetails.discount,
            discountPercent: uiState.orderDetails.discountPercent,
            paymentMethod: methodNames[paymentMethod],
            date: new Date().toLocaleString(),
            user: uiState.currentUser.name,
            phone: uiState.currentUser.phone,
            restaurantName: restaurantName
        };
        orders.push(orderData);
        storageManager.saveOrders(orders);
        // Store current order for invoice
        uiState.lastOrder = orderData;
        // Show success modal
        document.getElementById('orderId').textContent = `#${orderId}`;
        document.getElementById('paymentModal').classList.add('hidden');
        document.getElementById('orderModal').classList.remove('hidden');
        // Clear cart
        uiState.cart = [];
        storageManager.saveCart([]);
        cartSystemManager.updateCartUI();
        menuViewManager.closeMenu();
    },
    closePaymentModal() {
        document.getElementById('paymentModal').classList.add('hidden');
    },
    closeOrderModal() {
        document.getElementById('orderModal').classList.add('hidden');
    },
    showPaymentOption(method) {
        const upiModal = document.getElementById('upiQrModal');
        if (method === 'upi') {
        upiModal.classList.remove('hidden');
        this.generateQR();
        } else {
        upiModal.classList.add('hidden');
        }
    },
    generateQR() {
        const canvas = document.getElementById('qrCanvas');
        const ctx = canvas.getContext('2d');
        // Clear canvas
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Generate simplified random QR pattern 
        const moduleCount = 25;
        const moduleSize = canvas.width / moduleCount;
        ctx.fillStyle = 'black';
        for (let i = 0; i < moduleCount; i++) {
            for (let j = 0; j < moduleCount; j++) {
                // Random pattern of QR
                if (Math.random() > 0.5) {
                    ctx.fillRect(i * moduleSize, j * moduleSize, moduleSize - 1, moduleSize - 1);
                }
            }
        }
    },
    downloadBill() {
        if (!uiState.lastOrder) {
            alert('No order found');
            return;
        }
        const order = uiState.lastOrder;
        // Populate invoice template
        document.getElementById('inv-orderId').textContent = `#${order.id}`;
        document.getElementById('inv-date').textContent = order.date;
        document.getElementById('inv-customer').textContent = order.user;
        document.getElementById('inv-phone').textContent = order.phone || '-';
        document.getElementById('inv-restaurant').textContent = order.restaurantName || 'Food Express';
        document.getElementById('inv-subtotal').textContent = order.subtotal;
        document.getElementById('inv-delivery-fee').textContent = order.deliveryFee;
        document.getElementById('inv-gst').textContent = order.gst ?? 0;
        document.getElementById('inv-total').textContent = order.total;
        document.getElementById('inv-payment').textContent = order.paymentMethod;
        // Show/hide discount if applicable
        const discountRow = document.getElementById('inv-discount-row');
        if (order.discount > 0) {
            discountRow.style.display = 'table-row';
            document.getElementById('inv-discount').textContent = order.discount;
            document.getElementById('inv-discount-label').textContent = `Discount (${order.discountPercent}%):`;
        } else {
            discountRow.style.display = 'none';
        }
        // Populate items
        const itemsHTML = order.items.map(item => `
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 8px;">${item.name}</td>
                <td style="text-align: center; padding: 8px;">${item.qty}</td>
                <td style="text-align: right; padding: 8px;">₹${item.price}</td>
                <td style="text-align: right; padding: 8px;">₹${item.price * item.qty}</td>
            </tr>
        `).join('');
        document.getElementById('inv-items').innerHTML = itemsHTML;
        // To Generate PDF
        const element = document.getElementById('invoiceContent');
        const opt = {
            margin: 10,
            filename: `Invoice_${order.id}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
        };
        html2pdf().set(opt).from(element).save();
    }
};
//  PROFILE MANAGER
const profileManager = {
    viewProfile() {
        if (uiState.currentUser) {
            // Populate user info
            document.getElementById('profileName').textContent = uiState.currentUser.name;
            document.getElementById('profileEmail').textContent = uiState.currentUser.email;
            document.getElementById('profilePhone').textContent = uiState.currentUser.phone;
            
            // Populate order history
            this.populateOrderHistory();
            
            // Show profile modal
            document.getElementById('profileModal').classList.remove('hidden');
        }
        navigationManager.closeUserMenu();
    },
    populateOrderHistory() {
        const orders = storageManager.getOrders();
        const orderHistoryDiv = document.getElementById('orderHistory');
        orderHistoryDiv.innerHTML = '';
        
        if (orders.length === 0) {
            orderHistoryDiv.innerHTML = '<p>No orders yet. Start ordering delicious food!</p>';
            return;
        }
        
        orders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'order-item';
            orderDiv.innerHTML = `
                <div class="order-header">
                    <div class="order-info">
                        <strong>Order #${order.id}</strong>
                        <span>${order.restaurantName}</span>
                        <span>${order.date}</span>
                    </div>
                    <div class="order-total">₹${order.total}</div>
                </div>
                <div class="order-items">
                    ${order.items.map(item => `<div class="order-item-detail">${item.name} x${item.qty} - ₹${item.price * item.qty}</div>`).join('')}
                </div>
                <div class="order-actions">
                    <button onclick="ratingManager.openRatingModal(${order.id})" class="rate-btn">🎨 Rate Order</button>
                </div>
            `;
            orderHistoryDiv.appendChild(orderDiv);
        });
    },
    closeProfile() {
        document.getElementById('profileModal').classList.add('hidden');
    }
};
// RATING MANAGER
const ratingManager = {
    currentOrderId: null,
    isDrawing: false,
    currentColor: 'black',
    
    openRatingModal(orderId) {
        this.currentOrderId = orderId;
        document.getElementById('ratingOrderId').textContent = orderId;
        document.getElementById('ratingModal').classList.remove('hidden');
        this.initCanvas();
    },
    
    closeRatingModal() {
        document.getElementById('ratingModal').classList.add('hidden');
        this.currentOrderId = null;
    },
    
    initCanvas() {
        const canvas = document.getElementById('ratingCanvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        canvas.width = 400;
        canvas.height = 300;
        
        // Clear canvas with white background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add drawing event listeners
        canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        canvas.addEventListener('mousemove', (e) => this.draw(e));
        canvas.addEventListener('mouseup', () => this.stopDrawing());
        canvas.addEventListener('mouseout', () => this.stopDrawing());
        
        // Touch events for mobile
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.startDrawing(e.touches[0]);
        });
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            this.draw(e.touches[0]);
        });
        canvas.addEventListener('touchend', () => this.stopDrawing());
    },
    
    startDrawing(e) {
        this.isDrawing = true;
        const canvas = document.getElementById('ratingCanvas');
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
    },
    
    draw(e) {
        if (!this.isDrawing) return;
        
        const canvas = document.getElementById('ratingCanvas');
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.lineTo(x, y);
        ctx.strokeStyle = this.currentColor;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();
    },
    
    stopDrawing() {
        this.isDrawing = false;
    },
    
    clearCanvas() {
        const canvas = document.getElementById('ratingCanvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    },
    
    changeColor(color) {
        this.currentColor = color;
    },
    
    submitRating() {
        const canvas = document.getElementById('ratingCanvas');
        const ratingData = canvas.toDataURL('image/png');
        
        // Save rating to localStorage
        const ratings = JSON.parse(localStorage.getItem('orderRatings') || '{}');
        ratings[this.currentOrderId] = {
            orderId: this.currentOrderId,
            ratingImage: ratingData,
            date: new Date().toISOString()
        };
        localStorage.setItem('orderRatings', JSON.stringify(ratings));
        
        alert('Thank you for rating your order! 🎨');
        this.closeRatingModal();
    }
};
// INITIALIZATION 
window.addEventListener('DOMContentLoaded', () => {
    // Check for saved user session
    const savedUser = storageManager.getUser();
    if (savedUser) {
        uiState.currentUser = savedUser;
        // Load cart
        uiState.cart = storageManager.getCart();
        navigationManager.showApp();
    } else {
        // Show landing page if no saved session
        document.getElementById('landingPage').classList.remove('hidden');
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('signupPage').classList.add('hidden');
        document.getElementById('mainApp').classList.add('hidden');
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-menu')) {
            navigationManager.closeUserMenu();
        }
    });
});
