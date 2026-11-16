/* ---------- Translations ---------- */
const T = {
  en: {
    nav_home:'Home', nav_products:'Products', nav_about:'About', nav_contact:'Contact',
    hero_title:'Everyday care, grown from the earth.',
    hero_sub:'Soaps, creams, oils and teas made from plants we can name, in packaging that goes back to the soil.',
    shop_now:'Shop Now',
    f1_t:'100% Natural', f1_d:'Plant-based ingredients with no synthetic fragrance or dyes.',
    f2_t:'Fast Delivery', f2_d:'Orders leave our workshop within 24 hours.',
    f3_t:'Guarantee', f3_d:'Not happy? Return it within 30 days for a full refund.',
    prod_t:'Our products', prod_d:'Small-batch essentials, made to be used up and composted.',
    search_ph:'Search products...', cat_all:'All', cat_body:'Body care', cat_food:'Food & drink',
    no_results:'No products found. Try a different word.',
    add:'Add to Cart', details:'View details', sale:'Sale',
    ingredients:'Ingredients', howto:'How to use',
    about_t:'About EcoShop',
    about_d1:'EcoShop started in a small workshop in Phnom Penh. We buy ingredients from local farmers and pack everything in materials you can recycle or compost.',
    about_d2:'Every product is made in small batches, so it arrives fresh and little goes to waste.',
    news_t:'Get 10% off your first order', news_d:'Join our newsletter for new products and seasonal offers. Use code ECO10 at checkout.',
    email_ph:'Your email address', subscribe:'Subscribe',
    email_ok:'Thanks for subscribing! Use code ECO10 for 10% off.', email_bad:'Please enter a valid email address.',
    tagline:'Natural products for people and planet.', contact_t:'Contact', links_t:'Quick links',
    address:'Phnom Penh, Cambodia', rights:'All rights reserved.',
    chat_tg:'Chat on Telegram', chat_ms:'Chat on Messenger',
    cart_t:'Your cart', cart_empty:'Your cart is empty. Add a product to get started.',
    promo_ph:'Discount code', apply:'Apply', promo_ok:'Code ECO10 applied: 10% off.', promo_bad:'This code is not valid.',
    ship_hint:x=>`Add ${x} more for free delivery.`, ship_free:'You get free delivery!',
    subtotal:'Subtotal', discount:'Discount', shipping:'Delivery', total:'Total', free:'Free',
    each:'each', remove:'Remove', checkout:'Checkout',
    co_t:'Checkout', name:'Full name', phone:'Phone number', addr:'Delivery address',
    pay_t:'Payment method', pay_aba:'ABA Pay', pay_wing:'Wing', pay_cod:'Cash on delivery',
    place:'Place order', bad_phone:'Enter a valid phone number.',
    thanks_t:'Thank you for your order!', thanks_d:'We will contact you by phone to confirm delivery.', close:'Close',
    t_city:['Customer in Phnom Penh','Customer in Siem Reap','Customer in Battambang']
  },
  km: {
    nav_home:'ទំព័រដើម', nav_products:'ផលិតផល', nav_about:'អំពីយើង', nav_contact:'ទំនាក់ទំនង',
    hero_title:'ការថែទាំប្រចាំថ្ងៃ កើតចេញពីធម្មជាតិ។',
    hero_sub:'សាប៊ូ ឡេ ប្រេង និងតែ ធ្វើពីរុក្ខជាតិដែលយើងស្គាល់ ក្នុងកញ្ចប់ដែលអាចត្រឡប់ទៅដីវិញ។',
    shop_now:'ទិញឥឡូវនេះ',
    f1_t:'ធម្មជាតិ ១០០%', f1_d:'គ្រឿងផ្សំពីរុក្ខជាតិ គ្មានក្លិន ឬថ្នាំជ្រលក់សំយោគ។',
    f2_t:'ដឹកជញ្ជូនលឿន', f2_d:'ការបញ្ជាទិញចេញពីសិក្ខាសាលាក្នុងរយៈពេល ២៤ ម៉ោង។',
    f3_t:'ធានាគុណភាព', f3_d:'មិនពេញចិត្ត? សងប្រាក់វិញពេញលេញក្នុងរយៈពេល ៣០ ថ្ងៃ។',
    prod_t:'ផលិតផលរបស់យើង', prod_d:'ផលិតផលសំខាន់ៗ ធ្វើជាបាច់តូចៗ ប្រើអស់ហើយអាចធ្វើជីកំប៉ុស។',
    search_ph:'ស្វែងរកផលិតផល...', cat_all:'ទាំងអស់', cat_body:'ថែរក្សារាងកាយ', cat_food:'អាហារ និងភេសជ្ជៈ',
    no_results:'រកមិនឃើញផលិតផលទេ។ សូមសាកល្បងពាក្យផ្សេង។',
    add:'ដាក់ក្នុងកន្ត្រក', details:'មើលលម្អិត', sale:'បញ្ចុះតម្លៃ',
    ingredients:'គ្រឿងផ្សំ', howto:'របៀបប្រើ',
    about_t:'អំពី EcoShop',
    about_d1:'EcoShop ចាប់ផ្តើមពីសិក្ខាសាលាតូចមួយនៅភ្នំពេញ។ យើងទិញគ្រឿងផ្សំពីកសិករក្នុងស្រុក ហើយខ្ចប់ដោយសម្ភារៈដែលអាចកែច្នៃ ឬធ្វើជីកំប៉ុសបាន។',
    about_d2:'ផលិតផលនីមួយៗធ្វើជាបាច់តូចៗ ដើម្បីឲ្យស្រស់ និងកាត់បន្ថយកាកសំណល់។',
    news_t:'ទទួលបានការបញ្ចុះតម្លៃ ១០% សម្រាប់ការបញ្ជាទិញដំបូង', news_d:'ចុះឈ្មោះទទួលព័ត៌មានផលិតផលថ្មី និងប្រូម៉ូសិនតាមរដូវ។ ប្រើកូដ ECO10 ពេលទូទាត់។',
    email_ph:'អ៊ីមែលរបស់អ្នក', subscribe:'ចុះឈ្មោះ',
    email_ok:'អរគុណដែលបានចុះឈ្មោះ! ប្រើកូដ ECO10 ដើម្បីបញ្ចុះតម្លៃ ១០%។', email_bad:'សូមបញ្ចូលអ៊ីមែលឲ្យបានត្រឹមត្រូវ។',
    tagline:'ផលិតផលធម្មជាតិ សម្រាប់មនុស្ស និងភពផែនដី។', contact_t:'ទំនាក់ទំនង', links_t:'តំណរហ័ស',
    address:'ភ្នំពេញ កម្ពុជា', rights:'រក្សាសិទ្ធិគ្រប់យ៉ាង។',
    chat_tg:'ជជែកតាម Telegram', chat_ms:'ជជែកតាម Messenger',
    cart_t:'កន្ត្រករបស់អ្នក', cart_empty:'កន្ត្រករបស់អ្នកនៅទទេ។ សូមដាក់ផលិតផលចូល។',
    promo_ph:'កូដបញ្ចុះតម្លៃ', apply:'ប្រើកូដ', promo_ok:'បានប្រើកូដ ECO10៖ បញ្ចុះតម្លៃ ១០%។', promo_bad:'កូដនេះមិនត្រឹមត្រូវទេ។',
    ship_hint:x=>`ទិញថែម ${x} ទៀត ដើម្បីបានដឹកជញ្ជូនឥតគិតថ្លៃ។`, ship_free:'អ្នកបានដឹកជញ្ជូនឥតគិតថ្លៃ!',
    subtotal:'សរុបរង', discount:'បញ្ចុះតម្លៃ', shipping:'ដឹកជញ្ជូន', total:'សរុប', free:'ឥតគិតថ្លៃ',
    each:'មួយ', remove:'លុប', checkout:'ទូទាត់',
    co_t:'ទូទាត់', name:'ឈ្មោះពេញ', phone:'លេខទូរស័ព្ទ', addr:'អាសយដ្ឋានដឹកជញ្ជូន',
    pay_t:'វិធីបង់ប្រាក់', pay_aba:'ABA Pay', pay_wing:'Wing', pay_cod:'បង់ប្រាក់ពេលទទួលទំនិញ',
    place:'បញ្ជាក់ការបញ្ជាទិញ', bad_phone:'សូមបញ្ចូលលេខទូរស័ព្ទឲ្យបានត្រឹមត្រូវ។',
    thanks_t:'អរគុណសម្រាប់ការបញ្ជាទិញ!', thanks_d:'យើងនឹងទាក់ទងអ្នកតាមទូរស័ព្ទ ដើម្បីបញ្ជាក់ការដឹកជញ្ជូន។', close:'បិទ',
    t_city:['អតិថិជននៅភ្នំពេញ','អតិថិជននៅសៀមរាប','អតិថិជននៅបាត់ដំបង']
  }
};

