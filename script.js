
/* =========================================
   TREBSNKRS - MAIN JAVASCRIPT
   Home | Shop | About
========================================= */


/* =========================================
   1. PRODUCT DATA
========================================= */

const products = [
  {
    id: 1,
    name: "Nike Air Max Plus “Shark Attack”",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    price: 11300,
    oldPrice: 12000,
    badge: "FEATURED",
    condition: "Brand New",
    year: "2025",
    description: "Inspired by the iconic Air Max Plus design, this pair combines a distinctive silhouette with a bold look.",
    image: "Nike Air Max Plus “Shark Attack”.png"
  },
  {
    id: 2,
    name: "Puma MB.03 “Toxic”",
    category: "basketball",
    categoryLabel: "Basketball",
    price: 7300,
    oldPrice: 8000,
    badge: "HOT",
    condition: "Brand New",
    year: "2025",
    description: "A bold basketball sneaker designed for explosive movement and on-court performance.",
    image: "Puma MB 0.3 “Toxic”.png"
  },
  {
    id: 3,
    name: "New Balance 2002R",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    price: 7300,
    oldPrice: 7800,
    badge: "POPULAR",
    condition: "Brand New",
    year: "2025",
    description: "A versatile lifestyle sneaker combining classic running-inspired styling with everyday comfort.",
    image: "New Balance 2002R.png"
  },
  {
    id: 4,
    name: "Nike Vomero Plus Men's",
    category: "running",
    categoryLabel: "Running",
    price: 8300,
    oldPrice: 9000,
    badge: "",
    condition: "Brand New",
    year: "2025",
    description: "A running-inspired sneaker made for comfortable everyday movement.",
    image: "Nike Vomero Plus Men’s.png"
  },
  {
    id: 5,
    name: "On Cloudmonster 1",
    category: "running",
    categoryLabel: "Running",
    price: 8300,
    oldPrice: 9000,
    badge: "",
    condition: "Brand New",
    year: "2025",
    description: "A distinctive running shoe with a bold silhouette and cushioned design.",
    image: "On Cloud Monster 1.png"
  },
  {
    id: 6,
    name: "Nike Air Pegasus Wave “Sail Coconut Milk”",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    price: 8300,
    oldPrice: 9000,
    badge: "",
    condition: "Brand New",
    year: "2025",
    description: "A retro-inspired sneaker with layered details and a neutral color combination.",
    image: "Nike Air Pegasus Wave “Sail Coconut Milk”.png"
  },
  {
    id: 7,
    name: "New Balance 1000",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    price: 7300,
    oldPrice: 7800,
    badge: "",
    condition: "Brand New",
    year: "2025",
    description: "A classic-inspired sneaker that brings a retro running look into modern everyday style.",
    image: "New Balance 1000.png"
  },
  {
    id: 8,
    name: "Adidas Yeezy Boost 350 V2",
    category: "limited",
    categoryLabel: "Limited",
    price: 9300,
    oldPrice: 10000,
    badge: "LIMITED",
    condition: "Brand New",
    year: "2025",
    description: "A recognizable Yeezy silhouette featuring a streamlined profile and signature design.",
    image: "Adidas Yeezy Boost 350 V2.png"
  },
  {
    id: 9,
    name: "Nike Air Jordan 1 Mid “Red/Black”",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    price: 6300,
    oldPrice: 7000,
    badge: "POPULAR",
    condition: "Brand New",
    year: "2025",
    description: "A classic Jordan-inspired design featuring a bold red and black color combination.",
    image: "Nike Air Jordan 1 Mid “RedBlack”.png"
  },
  {
    id: 10,
    name: "Nike Kobe 11 Proto “Mamba Day”",
    category: "basketball",
    categoryLabel: "Basketball",
    price: 24300,
    oldPrice: 25000,
    badge: "LIMITED",
    condition: "Brand New",
    year: "2025",
    description: "A special Kobe-inspired basketball sneaker celebrating the legacy of the Mamba mentality.",
    image: "Nike Kobe 11 Protro “Mamba Day”.png"
  },
  {
    id: 11,
    name: "Puma MB.05 “Crowd Surf”",
    category: "basketball",
    categoryLabel: "Basketball",
    price: 8300,
    oldPrice: 9000,
    badge: "NEW",
    condition: "Brand New",
    year: "2025",
    description: "A basketball sneaker with a striking design inspired by LaMelo Ball's expressive style.",
    image: "Puma MB.5 “Crowd Surf”.png"
  },
  {
    id: 12,
    name: "Puma MB.05 “Voltage”",
    category: "basketball",
    categoryLabel: "Basketball",
    price: 8300,
    oldPrice: 9000,
    badge: "NEW",
    condition: "Brand New",
    year: "2025",
    description: "A performance-inspired basketball sneaker with a bold colorway and distinctive details.",
    image: "Puma MB.5 “Voltage”.png"
  },
  {
    id: 13,
    name: "Nike x Travis Scott Air Jordan 1 Low “Shy Pink”",
    category: "limited",
    categoryLabel: "Limited",
    price: 34300,
    oldPrice: 35000,
    badge: "EXCLUSIVE",
    condition: "Brand New",
    year: "2025",
    description: "A collaborative Jordan design inspired by the distinctive style associated with Travis Scott releases.",
    image: "Nike x Travis Scott Air Jordan 1 Low “Shy Pink”.png"
  },
  {
    id: 14,
    name: "Adidas Anthony Edwards 1",
    category: "basketball",
    categoryLabel: "Basketball",
    price: 7300,
    oldPrice: 8000,
    badge: "",
    condition: "Brand New",
    year: "2025",
    description: "A basketball shoe developed around Anthony Edwards' energetic playing style.",
    image: "Anthony Edwards 1.png"
  },
  {
    id: 15,
    name: "Nike x NOCTA Cryoshot Tiempo 94",
    category: "limited",
    categoryLabel: "Limited",
    price: 14300,
    oldPrice: 15000,
    badge: "COLLAB",
    condition: "Brand New",
    year: "2025",
    description: "A collaborative design bringing together Nike and NOCTA-inspired styling.",
    image: "Nike x NOCTA Cryoshot Tiempo 94.png"
  },
  {
    id: 16,
    name: "Nike Mind 001 Flyknit “Bronze Eclipse”",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    price: 11300,
    oldPrice: 12000,
    badge: "NEW",
    condition: "Brand New",
    year: "2025",
    description: "A distinctive Nike design featuring a modern silhouette and a bronze-inspired colorway.",
    image: "Nike Mind 001 Flyknit “Bronze Eclipse”.png"
  },
  {
    id: 17,
    name: "Nike G.T. Cut “Dylan Harper x TITAN”",
    category: "basketball",
    categoryLabel: "Basketball",
    price: 14300,
    oldPrice: 15000,
    badge: "COLLAB",
    condition: "Brand New",
    year: "2025",
    description: "A basketball-focused design connected to the Dylan Harper and TITAN collaboration.",
    image: "Nike G.T. Cut Dylan Harper x TITAN.png"
  },
  {
    id: 18,
    name: "Nike Kobe 5 Proto “Dodgers”",
    category: "basketball",
    categoryLabel: "Basketball",
    price: 14300,
    oldPrice: 15000,
    badge: "POPULAR",
    condition: "Brand New",
    year: "2025",
    description: "A Kobe-inspired basketball sneaker featuring a colorway associated with the Dodgers.",
    image: "Nike Kobe 5 Proto “Dodgers”.png"
  },
  {
    id: 19,
    name: "Nike Kobe 10 Proto “Halo”",
    category: "basketball",
    categoryLabel: "Basketball",
    price: 13300,
    oldPrice: 14000,
    badge: "",
    condition: "Brand New",
    year: "2025",
    description: "A Kobe basketball silhouette with a clean design and performance-inspired details.",
    image: "Nike Kobe 10 Proto “Halo”.png"
  },
  {
    id: 20,
    name: "Nike Air Jordan 1 Low SE “Lunar New Year”",
    category: "limited",
    categoryLabel: "Limited",
    price: 4500,
    oldPrice: 5000,
    badge: "NEW",
    condition: "Brand New",
    year: "2026",
    description: "A special-edition Jordan 1 Low design inspired by Lunar New Year styling.",
    image: "Nike Air Jordan 1 Low SE “Lunar New Year.png"
  }
];


