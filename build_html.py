import json

with open('/home/speedlo/.gemini/antigravity/scratch/saudi-telecom-packages/packages.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

json_str = json.dumps(data, ensure_ascii=False)

html_content = f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>دليل ومقارنة باقات الاتصالات السعودية | Saudi Telecom Packages</title>
  <style>
    :root {{
      --primary: #10847e;
      --primary-dark: #095955;
      --bg: #0f172a;
      --surface: #1e293b;
      --surface-border: #334155;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --accent: #38bdf8;
      --accent-green: #22c55e;
      --accent-orange: #f97316;
      --card-bg: #1e293b;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.5;
      padding-bottom: 60px;
    }}
    header {{
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      padding: 32px 20px;
      border-bottom: 1px solid var(--surface-border);
      text-align: center;
      position: relative;
    }}
    .lang-btn {{
      position: absolute;
      top: 20px;
      left: 20px;
      background: rgba(255,255,255,0.15);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.3);
      padding: 8px 16px;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s;
    }}
    .lang-btn:hover {{ background: rgba(255,255,255,0.3); }}
    html[dir="ltr"] .lang-btn {{ left: auto; right: 20px; }}
    h1 {{ font-size: 2rem; margin-bottom: 8px; color: #fff; }}
    .subtitle {{ color: var(--accent); font-size: 1rem; max-width: 800px; margin: 0 auto; }}
    .container {{ max-width: 1300px; margin: 0 auto; padding: 24px 16px; }}

    .quick-filters {{
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }}
    .quick-btn {{
      background: var(--surface);
      color: var(--text);
      border: 1px solid var(--surface-border);
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s;
    }}
    .quick-btn.active, .quick-btn:hover {{
      background: var(--primary);
      border-color: var(--accent);
      color: #fff;
    }}

    .filters-bar {{
      background: var(--surface);
      padding: 20px;
      border-radius: 12px;
      border: 1px solid var(--surface-border);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }}
    .filter-group label {{
      display: block;
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-bottom: 6px;
    }}
    .filter-group select, .filter-group input {{
      width: 100%;
      background: #0f172a;
      border: 1px solid var(--surface-border);
      color: #fff;
      padding: 10px 12px;
      border-radius: 8px;
      outline: none;
    }}
    .filter-group select:focus, .filter-group input:focus {{
      border-color: var(--accent);
    }}

    .results-info {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      color: var(--text-muted);
      font-size: 0.95rem;
    }}

    .cards-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 20px;
    }}

    .card {{
      background: var(--card-bg);
      border: 1px solid var(--surface-border);
      border-radius: 14px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      transition: transform 0.2s, border-color 0.2s;
    }}
    .card:hover {{
      transform: translateY(-4px);
      border-color: var(--accent);
    }}
    .card-badge {{
      position: absolute;
      top: 14px;
      left: 14px;
      background: rgba(56, 189, 248, 0.15);
      color: var(--accent);
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: bold;
      border: 1px solid rgba(56, 189, 248, 0.3);
    }}
    html[dir="ltr"] .card-badge {{ left: auto; right: 14px; }}

    .provider-title {{
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-bottom: 4px;
    }}
    .package-name {{
      font-size: 1.35rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 12px;
    }}
    .price-tag {{
      display: flex;
      align-items: baseline;
      gap: 6px;
      margin-bottom: 16px;
    }}
    .price-value {{
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--accent-green);
    }}
    .price-period {{
      font-size: 0.85rem;
      color: var(--text-muted);
    }}

    .specs-list {{
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 16px;
      background: rgba(15, 23, 42, 0.6);
      padding: 12px;
      border-radius: 10px;
    }}
    .spec-item {{
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
    }}
    .spec-label {{ color: var(--text-muted); }}
    .spec-val {{ font-weight: 600; color: #fff; }}
    .highlight-val {{ color: var(--accent); font-weight: bold; }}

    .perks-box {{
      font-size: 0.85rem;
      color: #cbd5e1;
      background: rgba(249, 115, 22, 0.1);
      border-right: 3px solid var(--accent-orange);
      padding: 8px 12px;
      border-radius: 4px;
      margin-bottom: 16px;
      line-height: 1.4;
    }}
    html[dir="ltr"] .perks-box {{
      border-right: none;
      border-left: 3px solid var(--accent-orange);
    }}

    .badges-row {{
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      margin-bottom: 14px;
    }}
    .tag {{
      font-size: 0.75rem;
      padding: 3px 8px;
      border-radius: 6px;
      font-weight: 600;
    }}
    .tag-vowifi-yes {{ background: #14532d; color: #86efac; }}
    .tag-vowifi-no {{ background: #451a03; color: #fdba74; }}
    .tag-rollover {{ background: #1e3a8a; color: #93c5fd; }}

    .hidden-terms-toggle {{
      background: transparent;
      border: 1px dashed var(--surface-border);
      color: var(--text-muted);
      width: 100%;
      padding: 8px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.8rem;
      transition: all 0.2s;
    }}
    .hidden-terms-toggle:hover {{
      color: #fff;
      border-color: var(--accent);
    }}
    .hidden-details {{
      display: none;
      margin-top: 10px;
      padding: 10px;
      background: #0f172a;
      border-radius: 8px;
      font-size: 0.8rem;
      color: var(--text-muted);
    }}
    .hidden-details.open {{ display: block; }}
    .hidden-details ul {{ padding-right: 16px; margin-top: 6px; }}
    html[dir="ltr"] .hidden-details ul {{ padding-right: 0; padding-left: 16px; }}
  </style>
</head>
<body>

  <header>
    <button class="lang-btn" onclick="toggleLang()">English / عربي</button>
    <h1 id="txt-title">دليل ومقارنة باقات الاتصالات السعودية مسبقة الدفع</h1>
    <p class="subtitle" id="txt-subtitle">مقارنة شاملة لجميع المشغلين الرسميين مع كشف الشروط المخفية (وحدة الحساب، مكالمات الواي فاي، خنق السرعة FUP، وترحيل البيانات)</p>
  </header>

  <div class="container">
    
    <div class="quick-filters">
      <button class="quick-btn active" onclick="applyPreset('all')">🌟 عرض الكل (All)</button>
      <button class="quick-btn" onclick="applyPreset('70-115')">🎯 فئة 70 - 115 ريال (أعلى طلب)</button>
      <button class="quick-btn" onclick="applyPreset('stc-net')">📡 شبكة stc فقط</button>
      <button class="quick-btn" onclick="applyPreset('mobily-net')">📡 شبكة موبايلي فقط</button>
      <button class="quick-btn" onclick="applyPreset('zain-net')">📡 شبكة زين فقط</button>
      <button class="quick-btn" onclick="applyPreset('rollover')">🔄 تدعم ترحيل البيانات (Rollover)</button>
      <button class="quick-btn" onclick="applyPreset('vowifi')">📶 تدعم مكالمات الواي فاي (VoWiFi)</button>
    </div>

    <div class="filters-bar">
      <div class="filter-group">
        <label id="lbl-network">الشبكة الرئيسية (Host Network)</label>
        <select id="filter-network" onchange="render()">
          <option value="all">الكل (All Networks)</option>
          <option value="stc">شبكة stc</option>
          <option value="mobily">شبكة موبايلي</option>
          <option value="zain">شبكة زين</option>
        </select>
      </div>

      <div class="filter-group">
        <label id="lbl-provider">المشغل (Provider)</label>
        <select id="filter-provider" onchange="render()">
          <option value="all">جميع المشغلين (All)</option>
          <option value="stc">stc (سوا)</option>
          <option value="jawwy">جوّي (Jawwy)</option>
          <option value="virgin">فيرجن موبايل (Virgin)</option>
          <option value="mobily">موبايلي (Mobily)</option>
          <option value="lebara">ليبارا (Lebara)</option>
          <option value="zain">زين (Zain)</option>
          <option value="yaqoot">ياقوت (Yaqoot)</option>
          <option value="salam">سلام موبايل (Salam)</option>
          <option value="redbull">ريد بُل (Red Bull)</option>
        </select>
      </div>

      <div class="filter-group">
        <label id="lbl-sort">الترتيب حسب (Sort By)</label>
        <select id="filter-sort" onchange="render()">
          <option value="gen-desc">البيانات العامة (من الأعلى للأقل)</option>
          <option value="price-asc">السعر (من الأقل للأعلى)</option>
          <option value="cost-gen-asc">تكلفة جيجا النت العام (الأرخص للجيجا)</option>
          <option value="total-desc">إجمالي البيانات (من الأعلى للأقل)</option>
        </select>
      </div>

      <div class="filter-group">
        <label id="lbl-price-range">الحد الأقصى للسعر: <span id="price-val" style="color:var(--accent); font-weight:bold;">450</span> ريال</label>
        <input type="range" id="filter-max-price" min="30" max="450" step="5" value="450" oninput="updatePriceLabel(); render();">
      </div>
    </div>

    <div class="results-info">
      <div id="results-count">عرض الباقات المتاحة...</div>
      <div id="active-sort-note">مرتب حسب: البيانات العامة</div>
    </div>

    <div class="cards-grid" id="cards-grid"></div>

  </div>

  <script>
    const db = {json_str};
    let currentLang = 'ar';

    function toggleLang() {{
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
      
      if (currentLang === 'en') {{
        document.getElementById('txt-title').innerText = "Saudi Telecom Prepaid Packages & Comparison Guide";
        document.getElementById('txt-subtitle').innerText = "Comprehensive comparison across all 9 operators with hidden terms revealed (Metering block, VoWiFi, Throttling FUP, Rollover)";
        document.getElementById('lbl-network').innerText = "Host Network";
        document.getElementById('lbl-provider').innerText = "Operator / Provider";
        document.getElementById('lbl-sort').innerText = "Sort By";
      }} else {{
        document.getElementById('txt-title').innerText = "دليل ومقارنة باقات الاتصالات السعودية مسبقة الدفع";
        document.getElementById('txt-subtitle').innerText = "مقارنة شاملة لجميع المشغلين الرسميين مع كشف الشروط المخفية (وحدة الحساب، مكالمات الواي فاي، خنق السرعة FUP، وترحيل البيانات)";
        document.getElementById('lbl-network').innerText = "الشبكة الرئيسية (Host Network)";
        document.getElementById('lbl-provider').innerText = "المشغل (Provider)";
        document.getElementById('lbl-sort').innerText = "الترتيب حسب (Sort By)";
      }}
      render();
    }}

    function updatePriceLabel() {{
      document.getElementById('price-val').innerText = document.getElementById('filter-max-price').value;
    }}

    function applyPreset(preset) {{
      const net = document.getElementById('filter-network');
      const prov = document.getElementById('filter-provider');
      const price = document.getElementById('filter-max-price');
      const sort = document.getElementById('filter-sort');

      // reset
      net.value = 'all';
      prov.value = 'all';
      price.value = 450;
      sort.value = 'gen-desc';

      if (preset === '70-115') {{
        price.value = 115;
        sort.value = 'gen-desc';
      }} else if (preset === 'stc-net') {{
        net.value = 'stc';
      }} else if (preset === 'mobily-net') {{
        net.value = 'mobily';
      }} else if (preset === 'zain-net') {{
        net.value = 'zain';
      }}

      updatePriceLabel();
      render(preset);
    }}

    function render(presetFilter = null) {{
      const netFilter = document.getElementById('filter-network').value;
      const provFilter = document.getElementById('filter-provider').value;
      const sortFilter = document.getElementById('filter-sort').value;
      const maxPrice = parseFloat(document.getElementById('filter-max-price').value);

      let allPackages = [];

      db.providers.forEach(p => {{
        if (provFilter !== 'all' && p.id !== provFilter) return;
        if (netFilter !== 'all' && !p.network.toLowerCase().includes(netFilter)) return;

        p.packages.forEach(pkg => {{
          if (pkg.price_vat > maxPrice) return;
          if (presetFilter === '70-115' && pkg.price_vat < 70) return;
          if (presetFilter === 'vowifi' && !p.hidden_conditions.vowifi_supported) return;
          if (presetFilter === 'rollover' && !p.hidden_conditions.data_rollover) return;

          allPackages.push({{
            provider: p,
            pkg: pkg
          }});
        }});
      }});

      // Sorting
      allPackages.sort((a, b) => {{
        if (sortFilter === 'gen-desc') {{
          return b.pkg.general_data_gb - a.pkg.general_data_gb;
        }} else if (sortFilter === 'price-asc') {{
          return a.pkg.price_vat - b.pkg.price_vat;
        }} else if (sortFilter === 'cost-gen-asc') {{
          const costA = a.pkg.general_data_gb > 0 ? a.pkg.price_vat / a.pkg.general_data_gb : 9999;
          const costB = b.pkg.general_data_gb > 0 ? b.pkg.price_vat / b.pkg.general_data_gb : 9999;
          return costA - costB;
        }} else if (sortFilter === 'total-desc') {{
          const totA = a.pkg.general_data_gb + (a.pkg.unlimited_social ? 50 : a.pkg.social_data_gb);
          const totB = b.pkg.general_data_gb + (b.pkg.unlimited_social ? 50 : b.pkg.social_data_gb);
          return totB - totA;
        }}
        return 0;
      }});

      const grid = document.getElementById('cards-grid');
      grid.innerHTML = '';

      document.getElementById('results-count').innerText = currentLang === 'ar' 
        ? `تم العثور على ${{allPackages.length}} باقة مطابقة` 
        : `Found ${{allPackages.length}} matching packages`;

      allPackages.forEach((item, idx) => {{
        const p = item.provider;
        const pkg = item.pkg;
        const hc = p.hidden_conditions;

        const isAr = currentLang === 'ar';
        const name = isAr ? pkg.name_ar : pkg.name_en;
        const provName = isAr ? p.name_ar : p.name_en;
        const perks = isAr ? pkg.special_perks_ar : pkg.special_perks_en;
        
        let genDataStr = pkg.general_data_gb >= 9999 ? (isAr ? 'لا محدود' : 'Unlimited') : `${{pkg.general_data_gb}} GB`;
        let socDataStr = pkg.unlimited_social ? (isAr ? 'لا محدود بالكامل' : 'Fully Unlimited') : (pkg.social_data_gb > 0 ? `${{pkg.social_data_gb}} GB` : (isAr ? '0 جيجا' : 'None'));
        let minsStr = pkg.local_minutes >= 9999 ? (isAr ? 'لا محدود' : 'Unlimited') : `${{pkg.local_minutes}} ${{isAr ? 'دقيقة' : 'mins'}}`;
        
        let costGen = pkg.general_data_gb > 0 && pkg.general_data_gb < 9999 
          ? (pkg.price_vat / pkg.general_data_gb).toFixed(2) + ' ' + (isAr ? 'ريال/GB' : 'SAR/GB')
          : (isAr ? 'غير محدود' : 'Unlimited');

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <div>
            <div class="card-badge">${{p.network.split(' ')[0]}}</div>
            <div class="provider-title">${{provName}}</div>
            <div class="package-name">${{name}}</div>
            
            <div class="price-tag">
              <span class="price-value">${{pkg.price_vat.toFixed(2)}}</span>
              <span class="price-period">${{isAr ? 'ريال / ' + pkg.validity_days + ' يوم (شامل الضريبة)' : 'SAR / ' + pkg.validity_days + ' days (incl. VAT)'}}</span>
            </div>

            <div class="specs-list">
              <div class="spec-item">
                <span class="spec-label">${{isAr ? 'البيانات العامة (General Data):' : 'General Data:'}}</span>
                <span class="spec-val highlight-val">${{genDataStr}}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">${{isAr ? 'بيانات السوشيال (Social Data):' : 'Social Data:'}}</span>
                <span class="spec-val">${{socDataStr}}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">${{isAr ? 'المكالمات المحلية (Minutes):' : 'Local Calls:'}}</span>
                <span class="spec-val">${{minsStr}}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">${{isAr ? 'تكلفة الجيجا العام (Cost/Gen GB):' : 'Cost/Gen GB:'}}</span>
                <span class="spec-val" style="color:var(--accent);">${{costGen}}</span>
              </div>
            </div>

            <div class="perks-box">${{perks}}</div>

            <div class="badges-row">
              <span class="tag ${{hc.vowifi_supported ? 'tag-vowifi-yes' : 'tag-vowifi-no'}}">
                ${{hc.vowifi_supported ? (isAr ? '✅ مكالمات واي فاي' : '✅ VoWiFi Supported') : (isAr ? '❌ بدون VoWiFi' : '❌ No VoWiFi')}}
              </span>
              ${{hc.data_rollover ? `<span class="tag tag-rollover">${{isAr ? '🔄 ترحيل البيانات' : '🔄 Rollover'}}</span>` : ''}}
              ${{pkg.unlimited_social ? `<span class="tag" style="background:#4338ca; color:#c7d2fe;">${{isAr ? '🚀 سوشيال مفتوح' : '🚀 Unlim Social'}}</span>` : ''}}
            </div>
          </div>

          <div>
            <button class="hidden-terms-toggle" onclick="toggleDetails('det-${{idx}}')">
              ${{isAr ? '🔍 كشف الشروط المخفية وتفاصيل الحساب' : '🔍 Reveal Hidden Terms & Details'}}
            </button>
            <div class="hidden-details" id="det-${{idx}}">
              <strong>${{isAr ? 'الشروط الفنية للمشغل:' : 'Technical Terms:'}}</strong>
              <ul>
                <li><strong>${{isAr ? 'وحدة حساب النت:' : 'Data Block:'}}</strong> ${{hc.metering_block_data}}</li>
                <li><strong>${{isAr ? 'مكالمات الواي فاي:' : 'VoWiFi:'}}</strong> ${{hc.vowifi_notes}}</li>
                <li><strong>${{isAr ? 'الهوتسبوت:' : 'Hotspot:'}}</strong> ${{hc.hotspot_policy}}</li>
                <li><strong>${{isAr ? 'خنق السرعة FUP:' : 'Throttling FUP:'}}</strong> ${{hc.throttling_fup}}</li>
              </ul>
            </div>
          </div>
        `;
        grid.appendChild(card);
      }});
    }}

    function toggleDetails(id) {{
      const el = document.getElementById(id);
      el.classList.toggle('open');
    }}

    // Initial render
    render();
  </script>
</body>
</html>
"""

with open('/home/speedlo/.gemini/antigravity/scratch/saudi-telecom-packages/index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Generated interactive dashboard index.html successfully!")
