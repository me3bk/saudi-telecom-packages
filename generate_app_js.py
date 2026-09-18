import json

with open('/home/speedlo/Projects/saudi-telecom-packages/packages.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

json_data_str = json.dumps(db, ensure_ascii=False)

template = """/**
 * Saudi Telecom Packages Platform
 * Modern Interactive Table & Cards Comparison Engine
 * Full Prepaid & Postpaid Dual-Mode with CST Regulatory Contract Transparency
 */

const DB = __DB_PLACEHOLDER__;

const state = {
  lang: 'ar',
  viewMode: (typeof window !== 'undefined' && window.innerWidth <= 768) ? 'cards' : 'table', // auto default to cards on mobile
  packageType: 'all', // 'all' | 'prepaid' | 'postpaid'
  searchQuery: '',
  network: 'all',    // 'all' | 'stc' | 'mobily' | 'zain'
  provider: 'all',   // 'all' | 'stc' | 'jawwy' | 'virgin' | 'mobily' | 'lebara' | 'zain' | 'yaqoot' | 'salam' | 'redbull'
  minPrice: 0,
  maxPrice: 950,
  sortBy: 'minutes-desc', // minutes-desc, minutes-asc, gen-desc, gen-asc, sms-desc, sms-asc, price-asc, price-desc, cost-gen-asc, total-desc, validity-desc
  activePreset: 'all',
  filterVowifiOnly: false,
  filterRolloverOnly: false,
  filterPureGeneralOnly: false,
  filterMultiSimOnly: false,
  filterRoamingOnly: false,
  filterDeviceSubsidyOnly: false,
  pinnedPackages: [],
  calcGeneralGB: 30,
  calcBudget: 120
};

// Internationalization Dictionary
const i18n = {
  ar: {
    appTitle: "دليل ومقارنة باقات الاتصالات السعودية",
    appSubtitle: "منصة المقارنة الذكية الشاملة لجميع مشغلي الاتصالات الرسميين في المملكة لباقات مسبق الدفع والمفوتر، مع كشف الشروط الفنية وعقود الالتزام وغرامات الإلغاء المبكر وفق لوائح هيئة الاتصالات والفضاء والتقنية (CST).",
    cstBadge: "مطابق للوائح هيئة الاتصالات والفضاء والتقنية (CST)",
    searchPlaceholder: "ابحث باسم الباقة، المشغل، السعر، أو الرمز...",
    viewTable: "📊 جدول المقارنة الفوري",
    viewCards: "🎴 بطاقات تفاعلية",
    calcToggle: "⚡ حاسبة الباقة الأنسب",
    cstGuideToggle: "⚖️ دليل عقود المفوتر ولوائح CST",
    calcTitle: "🎯 أداة تحديد الباقة الذكية والموفرة حسب استهلاكك الفعلي",
    calcGenLabel: "البيانات العامة المطلوبة:",
    calcBudgetLabel: "أقصى ميزانية شهرية:",
    calcResultTitle: "الباقة المقترحة الأوفر لك:",
    networkTitle: "الشبكة الرئيسية (Host Network)",
    pkgTypeTitle: "نوع الفوترة (Billing Type)",
    pkgTypeAll: "🌟 جميع الباقات (الكل)",
    pkgTypePrepaid: "⚡ مسبق الدفع (Prepaid)",
    pkgTypePostpaid: "💳 المفوتر والفواتير (Postpaid)",
    netAll: "جميع الشبكات (الكل)",
    netStc: "شبكة stc (سوا، جوّي، فيرجن)",
    netMobily: "شبكة موبايلي (موبايلي، ليبارا)",
    netZain: "شبكة زين (زين، ياقوت، سلام، ريد بُل)",
    presetAll: "🌟 عرض الكل",
    preset70_115: "🎯 فئة 70 - 115 ريال (مسبق الدفع)",
    presetPostpaidPopular: "💎 باقات المفوتر الأكثر طلباً",
    presetMultiSim: "📱 باقات تدعم شرائح متعددة",
    presetRoaming: "✈️ باقات تشمل تجوال دولي",
    presetUnder70: "🟢 باقات اقتصادية (< 70 ريال)",
    preset70_150: "🟡 فئة متوسطة (70 - 150 ريال)",
    presetAbove150: "🟣 باقات مميزة (+150 ريال)",
    presetPureGen: "🌐 إنترنت عام صافي فقط",
    presetVowifi: "📶 تدعم مكالمات واي فاي (VoWiFi)",
    presetRollover: "🔄 تدعم ترحيل البيانات",
    lblProvider: "المشغل المحدد (Specific Operator)",
    lblSort: "الترتيب الرئيسي (Sort By)",
    lblMaxPrice: "الحد الأقصى للسعر:",
    chkVoWiFi: "مكالمات الواي فاي معتمدة (VoWiFi)",
    chkRollover: "ترحيل الرصيد غير المستهلك (Data Rollover)",
    chkPureGen: "إنترنت عام صافي فقط (بدون سوشيال مقيد)",
    chkMultiSim: "تدعم شرائح متعددة (Multi-SIM)",
    chkRoaming: "تشمل تجوال دولي (Roaming)",
    chkDevice: "تدعم تقسيط وخصم أجهزة (Device Subsidy)",
    quickSortTitle: "⚡ ترتيب فوري بنقرة واحدة:",
    sortMinsDesc: "📞 المكالمات (الأكثر)",
    sortGenDesc: "🌐 النت العام (الأعلى)",
    sortSmsDesc: "✉️ الرسائل SMS (الأكثر)",
    sortPriceAsc: "💰 السعر (الأرخص)",
    sortCostAsc: "💡 تكلفة الجيجا (الأوفر)",
    sortValDesc: "⏳ الصلاحية (الأطول)",
    thProvider: "المشغل والشبكة",
    thName: "اسم الباقة ونوعها",
    thPrice: "السعر شامل الضريبة (15%)",
    thGen: "البيانات العامة (GB)",
    thSoc: "بيانات السوشيال",
    thMins: "المكالمات (دقيقة)",
    thSms: "الرسائل (SMS)",
    thCost: "تكلفة الجيجا",
    thVal: "نوع الفوترة / الصلاحية",
    thVoWiFi: "WiFi Calling",
    thRollover: "ترحيل الرصيد",
    thPin: "مقارنة 📌",
    sar: "ريال",
    day: "يوم",
    days: "يوم",
    minText: "دقيقة",
    smsText: "رسالة",
    unlimited: "لا محدود 🚀",
    unlimitedText: "لا محدود",
    sarPerGb: "ريال/GB",
    pinned: "مثبتة",
    pinToCompare: "تثبيت للمقارنة",
    supported: "مدعوم ✅",
    notSupported: "غير معتمد ❌",
    dockCountLabel: "باقة محددة للمقارنة",
    dockBtnCompare: "عرض المقارنة الشاملة ➔",
    modalTitle: "مقارنة الباقات وجهاً لوجه (Side-by-Side)",
    modalSubtitle: "مقارنة تفصيلية دقيقة تشمل كافة الأسعار، توزيع البيانات، المكالمات، الرسائل، الشروط التقنية، وعقود الالتزام وغرامات الإلغاء وفق لوائح CST",
    hiddenTermsBtn: "🔍 تفاصيل الشروط المخفية والفنية وعقود CST",
    resetFilters: "🔄 إعادة ضبط الفلاتر",
    foundResults: "تم العثور على",
    mobileTableHint: "اسحب الجدول أفقياً للاطلاع على كافة الأعمدة والتفاصيل",
    postpaidTag: "مفوتر",
    prepaidTag: "مسبق الدفع"
  },
  en: {
    appTitle: "Saudi Telecom Packages Comparator (Prepaid & Postpaid)",
    appSubtitle: "Comprehensive comparison across all 9 Saudi telecom operators uncovering technical specs, contract commitments, and early cancellation fees under CST regulations.",
    cstBadge: "Compliant with CST Regulations (Saudi Telecom Authority)",
    searchPlaceholder: "Search by package name, operator, price, or code...",
    viewTable: "📊 Sortable Matrix Table",
    viewCards: "🎴 Interactive Cards",
    calcToggle: "⚡ Smart Package Finder",
    cstGuideToggle: "⚖️ Postpaid Contracts & CST Guide",
    calcTitle: "🎯 Smart Value Recommendation Tool based on your actual usage",
    calcGenLabel: "Required General Data:",
    calcBudgetLabel: "Maximum Monthly Budget:",
    calcResultTitle: "Best Recommended Value Plan:",
    networkTitle: "Host Network",
    pkgTypeTitle: "Billing Type",
    pkgTypeAll: "🌟 All Packages (All)",
    pkgTypePrepaid: "⚡ Prepaid Only",
    pkgTypePostpaid: "💳 Postpaid Only",
    netAll: "All Networks (All)",
    netStc: "stc Network (Sawa, Jawwy, Virgin)",
    netMobily: "Mobily Network (Mobily, Lebara)",
    netZain: "Zain Network (Zain, Yaqoot, Salam, Red Bull)",
    presetAll: "🌟 Show All",
    preset70_115: "🎯 70 - 115 SAR Tier (Prepaid)",
    presetPostpaidPopular: "💎 Popular Postpaid Plans",
    presetMultiSim: "📱 Multi-SIM Plans",
    presetRoaming: "✈️ Plans with Roaming",
    presetUnder70: "🟢 Budget Plans (< 70 SAR)",
    preset70_150: "🟡 Mid Tier (70 - 150 SAR)",
    presetAbove150: "🟣 Premium Plans (+150 SAR)",
    presetPureGen: "🌐 Pure General Internet Only",
    presetVowifi: "📶 VoWiFi Supported",
    presetRollover: "🔄 Data Rollover Supported",
    lblProvider: "Specific Operator",
    lblSort: "Sort By",
    lblMaxPrice: "Max Price:",
    chkVoWiFi: "WiFi Calling Supported (VoWiFi)",
    chkRollover: "Data Rollover Supported",
    chkPureGen: "Pure General Data Only",
    chkMultiSim: "Multi-SIM Supported",
    chkRoaming: "Includes Roaming Allowance",
    chkDevice: "Device Subsidy / Installments",
    quickSortTitle: "⚡ Instant 1-Click Sort:",
    sortMinsDesc: "📞 Calls (Highest)",
    sortGenDesc: "🌐 Data (Highest)",
    sortSmsDesc: "✉️ SMS (Highest)",
    sortPriceAsc: "💰 Price (Lowest)",
    sortCostAsc: "💡 Cost / GB (Best Value)",
    sortValDesc: "⏳ Validity (Longest)",
    thProvider: "Operator & Network",
    thName: "Package Name & Type",
    thPrice: "Price (incl. 15% VAT)",
    thGen: "General Data (GB)",
    thSoc: "Social Data",
    thMins: "Calls (Minutes)",
    thSms: "SMS Messages",
    thCost: "Cost/GB",
    thVal: "Billing / Validity",
    thVoWiFi: "WiFi Calling",
    thRollover: "Rollover",
    thPin: "Compare 📌",
    sar: "SAR",
    day: "Day",
    days: "Days",
    minText: "min",
    smsText: "SMS",
    unlimited: "Unlimited 🚀",
    unlimitedText: "Unlimited",
    sarPerGb: "SAR/GB",
    pinned: "Pinned",
    pinToCompare: "Pin to compare",
    supported: "Supported ✅",
    notSupported: "Not Supported ❌",
    dockCountLabel: "packages selected for comparison",
    dockBtnCompare: "Open Full Comparison ➔",
    modalTitle: "Side-by-Side Package Comparison",
    modalSubtitle: "Detailed breakdown of pricing, data allocation, minutes, SMS, hidden regulatory technical terms, contract durations, and CST early termination fees",
    hiddenTermsBtn: "🔍 Reveal Technical & CST Contract Terms",
    resetFilters: "🔄 Reset Filters",
    foundResults: "Found",
    mobileTableHint: "Swipe table horizontally to inspect all columns & details",
    postpaidTag: "Postpaid",
    prepaidTag: "Prepaid"
  }
};

function t(key) {
  return i18n[state.lang][key] || key;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  setViewMode(state.viewMode);
  updateUIText();
  updateCalculatorRecommendation();
  render();
});

function setupEventListeners() {
  const searchInput = document.getElementById('main-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      render();
    });
  }

  const calcGenSlider = document.getElementById('calc-gen-slider');
  const calcBudSlider = document.getElementById('calc-bud-slider');
  if (calcGenSlider) {
    calcGenSlider.addEventListener('input', (e) => {
      state.calcGeneralGB = parseInt(e.target.value, 10);
      document.getElementById('disp-calc-gen').innerText = `${state.calcGeneralGB} GB`;
      updateCalculatorRecommendation();
    });
  }
  if (calcBudSlider) {
    calcBudSlider.addEventListener('input', (e) => {
      state.calcBudget = parseInt(e.target.value, 10);
      document.getElementById('disp-calc-bud').innerText = `${state.calcBudget} SAR`;
      updateCalculatorRecommendation();
    });
  }
}

// Language Switcher
function toggleLang() {
  state.lang = state.lang === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  updateUIText();
  render();
}

function updateUIText() {
  document.getElementById('txt-title').innerText = t('appTitle');
  document.getElementById('txt-subtitle').innerText = t('appSubtitle');
  document.getElementById('txt-cst-badge').innerText = t('cstBadge');
  document.getElementById('main-search').placeholder = t('searchPlaceholder');
  document.getElementById('btn-view-table').innerHTML = `<span>${t('viewTable')}</span>`;
  document.getElementById('btn-view-cards').innerHTML = `<span>${t('viewCards')}</span>`;
  document.getElementById('btn-calc-toggle').innerHTML = `<span>${t('calcToggle')}</span>`;
  
  const cstGuideBtn = document.getElementById('btn-cst-guide-open');
  if (cstGuideBtn) cstGuideBtn.innerHTML = `<span>${t('cstGuideToggle')}</span>`;

  document.getElementById('lbl-calc-gen').innerText = t('calcGenLabel');
  document.getElementById('lbl-calc-bud').innerText = t('calcBudgetLabel');
  document.getElementById('lbl-calc-result-title').innerText = t('calcResultTitle');
  document.getElementById('lbl-host-network-title').innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
    <span>${t('networkTitle')}</span>
  `;

  const pkgTypeTitleEl = document.getElementById('lbl-pkg-type-title');
  if (pkgTypeTitleEl) {
    pkgTypeTitleEl.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
      <span>${t('pkgTypeTitle')}</span>
    `;
  }

  document.getElementById('lbl-filter-provider').innerText = t('lblProvider');
  document.getElementById('lbl-filter-sort').innerText = t('lblSort');
  document.getElementById('lbl-max-price').innerText = t('lblMaxPrice');
  document.getElementById('txt-chk-vowifi').innerText = t('chkVoWiFi');
  document.getElementById('txt-chk-rollover').innerText = t('chkRollover');
  document.getElementById('txt-chk-pure').innerText = t('chkPureGen');
  
  const chkMultiSim = document.getElementById('txt-chk-multi-sim');
  if (chkMultiSim) chkMultiSim.innerText = t('chkMultiSim');
  const chkRoaming = document.getElementById('txt-chk-roaming');
  if (chkRoaming) chkRoaming.innerText = t('chkRoaming');
  const chkDevice = document.getElementById('txt-chk-device');
  if (chkDevice) chkDevice.innerText = t('chkDevice');

  document.getElementById('txt-quick-sort-title').innerText = t('quickSortTitle');
  document.getElementById('txt-modal-title').innerText = t('modalTitle');
  document.getElementById('txt-modal-subtitle').innerText = t('modalSubtitle');
  document.getElementById('btn-dock-open-compare').innerText = t('dockBtnCompare');
  const mobileHint = document.getElementById('txt-mobile-table-hint');
  if (mobileHint) mobileHint.innerText = t('mobileTableHint');

  // Table Headers
  document.getElementById('th-provider').innerText = t('thProvider');
  document.getElementById('th-name').innerText = t('thName');
  document.querySelector('#th-price span:first-child').innerText = t('thPrice');
  document.querySelector('#th-gen span:first-child').innerText = t('thGen');
  document.querySelector('#th-soc span:first-child').innerText = t('thSoc');
  document.querySelector('#th-mins span:first-child').innerText = t('thMins');
  document.querySelector('#th-sms span:first-child').innerText = t('thSms');
  document.querySelector('#th-cost span:first-child').innerText = t('thCost');
  document.querySelector('#th-val span:first-child').innerText = t('thVal');
  document.getElementById('th-vowifi').innerText = t('thVoWiFi');
  document.getElementById('th-rollover').innerText = t('thRollover');
  document.getElementById('th-pin').innerText = t('thPin');
}

// Drawers
function toggleCalculator() {
  const drawer = document.getElementById('calculator-drawer');
  drawer.classList.toggle('open');
}

function toggleCstGuide() {
  const drawer = document.getElementById('cst-guide-drawer');
  if (drawer) drawer.classList.toggle('open');
}

// View Mode Toggle
function setViewMode(mode) {
  state.viewMode = mode;
  document.getElementById('btn-view-table').classList.toggle('active', mode === 'table');
  document.getElementById('btn-view-cards').classList.toggle('active', mode === 'cards');
  document.getElementById('table-view-container').style.display = mode === 'table' ? 'block' : 'none';
  document.getElementById('cards-view-container').style.display = mode === 'cards' ? 'grid' : 'none';
}

// Package Type Filter (All vs Prepaid vs Postpaid)
function setPackageType(type) {
  state.packageType = type;
  document.querySelectorAll('.pkg-type-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === type);
  });
  render();
}

// Network Filter
function setNetworkFilter(net) {
  state.network = net;
  document.querySelectorAll('.network-chip').forEach(el => {
    el.classList.toggle('active', el.dataset.net === net);
  });
  render();
}

// Presets
function applyPreset(presetName) {
  state.activePreset = presetName;
  document.querySelectorAll('.cat-pill').forEach(el => {
    el.classList.toggle('active', el.dataset.preset === presetName);
  });

  // Reset standard ranges
  state.minPrice = 0;
  state.maxPrice = 950;
  state.filterVowifiOnly = false;
  state.filterRolloverOnly = false;
  state.filterPureGeneralOnly = false;
  state.filterMultiSimOnly = false;
  state.filterRoamingOnly = false;
  state.filterDeviceSubsidyOnly = false;

  if (presetName === '70-115') {
    state.packageType = 'prepaid';
    state.minPrice = 70;
    state.maxPrice = 115.01;
    state.sortBy = 'gen-desc';
  } else if (presetName === 'postpaid-popular') {
    state.packageType = 'postpaid';
    state.minPrice = 80;
    state.maxPrice = 270;
    state.sortBy = 'gen-desc';
  } else if (presetName === 'multi-sim') {
    state.packageType = 'all';
    state.filterMultiSimOnly = true;
    state.sortBy = 'gen-desc';
  } else if (presetName === 'roaming') {
    state.packageType = 'all';
    state.filterRoamingOnly = true;
    state.sortBy = 'price-asc';
  } else if (presetName === 'budget-under-70') {
    state.minPrice = 0;
    state.maxPrice = 70.01;
    state.sortBy = 'price-asc';
  } else if (presetName === 'budget-70-150') {
    state.minPrice = 70;
    state.maxPrice = 150.01;
    state.sortBy = 'gen-desc';
  } else if (presetName === 'budget-above-150') {
    state.minPrice = 150;
    state.maxPrice = 950;
    state.sortBy = 'gen-desc';
  } else if (presetName === 'pure-gen') {
    state.filterPureGeneralOnly = true;
    state.sortBy = 'gen-desc';
  } else if (presetName === 'vowifi') {
    state.filterVowifiOnly = true;
  } else if (presetName === 'rollover') {
    state.filterRolloverOnly = true;
  }

  syncInputs();
  render();
}

function syncInputs() {
  document.getElementById('filter-provider').value = state.provider;
  document.getElementById('filter-sort').value = state.sortBy;
  document.getElementById('price-slider').value = state.maxPrice;
  document.getElementById('price-disp').innerText = `${state.maxPrice} ${t('sar')}`;
  document.getElementById('chk-vowifi').checked = state.filterVowifiOnly;
  document.getElementById('chk-rollover').checked = state.filterRolloverOnly;
  document.getElementById('chk-pure-gen').checked = state.filterPureGeneralOnly;

  const chkMultiSim = document.getElementById('chk-multi-sim');
  if (chkMultiSim) chkMultiSim.checked = state.filterMultiSimOnly;
  const chkRoaming = document.getElementById('chk-roaming');
  if (chkRoaming) chkRoaming.checked = state.filterRoamingOnly;
  const chkDevice = document.getElementById('chk-device');
  if (chkDevice) chkDevice.checked = state.filterDeviceSubsidyOnly;

  document.querySelectorAll('.pkg-type-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === state.packageType);
  });
}

function onProviderChange(val) {
  state.provider = val;
  render();
}

function onSortChange(val) {
  state.sortBy = val;
  document.getElementById('filter-sort').value = val;
  document.querySelectorAll('.quick-sort-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sort === val);
  });
  render();
}

function onPriceSlider(val) {
  state.maxPrice = parseFloat(val);
  document.getElementById('price-disp').innerText = `${val} ${t('sar')}`;
  render();
}

function onCheckboxChange() {
  state.filterVowifiOnly = document.getElementById('chk-vowifi').checked;
  state.filterRolloverOnly = document.getElementById('chk-rollover').checked;
  state.filterPureGeneralOnly = document.getElementById('chk-pure-gen').checked;

  const chkMultiSim = document.getElementById('chk-multi-sim');
  if (chkMultiSim) state.filterMultiSimOnly = chkMultiSim.checked;
  const chkRoaming = document.getElementById('chk-roaming');
  if (chkRoaming) state.filterRoamingOnly = chkRoaming.checked;
  const chkDevice = document.getElementById('chk-device');
  if (chkDevice) state.filterDeviceSubsidyOnly = chkDevice.checked;

  render();
}

function resetAllFilters() {
  state.packageType = 'all';
  state.searchQuery = '';
  state.network = 'all';
  state.provider = 'all';
  state.minPrice = 0;
  state.maxPrice = 950;
  state.sortBy = 'minutes-desc';
  state.activePreset = 'all';
  state.filterVowifiOnly = false;
  state.filterRolloverOnly = false;
  state.filterPureGeneralOnly = false;
  state.filterMultiSimOnly = false;
  state.filterRoamingOnly = false;
  state.filterDeviceSubsidyOnly = false;

  document.getElementById('main-search').value = '';
  document.querySelectorAll('.network-chip').forEach(el => el.classList.toggle('active', el.dataset.net === 'all'));
  document.querySelectorAll('.cat-pill').forEach(el => el.classList.toggle('active', el.dataset.preset === 'all'));
  document.querySelectorAll('.quick-sort-btn').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.pkg-type-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.type === 'all'));

  syncInputs();
  render();
}

// Table Header Column Click Sorting
function handleTableSort(columnKey) {
  let nextSort = '';
  if (columnKey === 'price') {
    nextSort = state.sortBy === 'price-asc' ? 'price-desc' : 'price-asc';
  } else if (columnKey === 'gen') {
    nextSort = state.sortBy === 'gen-desc' ? 'gen-asc' : 'gen-desc';
  } else if (columnKey === 'soc') {
    nextSort = state.sortBy === 'total-desc' ? 'gen-desc' : 'total-desc';
  } else if (columnKey === 'minutes') {
    nextSort = state.sortBy === 'minutes-desc' ? 'minutes-asc' : 'minutes-desc';
  } else if (columnKey === 'sms') {
    nextSort = state.sortBy === 'sms-desc' ? 'sms-asc' : 'sms-desc';
  } else if (columnKey === 'cost') {
    nextSort = state.sortBy === 'cost-gen-asc' ? 'gen-desc' : 'cost-gen-asc';
  } else if (columnKey === 'validity') {
    nextSort = state.sortBy === 'validity-desc' ? 'price-asc' : 'validity-desc';
  }
  onSortChange(nextSort);
}

function updateTableSortArrows() {
  const arrows = ['price', 'gen', 'soc', 'minutes', 'sms', 'cost', 'validity'];
  arrows.forEach(k => {
    const el = document.getElementById(`sort-arrow-${k}`);
    const th = document.getElementById(`th-${k}`);
    if (el) el.innerText = '';
    if (th) th.classList.remove('sorted-asc', 'sorted-desc');
  });

  let activeKey = null;
  let isAsc = false;

  if (state.sortBy.startsWith('price')) {
    activeKey = 'price';
    isAsc = state.sortBy === 'price-asc';
  } else if (state.sortBy.startsWith('gen')) {
    activeKey = 'gen';
    isAsc = state.sortBy === 'gen-asc';
  } else if (state.sortBy.startsWith('minutes')) {
    activeKey = 'minutes';
    isAsc = state.sortBy === 'minutes-asc';
  } else if (state.sortBy.startsWith('sms')) {
    activeKey = 'sms';
    isAsc = state.sortBy === 'sms-asc';
  } else if (state.sortBy.startsWith('cost')) {
    activeKey = 'cost';
    isAsc = true;
  } else if (state.sortBy.startsWith('total')) {
    activeKey = 'soc';
    isAsc = false;
  } else if (state.sortBy.startsWith('validity')) {
    activeKey = 'validity';
    isAsc = false;
  }

  if (activeKey) {
    const arrowEl = document.getElementById(`sort-arrow-${activeKey}`);
    const thEl = document.getElementById(`th-${activeKey}`);
    if (arrowEl) arrowEl.innerText = isAsc ? ' ▲' : ' ▼';
    if (thEl) thEl.classList.add(isAsc ? 'sorted-asc' : 'sorted-desc');
  }
}

// Pinned Packages & Dock
function togglePin(uid) {
  const idx = state.pinnedPackages.indexOf(uid);
  if (idx > -1) {
    state.pinnedPackages.splice(idx, 1);
  } else {
    if (state.pinnedPackages.length >= 4) {
      alert(state.lang === 'ar' ? 'يمكنك مقارنة 4 باقات كحد أقصى معاً!' : 'You can compare up to 4 packages at a time!');
      return;
    }
    state.pinnedPackages.push(uid);
  }
  updateComparisonDock();
  render();
}

function clearPinned() {
  state.pinnedPackages = [];
  updateComparisonDock();
  render();
}

function updateComparisonDock() {
  const dock = document.getElementById('comparison-dock');
  const count = state.pinnedPackages.length;
  if (count > 0) {
    dock.classList.add('visible');
    document.getElementById('dock-count-label').innerText = `${count} ${t('dockCountLabel')}`;
  } else {
    dock.classList.remove('visible');
  }
}

// Comparison Modal
function openComparisonModal() {
  if (state.pinnedPackages.length === 0) {
    alert(state.lang === 'ar' ? 'يرجى تحديد باقة واحدة على الأقل بالضغط على 📌 للمقارنة!' : 'Please pin at least one package to compare!');
    return;
  }

  const modal = document.getElementById('comparison-modal');
  modal.classList.add('open');

  const container = document.getElementById('modal-matrix-container');
  const pinnedList = [];

  DB.providers.forEach(p => {
    p.packages.forEach(pkg => {
      const uid = `${p.id}_${pkg.name_en.replace(/\s+/g, '_')}`;
      if (state.pinnedPackages.includes(uid)) {
        pinnedList.push({ provider: p, pkg: pkg, uid: uid });
      }
    });
  });

  const isAr = state.lang === 'ar';
  let html = `
    <table class="modal-matrix-table">
      <thead>
        <tr>
          <th style="width:220px;">${isAr ? 'المعيار / البند' : 'Feature / Metric'}</th>
          ${pinnedList.map(item => `
            <th style="min-width:220px; text-align:center;">
              <span class="provider-badge-pill provider-badge-${item.provider.id}">${isAr ? item.provider.name_ar : item.provider.name_en}</span>
              <div style="font-size:1.15rem; font-weight:900; color:#fff; margin-top:8px;">${isAr ? item.pkg.name_ar : item.pkg.name_en}</div>
              <div style="margin-top:4px;">
                <span class="badge-${item.pkg.package_type || 'prepaid'}">${(item.pkg.package_type === 'postpaid') ? (isAr ? '💳 مفوتر' : '💳 Postpaid') : (isAr ? '⚡ مسبق الدفع' : '⚡ Prepaid')}</span>
              </div>
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>${isAr ? '💰 السعر شامل الضريبة (15%)' : '💰 Price (incl. 15% VAT)'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-size:1.3rem; color:var(--emerald); font-weight:900;">${i.pkg.price_vat.toFixed(2)} ${t('sar')}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '💳 نوع الفوترة' : '💳 Billing Mode'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center;"><span class="badge-${i.pkg.package_type || 'prepaid'}">${i.pkg.package_type === 'postpaid' ? (isAr ? 'فاتورة شهرية' : 'Monthly Bill') : (isAr ? 'شحن مسبق الدفع' : 'Prepaid Recharge')}</span></td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '🌐 البيانات العامة (إنترنت مفتوح)' : '🌐 General Data (Open Internet)'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-weight:800; color:var(--cyan); font-size:1.1rem;">${i.pkg.general_data_gb >= 9999 ? t('unlimited') : i.pkg.general_data_gb + ' GB'}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '📱 بيانات السوشيال ميديا' : '📱 Social Media Allowance'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center;">${i.pkg.unlimited_social ? '<strong style="color:var(--amber);">🚀 ' + t('unlimitedText') + '</strong>' : (i.pkg.social_data_gb > 0 ? i.pkg.social_data_gb + ' GB' : '-')}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '📞 دقائق المكالمات المحلية' : '📞 Local Voice Minutes'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-weight:800;">${i.pkg.local_minutes >= 9999 ? t('unlimited') : i.pkg.local_minutes.toLocaleString() + ' ' + t('minText')}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '✉️ الرسائل القصيرة (SMS)' : '✉️ Local SMS Included'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-weight:800;">${i.pkg.sms >= 9999 ? t('unlimited') : (i.pkg.sms > 0 ? i.pkg.sms.toLocaleString() + ' ' + t('smsText') : (isAr ? 'حسب الاستهلاك' : 'PAYG'))}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '💡 تكلفة جيجا النت العام' : '💡 Cost per General GB'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-weight:800; color:#E2E8F0;">${i.pkg.general_data_gb > 0 && i.pkg.general_data_gb < 9999 ? (i.pkg.price_vat / i.pkg.general_data_gb).toFixed(2) + ' ' + t('sarPerGb') : '-'}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '⏳ الصلاحية والدورة الشهرية' : '⏳ Validity & Billing Cycle'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center;">${i.pkg.package_type === 'postpaid' ? (isAr ? 'دورة شهرية (30 يوم)' : 'Monthly Cycle (30d)') : (i.pkg.validity_days + ' ' + t('days'))}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '📱 دعم الشرائح المتعددة (Multi-SIM)' : '📱 Multi-SIM Support'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-size:0.85rem;">${i.pkg.multi_sim_supported ? '<strong style="color:var(--emerald);">✅ ' + (isAr ? i.pkg.multi_sim_details_ar : i.pkg.multi_sim_details_en) + '</strong>' : '<span style="color:var(--text-muted);">' + (isAr ? 'غير مدعوم' : 'Not supported') + '</span>'}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '✈️ مزايا التجوال الدولي' : '✈️ Roaming Allowance'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-size:0.85rem;">${i.pkg.roaming_included_ar && !i.pkg.roaming_included_ar.includes('غير مشمول') ? '<strong style="color:var(--cyan);">✈️ ' + (isAr ? i.pkg.roaming_included_ar : i.pkg.roaming_included_en) + '</strong>' : '<span style="color:var(--text-muted);">' + (isAr ? 'غير مشمول' : 'Not included') + '</span>'}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '🎁 دعم خصم وتقسيط الأجهزة' : '🎁 Device Subsidy & Financing'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-size:0.85rem;">${i.pkg.device_subsidy_available ? '<strong style="color:var(--amber);">✅ ' + (isAr ? 'متاح بعقد 12/24 شهر' : 'Available on 12/24mo contract') + '</strong>' : '<span style="color:var(--text-muted);">' + (isAr ? 'غير متاح' : 'Not available') + '</span>'}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '📜 نظام العقد والالتزام' : '📜 Contract Commitment'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-size:0.82rem;">${i.pkg.package_type === 'postpaid' ? (isAr ? 'عقد شهري بدون التزام (أو سنوي مع الأجهزة)' : 'Open monthly (or 12/24mo with device)') : (isAr ? 'بدون عقود أو التزامات' : 'No contract commitments')}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '⚖️ غرامات الإلغاء ولوائح CST' : '⚖️ CST Early Cancellation Policy'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-size:0.8rem; color:#cbd5e1;">${isAr ? i.pkg.cancellation_terms_ar : i.pkg.cancellation_terms_en}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '⭐ برنامج المكافآت والولاء' : '⭐ Loyalty Program'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-size:0.85rem; color:#fff;">${isAr ? i.pkg.loyalty_program_ar : i.pkg.loyalty_program_en}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '📶 مكالمات الواي فاي (VoWiFi)' : '📶 WiFi Calling (VoWiFi)'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center;">${i.provider.hidden_conditions.vowifi_supported ? '<span style="color:var(--emerald); font-weight:800;">' + t('supported') + '</span>' : '<span style="color:var(--rose);">' + t('notSupported') + '</span>'}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '🔄 ترحيل الرصيد (Rollover)' : '🔄 Data Rollover'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center;">${i.provider.hidden_conditions.data_rollover ? '<span style="color:var(--cyan); font-weight:800;">' + t('supported') + '</span>' : '<span style="color:var(--text-muted);">' + (isAr ? 'ينتهي بانتهاء الباقة' : 'Expires on cycle') + '</span>'}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '⚡ سياسة خنق السرعة (FUP)' : '⚡ Fair Use & Throttling (FUP)'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-size:0.82rem; color:var(--text-secondary);">${i.provider.hidden_conditions.throttling_fup}</td>`).join('')}
        </tr>
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}

function closeComparisonModal() {
  document.getElementById('comparison-modal').classList.remove('open');
}

function updateCalculatorRecommendation() {
  const reqGB = state.calcGeneralGB;
  const maxBud = state.calcBudget;
  let best = null;
  let lowestCostPerGB = 999999;

  DB.providers.forEach(p => {
    p.packages.forEach(pkg => {
      if (pkg.price_vat <= maxBud && pkg.general_data_gb >= reqGB) {
        const costGB = pkg.price_vat / pkg.general_data_gb;
        if (costGB < lowestCostPerGB) {
          lowestCostPerGB = costGB;
          best = { provider: p, pkg: pkg, costGB: costGB };
        }
      }
    });
  });

  const resEl = document.getElementById('calc-result-content');
  const isAr = state.lang === 'ar';
  if (best) {
    resEl.innerHTML = `
      <div style="color:var(--emerald); font-size:1.05rem; font-weight:900;">
        🏆 ${isAr ? best.provider.name_ar : best.provider.name_en} - ${isAr ? best.pkg.name_ar : best.pkg.name_en}
      </div>
      <div style="font-size:0.82rem; color:var(--text-secondary); margin-top:2px;">
        ${best.pkg.general_data_gb} GB | ${best.pkg.price_vat.toFixed(2)} ${t('sar')} (${best.costGB.toFixed(2)} ${t('sarPerGb')}) | ${best.pkg.local_minutes} ${t('minText')}
      </div>
    `;
  } else {
    resEl.innerHTML = `<span style="color:var(--amber); font-size:0.85rem;">${isAr ? 'لا توجد باقة تغطي هذه السعة بهذه الميزانية، جرب رفع الميزانية قليلاً.' : 'No plan meets this data allowance within budget; try raising your budget.'}</span>`;
  }
}

// Main Filter & Render Engine
function render() {
  const query = state.searchQuery.toLowerCase().trim();
  const list = [];

  DB.providers.forEach(p => {
    // 1. Network Filter: checks clean network_code OR provider ID
    if (state.network !== 'all') {
      if (p.network_code !== state.network && p.id !== state.network) return;
    }

    // 2. Provider Filter
    if (state.provider !== 'all' && p.id !== state.provider) return;

    // 3. Technical Feature Toggles
    if (state.filterVowifiOnly && !p.hidden_conditions.vowifi_supported) return;
    if (state.filterRolloverOnly && !p.hidden_conditions.data_rollover) return;

    p.packages.forEach(pkg => {
      // 4. Package Type Filter (All vs Prepaid vs Postpaid)
      const pType = pkg.package_type || 'prepaid';
      if (state.packageType !== 'all' && pType !== state.packageType) return;

      // 5. Multi-SIM Filter
      if (state.filterMultiSimOnly && !pkg.multi_sim_supported) return;

      // 6. Roaming Filter
      if (state.filterRoamingOnly && (!pkg.roaming_included_ar || pkg.roaming_included_ar.includes('غير مشمول'))) return;

      // 7. Device Subsidy Filter
      if (state.filterDeviceSubsidyOnly && !pkg.device_subsidy_available) return;

      // Price Range Filter
      if (pkg.price_vat < state.minPrice || pkg.price_vat > state.maxPrice) return;

      // Pure General Filter
      if (state.filterPureGeneralOnly && (pkg.social_data_gb > 0 || pkg.unlimited_social)) return;

      const uid = `${p.id}_${pkg.name_en.replace(/\s+/g, '_')}`;

      // Text Search Filter
      if (query) {
        const corpus = `${p.name_ar} ${p.name_en} ${pkg.name_ar} ${pkg.name_en} ${pkg.special_perks_ar} ${pkg.special_perks_en} ${pkg.price_vat} ${pType}`.toLowerCase();
        if (!corpus.includes(query)) return;
      }

      list.push({
        provider: p,
        pkg: pkg,
        uid: uid
      });
    });
  });

  // Sorting
  list.sort((a, b) => {
    switch (state.sortBy) {
      case 'minutes-desc':
        return b.pkg.local_minutes - a.pkg.local_minutes;
      case 'minutes-asc':
        return a.pkg.local_minutes - b.pkg.local_minutes;
      case 'gen-desc':
        return b.pkg.general_data_gb - a.pkg.general_data_gb;
      case 'gen-asc':
        return a.pkg.general_data_gb - b.pkg.general_data_gb;
      case 'sms-desc':
        return b.pkg.sms - a.pkg.sms;
      case 'sms-asc':
        return a.pkg.sms - b.pkg.sms;
      case 'price-asc':
        return a.pkg.price_vat - b.pkg.price_vat;
      case 'price-desc':
        return b.pkg.price_vat - a.pkg.price_vat;
      case 'cost-gen-asc':
        const cA = a.pkg.general_data_gb > 0 ? a.pkg.price_vat / a.pkg.general_data_gb : 9999;
        const cB = b.pkg.general_data_gb > 0 ? b.pkg.price_vat / b.pkg.general_data_gb : 9999;
        return cA - cB;
      case 'total-desc':
        const totA = a.pkg.general_data_gb + (a.pkg.unlimited_social ? 50 : a.pkg.social_data_gb);
        const totB = b.pkg.general_data_gb + (b.pkg.unlimited_social ? 50 : b.pkg.social_data_gb);
        return totB - totA;
      case 'validity-desc':
        return b.pkg.validity_days - a.pkg.validity_days;
      default:
        return 0;
    }
  });

  const isAr = state.lang === 'ar';

  // Update Meta Bar
  document.getElementById('results-count-text').innerText = `${t('foundResults')} ${list.length} ${isAr ? 'باقة مطابقة' : 'matching packages'}`;
  
  // Sort badge text
  const sortSelect = document.getElementById('filter-sort');
  const sortText = sortSelect.options[sortSelect.selectedIndex]?.text || state.sortBy;
  document.getElementById('active-sort-badge').innerText = `${isAr ? 'الترتيب الحقيقي:' : 'Sorted by:'} ${sortText}`;

  updateTableSortArrows();

  // Render View 1: Table View
  renderTableView(list, isAr);

  // Render View 2: Cards Grid View
  renderCardsView(list, isAr);
}

function renderTableView(list, isAr) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="12" style="text-align:center; padding:40px; color:var(--text-muted); font-size:1.1rem;">
          ${isAr ? 'لم يتم العثور على باقات تطابق الفلاتر المحددة. جرب إعادة ضبط الفلاتر.' : 'No packages found matching these filters. Try resetting filters.'}
        </td>
      </tr>
    `;
    return;
  }

  list.forEach(item => {
    const p = item.provider;
    const pkg = item.pkg;
    const uid = item.uid;
    const isPinned = state.pinnedPackages.includes(uid);
    const hc = p.hidden_conditions;
    const isPostpaid = pkg.package_type === 'postpaid';

    const tr = document.createElement('tr');
    if (isPinned) tr.classList.add('row-pinned');

    const costStr = pkg.general_data_gb > 0 && pkg.general_data_gb < 9999
      ? (pkg.price_vat / pkg.general_data_gb).toFixed(2) + ' ' + t('sarPerGb')
      : '-';

    tr.innerHTML = `
      <td>
        <span class="provider-badge-pill provider-badge-${p.id}">
          ${isAr ? p.name_ar : p.name_en}
        </span>
      </td>
      <td class="td-pkg-name">
        <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
          <span>${isAr ? pkg.name_ar : pkg.name_en}</span>
          <span class="badge-${isPostpaid ? 'postpaid' : 'prepaid'}">${isPostpaid ? t('postpaidTag') : t('prepaidTag')}</span>
          ${pkg.multi_sim_supported ? '<span title="' + (isAr ? pkg.multi_sim_details_ar : pkg.multi_sim_details_en) + '" style="font-size:0.8rem;">📱</span>' : ''}
          ${pkg.roaming_included_ar && !pkg.roaming_included_ar.includes('غير مشمول') ? '<span title="' + (isAr ? pkg.roaming_included_ar : pkg.roaming_included_en) + '" style="font-size:0.8rem;">✈️</span>' : ''}
          ${pkg.device_subsidy_available ? '<span title="' + (isAr ? 'تدعم تقسيط وخصم الأجهزة الذكية' : 'Device subsidy supported') + '" style="font-size:0.8rem;">🎁</span>' : ''}
        </div>
      </td>
      <td class="td-price">${pkg.price_vat.toFixed(2)} ${t('sar')}</td>
      <td class="td-gen-data">${pkg.general_data_gb >= 9999 ? t('unlimited') : pkg.general_data_gb + ' GB'}</td>
      <td>
        ${pkg.unlimited_social ? '<strong style="color:var(--amber);">🚀 ' + t('unlimitedText') + '</strong>' : (pkg.social_data_gb > 0 ? pkg.social_data_gb + ' GB' : '-')}
      </td>
      <td class="td-minutes">
        ${pkg.local_minutes >= 9999 ? t('unlimited') : pkg.local_minutes.toLocaleString() + ' ' + t('minText')}
      </td>
      <td class="td-sms">
        ${pkg.sms >= 9999 ? t('unlimited') : (pkg.sms > 0 ? pkg.sms.toLocaleString() : (isAr ? 'حسب الاستهلاك' : 'PAYG'))}
      </td>
      <td class="td-cost-gb">${costStr}</td>
      <td>
        ${isPostpaid ? (isAr ? 'فاتورة شهرية' : 'Monthly Bill') : (pkg.validity_days + ' ' + t('days'))}
      </td>
      <td>
        ${hc.vowifi_supported ? '<span style="color:var(--emerald); font-weight:800;">' + t('supported') + '</span>' : '<span style="color:var(--text-muted);">' + t('notSupported') + '</span>'}
      </td>
      <td>
        ${hc.data_rollover ? '<span style="color:var(--cyan); font-weight:800;">' + t('supported') + '</span>' : '<span style="color:var(--text-muted);">-</span>'}
      </td>
      <td style="text-align:center;">
        <button class="table-pin-btn ${isPinned ? 'pinned' : ''}" onclick="togglePin('${uid}')" title="${isPinned ? t('pinned') : t('pinToCompare')}">
          ${isPinned ? '📌 ' + t('pinned') : '📌'}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function renderCardsView(list, isAr) {
  const grid = document.getElementById('cards-view-container');
  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:50px; color:var(--text-muted); font-size:1.1rem;">
        ${isAr ? 'لم يتم العثور على أي باقة مطابقة.' : 'No matching packages found.'}
      </div>
    `;
    return;
  }

  list.forEach((item, idx) => {
    const p = item.provider;
    const pkg = item.pkg;
    const uid = item.uid;
    const isPinned = state.pinnedPackages.includes(uid);
    const hc = p.hidden_conditions;
    const isPostpaid = pkg.package_type === 'postpaid';

    const card = document.createElement('div');
    card.className = 'package-card';
    if ((state.activePreset === '70-115' || state.activePreset === 'postpaid-popular') && idx === 0) {
      card.classList.add('highlighted-match');
    }

    const maxBar = 120;
    const genWidth = Math.min(100, (pkg.general_data_gb / maxBar) * 100);
    const socWidth = pkg.unlimited_social ? 60 : Math.min(100, (pkg.social_data_gb / maxBar) * 100);

    const costStr = pkg.general_data_gb > 0 && pkg.general_data_gb < 9999
      ? (pkg.price_vat / pkg.general_data_gb).toFixed(2) + ' ' + t('sarPerGb')
      : '-';

    card.innerHTML = `
      <div>
        <div class="card-header-row">
          <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
            <span class="provider-badge-pill provider-badge-${p.id}">
              ${isAr ? p.name_ar : p.name_en}
            </span>
            <span class="badge-${isPostpaid ? 'postpaid' : 'prepaid'}">${isPostpaid ? t('postpaidTag') : t('prepaidTag')}</span>
          </div>
          <button class="card-pin-btn ${isPinned ? 'pinned' : ''}" onclick="togglePin('${uid}')" title="${isPinned ? t('pinned') : t('pinToCompare')}">
            📌
          </button>
        </div>

        <div class="card-provider-name">${isAr ? p.network : p.network_code.toUpperCase() + ' Host Network'}</div>
        <h3 class="card-pkg-title">${isAr ? pkg.name_ar : pkg.name_en}</h3>

        <!-- Feature Pills Row -->
        <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px;">
          ${pkg.multi_sim_supported ? '<span class="tag-feature-pill">📱 ' + (isAr ? 'شرائح متعددة' : 'Multi-SIM') + '</span>' : ''}
          ${pkg.roaming_included_ar && !pkg.roaming_included_ar.includes('غير مشمول') ? '<span class="tag-feature-pill">✈️ ' + (isAr ? 'تجوال' : 'Roaming') + '</span>' : ''}
          ${pkg.device_subsidy_available ? '<span class="tag-feature-pill">🎁 ' + (isAr ? 'خصم أجهزة' : 'Device Subsidy') + '</span>' : ''}
          ${hc.data_rollover ? '<span class="tag-feature-pill">🔄 ' + (isAr ? 'ترحيل رصيد' : 'Rollover') + '</span>' : ''}
        </div>

        <div class="card-price-box">
          <span class="card-price-num">${pkg.price_vat.toFixed(2)} <small style="font-size:0.9rem;">${t('sar')}</small></span>
          <span class="card-price-meta">${isPostpaid ? (isAr ? 'فاتورة شهرية' : 'Monthly Bill') : (pkg.validity_days + ' ' + t('days'))} (15% VAT)</span>
        </div>

        <!-- Data Bars -->
        <div class="data-bars-wrapper">
          <div class="data-bar-row">
            <span class="data-bar-label">${t('thGen')}</span>
            <span class="data-bar-value" style="color:var(--cyan);">${pkg.general_data_gb >= 9999 ? t('unlimited') : pkg.general_data_gb + ' GB'}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill-gen" style="width:${genWidth}%;"></div>
          </div>

          <div class="data-bar-row">
            <span class="data-bar-label">${t('thSoc')}</span>
            <span class="data-bar-value" style="color:var(--purple);">${pkg.unlimited_social ? '🚀 ' + t('unlimitedText') : (pkg.social_data_gb > 0 ? pkg.social_data_gb + ' GB' : '-')}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill-soc" style="width:${socWidth}%;"></div>
          </div>
        </div>

        <!-- 4-Cell Stats Grid -->
        <div class="card-stats-grid">
          <div class="card-stat-cell">
            <div class="card-stat-title">📞 ${t('thMins')}</div>
            <div class="card-stat-value">${pkg.local_minutes >= 9999 ? t('unlimitedText') : pkg.local_minutes.toLocaleString()}</div>
          </div>
          <div class="card-stat-cell">
            <div class="card-stat-title">✉️ ${t('thSms')}</div>
            <div class="card-stat-value">${pkg.sms >= 9999 ? t('unlimitedText') : (pkg.sms > 0 ? pkg.sms.toLocaleString() : '-')}</div>
          </div>
          <div class="card-stat-cell">
            <div class="card-stat-title">💡 ${t('thCost')}</div>
            <div class="card-stat-value" style="font-size:0.85rem;">${costStr}</div>
          </div>
          <div class="card-stat-cell">
            <div class="card-stat-title">📶 VoWiFi</div>
            <div class="card-stat-value" style="color:${hc.vowifi_supported ? 'var(--emerald)' : 'var(--text-muted)'};">
              ${hc.vowifi_supported ? '✅' : '❌'}
            </div>
          </div>
        </div>

        <!-- Special Perks Summary -->
        <div class="card-perks-box">
          ✨ ${isAr ? pkg.special_perks_ar : pkg.special_perks_en}
        </div>

        <!-- Collapsible Hidden Terms & CST Contract Details -->
        <details class="card-hidden-terms">
          <summary>${t('hiddenTermsBtn')}</summary>
          <div class="hidden-terms-content">
            <div><strong>${isAr ? '📜 نظام العقد والالتزام:' : '📜 Contract Commitment:'}</strong> ${isPostpaid ? (isAr ? 'عقد شهري بدون التزام (أو سنوي اختياري مع الأجهزة)' : 'Open monthly (or optional 12/24mo device financing)') : (isAr ? 'مسبق الدفع (بدون عقود أو فواتير)' : 'Prepaid (no contracts or bills)')}</div>
            <div><strong>${isAr ? '⚖️ سياسة الإلغاء المبكر وغرامات CST:' : '⚖️ CST Cancellation Terms:'}</strong> ${isAr ? pkg.cancellation_terms_ar : pkg.cancellation_terms_en}</div>
            <div><strong>${isAr ? '📱 الشرائح المتعددة (Multi-SIM):' : '📱 Multi-SIM Allowance:'}</strong> ${isAr ? pkg.multi_sim_details_ar : pkg.multi_sim_details_en}</div>
            <div><strong>${isAr ? '✈️ التجوال الدولي:' : '✈️ Roaming Allowance:'}</strong> ${isAr ? pkg.roaming_included_ar : pkg.roaming_included_en}</div>
            <div><strong>${isAr ? '⭐ برنامج المكافآت والولاء:' : '⭐ Loyalty Program:'}</strong> ${isAr ? pkg.loyalty_program_ar : pkg.loyalty_program_en}</div>
            <div><strong>${isAr ? 'وحدة احتساب النت:' : 'Data Block:'}</strong> ${hc.metering_block_data}</div>
            <div><strong>${isAr ? 'سياسة الهوتسبوت:' : 'Hotspot:'}</strong> ${hc.hotspot_policy}</div>
            <div><strong>${isAr ? 'سياسة خنق السرعة:' : 'Throttling FUP:'}</strong> ${hc.throttling_fup}</div>
          </div>
        </details>
      </div>

      <button class="table-pin-btn ${isPinned ? 'pinned' : ''}" style="width:100%; margin-top:14px; justify-content:center; min-height:44px;" onclick="togglePin('${uid}')">
        ${isPinned ? '📌 ' + t('pinned') : '📌 ' + t('pinToCompare')}
      </button>
    `;

    grid.appendChild(card);
  });
}
"""

final_js = template.replace('__DB_PLACEHOLDER__', json_data_str)

with open('/home/speedlo/Projects/saudi-telecom-packages/app.js', 'w', encoding='utf-8') as f:
    f.write(final_js)

print("Successfully generated /home/speedlo/Projects/saudi-telecom-packages/app.js!")
