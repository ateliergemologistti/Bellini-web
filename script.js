// Product Data - Sincronizado con Google Sheets (Hoja: Inventario)
const initialProducts = [
  {
    id: 1,
    ID_Producto: 'PRD0001',
    SKU: 'AC-01',
    Nombre_Producto: 'Solitario Brillante',
    Stock: 5,
    PV: 4500,
    Categoria: 'AC',
    Detalle: 'Anillo solitario con diamante central de talla brillante, engaste de cuatro garras en oro blanco 18K.',
    Metal: 'Oro Blanco 18K',
    Quilates: '0.50 ct',
    Descuentos: null,
    // Alias de conveniencia
    name: 'Solitario Brillante',
    sku: 'AC-01',
    price: 4500,
    category: 'compromiso',
    metal: 'Oro Blanco 18K',
    carat: '0.50 ct',
    description: 'Anillo solitario con diamante central de talla brillante, engaste de cuatro garras en oro blanco 18K.',
    badge: '',
    image: 'img/PRD0001/1.jpg',
    imageHover: 'img/PRD0001/2.jpg'
  },
  {
    id: 2,
    ID_Producto: 'PRD0002',
    SKU: 'AC-02',
    Nombre_Producto: 'Halo Clásico',
    Stock: 4,
    PV: 6300,
    Categoria: 'AC',
    Detalle: 'Diamante central rodeado de un halo de micro-diamantes que maximiza el brillo.',
    Metal: 'Oro Blanco 18K',
    Quilates: '0.75 ct',
    Descuentos: 0.14,
    name: 'Halo Clásico',
    sku: 'AC-02',
    price: 6300,
    category: 'compromiso',
    metal: 'Oro Blanco 18K',
    carat: '0.75 ct',
    description: 'Diamante central rodeado de un halo de micro-diamantes que maximiza el brillo.',
    badge: '14% OFF',
    image: 'img/PRD0002/1.jpg',
    imageHover: 'img/PRD0002/2.jpg'
  },
  {
    id: 3,
    ID_Producto: 'PRD0003',
    SKU: 'AC-03',
    Nombre_Producto: 'Pavé Elegance',
    Stock: 3,
    PV: 9900,
    Categoria: 'AC',
    Detalle: 'Banda pavé con diamantes incrustados en toda la banda, piedra central de 1 quilate.',
    Metal: 'Oro Rosa 18K',
    Quilates: '1.00 ct',
    Descuentos: null,
    name: 'Pavé Elegance',
    sku: 'AC-03',
    price: 9900,
    category: 'compromiso',
    metal: 'Oro Rosa 18K',
    carat: '1.00 ct',
    description: 'Banda pavé con diamantes incrustados en toda la banda, piedra central de 1 quilate.',
    badge: '',
    image: 'img/PRD0003/1.jpg',
    imageHover: 'img/PRD0003/2.jpg'
  },
  {
    id: 4,
    ID_Producto: 'PRD0004',
    SKU: 'AC-04',
    Nombre_Producto: 'Tres Piedras Royal',
    Stock: 4,
    PV: 12500,
    Categoria: 'AC',
    Detalle: 'Tres diamantes simbolizando pasado, presente y futuro en oro amarillo 18K.',
    Metal: 'Oro Amarillo 18K',
    Quilates: '1.20 ct',
    Descuentos: null,
    name: 'Tres Piedras Royal',
    sku: 'AC-04',
    price: 12500,
    category: 'compromiso',
    metal: 'Oro Amarillo 18K',
    carat: '1.20 ct',
    description: 'Tres diamantes simbolizando pasado, presente y futuro en oro amarillo 18K.',
    badge: '',
    image: 'img/PRD0004/1.jpg',
    imageHover: 'img/PRD0004/2.jpg'
  },
  {
    id: 5,
    ID_Producto: 'PRD0005',
    SKU: 'AC-05',
    Nombre_Producto: 'Princess Cut',
    Stock: 1,
    PV: 7200,
    Categoria: 'AC',
    Detalle: 'Talla princesa con líneas limpias y modernas, engaste catedral en oro blanco.',
    Metal: 'Oro Blanco 18K',
    Quilates: '0.45 ct',
    Descuentos: null,
    name: 'Princess Cut',
    sku: 'AC-05',
    price: 7200,
    category: 'compromiso',
    metal: 'Oro Blanco 18K',
    carat: '0.45 ct',
    description: 'Talla princesa con líneas limpias y modernas, engaste catedral en oro blanco.',
    badge: '',
    image: 'img/PRD0005/1.jpg',
    imageHover: 'img/PRD0005/2.jpg'
  },
  {
    id: 6,
    ID_Producto: 'PRD0006',
    SKU: 'AM-06',
    Nombre_Producto: 'Clásico Liso',
    Stock: 1,
    PV: 2700,
    Categoria: 'AM',
    Detalle: 'Aro de matrimonio clásico liso en oro amarillo 18K, acabado pulido espejo.',
    Metal: 'Oro Amarillo 18K',
    Quilates: '0.45 ct',
    Descuentos: null,
    name: 'Clásico Liso',
    sku: 'AM-06',
    price: 2700,
    category: 'matrimonio',
    metal: 'Oro Amarillo 18K',
    carat: '0.45 ct',
    description: 'Aro de matrimonio clásico liso en oro amarillo 18K, acabado pulido espejo.',
    badge: '',
    image: 'img/PRD0006/1.jpg',
    imageHover: 'img/PRD0006/2.jpg'
  },
  {
    id: 7,
    ID_Producto: 'PRD0007',
    SKU: 'AM-07',
    Nombre_Producto: 'Medio Canal Diamantes',
    Stock: 5,
    PV: 4300,
    Categoria: 'AM',
    Detalle: 'Diamantes engastados en canal en la mitad de la banda, combinando elegancia y confort.',
    Metal: 'Oro Blanco 18K',
    Quilates: '0.45 ct',
    Descuentos: null,
    name: 'Medio Canal Diamantes',
    sku: 'AM-07',
    price: 4300,
    category: 'matrimonio',
    metal: 'Oro Blanco 18K',
    carat: '0.45 ct',
    description: 'Diamantes engastados en canal en la mitad de la banda, combinando elegancia y confort.',
    badge: '',
    image: 'img/PRD0007/1.jpg',
    imageHover: 'img/PRD0007/2.jpg'
  },
  {
    id: 8,
    ID_Producto: 'PRD0008',
    SKU: 'AM-08',
    Nombre_Producto: 'Eternidad Completa',
    Stock: 5,
    PV: 8700,
    Categoria: 'AM',
    Detalle: 'Diamantes rodeando completamente la banda, símbolo de amor eterno.',
    Metal: 'Oro Blanco 18K',
    Quilates: '0.45 ct',
    Descuentos: null,
    name: 'Eternidad Completa',
    sku: 'AM-08',
    price: 8700,
    category: 'matrimonio',
    metal: 'Oro Blanco 18K',
    carat: '0.45 ct',
    description: 'Diamantes rodeando completamente la banda, símbolo de amor eterno.',
    badge: '',
    image: 'img/PRD0008/1.jpg',
    imageHover: 'img/PRD0008/2.jpg'
  },
  {
    id: 9,
    ID_Producto: 'PRD0009',
    SKU: 'AM-09',
    Nombre_Producto: 'Torcido Brillantes',
    Stock: 5,
    PV: 5200,
    Categoria: 'AM',
    Detalle: 'Diseño twist con diamantes que siguen la curvatura de la banda en oro rosa.',
    Metal: 'Oro Rosa 18K',
    Quilates: '0.45 ct',
    Descuentos: null,
    name: 'Torcido Brillantes',
    sku: 'AM-09',
    price: 5200,
    category: 'matrimonio',
    metal: 'Oro Rosa 18K',
    carat: '0.45 ct',
    description: 'Diseño twist con diamantes que siguen la curvatura de la banda en oro rosa.',
    badge: '',
    image: 'img/PRD0009/1.jpg',
    imageHover: 'img/PRD0009/2.jpg'
  },
  {
    id: 10,
    ID_Producto: 'PRD0010',
    SKU: 'AM-10',
    Nombre_Producto: 'Doble Banda Premium',
    Stock: 5,
    PV: 6600,
    Categoria: 'AM',
    Detalle: 'Doble banda entrelazada con diamantes, diseño contemporáneo y sofisticado.',
    Metal: 'Oro Blanco 18K',
    Quilates: '0.45 ct',
    Descuentos: null,
    name: 'Doble Banda Premium',
    sku: 'AM-10',
    price: 6600,
    category: 'matrimonio',
    metal: 'Oro Blanco 18K',
    carat: '0.45 ct',
    description: 'Doble banda entrelazada con diamantes, diseño contemporáneo y sofisticado.',
    badge: '',
    image: 'img/PRD0010/1.jpg',
    imageHover: 'img/PRD0010/2.jpg'
  }
];