/* ---------- Data ---------- */

/* ---------- Extra translations & tips ---------- */
Object.assign(T.en, {
  nav_tips:'Tips', track:'Track order', cat_wish:'♥ Wishlist',
  sort_def:'Sort: Default', sort_low:'Price: low to high', sort_high:'Price: high to low', out:'Out of stock',
  rev_t:'Reviews', rev_stars:'Stars', rev_text:'Your review', rev_send:'Submit review', no_rev:'No reviews yet. Be the first.',
  pay_khqr:'KHQR (scan to pay)', khqr_note:'Scan with any banking app, then place your order.',
  bad_phone:'Please fill in every field and enter a valid phone number.',
  track_t:'Track your order', track_ph:'Phone number used for the order', track_go:'Search', track_none:'No orders found for this number.',
  st_0:'Order received', st_1:'Preparing', st_2:'Out for delivery', st_3:'Delivered',
  order_id:'Order number', track_after:'Use your phone number to track this order.',
  tips_t:'Green living tips', tips_d:'Short reads to help you waste less.', read:'Read'
});
Object.assign(T.km, {
  nav_tips:'គន្លឹះ', track:'តាមដានការបញ្ជាទិញ', cat_wish:'♥ ចូលចិត្ត',
  sort_def:'តម្រៀប៖ លំនាំដើម', sort_low:'តម្លៃ ថោក → ថ្លៃ', sort_high:'តម្លៃ ថ្លៃ → ថោក', out:'អស់ស្តុក',
  rev_t:'ការវាយតម្លៃ', rev_stars:'ផ្កាយ', rev_text:'មតិរបស់អ្នក', rev_send:'ផ្ញើការវាយតម្លៃ', no_rev:'មិនទាន់មានការវាយតម្លៃទេ។ សូមធ្វើជាអ្នកដំបូង។',
  pay_khqr:'KHQR (ស្កែនបង់ប្រាក់)', khqr_note:'ស្កែនជាមួយកម្មវិធីធនាគារណាក៏បាន បន្ទាប់មកចុចបញ្ជាក់ការបញ្ជាទិញ។',
  bad_phone:'សូមបំពេញគ្រប់ប្រអប់ ហើយបញ្ចូលលេខទូរស័ព្ទឲ្យបានត្រឹមត្រូវ។',
  track_t:'តាមដានការបញ្ជាទិញ', track_ph:'លេខទូរស័ព្ទដែលបានប្រើ', track_go:'ស្វែងរក', track_none:'រកមិនឃើញការបញ្ជាទិញសម្រាប់លេខនេះទេ។',
  st_0:'បានទទួលការបញ្ជាទិញ', st_1:'កំពុងរៀបចំ', st_2:'កំពុងដឹកជញ្ជូន', st_3:'ដឹកជញ្ជូនរួចរាល់',
  order_id:'លេខបញ្ជាទិញ', track_after:'ប្រើលេខទូរស័ព្ទរបស់អ្នកដើម្បីតាមដានការបញ្ជាទិញនេះ។',
  tips_t:'គន្លឹះរស់នៅបែបធម្មជាតិ', tips_d:'អត្ថបទខ្លីៗ ជួយឲ្យអ្នកបង្កើតកាកសំណល់តិចជាងមុន។', read:'អាន'
});
const tips = [
  {icon:'🧼', en:{t:'Why cold-process soap lasts longer', b:'Cold-process soap cures for four to six weeks, which makes the bar harder and slower to dissolve. Keep it on a draining dish and it can last twice as long as a factory bar.'},
               km:{t:'ហេតុអ្វីសាប៊ូវិធីត្រជាក់ប្រើបានយូរជាង', b:'សាប៊ូវិធីត្រជាក់ត្រូវការពេលបួនទៅប្រាំមួយសប្តាហ៍ដើម្បីឲ្យរឹង ដូច្នេះរលាយយឺតជាងមុន។ ដាក់វានៅលើចានដែលស្រក់ទឹកបាន នោះវាអាចប្រើបានយូរជាងសាប៊ូរោងចក្រពីរដង។'}},
  {icon:'🍵', en:{t:'How to brew jasmine tea', b:'Use water around 80°C, not boiling, so the leaves stay sweet instead of bitter. Steep for three minutes and reuse the leaves for a second cup.'},
               km:{t:'របៀបជាក់តែម្លិះឲ្យឆ្ងាញ់', b:'ប្រើទឹកប្រហែល ៨០°C មិនត្រូវពុះខ្លាំងទេ ដើម្បីឲ្យស្លឹកតែផ្អែម មិនល្វីង។ ត្រាំរយៈពេលបីនាទី ហើយប្រើស្លឹកដដែលបានជាលើកទីពីរ។'}},
  {icon:'♻️', en:{t:'Easy plastic swaps for your bathroom', b:'Start with a bamboo toothbrush, a bar of soap instead of liquid soap, and a refillable cream jar. Each swap is small, but together they remove dozens of plastic items a year.'},
               km:{t:'វិធីងាយៗកាត់បន្ថយផ្លាស្ទិចក្នុងបន្ទប់ទឹក', b:'ចាប់ផ្តើមពីច្រាសដុសធ្មេញឫស្សី សាប៊ូដុំជំនួសសាប៊ូរាវ និងដបឡេដែលបញ្ចូលបាន។ ការប្តូរនីមួយៗតូច ប៉ុន្តែរួមគ្នាកាត់បន្ថយផ្លាស្ទិចបានរាប់សិបដុំក្នុងមួយឆ្នាំ។'}}
];

