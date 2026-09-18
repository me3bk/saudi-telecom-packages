import json, os

with open('/home/speedlo/.gemini/antigravity/scratch/saudi-telecom-packages/packages.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

providers_dir = '/home/speedlo/.gemini/antigravity/scratch/saudi-telecom-packages/providers'
os.makedirs(providers_dir, exist_ok=True)

# Generate each provider's file
for p in db['providers']:
    p_id = p['id']
    filename = os.path.join(providers_dir, f"{p_id}.md")
    hc = p['hidden_conditions']
    
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

## 2. جدول الباقات مسبقة الدفع الحالية / Active Prepaid Packages

| اسم الباقة (Package Name) | السعر الأساسي (SAR) | السعر شامل الضريبة 15% (SAR) | البيانات العامة (General Data) | بيانات السوشيال (Social Data) | الدقائق المحلية (Minutes) | الصلاحية (Validity) | تكلفة الجيجا العام (SAR/General GB) | المزايا الحصرية (Special Perks) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
"""
    for pkg in p['packages']:
        gen = f"{int(pkg['general_data_gb'])} GB" if pkg['general_data_gb'] < 1000 else "لا محدود (Unlimited)"
        if pkg['unlimited_social']:
            soc = "**لا محدود (Unlimited)**"
        elif pkg['social_data_gb'] > 0:
            soc = f"{int(pkg['social_data_gb'])} GB"
        else:
            soc = "0 GB"
        
        mins = f"{pkg['local_minutes']}" if pkg['local_minutes'] < 9999 else "لا محدود (Unlimited)"
        
        if pkg['general_data_gb'] < 1000 and pkg['general_data_gb'] > 0:
            cost_gen = f"{pkg['price_vat'] / pkg['general_data_gb']:.2f} ريال"
        else:
            cost_gen = "غير محدود"
            
        content += f"| **{pkg['name_ar']}**<br>*{pkg['name_en']}* | {pkg['price_base']:.2f} | **{pkg['price_vat']:.2f}** | **{gen}** | {soc} | {mins} | {pkg['validity_days']} يوم | {cost_gen} | {pkg['special_perks_ar']} |\\n"

    with open(filename, 'w', encoding='utf-8') as pf:
        pf.write(content)

print("Generated all provider markdown files successfully!")
