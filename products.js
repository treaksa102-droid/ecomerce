/* Shared product data. Edit here, or use admin.html > Download products.js */
const DEFAULT_PRODUCTS = [
  {id:1, cat:'body', icon:'🧼', tone:'#E1E289', price:4.5, old:null, img:'',
   en:{n:'Lemongrass Soap', d:'Cold-process bar with coconut oil.', i:'Coconut oil, shea butter, lemongrass essential oil, saponified lye.', u:'Lather in wet hands, wash, rinse. Keep dry between uses.'},
   km:{n:'សាប៊ូស្លឹកគ្រៃ', d:'សាប៊ូធ្វើដោយវិធីត្រជាក់ មានប្រេងដូង។', i:'ប្រេងដូង ប៊ឺរស៊ី ប្រេងស្លឹកគ្រៃ និងសូដកាស៊ីក (ប្រែក្លាយជាសាប៊ូទាំងស្រុង)។', u:'ត្រដុសជាមួយទឹកនៅលើដៃ លាងខ្លួន ហើយសម្អាតចេញ។ រក្សាឲ្យស្ងួតក្រោយប្រើ។'}},
  {id:2, cat:'body', icon:'🧴', tone:'#ACD2ED', price:12, old:15, sale:true, img:'',
   en:{n:'Shea Body Cream', d:'Rich, fragrance-free daily moisture.', i:'Shea butter, jojoba oil, aloe vera, vitamin E.', u:'Massage a small amount into clean skin once or twice a day.'},
   km:{n:'ឡេប៊ឺរស៊ី', d:'ឡេទទឹកស្បែកប្រចាំថ្ងៃ គ្មានក្លិនបន្ថែម។', i:'ប៊ឺរស៊ី ប្រេងជូជូបា អាឡូវេរ៉ា និងវីតាមីន E។', u:'ម៉ាស្សាបរិមាណតិចលើស្បែកស្អាត ម្តងឬពីរដងក្នុងមួយថ្ងៃ។'}},
  {id:3, cat:'food', icon:'🫒', tone:'#99AA38', price:14.9, old:null, img:'',
   en:{n:'Olive Oil', d:'Cold-pressed extra virgin, 500 ml.', i:'100% cold-pressed extra virgin olive oil.', u:'Drizzle on salads, bread or cooked dishes. Store away from light.'},
   km:{n:'ប្រេងអូលីវ', d:'ច្របាច់ត្រជាក់ ៥០០ មីលីលីត្រ។', i:'ប្រេងអូលីវ Extra Virgin ច្របាច់ត្រជាក់ ១០០%។', u:'ចាក់លើសាឡាដ នំបុ័ង ឬម្ហូបចម្អិន។ រក្សាទុកឲ្យឆ្ងាយពីពន្លឺ។'}},
  {id:4, cat:'food', icon:'🍵', tone:'#E1E289', price:7.25, old:null, img:'',
   en:{n:'Jasmine Green Tea', d:'Loose leaf, 100 g in a paper tin.', i:'Green tea leaves, dried jasmine flowers.', u:'Steep 1 teaspoon in 80°C water for 3 minutes.'},
   km:{n:'តែបៃតងម្លិះ', d:'តែស្លឹក ១០០ ក្រាម ក្នុងប្រអប់ក្រដាស។', i:'ស្លឹកតែបៃតង និងផ្កាម្លិះស្ងួត។', u:'ត្រាំ ១ ស្លាបព្រាកាហ្វេ ក្នុងទឹក ៨០°C រយៈពេល ៣ នាទី។'}},
  {id:5, cat:'food', icon:'🍯', tone:'#ACD2ED', price:9.5, old:null, img:'',
   en:{n:'Raw Honey', d:'Raw and unfiltered, 250 g jar.', i:'Unfiltered raw honey from local beekeepers.', u:'Stir into tea, spread on toast or enjoy by the spoon.'},
   km:{n:'ទឹកឃ្មុំសុទ្ធ', d:'ទឹកឃ្មុំសុទ្ធ ដប ២៥០ ក្រាម។', i:'ទឹកឃ្មុំសុទ្ធមិនបានច្រោះ ពីអ្នកចិញ្ចឹមឃ្មុំក្នុងស្រុក។', u:'លាយក្នុងតែ លាបនំបុ័ង ឬញ៉ាំជាមួយស្លាបព្រា។'}},
  {id:6, cat:'body', icon:'🪥', tone:'#99AA38', price:2.5, old:null, img:'',
   en:{n:'Bamboo Toothbrush', d:'Plastic-free handle, soft bristles.', i:'Bamboo handle, plant-based bristles.', u:'Replace every 3 months and compost the handle.'},
   km:{n:'ច្រាសដុសធ្មេញឫស្សី', d:'ដងគ្មានផ្លាស្ទិច រោមទន់។', i:'ដងឫស្សី រោមច្រាសធ្វើពីរុក្ខជាតិ។', u:'ប្តូរគ្រប់ ៣ ខែ ហើយយកដងទៅធ្វើជីកំប៉ុស។'}}
];
DEFAULT_PRODUCTS.forEach(p => { if(p.stock === undefined) p.stock = p.id === 5 ? 0 : 20; if(!p.rating) p.rating = {r:4.8, n:8 + p.id * 3}; if(!p.imgs) p.imgs = []; });