const reviews = [
  {init:'SK', name:'Sophea K.', en:'I switched my whole bathroom to EcoShop. My skin is calmer, and the soap lasts twice as long as the one I used before.', km:'ខ្ញុំប្តូរផលិតផលក្នុងបន្ទប់ទឹកទាំងអស់មកប្រើ EcoShop។ ស្បែកខ្ញុំស្ងប់ជាងមុន ហើយសាប៊ូនេះប្រើបានយូរជាងពីរដងនៃសាប៊ូមុន។'},
  {init:'DM', name:'Dara M.', en:'The jasmine tea arrived in two days, packed in paper only. It tastes fresh, not dusty like supermarket tea.', km:'តែម្លិះមកដល់ក្នុងរយៈពេលពីរថ្ងៃ ខ្ចប់ដោយក្រដាសតែប៉ុណ្ណោះ។ រសជាតិស្រស់ មិនដូចតែនៅផ្សារទំនើបទេ។'},
  {init:'VL', name:'Vanna L.', en:"The body cream is the first one that doesn't leave my skin sticky in this heat.", km:'ឡេនេះជាលើកដំបូងដែលមិនធ្វើឲ្យស្បែកខ្ញុំជាប់ស្អិត ក្នុងអាកាសធាតុក្តៅបែបនេះ។'}
];