/* =========================================
   2. INITIAL SETTINGS
========================================= */

const sizes = [9, 9.5, 10, 10.5, 11];

products.forEach(product => {
  product.listedDate = "2026-11-25";
  product.topSale = [1, 9, 17, 20].includes(product.id);

  product.stockBySize = {};

  sizes.forEach(size => {
    product.stockBySize[size] = 5;
  });

  product.gallery = [
    product.image,
    `product-views/${product.id}-left.png`,
    `product-views/${product.id}-right.png`,
    `product-views/${product.id}-back.png`
  ];
});


/* =========================================
   3. HELPER FUNCTIONS
========================================= */

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const formatPrice = price =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0
  }).format(price);

const escapeHTML = value =>
  String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);

function getProduct(id) {
  return products.find(product => product.id === Number(id));
}

function getStock(product, size) {
  return product.stockBySize[size] || 0;
}

function getTotalCartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}


/* =========================================
   4. IMAGE FALLBACK
========================================= */

// Prevents broken image links from leaving blank spaces.
// If an image fails, a simple TrebSnkrs placeholder appears.

function createImageFallback(altText = "TrebSnkrs") {
  const safeText = String(altText)
    .replace(/[<>&"']/g, "")
    .slice(0, 35);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="600"
         height="600"
         viewBox="0 0 600 600">

      <rect width="600" height="600" fill="#191919"/>

      <circle
        cx="300"
        cy="250"
        r="105"
        fill="none"
        stroke="#e63946"
        stroke-width="5"
        opacity=".8"
      />

      <path
        d="M205 275 L265 235 L315 255 L375 250 L410 290 L390 315 L215 315 Z"
        fill="none"
        stroke="#e63946"
        stroke-width="8"
        stroke-linejoin="round"
      />

      <text
        x="300"
        y="410"
        text-anchor="middle"
        fill="#f5f5f5"
        font-family="Arial, sans-serif"
        font-size="25"
        font-weight="bold">
        TREBSNKRS
      </text>

      <text
        x="300"
        y="450"
        text-anchor="middle"
        fill="#999999"
        font-family="Arial, sans-serif"
        font-size="16">
        ${safeText}
      </text>

    </svg>
  `;

  return "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(svg);
}

function handleImageError(image) {
  if (!image || image.dataset.fallbackUsed === "true") return;

  image.dataset.fallbackUsed = "true";
  image.src = createImageFallback(image.alt || "Image unavailable");
  image.classList.add("image-fallback");
}


/* =========================================
   5. TOAST NOTIFICATION
========================================= */

let toastTimeout;

function showToast(message) {
  const toast = $("#toast");
  const toastMessage = $("#toastMessage");

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* =========================================
   6. LOCAL STORAGE
========================================= */

function loadStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Could not save data:", error);
  }
}

let cart = loadStorage("trebCart", []);
let wishlist = loadStorage("trebWishlist", []);

if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(wishlist)) wishlist = [];


/* =========================================
   7. PRODUCT CARD TEMPLATE
========================================= */

function productCard(product) {
  const isWishlisted = wishlist.includes(product.id);

  return `
    <article class="product-card" data-id="${product.id}">

      <div class="product-image" data-view-product="${product.id}">

        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          onerror="handleImageError(this)"
        >

        ${
          product.badge
            ? `<span class="product-badge">${escapeHTML(product.badge)}</span>`
            : ""
        }

        <button
          class="wishlist-toggle ${isWishlisted ? "active" : ""}"
          data-wishlist="${product.id}"
          aria-label="Add to wishlist"
          type="button"
        >
          ${isWishlisted ? "♥" : "♡"}
        </button>

      </div>

      <div class="product-info">

        <p class="product-category">
          ${escapeHTML(product.categoryLabel)}
        </p>

        <h3 class="product-name" data-view-product="${product.id}">
          ${escapeHTML(product.name)}
        </h3>

        <p class="product-year">
          Release Year: ${escapeHTML(product.year)}
        </p>

        <div class="product-price">
          <span class="current-price">${formatPrice(product.price)}</span>
          <span class="old-price">${formatPrice(product.oldPrice)}</span>
        </div>

        <div class="product-actions">

          <button
            type="button"
            data-view-product="${product.id}"
          >
            VIEW DETAILS
          </button>

          <button
            type="button"
            class="add-to-cart"
            data-quick-add="${product.id}"
          >
            ADD TO BAG
          </button>

        </div>

      </div>

    </article>
  `;
}


/* =========================================
   8. HOME FEATURED PRODUCTS
========================================= */

function renderFeaturedProducts() {
  const container = $("#featuredProducts");

  if (!container) return;

  const featured = products
    .filter(product => product.topSale)
    .slice(0, 4);

  container.innerHTML = featured.map(productCard).join("");
}


/* =========================================
   9. SHOP FILTERS AND PRODUCT DISPLAY
========================================= */

let activeCategory = "all";
let activeYear = "all";
let activeSearch = "";

function populateYearFilter() {
  const yearFilter = $("#yearFilter");

  if (!yearFilter) return;

  const years = [...new Set(products.map(product => product.year))]
    .sort((a, b) => Number(b) - Number(a));

  yearFilter.innerHTML = `
    <option value="all">All Years</option>
    ${years.map(year => `<option value="${year}">${year}</option>`).join("")}
  `;
}

function getFilteredProducts() {
  let filtered = [...products];

  if (activeCategory !== "all") {
    filtered = filtered.filter(product =>
      product.category === activeCategory
    );
  }

  if (activeYear !== "all") {
    filtered = filtered.filter(product =>
      product.year === activeYear
    );
  }

  if (activeSearch.trim()) {
    const search = activeSearch.toLowerCase();

    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(search) ||
      product.categoryLabel.toLowerCase().includes(search) ||
      product.year.includes(search) ||
      product.description.toLowerCase().includes(search)
    );
  }

  const sortSelect = $("#sortSelect");
  const sortValue = sortSelect ? sortSelect.value : "default";

  if (sortValue === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortValue === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (sortValue === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortValue === "newest") {
    filtered.sort((a, b) => Number(b.year) - Number(a.year));
  }

  return filtered;
}

function renderShopProducts() {
  const grid = $("#productGrid");

  if (!grid) return;

  const filtered = getFilteredProducts();
  const emptyState = $("#emptyState");
  const productCount = $("#productCount");

  grid.innerHTML = filtered.map(productCard).join("");

  if (productCount) {
    productCount.textContent =
      `${filtered.length} sneaker${filtered.length !== 1 ? "s" : ""} found`;
  }

  if (emptyState) {
    emptyState.hidden = filtered.length !== 0;
  }

  grid.hidden = filtered.length === 0;
}

function resetFilters() {
  activeCategory = "all";
  activeYear = "all";
  activeSearch = "";

  const yearFilter = $("#yearFilter");
  const searchInput = $("#searchInput");

  if (yearFilter) yearFilter.value = "all";
  if (searchInput) searchInput.value = "";

  $$(".filter-button").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === "all"
    );
  });

  renderShopProducts();
}


/* =========================================
   10. CATEGORY FILTER EVENTS
========================================= */

const categoryFilters = $("#categoryFilters");

if (categoryFilters) {
  categoryFilters.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");

    if (!button) return;

    activeCategory = button.dataset.category;

    $$(".filter-button").forEach(filterButton => {
      filterButton.classList.remove("active");
    });

    button.classList.add("active");

    renderShopProducts();
  });
}

const yearFilter = $("#yearFilter");

if (yearFilter) {
  yearFilter.addEventListener("change", event => {
    activeYear = event.target.value;
    renderShopProducts();
  });
}

const sortSelect = $("#sortSelect");

if (sortSelect) {
  sortSelect.addEventListener("change", renderShopProducts);
}

const resetFiltersButton = $("#resetFilters");

if (resetFiltersButton) {
  resetFiltersButton.addEventListener("click", resetFilters);
}


/* =========================================
   11. PRODUCT DETAILS MODAL
========================================= */

let currentProduct = null;
let currentGalleryIndex = 0;
let selectedSize = null;

function openProduct(id) {
  const product = getProduct(id);

  if (!product) return;

  currentProduct = product;
  currentGalleryIndex = 0;
  selectedSize = null;

  const modal = $("#productModal");
  const content = $("#productModalContent");

  if (!modal || !content) return;

  const availableSizes = sizes.filter(size =>
    getStock(product, size) > 0
  );

  content.innerHTML = `
    <div class="product-detail">

      <div class="product-detail-gallery">

        <div class="gallery-main">

          <img
            id="galleryMainImage"
            src="${escapeHTML(product.gallery[0])}"
            alt="${escapeHTML(product.name)}"
            onerror="handleImageError(this)"
          >

          <div class="gallery-controls">

            <button
              type="button"
              id="galleryPrevious"
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              type="button"
              id="galleryNext"
              aria-label="Next image"
            >
              ›
            </button>

          </div>

        </div>

        <div class="gallery-thumbnails" id="galleryThumbnails">

          ${product.gallery.map((image, index) => `
            <button
              type="button"
              class="${index === 0 ? "active" : ""}"
              data-gallery-index="${index}"
              aria-label="View image ${index + 1}"
            >
              <img
                src="${escapeHTML(image)}"
                alt="${escapeHTML(product.name)} view ${index + 1}"
                onerror="handleImageError(this)"
              >
            </button>
          `).join("")}

        </div>

      </div>

      <div class="product-detail-info">

        <p class="product-category">
          ${escapeHTML(product.categoryLabel)}
        </p>

        <h2>${escapeHTML(product.name)}</h2>

        <p class="product-year">
          Release Year: ${escapeHTML(product.year)}
        </p>

        <p class="product-year">
          Condition: ${escapeHTML(product.condition)}
        </p>

        <div class="detail-price">
          ${formatPrice(product.price)}
        </div>

        <p class="detail-description">
          ${escapeHTML(product.description)}
        </p>

        <span class="detail-label">SELECT YOUR SIZE</span>

        <div class="size-options" id="sizeOptions">

          ${
            availableSizes.length
              ? availableSizes.map(size => `
                  <button
                    type="button"
                    class="size-option"
                    data-size="${size}"
                  >
                    ${size}
                  </button>
                `).join("")
              : "<p>Currently unavailable</p>"
          }

        </div>

        <p class="detail-stock" id="detailStock">
          Please select a size to view availability.
        </p>

        <div class="detail-actions">

          <button
            type="button"
            class="btn btn-primary"
            id="detailAddToCart"
            ${availableSizes.length ? "" : "disabled"}
          >
            ADD TO BAG
          </button>

          <button
            type="button"
            class="btn btn-outline"
            id="detailWishlist"
          >
            ${wishlist.includes(product.id) ? "♥ SAVED" : "♡ WISHLIST"}
          </button>

        </div>

      </div>

    </div>
  `;

  modal.classList.add("active");
  document.body.classList.add("no-scroll");

  setupGalleryEvents(product);
  setupSizeEvents(product);
  setupDetailButtons(product);
}


/* =========================================
   12. GALLERY NAVIGATION
========================================= */

function updateGallery(product) {
  const mainImage = $("#galleryMainImage");
  const thumbnails = $("#galleryThumbnails");

  if (!mainImage || !thumbnails) return;

  mainImage.dataset.fallbackUsed = "false";
  mainImage.src = product.gallery[currentGalleryIndex];

  thumbnails.querySelectorAll("button").forEach((button, index) => {
    button.classList.toggle(
      "active",
      index === currentGalleryIndex
    );
  });
}

function setupGalleryEvents(product) {
  const previous = $("#galleryPrevious");
  const next = $("#galleryNext");
  const thumbnails = $("#galleryThumbnails");

  if (previous) {
    previous.addEventListener("click", () => {
      currentGalleryIndex =
        (currentGalleryIndex - 1 + product.gallery.length) %
        product.gallery.length;

      updateGallery(product);
    });
  }

  if (next) {
    next.addEventListener("click", () => {
      currentGalleryIndex =
        (currentGalleryIndex + 1) % product.gallery.length;

      updateGallery(product);
    });
  }

  if (thumbnails) {
    thumbnails.addEventListener("click", event => {
      const button = event.target.closest("[data-gallery-index]");

      if (!button) return;

      currentGalleryIndex = Number(button.dataset.galleryIndex);
      updateGallery(product);
    });
  }
}


/* =========================================
   13. SIZE SELECTION
========================================= */

function setupSizeEvents(product) {
  const sizeOptions = $("#sizeOptions");
  const detailStock = $("#detailStock");

  if (!sizeOptions) return;

  sizeOptions.addEventListener("click", event => {
    const button = event.target.closest("[data-size]");

    if (!button) return;

    selectedSize = Number(button.dataset.size);

    sizeOptions.querySelectorAll(".size-option").forEach(option => {
      option.classList.remove("active");
    });

    button.classList.add("active");

    const stock = getStock(product, selectedSize);

    if (detailStock) {
      detailStock.textContent =
        `${stock} available for size ${selectedSize}`;
    }
  });
}


/* =========================================
   14. PRODUCT DETAIL BUTTONS
========================================= */

function setupDetailButtons(product) {
  const addButton = $("#detailAddToCart");
  const wishlistButton = $("#detailWishlist");

  if (addButton) {
    addButton.addEventListener("click", () => {
      if (selectedSize === null) {
        showToast("Please select a size first.");
        return;
      }

      addToCart(product.id, selectedSize, 1);
    });
  }

  if (wishlistButton) {
    wishlistButton.addEventListener("click", () => {
      toggleWishlist(product.id);

      wishlistButton.textContent = wishlist.includes(product.id)
        ? "♥ SAVED"
        : "♡ WISHLIST";
    });
  }
}

function closeProductModal() {
  const modal = $("#productModal");

  if (modal) modal.classList.remove("active");

  document.body.classList.remove("no-scroll");
}

const closeProductModalButton = $("#closeProductModal");

if (closeProductModalButton) {
  closeProductModalButton.addEventListener("click", closeProductModal);
}

const productModal = $("#productModal");

if (productModal) {
  productModal.addEventListener("click", event => {
    if (event.target === productModal) {
      closeProductModal();
    }
  });
}


/* =========================================
   15. WISHLIST
========================================= */

function toggleWishlist(id) {
  id = Number(id);

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    showToast("Removed from wishlist.");
  } else {
    wishlist.push(id);
    showToast("Added to wishlist.");
  }

  saveStorage("trebWishlist", wishlist);

  renderWishlist();
  updateHeaderCounts();
  renderShopProducts();
  renderFeaturedProducts();
}

function renderWishlist() {
  const container = $("#wishlistItems");

  if (!container) return;

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-drawer">
        Your wishlist is empty.
      </div>
    `;
    return;
  }

  container.innerHTML = wishlist.map(id => {
    const product = getProduct(id);

    if (!product) return "";

    return `
      <div class="wishlist-item">

        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          onerror="handleImageError(this)"
        >

        <div>

          <h3>${escapeHTML(product.name)}</h3>

          <p>${formatPrice(product.price)}</p>

          <button type="button" data-view-product="${product.id}">
            VIEW DETAILS
          </button>

        </div>

        <button
          type="button"
          data-remove-wishlist="${product.id}"
          aria-label="Remove from wishlist"
        >
          ×
        </button>

      </div>
    `;
  }).join("");
}


/* =========================================
   16. CART
========================================= */

function addToCart(id, size, quantity = 1) {
  const product = getProduct(id);

  if (!product) return;

  size = Number(size);
  quantity = Number(quantity);

  if (!sizes.includes(size)) {
    showToast("Please select a valid size.");
    return;
  }

  const stock = getStock(product, size);

  const existingItem = cart.find(item =>
    item.id === product.id && item.size === size
  );

  const currentQuantity = existingItem
    ? existingItem.quantity
    : 0;

  if (currentQuantity + quantity > stock) {
    showToast(`Only ${stock} available for size ${size}.`);
    return;
  }

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      size: size,
      quantity: quantity
    });
  }

  saveStorage("trebCart", cart);

  renderCart();
  updateHeaderCounts();

  showToast("Added to cart successfully.");
}

