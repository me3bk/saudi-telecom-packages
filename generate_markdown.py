import json, os

with open('/home/speedlo/Projects/saudi-telecom-packages/packages.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

providers_dir = '/home/speedlo/Projects/saudi-telecom-packages/providers'
os.makedirs(providers_dir, exist_ok=True)

for p in db['providers']:
    p_id = p['id']
    filename = os.path.join(providers_dir, f"{p_id}.md")
    hc = p['hidden_conditions']
    
    prepaid_pkgs = [x for x in p['packages'] if x.get('package_type') == 'prepaid']
    postpaid_pkgs = [x for x in p['packages'] if x.get('package_type') == 'postpaid']

    content = f"""# {p['name_ar']} / {p['name_en']}

**الشبكة / Host Network:** {p['network']}  
**نوع المشغل / Operator Type:** {p['type']}  
**الموقع الرسمي / Official Website:** [{p['website']}]({p['website']})

---

## 1. الشروط والأحكام الفنية والمخفية / Hidden & Technical Terms

| البند / Feature | التفاصيل الفنية / Technical Specification | ملاحظات الاستخدام / Usage Notes |
| :--- | :--- | :--- |
| **وحدة احتساب البيانات (Data Metering Block)** | **{hc['metering_block_data']}** | يتم تقريب كل جلسة تصفح لأقرب كتلة (كل 100 كيلوبايت) وفق لوائح هيئة الاتصالات CST. |
| **وحدة احتساب المكالمات (Voice Metering)** | **{hc['metering_block_voice']}** | الحساب بالثانية إلزامي لجميع الشبكات المحلية. |
| **مكالمات الواي فاي (WiFi Calling / VoWiFi)** | **{'مدعومة رسميًا (Supported)' if hc['vowifi_supported'] else 'غير معتمدة رسميًا (Not officially supported)'}** | {hc['vowifi_notes']} |
| **الاتصال عبر الجيل الرابع (VoLTE)** | **{'مدعومة (Supported)' if hc['volte_supported'] else 'غير مدعومة (Unsupported)'}** | تتيح نقاء الصوت وإجراء المكالمات دون انقطاع سرعة الإنترنت 4G/5G. |
| **سياسة الاستخدام العادل وخنق السرعة (Throttling / FUP)** | **{hc['throttling_fup']}** | لا يوجد أي خنق سرعة على سعة البيانات العامة المحددة؛ السرعة بأقصى إمكانيات 5G/4G. |
| **بث الإنترنت ونقطة الاتصال (Hotspot / Tethering)** | **{hc['hotspot_policy']}** | **تنبيه هام:** حزم السوشيال المفتوحة لا تغطي الهوتسبوت؛ أي أجهزة متصلة بالبث تستهلك من رصيد البيانات العامة. |
| **ترحيل البيانات (Data Rollover)** | **{'نعم مدعوم (Yes)' if hc['data_rollover'] else 'غير مدعوم (No)'}** | {hc.get('data_rollover_notes', 'البيانات غير المستهلكة تنتهي بانتهاء مدة الباقة.')} |

---

## 2. جدول باقات مسبق الدفع / Active Prepaid Packages ({len(prepaid_pkgs)} باقة)

| اسم الباقة (Package Name) | السعر شامل الضريبة 15% (SAR) | البيانات العامة | بيانات السوشيال | الدقائق المحلية | الصلاحية | تكلفة الجيجا | المزايا الحصرية |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
"""
    for pkg in prepaid_pkgs:
        gen = f"{int(pkg['general_data_gb'])} GB" if pkg['general_data_gb'] < 1000 else "لا محدود"
        soc = "**لا محدود**" if pkg.get('unlimited_social') else (f"{int(pkg['social_data_gb'])} GB" if pkg.get('social_data_gb', 0) > 0 else "0 GB")
        mins = f"{pkg['local_minutes']}" if pkg['local_minutes'] < 9999 else "لا محدود"
        cost_gen = f"{pkg['price_vat'] / pkg['general_data_gb']:.2f} ريال" if (0 < pkg['general_data_gb'] < 1000) else "غير محدود"
        content += f"| **{pkg['name_ar']}**<br>*{pkg['name_en']}* | **{pkg['price_vat']:.2f}** | **{gen}** | {soc} | {mins} | {pkg['validity_days']} يوم | {cost_gen} | {pkg['special_perks_ar']} |\n"

    content += f"""
---

## 3. جدول باقات المفوتر وعقود الالتزام / Postpaid & Contract Plans ({len(postpaid_pkgs)} باقة)

| اسم الباقة (Plan Name) | السعر الشهري شامل 15% VAT | النت العام والسوشيال | المكالمات والرسائل | الشرائح المتعددة (Multi-SIM) | التجوال الدولي | دعم الأجهزة الذكية | شروط الإلغاء وغرامات CST |
| :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- |
"""
    for pkg in postpaid_pkgs:
        gen = f"{int(pkg['general_data_gb'])} GB" if pkg['general_data_gb'] < 1000 else "5G لا محدود"
        soc = "سوشيال لا محدود" if pkg.get('unlimited_social') else (f"{int(pkg['social_data_gb'])} GB سوشيال" if pkg.get('social_data_gb', 0) > 0 else "-")
        data_str = f"**{gen}** + {soc}"
        mins_str = "مكالمات ورسائل مفتوحة" if (pkg['local_minutes'] >= 9999 and pkg['sms'] >= 9999) else f"{pkg['local_minutes']} دقيقة | {pkg['sms']} رسالة"
        sim_str = pkg['multi_sim_details_ar']
        roam_str = pkg['roaming_included_ar']
        dev_str = "✅ متاح بعقد 12/24 شهر" if pkg['device_subsidy_available'] else "غير متاح"
        cancel_str = pkg['cancellation_terms_ar']
        content += f"| **{pkg['name_ar']}**<br>*{pkg['name_en']}* | **{pkg['price_vat']:.2f} ريال** | {data_str} | {mins_str} | {sim_str} | {roam_str} | {dev_str} | {cancel_str} |\n"

    with open(filename, 'w', encoding='utf-8') as pf:
        pf.write(content)

print(f"Successfully regenerated all provider markdown files with Prepaid & Postpaid in {providers_dir}!")