/* ---------- Helpers & state ---------- */
const $ = id => document.getElementById(id);
const money = n => cur === 'USD' ? '$' + n.toFixed(2) : (Math.round(n * 4100 / 100) * 100).toLocaleString('en-US') + '៛';
const store = {
  get(k, d){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch{ return d; } },
  set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch{} }
};
const products = store.get('products', null) || DEFAULT_PRODUCTS;
let cur = store.get('cur', 'USD'), wish = store.get('wish', []), sortBy = 'def';
let lang = store.get('lang', 'en');
let cart = store.get('cart', []);       // [{id, qty}]
let promo = store.get('promo', false);
let cat = 'all', query = '', slide = 0, timer;
const t = k => T[lang][k];
const find = id => products.find(p => p.id === id);
const FREE_SHIP = 30, SHIP_FEE = 2;

function totals(){
  const sub = cart.reduce((s,i) => s + find(i.id).price * i.qty, 0);
  const disc = promo ? sub * 0.1 : 0;
  const ship = sub === 0 || sub >= FREE_SHIP ? 0 : SHIP_FEE;
  return {sub, disc, ship, total: sub - disc + ship};
}
const save = () => { store.set('cart', cart); store.set('promo', promo); };

/* ---------- Language ---------- */
function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(e => { const v = t(e.dataset.i18n); if(typeof v === 'string') e.textContent = v; });
  document.querySelectorAll('[data-i18n-ph]').forEach(e => e.placeholder = t(e.dataset.i18nPh));
  $('langBtn').textContent = lang === 'en' ? 'ខ្មែរ' : 'EN';
  $('promoMsg').textContent = promo ? t('promo_ok') : '';
  renderProducts(); renderCart(); renderReview(); renderTips(); updateCur();
}
$('langBtn').onclick = () => { lang = lang === 'en' ? 'km' : 'en'; store.set('lang', lang); applyLang(); };