// Helper: Only generate badge if product has a discount in DB
function getProductBadge(product) {
  const disc = product.Descuentos !== undefined ? product.Descuentos : product.descuento;
  if (disc === null || disc === '' || disc === undefined || disc === 0 || disc === '0') {
    return '';
  }
  let num = 0;
  if (typeof disc === 'number') {
    num = disc;
  } else if (typeof disc === 'string') {
    num = parseFloat(disc.replace('%', '').trim()) / (disc.includes('%') ? 100 : 1);
  }
  if (!isNaN(num) && num > 0) {
    const pct = Math.round(num <= 1 ? num * 100 : num);
    return `${pct}% OFF`;
  }
  return '';
}

// API Endpoint - Google Apps Script (Atelier&Gemologist E-commerce DB)
const API_URL = 'https://script.google.com/macros/s/AKfycbxXxlINQu2iUSKrFrvF8JuR_FW-VgJKYt8x-DBHX1DWrJO1zakfyf1ciDw6glUu2vM2/exec';

// Load cached products if available, otherwise use initialProducts
let products = (() => {
  try {
    const cached = localStorage.getItem('bellini_products');
    if (cached) {
      const parsed = JSON.parse(cached);
      // Clean up legacy non-discount badges from cache
      return parsed.map(p => ({
        ...p,
        badge: getProductBadge(p)
      }));
    }
  } catch (e) {}
  return initialProducts;
})();

