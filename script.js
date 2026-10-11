/**
 * Pasta La Vita - Wah Cantt
 * Core Application Logic, Menu Engine, Cart, and WhatsApp Ordering
 */

// Restaurant WhatsApp & Hotline Configuration
const RESTAURANT_CONFIG = {
  name: "Pasta La Vita",
  whatsappNumber: "923001501945", // Official contact: 0300 150 1945
  foodpandaUrl: "https://www.foodpanda.pk/restaurant/f548/pasta-la-vita-f548",
  deliveryFee: 100,
  freeDeliveryThreshold: 1800,
  openingHour: 11, // 11:00 AM
  closingHour: 22.5 // 10:30 PM
};

// Comprehensive Authentic Menu Data
const MENU_ITEMS = [
  // White Sauce Series
  {
    id: 1,
    name: "Signature White Sauce Pasta",
    category: "white-sauce",
    price: 719,
    originalPrice: 799,
    desc: "Our iconic Italian Alfredo creation simmered with fresh cream, garlic butter, tender grilled herb chicken, and generous molten mozzarella pull.",
    image: "images/white_sauce.jpg",
    spicy: false,
    veg: false,
    badge: "Chef's Signature",
    portion: "Single Serving (Loaded)"
  },
  {
    id: 2,
    name: "Chicken Cheese Pasta (White)",
    category: "white-sauce",
    price: 719,
    originalPrice: 799,
    desc: "Oven-baked penne in luxurious parmesan cream sauce loaded with double cheddar and mozzarella crust over flame-seared chicken.",
    image: "images/white_sauce.jpg",
    spicy: false,
    veg: false,
    badge: "Double Cheese",
    portion: "Single Serving"
  },
  {
    id: 3,
    name: "Mushroom Cheese Pasta",
    category: "white-sauce",
    price: 750,
    originalPrice: 820,
    desc: "Earthy sautéed button mushrooms enveloped in velvety herb-infused white cream, roasted garlic, and melted mozzarella.",
    image: "images/white_sauce.jpg",
    spicy: false,
    veg: true,
    badge: "Vegetarian Pick",
    portion: "Single Serving"
  },
  {
    id: 4,
    name: "Smoked Sausage White Pasta",
    category: "white-sauce",
    price: 730,
    originalPrice: 799,
    desc: "Hearty slices of smoked chicken sausage glazed in creamy Italian white sauce with black olives and cracked pepper.",
    image: "images/white_sauce.jpg",
    spicy: false,
    veg: false,
    badge: "Hearty",
    portion: "Single Serving"
  },

  // Flaming Red Sauce Series
  {
    id: 5,
    name: "Flaming Red Sauce Pasta",
    category: "red-sauce",
    price: 719,
    originalPrice: 799,
    desc: "Slow-reduced Italian tomato marinara infused with crushed red chili flakes, oregano, sautéed bell peppers, and grilled chicken breast chunks.",
    image: "images/red_sauce.jpg",
    spicy: true,
    veg: false,
    badge: "Fiery Favorite",
    portion: "Single Serving"
  },
  {
    id: 6,
    name: "HA Chicken Cheese Pasta (Red)",
    category: "red-sauce",
    price: 719,
    originalPrice: 799,
    desc: "Zesty fire-roasted marinara pasta topped with baked mozzarella crust, chili oil drizzle, and succulent chicken strips.",
    image: "images/red_sauce.jpg",
    spicy: true,
    veg: false,
    badge: "Spicy Baked",
    portion: "Single Serving"
  },
  {
    id: 7,
    name: "Mushroom Red Arrabbiata",
    category: "red-sauce",
    price: 730,
    originalPrice: 800,
    desc: "Authentic spicy Italian Arrabbiata sauce simmered with button mushrooms, cherry tomatoes, fresh basil, and chili flakes.",
    image: "images/red_sauce.jpg",
    spicy: true,
    veg: true,
    badge: "Spicy Veg",
    portion: "Single Serving"
  },
  {
    id: 8,
    name: "Hot Sausage Red Pasta",
    category: "red-sauce",
    price: 730,
    originalPrice: 800,
    desc: "Spiced chicken frankfurters tossed in flaming Arrabbiata sauce, jalapeño rings, and melted cheese garnish.",
    image: "images/red_sauce.jpg",
    spicy: true,
    veg: false,
    badge: "Spicy",
    portion: "Single Serving"
  },

  // Loaded Sides & Fries
  {
    id: 9,
    name: "Tandoori Tikka Fries",
    category: "sides",
    price: 675,
    originalPrice: 750,
    desc: "Crispy skin-on french fries piled high with smoky chicken tikka chunks, melted cheese, spicy garlic-mayo drizzle, and jalapeños.",
    image: "images/tandoori_fries.jpg",
    spicy: true,
    veg: false,
    badge: "Crowd Favorite",
    portion: "Shareable Basket"
  },
  {
    id: 10,
    name: "Cheesy Garlic Herb Bread",
    category: "sides",
    price: 399,
    originalPrice: 450,
    desc: "Toasted Italian artisan baguette slices coated in herb-garlic butter, loaded with molten mozzarella and oregano seasoning.",
    image: "images/white_sauce.jpg",
    spicy: false,
    veg: true,
    badge: "Must Try Side",
    portion: "4 Slices"
  },
  {
    id: 11,
    name: "Crispy Golden Fries (Peri Peri)",
    category: "sides",
    price: 350,
    originalPrice: 400,
    desc: "Crisp potato fries dusted in house-blended peri-peri spices, served with tangy dipping sauce.",
    image: "images/tandoori_fries.jpg",
    spicy: true,
    veg: true,
    badge: "Snack",
    portion: "Regular Box"
  },

  // Value Combos & Deals
  {
    id: 12,
    name: "Solo Pasta Combo Deal",
    category: "combos",
    price: 999,
    originalPrice: 1199,
    desc: "1 Signature Pasta (White or Red) + 1 Regular Seasoned Fries + 1 Cold Beverage (345ml). Ideal single meal.",
    image: "images/hero.jpg",
    spicy: false,
    veg: false,
    badge: "Save Rs. 200",
    portion: "Complete Solo Meal"
  },
  {
    id: 13,
    name: "Duo Italian Delight",
    category: "combos",
    price: 1950,
    originalPrice: 2350,
    desc: "2 Pastas of your choice + 1 Loaded Tandoori Tikka Fries + 2 Chilled Drinks. Perfect for couples or friends.",
    image: "images/hero.jpg",
    spicy: false,
    veg: false,
    badge: "Best Value Deal",
    portion: "2 Persons"
  },
  {
    id: 14,
    name: "Family Trattoria Feast",
    category: "combos",
    price: 2990,
    originalPrice: 3590,
    desc: "3 Full Pastas + 1 Large Tandoori Tikka Fries + 1 Cheesy Garlic Bread + 1.5L Beverage. Ultimate family feast.",
    image: "images/hero.jpg",
    spicy: false,
    veg: false,
    badge: "Mega Platter",
    portion: "4 - 5 Persons"
  },

  // Beverages & Refreshers
  {
    id: 15,
    name: "Italian Mint Margarita",
    category: "drinks",
    price: 280,
    originalPrice: 320,
    desc: "Refreshing ice-crushed cooler with fresh garden mint leaves, lime zest, soda fizz, and rock salt.",
    image: "images/drink.jpg",
    spicy: false,
    veg: true,
    badge: "Ice Cold",
    portion: "350 ml"
  },
  {
    id: 16,
    name: "Chilled Soft Drink (Can)",
    category: "drinks",
    price: 120,
    originalPrice: 150,
    desc: "Choice of Coca Cola, Sprite, Fanta, or Mineral Water.",
    image: "images/drink.jpg",
    spicy: false,
    veg: true,
    badge: "Beverage",
    portion: "Can"
  }
];

