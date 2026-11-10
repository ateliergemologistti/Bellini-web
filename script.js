// Product Data - Sincronizado con Google Sheets (Hoja: Inventario - 7 productos x 3 quilates = 21 filas)
const initialProducts = [
  // PRD0001 - Brillante Solitario Clásico
  {
    id: 1, ID_Producto: 'PRD0001', SKU: 'AC-01-01', Nombre_Producto: 'Brillante Solitario Clásico',
    Stock: 5, Peso: '4 gr', Quilates: '1 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0001',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 4500, Descuentos: 0,
    name: 'Brillante Solitario Clásico', sku: 'AC-01-01', price: 4500, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1 ct', description: 'Texto descripción PRD0001',
    badge: '', image: 'img/PRD0001/1.jpg', imageHover: 'img/PRD0001/2.jpg'
  },
  {
    id: 2, ID_Producto: 'PRD0001', SKU: 'AC-01-02', Nombre_Producto: 'Brillante Solitario Clásico',
    Stock: 5, Peso: '4 gr', Quilates: '1,5 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0001',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 5200, Descuentos: 0,
    name: 'Brillante Solitario Clásico', sku: 'AC-01-02', price: 5200, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1,5 ct', description: 'Texto descripción PRD0001',
    badge: '', image: 'img/PRD0001/1.jpg', imageHover: 'img/PRD0001/2.jpg'
  },
  {
    id: 3, ID_Producto: 'PRD0001', SKU: 'AC-01-03', Nombre_Producto: 'Brillante Solitario Clásico',
    Stock: 5, Peso: '4 gr', Quilates: '2 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0001',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 5600, Descuentos: 0,
    name: 'Brillante Solitario Clásico', sku: 'AC-01-03', price: 5600, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '2 ct', description: 'Texto descripción PRD0001',
    badge: '', image: 'img/PRD0001/1.jpg', imageHover: 'img/PRD0001/2.jpg'
  },

  // PRD0002 - Brillante Solitario Sweet
  {
    id: 4, ID_Producto: 'PRD0002', SKU: 'AC-02-01', Nombre_Producto: 'Brillante Solitario Sweet',
    Stock: 5, Peso: '3 gr', Quilates: '1 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0002',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 3600, Descuentos: 0,
    name: 'Brillante Solitario Sweet', sku: 'AC-02-01', price: 3600, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1 ct', description: 'Texto descripción PRD0002',
    badge: '', image: 'img/PRD0002/1.jpg', imageHover: 'img/PRD0002/2.jpg'
  },
  {
    id: 5, ID_Producto: 'PRD0002', SKU: 'AC-02-02', Nombre_Producto: 'Brillante Solitario Sweet',
    Stock: 5, Peso: '3 gr', Quilates: '1,5 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0002',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 4200, Descuentos: 0,
    name: 'Brillante Solitario Sweet', sku: 'AC-02-02', price: 4200, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1,5 ct', description: 'Texto descripción PRD0002',
    badge: '', image: 'img/PRD0002/1.jpg', imageHover: 'img/PRD0002/2.jpg'
  },
  {
    id: 6, ID_Producto: 'PRD0002', SKU: 'AC-02-03', Nombre_Producto: 'Brillante Solitario Sweet',
    Stock: 5, Peso: '3 gr', Quilates: '2 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0002',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 4700, Descuentos: 0,
    name: 'Brillante Solitario Sweet', sku: 'AC-02-03', price: 4700, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '2 ct', description: 'Texto descripción PRD0002',
    badge: '', image: 'img/PRD0002/1.jpg', imageHover: 'img/PRD0002/2.jpg'
  },

  // PRD0003 - Brillante Halo
  {
    id: 7, ID_Producto: 'PRD0003', SKU: 'AC-03-01', Nombre_Producto: 'Brillante Halo',
    Stock: 5, Peso: '4 gr', Quilates: '1 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0003',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 6100, Descuentos: 0,
    name: 'Brillante Halo', sku: 'AC-03-01', price: 6100, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1 ct', description: 'Texto descripción PRD0003',
    badge: '', image: 'img/PRD0003/1.jpg', imageHover: 'img/PRD0003/2.jpg'
  },
  {
    id: 8, ID_Producto: 'PRD0003', SKU: 'AC-03-02', Nombre_Producto: 'Brillante Halo',
    Stock: 5, Peso: '4 gr', Quilates: '1,5 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0003',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 6700, Descuentos: 0,
    name: 'Brillante Halo', sku: 'AC-03-02', price: 6700, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1,5 ct', description: 'Texto descripción PRD0003',
    badge: '', image: 'img/PRD0003/1.jpg', imageHover: 'img/PRD0003/2.jpg'
  },
  {
    id: 9, ID_Producto: 'PRD0003', SKU: 'AC-03-03', Nombre_Producto: 'Brillante Halo',
    Stock: 5, Peso: '4 gr', Quilates: '2 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0003',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 7150, Descuentos: 0,
    name: 'Brillante Halo', sku: 'AC-03-03', price: 7150, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '2 ct', description: 'Texto descripción PRD0003',
    badge: '', image: 'img/PRD0003/1.jpg', imageHover: 'img/PRD0003/2.jpg'
  },

  // PRD0004 - Oval Glamuroso
  {
    id: 10, ID_Producto: 'PRD0004', SKU: 'AC-04-01', Nombre_Producto: 'Oval Glamuroso',
    Stock: 5, Peso: '', Quilates: '1 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0004',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 5900, Descuentos: 0,
    name: 'Oval Glamuroso', sku: 'AC-04-01', price: 5900, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1 ct', description: 'Texto descripción PRD0004',
    badge: '', image: 'img/PRD0004/1.jpg', imageHover: 'img/PRD0004/2.jpg'
  },
  {
    id: 11, ID_Producto: 'PRD0004', SKU: 'AC-04-02', Nombre_Producto: 'Oval Glamuroso',
    Stock: 5, Peso: '', Quilates: '1,5 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0004',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 6550, Descuentos: 0,
    name: 'Oval Glamuroso', sku: 'AC-04-02', price: 6550, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1,5 ct', description: 'Texto descripción PRD0004',
    badge: '', image: 'img/PRD0004/1.jpg', imageHover: 'img/PRD0004/2.jpg'
  },
  {
    id: 12, ID_Producto: 'PRD0004', SKU: 'AC-04-03', Nombre_Producto: 'Oval Glamuroso',
    Stock: 5, Peso: '', Quilates: '2 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0004',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 6950, Descuentos: 0,
    name: 'Oval Glamuroso', sku: 'AC-04-03', price: 6950, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '2 ct', description: 'Texto descripción PRD0004',
    badge: '', image: 'img/PRD0004/1.jpg', imageHover: 'img/PRD0004/2.jpg'
  },

  // PRD0005 - Esmeralda Elegante
  {
    id: 13, ID_Producto: 'PRD0005', SKU: 'AC-05-01', Nombre_Producto: 'Esmeralda Elegante',
    Stock: 5, Peso: '', Quilates: '1 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0005',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 4500, Descuentos: 0,
    name: 'Esmeralda Elegante', sku: 'AC-05-01', price: 4500, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1 ct', description: 'Texto descripción PRD0005',
    badge: '', image: 'img/PRD0005/1.jpg', imageHover: 'img/PRD0005/2.jpg'
  },
  {
    id: 14, ID_Producto: 'PRD0005', SKU: 'AC-05-02', Nombre_Producto: 'Esmeralda Elegante',
    Stock: 5, Peso: '', Quilates: '1,5 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0005',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 5200, Descuentos: 0,
    name: 'Esmeralda Elegante', sku: 'AC-05-02', price: 5200, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1,5 ct', description: 'Texto descripción PRD0005',
    badge: '', image: 'img/PRD0005/1.jpg', imageHover: 'img/PRD0005/2.jpg'
  },
  {
    id: 15, ID_Producto: 'PRD0005', SKU: 'AC-05-03', Nombre_Producto: 'Esmeralda Elegante',
    Stock: 5, Peso: '', Quilates: '2 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0005',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 5600, Descuentos: 0,
    name: 'Esmeralda Elegante', sku: 'AC-05-03', price: 5600, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '2 ct', description: 'Texto descripción PRD0005',
    badge: '', image: 'img/PRD0005/1.jpg', imageHover: 'img/PRD0005/2.jpg'
  },

  // PRD0006 - Esmeralda Hidden Halo
  {
    id: 16, ID_Producto: 'PRD0006', SKU: 'AC-06-01', Nombre_Producto: 'Esmeralda Hidden Halo',
    Stock: 5, Peso: '3,5 gr', Quilates: '1 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0006',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 5550, Descuentos: 0,
    name: 'Esmeralda Hidden Halo', sku: 'AC-06-01', price: 5550, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1 ct', description: 'Texto descripción PRD0006',
    badge: '', image: 'img/PRD0006/1.jpg', imageHover: 'img/PRD0006/2.jpg'
  },
  {
    id: 17, ID_Producto: 'PRD0006', SKU: 'AC-06-02', Nombre_Producto: 'Esmeralda Hidden Halo',
    Stock: 5, Peso: '3,5 gr', Quilates: '1,5 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0006',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 6200, Descuentos: 0,
    name: 'Esmeralda Hidden Halo', sku: 'AC-06-02', price: 6200, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1,5 ct', description: 'Texto descripción PRD0006',
    badge: '', image: 'img/PRD0006/1.jpg', imageHover: 'img/PRD0006/2.jpg'
  },
  {
    id: 18, ID_Producto: 'PRD0006', SKU: 'AC-06-03', Nombre_Producto: 'Esmeralda Hidden Halo',
    Stock: 5, Peso: '3,5 gr', Quilates: '2 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0006',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 6700, Descuentos: 0,
    name: 'Esmeralda Hidden Halo', sku: 'AC-06-03', price: 6700, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '2 ct', description: 'Texto descripción PRD0006',
    badge: '', image: 'img/PRD0006/1.jpg', imageHover: 'img/PRD0006/2.jpg'
  },

  // PRD0007 - Pera Glamuroso
  {
    id: 19, ID_Producto: 'PRD0007', SKU: 'AC-07-01', Nombre_Producto: 'Pera Glamuroso',
    Stock: 5, Peso: '', Quilates: '1 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0007',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 5900, Descuentos: 0,
    name: 'Pera Glamuroso', sku: 'AC-07-01', price: 5900, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1 ct', description: 'Texto descripción PRD0007',
    badge: '', image: 'img/PRD0007/1.jpg', imageHover: 'img/PRD0007/2.jpg'
  },
  {
    id: 20, ID_Producto: 'PRD0007', SKU: 'AC-07-02', Nombre_Producto: 'Pera Glamuroso',
    Stock: 5, Peso: '', Quilates: '1,5 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0007',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 6550, Descuentos: 0,
    name: 'Pera Glamuroso', sku: 'AC-07-02', price: 6550, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '1,5 ct', description: 'Texto descripción PRD0007',
    badge: '', image: 'img/PRD0007/1.jpg', imageHover: 'img/PRD0007/2.jpg'
  },
  {
    id: 21, ID_Producto: 'PRD0007', SKU: 'AC-07-03', Nombre_Producto: 'Pera Glamuroso',
    Stock: 5, Peso: '', Quilates: '2 ct', Categoria: 'AC', Detalle: 'Texto descripción PRD0007',
    Metal: 'Oro Blanco / Oro Amarillo', PV: 6950, Descuentos: 0,
    name: 'Pera Glamuroso', sku: 'AC-07-03', price: 6950, category: 'compromiso',
    metal: 'Oro Blanco / Oro Amarillo', carat: '2 ct', description: 'Texto descripción PRD0007',
    badge: '', image: 'img/PRD0007/1.jpg', imageHover: 'img/PRD0007/2.jpg'
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

// Helpers for Multi-Variant (Metal + Carat) Products
function formatCaratLabel(rawCarat) {
  if (!rawCarat) return '';
  return String(rawCarat).trim().replace(',', '.');
}

function parseMetalOptions(rawMetal) {
  if (!rawMetal) return ['Oro Amarillo', 'Oro Blanco'];
  const parts = String(rawMetal)
    .split('/')
    .map(m => m.trim())
    .filter(Boolean);
  if (parts.length === 0) return ['Oro Amarillo', 'Oro Blanco'];
  // Ordenar para que Oro Amarillo aparezca primero como opción por defecto
  return parts.sort((a, b) => {
    const rank = (s) => (/amarillo/i.test(s) ? 0 : /blanco/i.test(s) ? 1 : 2);
    return rank(a) - rank(b);
  });
}

function getDefaultMetal(rawMetal) {
  const opts = parseMetalOptions(rawMetal);
  return opts.find(m => /amarillo/i.test(m)) || opts[0] || 'Oro Amarillo';
}

function getMetalDotClass(metalName) {
  if (/blanco/i.test(metalName)) return 'metal-dot-white';
  if (/rosa/i.test(metalName)) return 'metal-dot-rose';
  return 'metal-dot-yellow';
}

// Returns 1 representative row per unique ID_Producto (always preferring SKU ending in '01')
function getDisplayProducts(sourceList = products) {
  const groups = new Map();
  sourceList.forEach(item => {
    const key = item.ID_Producto || String(item.id);
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(item);
  });

  const displayList = [];
  groups.forEach(variants => {
    const baseVariant = variants.find(v => String(v.SKU || v.sku || '').trim().endsWith('01')) || variants[0];
    if (baseVariant) displayList.push(baseVariant);
  });
  return displayList;
}

// Returns all carat/SKU variants for a given ID_Producto, sorted ascending (-01, -02, -03)
function getProductVariants(prodId, sourceList = products) {
  const list = sourceList.filter(p => p.ID_Producto === prodId || String(p.id) === String(prodId));
  return list.slice().sort((a, b) => {
    const skuA = String(a.SKU || a.sku || '');
    const skuB = String(b.SKU || b.sku || '');
    return skuA.localeCompare(skuB, undefined, { numeric: true });
  });
}

window.getProductBadge = getProductBadge;
window.formatCaratLabel = formatCaratLabel;
window.parseMetalOptions = parseMetalOptions;
window.getDefaultMetal = getDefaultMetal;
window.getMetalDotClass = getMetalDotClass;
window.getDisplayProducts = getDisplayProducts;
window.getProductVariants = getProductVariants;

// API Endpoint - Google Apps Script (Atelier&Gemologist E-commerce DB)
const API_URL = 'https://script.google.com/macros/s/AKfycbxXxlINQu2iUSKrFrvF8JuR_FW-VgJKYt8x-DBHX1DWrJO1zakfyf1ciDw6glUu2vM2/exec';
const PRODUCTS_CACHE_KEY = 'bellini_products_v2';

// Load cached products if available, otherwise use initialProducts
let products = (() => {
  try {
    localStorage.removeItem('bellini_products'); // Limpiar caché antiguo de 10 productos
    const cached = localStorage.getItem(PRODUCTS_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map(p => ({
          ...p,
          badge: getProductBadge(p)
        }));
      }
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
  const urlCat = new URLSearchParams(window.location.search).get('cat');
  if (urlCat === 'compromiso' || urlCat === 'matrimonio') {
    currentFilter = urlCat;
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === urlCat);
    });
  }

  initScrollReveal();
  initNavbar();
  renderNavMenus();
  renderProducts(currentFilter);
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

// Sync desktop and mobile navigation dropdowns with actual Drive products
function renderNavMenus() {
  const displayProducts = getDisplayProducts(products);
  const categoriesMap = {
    AC: displayProducts.filter(p => p.Categoria === 'AC' || p.category === 'compromiso'),
    AM: displayProducts.filter(p => p.Categoria === 'AM' || p.category === 'matrimonio')
  };

  // Desktop dropdowns
  document.querySelectorAll('[data-nav-cat]').forEach(navItem => {
    const catKey = navItem.getAttribute('data-nav-cat');
    const items = categoriesMap[catKey] || [];
    const dropdown = navItem.querySelector('.dropdown-menu');
    if (!dropdown) return;

    if (items.length > 0) {
      navItem.classList.add('has-dropdown');
      dropdown.innerHTML = items.map(prod => {
        const prodId = prod.ID_Producto || prod.id;
        const prodName = prod.Nombre_Producto || prod.name;
        return `<a href="product-detail.html?id=${encodeURIComponent(prodId)}">${prodName}</a>`;
      }).join('');
    } else {
      navItem.classList.remove('has-dropdown');
      dropdown.innerHTML = '';
    }
  });

  // Mobile dropdowns
  document.querySelectorAll('[data-mobile-cat]').forEach(mobileItem => {
    const catKey = mobileItem.getAttribute('data-mobile-cat');
    const items = categoriesMap[catKey] || [];
    const link = mobileItem.querySelector('.mobile-nav-link');
    const chevron = link ? link.querySelector('svg') : null;
    const dropdown = mobileItem.querySelector('.mobile-dropdown');
    if (!link || !dropdown) return;

    if (items.length > 0) {
      link.setAttribute('data-toggle', 'dropdown');
      if (chevron) chevron.style.display = '';
      dropdown.innerHTML = items.map(prod => {
        const prodId = prod.ID_Producto || prod.id;
        const prodName = prod.Nombre_Producto || prod.name;
        return `<a href="product-detail.html?id=${encodeURIComponent(prodId)}">${prodName}</a>`;
      }).join('');
    } else {
      link.removeAttribute('data-toggle');
      if (chevron) chevron.style.display = 'none';
      dropdown.style.display = 'none';
      dropdown.innerHTML = '';
    }
  });
}

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
      localStorage.setItem(PRODUCTS_CACHE_KEY, JSON.stringify(products));
      renderNavMenus();
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
  if (!header || header.dataset.alwaysScrolled === 'true') return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 3. Product Rendering (Main Page always displays SKUs ending in 01 -> 7 products)
function renderProducts(filter = 'todos') {
  if (!productsGrid) return;
  productsGrid.style.opacity = '0';
  
  setTimeout(() => {
    productsGrid.innerHTML = '';
    
    const displayProducts = getDisplayProducts(products);
    const filteredProducts = displayProducts.filter(p => {
      if (filter === 'todos') return true;
      if (filter === 'compromiso' || filter === 'AC') return p.category === 'compromiso' || p.Categoria === 'AC';
      if (filter === 'matrimonio' || filter === 'AM') return p.category === 'matrimonio' || p.Categoria === 'AM';
      return p.category === filter || p.Categoria === filter;
    });

    if (filteredProducts.length === 0) {
      productsGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--color-steel); padding: 2rem 0;">Próximamente nuevas piezas en esta colección.</p>';
      productsGrid.style.opacity = '1';
      return;
    }
    
    filteredProducts.forEach(product => {
      const prodId = product.ID_Producto || product.id;
      const prodSku = product.SKU || product.sku || '';
      const card = document.createElement('div');
      card.className = 'product-card reveal-stagger';
      
      const badgeText = getProductBadge(product);
      const badgeHTML = badgeText ? `<span class="product-badge">${badgeText}</span>` : '';
      const caratVal = formatCaratLabel(product.Quilates || product.carat);
      const metalVal = product.Metal || product.metal || '';
      const metaText = caratVal ? `${caratVal} | ${metalVal}` : metalVal;
      const prodName = product.Nombre_Producto || product.name;
      const prodPrice = (product.PV || product.price || 0).toLocaleString('es-PE');
      const prodImg = `${(product.image || `img/${prodId}/1.jpg`).split('?')[0]}?v=5.0`;
      const prodImgHover = `${(product.imageHover || `img/${prodId}/2.jpg`).split('?')[0]}?v=5.0`;
      
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
          <button class="btn-outline add-to-cart-btn" data-sku="${prodSku}" data-id="${product.id || 1}" style="width: 100%;">Agregar al Carrito</button>
        </div>
      `;
      
      productsGrid.appendChild(card);
    });
    
    // Add event listeners to cart buttons (default SKU -01 + default Oro Amarillo)
    document.querySelectorAll('#productsGrid .add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const sku = e.currentTarget.getAttribute('data-sku');
        const id = parseInt(e.currentTarget.getAttribute('data-id'));
        addToCart(sku || id);
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
    
    const baseProducts = getDisplayProducts(products);
    const matches = [];

    baseProducts.forEach(baseProd => {
      const prodId = baseProd.ID_Producto || baseProd.id;
      const variants = getProductVariants(prodId, products);
      const specificSkuVariant = variants.find(v => (v.SKU || v.sku || '').toLowerCase().includes(query));
      const textMatch =
        (baseProd.Nombre_Producto || baseProd.name || '').toLowerCase().includes(query) ||
        (baseProd.Detalle || baseProd.description || '').toLowerCase().includes(query) ||
        (baseProd.Metal || baseProd.metal || '').toLowerCase().includes(query);

      if (textMatch) {
        matches.push(baseProd);
      } else if (specificSkuVariant) {
        matches.push(specificSkuVariant);
      }
    });
    
    searchResults.innerHTML = '';
    
    if (matches.length === 0) {
      searchResults.innerHTML = '<p style="color:var(--color-steel); text-align:center;">No se encontraron joyas.</p>';
      return;
    }
    
    matches.forEach(product => {
      const prodId = product.ID_Producto || product.id;
      const prodSku = product.SKU || product.sku || '';
      const el = document.createElement('div');
      el.className = 'search-result-item';
      el.innerHTML = `
        <img src="${(product.image || `img/${prodId}/1.jpg`).split('?')[0]}?v=5.0" class="search-result-img" onerror="this.style.display='none'">
        <div>
          <h4 style="margin:0;font-size:1.1rem;font-family:var(--font-heading)">${product.Nombre_Producto || product.name}</h4>
          <span style="font-size:0.8rem;opacity:0.7">${prodSku} | S/ ${(product.PV || product.price || 0).toLocaleString('es-PE')}</span>
        </div>
      `;
      
      el.addEventListener('click', () => {
        closeSearch();
        const skuParam = prodSku && !prodSku.endsWith('01') ? `&sku=${encodeURIComponent(prodSku)}` : '';
        window.location.href = `product-detail.html?id=${prodId}${skuParam}`;
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

function addToCart(skuOrId, selectedMetal = null) {
  let product = products.find(p => (p.SKU && p.SKU === skuOrId) || (p.sku && p.sku === skuOrId));
  if (!product) {
    product = products.find(p => p.id === skuOrId);
  }
  if (!product) {
    const variants = getProductVariants(skuOrId, products);
    product = variants.find(v => String(v.SKU || v.sku || '').trim().endsWith('01')) || variants[0];
  }
  if (!product) return;

  const variantSku = product.SKU || product.sku || String(product.id);
  const chosenMetal = selectedMetal || getDefaultMetal(product.Metal || product.metal);
  const chosenCarat = formatCaratLabel(product.Quilates || product.carat);
  const cartKey = `${variantSku}__${chosenMetal}`;

  const existingItem = cart.find(item => item.cartKey === cartKey);
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
    existingItem.PV = product.PV || product.price || existingItem.PV;
    existingItem.price = existingItem.PV;
  } else {
    cart.push({
      ...product,
      SKU: variantSku,
      sku: variantSku,
      selectedMetal: chosenMetal,
      selectedCarat: chosenCarat,
      cartKey: cartKey,
      quantity: 1
    });
  }
  
  localStorage.setItem('bellini_cart', JSON.stringify(cart));
  updateCartUI();
  showToast('Producto agregado al carrito');
}

function removeFromCart(cartKeyOrId) {
  cart = cart.filter(item =>
    item.cartKey !== cartKeyOrId &&
    String(item.id) !== String(cartKeyOrId) &&
    item.SKU !== cartKeyOrId &&
    item.ID_Producto !== cartKeyOrId
  );
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

    const itemSku = item.SKU || item.sku || '';
    const metalDisplay = item.selectedMetal || getDefaultMetal(item.Metal || item.metal);
    const caratDisplay = item.selectedCarat || formatCaratLabel(item.Quilates || item.carat);
    const removeKey = item.cartKey || itemSku || item.id || item.ID_Producto;
    const specsLine = [metalDisplay, caratDisplay].filter(Boolean).join(' • ');
    
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${(item.image || `img/${item.ID_Producto}/1.jpg`).split('?')[0]}?v=5.0" alt="${item.Nombre_Producto || item.name}" class="cart-item-img" onerror="this.style.display='none'">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.Nombre_Producto || item.name}</div>
        <div class="cart-item-meta">Cant: ${qty}${specsLine ? ' | ' + specsLine : ''}${itemSku ? ' (' + itemSku + ')' : ''}</div>
        <div class="cart-item-price">S/ ${(price * qty).toLocaleString('es-PE')}</div>
        <button class="cart-item-remove" data-remove-key="${removeKey}">Eliminar</button>
      </div>
    `;
    el.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(removeKey));
    cartItems.appendChild(el);
  });
  
  cartTotal.textContent = `S/ ${total.toLocaleString('es-PE')}`;
}

// Make globally available
window.addToCart = addToCart;
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
  
  if (slides.length <= 1 || !prevBtn || !nextBtn) return;
  
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

  if (!hamburgerBtn || !mobileMenu) return;

  const toggleMenu = () => {
    mobileMenu.classList.toggle('open');
    if (mobileOverlay) mobileOverlay.classList.toggle('open');
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
  };

  hamburgerBtn.addEventListener('click', toggleMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

  // Delegated handling for accordion toggles and navigation links
  mobileMenu.addEventListener('click', (e) => {
    const toggle = e.target.closest('.mobile-nav-link[data-toggle="dropdown"]');
    if (toggle) {
      e.preventDefault();
      const dropdown = toggle.nextElementSibling;
      if (!dropdown) return;

      document.querySelectorAll('.mobile-dropdown').forEach(d => {
        if (d !== dropdown) d.style.display = 'none';
      });

      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      return;
    }

    const clickedLink = e.target.closest('.mobile-dropdown a, .mobile-contact a, .mobile-nav-link:not([data-toggle="dropdown"])');
    if (clickedLink) {
      closeMenu();
    }
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
    ? `Hola Bellini Fine Jewelry, deseo restablecer la contraseña de mi cuenta asociada al correo: ${email}`
    : 'Hola Bellini Fine Jewelry, deseo restablecer mi contraseña.';
  window.open(`https://wa.me/51922427713?text=${encodeURIComponent(msg)}`, '_blank');
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