// Global Variables
let cart = (() => {
  try {
    const saved = localStorage.getItem('bellini_cart');
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return [];
})();
let currentFilter = 'todos';
let countersAnimated = false;
let currentSlide = 0;
let slideInterval;

// DOM Elements
const header = document.getElementById('header');
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initNavbar();
  renderProducts();
  initFilters();
  initSearch();
  initCart();
  initTestimonials();
  initMobileMenu();
  initSmoothScroll();
  initHeroSlideshow();
  initAuth();
  fetchLiveProducts();
});

// Fetch live products from Google Sheets
async function fetchLiveProducts() {
  try {
    const response = await fetch(`${API_URL}?action=getProducts`);
    if (!response.ok) return;
    const json = await response.json();
    if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
      products = json.data.map(item => ({
        ...item,
        badge: getProductBadge(item)
      }));
      localStorage.setItem('bellini_products', JSON.stringify(products));
      if (productsGrid) {
        renderProducts(currentFilter);
      }
      // Dispatch custom event for detail page or other listeners
      window.dispatchEvent(new CustomEvent('productsUpdated', { detail: products }));
    }
  } catch (err) {
    console.warn('Conectado a datos locales/cacheados:', err);
  }
}

// 1. Scroll Reveal & Intersection Observer
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Check for counters
        if (entry.target.classList.contains('about-content') && !countersAnimated) {
          animateCounters();
          countersAnimated = true;
        }
      }
    });
  }, { threshold: 0.15 });
  
  revealElements.forEach(el => revealObserver.observe(el));
}

function animateCounters() {
  const counters = document.querySelectorAll('.counter-num');
  const duration = 2000;
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
        if(target > 1000) counter.textContent = target.toLocaleString();
      }
    };
    
    updateCounter();
  });
}