function changeCartQuantity(id, size, change) {
  const item = cart.find(cartItem =>
    cartItem.id === Number(id) &&
    cartItem.size === Number(size)
  );

  if (!item) return;

  const product = getProduct(item.id);

  if (!product) return;

  const newQuantity = item.quantity + change;
  const stock = getStock(product, item.size);

  if (newQuantity <= 0) {
    removeCartItem(id, size);
    return;
  }

  if (newQuantity > stock) {
    showToast(`Only ${stock} available for this size.`);
    return;
  }

  item.quantity = newQuantity;

  saveStorage("trebCart", cart);

  renderCart();
  updateHeaderCounts();
}

function removeCartItem(id, size) {
  cart = cart.filter(item =>
    !(item.id === Number(id) && item.size === Number(size))
  );

  saveStorage("trebCart", cart);

  renderCart();
  updateHeaderCounts();

  showToast("Item removed from cart.");
}

function renderCart() {
  const container = $("#cartItems");
  const totalElement = $("#cartTotal");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-drawer">
        Your cart is empty.
      </div>
    `;

    if (totalElement) {
      totalElement.textContent = formatPrice(0);
    }

    return;
  }

  container.innerHTML = cart.map(item => {
    const product = getProduct(item.id);

    if (!product) return "";

    return `
      <div class="cart-item">

        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          onerror="handleImageError(this)"
        >

        <div>

          <h3>${escapeHTML(product.name)}</h3>

          <p>Size: ${item.size}</p>

          <p>${formatPrice(product.price)}</p>

          <div class="cart-item-controls">

            <button
              type="button"
              data-cart-change="-1"
              data-id="${product.id}"
              data-size="${item.size}"
            >
              −
            </button>

            <span>${item.quantity}</span>

            <button
              type="button"
              data-cart-change="1"
              data-id="${product.id}"
              data-size="${item.size}"
            >
              +
            </button>

          </div>

        </div>

        <button
          type="button"
          data-remove-cart="${product.id}"
          data-size="${item.size}"
          aria-label="Remove item"
        >
          ×
        </button>

      </div>
    `;
  }).join("");

  if (totalElement) {
    totalElement.textContent = formatPrice(getCartTotal());
  }
}

/* =========================================
   17. HEADER COUNTS
========================================= */

function updateHeaderCounts() {
  const cartCount = getTotalCartQuantity();
  const wishlistCount = wishlist.length;

  const cartBadge = $("#cartCount");
  const wishlistBadge = $("#wishlistCount");

  if (cartBadge) {
    cartBadge.textContent = cartCount > 0 ? cartCount : "";
    cartBadge.style.display = cartCount > 0 ? "" : "none";
  }

  if (wishlistBadge) {
    wishlistBadge.textContent = wishlistCount > 0 ? wishlistCount : "";
    wishlistBadge.style.display = wishlistCount > 0 ? "" : "none";
  }
}

/* =========================================
   18. DRAWER CONTROLS
========================================= */

function openDrawer(drawerId) {
  const drawer = document.getElementById(drawerId);
  const overlay = $("#drawerOverlay");

  if (!drawer || !overlay) return;

  drawer.classList.add("active");
  overlay.classList.add("active");

  document.body.classList.add("no-scroll");
}

function closeDrawers() {
  $$(".side-drawer").forEach(drawer => {
    drawer.classList.remove("active");
  });

  const overlay = $("#drawerOverlay");

  if (overlay) overlay.classList.remove("active");

  document.body.classList.remove("no-scroll");
}

const cartButton = $("#cartButton");

if (cartButton) {
  cartButton.addEventListener("click", () => {
    renderCart();
    openDrawer("cartDrawer");
  });
}

const wishlistButton = $("#wishlistButton");

if (wishlistButton) {
  wishlistButton.addEventListener("click", () => {
    renderWishlist();
    openDrawer("wishlistDrawer");
  });
}

const closeCartButton = $("#closeCart");

if (closeCartButton) {
  closeCartButton.addEventListener("click", closeDrawers);
}

const closeWishlistButton = $("#closeWishlist");

if (closeWishlistButton) {
  closeWishlistButton.addEventListener("click", closeDrawers);
}

const drawerOverlay = $("#drawerOverlay");

if (drawerOverlay) {
  drawerOverlay.addEventListener("click", closeDrawers);
}


/* =========================================
   19. PRODUCT CARD CLICK EVENTS
========================================= */

document.addEventListener("click", event => {

  const viewButton = event.target.closest("[data-view-product]");

  if (viewButton) {
    openProduct(viewButton.dataset.viewProduct);
    return;
  }

  const wishlistToggle = event.target.closest("[data-wishlist]");

  if (wishlistToggle) {
    event.stopPropagation();

    toggleWishlist(wishlistToggle.dataset.wishlist);
    return;
  }

  const quickAddButton = event.target.closest("[data-quick-add]");

  if (quickAddButton) {
    const product = getProduct(quickAddButton.dataset.quickAdd);

    if (!product) return;

    const availableSize = sizes.find(size =>
      getStock(product, size) > 0
    );

    if (availableSize === undefined) {
      showToast("This product is currently unavailable.");
      return;
    }

    addToCart(product.id, availableSize, 1);
    return;
  }

  const cartChangeButton = event.target.closest("[data-cart-change]");

  if (cartChangeButton) {
    changeCartQuantity(
      cartChangeButton.dataset.id,
      cartChangeButton.dataset.size,
      Number(cartChangeButton.dataset.cartChange)
    );
    return;
  }

  const removeCartButton = event.target.closest("[data-remove-cart]");

  if (removeCartButton) {
    removeCartItem(
      removeCartButton.dataset.removeCart,
      removeCartButton.dataset.size
    );
    return;
  }

  const removeWishlistButton = event.target.closest("[data-remove-wishlist]");

  if (removeWishlistButton) {
    toggleWishlist(removeWishlistButton.dataset.removeWishlist);
  }

});


/* =========================================
   20. SEARCH
========================================= */

function openSearch() {
  const overlay = $("#searchOverlay");
  const input = $("#searchInput");

  if (!overlay) return;

  overlay.classList.add("active");
  document.body.classList.add("no-scroll");

  if (input) {
    setTimeout(() => input.focus(), 100);
  }
}

function closeSearch() {
  const overlay = $("#searchOverlay");

  if (overlay) overlay.classList.remove("active");

  document.body.classList.remove("no-scroll");
}

const searchButton = $("#searchButton");

if (searchButton) {
  searchButton.addEventListener("click", openSearch);
}

const closeSearchButton = $("#closeSearch");

if (closeSearchButton) {
  closeSearchButton.addEventListener("click", closeSearch);
}

function performSearch() {
  const input = $("#searchInput");

  if (!input) return;

  const searchTerm = input.value.trim();

  if (!searchTerm) {
    showToast("Enter a sneaker name or category.");
    return;
  }

  closeSearch();

  if ($("#productGrid")) {
    activeSearch = searchTerm;
    renderShopProducts();

    const shopSection = $("#shopSection");

    if (shopSection) {
      shopSection.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.location.href =
      `shop.html?search=${encodeURIComponent(searchTerm)}`;
  }
}

const searchSubmit = $("#searchSubmit");

if (searchSubmit) {
  searchSubmit.addEventListener("click", performSearch);
}

const searchInput = $("#searchInput");

if (searchInput) {
  searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      performSearch();
    }
  });
}


/* =========================================
   21. CHECKOUT
========================================= */

function openCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty.");
    return;
  }

  closeDrawers();

  const modal = $("#checkoutModal");

  if (!modal) return;

  renderCheckoutSummary();

  modal.classList.add("active");
  document.body.classList.add("no-scroll");
}

function closeCheckout() {
  const modal = $("#checkoutModal");

  if (modal) modal.classList.remove("active");

  document.body.classList.remove("no-scroll");
}

function renderCheckoutSummary() {
  const itemsContainer = $("#checkoutItems");
  const totalElement = $("#checkoutTotal");

  if (!itemsContainer || !totalElement) return;

  itemsContainer.innerHTML = cart.map(item => {
    const product = getProduct(item.id);

    if (!product) return "";

    return `
      <div class="checkout-summary-item">
        <p>
          ${escapeHTML(product.name)}
          <span>Size ${item.size} × ${item.quantity}</span>
        </p>

        <strong>${formatPrice(product.price * item.quantity)}</strong>
      </div>
    `;
  }).join("");

  totalElement.textContent = formatPrice(getCartTotal());
}

const checkoutButton = $("#checkoutButton");

if (checkoutButton) {
  checkoutButton.addEventListener("click", openCheckout);
}

const closeCheckoutButton = $("#closeCheckout");

if (closeCheckoutButton) {
  closeCheckoutButton.addEventListener("click", closeCheckout);
}

const checkoutModal = $("#checkoutModal");

if (checkoutModal) {
  checkoutModal.addEventListener("click", event => {
    if (event.target === checkoutModal) {
      closeCheckout();
    }
  });
}


/* =========================================
   22. CHECKOUT ORDER REQUEST
========================================= */

function createOrderSummary(customer) {
  const orderLines = cart.map(item => {
    const product = getProduct(item.id);

    if (!product) return "";

    return (
      `${product.name}\n` +
      `Size: ${item.size}\n` +
      `Quantity: ${item.quantity}\n` +
      `Price: ${formatPrice(product.price * item.quantity)}`
    );
  }).filter(Boolean);

  return `
TREBSNKRS - ORDER REQUEST
=========================

CUSTOMER INFORMATION

Name: ${customer.name}
Email: ${customer.email}
Phone: ${customer.phone}
Address: ${customer.address}

Preferred Payment: ${customer.payment}
Additional Notes: ${customer.notes || "None"}

ORDER DETAILS

${orderLines.join("\n\n")}

=========================
TOTAL: ${formatPrice(getCartTotal())}

Please confirm product availability, payment, and delivery details.

Thank you for choosing TrebSnkrs!
  `.trim();
}

function showOrderResult(orderText) {
  const form = $("#checkoutForm");

  if (!form) return;

  let result = $("#orderResult");

  if (!result) {
    result = document.createElement("div");
    result.id = "orderResult";
    result.className = "order-result";
    form.appendChild(result);
  }

  result.innerHTML = `
    <div class="checkout-summary">

      <h3>ORDER REQUEST PREPARED</h3>

      <p>
        Your order summary is ready. Copy the details and send them
        to the seller through Facebook for confirmation.
      </p>

      <textarea
        id="generatedOrderText"
        rows="12"
        readonly
      ></textarea>

      <button
        type="button"
        class="btn btn-primary full-width"
        id="copyOrderButton"
      >
        COPY ORDER SUMMARY
      </button>

      <a
        href="https://www.facebook.com/gff.frs"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-outline full-width"
        style="margin-top: 10px;"
      >
        CONTACT SELLER ON FACEBOOK
      </a>

      <button
        type="button"
        class="btn btn-outline full-width"
        id="finishOrderButton"
        style="margin-top: 10px;"
      >
        FINISH
      </button>

    </div>
  `;

  const textArea = $("#generatedOrderText");

  if (textArea) {
    textArea.value = orderText;
  }

  const copyButton = $("#copyOrderButton");

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(orderText);
        showToast("Order summary copied.");
      } catch (error) {
        if (textArea) {
          textArea.select();
          document.execCommand("copy");
          showToast("Order summary copied.");
        }
      }
    });
  }

  const finishButton = $("#finishOrderButton");

  if (finishButton) {
    finishButton.addEventListener("click", () => {
      cart = [];

      saveStorage("trebCart", cart);

      renderCart();
      updateHeaderCounts();

      const checkoutForm = $("#checkoutForm");

      if (checkoutForm) {
        checkoutForm.reset();
      }

      closeCheckout();

      showToast("Checkout request completed.");
    });
  }

  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

const checkoutForm = $("#checkoutForm");

if (checkoutForm) {
  checkoutForm.addEventListener("submit", event => {
    event.preventDefault();

    if (cart.length === 0) {
      showToast("Your cart is empty.");
      return;
    }

    const customer = {
      name: $("#customerName")?.value.trim() || "",
      email: $("#customerEmail")?.value.trim() || "",
      phone: $("#customerPhone")?.value.trim() || "",
      address: $("#customerAddress")?.value.trim() || "",
      payment: $("#paymentMethod")?.value || "",
      notes: $("#orderNotes")?.value.trim() || ""
    };

    if (
      !customer.name ||
      !customer.email ||
      !customer.phone ||
      !customer.address ||
      !customer.payment
    ) {
      showToast("Please complete all required fields.");
      return;
    }

    const orderText = createOrderSummary(customer);

    showOrderResult(orderText);
  });
}


/* =========================================
   23. MOBILE MENU
========================================= */

const menuButton = $("#menuButton");
const navMenu = $("#navMenu");

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}


/* =========================================
   24. KEYBOARD SHORTCUTS
========================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeSearch();
    closeDrawers();
    closeProductModal();
    closeCheckout();

    if (navMenu) {
      navMenu.classList.remove("active");
    }
  }

});


/* =========================================
   25. INITIAL PAGE SETUP
========================================= */

function initializeWebsite() {
  populateYearFilter();

  renderFeaturedProducts();
  renderShopProducts();

  renderCart();
  renderWishlist();

  updateHeaderCounts();

  const params = new URLSearchParams(window.location.search);
  const searchFromUrl = params.get("search");

  if (searchFromUrl) {
    activeSearch = searchFromUrl;

    if ($("#searchInput")) {
      $("#searchInput").value = searchFromUrl;
    }

    renderShopProducts();
  }

  const productFromUrl = params.get("product");

  if (productFromUrl) {
    openProduct(productFromUrl);
  }
}

initializeWebsite();
