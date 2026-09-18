import json

with open('/home/speedlo/Projects/saudi-telecom-packages/packages.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

json_str = json.dumps(db, ensure_ascii=False)

app_js_content = f"""/**
 * Saudi Telecom Packages Interactive Application
 * Logic, State Management, Filters, and Side-by-Side Comparator
 */

const DB = {json_str};

const state = {{
  lang: 'ar',
  searchQuery: '',
  network: 'all',
  provider: 'all',
  maxPrice: 450,
  sortBy: 'gen-desc',
  activePreset: 'all',
  filterVowifiOnly: false,
  filterRolloverOnly: false,
  filterPureGeneralOnly: false,
  pinnedPackages: [], // Array of pkg unique keys
  calcGeneralGB: 30,
  calcBudget: 120
}};

// Language Dictionaries
const i18n = {{
  ar: {{
    appTitle: "دليل ومقارنة باقات الاتصالات السعودية",
    appSubtitle: "مقارنة شاملة لجميع المشغلين الرسميين مع كشف الشروط المخفية (وحدة الحساب 100KB، مكالمات الواي فاي، خنق السرعة FUP)",
    searchPlaceholder: "ابحث باسم الباقة، المشغل، أو الرمز...",
    calcToggle: "⚡ حاسبة الباقة الأنسب لاحتياجك",
    calcTitle: "حاسبة التوصية الذكية:",
    calcDesc: "حدد احتياجك من النت العام وميزانيتك لنقترح لك أفضل وأوفر باقة فوراً:",
    calcGenLabel: "البيانات العامة المطلوبة:",
    calcBudgetLabel: "أقصى ميزانية شهرية:",
    bestMatchLabel: "🏆 الباقة المقترحة الأنسب لك:",
    networkLabel: "الشبكة الرئيسية (Host Network)",
    providerLabel: "المشغل (Provider)",
    sortLabel: "الترتيب حسب (Sort By)",
    maxPriceLabel: "الحد الأقصى للسعر:",
    sarCurrency: "ريال",
    vatInclusive: "شامل الضريبة 15%",
    genDataLabel: "البيانات العامة:",
    socDataLabel: "بيانات السوشيال:",
    callsLabel: "المكالمات المحلية:",
    costPerGbLabel: "تكلفة الجيجا العام:",
    vowifiSupported: "✅ مكالمات واي فاي",
    vowifiNotSupported: "❌ بدون VoWiFi",
    rolloverSupported: "🔄 ترحيل الرصيد",
    unlimSocialBadge: "🚀 سوشيال مفتوح",
    pinToCompare: "تثبيت للمقارنة",
    pinned: "مثبتة بالمقارنة",
    hiddenTermsBtn: "🔍 كشف الشروط المخفية وتفاصيل الاستخدام",
    meteringBlockLabel: "وحدة حساب البيانات:",
    vowifiDetailLabel: "مكالمات الواي فاي:",
    hotspotDetailLabel: "الهوتسبوت وبث النت:",
    throttlingDetailLabel: "خنق السرعة FUP:",
    dockCompareText: "باقة محددة للمقارنة",
    dockBtnCompare: "عرض المقارنة الشاملة ➔",
    dockBtnClear: "إلغاء التحديد",
    modalTitle: "جدول المقارنة المباشرة وجهاً لوجه",
    modalSubtitle: "مقارنة دقيقة بين الباقات المحددة تشمل كافة الشروط الفنية والتسعيرية",
    emptyPinnedMsg: "يرجى تحديد باقتين على الأقل للبدء في المقارنة المباشرة!",
    sortGenDesc: "البيانات العامة (من الأعلى للأقل)",
    sortPriceAsc: "السعر (من الأقل للأعلى)",
    sortCostGenAsc: "تكلفة جيجا النت العام (الأوفر)",
    sortTotalDesc: "إجمالي البيانات (العامة + السوشيال)",
    sortCallsDesc: "دقائق المكالمات (الأعلى)"
  }},
  en: {{
    appTitle: "Saudi Telecom Prepaid Packages Comparator",
    appSubtitle: "Comprehensive side-by-side comparison across all operators revealing hidden terms (100KB metering block, VoWiFi, Throttling FUP)",
    searchPlaceholder: "Search by package name, operator, or code...",
    calcToggle: "⚡ Smart Usage Calculator",
    calcTitle: "Smart Recommendation Tool:",
    calcDesc: "Set your required general data and budget to find your ideal package:",
    calcGenLabel: "Required General Data:",
    calcBudgetLabel: "Max Monthly Budget:",
    bestMatchLabel: "🏆 Best Recommended Match:",
    networkLabel: "Host Network",
    providerLabel: "Provider / Operator",
    sortLabel: "Sort By",
    maxPriceLabel: "Max Price:",
    sarCurrency: "SAR",
    vatInclusive: "incl. 15% VAT",
    genDataLabel: "General Data:",
    socDataLabel: "Social Data:",
    callsLabel: "Local Minutes:",
    costPerGbLabel: "Cost / General GB:",
    vowifiSupported: "✅ VoWiFi Supported",
    vowifiNotSupported: "❌ No VoWiFi",
    rolloverSupported: "🔄 Data Rollover",
    unlimSocialBadge: "🚀 Unlimited Social",
    pinToCompare: "Pin to compare",
    pinned: "Pinned",
    hiddenTermsBtn: "🔍 Reveal Hidden Terms & Metering Rules",
    meteringBlockLabel: "Data Metering Block:",
    vowifiDetailLabel: "WiFi Calling:",
    hotspotDetailLabel: "Hotspot & Tethering:",
    throttlingDetailLabel: "Throttling FUP:",
    dockCompareText: "package(s) selected",
    dockBtnCompare: "Compare Now ➔",
    dockBtnClear: "Clear All",
    modalTitle: "Direct Side-by-Side Comparison Matrix",
    modalSubtitle: "In-depth side-by-side comparison contrasting pricing, allowances, and regulatory conditions",
    emptyPinnedMsg: "Please pin at least 2 packages to compare!",
    sortGenDesc: "General Data (Highest First)",
    sortPriceAsc: "Price (Lowest First)",
    sortCostGenAsc: "Cost per General GB (Best Value)",
    sortTotalDesc: "Total Data (General + Social)",
    sortCallsDesc: "Voice Minutes (Highest)"
  }}
}};

function t(key) {{
  return i18n[state.lang][key] || key;
}}

function toggleLang() {{
  state.lang = state.lang === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  updateUIText();
  render();
}}

function updateUIText() {{
  document.getElementById('txt-title').innerText = t('appTitle');
  document.getElementById('txt-subtitle').innerText = t('appSubtitle');
  document.getElementById('main-search').placeholder = t('searchPlaceholder');
  document.getElementById('btn-calc-toggle').innerHTML = `<span>${{t('calcToggle')}}</span>`;
  document.getElementById('lbl-network').innerText = t('networkLabel');
  document.getElementById('lbl-provider').innerText = t('providerLabel');
  document.getElementById('lbl-sort').innerText = t('sortLabel');
  document.getElementById('lbl-max-price').innerText = t('maxPriceLabel');
}}

// Presets
function applyPreset(presetName) {{
  state.activePreset = presetName;
  document.querySelectorAll('.preset-pill').forEach(el => {{
    el.classList.toggle('active', el.dataset.preset === presetName);
  }});

  // Reset basic filters
  state.network = 'all';
  state.provider = 'all';
  state.filterVowifiOnly = false;
  state.filterRolloverOnly = false;
  state.filterPureGeneralOnly = false;
  state.maxPrice = 450;
  state.sortBy = 'gen-desc';

  if (presetName === '70-115') {{
    state.maxPrice = 115;
    state.sortBy = 'gen-desc';
  }} else if (presetName === 'pure-gen') {{
    state.filterPureGeneralOnly = true;
    state.sortBy = 'gen-desc';
  }} else if (presetName === 'stc-net') {{
    state.network = 'stc';
  }} else if (presetName === 'mobily-net') {{
    state.network = 'mobily';
  }} else if (presetName === 'zain-net') {{
    state.network = 'zain';
  }} else if (presetName === 'rollover') {{
    state.filterRolloverOnly = true;
  }} else if (presetName === 'vowifi') {{
    state.filterVowifiOnly = true;
  }}

  syncFilterInputs();
  render();
}}

function syncFilterInputs() {{
  document.getElementById('filter-network').value = state.network;
  document.getElementById('filter-provider').value = state.provider;
  document.getElementById('filter-sort').value = state.sortBy;
  document.getElementById('price-slider').value = state.maxPrice;
  document.getElementById('price-disp').innerText = state.maxPrice;
  document.getElementById('chk-vowifi').checked = state.filterVowifiOnly;
  document.getElementById('chk-rollover').checked = state.filterRolloverOnly;
  document.getElementById('chk-pure-gen').checked = state.filterPureGeneralOnly;
}}

// Pinning & Comparison
function togglePin(pkgId) {{
  const idx = state.pinnedPackages.indexOf(pkgId);
  if (idx > -1) {{
    state.pinnedPackages.splice(idx, 1);
  }} else {{
    if (state.pinnedPackages.length >= 4) {{
      alert(state.lang === 'ar' ? 'يمكنك مقارنة 4 باقات كحد أقصى في نفس الوقت!' : 'You can compare up to 4 packages at a time!');
      return;
    }}
    state.pinnedPackages.push(pkgId);
  }}
  updateComparisonDock();
  render();
}}

function clearPinned() {{
  state.pinnedPackages = [];
  updateComparisonDock();
  render();
}}

function updateComparisonDock() {{
  const dock = document.getElementById('comparison-dock');
  const count = state.pinnedPackages.length;
  if (count > 0) {{
    dock.classList.add('visible');
    document.getElementById('dock-count-text').innerText = `${{count}} ${{t('dockCompareText')}}`;
  }} else {{
    dock.classList.remove('visible');
  }}
}}

// Smart Calculator
function toggleCalculator() {{
  const panel = document.getElementById('calculator-panel');
  panel.classList.toggle('active');
  updateCalculatorResult();
}}

function updateCalculatorResult() {{
  const reqGen = parseInt(document.getElementById('calc-gen-slider').value);
  const maxBud = parseInt(document.getElementById('calc-bud-slider').value);
  document.getElementById('disp-calc-gen').innerText = `${{reqGen}} GB`;
  document.getElementById('disp-calc-bud').innerText = `${{maxBud}} SAR`;

  let matches = [];
  DB.providers.forEach(p => {{
    p.packages.forEach(pkg => {{
      if (pkg.price_vat <= maxBud && pkg.general_data_gb >= reqGen) {{
        matches.push({{ provider: p, pkg: pkg }});
      }}
    }});
  }});

  const resultBox = document.getElementById('calc-result-content');
  if (matches.length > 0) {{
    // sort by price lowest first
    matches.sort((a, b) => a.pkg.price_vat - b.pkg.price_vat);
    const best = matches[0];
    const isAr = state.lang === 'ar';
    resultBox.innerHTML = `
      <div style="font-weight:800; font-size:1.1rem; color:var(--emerald); margin-bottom:4px;">
        ${{isAr ? best.pkg.name_ar : best.pkg.name_en}} (${{isAr ? best.provider.name_ar : best.provider.name_en}})
      </div>
      <div style="font-size:0.9rem; color:#cbd5e1;">
        ${{best.pkg.price_vat.toFixed(2)}} ${{t('sarCurrency')}} | ${{best.pkg.general_data_gb}} GB ${{t('genDataLabel')}} | ${{best.pkg.special_perks_ar}}
      </div>
    `;
  }} else {{
    resultBox.innerHTML = `
      <div style="color:var(--amber); font-size:0.9rem;">
        ${{state.lang === 'ar' ? 'لا توجد باقة مطابقة تماماً للميزانية، جرب زيادة الميزانية قليلاً.' : 'No package matches this exact criteria. Try adjusting budget.'}}
      </div>
    `;
  }}
}}

// Modal Side-by-Side Comparison
function openComparisonModal() {{
  if (state.pinnedPackages.length < 2) {{
    alert(t('emptyPinnedMsg'));
    return;
  }}

  const modal = document.getElementById('comparison-modal');
  modal.classList.add('open');

  const container = document.getElementById('modal-matrix-container');
  const pinnedObjs = [];

  DB.providers.forEach(p => {{
    p.packages.forEach(pkg => {{
      const uid = `${{p.id}}_${{pkg.name_en.replace(/\\s+/g, '_')}}`;
      if (state.pinnedPackages.includes(uid)) {{
        pinnedObjs.push({{ provider: p, pkg: pkg, uid: uid }});
      }}
    }});
  }});

  const isAr = state.lang === 'ar';
  let html = `
    <table class="comparison-matrix-table">
      <thead>
        <tr>
          <th style="width:200px;">${{isAr ? 'المعيار / البند' : 'Criteria / Feature'}}</th>
          ${{pinnedObjs.map(item => `
            <th style="min-width:220px; text-align:center;">
              <div style="font-size:0.8rem; color:var(--cyan);">${{isAr ? item.provider.name_ar : item.provider.name_en}}</div>
              <div style="font-size:1.15rem; font-weight:800; color:#fff;">${{isAr ? item.pkg.name_ar : item.pkg.name_en}}</div>
            </th>
          `).join('')}}
        </tr>
      </thead>
      <tbody>
        <tr class="highlight-row">
          <td><strong>${{isAr ? 'السعر شامل الضريبة (15%)' : 'Price (incl. 15% VAT)'}}</strong></td>
          ${{pinnedObjs.map(i => `<td style="text-align:center; font-size:1.2rem; color:var(--emerald); font-weight:800;">${{i.pkg.price_vat.toFixed(2)}} ${{t('sarCurrency')}}</td>`).join('')}}
        </tr>
        <tr>
          <td><strong>${{isAr ? 'البيانات العامة (إنترنت مفتوح)' : 'General Data (Unrestricted)'}}</strong></td>
          ${{pinnedObjs.map(i => `<td style="text-align:center; font-weight:700; color:var(--cyan); font-size:1.1rem;">${{i.pkg.general_data_gb >= 9999 ? (isAr ? 'لا محدود' : 'Unlimited') : i.pkg.general_data_gb + ' GB'}}</td>`).join('')}}
        </tr>
        <tr>
          <td><strong>${{isAr ? 'بيانات السوشيال ميديا' : 'Social Media Data'}}</strong></td>
          ${{pinnedObjs.map(i => `<td style="text-align:center;">${{i.pkg.unlimited_social ? '<span style=\"color:var(--amber); font-weight:700;\">🚀 ' + (isAr ? 'لا محدود' : 'Unlimited') + '</span>' : (i.pkg.social_data_gb > 0 ? i.pkg.social_data_gb + ' GB' : '-')}}</td>`).join('')}}
        </tr>
        <tr>
          <td><strong>${{isAr ? 'المكالمات المحلية' : 'Local Voice Minutes'}}</strong></td>
          ${{pinnedObjs.map(i => `<td style="text-align:center;">${{i.pkg.local_minutes >= 9999 ? (isAr ? 'لا محدود' : 'Unlimited') : i.pkg.local_minutes + ' ' + (isAr ? 'دقيقة' : 'mins')}}</td>`).join('')}}
        </tr>
        <tr>
          <td><strong>${{isAr ? 'تكلفة الجيجا العام الصافي' : 'Cost per General GB'}}</strong></td>
          ${{pinnedObjs.map(i => `<td style="text-align:center; font-weight:700;">${{i.pkg.general_data_gb > 0 && i.pkg.general_data_gb < 9999 ? (i.pkg.price_vat / i.pkg.general_data_gb).toFixed(2) + ' ' + t('sarCurrency') + '/GB' : '-'}}</td>`).join('')}}
        </tr>
        <tr>
          <td><strong>${{isAr ? 'فترة الصلاحية' : 'Validity Period'}}</strong></td>
          ${{pinnedObjs.map(i => `<td style="text-align:center;">${{i.pkg.validity_days}} ${{isAr ? 'يوم' : 'days'}}</td>`).join('')}}
        </tr>
        <tr style="background:rgba(255,255,255,0.02);">
          <td><strong>${{isAr ? 'مكالمات الواي فاي (VoWiFi)' : 'WiFi Calling (VoWiFi)'}}</strong></td>
          ${{pinnedObjs.map(i => `<td style="text-align:center;">${{i.provider.hidden_conditions.vowifi_supported ? '✅ ' + (isAr ? 'مدعومة' : 'Supported') : '❌ ' + (isAr ? 'غير معتمدة' : 'Not Supported')}}</td>`).join('')}}
        </tr>
        <tr>
          <td><strong>${{isAr ? 'وحدة احتساب النت' : 'Data Metering Block'}}</strong></td>
          ${{pinnedObjs.map(i => `<td style="text-align:center; font-size:0.85rem;">${{i.provider.hidden_conditions.metering_block_data}}</td>`).join('')}}
        </tr>
        <tr>
          <td><strong>${{isAr ? 'ترحيل الرصيد (Rollover)' : 'Data Rollover'}}</strong></td>
          ${{pinnedObjs.map(i => `<td style="text-align:center;">${{i.provider.hidden_conditions.data_rollover ? '✅ ' + (isAr ? 'مدعوم' : 'Supported') : '❌ ' + (isAr ? 'ينتهي بانتهاء الباقة' : 'Expires')}}</td>`).join('')}}
        </tr>
        <tr>
          <td><strong>${{isAr ? 'سياسة الهوتسبوت وبث النت' : 'Hotspot & Tethering Policy'}}</strong></td>
          ${{pinnedObjs.map(i => `<td style="text-align:center; font-size:0.82rem; color:var(--text-secondary);">${{i.provider.hidden_conditions.hotspot_policy}}</td>`).join('')}}
        </tr>
        <tr>
          <td><strong>${{isAr ? 'خنق السرعة FUP' : 'Throttling / FUP'}}</strong></td>
          ${{pinnedObjs.map(i => `<td style="text-align:center; font-size:0.82rem; color:var(--text-secondary);">${{i.provider.hidden_conditions.throttling_fup}}</td>`).join('')}}
        </tr>
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}}

function closeComparisonModal() {{
  document.getElementById('comparison-modal').classList.remove('open');
}}

// Main Render Function
function render() {{
  const query = state.searchQuery.toLowerCase().trim();
  let list = [];

  DB.providers.forEach(p => {{
    if (state.network !== 'all' && !p.network.toLowerCase().includes(state.network)) return;
    if (state.provider !== 'all' && p.id !== state.provider) return;
    if (state.filterVowifiOnly && !p.hidden_conditions.vowifi_supported) return;
    if (state.filterRolloverOnly && !p.hidden_conditions.data_rollover) return;

    p.packages.forEach(pkg => {{
      if (pkg.price_vat > state.maxPrice) return;
      if (state.activePreset === '70-115' && (pkg.price_vat < 70 || pkg.price_vat > 115.01)) return;
      if (state.filterPureGeneralOnly && pkg.social_data_gb > 0) return;

      const uid = `${{p.id}}_${{pkg.name_en.replace(/\\s+/g, '_')}}`;

      // search query
      const matchText = `${{p.name_ar}} ${{p.name_en}} ${{pkg.name_ar}} ${{pkg.name_en}} ${{pkg.special_perks_ar}} ${{pkg.special_perks_en}}`.toLowerCase();
      if (query && !matchText.includes(query)) return;

      list.push({{
        provider: p,
        pkg: pkg,
        uid: uid
      }});
    }});
  }});

  // Sorting
  list.sort((a, b) => {{
    if (state.sortBy === 'gen-desc') {{
      return b.pkg.general_data_gb - a.pkg.general_data_gb;
    }} else if (state.sortBy === 'price-asc') {{
      return a.pkg.price_vat - b.pkg.price_vat;
    }} else if (state.sortBy === 'cost-gen-asc') {{
      const cA = a.pkg.general_data_gb > 0 ? a.pkg.price_vat / a.pkg.general_data_gb : 9999;
      const cB = b.pkg.general_data_gb > 0 ? b.pkg.price_vat / b.pkg.general_data_gb : 9999;
      return cA - cB;
    }} else if (state.sortBy === 'total-desc') {{
      const totA = a.pkg.general_data_gb + (a.pkg.unlimited_social ? 50 : a.pkg.social_data_gb);
      const totB = b.pkg.general_data_gb + (b.pkg.unlimited_social ? 50 : b.pkg.social_data_gb);
      return totB - totA;
    }} else if (state.sortBy === 'calls-desc') {{
      return b.pkg.local_minutes - a.pkg.local_minutes;
    }}
    return 0;
  }});

  const grid = document.getElementById('packages-grid');
  grid.innerHTML = '';

  const isAr = state.lang === 'ar';
  document.getElementById('results-count-text').innerText = isAr 
    ? `تم العثور على ${{list.length}} باقة مطابقة` 
    : `Found ${{list.length}} matching packages`;

  list.forEach((item, index) => {{
    const p = item.provider;
    const pkg = item.pkg;
    const uid = item.uid;
    const hc = p.hidden_conditions;
    const isPinned = state.pinnedPackages.includes(uid);

    let netClass = 'net-stc';
    if (p.network.toLowerCase().includes('mobily') || p.network.includes('موبايلي')) netClass = 'net-mobily';
    if (p.network.toLowerCase().includes('zain') || p.network.includes('زين')) netClass = 'net-zain';

    const card = document.createElement('div');
    card.className = 'package-card';
    if (state.activePreset === '70-115' && index === 0) {{
      card.classList.add('highlighted-match');
    }}

    // Bar percentages calculation
    const maxBarData = 100;
    const genWidth = Math.min(100, (pkg.general_data_gb / maxBarData) * 100);
    const socWidth = pkg.unlimited_social ? 50 : Math.min(100, (pkg.social_data_gb / maxBarData) * 100);

    const costGen = pkg.general_data_gb > 0 && pkg.general_data_gb < 9999
      ? (pkg.price_vat / pkg.general_data_gb).toFixed(2) + ' ' + (isAr ? 'ريال/GB' : 'SAR/GB')
      : (isAr ? 'غير محدود' : 'Unlimited');

    card.innerHTML = `
      <div>
        <div class="card-header-row">
          <span class="network-tag ${{netClass}}">${{p.network.split(' ')[0]}}</span>
          <button class="pin-btn ${{isPinned ? 'pinned' : ''}}" onclick="togglePin('${{uid}}')" title="${{isPinned ? t('pinned') : t('pinToCompare')}}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 17v5M9 2h6M12 2v7M5 7l7 7 7-7"/>
            </svg>
          </button>
        </div>

        <div class="provider-name">${{isAr ? p.name_ar : p.name_en}}</div>
        <h3 class="pkg-title">${{isAr ? pkg.name_ar : pkg.name_en}}</h3>

        <div class="price-strip">
          <span class="price-main">${{pkg.price_vat.toFixed(2)}}</span>
          <span class="price-sub">${{t('sarCurrency')}} / ${{pkg.validity_days}} ${{isAr ? 'يوم (' + t('vatInclusive') + ')' : 'days (' + t('vatInclusive') + ')'}}</span>
        </div>

        <div class="data-bars-container">
          <div class="metric-row">
            <span class="metric-label">${{t('genDataLabel')}}</span>
            <span class="metric-value metric-gen">${{pkg.general_data_gb >= 9999 ? (isAr ? 'لا محدود' : 'Unlimited') : pkg.general_data_gb + ' GB'}}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill-gen" style="width: ${{genWidth}}%;"></div>
          </div>

          <div class="metric-row">
            <span class="metric-label">${{t('socDataLabel')}}</span>
            <span class="metric-value metric-soc">${{pkg.unlimited_social ? (isAr ? '🚀 لا محدود' : '🚀 Unlimited') : (pkg.social_data_gb > 0 ? pkg.social_data_gb + ' GB' : (isAr ? '0 جيجا' : 'None'))}}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill-soc" style="width: ${{socWidth}}%;"></div>
          </div>

          <div class="metric-row" style="margin-top:10px; margin-bottom:0;">
            <span class="metric-label">${{t('callsLabel')}}</span>
            <span class="metric-value">${{pkg.local_minutes >= 9999 ? (isAr ? 'لا محدود' : 'Unlimited') : pkg.local_minutes + ' ' + (isAr ? 'دقيقة' : 'mins')}}</span>
          </div>
          <div class="metric-row" style="margin-bottom:0; font-size:0.82rem; margin-top:6px;">
            <span class="metric-label">${{t('costPerGbLabel')}}</span>
            <span class="metric-value" style="color:var(--cyan);">${{costGen}}</span>
          </div>
        </div>

        <div class="features-tags-row">
          <span class="badge-tag ${{hc.vowifi_supported ? 'badge-vowifi-yes' : 'badge-vowifi-no'}}">
            ${{hc.vowifi_supported ? t('vowifiSupported') : t('vowifiNotSupported')}}
          </span>
          ${{hc.data_rollover ? `<span class="badge-tag badge-rollover">${{t('rolloverSupported')}}</span>` : ''}}
          ${{pkg.unlimited_social ? `<span class="badge-tag badge-social">${{t('unlimSocialBadge')}}</span>` : ''}}
        </div>

        <div class="perks-snippet">
          ${{isAr ? pkg.special_perks_ar : pkg.special_perks_en}}
        </div>
      </div>

      <div>
        <button class="accordion-toggle" onclick="toggleCardAccordion('acc-${{index}}')">
          ${{t('hiddenTermsBtn')}}
        </button>
        <div class="accordion-body" id="acc-${{index}}">
          <ul>
            <li><strong>${{t('meteringBlockLabel')}}</strong> ${{hc.metering_block_data}}</li>
            <li><strong>${{t('vowifiDetailLabel')}}</strong> ${{hc.vowifi_notes}}</li>
            <li><strong>${{t('hotspotDetailLabel')}}</strong> ${{hc.hotspot_policy}}</li>
            <li><strong>${{t('throttlingDetailLabel')}}</strong> ${{hc.throttling_fup}}</li>
          </ul>
        </div>
      </div>
    `;

    grid.appendChild(card);
  }});
}}

function toggleCardAccordion(id) {{
  const el = document.getElementById(id);
  el.classList.toggle('open');
}}

// Initialize
document.addEventListener('DOMContentLoaded', () => {{
  // Search listener
  document.getElementById('main-search').addEventListener('input', (e) => {{
    state.searchQuery = e.target.value;
    render();
  }});

  // Filter dropdown listeners
  document.getElementById('filter-network').addEventListener('change', (e) => {{
    state.network = e.target.value;
    render();
  }});

  document.getElementById('filter-provider').addEventListener('change', (e) => {{
    state.provider = e.target.value;
    render();
  }});

  document.getElementById('filter-sort').addEventListener('change', (e) => {{
    state.sortBy = e.target.value;
    render();
  }});

  document.getElementById('price-slider').addEventListener('input', (e) => {{
    state.maxPrice = parseFloat(e.target.value);
    document.getElementById('price-disp').innerText = state.maxPrice;
    render();
  }});

  // Feature checkboxes
  document.getElementById('chk-vowifi').addEventListener('change', (e) => {{
    state.filterVowifiOnly = e.target.checked;
    render();
  }});

  document.getElementById('chk-rollover').addEventListener('change', (e) => {{
    state.filterRolloverOnly = e.target.checked;
    render();
  }});

  document.getElementById('chk-pure-gen').addEventListener('change', (e) => {{
    state.filterPureGeneralOnly = e.target.checked;
    render();
  }});

  // Calculator sliders
  document.getElementById('calc-gen-slider').addEventListener('input', updateCalculatorResult);
  document.getElementById('calc-bud-slider').addEventListener('input', updateCalculatorResult);

  // Close modal on backdrop click
  document.getElementById('comparison-modal').addEventListener('click', (e) => {{
    if (e.target.id === 'comparison-modal') closeComparisonModal();
  }});

  // Close modal on ESC key
  document.addEventListener('keydown', (e) => {{
    if (e.key === 'Escape') closeComparisonModal();
  }});

  // First render
  updateUIText();
  render();
}});
"""

with open('/home/speedlo/Projects/saudi-telecom-packages/app.js', 'w', encoding='utf-8') as f:
    f.write(app_js_content)

print("Generated app.js successfully!")
