/* ==========================================================================
   1. CONFIGURATION & CONSTANTS
   ========================================================================== */
const PRODUCT_COLUMNS = [
  { field: 'icon',  label: 'Icon',             type: 'text' },
  { field: 'en.n',  label: 'Name (EN)',        type: 'text' },
  { field: 'km.n',  label: 'ឈ្មោះ (KM)',       type: 'text' },
  { field: 'en.d',  label: 'Description (EN)', type: 'text' },
  { field: 'km.d',  label: 'ពិពណ៌នា (KM)',     type: 'text' },
  { field: 'price', label: 'Price $',          type: 'number' },
  { field: 'old',   label: 'Old price $',      type: 'number' },
  { field: 'stock', label: 'Stock',            type: 'number' }
];

const ORDER_STATUSES = [
  'Received',
  'Preparing',
  'Out for delivery',
  'Delivered'
];

/* ==========================================================================
   2. STORAGE & HELPER UTILITIES
   ========================================================================== */
const storage = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('Failed to save to localStorage:', err);
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch {}
  }
};

const getEl = (id) => document.getElementById(id);

const showStatusMessage = (text) => {
  getEl('msg').textContent = text;
};

// Reads nested object properties using dot notation (e.g., "en.n")
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
};

// Updates nested object properties using dot notation
const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  const lastKey = keys.pop();
  const target = keys.reduce((acc, key) => acc[key], obj);
  target[lastKey] = value;
};

// Prevents quotes or HTML tags in data from breaking table markup
const escapeHtml = (value) => {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

// Clone default products so edits do not mutate the original template
const cloneDefaultProducts = () => JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));

/* ==========================================================================
   3. APPLICATION STATE
   ========================================================================== */
let products = storage.get('products', null) || cloneDefaultProducts();

/* ==========================================================================
   4. UI RENDERING
   ========================================================================== */
function renderProductsTable() {
  const headerCells = PRODUCT_COLUMNS.map(col => `<th>${col.label}</th>`).join('');
  getEl('thead').innerHTML = `
    <tr>
      ${headerCells}
      <th>Category</th>
      <th>Hidden</th>
      <th></th>
    </tr>
  `;

  getEl('tbody').innerHTML = products.map((product, index) => {
    const inputCells = PRODUCT_COLUMNS.map(({ field, type }) => {
      const value = escapeHtml(getNestedValue(product, field));
      const numberAttrs = type === 'number' ? 'step="0.01" min="0"' : '';
      return `<td><input data-index="${index}" data-field="${field}" type="${type}" ${numberAttrs} value="${value}"></td>`;
    }).join('');

    return `
      <tr>
        ${inputCells}
        <td>
          <select data-index="${index}" data-field="cat">
            <option value="body" ${product.cat === 'body' ? 'selected' : ''}>Body care</option>
            <option value="food" ${product.cat === 'food' ? 'selected' : ''}>Food &amp; drink</option>
          </select>
        </td>
        <td>
          <input type="checkbox" data-index="${index}" data-field="hidden" ${product.hidden ? 'checked' : ''}>
        </td>
        <td>
          <button class="btn small ghost" data-delete-index="${index}">Delete</button>
        </td>
      </tr>
    `;
  }).join('');
}

function renderOrdersTable() {
  const orders = storage.get('orders', []);

  if (!orders.length) {
    getEl('orders').innerHTML = '<tr><td colspan="7">No orders yet.</td></tr>';
    return;
  }

  // Show newest orders first while keeping track of their original array index
  const rows = orders
    .map((order, originalIndex) => ({ order, originalIndex }))
    .reverse()
    .map(({ order, originalIndex }) => {
      const statusOptions = ORDER_STATUSES.map((label, statusIdx) => `
        <option value="${statusIdx}" ${order.status === statusIdx ? 'selected' : ''}>${label}</option>
      `).join('');

      return `
        <tr>
          <td>${escapeHtml(order.id)}</td>
          <td>${new Date(order.ts).toLocaleString()}</td>
          <td>${escapeHtml(order.name)}</td>
          <td>${escapeHtml(order.phone)}</td>
          <td>${escapeHtml(order.pay)}</td>
          <td>$${order.total.toFixed(2)}</td>
          <td><select data-order-index="${originalIndex}">${statusOptions}</select></td>
        </tr>
      `;
    });

  getEl('orders').innerHTML = rows.join('');
}

function renderAll() {
  renderProductsTable();
  renderOrdersTable();
}

/* ==========================================================================
   5. EVENT HANDLERS
   ========================================================================== */

// Handle live edits to product inputs, checkboxes, and category dropdowns
document.addEventListener('input', (event) => {
  const target = event.target;
  const index = target.dataset.index;
  if (index === undefined) return;

  const field = target.dataset.field;
  const product = products[Number(index)];

  let newValue;
  if (target.type === 'checkbox') {
    newValue = target.checked;
  } else if (target.type === 'number') {
    newValue = target.value === '' ? null : Number(target.value);
  } else {
    newValue = target.value;
  }

  setNestedValue(product, field, newValue);
  product.sale = Boolean(product.old && product.old > product.price);
});

// Handle order status dropdown changes
document.addEventListener('change', (event) => {
  const orderIndex = event.target.dataset.orderIndex;
  if (orderIndex === undefined) return;

  const orders = storage.get('orders', []);
  orders[Number(orderIndex)].status = Number(event.target.value);
  storage.set('orders', orders);
  showStatusMessage('Order status updated.');
});

// Handle delete product button clicks
document.addEventListener('click', (event) => {
  const deleteBtn = event.target.closest('button[data-delete-index]');
  if (!deleteBtn) return;

  if (confirm('Delete this product?')) {
    products.splice(Number(deleteBtn.dataset.deleteIndex), 1);
    renderProductsTable();
  }
});

// Add a new blank product
getEl('add').onclick = () => {
  const nextId = products.reduce((max, p) => Math.max(max, p.id), 0) + 1;

  products.push({
    id: nextId,
    cat: 'body',
    icon: '🌿',
    tone: '#E1E289',
    price: 1,
    old: null,
    stock: 10,
    img: '',
    imgs: [],
    rating: { r: 0, n: 0 },
    en: { n: 'New product', d: '', i: '', u: '' },
    km: { n: 'ផលិតផលថ្មី', d: '', i: '', u: '' }
  });

  renderProductsTable();
  showStatusMessage('Product added. Fill it in, then save.');
};

// Save changes to browser localStorage
getEl('save').onclick = () => {
  storage.set('products', products);
  showStatusMessage('Saved in this browser. Download products.js to publish.');
};

// Revert products back to DEFAULT_PRODUCTS
getEl('reset').onclick = () => {
  if (!confirm('Reset all products to the defaults?')) return;

  storage.remove('products');
  products = cloneDefaultProducts();
  renderProductsTable();
  showStatusMessage('Reset to defaults.');
};

// Export products array as a downloadable products.js file
getEl('export').onclick = () => {
  const fileContent = [
    '/* Shared product data. Edit here, or use admin.html > Download products.js */',
    `const DEFAULT_PRODUCTS = ${JSON.stringify(products, null, 2)};`,
    'DEFAULT_PRODUCTS.forEach(p => {',
    '  if (p.stock === undefined) p.stock = 20;',
    '  if (!p.rating) p.rating = { r: 0, n: 0 };',
    '  if (!p.imgs) p.imgs = [];',
    '});',
    ''
  ].join('\n');

  const blob = new Blob([fileContent], { type: 'text/javascript' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'products.js';
  link.click();

  showStatusMessage('products.js downloaded. Replace the old file on your website with it.');
};

renderAll();