// State Management
let currentCategory = "all";
let searchQuery = "";
let filterVegOnly = false;
let filterSpicyOnly = false;
let cart = [];

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initCartFromStorage();
  renderMenu();
  setupEventListeners();
  checkRestaurantHours();
  setupStickyHeader();
  setupReservationModal();
});

/* ==========================================================================
   Store Hours Calculation (PKT - Pakistan Standard Time)
   ========================================================================== */
function checkRestaurantHours() {
  const badge = document.getElementById("liveStatusBadge");
  if (!badge) return;

  const now = new Date();
  // Get PKT hours (UTC + 5)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const pktDate = new Date(utc + (3600000 * 5));
  const currentHourDecimal = pktDate.getHours() + (pktDate.getMinutes() / 60);

  const isOpen = currentHourDecimal >= RESTAURANT_CONFIG.openingHour && 
                 currentHourDecimal <= RESTAURANT_CONFIG.closingHour;

  if (isOpen) {
    badge.innerHTML = `<span class="pulse-dot"></span> Open Now · Closes 10:30 PM`;
    badge.style.borderColor = "rgba(46, 164, 79, 0.4)";
    badge.style.color = "#48d371";
  } else {
    badge.innerHTML = `<span class="pulse-dot" style="background:#e74c3c;box-shadow:0 0 8px #e74c3c;"></span> Closed · Opens 11:00 AM`;
    badge.style.borderColor = "rgba(231, 76, 60, 0.4)";
    badge.style.color = "#ff7675";
  }
}