// 2. Navbar Scroll
function initNavbar() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 3. Product Rendering
function renderProducts(filter = 'todos') {
  if (!productsGrid) return;
  productsGrid.style.opacity = '0';
  
  setTimeout(() => {
    productsGrid.innerHTML = '';
    
    const filteredProducts = products.filter(p => {
      if (filter === 'todos') return true;
      if (filter === 'compromiso' || filter === 'AC') return p.category === 'compromiso' || p.Categoria === 'AC';
      if (filter === 'matrimonio' || filter === 'AM') return p.category === 'matrimonio' || p.Categoria === 'AM';
      return p.category === filter || p.Categoria === filter;
    });
    
    filteredProducts.forEach(product => {
      const prodId = product.ID_Producto || product.id;
      const card = document.createElement('div');
      card.className = 'product-card reveal-stagger';
      
      const badgeText = getProductBadge(product);
      const badgeHTML = badgeText ? `<span class="product-badge">${badgeText}</span>` : '';
      const caratVal = product.Quilates || product.carat;
      const metalVal = product.Metal || product.metal || '';
      const metaText = caratVal ? `${caratVal} | ${metalVal}` : metalVal;
      const prodName = product.Nombre_Producto || product.name;
      const prodPrice = (product.PV || product.price || 0).toLocaleString('es-PE');
      const prodImg = product.image || `img/${prodId}/1.jpg`;
      const prodImgHover = product.imageHover || `img/${prodId}/2.jpg`;
      
      card.innerHTML = `
        <a href="product-detail.html?id=${prodId}" class="product-card-link" style="text-decoration: none; color: inherit; display: block;">
          <div class="product-img-wrap">
            ${badgeHTML}
            <img src="${prodImg}" alt="${prodName}" class="product-img product-img-main" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 100 100%22%3E%3Crect width=%22100%22 height=%22100%22 fill=%22%23F5F7FA%22/%3E%3Cpath d=%22M30 35h40l10 15-30 35-30-35z%22 fill=%22%23EAEAEF%22/%3E%3C/svg%3E'">
            <img src="${prodImgHover}" alt="${prodName} en mano" class="product-img product-img-hover" onerror="this.style.display='none'">
          </div>
          <div class="product-info" style="padding-bottom: 0.5rem;">
            <h3 class="product-name">${prodName}</h3>
            <p class="product-meta">${metaText}</p>
            <div class="product-price">S/ ${prodPrice}</div>
          </div>
        </a>
        <div style="padding: 0 1.5rem 1.5rem;">
          <button class="btn-outline add-to-cart-btn" data-id="${product.id || 1}" style="width: 100%;">Agregar al Carrito</button>
        </div>
      `;
      
      productsGrid.appendChild(card);
    });
    
    // Add event listeners to cart buttons
    document.querySelectorAll('#productsGrid .add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = parseInt(e.target.getAttribute('data-id'));
        addToCart(id);
      });
    });
    
    productsGrid.style.opacity = '1';
  }, 300);
}

// 4. Filters
function initFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderProducts(currentFilter);
    });
  });
}

// Global Category Filter from navbar
window.filterCategory = function(cat) {
  currentFilter = cat;
  filterBtns.forEach(btn => {
    if(btn.getAttribute('data-filter') === cat) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderProducts(cat);
};

// 5. Search
function initSearch() {
  const searchBtn = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  if (!searchBtn || !searchOverlay) return;

  const openSearch = () => {
    searchOverlay.classList.add('active');
    searchInput.focus();
  };
  
  const closeSearch = () => {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
  };
  
  searchBtn.addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      closeSearch();
    }
  });
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }
    
    const matches = products.filter(p => 
      (p.Nombre_Producto || p.name).toLowerCase().includes(query) ||
      (p.Detalle || p.description || '').toLowerCase().includes(query) ||
      (p.Metal || p.metal || '').toLowerCase().includes(query) ||
      (p.SKU || p.sku || '').toLowerCase().includes(query)
    );
    
    searchResults.innerHTML = '';
    
    if (matches.length === 0) {
      searchResults.innerHTML = '<p style="color:var(--color-steel); text-align:center;">No se encontraron joyas.</p>';
      return;
    }
    
    matches.forEach(product => {
      const el = document.createElement('div');
      el.className = 'search-result-item';
      el.innerHTML = `
        <img src="${product.image}" class="search-result-img" onerror="this.style.display='none'">
        <div>
          <h4 style="margin:0;font-size:1.1rem;font-family:var(--font-heading)">${product.Nombre_Producto || product.name}</h4>
          <span style="font-size:0.8rem;opacity:0.7">${product.SKU || product.sku} | S/ ${(product.PV || product.price).toLocaleString()}</span>
        </div>
      `;
      
      el.addEventListener('click', () => {
        closeSearch();
        window.location.href = `product-detail.html?id=${product.ID_Producto || product.id}`;
      });
      
      searchResults.appendChild(el);
    });
  });
}