/* ---------- Products ---------- */
function picHTML(p){ return p.img ? `<img src="${p.img}" alt="${p[lang].n}">` : p.icon; }
function renderProducts(){
  const q = query.trim().toLowerCase();
  const list = products.filter(p => !p.hidden && (cat === 'all' || (cat === 'wish' ? wish.includes(p.id) : p.cat === cat)) &&
    (!q || p.en.n.toLowerCase().includes(q) || p.km.n.includes(q) || p[lang].d.toLowerCase().includes(q)));
  if(sortBy === 'low') list.sort((a,b) => a.price - b.price);
  if(sortBy === 'high') list.sort((a,b) => b.price - a.price);
  $('noResults').hidden = list.length > 0;
  $('productGrid').innerHTML = list.map(p => {
    const out = p.stock <= 0, rt = ratingOf(p), on = wish.includes(p.id);
    return `
    <article class="card">
      <div class="card-img" style="background:${p.tone}">
        ${out ? `<span class="badge out">${t('out')}</span>` : p.sale ? `<span class="badge">${t('sale')}</span>` : ''}
        <button class="heart ${on ? 'on' : ''}" data-wish="${p.id}" aria-pressed="${on}" aria-label="Wishlist">♥</button>
        ${picHTML(p)}
      </div>
      <div class="card-body">
        <h3>${p[lang].n}</h3>
        ${rt.n ? `<div class="rating">★ ${rt.avg.toFixed(1)} (${rt.n})</div>` : ''}
        <p class="desc">${p[lang].d}</p>
        <div class="price-row"><span class="price">${money(p.price)}</span>${p.old ? `<span class="old">${money(p.old)}</span>` : ''}</div>
        <div class="card-actions">
          <button class="btn" data-add="${p.id}" ${out ? 'disabled' : ''}>${t(out ? 'out' : 'add')}</button>
          <button class="btn ghost" data-detail="${p.id}">${t('details')}</button>
        </div>
      </div>
    </article>`; }).join('');
}
$('search').addEventListener('input', e => { query = e.target.value; renderProducts(); });
$('chips').addEventListener('click', e => {
  const b = e.target.closest('.chip'); if(!b) return;
  cat = b.dataset.cat;
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === b));
  renderProducts();
});