/* ==========================================================================
   Menu Rendering & Filtering
   ========================================================================== */
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  // Filter items
  const filtered = MENU_ITEMS.filter(item => {
    const matchesCat = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = !filterVegOnly || item.veg;
    const matchesSpicy = !filterSpicyOnly || item.spicy;

    return matchesCat && matchesSearch && matchesVeg && matchesSpicy;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-utensils" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--gold-primary);"></i>
        <h3>No dishes found</h3>
        <p>Try resetting filters or searching with different keywords.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="menu-item-card" data-id="${item.id}">
      <div class="menu-thumb">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.badge ? `<span class="badge-tag-small">${item.badge}</span>` : ""}
      </div>
      <div class="menu-item-content">
        <div class="menu-item-header">
          <h3 class="menu-item-title">${item.name}</h3>
          <div class="menu-item-price">
            Rs. ${item.price}
            ${item.originalPrice ? `<del>Rs. ${item.originalPrice}</del>` : ""}
          </div>
        </div>
        <p class="menu-item-desc">${item.desc}</p>
        <div class="menu-item-footer">
          <span class="portion-tag">
            <i class="fa-solid fa-plate-wheat"></i> ${item.portion}
            ${item.spicy ? `<span style="color:var(--red-accent);margin-left:6px;"><i class="fa-solid fa-pepper-hot"></i> Spicy</span>` : ""}
          </span>
          <button class="btn btn-sm btn-gold add-to-order-btn" data-id="${item.id}">
            <i class="fa-solid fa-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  `).join("");

  // Attach button listeners
  grid.querySelectorAll(".add-to-order-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      addToCart(id);
    });
  });
}

/* ==========================================================================
   Cart State & Logic
   ========================================================================== */