// 6. Cart
function initCart() {
  const cartBtn = document.getElementById('cartBtn');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartClose = document.getElementById('cartClose');
  const cartOverlay = document.getElementById('cartOverlay');
  
  if (cartSidebar) {
    const toggleCart = () => {
      cartSidebar.classList.toggle('open');
      if (cartOverlay) cartOverlay.classList.toggle('open');
    };
    
    if (cartBtn) cartBtn.addEventListener('click', toggleCart);
    if (cartClose) cartClose.addEventListener('click', toggleCart);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);

    // Checkout Button Listener
    const checkoutBtns = document.querySelectorAll('.checkout-btn');
    checkoutBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (cart.length === 0) {
          showToast('Tu carrito está vacío');
          return;
        }
        localStorage.setItem('bellini_cart', JSON.stringify(cart));
        window.location.href = 'checkout.html';
      });
    });
  }

  updateCartUI();
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId || p.ID_Producto === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === product.id || item.ID_Producto === product.ID_Producto);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  localStorage.setItem('bellini_cart', JSON.stringify(cart));
  updateCartUI();
  showToast('Producto agregado al carrito');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId && item.ID_Producto !== productId);
  localStorage.setItem('bellini_cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const cartBadge = document.getElementById('cartBadge');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  if (!cartBadge) return;

  // Update badge
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  cartBadge.textContent = totalItems;
  
  if (!cartItems || !cartTotal) return;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
    cartTotal.textContent = 'S/ 0';
    return;
  }
  
  cartItems.innerHTML = '';
  let total = 0;
  
  cart.forEach(item => {
    const qty = item.quantity || 1;
    const price = item.PV || item.price || 0;
    total += price * qty;
    
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${item.image || `img/${item.ID_Producto}/1.jpg`}" alt="${item.Nombre_Producto || item.name}" class="cart-item-img" onerror="this.style.display='none'">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.Nombre_Producto || item.name}</div>
        <div class="cart-item-meta">Cant: ${qty} | ${item.Metal || item.metal || ''}</div>
        <div class="cart-item-price">S/ ${(price * qty).toLocaleString('es-PE')}</div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id || `'${item.ID_Producto}'`})">Eliminar</button>
      </div>
    `;
    cartItems.appendChild(el);
  });
  
  cartTotal.textContent = `S/ ${total.toLocaleString('es-PE')}`;
}

// Make globally available for inline onclick
window.removeFromCart = removeFromCart;

// 7. Toast Notification
function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, 3000);
}

// 8. Testimonials
function initTestimonials() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  
  if(slides.length === 0) return;
  
  const showSlide = (index) => {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    currentSlide = index;
    if(currentSlide >= slides.length) currentSlide = 0;
    if(currentSlide < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
    if(dots[currentSlide]) dots[currentSlide].classList.add('active');
  };
  
  const nextSlide = () => showSlide(currentSlide + 1);
  const prevSlide = () => showSlide(currentSlide - 1);
  
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });
  
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      resetInterval();
    });
  });
  
  const resetInterval = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  };
  
  // Hover pause
  const carousel = document.getElementById('testimonialCarousel');
  carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
  carousel.addEventListener('mouseleave', resetInterval);
  
  resetInterval();
}

// 9. Mobile Menu
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileClose = document.getElementById('mobileClose');
  const dropdownToggles = document.querySelectorAll('.mobile-nav-link[data-toggle="dropdown"]');
  
  const toggleMenu = () => {
    mobileMenu.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
  };
  
  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileClose.addEventListener('click', toggleMenu);
  mobileOverlay.addEventListener('click', toggleMenu);
  
  // Accordion for dropdowns
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdown = toggle.nextElementSibling;
      
      // Close others
      document.querySelectorAll('.mobile-dropdown').forEach(d => {
        if(d !== dropdown) d.style.display = 'none';
      });
      
      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
      } else {
        dropdown.style.display = 'block';
      }
    });
  });
  
  // Close menu on inner link click
  document.querySelectorAll('.mobile-dropdown a, .mobile-contact a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
}

// 10. Smooth Scroll for hash links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if(targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;
  let current = 0;
  
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 6000);
}

// ──────────────────────────────────────────
// 11. AUTHENTICATION CONTROLLER (Tiffany Style)
// ──────────────────────────────────────────
function initAuth() {
  const profileBtn = document.getElementById('profileBtn');
  const authOverlay = document.getElementById('authOverlay');
  const authDrawer = document.getElementById('authDrawer');
  const authCloseBtn = document.getElementById('authCloseBtn');

  if (!profileBtn || !authDrawer) return;

  // Open Drawer with elegant blink & slide sequence
  const openAuth = () => {
    updateAuthUI();
    authOverlay.classList.add('open');
    setTimeout(() => {
      authDrawer.classList.add('open');
    }, 120);
  };

  // Close Drawer
  const closeAuth = () => {
    authDrawer.classList.remove('open');
    setTimeout(() => {
      authOverlay.classList.remove('open');
      clearAuthErrors();
    }, 250);
  };

  profileBtn.addEventListener('click', openAuth);
  if (authCloseBtn) authCloseBtn.addEventListener('click', closeAuth);
  if (authOverlay) authOverlay.addEventListener('click', closeAuth);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && authDrawer.classList.contains('open')) {
      closeAuth();
    }
  });

  updateAuthUI();
}

// Tab Switcher
window.switchAuthTab = function(tab) {
  const tabSignInBtn = document.getElementById('tabSignInBtn');
  const tabCreateBtn = document.getElementById('tabCreateBtn');
  const viewSignIn = document.getElementById('viewSignIn');
  const viewCreate = document.getElementById('viewCreate');

  clearAuthErrors();

  if (tab === 'signin') {
    tabSignInBtn.classList.add('active');
    tabCreateBtn.classList.remove('active');
    viewSignIn.classList.add('active');
    viewCreate.classList.remove('active');
  } else {
    tabCreateBtn.classList.add('active');
    tabSignInBtn.classList.remove('active');
    viewCreate.classList.add('active');
    viewSignIn.classList.remove('active');
  }
};

// Toggle Password Visibility
window.togglePasswordVisibility = function(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  if (input.type === 'password') {
    input.type = 'text';
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>`;
  } else {
    input.type = 'password';
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;
  }
};