/* ---------- Product details dialog ---------- */
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const revs = id => store.get('rev' + id, []);
function ratingOf(p){
  const b = p.rating || {r:0, n:0}, r = revs(p.id), n = b.n + r.length;
  return {n, avg: n ? (b.r * b.n + r.reduce((s,x) => s + x.stars, 0)) / n : 0};
}
const showDlg = d => { if(!d.open) d.showModal(); };
function openDetail(id){
  const p = find(id), d = p[lang], out = p.stock <= 0, rt = ratingOf(p);
  const tones = [p.tone, '#E1E289', '#ACD2ED'];
  const imgs = p.imgs && p.imgs.length ? p.imgs : [null, null, null];
  const slides = imgs.map((src, i) => `<div class="slide" style="background:${tones[i % 3]}">${src ? `<img src="${src}" alt="${d.n}" loading="lazy">` : `<span style="font-size:${[4.5,3,6][i % 3]}rem">${p.icon}</span>`}</div>`).join('');
  const list = revs(id).slice(-5).reverse().map(r => `<div class="rev"><strong>${esc(r.name)}</strong> <span class="rating">${'★'.repeat(r.stars)}</span><p>${esc(r.text)}</p></div>`).join('') || `<p>${t('no_rev')}</p>`;
  $('detailBody').innerHTML = `
    <div class="dlg-head"><h2>${d.n}</h2><button class="close" data-close aria-label="${t('close')}">×</button></div>
    <div class="gal"><div class="gal-track">${slides}</div>
      <button class="gal-btn prev" data-gal="-1" aria-label="Previous">‹</button><button class="gal-btn next" data-gal="1" aria-label="Next">›</button></div>
    ${rt.n ? `<div class="rating">★ ${rt.avg.toFixed(1)} (${rt.n})</div>` : ''}
    <p>${d.d}</p>
    <h4>${t('ingredients')}</h4><p>${d.i}</p>
    <h4>${t('howto')}</h4><p>${d.u}</p>
    <span class="price">${money(p.price)}</span>
    <button class="btn" style="width:100%" data-add="${p.id}" data-close ${out ? 'disabled' : ''}>${t(out ? 'out' : 'add')}</button>
    <h4>${t('rev_t')}</h4><div class="revs">${list}</div>
    <form id="revForm" class="revform">
      <label class="field">${t('rev_stars')}<select name="stars"><option value="5">★★★★★</option><option value="4">★★★★</option><option value="3">★★★</option><option value="2">★★</option><option value="1">★</option></select></label>
      <label class="field">${t('name')}<input name="rname" required></label>
      <label class="field">${t('rev_text')}<textarea name="rtext" rows="2" required></textarea></label>
      <button class="btn small" type="submit">${t('rev_send')}</button>
    </form>`;
  $('revForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target.elements;
    if(!f.rname.value.trim() || !f.rtext.value.trim()) return;
    store.set('rev' + id, [...revs(id), {stars:+f.stars.value, name:f.rname.value.trim(), text:f.rtext.value.trim()}]);
    renderProducts(); openDetail(id);
  });
  showDlg($('detailDlg'));
}
function openTip(i){
  const x = tips[i], d = x[lang];
  $('detailBody').innerHTML = `<div class="dlg-head"><h2>${d.t}</h2><button class="close" data-close aria-label="${t('close')}">×</button></div>
    <div class="pic" style="background:#E1E289">${x.icon}</div><p>${d.b}</p>`;
  showDlg($('detailDlg'));
}

/* ---------- Cart ---------- */
function renderCart(){
  const list = $('cartItems'), tt = totals();
  $('cartCount').textContent = cart.reduce((s,i) => s + i.qty, 0);
  $('subtotal').textContent = money(tt.sub);
  $('discLine').hidden = !promo;
  $('discount').textContent = '-' + money(tt.disc);
  $('shipping').textContent = tt.ship ? money(tt.ship) : t('free');
  $('cartTotal').textContent = money(tt.total);
  $('checkout').disabled = !cart.length;
  $('shipHint').textContent = !cart.length ? '' : tt.sub >= FREE_SHIP ? t('ship_free') : t('ship_hint')(money(FREE_SHIP - tt.sub));
  if(!cart.length){ list.innerHTML = `<li class="empty">${t('cart_empty')}</li>`; return; }
  list.innerHTML = cart.map(i => { const p = find(i.id); return `
    <li class="item">
      <div class="thumb" style="background:${p.tone}">${p.icon}</div>
      <div>
        <h4>${p[lang].n}</h4>
        <div class="unit">${money(p.price)} ${t('each')}</div>
        <div class="qty">
          <button data-dec="${p.id}" aria-label="-">−</button><span>${i.qty}</span><button data-inc="${p.id}" aria-label="+">+</button>
        </div>
      </div>
      <div class="item-side"><strong>${money(p.price * i.qty)}</strong><button class="remove" data-remove="${p.id}">${t('remove')}</button></div>
    </li>`; }).join('');
}
const openCart = () => { $('cart').classList.add('open'); $('overlay').classList.add('open'); $('cart').setAttribute('aria-hidden','false'); };
const closeCart = () => { $('cart').classList.remove('open'); $('overlay').classList.remove('open'); $('cart').setAttribute('aria-hidden','true'); };
function change(id, delta){
  const p = find(id), it = cart.find(i => i.id === id);
  if(delta > 0 && (!p || (it ? it.qty : 0) >= p.stock)) return;
  if(it){ it.qty += delta; if(it.qty < 1) cart = cart.filter(i => i !== it); }
  else if(delta > 0) cart.push({id, qty:1});
  save(); renderCart();
}
$('applyPromo').onclick = () => {
  const ok = $('promo').value.trim().toUpperCase() === 'ECO10';
  promo = ok; save(); renderCart();
  $('promoMsg').textContent = ok ? t('promo_ok') : t('promo_bad');
};
$('openCart').onclick = openCart; $('closeCart').onclick = closeCart; $('overlay').onclick = closeCart;