function initCartFromStorage() {
  try {
    const saved = localStorage.getItem("pasta_la_vita_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (err) {
    cart = [];
  }
  updateCartUI();
}

function saveCartToStorage() {
  try {
    localStorage.setItem("pasta_la_vita_cart", JSON.stringify(cart));
  } catch (err) {}
}

function addToCart(itemId) {
  const item = MENU_ITEMS.find(m => m.id === itemId);
  if (!item) return;

  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      qty: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added "${item.name}" to your order!`);

  // Animate badge
  const badge = document.getElementById("cartCountBadge");
  if (badge) {
    badge.classList.add("bump");
    setTimeout(() => badge.classList.remove("bump"), 300);
  }
}

function updateItemQty(itemId, delta) {
  const index = cart.findIndex(c => c.id === itemId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCartToStorage();
  updateCartUI();
}

function removeCartItem(itemId) {
  cart = cart.filter(c => c.id !== itemId);
  saveCartToStorage();
  updateCartUI();
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = subtotal >= RESTAURANT_CONFIG.freeDeliveryThreshold || subtotal === 0 
    ? 0 
    : RESTAURANT_CONFIG.deliveryFee;
  const grandTotal = subtotal + deliveryFee;

  // Header and mobile counts
  const badge = document.getElementById("cartCountBadge");
  const mobileCount = document.getElementById("mobileBarCartCount");
  if (badge) badge.textContent = totalCount;
  if (mobileCount) mobileCount.textContent = totalCount;

  const emptyState = document.getElementById("cartEmptyState");
  const filledState = document.getElementById("cartFilledState");
  const itemsList = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotal");
  const deliveryFeeEl = document.getElementById("cartDeliveryFee");
  const grandTotalEl = document.getElementById("cartGrandTotal");

  if (totalCount === 0) {
    if (emptyState) emptyState.style.display = "flex";
    if (filledState) filledState.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (filledState) filledState.style.display = "flex";

  if (itemsList) {
    itemsList.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">Rs. ${item.price} x ${item.qty} = Rs. ${item.price * item.qty}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateItemQty(${item.id}, -1)">-</button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" onclick="updateItemQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${item.id})" title="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join("");
  }

  if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal}`;
  if (deliveryFeeEl) {
    deliveryFeeEl.textContent = deliveryFee === 0 ? "FREE" : `Rs. ${deliveryFee}`;
  }
  if (grandTotalEl) grandTotalEl.textContent = `Rs. ${grandTotal}`;
}

// Make functions available on window for onclick attributes
window.updateItemQty = updateItemQty;
window.removeCartItem = removeCartItem;

/* ==========================================================================
   WhatsApp Order Generator
   ========================================================================== */
function handleWhatsAppCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty! Please add some dishes first.");
    return;
  }

  const nameInput = document.getElementById("custName");
  const phoneInput = document.getElementById("custPhone");
  const addrInput = document.getElementById("custAddress");
  const orderType = document.getElementById("orderTypeSelect")?.value || "Home Delivery";
  const notes = document.getElementById("custNotes")?.value || "";

  const name = nameInput?.value.trim();
  const phone = phoneInput?.value.trim();
  const address = addrInput?.value.trim();

  if (!name) {
    alert("Please enter your name for the order.");
    nameInput?.focus();
    return;
  }
  if (!phone) {
    alert("Please enter your mobile or WhatsApp contact number.");
    phoneInput?.focus();
    return;
  }
  if (orderType === "Home Delivery" && !address) {
    alert("Please enter your complete delivery address in Wah Cantt / New City.");
    addrInput?.focus();
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = subtotal >= RESTAURANT_CONFIG.freeDeliveryThreshold ? 0 : RESTAURANT_CONFIG.deliveryFee;
  const grandTotal = subtotal + deliveryFee;

  // Build elegant WhatsApp message format
  let msg = `🍝 *NEW ORDER - PASTA LA VITA (WAH CANTT)*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *Customer:* ${name}\n`;
  msg += `📞 *Phone:* ${phone}\n`;
  msg += `🛵 *Order Type:* ${orderType}\n`;
  if (orderType === "Home Delivery") {
    msg += `📍 *Delivery Address:* ${address}\n`;
  }
  if (notes) {
    msg += `📝 *Special Request:* ${notes}\n`;
  }
  msg += `\n*🍽️ ORDER ITEMS:*\n`;

  cart.forEach((item, index) => {
    msg += `${index + 1}. *${item.name}* x ${item.qty} — Rs. ${item.price * item.qty}\n`;
  });

  msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `*Subtotal:* Rs. ${subtotal}\n`;
  msg += `*Delivery:* ${deliveryFee === 0 ? "FREE" : "Rs. " + deliveryFee}\n`;
  msg += `*GRAND TOTAL:* Rs. ${grandTotal}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `_Thank you! Looking forward to hot & fresh delivery._`;

  const encoded = encodeURIComponent(msg);
  const waUrl = `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encoded}`;

  window.open(waUrl, "_blank");
}

/* ==========================================================================
   Table Reservation Handling
   ========================================================================== */
function setupReservationModal() {
  const openBtn = document.getElementById("openReserveBtn");
  const modalOverlay = document.getElementById("reserveModalOverlay");
  const closeBtn = document.getElementById("closeReserveModalBtn");
  const form = document.getElementById("reservationForm");

  // Clone reservation form into modal if opened
  if (openBtn && modalOverlay) {
    openBtn.addEventListener("click", () => {
      modalOverlay.classList.add("active");
    });
  }

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }

  // Handle Form Submission
  if (form) {
    // Set default date to today
    const dateInput = document.getElementById("resDate");
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.value = today;
      dateInput.min = today;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("resName").value.trim();
      const phone = document.getElementById("resPhone").value.trim();
      const date = document.getElementById("resDate").value;
      const time = document.getElementById("resTime").value;
      const guests = document.getElementById("resGuests").value;
      const area = document.getElementById("resArea").value;
      const notes = document.getElementById("resNotes").value.trim();

      let msg = `📅 *TABLE RESERVATION INQUIRY - PASTA LA VITA*\n`;
      msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
      msg += `👤 *Name:* ${name}\n`;
      msg += `📞 *Phone:* ${phone}\n`;
      msg += `🗓️ *Date:* ${date}\n`;
      msg += `⏰ *Time:* ${time}\n`;
      msg += `👥 *Guests:* ${guests}\n`;
      msg += `🪑 *Seating Preference:* ${area}\n`;
      if (notes) {
        msg += `✨ *Notes:* ${notes}\n`;
      }
      msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
      msg += `_Please confirm table availability. Thank you!_`;

      const encoded = encodeURIComponent(msg);
      const waUrl = `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encoded}`;

      window.open(waUrl, "_blank");
      showToast("Reservation inquiry sent via WhatsApp!");
      if (modalOverlay) modalOverlay.classList.remove("active");
      form.reset();
    });
  }
}

/* ==========================================================================
   UI Event Listeners & Micro-Interactions
   ========================================================================== */
function setupEventListeners() {
  // Category tabs
  const tabContainer = document.getElementById("menuTabs");
  if (tabContainer) {
    tabContainer.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        tabContainer.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.getAttribute("data-category");
        renderMenu();
      });
    });
  }

  // Footer category shortcuts
  document.querySelectorAll("[data-cat]").forEach(link => {
    link.addEventListener("click", (e) => {
      const cat = e.currentTarget.getAttribute("data-cat");
      currentCategory = cat;
      const targetBtn = document.querySelector(`.tab-btn[data-category="${cat}"]`);
      if (targetBtn) {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        targetBtn.classList.add("active");
      }
      renderMenu();
    });
  });

  // Search input
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderMenu();
    });
  }

  // Filter toggles
  document.querySelectorAll(".filter-tag-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const filter = btn.getAttribute("data-filter");
      if (filter === "vegetarian") {
        filterVegOnly = btn.classList.contains("active");
      } else if (filter === "spicy") {
        filterSpicyOnly = btn.classList.contains("active");
      }
      renderMenu();
    });
  });

  // Drawer Toggles
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartToggleBtn = document.getElementById("cartToggleBtn");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const mobileBarCartBtn = document.getElementById("mobileBarCartBtn");
  const cartExploreBtn = document.getElementById("cartExploreBtn");

  const openCart = () => {
    cartDrawer?.classList.add("active");
    cartOverlay?.classList.add("active");
  };

  const closeCart = () => {
    cartDrawer?.classList.remove("active");
    cartOverlay?.classList.remove("active");
  };

  cartToggleBtn?.addEventListener("click", openCart);
  mobileBarCartBtn?.addEventListener("click", openCart);
  cartCloseBtn?.addEventListener("click", closeCart);
  cartOverlay?.addEventListener("click", closeCart);
  cartExploreBtn?.addEventListener("click", () => {
    closeCart();
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  });

  // WhatsApp Checkout Button
  const checkoutBtn = document.getElementById("whatsappCheckoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", handleWhatsAppCheckout);
  }

  // Mobile navigation hamburger toggle
  const mobileToggleBtn = document.getElementById("mobileToggleBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = mobileToggleBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars-staggered");
        icon.classList.toggle("fa-xmark");
      }
    });

    // Close menu when clicking links
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = mobileToggleBtn.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars-staggered");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // Specials section add-to-order buttons
  document.querySelectorAll(".specials-grid .add-to-order-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      addToCart(id);
    });
  });
}

/* ==========================================================================
   Header Scroll Behavior
   ========================================================================== */
function setupStickyHeader() {
  const header = document.getElementById("mainHeader");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* ==========================================================================
   Toast Notification Helper
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const toastMsg = document.getElementById("toastMessage");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 2800);
}