function clearAuthErrors() {
  const signInError = document.getElementById('signInError');
  const createError = document.getElementById('createError');
  if (signInError) {
    signInError.textContent = '';
    signInError.classList.remove('visible');
  }
  if (createError) {
    createError.textContent = '';
    createError.classList.remove('visible');
  }
}

// Handle Sign In Submit
window.handleSignInSubmit = async function(e) {
  e.preventDefault();
  clearAuthErrors();

  const email = document.getElementById('signInEmail').value.trim();
  const password = document.getElementById('signInPassword').value.trim();
  const submitBtn = document.getElementById('btnSignInSubmit');
  const errorEl = document.getElementById('signInError');

  if (!email || !password) {
    errorEl.textContent = 'Por favor ingresa tu correo y contraseña.';
    errorEl.classList.add('visible');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'INICIANDO SESIÓN...';

  try {
    const url = `${API_URL}?action=loginCustomer&correo=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    const res = await fetch(url);
    const json = await res.json();

    if (json.status === 'success' && json.customer) {
      localStorage.setItem('bellini_user', JSON.stringify(json.customer));
      showToast(`¡Bienvenido/a, ${json.customer.Nombre}!`);
      updateAuthUI();
    } else {
      errorEl.textContent = json.message || 'Correo o contraseña incorrectos.';
      errorEl.classList.add('visible');
    }
  } catch (err) {
    console.error('Error in login:', err);
    errorEl.textContent = 'Error al conectar con el servidor. Intenta de nuevo.';
    errorEl.classList.add('visible');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'INICIAR SESIÓN';
  }
};

// Handle Create Account Submit
window.handleCreateAccountSubmit = async function(e) {
  e.preventDefault();
  clearAuthErrors();

  const firstName = document.getElementById('createFirstName').value.trim();
  const lastName = document.getElementById('createLastName').value.trim();
  const email = document.getElementById('createEmail').value.trim().toLowerCase();
  const password = document.getElementById('createPassword').value;
  const confirmPassword = document.getElementById('createConfirmPassword').value;
  const phonePrefix = document.getElementById('createPhonePrefix').value;
  const phone = document.getElementById('createPhone').value.trim();
  const submitBtn = document.getElementById('btnCreateSubmit');
  const errorEl = document.getElementById('createError');

  // Validations
  if (password.length < 6) {
    errorEl.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    errorEl.classList.add('visible');
    return;
  }

  if (password !== confirmPassword) {
    errorEl.textContent = 'Las contraseñas no coinciden.';
    errorEl.classList.add('visible');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'CREANDO CUENTA...';

  try {
    const params = new URLSearchParams({
      action: 'registerCustomer',
      nombre: firstName,
      apellido: lastName,
      correo: email,
      password: password,
      prefix: phonePrefix,
      celular: phone,
      cumpleanos: ''
    });

    const url = `${API_URL}?${params.toString()}`;
    const res = await fetch(url);
    const json = await res.json();

    if (json.status === 'success' && json.customer) {
      localStorage.setItem('bellini_user', JSON.stringify(json.customer));
      showToast(`¡Cuenta creada con éxito!`);
      updateAuthUI();
    } else {
      errorEl.textContent = json.message || 'No se pudo crear la cuenta. Intenta con otro correo.';
      errorEl.classList.add('visible');
    }
  } catch (err) {
    console.error('Error in registration:', err);
    errorEl.textContent = 'Error al registrar la cuenta. Verifica tu conexión.';
    errorEl.classList.add('visible');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'CREAR CUENTA';
  }
};

// Handle Forgot Password
window.handleForgotPassword = function() {
  const email = document.getElementById('signInEmail').value.trim();
  const msg = email 
    ? `Hola BELLINI, deseo restablecer la contraseña de mi cuenta asociada al correo: ${email}`
    : 'Hola BELLINI, deseo restablecer mi contraseña.';
  window.open(`https://wa.me/51997511144?text=${encodeURIComponent(msg)}`, '_blank');
};

// Handle Logout
window.handleLogout = function() {
  localStorage.removeItem('bellini_user');
  showToast('Has cerrado sesión correctamente.');
  updateAuthUI();
};

// Update Auth UI according to Session State
function updateAuthUI() {
  const guestContainer = document.getElementById('authGuestContainer');
  const userContainer = document.getElementById('authUserContainer');
  const profileBtn = document.getElementById('profileBtn');

  if (!guestContainer || !userContainer) return;

  let user = null;
  try {
    const stored = localStorage.getItem('bellini_user');
    if (stored) user = JSON.parse(stored);
  } catch (e) {}

  if (user && user.Nombre) {
    guestContainer.style.display = 'none';
    userContainer.style.display = 'block';

    // Populate user profile info
    const avatarEl = document.getElementById('userAvatarLetter');
    const nameDisplayEl = document.getElementById('userNameDisplay');
    const idDisplayEl = document.getElementById('userIdDisplay');
    const fullNameEl = document.getElementById('userInfoFullName');
    const emailEl = document.getElementById('userInfoEmail');
    const phoneEl = document.getElementById('userInfoPhone');
    const birthdayEl = document.getElementById('userInfoBirthday');

    if (avatarEl) avatarEl.textContent = (user.Nombre[0] || 'U').toUpperCase();
    if (nameDisplayEl) nameDisplayEl.textContent = `${user.Nombre} ${user.Apellido || ''}`;
    if (idDisplayEl) idDisplayEl.textContent = `ID CLIENTE: ${user.ID_Cliente || 'CL00001'}`;
    if (fullNameEl) fullNameEl.textContent = `${user.Nombre} ${user.Apellido || ''}`;
    if (emailEl) emailEl.textContent = user.Correo || '-';
    if (phoneEl) phoneEl.textContent = `${user.Prefix || '+51'} ${user.Celular || '-'}`;
    if (birthdayEl) birthdayEl.textContent = user.Cumpleaños || 'No especificado';

    // Highlight profile button
    if (profileBtn) {
      profileBtn.style.color = 'var(--color-gold)';
      profileBtn.title = `Conectado como ${user.Nombre}`;
    }
  } else {
    guestContainer.style.display = 'block';
    userContainer.style.display = 'none';

    if (profileBtn) {
      profileBtn.style.color = '';
      profileBtn.title = 'Mi Cuenta';
    }
  }
}