/* ---------- Checkout ---------- */
function openCheckout(){
  const tt = totals();
  $('checkoutBody').innerHTML = `
    <div class="dlg-head"><h2>${t('co_t')}</h2><button class="close" data-close aria-label="${t('close')}">×</button></div>
    <form id="coForm" novalidate>
      <label class="field">${t('name')}<input name="cname" required autocomplete="name"></label>
      <label class="field">${t('phone')}<input name="phone" type="tel" required autocomplete="tel" placeholder="012 345 678"></label>
      <label class="field">${t('addr')}<textarea name="addr" rows="2" required></textarea></label>
      <div class="pay" role="radiogroup" aria-label="${t('pay_t')}">
        <label><input type="radio" name="pay" value="aba" checked> ${t('pay_aba')}</label>
        <label><input type="radio" name="pay" value="wing"> ${t('pay_wing')}</label>
        <label><input type="radio" name="pay" value="khqr"> ${t('pay_khqr')}</label>
        <label><input type="radio" name="pay" value="cod"> ${t('pay_cod')}</label>
      </div>
      <div class="qr" id="qrBox" hidden><img id="qrImg" src="khqr.png" alt="KHQR"><p>${t('khqr_note')}</p></div>
      <div class="summary"><span>${t('total')}</span><span>${money(tt.total)}</span></div>
      <div class="form-msg" id="coMsg" role="alert"></div>
      <button class="btn" style="width:100%" type="submit">${t('place')}</button>
    </form>`;
  const img = $('qrImg'), form = $('coForm');
  img.onerror = () => { img.outerHTML = '<div class="qr-ph">KHQR</div>'; };
  form.addEventListener('change', () => { $('qrBox').hidden = form.elements.pay.value !== 'khqr'; });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = form.elements, phone = f.phone.value.replace(/\D/g, '');
    if(!f.cname.value.trim() || !f.addr.value.trim() || phone.length < 8 || phone.length > 15){ $('coMsg').textContent = t('bad_phone'); return; }
    const id = 'EC-' + Math.random().toString(36).slice(2, 7).toUpperCase();
    store.set('orders', [...store.get('orders', []), {id, name:f.cname.value.trim(), phone, addr:f.addr.value.trim(), pay:f.pay.value, total:totals().total, items:cart.map(i => ({id:i.id, qty:i.qty})), status:0, ts:Date.now()}]);
    cart = []; promo = false; save(); renderCart();
    $('checkoutBody').innerHTML = `
      <div class="thanks"><div class="big">🌿</div><h2>${t('thanks_t')}</h2><p>${t('thanks_d')}</p>
      <p><strong>${t('order_id')}: ${id}</strong></p><p>${t('track_after')}</p>
      <button class="btn" style="margin-top:16px" data-close>${t('close')}</button></div>`;
  });
  showDlg($('checkoutDlg'));
}
$('checkout').onclick = () => { closeCart(); openCheckout(); };

/* ---------- Order tracking ---------- */
function openTrack(){
  $('checkoutBody').innerHTML = `
    <div class="dlg-head"><h2>${t('track_t')}</h2><button class="close" data-close aria-label="${t('close')}">×</button></div>
    <form id="trForm" class="trform"><input class="search" name="phone" type="tel" placeholder="${t('track_ph')}" aria-label="${t('track_ph')}" required>
      <button class="btn small" type="submit">${t('track_go')}</button></form><div id="trOut"></div>`;
  $('trForm').addEventListener('submit', e => {
    e.preventDefault();
    const ph = e.target.elements.phone.value.replace(/\D/g, '').slice(-8);
    const found = ph.length >= 8 ? store.get('orders', []).filter(o => o.phone.slice(-8) === ph).reverse() : [];
    $('trOut').innerHTML = found.length ? found.map(o => `<div class="order"><strong>${o.id}</strong> · ${money(o.total)}
      <ol class="steps">${[0,1,2,3].map(i => `<li class="${i <= o.status ? 'done' : ''}">${t('st_' + i)}</li>`).join('')}</ol></div>`).join('') : `<p>${t('track_none')}</p>`;
  });
  showDlg($('checkoutDlg'));
}

