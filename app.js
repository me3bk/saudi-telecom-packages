/**
 * Saudi Telecom Packages Platform
 * Modern Interactive Table & Cards Comparison Engine
 * Built for high-polish UX, dynamic multi-column sorting, and comprehensive telecom analysis
 */

const DB = {"metadata": {"title": "Saudi Telecom Prepaid Packages Database (دليل باقات مسبق الدفع في السعودية)", "source": "Official Operator Websites & Communications, Space & Technology Commission (CST / هيئة الاتصالات والفضاء والتقنية)", "currency": "SAR (ريال سعودي)", "vat_rate": 0.15, "last_updated": "2026-09-18", "regulatory_notes": {"voice_metering": "All local voice calls in Saudi Arabia are metered per second by CST regulations (حساب المكالمات بالثانية).", "data_metering": "Standard mobile data session metering block across all operators is 100 KB (حساب البيانات في كتل بحجم 100 كيلوبايت لكل جلسة).", "hotspot_restriction": "Unlimited social media/apps allowances generally do NOT apply to hotspot/tethering; hotspot data is deducted from the general data balance (بث الإنترنت الهوتسبوت يُخصم من البيانات العامة).", "vpn_voip_rule": "In-app VoIP calls (WhatsApp, etc.) are restricted by regulation; using VPN routes all traffic to general data (استخدام VPN يخصم من البيانات العامة وليس السوشيال)."}}, "providers": [{"id": "stc", "name_ar": "إس تي سي (stc)", "name_en": "stc", "network": "stc (المشغل الرئيسي)", "type": "MNO (مشغل رئيسي)", "website": "https://www.stc.com.sa/", "hidden_conditions": {"metering_block_data": "100 KB (كل جلسة تقرب لأقرب 100 كيلوبايت)", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": true, "vowifi_notes": "مدعومة رسميًا على سوا (stc WiFi Calling) بدون رسوم إضافية وتخصم من دقائق الباقة.", "volte_supported": true, "throttling_fup": "لا يوجد خنق سرعة على سعة البيانات العامة المحددة. في باقات السوشيال المفتوح تطبق سياسة الاستخدام العادل لمنع الاستخدام التجاري فقط.", "hotspot_policy": "الهوتسبوت يخصم من رصيد البيانات العامة.", "data_rollover": false}, "packages": [{"name_ar": "سوا بيسك", "name_en": "Sawa Basic", "price_base": 30.0, "price_vat": 34.5, "validity_days": 28, "general_data_gb": 1.0, "social_data_gb": 1.0, "unlimited_social": false, "local_minutes": 100, "special_perks_ar": "أرخص باقة أساسية للمكالمات الخفيفة", "special_perks_en": "Lowest entry-level plan for basic usage", "sms": 0}, {"name_ar": "سوا لايك بلس (العرض الجديد)", "name_en": "Sawa Like Plus (Promo)", "price_base": 75.0, "price_vat": 86.25, "validity_days": 28, "general_data_gb": 20.0, "social_data_gb": 20.0, "unlimited_social": false, "local_minutes": 540, "special_perks_ar": "مضاعفة البيانات (20 جيجا عام + 20 جيجا سوشيال) وتغطية stc الأوسع", "special_perks_en": "Doubled data allowance (20GB general + 20GB social), widest stc coverage", "sms": 100}, {"name_ar": "سوا كابتن", "name_en": "Sawa Captain", "price_base": 85.0, "price_vat": 97.75, "validity_days": 28, "general_data_gb": 30.0, "social_data_gb": 0.0, "unlimited_social": false, "local_minutes": 600, "special_perks_ar": "30 جيجا نت عام + خرائط قوقل وواتساب لا محدود مخصصة لكباتن التوصيل والتنقل", "special_perks_en": "30GB general data + unlimited Google Maps & WhatsApp, ideal for couriers", "sms": 200}, {"name_ar": "سوا شير بلس", "name_en": "Sawa Share Plus", "price_base": 115.0, "price_vat": 132.25, "validity_days": 28, "general_data_gb": 40.0, "social_data_gb": 55.0, "unlimited_social": false, "local_minutes": 1520, "special_perks_ar": "إجمالي 95 جيجابايت مع دقائق وفيرة", "special_perks_en": "Total 95GB combined data with high call volume", "sms": 300}, {"name_ar": "سوا 120", "name_en": "Sawa 120", "price_base": 120.0, "price_vat": 138.0, "validity_days": 28, "general_data_gb": 45.0, "social_data_gb": 0.0, "unlimited_social": true, "social_apps": ["WhatsApp", "Snapchat", "Facebook"], "local_minutes": 1210, "special_perks_ar": "45 جيجا نت عام + واتساب وسناب وفيسبوك مفتوح", "special_perks_en": "45GB general data + unlimited WhatsApp, Snapchat & Facebook", "sms": 300}, {"name_ar": "سوا 150", "name_en": "Sawa 150", "price_base": 150.0, "price_vat": 172.5, "validity_days": 28, "general_data_gb": 70.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1150, "special_perks_ar": "70 جيجا نت عام + سوشيال ميديا لا محدود بالكامل", "special_perks_en": "70GB general data + fully unlimited social media", "sms": 500}, {"name_ar": "سوا بوست بلس", "name_en": "Sawa Post Plus", "price_base": 170.0, "price_vat": 195.5, "validity_days": 28, "general_data_gb": 74.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 500, "special_perks_ar": "مكالمات لا محدودة داخل stc + 500 دقيقة خارج الشبكة + سوشيال لا محدود", "special_perks_en": "Unlimited on-net stc calls + 500 off-net mins + unlimited social", "sms": 500}, {"name_ar": "سوا ستار بلس", "name_en": "Sawa Star Plus", "price_base": 240.0, "price_vat": 276.0, "validity_days": 28, "general_data_gb": 126.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1500, "special_perks_ar": "126 جيجا نت عام + سوشيال لا محدود", "special_perks_en": "126GB general data + unlimited social", "sms": 1500}, {"name_ar": "سوا هيرو", "name_en": "Sawa Hero", "price_base": 360.0, "price_vat": 414.0, "validity_days": 28, "general_data_gb": 9999.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "إنترنت ومكالمات لا محدودة بالكامل بدون سياسة استخدام عادل يومية معلنة", "special_perks_en": "Completely unlimited data and calls with no stated daily cap", "sms": 9999}], "network_code": "stc"}, {"id": "jawwy", "name_ar": "جوّي من stc (Jawwy)", "name_en": "Jawwy by stc", "network": "stc", "type": "Digital Brand on stc (علامة رقمية)", "website": "https://www.jawwy.sa/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": false, "vowifi_notes": "خدمة WiFi Calling غير مفعلة افتراضياً لمعظم خطوط جوّي مقارنة بـ stc سوا، وتعتمد على تحديثات ملف المشغل الخاص بالأجهزة.", "volte_supported": true, "throttling_fup": "لا يوجد خنق سرعة على الجيجابايت العامة. السوشيال اللامحدود لا يدعم مشاركة الهوتسبوت.", "hotspot_policy": "بيانات الهوتسبوت تُخصم حصراً من الرصيد العام.", "data_rollover": false, "special_feature": "إمكانية مشاركة رصيد البيانات والدقائق بين ما يصل إلى 3 شرائح تحت نفس الحساب عبر التطبيق."}, "packages": [{"name_ar": "جوّي 45", "name_en": "Jawwy 45", "price_base": 45.0, "price_vat": 51.75, "validity_days": 30, "general_data_gb": 2.0, "social_data_gb": 2.0, "unlimited_social": false, "local_minutes": 280, "special_perks_ar": "باقة دخول اقتصادية صالحة 30 يوماً", "special_perks_en": "Budget entry plan valid for 30 days", "sms": 0}, {"name_ar": "جوّي 70", "name_en": "Jawwy 70", "price_base": 70.0, "price_vat": 80.5, "validity_days": 30, "general_data_gb": 21.0, "social_data_gb": 20.0, "unlimited_social": false, "local_minutes": 350, "special_perks_ar": "41 جيجابايت إجمالية (21 عام + 20 سوشيال) ومشاركة الرصيد بين الشرائح", "special_perks_en": "41GB total (21GB general + 20GB social), balance sharing across SIMs", "sms": 100}, {"name_ar": "جوّي 90", "name_en": "Jawwy 90", "price_base": 90.0, "price_vat": 103.5, "validity_days": 30, "general_data_gb": 31.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 500, "special_perks_ar": "31 جيجا نت عام + سوشيال ميديا لا محدود على أبراج stc", "special_perks_en": "31GB general data + unlimited social media on stc towers", "sms": 200}, {"name_ar": "جوّي 110", "name_en": "Jawwy 110", "price_base": 110.0, "price_vat": 126.5, "validity_days": 30, "general_data_gb": 45.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1000, "special_perks_ar": "45 جيجا نت عام + سوشيال لا محدود + 1000 دقيقة", "special_perks_en": "45GB general data + unlimited social + 1000 mins", "sms": 300}, {"name_ar": "جوّي 150", "name_en": "Jawwy 150", "price_base": 150.0, "price_vat": 172.5, "validity_days": 30, "general_data_gb": 71.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1000, "special_perks_ar": "71 جيجا نت عام + سوشيال لا محدود", "special_perks_en": "71GB general data + unlimited social", "sms": 500}, {"name_ar": "جوّي 200", "name_en": "Jawwy 200", "price_base": 200.0, "price_vat": 230.0, "validity_days": 30, "general_data_gb": 102.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1300, "special_perks_ar": "102 جيجا نت عام + سوشيال لا محدود + 1300 دقيقة", "special_perks_en": "102GB general data + unlimited social + 1300 mins", "sms": 1000}], "network_code": "stc"}, {"id": "virgin", "name_ar": "فيرجن موبايل (Virgin Mobile)", "name_en": "Virgin Mobile Saudi", "network": "stc", "type": "MVNO on stc (مشغل افتراضي)", "website": "https://virginmobile.sa/ar/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": false, "vowifi_notes": "خدمة VoWiFi غير معتمدة رسمياً لمعظم أجهزة مسبق الدفع لفيرجن.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على باقة البيانات العامة الصافية. باقات السوشيال المفتوح مخصصة للاستخدام الشخصي المباشر.", "hotspot_policy": "مشاركة الهوتسبوت تخصم من رصيد البيانات العامة.", "data_rollover": false}, "packages": [{"name_ar": "فيرجن 45", "name_en": "Virgin 45", "price_base": 45.0, "price_vat": 51.75, "validity_days": 28, "general_data_gb": 3.0, "social_data_gb": 1.0, "unlimited_social": false, "local_minutes": 250, "special_perks_ar": "اقتصادية للمكالمات الخفيفة", "special_perks_en": "Light usage entry plan", "sms": 0}, {"name_ar": "فيرجن 70", "name_en": "Virgin 70", "price_base": 70.0, "price_vat": 80.5, "validity_days": 28, "general_data_gb": 20.0, "social_data_gb": 20.0, "unlimited_social": false, "local_minutes": 350, "special_perks_ar": "40 جيجابايت إجمالية على شبكة stc بسعر 80.5 ريال", "special_perks_en": "40GB total on stc network for 80.50 SAR", "sms": 200}, {"name_ar": "فيرجن 90", "name_en": "Virgin 90", "price_base": 90.0, "price_vat": 103.5, "validity_days": 28, "general_data_gb": 30.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 450, "special_perks_ar": "30 جيجا نت عام + سوشيال ميديا لا محدود", "special_perks_en": "30GB general data + unlimited social", "sms": 300}, {"name_ar": "فيرجن 100", "name_en": "Virgin 100", "price_base": 100.0, "price_vat": 115.0, "validity_days": 28, "general_data_gb": 40.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 750, "special_perks_ar": "أعلى سعة بيانات عامة على شبكة stc في حدود 115 ريال (40 جيجا + سوشيال مفتوح)", "special_perks_en": "Highest general data on stc under 115 SAR (40GB general + unlimited social)", "sms": 500}, {"name_ar": "فيرجن 110", "name_en": "Virgin 110", "price_base": 110.0, "price_vat": 126.5, "validity_days": 28, "general_data_gb": 45.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 745, "special_perks_ar": "45 جيجا نت عام + سوشيال لا محدود", "special_perks_en": "45GB general data + unlimited social", "sms": 500}, {"name_ar": "فيرجن 150", "name_en": "Virgin 150", "price_base": 150.0, "price_vat": 172.5, "validity_days": 28, "general_data_gb": 55.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "55 جيجا نت عام + سوشيال ومكالمات لا محدودة", "special_perks_en": "55GB general data + unlimited social & unlimited calls", "sms": 9999}, {"name_ar": "فيرجن 185", "name_en": "Virgin 185", "price_base": 185.0, "price_vat": 212.75, "validity_days": 28, "general_data_gb": 80.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "80 جيجا نت عام + سوشيال ومكالمات لا محدودة", "special_perks_en": "80GB general data + unlimited social & unlimited calls", "sms": 9999}], "network_code": "stc"}, {"id": "mobily", "name_ar": "موبايلي (Mobily)", "name_en": "Mobily", "network": "موبايلي (المشغل الرئيسي)", "type": "MNO (مشغل رئيسي)", "website": "https://www.mobily.com.sa/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": true, "vowifi_notes": "مدعومة رسميًا على خطوط مسبق الدفع (Mobily VoWiFi) للأجهزة المتوافقة.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على حزم البيانات العامة المحددة. باقات السوشيال المفتوح تخضع لسياسة الاستخدام الشخصي المباشر.", "hotspot_policy": "الهوتسبوت يُخصم من رصيد البيانات العامة.", "data_rollover": false}, "packages": [{"name_ar": "موبايلي 30", "name_en": "Mobily 30", "price_base": 30.0, "price_vat": 34.5, "validity_days": 28, "general_data_gb": 1.0, "social_data_gb": 1.0, "unlimited_social": false, "local_minutes": 100, "special_perks_ar": "باقة أساسية خفيفة", "special_perks_en": "Basic light package", "sms": 0}, {"name_ar": "موبايلي 75 (عرض مضاعف)", "name_en": "Mobily 75 (Double Promo)", "price_base": 75.0, "price_vat": 86.25, "validity_days": 28, "general_data_gb": 25.0, "social_data_gb": 21.0, "unlimited_social": false, "local_minutes": 500, "special_perks_ar": "عرض مميز: 25 جيجا عام (10+15) + 21 جيجا سوشيال (10+11) بإجمالي 46 جيجا", "special_perks_en": "Promo: 25GB general (10+15) + 21GB social (10+11), total 46GB", "sms": 200}, {"name_ar": "موبايلي 110", "name_en": "Mobily 110", "price_base": 110.0, "price_vat": 126.5, "validity_days": 28, "general_data_gb": 40.0, "social_data_gb": 60.0, "unlimited_social": false, "local_minutes": 1500, "special_perks_ar": "40 جيجا عام + 60 جيجا سوشيال (إجمالي 100 جيجابايت ضخمة!)", "special_perks_en": "40GB general + 60GB social (Total 100GB!)", "sms": 500}, {"name_ar": "موبايلي 150", "name_en": "Mobily 150", "price_base": 150.0, "price_vat": 172.5, "validity_days": 28, "general_data_gb": 55.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 3000, "special_perks_ar": "55 جيجا نت عام + سوشيال لا محدود + 3000 دقيقة", "special_perks_en": "55GB general + unlimited social + 3000 mins", "sms": 1000}, {"name_ar": "موبايلي 150 (بيانات أكثر)", "name_en": "Mobily 150 More Data", "price_base": 150.0, "price_vat": 172.5, "validity_days": 28, "general_data_gb": 70.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1000, "special_perks_ar": "70 جيجا نت عام + سوشيال لا محدود + 1000 دقيقة", "special_perks_en": "70GB general + unlimited social + 1000 mins", "sms": 1000}, {"name_ar": "موبايلي 180", "name_en": "Mobily 180", "price_base": 180.0, "price_vat": 207.0, "validity_days": 28, "general_data_gb": 80.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "80 جيجا نت عام + سوشيال ومكالمات لا محدودة", "special_perks_en": "80GB general + unlimited social & calls", "sms": 9999}, {"name_ar": "موبايلي 220", "name_en": "Mobily 220", "price_base": 220.0, "price_vat": 253.0, "validity_days": 28, "general_data_gb": 100.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "100 جيجا نت عام + سوشيال ومكالمات لا محدودة", "special_perks_en": "100GB general + unlimited social & calls", "sms": 9999}, {"name_ar": "موبايلي 360", "name_en": "Mobily 360", "price_base": 360.0, "price_vat": 414.0, "validity_days": 28, "general_data_gb": 9999.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "إنترنت لا محدود بالكامل ومكالمات لا محدودة", "special_perks_en": "Truly unlimited data & calls", "sms": 9999}], "network_code": "mobily"}, {"id": "lebara", "name_ar": "ليبارا (Lebara)", "name_en": "Lebara Saudi", "network": "موبايلي", "type": "MVNO on Mobily (مشغل افتراضي)", "website": "https://www.lebara.sa/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": false, "vowifi_notes": "خدمة VoWiFi غير مفعلة افتراضياً لمعظم خطوط مسبق الدفع لليبارا.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على الجيجابايت العامة المحددة. تطبق سياسة الاستخدام الشخصي.", "hotspot_policy": "الهوتسبوت يخصم من البيانات العامة.", "data_rollover": false, "special_feature": "مكافأة 30% رصيد إضافي مع كل عملية شحن بـ 30 ريال أو أكثر."}, "packages": [{"name_ar": "يلا 70", "name_en": "Yalla 70", "price_base": 70.0, "price_vat": 80.5, "validity_days": 30, "general_data_gb": 15.0, "social_data_gb": 20.0, "unlimited_social": false, "local_minutes": 350, "special_perks_ar": "35 جيجا إجمالية صالحة 30 يوماً", "special_perks_en": "35GB total data valid for 30 days", "sms": 200}, {"name_ar": "يلا 90", "name_en": "Yalla 90", "price_base": 90.0, "price_vat": 103.5, "validity_days": 30, "general_data_gb": 35.0, "social_data_gb": 55.0, "unlimited_social": false, "local_minutes": 600, "special_perks_ar": "أعلى كمية بيانات إجمالية في السوق السعودي تحت 105 ريال (90 جيجابايت: 35 عام + 55 سوشيال)", "special_perks_en": "Highest combined data in KSA under 105 SAR (90GB total: 35GB gen + 55GB social)", "sms": 300}, {"name_ar": "فليكس 100", "name_en": "Flex 100", "price_base": 100.0, "price_vat": 115.0, "validity_days": 28, "general_data_gb": 35.0, "social_data_gb": 35.0, "unlimited_social": false, "local_minutes": 900, "special_perks_ar": "70 جيجا إجمالية + 900 دقيقة تشمل مكالمات دولية لـ 10 دول (مصر، السودان، اليمن، إلخ)", "special_perks_en": "70GB total + 900 mins including 10 international destinations", "sms": 900}, {"name_ar": "يلا 110", "name_en": "Yalla 110", "price_base": 110.0, "price_vat": 126.5, "validity_days": 30, "general_data_gb": 40.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1100, "special_perks_ar": "40 جيجا نت عام + سوشيال لا محدود + 1100 دقيقة", "special_perks_en": "40GB general + unlimited social + 1100 mins", "sms": 500}, {"name_ar": "يلا ستريم 125", "name_en": "Yalla Stream 125", "price_base": 125.0, "price_vat": 143.75, "validity_days": 35, "general_data_gb": 50.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1000, "special_perks_ar": "صلاحية 35 يوماً مع ستريم وسوشيال لا محدود و 50 جيجا نت عام", "special_perks_en": "35-day validity, unlimited streaming & social, 50GB general", "sms": 1000}, {"name_ar": "يلا 150", "name_en": "Yalla 150", "price_base": 150.0, "price_vat": 172.5, "validity_days": 30, "general_data_gb": 70.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1000, "special_perks_ar": "70 جيجا نت عام + سوشيال لا محدود", "special_perks_en": "70GB general + unlimited social", "sms": 1000}], "network_code": "mobily"}, {"id": "zain", "name_ar": "زين السعودية (Zain)", "name_en": "Zain Saudi Arabia", "network": "زين (المشغل الرئيسي)", "type": "MNO (مشغل رئيسي)", "website": "https://sa.zain.com/ar/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": true, "vowifi_notes": "مدعومة رسميًا على باقات شباب ومسبق الدفع للأجهزة المتوافقة.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على رصيد الجيجابايت المحددة. باقات السوشيال المفتوح تخضع للاستخدام الشخصي.", "hotspot_policy": "الهوتسبوت يُخصم من البيانات العامة.", "data_rollover": false}, "packages": [{"name_ar": "شباب 79", "name_en": "Shabab 79", "price_base": 68.7, "price_vat": 79.0, "validity_days": 28, "general_data_gb": 15.0, "social_data_gb": 15.0, "unlimited_social": false, "local_minutes": 500, "special_perks_ar": "السعر النهائي 79 ريال شامل الضريبة تماماً بدون مبالغ كسور", "special_perks_en": "Flat 79 SAR including VAT exactly", "sms": 200}, {"name_ar": "شباب 119", "name_en": "Shabab 119", "price_base": 103.48, "price_vat": 119.0, "validity_days": 28, "general_data_gb": 30.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1500, "special_perks_ar": "30 جيجا نت عام + سوشيال لا محدود + 1500 دقيقة", "special_perks_en": "30GB general + unlimited social + 1500 mins", "sms": 500}, {"name_ar": "شباب 169", "name_en": "Shabab 169", "price_base": 146.96, "price_vat": 169.0, "validity_days": 28, "general_data_gb": 60.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "60 جيجا نت عام + سوشيال لا محدود ومكالمات لا محدودة", "special_perks_en": "60GB general + unlimited social & calls", "sms": 9999}, {"name_ar": "شباب 199", "name_en": "Shabab 199", "price_base": 173.04, "price_vat": 199.0, "validity_days": 28, "general_data_gb": 80.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1500, "special_perks_ar": "80 جيجا نت عام + سوشيال لا محدود", "special_perks_en": "80GB general + unlimited social", "sms": 1500}, {"name_ar": "شباب 409", "name_en": "Shabab 409", "price_base": 355.65, "price_vat": 409.0, "validity_days": 28, "general_data_gb": 9999.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "إنترنت ومكالمات وسوشيال لا محدود بالكامل", "special_perks_en": "Completely unlimited internet, social & calls", "sms": 9999}], "network_code": "zain"}, {"id": "yaqoot", "name_ar": "ياقوت (Yaqoot)", "name_en": "Yaqoot by Zain", "network": "زين", "type": "Digital Brand on Zain (علامة رقمية)", "website": "https://yaqoot.sa/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": true, "vowifi_notes": "مدعومة عبر شبكة زين للأجهزة المتوافقة، وتخصم من رصيد الدقائق.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على باقة البيانات العامة. تطبيقات السوشيال المختارة غير محدودة بالكامل داخل التطبيقات الرسمية.", "hotspot_policy": "الهوتسبوت يُخصم حصراً من البيانات العامة، ولا يُحسب ضمن التطبيقات اللامحدودة!", "data_rollover": false, "special_feature": "تجربة رقمية بالكامل، مع ميزة إهداء تطبيقات مفتوحة للأصدقاء المشتركين في ياقوت."}, "packages": [{"name_ar": "ياقوت 67", "name_en": "Yaqoot 67", "price_base": 58.26, "price_vat": 67.0, "validity_days": 28, "general_data_gb": 7.0, "social_data_gb": 7.0, "unlimited_social": false, "local_minutes": 400, "special_perks_ar": "14 جيجا إجمالية بسعر 67 ريال شامل الضريبة", "special_perks_en": "14GB total for 67 SAR inclusive of VAT", "sms": 300}, {"name_ar": "ياقوت 85", "name_en": "Yaqoot 85", "price_base": 73.91, "price_vat": 85.0, "validity_days": 28, "general_data_gb": 15.0, "social_data_gb": 15.0, "unlimited_social": false, "local_minutes": 750, "special_perks_ar": "30 جيجا إجمالية + 750 دقيقة محلية ودولية", "special_perks_en": "30GB total + 750 local & international mins", "sms": 300}, {"name_ar": "ياقوت 90", "name_en": "Yaqoot 90", "price_base": 78.26, "price_vat": 90.0, "validity_days": 28, "general_data_gb": 30.0, "social_data_gb": 0.0, "unlimited_social": true, "unlimited_apps_count": 7, "local_minutes": 300, "special_perks_ar": "30 جيجا نت عام + 7 تطبيقات لا محدودة (تختار منها YouTube, TikTok, Snap, X, etc.)", "special_perks_en": "30GB general data + 7 unlimited chosen apps (YouTube, TikTok, Snap, etc.)", "sms": 300}, {"name_ar": "ياقوت 103.5", "name_en": "Yaqoot 103.5", "price_base": 90.0, "price_vat": 103.5, "validity_days": 28, "general_data_gb": 56.0, "social_data_gb": 0.0, "unlimited_social": false, "local_minutes": 300, "special_perks_ar": "البطل المطلق للبيانات العامة الصافية: 56 جيجابايت نت عام بدون أي تقييد لتطبيقات", "special_perks_en": "The absolute king of pure general data: 56GB unrestricted data", "sms": 300}, {"name_ar": "ياقوت 125", "name_en": "Yaqoot 125", "price_base": 108.7, "price_vat": 125.0, "validity_days": 28, "general_data_gb": 50.0, "social_data_gb": 0.0, "unlimited_social": true, "unlimited_apps_count": 7, "local_minutes": 500, "special_perks_ar": "50 جيجا نت عام + 7 تطبيقات لا محدودة", "special_perks_en": "50GB general + 7 unlimited apps", "sms": 300}, {"name_ar": "ياقوت 175", "name_en": "Yaqoot 175", "price_base": 152.17, "price_vat": 175.0, "validity_days": 28, "general_data_gb": 75.0, "social_data_gb": 0.0, "unlimited_social": true, "unlimited_apps_count": 7, "local_minutes": 750, "special_perks_ar": "75 جيجا نت عام + 7 تطبيقات لا محدودة", "special_perks_en": "75GB general + 7 unlimited apps", "sms": 300}, {"name_ar": "ياقوت 220.57", "name_en": "Yaqoot 220.57", "price_base": 191.8, "price_vat": 220.57, "validity_days": 28, "general_data_gb": 100.0, "social_data_gb": 0.0, "unlimited_social": true, "unlimited_apps_count": 7, "local_minutes": 1000, "special_perks_ar": "100 جيجا نت عام + 7 تطبيقات لا محدودة", "special_perks_en": "100GB general + 7 unlimited apps", "sms": 9999}, {"name_ar": "ياقوت 385", "name_en": "Yaqoot 385", "price_base": 334.78, "price_vat": 385.0, "validity_days": 28, "general_data_gb": 9999.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "إنترنت لا محدود بالكامل ومكالمات لا محدودة", "special_perks_en": "Truly unlimited internet & calls", "sms": 9999}], "network_code": "zain"}, {"id": "salam", "name_ar": "سلام موبايل (Salam Mobile)", "name_en": "Salam Mobile", "network": "زين", "type": "MVNO on Zain (مشغل افتراضي)", "website": "https://salam.sa/ar/consumer/mobile/prepaid/solo-plans/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": false, "vowifi_notes": "خدمة VoWiFi غير مفعلة افتراضياً لمعظم خطوط مسبق الدفع لسلام.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على باقة البيانات العامة.", "hotspot_policy": "الهوتسبوت يُخصم من البيانات العامة.", "data_rollover": true, "data_rollover_notes": "ميزة ترحيل البيانات المتبقية للشهر القادم (حتى 20 جيجا لباقات سولو 74 و 99، وحتى 40 جيجا للباقات الأعلى)."}, "packages": [{"name_ar": "سولو 74", "name_en": "Solo 74", "price_base": 74.5, "price_vat": 85.68, "validity_days": 30, "general_data_gb": 20.0, "social_data_gb": 20.0, "unlimited_social": false, "local_minutes": 450, "special_perks_ar": "40 جيجا إجمالية + ترحيل حتى 20 جيجا للشهر التالي + 450 رسالة", "special_perks_en": "40GB total + rollover up to 20GB to next month + 450 SMS", "sms": 450}, {"name_ar": "سولو 99", "name_en": "Solo 99", "price_base": 99.0, "price_vat": 113.85, "validity_days": 30, "general_data_gb": 35.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1000, "special_perks_ar": "35 جيجا نت عام + سوشيال ميديا لا محدود + ترحيل حتى 20 جيجا", "special_perks_en": "35GB general data + unlimited social + rollover up to 20GB", "sms": 450}, {"name_ar": "سولو 149", "name_en": "Solo 149", "price_base": 149.0, "price_vat": 171.35, "validity_days": 30, "general_data_gb": 59.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "59 جيجا عام + سوشيال ومكالمات لا محدودة + ترحيل 25 جيجا", "special_perks_en": "59GB general + unlimited social & calls + 25GB rollover", "sms": 9999}, {"name_ar": "سولو 179", "name_en": "Solo 179", "price_base": 179.5, "price_vat": 206.43, "validity_days": 30, "general_data_gb": 79.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "79 جيجا عام + سوشيال ومكالمات لا محدودة + ترحيل 40 جيجا", "special_perks_en": "79GB general + unlimited social & calls + 40GB rollover", "sms": 9999}, {"name_ar": "سولو 199", "name_en": "Solo 199", "price_base": 199.0, "price_vat": 228.85, "validity_days": 30, "general_data_gb": 80.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1800, "special_perks_ar": "80 جيجا عام + سوشيال لا محدود + 100 دقيقة دولية + ترحيل 40 جيجا", "special_perks_en": "80GB general + unlimited social + 100 intl mins + 40GB rollover", "sms": 450}, {"name_ar": "سولو اللامحدودة", "name_en": "Solo Infinite", "price_base": 359.0, "price_vat": 412.85, "validity_days": 30, "general_data_gb": 9999.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "إنترنت ومكالمات وسوشيال لا محدود بالكامل", "special_perks_en": "Completely unlimited data, calls & social", "sms": 9999}], "network_code": "zain"}, {"id": "redbull", "name_ar": "ريد بُل موبايل (Red Bull MOBILE)", "name_en": "Red Bull MOBILE Saudi", "network": "زين", "type": "MVNO on Zain (مشغل افتراضي)", "website": "https://www.redbullmobile.sa/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": false, "vowifi_notes": "خدمة VoWiFi غير معتمدة رسمياً كخدمة قياسية لشرائح ريد بُل.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على جيجاكوين البيانات العامة.", "hotspot_policy": "الهوتسبوت يخصم من رصيد البيانات العامة.", "data_rollover": true, "data_rollover_notes": "نظام الجيجاكوين (Gigacoins): تتحول جميع البيانات المتبقية غير المستخدمة إلى جيجاكوين لا تنتهي صلاحيتها أبداً طالما شريحتك نشطة!"}, "packages": [{"name_ar": "مزاجي 60", "name_en": "Mazaj 60", "price_base": 60.0, "price_vat": 69.0, "validity_days": 30, "general_data_gb": 6.0, "social_data_gb": 6.0, "unlimited_social": false, "local_minutes": 400, "special_perks_ar": "12 جيجاكوين لا تنتهي صلاحيتها", "special_perks_en": "12 Gigacoins that never expire", "sms": 400}, {"name_ar": "مزاجي سمارت 75 (جديد)", "name_en": "Mazaj Smart 75", "price_base": 75.0, "price_vat": 86.25, "validity_days": 28, "general_data_gb": 25.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 400, "special_perks_ar": "25 جيجاكوين عامة لا تنتهي + سوشيال ميديا لا محدود", "special_perks_en": "25 non-expiring Gigacoins + unlimited social media", "sms": 400}, {"name_ar": "مزاجي 80", "name_en": "Mazaj 80", "price_base": 80.0, "price_vat": 92.0, "validity_days": 30, "general_data_gb": 25.0, "social_data_gb": 35.0, "unlimited_social": false, "local_minutes": 500, "special_perks_ar": "60 جيجاكوين إجمالية لا تنتهي صلاحيتها أبداً (25 عام + 35 سوشيال)", "special_perks_en": "60 total non-expiring Gigacoins (25GB gen + 35GB social)", "sms": 500}, {"name_ar": "باقة الضيف 90", "name_en": "Visitor 90", "price_base": 90.0, "price_vat": 103.5, "validity_days": 28, "general_data_gb": 50.0, "social_data_gb": 0.0, "unlimited_social": false, "local_minutes": 300, "special_perks_ar": "50 جيجابايت إنترنت عام صافي بدون تقييد", "special_perks_en": "50GB pure general data without app restrictions", "sms": 45}, {"name_ar": "مزاجي 95", "name_en": "Mazaj 95", "price_base": 95.0, "price_vat": 109.25, "validity_days": 30, "general_data_gb": 35.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 800, "special_perks_ar": "35 جيجاكوين عامة لا تنتهي + سوشيال ميديا لا محدود + 800 دقيقة", "special_perks_en": "35 non-expiring Gigacoins + unlimited social + 800 mins", "sms": 800}, {"name_ar": "مزاجي ماكس 104.3", "name_en": "Mazaj Max 104.3", "price_base": 104.3, "price_vat": 119.95, "validity_days": 30, "general_data_gb": 40.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 950, "special_perks_ar": "40 جيجاكوين عامة + سوشيال ميديا لا محدود", "special_perks_en": "40 Gigacoins + unlimited social", "sms": 950}, {"name_ar": "مزاجي 120", "name_en": "Mazaj 120", "price_base": 120.0, "price_vat": 138.0, "validity_days": 30, "general_data_gb": 50.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1050, "special_perks_ar": "50 جيجاكوين عامة + سوشيال ميديا لا محدود", "special_perks_en": "50 Gigacoins + unlimited social", "sms": 9999}, {"name_ar": "مزاجي 160+", "name_en": "Mazaj 160+", "price_base": 160.0, "price_vat": 184.0, "validity_days": 30, "general_data_gb": 66.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "66 جيجاكوين عامة + سوشيال ومكالمات لا محدودة", "special_perks_en": "66 Gigacoins + unlimited social & calls", "sms": 400}, {"name_ar": "مزاجي 360+", "name_en": "Mazaj 360+", "price_base": 360.0, "price_vat": 414.0, "validity_days": 30, "general_data_gb": 9999.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "إنترنت لا محدود + 30 جيجاكوين + مكالمات لا محدودة", "special_perks_en": "Unlimited data + 30 Gigacoins + unlimited calls", "sms": 400}], "network_code": "zain"}]};

const state = {
  lang: 'ar',
  viewMode: (typeof window !== 'undefined' && window.innerWidth <= 768) ? 'cards' : 'table', // auto default to cards on mobile
  searchQuery: '',
  network: 'all',    // 'all' | 'stc' | 'mobily' | 'zain'
  provider: 'all',   // 'all' | 'stc' | 'jawwy' | 'virgin' | 'mobily' | 'lebara' | 'zain' | 'yaqoot' | 'salam' | 'redbull'
  minPrice: 0,
  maxPrice: 450,
  sortBy: 'minutes-desc', // minutes-desc, minutes-asc, gen-desc, gen-asc, sms-desc, sms-asc, price-asc, price-desc, cost-gen-asc, total-desc, validity-desc
  activePreset: 'all',
  filterVowifiOnly: false,
  filterRolloverOnly: false,
  filterPureGeneralOnly: false,
  pinnedPackages: [],
  calcGeneralGB: 30,
  calcBudget: 120
};

// Internationalization Dictionary
const i18n = {
  ar: {
    appTitle: "دليل ومقارنة باقات الاتصالات السعودية",
    appSubtitle: "منصة المقارنة الذكية الشاملة لجميع مشغلي الاتصالات الرسميين في المملكة مع كشف الشروط الفنية والمخفية (وحدة الحساب 100KB، مكالمات الواي فاي VoWiFi، سياسة خنق السرعة FUP، وترحيل الرصيد).",
    cstBadge: "مطابق للوائح هيئة الاتصالات والفضاء والتقنية (CST)",
    searchPlaceholder: "ابحث باسم الباقة، المشغل، السعر، أو الرمز...",
    viewTable: "📊 جدول المقارنة الفوري",
    viewCards: "🎴 بطاقات تفاعلية",
    calcToggle: "⚡ حاسبة الباقة الأنسب",
    calcTitle: "🎯 أداة تحديد الباقة الذكية والموفرة حسب استهلاكك الفعلي",
    calcGenLabel: "البيانات العامة المطلوبة:",
    calcBudgetLabel: "أقصى ميزانية شهرية:",
    calcResultTitle: "الباقة المقترحة الأوفر لك:",
    networkTitle: "الشبكة الرئيسية (Host Network)",
    netAll: "جميع الشبكات (الكل)",
    netStc: "شبكة stc (سوا، جوّي، فيرجن)",
    netMobily: "شبكة موبايلي (موبايلي، ليبارا)",
    netZain: "شبكة زين (زين، ياقوت، سلام، ريد بُل)",
    presetAll: "🌟 عرض الكل",
    preset70_115: "🎯 فئة 70 - 115 ريال (الأكثر طلباً)",
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
    quickSortTitle: "⚡ ترتيب فوري بنقرة واحدة:",
    sortMinsDesc: "📞 المكالمات (الأكثر)",
    sortGenDesc: "🌐 النت العام (الأعلى)",
    sortSmsDesc: "✉️ الرسائل SMS (الأكثر)",
    sortPriceAsc: "💰 السعر (الأرخص)",
    sortCostAsc: "💡 تكلفة الجيجا (الأوفر)",
    sortValDesc: "⏳ الصلاحية (الأطول)",
    thProvider: "المشغل والشبكة",
    thName: "اسم الباقة",
    thPrice: "السعر شامل الضريبة (15%)",
    thGen: "البيانات العامة (GB)",
    thSoc: "بيانات السوشيال",
    thMins: "المكالمات (دقيقة)",
    thSms: "الرسائل (SMS)",
    thCost: "تكلفة الجيجا",
    thVal: "الصلاحية",
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
    modalSubtitle: "مقارنة تفصيلية دقيقة تشمل كافة الأسعار، توزيع البيانات، المكالمات، الرسائل، والشروط التقنية المخفية",
    hiddenTermsBtn: "🔍 تفاصيل الشروط المخفية والفنية",
    resetFilters: "🔄 إعادة ضبط الفلاتر",
    foundResults: "تم العثور على",
    mobileTableHint: "اسحب الجدول أفقياً للاطلاع على كافة الأعمدة والتفاصيل"
  },
  en: {
    appTitle: "Saudi Telecom Prepaid Packages Comparator",
    appSubtitle: "Comprehensive intelligent comparison across all 9 telecom operators in Saudi Arabia uncovering hidden terms (100KB metering block, VoWiFi support, FUP throttling, and data rollover).",
    cstBadge: "Compliant with CST Regulations (Saudi Telecom Authority)",
    searchPlaceholder: "Search by package name, operator, price, or code...",
    viewTable: "📊 Sortable Matrix Table",
    viewCards: "🎴 Interactive Cards",
    calcToggle: "⚡ Smart Package Finder",
    calcTitle: "🎯 Smart Value Recommendation Tool based on your actual usage",
    calcGenLabel: "Required General Data:",
    calcBudgetLabel: "Maximum Monthly Budget:",
    calcResultTitle: "Best Recommended Value Plan:",
    networkTitle: "Host Network",
    netAll: "All Networks (All)",
    netStc: "stc Network (Sawa, Jawwy, Virgin)",
    netMobily: "Mobily Network (Mobily, Lebara)",
    netZain: "Zain Network (Zain, Yaqoot, Salam, Red Bull)",
    presetAll: "🌟 Show All",
    preset70_115: "🎯 70 - 115 SAR Tier (Most Popular)",
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
    chkPureGen: "Pure General Data Only (No locked social apps)",
    quickSortTitle: "⚡ Instant 1-Click Sort:",
    sortMinsDesc: "📞 Calls (Highest)",
    sortGenDesc: "🌐 Data (Highest)",
    sortSmsDesc: "✉️ SMS (Highest)",
    sortPriceAsc: "💰 Price (Lowest)",
    sortCostAsc: "💡 Cost / GB (Best Value)",
    sortValDesc: "⏳ Validity (Longest)",
    thProvider: "Operator & Network",
    thName: "Package Name",
    thPrice: "Price (incl. 15% VAT)",
    thGen: "General Data (GB)",
    thSoc: "Social Media",
    thMins: "Calls (Mins)",
    thSms: "SMS",
    thCost: "Cost / GB",
    thVal: "Validity",
    thVoWiFi: "WiFi Calling",
    thRollover: "Rollover",
    thPin: "Compare 📌",
    sar: "SAR",
    day: "days",
    days: "days",
    minText: "mins",
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
    modalSubtitle: "Detailed breakdown of pricing, data allocation, minutes, SMS, and hidden regulatory technical terms",
    hiddenTermsBtn: "🔍 Reveal Technical & Hidden Terms",
    resetFilters: "🔄 Reset Filters",
    foundResults: "Found",
    mobileTableHint: "Swipe table horizontally to inspect all columns & details"
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
  document.getElementById('lbl-calc-gen').innerText = t('calcGenLabel');
  document.getElementById('lbl-calc-bud').innerText = t('calcBudgetLabel');
  document.getElementById('lbl-calc-result-title').innerText = t('calcResultTitle');
  document.getElementById('lbl-host-network-title').innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
    <span>${t('networkTitle')}</span>
  `;
  document.getElementById('lbl-filter-provider').innerText = t('lblProvider');
  document.getElementById('lbl-filter-sort').innerText = t('lblSort');
  document.getElementById('lbl-max-price').innerText = t('lblMaxPrice');
  document.getElementById('txt-chk-vowifi').innerText = t('chkVoWiFi');
  document.getElementById('txt-chk-rollover').innerText = t('chkRollover');
  document.getElementById('txt-chk-pure').innerText = t('chkPureGen');
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

// View Mode Toggle
function setViewMode(mode) {
  state.viewMode = mode;
  document.getElementById('btn-view-table').classList.toggle('active', mode === 'table');
  document.getElementById('btn-view-cards').classList.toggle('active', mode === 'cards');
  document.getElementById('table-view-container').style.display = mode === 'table' ? 'block' : 'none';
  document.getElementById('cards-view-container').style.display = mode === 'cards' ? 'grid' : 'none';
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
  state.maxPrice = 450;
  state.filterVowifiOnly = false;
  state.filterRolloverOnly = false;
  state.filterPureGeneralOnly = false;

  if (presetName === '70-115') {
    state.minPrice = 70;
    state.maxPrice = 115.01;
    state.sortBy = 'gen-desc';
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
    state.maxPrice = 450;
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
  render();
}

function resetAllFilters() {
  state.searchQuery = '';
  state.network = 'all';
  state.provider = 'all';
  state.minPrice = 0;
  state.maxPrice = 450;
  state.sortBy = 'minutes-desc';
  state.activePreset = 'all';
  state.filterVowifiOnly = false;
  state.filterRolloverOnly = false;
  state.filterPureGeneralOnly = false;

  document.getElementById('main-search').value = '';
  document.querySelectorAll('.network-chip').forEach(el => el.classList.toggle('active', el.dataset.net === 'all'));
  document.querySelectorAll('.cat-pill').forEach(el => el.classList.toggle('active', el.dataset.preset === 'all'));
  document.querySelectorAll('.quick-sort-btn').forEach(el => el.classList.remove('active'));

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
    if (th) {
      th.classList.remove('sorted-asc', 'sorted-desc');
    }
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
          <td><strong>${isAr ? '⏳ فترة الصلاحية' : '⏳ Validity Period'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center;">${i.pkg.validity_days} ${t('days')}</td>`).join('')}
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
          <td><strong>${isAr ? '⚖️ وحدة احتساب النت (CST Block)' : '⚖️ CST Data Metering Block'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-size:0.85rem;">${i.provider.hidden_conditions.metering_block_data}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>${isAr ? '🔥 سياسة الهوتسبوت وبث النت' : '🔥 Hotspot / Tethering Policy'}</strong></td>
          ${pinnedList.map(i => `<td style="text-align:center; font-size:0.82rem; color:var(--text-secondary);">${i.provider.hidden_conditions.hotspot_policy}</td>`).join('')}
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

// Expandable Calculator Panel
function toggleCalculator() {
  const drawer = document.getElementById('calculator-drawer');
  drawer.classList.toggle('open');
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
      // Price Range Filter
      if (pkg.price_vat < state.minPrice || pkg.price_vat > state.maxPrice) return;

      // Pure General Filter
      if (state.filterPureGeneralOnly && (pkg.social_data_gb > 0 || pkg.unlimited_social)) return;

      const uid = `${p.id}_${pkg.name_en.replace(/\s+/g, '_')}`;

      // Text Search Filter
      if (query) {
        const corpus = `${p.name_ar} ${p.name_en} ${pkg.name_ar} ${pkg.name_en} ${pkg.special_perks_ar} ${pkg.special_perks_en} ${pkg.price_vat}`.toLowerCase();
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
      <td class="td-pkg-name">${isAr ? pkg.name_ar : pkg.name_en}</td>
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
      <td>${pkg.validity_days} ${t('days')}</td>
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

    const card = document.createElement('div');
    card.className = 'package-card';
    if (state.activePreset === '70-115' && idx === 0) {
      card.classList.add('highlighted-match');
    }

    const maxBar = 100;
    const genWidth = Math.min(100, (pkg.general_data_gb / maxBar) * 100);
    const socWidth = pkg.unlimited_social ? 60 : Math.min(100, (pkg.social_data_gb / maxBar) * 100);

    const costStr = pkg.general_data_gb > 0 && pkg.general_data_gb < 9999
      ? (pkg.price_vat / pkg.general_data_gb).toFixed(2) + ' ' + t('sarPerGb')
      : '-';

    card.innerHTML = `
      <div>
        <div class="card-header-row">
          <span class="provider-badge-pill provider-badge-${p.id}">
            ${isAr ? p.name_ar : p.name_en}
          </span>
          <button class="card-pin-btn ${isPinned ? 'pinned' : ''}" onclick="togglePin('${uid}')" title="${isPinned ? t('pinned') : t('pinToCompare')}">
            📌
          </button>
        </div>

        <div class="card-provider-name">${isAr ? p.network : p.network_code.toUpperCase() + ' Host Network'}</div>
        <h3 class="card-pkg-title">${isAr ? pkg.name_ar : pkg.name_en}</h3>

        <div class="card-price-box">
          <span class="card-price-num">${pkg.price_vat.toFixed(2)} <small style="font-size:0.9rem;">${t('sar')}</small></span>
          <span class="card-price-meta">${pkg.validity_days} ${t('days')} (15% VAT)</span>
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
            <div class="card-stat-val">${pkg.local_minutes >= 9999 ? t('unlimitedText') : pkg.local_minutes.toLocaleString()}</div>
          </div>
          <div class="card-stat-cell">
            <div class="card-stat-title">✉️ ${t('thSms')}</div>
            <div class="card-stat-val">${pkg.sms >= 9999 ? t('unlimitedText') : (pkg.sms > 0 ? pkg.sms.toLocaleString() : (isAr ? 'حسب الاستهلاك' : 'PAYG'))}</div>
          </div>
          <div class="card-stat-cell">
            <div class="card-stat-title">💡 ${t('thCost')}</div>
            <div class="card-stat-val">${costStr}</div>
          </div>
          <div class="card-stat-cell">
            <div class="card-stat-title">⏳ ${t('thVal')}</div>
            <div class="card-stat-val">${pkg.validity_days} ${t('days')}</div>
          </div>
        </div>

        <!-- Badges List -->
        <div class="card-perks-badges">
          ${hc.vowifi_supported ? '<span class="perk-badge badge-vowifi">📶 VoWiFi</span>' : '<span class="perk-badge badge-novowifi">❌ بدون VoWiFi</span>'}
          ${hc.data_rollover ? '<span class="perk-badge badge-rollover">🔄 ترحيل الرصيد</span>' : ''}}
          ${pkg.unlimited_social ? '<span class="perk-badge badge-unlimsoc">🚀 سوشيال مفتوح</span>' : ''}}
        </div>
      </div>

      <!-- Expandable Hidden Terms -->
      <div>
        <button class="hidden-terms-toggle" onclick="toggleCardTerms(this)">
          ${t('hiddenTermsBtn')} ▾
        </button>
        <div class="hidden-terms-drawer">
          <div style="margin-bottom:4px;"><strong>⚖️ ${isAr ? 'وحدة الحساب:' : 'Metering Block:'}</strong> ${hc.metering_block_data}</div>
          <div style="margin-bottom:4px;"><strong>📶 ${isAr ? 'مكالمات الواي فاي:' : 'WiFi Calling:'}</strong> ${hc.vowifi_notes}</div>
          <div style="margin-bottom:4px;"><strong>🔥 ${isAr ? 'الهوتسبوت:' : 'Hotspot:'}</strong> ${hc.hotspot_policy}</div>
          <div><strong>⚡ ${isAr ? 'خنق السرعة FUP:' : 'Throttling FUP:'}</strong> ${hc.throttling_fup}</div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function toggleCardTerms(btn) {
  const drawer = btn.nextElementSibling;
  drawer.classList.toggle('open');
}