/* ---------- Reviews slider ---------- */
function renderReview(){
  const r = reviews[slide];
  $('tQuote').textContent = '“' + r[lang] + '”';
  $('tAvatar').textContent = r.init; $('tName').textContent = r.name; $('tCity').textContent = t('t_city')[slide];
  $('tDots').innerHTML = reviews.map((_, i) => `<button class="${i === slide ? 'on' : ''}" data-dot="${i}" aria-label="Review ${i+1}"></button>`).join('');
}
function startSlider(){
  clearInterval(timer);
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  timer = setInterval(() => { slide = (slide + 1) % reviews.length; renderReview(); }, 7000);
}

/* ---------- Global events ---------- */
document.addEventListener('click', e => {
  const b = e.target.closest('button'); if(!b) return;
  const d = b.dataset;
  if(d.add){ change(+d.add, 1); if(!b.hasAttribute('data-close')) openCart(); else openCart(); }
  if(d.detail) openDetail(+d.detail);
  if(d.wish) toggleWish(+d.wish);
  if(d.tip) openTip(+d.tip);
  if(d.gal){ const tr = b.closest('.gal').querySelector('.gal-track'); tr.scrollBy({left: +d.gal * tr.clientWidth, behavior:'smooth'}); }
  if(d.inc) change(+d.inc, 1);
  if(d.dec) change(+d.dec, -1);
  if(d.remove){ cart = cart.filter(i => i.id !== +d.remove); save(); renderCart(); }
  if(d.dot){ slide = +d.dot; renderReview(); startSlider(); }
  if(b.hasAttribute('data-close')) b.closest('dialog')?.close();
});
document.querySelectorAll('dialog').forEach(dlg => dlg.addEventListener('click', e => { if(e.target === dlg) dlg.close(); }));
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeCart(); });

$('menuToggle').onclick = () => { const o = $('navLinks').classList.toggle('open'); $('menuToggle').setAttribute('aria-expanded', o); };
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const target = document.querySelector(a.getAttribute('href')); if(!target) return;
  e.preventDefault();
  target.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  $('navLinks').classList.remove('open');
}));
$('toTop').onclick = () => window.scrollTo({top:0, behavior:'smooth'});
addEventListener('scroll', () => $('toTop').classList.toggle('show', scrollY > 600), {passive:true});

$('newsForm').addEventListener('submit', e => {
  e.preventDefault();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($('email').value.trim());
  $('formMsg').textContent = ok ? t('email_ok') : t('email_bad');
  if(ok) $('newsForm').reset();
});

$('year').textContent = new Date().getFullYear();

/* ---------- Light / Dark theme ---------- */
function setTheme(mode){
  document.documentElement.setAttribute('data-theme', mode);
  $('themeBtn').firstElementChild.textContent = mode === 'dark' ? '☀️' : '🌙';
  const m = document.querySelector('meta[name="theme-color"]');
  if(m) m.setAttribute('content', mode === 'dark' ? '#0A210F' : '#14591D');
}
$('themeBtn').onclick = () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(next); store.set('theme', next);
};
setTheme(document.documentElement.getAttribute('data-theme') || 'light');

/* ---------- Currency, wishlist, sort, tips ---------- */
function updateCur(){
  $('curBtn').textContent = cur === 'USD' ? '៛' : '$';
  $('curBtn').setAttribute('aria-label', cur === 'USD' ? 'Show prices in Riel' : 'Show prices in US dollars');
}
$('curBtn').onclick = () => { cur = cur === 'USD' ? 'KHR' : 'USD'; store.set('cur', cur); updateCur(); renderProducts(); renderCart(); };
$('sort').onchange = e => { sortBy = e.target.value; renderProducts(); };
function toggleWish(id){ wish = wish.includes(id) ? wish.filter(x => x !== id) : [...wish, id]; store.set('wish', wish); renderProducts(); }
function renderTips(){
  $('tipGrid').innerHTML = tips.map((x, i) => `<article class="tip"><div class="tip-ic">${x.icon}</div><h3>${x[lang].t}</h3>
    <p>${x[lang].b.split(/(?<=[.។])\s*/)[0]}</p><button class="btn ghost small" data-tip="${i}">${t('read')}</button></article>`).join('');
}
document.querySelectorAll('.track-link').forEach(a => a.addEventListener('click', e => { e.preventDefault(); $('navLinks').classList.remove('open'); openTrack(); }));
cart = cart.filter(i => find(i.id));
if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
applyLang(); startSlider();
