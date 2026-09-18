/**
 * Saudi Telecom Packages Platform
 * Modern Interactive Table & Cards Comparison Engine
 * Full Prepaid & Postpaid Dual-Mode with CST Regulatory Contract Transparency
 */

const DB = {"metadata": {"title": "Saudi Telecom Prepaid Packages Database (دليل باقات مسبق الدفع في السعودية)", "source": "Official Operator Websites & Communications, Space & Technology Commission (CST / هيئة الاتصالات والفضاء والتقنية)", "currency": "SAR (ريال سعودي)", "vat_rate": 0.15, "last_updated": "2026-09-19", "regulatory_notes": {"voice_metering": "All local voice calls in Saudi Arabia are metered per second by CST regulations (حساب المكالمات بالثانية).", "data_metering": "Standard mobile data session metering block across all operators is 100 KB (حساب البيانات في كتل بحجم 100 كيلوبايت لكل جلسة).", "hotspot_restriction": "Unlimited social media/apps allowances generally do NOT apply to hotspot/tethering; hotspot data is deducted from the general data balance (بث الإنترنت الهوتسبوت يُخصم من البيانات العامة).", "vpn_voip_rule": "In-app VoIP calls (WhatsApp, etc.) are restricted by regulation; using VPN routes all traffic to general data (استخدام VPN يخصم من البيانات العامة وليس السوشيال)."}, "total_packages": 98, "version": "3.0.0-full-postpaid-expansion"}, "providers": [{"id": "stc", "name_ar": "إس تي سي (stc)", "name_en": "stc", "network": "stc (المشغل الرئيسي)", "type": "MNO (مشغل رئيسي)", "website": "https://www.stc.com.sa/", "hidden_conditions": {"metering_block_data": "100 KB (كل جلسة تقرب لأقرب 100 كيلوبايت)", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": true, "vowifi_notes": "مدعومة رسميًا على سوا (stc WiFi Calling) بدون رسوم إضافية وتخصم من دقائق الباقة.", "volte_supported": true, "throttling_fup": "لا يوجد خنق سرعة على سعة البيانات العامة المحددة. في باقات السوشيال المفتوح تطبق سياسة الاستخدام العادل لمنع الاستخدام التجاري فقط.", "hotspot_policy": "الهوتسبوت يخصم من رصيد البيانات العامة.", "data_rollover": false}, "packages": [{"name_ar": "سوا بيسك", "name_en": "Sawa Basic", "price_base": 30.0, "price_vat": 34.5, "validity_days": 28, "general_data_gb": 1.0, "social_data_gb": 1.0, "unlimited_social": false, "local_minutes": 100, "special_perks_ar": "أرخص باقة أساسية للمكالمات الخفيفة", "special_perks_en": "Lowest entry-level plan for basic usage", "sms": 0, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سوا لايك بلس (العرض الجديد)", "name_en": "Sawa Like Plus (Promo)", "price_base": 75.0, "price_vat": 86.25, "validity_days": 28, "general_data_gb": 20.0, "social_data_gb": 20.0, "unlimited_social": false, "local_minutes": 540, "special_perks_ar": "مضاعفة البيانات (20 جيجا عام + 20 جيجا سوشيال) وتغطية stc الأوسع", "special_perks_en": "Doubled data allowance (20GB general + 20GB social), widest stc coverage", "sms": 100, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سوا كابتن", "name_en": "Sawa Captain", "price_base": 85.0, "price_vat": 97.75, "validity_days": 28, "general_data_gb": 30.0, "social_data_gb": 0.0, "unlimited_social": false, "local_minutes": 600, "special_perks_ar": "30 جيجا نت عام + خرائط قوقل وواتساب لا محدود مخصصة لكباتن التوصيل والتنقل", "special_perks_en": "30GB general data + unlimited Google Maps & WhatsApp, ideal for couriers", "sms": 200, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سوا شير بلس", "name_en": "Sawa Share Plus", "price_base": 115.0, "price_vat": 132.25, "validity_days": 28, "general_data_gb": 40.0, "social_data_gb": 55.0, "unlimited_social": false, "local_minutes": 1520, "special_perks_ar": "إجمالي 95 جيجابايت مع دقائق وفيرة", "special_perks_en": "Total 95GB combined data with high call volume", "sms": 300, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سوا 120", "name_en": "Sawa 120", "price_base": 120.0, "price_vat": 138.0, "validity_days": 28, "general_data_gb": 45.0, "social_data_gb": 0.0, "unlimited_social": true, "social_apps": ["WhatsApp", "Snapchat", "Facebook"], "local_minutes": 1210, "special_perks_ar": "45 جيجا نت عام + واتساب وسناب وفيسبوك مفتوح", "special_perks_en": "45GB general data + unlimited WhatsApp, Snapchat & Facebook", "sms": 300, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سوا 150", "name_en": "Sawa 150", "price_base": 150.0, "price_vat": 172.5, "validity_days": 28, "general_data_gb": 70.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1150, "special_perks_ar": "70 جيجا نت عام + سوشيال ميديا لا محدود بالكامل", "special_perks_en": "70GB general data + fully unlimited social media", "sms": 500, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سوا بوست بلس", "name_en": "Sawa Post Plus", "price_base": 170.0, "price_vat": 195.5, "validity_days": 28, "general_data_gb": 74.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 500, "special_perks_ar": "مكالمات لا محدودة داخل stc + 500 دقيقة خارج الشبكة + سوشيال لا محدود", "special_perks_en": "Unlimited on-net stc calls + 500 off-net mins + unlimited social", "sms": 500, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سوا ستار بلس", "name_en": "Sawa Star Plus", "price_base": 240.0, "price_vat": 276.0, "validity_days": 28, "general_data_gb": 126.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1500, "special_perks_ar": "126 جيجا نت عام + سوشيال لا محدود", "special_perks_en": "126GB general data + unlimited social", "sms": 1500, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سوا هيرو", "name_en": "Sawa Hero", "price_base": 360.0, "price_vat": 414.0, "validity_days": 28, "general_data_gb": 9999.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "إنترنت ومكالمات لا محدودة بالكامل بدون سياسة استخدام عادل يومية معلنة", "special_perks_en": "Completely unlimited data and calls with no stated daily cap", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "مفوتر بيسك", "name_en": "Mofawtar Basic", "price_base": 70.0, "price_vat": 80.5, "validity_days": 30, "general_data_gb": 6.0, "social_data_gb": 6.0, "unlimited_social": false, "local_minutes": 100, "sms": 100, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري مفتوح: يمكن الإلغاء في أي وقت دون شرط جزائي، ويحتسب الاستهلاك الفعلي بالنسبة والتناسب حتى يوم الإلغاء وفق لوائح CST.", "cancellation_terms_en": "Open monthly contract: Cancel anytime without penalty; usage is prorated per CST regulations.", "multi_sim_supported": false, "multi_sim_details_ar": "غير متاح على باقة بيسك", "multi_sim_details_en": "Not available on Basic plan", "roaming_included_ar": "غير مشمول في التجوال", "roaming_included_en": "Not included in roaming", "device_subsidy_available": false, "loyalty_program_ar": "قطاف stc", "loyalty_program_en": "stc Qitaf", "special_perks_ar": "أرخص باقة مفوترة رسمية من stc مناسبة للاستخدام الخفيف", "special_perks_en": "Lowest official stc postpaid plan for light usage"}, {"name_ar": "مفوتر 2", "name_en": "Mofawtar 2", "price_base": 120.0, "price_vat": 138.0, "validity_days": 30, "general_data_gb": 20.0, "social_data_gb": 20.0, "unlimited_social": false, "local_minutes": 9999, "sms": 200, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري مفتوح بدون التزام؛ في حال الارتباط بعقد جهاز ذكي (12/24 شهراً) يدفع العميل فقط المتبقي من قيمة دعم الجهاز الفعلي مقسوماً على المدة المتبقية.", "cancellation_terms_en": "Open monthly contract; if linked to 12/24mo device financing, subscriber pays only remaining unamortized device subsidy value.", "multi_sim_supported": true, "multi_sim_details_ar": "تدعم شريحتين إضافيتين للبيانات (28.75 ريال/شهر للشريحة)", "multi_sim_details_en": "Supports 2 extra data SIMs (28.75 SAR/month each)", "roaming_included_ar": "استقبال المكالمات مجاناً في بعض شبكات الخليج", "roaming_included_en": "Free incoming calls on select GCC partners", "device_subsidy_available": true, "loyalty_program_ar": "قطاف stc", "loyalty_program_en": "stc Qitaf", "special_perks_ar": "مكالمات لا محدودة داخل شبكة stc + 300 دقيقة للشبكات الأخرى + دعم الشرائح المتعددة", "special_perks_en": "Unlimited stc on-net calls + 300 off-net mins + Multi-SIM support"}, {"name_ar": "مفوتر 2 بلس", "name_en": "Mofawtar 2 Plus", "price_base": 150.0, "price_vat": 172.5, "validity_days": 30, "general_data_gb": 40.0, "social_data_gb": 40.0, "unlimited_social": false, "local_minutes": 9999, "sms": 300, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري؛ إمكانية ترقية لعقد أجهزة ذكية لمدة 12/24 شهراً بخصومات مباشرة على الأجهزة.", "cancellation_terms_en": "Monthly plan; optional 12/24-month device contracts with direct device subsidies.", "multi_sim_supported": true, "multi_sim_details_ar": "تدعم حتى شريحتين إضافيتين برقم واحد", "multi_sim_details_en": "Supports up to 2 extra SIMs on same number", "roaming_included_ar": "استقبال المكالمات مجاناً في التجوال الإقليمي", "roaming_included_en": "Free incoming calls in regional roaming", "device_subsidy_available": true, "loyalty_program_ar": "قطاف stc", "loyalty_program_en": "stc Qitaf", "special_perks_ar": "80 جيجا إجمالية (40 عام + 40 سوشيال) + مكالمات stc مفتوحة + 500 دقيقة خارج الشبكة", "special_perks_en": "80 GB total (40 Gen + 40 Social) + Unlimited stc calls + 500 off-net mins"}, {"name_ar": "مفوتر 3 بلس", "name_en": "Mofawtar 3 Plus", "price_base": 230.0, "price_vat": 264.5, "validity_days": 30, "general_data_gb": 110.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 1000, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "إلغاء فوري في أي وقت دون غرامة خدمة. في حال وجود عقد جهاز 24 شهراً، يسدد العميل فقط القيمة المتبقية من دعم الجهاز الفعلي.", "cancellation_terms_en": "Cancel anytime without service penalty. If on 24mo device contract, pay only remaining device subsidy balance.", "multi_sim_supported": true, "multi_sim_details_ar": "تدعم شريحتين إضافيتين (Multi-SIM) لمشاركة الإنترنت", "multi_sim_details_en": "Supports 2 extra Multi-SIMs for data sharing", "roaming_included_ar": "استقبال مكالمات التجوال مجاناً في معظم دول العالم", "roaming_included_en": "Free incoming roaming calls in most countries", "device_subsidy_available": true, "loyalty_program_ar": "تميز الفضي stc Tamayouz", "loyalty_program_en": "stc Silver Tamayouz", "special_perks_ar": "باقة المفوتر الأكثر مبيعاً: 110 جيجا نت عام + سوشيال لا محدود + مكالمات لا محدودة لجميع الشبكات + دعم أجهزة ذكية", "special_perks_en": "Top-selling postpaid: 110 GB general data + Unlimited Social + Unlimited all-net calls + Device subsidies"}, {"name_ar": "مفوتر 4", "name_en": "Mofawtar 4", "price_base": 450.0, "price_vat": 517.5, "validity_days": 30, "general_data_gb": 9999.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "إلغاء فوري متاح؛ خصومات أجهزة استثنائية تصل إلى أكثر من 3000 ريال بعقد التزام 24 شهراً.", "cancellation_terms_en": "Instant cancellation available; premium device discount up to 3000+ SAR on 24-month contract.", "multi_sim_supported": true, "multi_sim_details_ar": "تشمل شريحتين إضافيتين (Multi-SIM) مجاناً بالكامل مع الباقة", "multi_sim_details_en": "Includes 2 extra Multi-SIMs completely FREE", "roaming_included_ar": "1 جيجابايت نت تجوال + 100 دقيقة استقبال تجوال + 100 دقيقة مكالمات إلى السعودية", "roaming_included_en": "1 GB roaming data + 100 incoming roaming mins + 100 mins calls to KSA", "device_subsidy_available": true, "loyalty_program_ar": "تميز الفضي / الذهبي stc", "loyalty_program_en": "stc Silver / Gold Tamayouz", "special_perks_ar": "إنترنت 5G لا محدود بدون استخدام عادل محلياً + شريحتين إضافيتين مجاناً + باقة تجوال مدمجة", "special_perks_en": "Unlimited 5G local internet without FUP + 2 Free Multi-SIMs + Built-in Roaming pack"}, {"name_ar": "مفوتر ماكس", "name_en": "Mofawtar Max", "price_base": 800.0, "price_vat": 920.0, "validity_days": 30, "general_data_gb": 9999.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "الباقة الأرقى لدى stc: حرية الإلغاء بدون غرامة خدمة، أو الحصول على أحدث الهواتف مجاناً بعقد 24 شهراً.", "cancellation_terms_en": "stc flagship plan: cancel anytime without service penalty, or get flagship phone free on 24mo contract.", "multi_sim_supported": true, "multi_sim_details_ar": "تشمل شريحتين إضافيتين مجاناً (Multi-SIM)", "multi_sim_details_en": "Includes 2 extra Multi-SIMs free", "roaming_included_ar": "إنترنت تجوال لا محدود في دول الخليج ومعظم الدول العربية + 400 دقيقة دولية ومكالمات تجوال", "roaming_included_en": "Unlimited roaming data across GCC & Arab states + 400 international & roaming minutes", "device_subsidy_available": true, "loyalty_program_ar": "تميز البلاتيني / الماسي stc Platinum/Diamond", "loyalty_program_en": "stc Platinum / Diamond Tamayouz", "special_perks_ar": "أعلى باقة اتصالات في المملكة: تجوال غير محدود + مكالمات دولية + أعلى فئات التميز وصالات المطارات", "special_perks_en": "Kingdom's top flagship plan: Unlimited roaming + International mins + VIP airport lounge access"}], "network_code": "stc"}, {"id": "jawwy", "name_ar": "جوّي من stc (Jawwy)", "name_en": "Jawwy by stc", "network": "stc", "type": "Digital Brand on stc (علامة رقمية)", "website": "https://www.jawwy.sa/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": false, "vowifi_notes": "خدمة WiFi Calling غير مفعلة افتراضياً لمعظم خطوط جوّي مقارنة بـ stc سوا، وتعتمد على تحديثات ملف المشغل الخاص بالأجهزة.", "volte_supported": true, "throttling_fup": "لا يوجد خنق سرعة على الجيجابايت العامة. السوشيال اللامحدود لا يدعم مشاركة الهوتسبوت.", "hotspot_policy": "بيانات الهوتسبوت تُخصم حصراً من الرصيد العام.", "data_rollover": false, "special_feature": "إمكانية مشاركة رصيد البيانات والدقائق بين ما يصل إلى 3 شرائح تحت نفس الحساب عبر التطبيق."}, "packages": [{"name_ar": "جوّي 45", "name_en": "Jawwy 45", "price_base": 45.0, "price_vat": 51.75, "validity_days": 30, "general_data_gb": 2.0, "social_data_gb": 2.0, "unlimited_social": false, "local_minutes": 280, "special_perks_ar": "باقة دخول اقتصادية صالحة 30 يوماً", "special_perks_en": "Budget entry plan valid for 30 days", "sms": 0, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "جوّي 70", "name_en": "Jawwy 70", "price_base": 70.0, "price_vat": 80.5, "validity_days": 30, "general_data_gb": 21.0, "social_data_gb": 20.0, "unlimited_social": false, "local_minutes": 350, "special_perks_ar": "41 جيجابايت إجمالية (21 عام + 20 سوشيال) ومشاركة الرصيد بين الشرائح", "special_perks_en": "41GB total (21GB general + 20GB social), balance sharing across SIMs", "sms": 100, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "جوّي 90", "name_en": "Jawwy 90", "price_base": 90.0, "price_vat": 103.5, "validity_days": 30, "general_data_gb": 31.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 500, "special_perks_ar": "31 جيجا نت عام + سوشيال ميديا لا محدود على أبراج stc", "special_perks_en": "31GB general data + unlimited social media on stc towers", "sms": 200, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "جوّي 110", "name_en": "Jawwy 110", "price_base": 110.0, "price_vat": 126.5, "validity_days": 30, "general_data_gb": 45.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1000, "special_perks_ar": "45 جيجا نت عام + سوشيال لا محدود + 1000 دقيقة", "special_perks_en": "45GB general data + unlimited social + 1000 mins", "sms": 300, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "جوّي 150", "name_en": "Jawwy 150", "price_base": 150.0, "price_vat": 172.5, "validity_days": 30, "general_data_gb": 71.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1000, "special_perks_ar": "71 جيجا نت عام + سوشيال لا محدود", "special_perks_en": "71GB general data + unlimited social", "sms": 500, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "جوّي 200", "name_en": "Jawwy 200", "price_base": 200.0, "price_vat": 230.0, "validity_days": 30, "general_data_gb": 102.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1300, "special_perks_ar": "102 جيجا نت عام + سوشيال لا محدود + 1300 دقيقة", "special_perks_en": "102GB general data + unlimited social + 1300 mins", "sms": 1000, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "جوّي 70 المجددة", "name_en": "Jawwy 70 Auto-billed", "price_base": 70.0, "price_vat": 80.5, "validity_days": 30, "general_data_gb": 10.0, "social_data_gb": 10.0, "unlimited_social": false, "local_minutes": 500, "sms": 0, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "خصم تلقائي شهري؛ إيقاف أو إلغاء فوري بضغطة زر من تطبيق جوّي بدون أي رسوم إلغاء.", "cancellation_terms_en": "Auto-renewing monthly bill; cancel anytime from Jawwy app with zero fees.", "multi_sim_supported": true, "multi_sim_details_ar": "ميزة جوّي الحصرية لمشاركة الحساب مع حتى 3 شرائح في نفس الحساب", "multi_sim_details_en": "Jawwy exclusive pool sharing across up to 3 SIMs under one account", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "قطاف stc (متاح عبر التطبيق)", "loyalty_program_en": "stc Qitaf (via app)", "special_perks_ar": "20 جيجا إجمالية + 500 دقيقة + إمكانية مشاركة الرصيد بين أرقام العائلة في نفس الحساب", "special_perks_en": "20 GB total + 500 mins + Share data across family SIMs in same account"}, {"name_ar": "جوّي 150 المجددة", "name_en": "Jawwy 150 Auto-billed", "price_base": 150.0, "price_vat": 172.5, "validity_days": 30, "general_data_gb": 55.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 3000, "sms": 0, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "خصم وتجديد تلقائي شهري؛ إلغاء في أي وقت.", "cancellation_terms_en": "Auto-recurring monthly; cancel anytime.", "multi_sim_supported": true, "multi_sim_details_ar": "مشاركة البيانات والدقائق بين عدة شرائح في نفس الحساب", "multi_sim_details_en": "Share data & minutes across multiple SIMs in same account", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "قطاف stc", "loyalty_program_en": "stc Qitaf", "special_perks_ar": "55 جيجا عام + سوشيال لا محدود + 3000 دقيقة مكالمات + مشاركة البيانات", "special_perks_en": "55 GB gen data + Unlimited Social + 3000 mins + Account sharing"}, {"name_ar": "جوّي 200 المجددة", "name_en": "Jawwy 200 Auto-billed", "price_base": 200.0, "price_vat": 230.0, "validity_days": 30, "general_data_gb": 100.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 0, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "تجديد تلقائي؛ إلغاء فوري بضغطة زر.", "cancellation_terms_en": "Auto-recurring; cancel anytime via app.", "multi_sim_supported": true, "multi_sim_details_ar": "مشاركة الحساب والبيانات مع شرائح أخرى", "multi_sim_details_en": "Pool sharing with other SIMs", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "قطاف stc", "loyalty_program_en": "stc Qitaf", "special_perks_ar": "100 جيجا عام + سوشيال مفتوح + مكالمات لا محدودة لجميع الشبكات + ميزة مشاركة الرصيد", "special_perks_en": "100 GB gen data + Unlimited Social + Unlimited all-net calls + Pool sharing"}], "network_code": "stc"}, {"id": "virgin", "name_ar": "فيرجن موبايل (Virgin Mobile)", "name_en": "Virgin Mobile Saudi", "network": "stc", "type": "MVNO on stc (مشغل افتراضي)", "website": "https://virginmobile.sa/ar/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": false, "vowifi_notes": "خدمة VoWiFi غير معتمدة رسمياً لمعظم أجهزة مسبق الدفع لفيرجن.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على باقة البيانات العامة الصافية. باقات السوشيال المفتوح مخصصة للاستخدام الشخصي المباشر.", "hotspot_policy": "مشاركة الهوتسبوت تخصم من رصيد البيانات العامة.", "data_rollover": false}, "packages": [{"name_ar": "فيرجن 45", "name_en": "Virgin 45", "price_base": 45.0, "price_vat": 51.75, "validity_days": 28, "general_data_gb": 3.0, "social_data_gb": 1.0, "unlimited_social": false, "local_minutes": 250, "special_perks_ar": "اقتصادية للمكالمات الخفيفة", "special_perks_en": "Light usage entry plan", "sms": 0, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "فيرجن 70", "name_en": "Virgin 70", "price_base": 70.0, "price_vat": 80.5, "validity_days": 28, "general_data_gb": 20.0, "social_data_gb": 20.0, "unlimited_social": false, "local_minutes": 350, "special_perks_ar": "40 جيجابايت إجمالية على شبكة stc بسعر 80.5 ريال", "special_perks_en": "40GB total on stc network for 80.50 SAR", "sms": 200, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "فيرجن 90", "name_en": "Virgin 90", "price_base": 90.0, "price_vat": 103.5, "validity_days": 28, "general_data_gb": 30.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 450, "special_perks_ar": "30 جيجا نت عام + سوشيال ميديا لا محدود", "special_perks_en": "30GB general data + unlimited social", "sms": 300, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "فيرجن 100", "name_en": "Virgin 100", "price_base": 100.0, "price_vat": 115.0, "validity_days": 28, "general_data_gb": 40.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 750, "special_perks_ar": "أعلى سعة بيانات عامة على شبكة stc في حدود 115 ريال (40 جيجا + سوشيال مفتوح)", "special_perks_en": "Highest general data on stc under 115 SAR (40GB general + unlimited social)", "sms": 500, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "فيرجن 110", "name_en": "Virgin 110", "price_base": 110.0, "price_vat": 126.5, "validity_days": 28, "general_data_gb": 45.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 745, "special_perks_ar": "45 جيجا نت عام + سوشيال لا محدود", "special_perks_en": "45GB general data + unlimited social", "sms": 500, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "فيرجن 150", "name_en": "Virgin 150", "price_base": 150.0, "price_vat": 172.5, "validity_days": 28, "general_data_gb": 55.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "55 جيجا نت عام + سوشيال ومكالمات لا محدودة", "special_perks_en": "55GB general data + unlimited social & unlimited calls", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "فيرجن 185", "name_en": "Virgin 185", "price_base": 185.0, "price_vat": 212.75, "validity_days": 28, "general_data_gb": 80.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "80 جيجا نت عام + سوشيال ومكالمات لا محدودة", "special_perks_en": "80GB general data + unlimited social & unlimited calls", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "فيرجن 100 مفوتر", "name_en": "Virgin 100 Postpaid", "price_base": 100.0, "price_vat": 115.0, "validity_days": 30, "general_data_gb": 25.0, "social_data_gb": 25.0, "unlimited_social": false, "local_minutes": 1000, "sms": 100, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد مفوتر شهري؛ إلغاء فوري عبر التطبيق دون شروط جزائية.", "cancellation_terms_en": "Monthly billed plan; instant in-app cancellation without penalties.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "مكافآت فيرجن ريوردز", "loyalty_program_en": "Virgin Rewards", "special_perks_ar": "50 جيجا إجمالية (25 عام + 25 سوشيال) + 1000 دقيقة + ترحيل الرصيد غير المستهلك", "special_perks_en": "50 GB total (25 Gen + 25 Social) + 1000 mins + Data Rollover"}, {"name_ar": "فيرجن 150 مفوتر", "name_en": "Virgin 150 Postpaid", "price_base": 150.0, "price_vat": 172.5, "validity_days": 30, "general_data_gb": 50.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 200, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري بدون التزام.", "cancellation_terms_en": "Monthly plan with no commitment.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "مكافآت فيرجن ريوردز", "loyalty_program_en": "Virgin Rewards", "special_perks_ar": "50 جيجا نت عام + سوشيال لا محدود + مكالمات مفتوحة لجميع الشبكات + ترحيل الرصيد", "special_perks_en": "50 GB gen data + Unlimited Social + Unlimited all-net calls + Rollover"}, {"name_ar": "فيرجن 215 مفوتر", "name_en": "Virgin 215 Postpaid", "price_base": 215.0, "price_vat": 247.25, "validity_days": 30, "general_data_gb": 120.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 500, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري بدون التزام.", "cancellation_terms_en": "Monthly plan with no commitment.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "مكافآت فيرجن ريوردز", "loyalty_program_en": "Virgin Rewards", "special_perks_ar": "120 جيجا عام + سوشيال لا محدود + مكالمات لا محدودة لكافة الشبكات + ترحيل الرصيد", "special_perks_en": "120 GB gen data + Unlimited Social + Unlimited all-net calls + Rollover"}], "network_code": "stc"}, {"id": "mobily", "name_ar": "موبايلي (Mobily)", "name_en": "Mobily", "network": "موبايلي (المشغل الرئيسي)", "type": "MNO (مشغل رئيسي)", "website": "https://www.mobily.com.sa/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": true, "vowifi_notes": "مدعومة رسميًا على خطوط مسبق الدفع (Mobily VoWiFi) للأجهزة المتوافقة.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على حزم البيانات العامة المحددة. باقات السوشيال المفتوح تخضع لسياسة الاستخدام الشخصي المباشر.", "hotspot_policy": "الهوتسبوت يُخصم من رصيد البيانات العامة.", "data_rollover": false}, "packages": [{"name_ar": "موبايلي 30", "name_en": "Mobily 30", "price_base": 30.0, "price_vat": 34.5, "validity_days": 28, "general_data_gb": 1.0, "social_data_gb": 1.0, "unlimited_social": false, "local_minutes": 100, "special_perks_ar": "باقة أساسية خفيفة", "special_perks_en": "Basic light package", "sms": 0, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "موبايلي 75 (عرض مضاعف)", "name_en": "Mobily 75 (Double Promo)", "price_base": 75.0, "price_vat": 86.25, "validity_days": 28, "general_data_gb": 25.0, "social_data_gb": 21.0, "unlimited_social": false, "local_minutes": 500, "special_perks_ar": "عرض مميز: 25 جيجا عام (10+15) + 21 جيجا سوشيال (10+11) بإجمالي 46 جيجا", "special_perks_en": "Promo: 25GB general (10+15) + 21GB social (10+11), total 46GB", "sms": 200, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "موبايلي 110", "name_en": "Mobily 110", "price_base": 110.0, "price_vat": 126.5, "validity_days": 28, "general_data_gb": 40.0, "social_data_gb": 60.0, "unlimited_social": false, "local_minutes": 1500, "special_perks_ar": "40 جيجا عام + 60 جيجا سوشيال (إجمالي 100 جيجابايت ضخمة!)", "special_perks_en": "40GB general + 60GB social (Total 100GB!)", "sms": 500, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "موبايلي 150", "name_en": "Mobily 150", "price_base": 150.0, "price_vat": 172.5, "validity_days": 28, "general_data_gb": 55.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 3000, "special_perks_ar": "55 جيجا نت عام + سوشيال لا محدود + 3000 دقيقة", "special_perks_en": "55GB general + unlimited social + 3000 mins", "sms": 1000, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "موبايلي 150 (بيانات أكثر)", "name_en": "Mobily 150 More Data", "price_base": 150.0, "price_vat": 172.5, "validity_days": 28, "general_data_gb": 70.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1000, "special_perks_ar": "70 جيجا نت عام + سوشيال لا محدود + 1000 دقيقة", "special_perks_en": "70GB general + unlimited social + 1000 mins", "sms": 1000, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "موبايلي 180", "name_en": "Mobily 180", "price_base": 180.0, "price_vat": 207.0, "validity_days": 28, "general_data_gb": 80.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "80 جيجا نت عام + سوشيال ومكالمات لا محدودة", "special_perks_en": "80GB general + unlimited social & calls", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "موبايلي 220", "name_en": "Mobily 220", "price_base": 220.0, "price_vat": 253.0, "validity_days": 28, "general_data_gb": 100.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "100 جيجا نت عام + سوشيال ومكالمات لا محدودة", "special_perks_en": "100GB general + unlimited social & calls", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "موبايلي 360", "name_en": "Mobily 360", "price_base": 360.0, "price_vat": 414.0, "validity_days": 28, "general_data_gb": 9999.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "إنترنت لا محدود بالكامل ومكالمات لا محدودة", "special_perks_en": "Truly unlimited data & calls", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "مفوتر 50", "name_en": "Postpaid 50", "price_base": 50.0, "price_vat": 57.5, "validity_days": 30, "general_data_gb": 3.0, "social_data_gb": 0.0, "unlimited_social": false, "local_minutes": 300, "sms": 50, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري بدون التزام: يمكن الإلغاء في أي وقت واحتساب الفاتورة بالنسبة والتناسب.", "cancellation_terms_en": "Monthly plan with no commitment: Cancel anytime with prorated billing.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم على باقة 50", "multi_sim_details_en": "Not supported on Postpaid 50", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "نقاطي موبايلي", "loyalty_program_en": "Mobily Neqaty", "special_perks_ar": "أرخص باقة مفوتر من موبايلي مناسبة لكبار السن والخطوط الثانوية", "special_perks_en": "Most affordable Mobily postpaid plan for secondary lines"}, {"name_ar": "مفوتر 100", "name_en": "Postpaid 100", "price_base": 100.0, "price_vat": 115.0, "validity_days": 30, "general_data_gb": 20.0, "social_data_gb": 15.0, "unlimited_social": false, "local_minutes": 1500, "sms": 100, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري بدون التزام؛ متاح أيضاً بعقد تقسيط أجهزة 12/24 شهر.", "cancellation_terms_en": "Monthly no commitment; also available with 12/24mo phone financing.", "multi_sim_supported": true, "multi_sim_details_ar": "تدعم شرائح إضافية برسم شهري 28.75 ريال للشريحة", "multi_sim_details_en": "Supports extra SIMs at 28.75 SAR/mo per SIM", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": true, "loyalty_program_ar": "نقاطي موبايلي", "loyalty_program_en": "Mobily Neqaty", "special_perks_ar": "35 جيجا إجمالية + 1500 دقيقة محلية لكافة الشبكات + نقاطي", "special_perks_en": "35 GB total + 1500 local minutes to all networks + Neqaty points"}, {"name_ar": "مفوتر 200", "name_en": "Postpaid 200", "price_base": 200.0, "price_vat": 230.0, "validity_days": 30, "general_data_gb": 90.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 200, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "بدون التزام شهرياً. عند اختيار عقد جهاز 24 شهراً، يتم خصم قيمة دعم الجهاز عند الإلغاء المبكر فقط دون رسوم الخدمة.", "cancellation_terms_en": "Monthly plan. On 24mo device contract, early termination fees only apply to remaining device subsidy.", "multi_sim_supported": true, "multi_sim_details_ar": "تدعم حتى 3 شرائح متعددة للمشاركة (28.75 ريال/شهر للشريحة)", "multi_sim_details_en": "Supports up to 3 Multi-SIMs (28.75 SAR/mo per SIM)", "roaming_included_ar": "استقبال المكالمات أثناء التجوال في دول مختارة", "roaming_included_en": "Free incoming calls in selected roaming destinations", "device_subsidy_available": true, "loyalty_program_ar": "نقاطي موبايلي الفضي", "loyalty_program_en": "Mobily Neqaty Silver", "special_perks_ar": "الباقة الأوفر في موبايلي: 90 جيجا نت عام + سوشيال لا محدود + مكالمات لا محدودة لجميع الشبكات + دعم أجهزة", "special_perks_en": "Mobily value champion: 90 GB gen data + Unlimited Social + Unlimited all-net calls + Device subsidies"}, {"name_ar": "مفوتر 300", "name_en": "Postpaid 300", "price_base": 300.0, "price_vat": 345.0, "validity_days": 30, "general_data_gb": 150.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 300, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "إلغاء فوري متاح؛ خصومات أجهزة كبيرة تصل إلى 2000+ ريال مع عقد التزام 24 شهراً.", "cancellation_terms_en": "Instant cancellation; substantial device discount up to 2000+ SAR on 24-month contract.", "multi_sim_supported": true, "multi_sim_details_ar": "تشمل شريحة إضافية مجانية + إمكانية إضافة شريحة ثانية بسعر رمزي", "multi_sim_details_en": "Includes 1 FREE extra SIM + optional 2nd SIM", "roaming_included_ar": "100 دقيقة استقبال مكالمات في التجوال الدولي", "roaming_included_en": "100 incoming international roaming minutes", "device_subsidy_available": true, "loyalty_program_ar": "نقاطي موبايلي الذهبي", "loyalty_program_en": "Mobily Neqaty Gold", "special_perks_ar": "150 جيجا نت عام + سوشيال مفتوح + شريحة إضافية مجانية مدمجة + دقائق تجوال", "special_perks_en": "150 GB gen data + Unlimited Social + 1 Free Multi-SIM included + Roaming minutes"}, {"name_ar": "مفوتر 400", "name_en": "Postpaid 400", "price_base": 400.0, "price_vat": 460.0, "validity_days": 30, "general_data_gb": 9999.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 400, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "باقة القمة في موبايلي: بدون التزام شهري، أو الحصول على خصم جهاز يصل إلى 3600 ريال بعقد 24 شهراً.", "cancellation_terms_en": "Mobily flagship: No commitment monthly, or up to 3600 SAR device subsidy on 24mo contract.", "multi_sim_supported": true, "multi_sim_details_ar": "تشمل شريحتين إضافيتين (Multi-SIM) مجاناً لمشاركة النت", "multi_sim_details_en": "Includes 2 FREE extra Multi-SIMs for data sharing", "roaming_included_ar": "1 جيجابايت إنترنت تجوال + 100 دقيقة تجوال دولي", "roaming_included_en": "1 GB roaming data + 100 international roaming mins", "device_subsidy_available": true, "loyalty_program_ar": "موبايلي راقي / بلاتينيوم", "loyalty_program_en": "Mobily Raqi / Platinum", "special_perks_ar": "إنترنت 5G لا محدود بدون استخدام عادل محلياً + شريحتين مجاناً + حزمة تجوال دولي + أولوية قصوى بالشبكة", "special_perks_en": "Unlimited 5G internet + 2 Free SIMs + Roaming bundle + Top network priority"}], "network_code": "mobily"}, {"id": "lebara", "name_ar": "ليبارا (Lebara)", "name_en": "Lebara Saudi", "network": "موبايلي", "type": "MVNO on Mobily (مشغل افتراضي)", "website": "https://www.lebara.sa/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": false, "vowifi_notes": "خدمة VoWiFi غير مفعلة افتراضياً لمعظم خطوط مسبق الدفع لليبارا.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على الجيجابايت العامة المحددة. تطبق سياسة الاستخدام الشخصي.", "hotspot_policy": "الهوتسبوت يخصم من البيانات العامة.", "data_rollover": false, "special_feature": "مكافأة 30% رصيد إضافي مع كل عملية شحن بـ 30 ريال أو أكثر."}, "packages": [{"name_ar": "يلا 70", "name_en": "Yalla 70", "price_base": 70.0, "price_vat": 80.5, "validity_days": 30, "general_data_gb": 15.0, "social_data_gb": 20.0, "unlimited_social": false, "local_minutes": 350, "special_perks_ar": "35 جيجا إجمالية صالحة 30 يوماً", "special_perks_en": "35GB total data valid for 30 days", "sms": 200, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "يلا 90", "name_en": "Yalla 90", "price_base": 90.0, "price_vat": 103.5, "validity_days": 30, "general_data_gb": 35.0, "social_data_gb": 55.0, "unlimited_social": false, "local_minutes": 600, "special_perks_ar": "أعلى كمية بيانات إجمالية في السوق السعودي تحت 105 ريال (90 جيجابايت: 35 عام + 55 سوشيال)", "special_perks_en": "Highest combined data in KSA under 105 SAR (90GB total: 35GB gen + 55GB social)", "sms": 300, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "فليكس 100", "name_en": "Flex 100", "price_base": 100.0, "price_vat": 115.0, "validity_days": 28, "general_data_gb": 35.0, "social_data_gb": 35.0, "unlimited_social": false, "local_minutes": 900, "special_perks_ar": "70 جيجا إجمالية + 900 دقيقة تشمل مكالمات دولية لـ 10 دول (مصر، السودان، اليمن، إلخ)", "special_perks_en": "70GB total + 900 mins including 10 international destinations", "sms": 900, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "يلا 110", "name_en": "Yalla 110", "price_base": 110.0, "price_vat": 126.5, "validity_days": 30, "general_data_gb": 40.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1100, "special_perks_ar": "40 جيجا نت عام + سوشيال لا محدود + 1100 دقيقة", "special_perks_en": "40GB general + unlimited social + 1100 mins", "sms": 500, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "يلا ستريم 125", "name_en": "Yalla Stream 125", "price_base": 125.0, "price_vat": 143.75, "validity_days": 35, "general_data_gb": 50.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1000, "special_perks_ar": "صلاحية 35 يوماً مع ستريم وسوشيال لا محدود و 50 جيجا نت عام", "special_perks_en": "35-day validity, unlimited streaming & social, 50GB general", "sms": 1000, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "يلا 150", "name_en": "Yalla 150", "price_base": 150.0, "price_vat": 172.5, "validity_days": 30, "general_data_gb": 70.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1000, "special_perks_ar": "70 جيجا نت عام + سوشيال لا محدود", "special_perks_en": "70GB general + unlimited social", "sms": 1000, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "ليبارا مفوتر 90", "name_en": "Lebara Postpaid 90", "price_base": 90.0, "price_vat": 103.5, "validity_days": 30, "general_data_gb": 15.0, "social_data_gb": 15.0, "unlimited_social": false, "local_minutes": 750, "sms": 100, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري مسبق الفوترة بدون التزام.", "cancellation_terms_en": "Monthly billed plan with no commitment.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "نقاط ليبارا", "loyalty_program_en": "Lebara Rewards", "special_perks_ar": "30 جيجا إجمالية (15 عام + 15 سوشيال) + 750 دقيقة محلية", "special_perks_en": "30 GB total (15 Gen + 15 Social) + 750 local mins"}, {"name_ar": "ليبارا مفوتر 140", "name_en": "Lebara Postpaid 140", "price_base": 140.0, "price_vat": 161.0, "validity_days": 30, "general_data_gb": 45.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 200, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري بدون التزام.", "cancellation_terms_en": "Monthly plan with no commitment.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "نقاط ليبارا", "loyalty_program_en": "Lebara Rewards", "special_perks_ar": "45 جيجا عام + سوشيال لا محدود + مكالمات لا محدودة لجميع الشبكات", "special_perks_en": "45 GB gen data + Unlimited Social + Unlimited all-net calls"}], "network_code": "mobily"}, {"id": "zain", "name_ar": "زين السعودية (Zain)", "name_en": "Zain Saudi Arabia", "network": "زين (المشغل الرئيسي)", "type": "MNO (مشغل رئيسي)", "website": "https://sa.zain.com/ar/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": true, "vowifi_notes": "مدعومة رسميًا على باقات شباب ومسبق الدفع للأجهزة المتوافقة.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على رصيد الجيجابايت المحددة. باقات السوشيال المفتوح تخضع للاستخدام الشخصي.", "hotspot_policy": "الهوتسبوت يُخصم من البيانات العامة.", "data_rollover": false}, "packages": [{"name_ar": "شباب 79", "name_en": "Shabab 79", "price_base": 68.7, "price_vat": 79.0, "validity_days": 28, "general_data_gb": 15.0, "social_data_gb": 15.0, "unlimited_social": false, "local_minutes": 500, "special_perks_ar": "السعر النهائي 79 ريال شامل الضريبة تماماً بدون مبالغ كسور", "special_perks_en": "Flat 79 SAR including VAT exactly", "sms": 200, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "شباب 119", "name_en": "Shabab 119", "price_base": 103.48, "price_vat": 119.0, "validity_days": 28, "general_data_gb": 30.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1500, "special_perks_ar": "30 جيجا نت عام + سوشيال لا محدود + 1500 دقيقة", "special_perks_en": "30GB general + unlimited social + 1500 mins", "sms": 500, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "شباب 169", "name_en": "Shabab 169", "price_base": 146.96, "price_vat": 169.0, "validity_days": 28, "general_data_gb": 60.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "60 جيجا نت عام + سوشيال لا محدود ومكالمات لا محدودة", "special_perks_en": "60GB general + unlimited social & calls", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "شباب 199", "name_en": "Shabab 199", "price_base": 173.04, "price_vat": 199.0, "validity_days": 28, "general_data_gb": 80.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1500, "special_perks_ar": "80 جيجا نت عام + سوشيال لا محدود", "special_perks_en": "80GB general + unlimited social", "sms": 1500, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "شباب 409", "name_en": "Shabab 409", "price_base": 355.65, "price_vat": 409.0, "validity_days": 28, "general_data_gb": 9999.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "إنترنت ومكالمات وسوشيال لا محدود بالكامل", "special_perks_en": "Completely unlimited internet, social & calls", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "شباب 59 مفوتر", "name_en": "Shabab 59 Postpaid", "price_base": 59.0, "price_vat": 67.85, "validity_days": 30, "general_data_gb": 4.0, "social_data_gb": 5.0, "unlimited_social": false, "local_minutes": 400, "sms": 100, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري مفتوح: يمكن الإلغاء في أي وقت دون غرامات.", "cancellation_terms_en": "Open monthly contract: Cancel anytime without penalty.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم على باقة 59", "multi_sim_details_en": "Not supported on 59 plan", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "زين بلس Zain Plus", "loyalty_program_en": "Zain Plus", "special_perks_ar": "أرخص باقة مفوترة في زين مناسبة للطلاب والمكالمات الأساسية", "special_perks_en": "Entry-level Zain postpaid plan for budget-conscious users"}, {"name_ar": "شباب 99 مفوتر", "name_en": "Shabab 99 Postpaid", "price_base": 99.0, "price_vat": 113.85, "validity_days": 30, "general_data_gb": 15.0, "social_data_gb": 20.0, "unlimited_social": false, "local_minutes": 1000, "sms": 150, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري بدون التزام مع إمكانية الترقية لعقد جهاز.", "cancellation_terms_en": "Monthly no commitment with optional phone contract upgrade.", "multi_sim_supported": false, "multi_sim_details_ar": "غير متاح", "multi_sim_details_en": "Not available", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": true, "loyalty_program_ar": "زين بلس Zain Plus", "loyalty_program_en": "Zain Plus", "special_perks_ar": "35 جيجا إجمالية (15 عام + 20 سوشيال) + 1000 دقيقة مكالمات محلية", "special_perks_en": "35 GB total (15 Gen + 20 Social) + 1000 local minutes"}, {"name_ar": "شباب 149 مفوتر", "name_en": "Shabab 149 Postpaid", "price_base": 149.0, "price_vat": 171.35, "validity_days": 30, "general_data_gb": 35.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 2000, "sms": 200, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري؛ يدعم عقود أجهزة 12/24 شهر.", "cancellation_terms_en": "Monthly plan; supports 12/24-month smartphone contracts.", "multi_sim_supported": true, "multi_sim_details_ar": "تدعم شريحة إضافية للبيانات", "multi_sim_details_en": "Supports extra data SIM", "roaming_included_ar": "استقبال مكالمات في دول محددة", "roaming_included_en": "Incoming roaming in selected destinations", "device_subsidy_available": true, "loyalty_program_ar": "زين بلس الفضي", "loyalty_program_en": "Zain Plus Silver", "special_perks_ar": "35 جيجا نت عام + سوشيال ميديا لا محدود + 2000 دقيقة مكالمات + دعم تقسيط الأجهزة", "special_perks_en": "35 GB gen data + Unlimited Social + 2000 local mins + Device installment support"}, {"name_ar": "شباب 199 مفوتر", "name_en": "Shabab 199 Postpaid", "price_base": 199.0, "price_vat": 228.85, "validity_days": 30, "general_data_gb": 95.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "إلغاء فوري بدون غرامة خدمة. عقود الأجهزة تخضع لخصم القيمة المتبقية من دعم الجهاز فقط.", "cancellation_terms_en": "Cancel anytime without service penalty. Device contracts prorated strictly per CST device rules.", "multi_sim_supported": true, "multi_sim_details_ar": "تدعم حتى شريحتين إضافيتين (Multi-SIM)", "multi_sim_details_en": "Supports up to 2 Multi-SIMs", "roaming_included_ar": "استقبال مكالمات التجوال مجاناً", "roaming_included_en": "Free incoming roaming calls", "device_subsidy_available": true, "loyalty_program_ar": "زين بلس الذهبي", "loyalty_program_en": "Zain Plus Gold", "special_perks_ar": "الباقة الأكثر شعبية في زين: 95 جيجا عام + سوشيال مفتوح + مكالمات ورسائل لا محدودة + شرائح متعددة", "special_perks_en": "Zain most popular plan: 95 GB gen data + Unlimited Social + Unlimited calls/SMS + Multi-SIM"}, {"name_ar": "شباب 299 مفوتر", "name_en": "Shabab 299 Postpaid", "price_base": 299.0, "price_vat": 343.85, "validity_days": 30, "general_data_gb": 150.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري مرن؛ متاح مع خصومات استثنائية لأجهزة 5G بعقد 24 شهراً.", "cancellation_terms_en": "Flexible monthly plan; available with major 5G phone subsidies on 24mo commitment.", "multi_sim_supported": true, "multi_sim_details_ar": "تشمل شريحة إضافية مجانية", "multi_sim_details_en": "Includes 1 FREE extra SIM", "roaming_included_ar": "حزمة بيانات تجوال دولي مدمجة", "roaming_included_en": "Built-in international roaming data pack", "device_subsidy_available": true, "loyalty_program_ar": "زين بلاتينيوم Zain Platinum", "loyalty_program_en": "Zain Platinum", "special_perks_ar": "150 جيجا عام + سوشيال لا محدود + شريحة إضافية مجانية + باقة تجوال", "special_perks_en": "150 GB gen data + Unlimited Social + 1 Free Multi-SIM + Roaming package"}, {"name_ar": "شباب 399 / بلاك", "name_en": "Shabab 399 / Black Postpaid", "price_base": 399.0, "price_vat": 458.85, "validity_days": 30, "general_data_gb": 9999.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "باقة النخبة في زين: لا توجد غرامات على اشتراك الخدمة؛ أقصى خصم للأجهزة الذكية يصل لأكثر من 3500 ريال.", "cancellation_terms_en": "Zain Black elite plan: Zero service penalty; maximum device subsidy up to 3500+ SAR.", "multi_sim_supported": true, "multi_sim_details_ar": "تشمل شريحتين إضافيتين (Multi-SIM) مجاناً", "multi_sim_details_en": "Includes 2 FREE extra Multi-SIMs", "roaming_included_ar": "إنترنت تجوال ومكالمات دولية مدمجة حول العالم", "roaming_included_en": "Global roaming data and international call allowance", "device_subsidy_available": true, "loyalty_program_ar": "زين بلاك كونسيرج Zain Black VIP", "loyalty_program_en": "Zain Black VIP Concierge", "special_perks_ar": "إنترنت 5G لا محدود بدون FUP + شريحتين مجاناً + خدمات كونسيرج زين بلاك وصالات المطارات", "special_perks_en": "Unlimited 5G without FUP + 2 Free Multi-SIMs + Zain Black VIP Concierge & Airport Lounges"}], "network_code": "zain"}, {"id": "yaqoot", "name_ar": "ياقوت (Yaqoot)", "name_en": "Yaqoot by Zain", "network": "زين", "type": "Digital Brand on Zain (علامة رقمية)", "website": "https://yaqoot.sa/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": true, "vowifi_notes": "مدعومة عبر شبكة زين للأجهزة المتوافقة، وتخصم من رصيد الدقائق.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على باقة البيانات العامة. تطبيقات السوشيال المختارة غير محدودة بالكامل داخل التطبيقات الرسمية.", "hotspot_policy": "الهوتسبوت يُخصم حصراً من البيانات العامة، ولا يُحسب ضمن التطبيقات اللامحدودة!", "data_rollover": false, "special_feature": "تجربة رقمية بالكامل، مع ميزة إهداء تطبيقات مفتوحة للأصدقاء المشتركين في ياقوت."}, "packages": [{"name_ar": "ياقوت 67", "name_en": "Yaqoot 67", "price_base": 58.26, "price_vat": 67.0, "validity_days": 28, "general_data_gb": 7.0, "social_data_gb": 7.0, "unlimited_social": false, "local_minutes": 400, "special_perks_ar": "14 جيجا إجمالية بسعر 67 ريال شامل الضريبة", "special_perks_en": "14GB total for 67 SAR inclusive of VAT", "sms": 300, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "ياقوت 85", "name_en": "Yaqoot 85", "price_base": 73.91, "price_vat": 85.0, "validity_days": 28, "general_data_gb": 15.0, "social_data_gb": 15.0, "unlimited_social": false, "local_minutes": 750, "special_perks_ar": "30 جيجا إجمالية + 750 دقيقة محلية ودولية", "special_perks_en": "30GB total + 750 local & international mins", "sms": 300, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "ياقوت 90", "name_en": "Yaqoot 90", "price_base": 78.26, "price_vat": 90.0, "validity_days": 28, "general_data_gb": 30.0, "social_data_gb": 0.0, "unlimited_social": true, "unlimited_apps_count": 7, "local_minutes": 300, "special_perks_ar": "30 جيجا نت عام + 7 تطبيقات لا محدودة (تختار منها YouTube, TikTok, Snap, X, etc.)", "special_perks_en": "30GB general data + 7 unlimited chosen apps (YouTube, TikTok, Snap, etc.)", "sms": 300, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "ياقوت 103.5", "name_en": "Yaqoot 103.5", "price_base": 90.0, "price_vat": 103.5, "validity_days": 28, "general_data_gb": 56.0, "social_data_gb": 0.0, "unlimited_social": false, "local_minutes": 300, "special_perks_ar": "البطل المطلق للبيانات العامة الصافية: 56 جيجابايت نت عام بدون أي تقييد لتطبيقات", "special_perks_en": "The absolute king of pure general data: 56GB unrestricted data", "sms": 300, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "ياقوت 125", "name_en": "Yaqoot 125", "price_base": 108.7, "price_vat": 125.0, "validity_days": 28, "general_data_gb": 50.0, "social_data_gb": 0.0, "unlimited_social": true, "unlimited_apps_count": 7, "local_minutes": 500, "special_perks_ar": "50 جيجا نت عام + 7 تطبيقات لا محدودة", "special_perks_en": "50GB general + 7 unlimited apps", "sms": 300, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "ياقوت 175", "name_en": "Yaqoot 175", "price_base": 152.17, "price_vat": 175.0, "validity_days": 28, "general_data_gb": 75.0, "social_data_gb": 0.0, "unlimited_social": true, "unlimited_apps_count": 7, "local_minutes": 750, "special_perks_ar": "75 جيجا نت عام + 7 تطبيقات لا محدودة", "special_perks_en": "75GB general + 7 unlimited apps", "sms": 300, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "ياقوت 220.57", "name_en": "Yaqoot 220.57", "price_base": 191.8, "price_vat": 220.57, "validity_days": 28, "general_data_gb": 100.0, "social_data_gb": 0.0, "unlimited_social": true, "unlimited_apps_count": 7, "local_minutes": 1000, "special_perks_ar": "100 جيجا نت عام + 7 تطبيقات لا محدودة", "special_perks_en": "100GB general + 7 unlimited apps", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "ياقوت 385", "name_en": "Yaqoot 385", "price_base": 334.78, "price_vat": 385.0, "validity_days": 28, "general_data_gb": 9999.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "إنترنت لا محدود بالكامل ومكالمات لا محدودة", "special_perks_en": "Truly unlimited internet & calls", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "ياقوت 1X المجددة", "name_en": "Yaqoot 1X Auto-billed", "price_base": 100.0, "price_vat": 115.0, "validity_days": 30, "general_data_gb": 25.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "شريحة رقمية بفوترة وتجديد تلقائي شهري؛ يمكن إيقاف التجديد أو إلغاء الشريحة بضغطة زر من التطبيق فوراً دون أي غرامات.", "cancellation_terms_en": "Digital monthly auto-billed plan; cancel or pause renewal instantly via Yaqoot app without penalties.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "هدايا ياقوت (2 هدايا تطبيقات شهرياً للأصدقاء)", "loyalty_program_en": "Yaqoot Gifts (2 app gifts/month to friends)", "special_perks_ar": "25 جيجا عام + 3 تطبيقات مفتوحة بدون حدود + مكالمات ورسائل لا محدودة + هديتين تطبيقات للأصدقاء", "special_perks_en": "25 GB gen data + 3 unlimited apps + Unlimited calls/SMS + 2 app gifts"}, {"name_ar": "ياقوت 3X المجددة", "name_en": "Yaqoot 3X Auto-billed", "price_base": 200.0, "price_vat": 230.0, "validity_days": 30, "general_data_gb": 95.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "تجديد شهري تلقائي رقمي؛ إلغاء فوري عبر التطبيق.", "cancellation_terms_en": "Digital monthly auto-recurring; cancel instantly via app.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "هدايا ياقوت (4 هدايا تطبيقات)", "loyalty_program_en": "Yaqoot Gifts (4 app gifts)", "special_perks_ar": "95 جيجا عام + 6 تطبيقات غير محدودة + مكالمات ورسائل مفتوحة + 4 هدايا تطبيقات", "special_perks_en": "95 GB gen data + 6 unlimited apps + Unlimited calls/SMS + 4 app gifts"}, {"name_ar": "ياقوت 5X المجددة", "name_en": "Yaqoot 5X Auto-billed", "price_base": 400.0, "price_vat": 460.0, "validity_days": 30, "general_data_gb": 9999.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "تجديد شهري؛ إلغاء فوري بدون شروط جزائية.", "cancellation_terms_en": "Digital monthly recurring; cancel anytime.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "هدايا ياقوت (5 هدايا تطبيقات)", "loyalty_program_en": "Yaqoot Gifts (5 app gifts)", "special_perks_ar": "إنترنت 5G لا محدود بالكامل بدون سياسة استخدام عادل + مكالمات ورسائل مفتوحة لجميع الشبكات + 5 هدايا", "special_perks_en": "Unlimited 5G internet without FUP + Unlimited calls/SMS to all networks + 5 app gifts"}], "network_code": "zain"}, {"id": "salam", "name_ar": "سلام موبايل (Salam Mobile)", "name_en": "Salam Mobile", "network": "زين", "type": "MVNO on Zain (مشغل افتراضي)", "website": "https://salam.sa/ar/consumer/mobile/prepaid/solo-plans/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": false, "vowifi_notes": "خدمة VoWiFi غير مفعلة افتراضياً لمعظم خطوط مسبق الدفع لسلام.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على باقة البيانات العامة.", "hotspot_policy": "الهوتسبوت يُخصم من البيانات العامة.", "data_rollover": true, "data_rollover_notes": "ميزة ترحيل البيانات المتبقية للشهر القادم (حتى 20 جيجا لباقات سولو 74 و 99، وحتى 40 جيجا للباقات الأعلى)."}, "packages": [{"name_ar": "سولو 74", "name_en": "Solo 74", "price_base": 74.5, "price_vat": 85.68, "validity_days": 30, "general_data_gb": 20.0, "social_data_gb": 20.0, "unlimited_social": false, "local_minutes": 450, "special_perks_ar": "40 جيجا إجمالية + ترحيل حتى 20 جيجا للشهر التالي + 450 رسالة", "special_perks_en": "40GB total + rollover up to 20GB to next month + 450 SMS", "sms": 450, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سولو 99", "name_en": "Solo 99", "price_base": 99.0, "price_vat": 113.85, "validity_days": 30, "general_data_gb": 35.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1000, "special_perks_ar": "35 جيجا نت عام + سوشيال ميديا لا محدود + ترحيل حتى 20 جيجا", "special_perks_en": "35GB general data + unlimited social + rollover up to 20GB", "sms": 450, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سولو 149", "name_en": "Solo 149", "price_base": 149.0, "price_vat": 171.35, "validity_days": 30, "general_data_gb": 59.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "59 جيجا عام + سوشيال ومكالمات لا محدودة + ترحيل 25 جيجا", "special_perks_en": "59GB general + unlimited social & calls + 25GB rollover", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سولو 179", "name_en": "Solo 179", "price_base": 179.5, "price_vat": 206.43, "validity_days": 30, "general_data_gb": 79.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "79 جيجا عام + سوشيال ومكالمات لا محدودة + ترحيل 40 جيجا", "special_perks_en": "79GB general + unlimited social & calls + 40GB rollover", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سولو 199", "name_en": "Solo 199", "price_base": 199.0, "price_vat": 228.85, "validity_days": 30, "general_data_gb": 80.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1800, "special_perks_ar": "80 جيجا عام + سوشيال لا محدود + 100 دقيقة دولية + ترحيل 40 جيجا", "special_perks_en": "80GB general + unlimited social + 100 intl mins + 40GB rollover", "sms": 450, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سولو اللامحدودة", "name_en": "Solo Infinite", "price_base": 359.0, "price_vat": 412.85, "validity_days": 30, "general_data_gb": 9999.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "إنترنت ومكالمات وسوشيال لا محدود بالكامل", "special_perks_en": "Completely unlimited data, calls & social", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "سولو 79 مفوتر", "name_en": "Solo 79 Postpaid", "price_base": 79.0, "price_vat": 90.85, "validity_days": 30, "general_data_gb": 25.0, "social_data_gb": 25.0, "unlimited_social": false, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري بدون التزام أو شروط جزائية؛ إلغاء في أي وقت.", "cancellation_terms_en": "Monthly contract with no commitments or penalties; cancel anytime.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "سولو بلس", "loyalty_program_en": "Solo Plus", "special_perks_ar": "50 جيجا إجمالية (25 عام + 25 سوشيال) + مكالمات ورسائل لا محدودة + ترحيل الرصيد للشهر التالي", "special_perks_en": "50 GB total (25 Gen + 25 Social) + Unlimited calls/SMS + Data Rollover"}, {"name_ar": "سولو 149 مفوتر", "name_en": "Solo 149 Postpaid", "price_base": 149.0, "price_vat": 171.35, "validity_days": 30, "general_data_gb": 65.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري بدون التزام.", "cancellation_terms_en": "Monthly plan with no commitment.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "سولو بلس", "loyalty_program_en": "Solo Plus", "special_perks_ar": "65 جيجا عام + سوشيال لا محدود + مكالمات ورسائل مفتوحة + ترحيل البيانات", "special_perks_en": "65 GB gen data + Unlimited Social + Unlimited calls/SMS + Rollover"}, {"name_ar": "سولو 249 مفوتر", "name_en": "Solo 249 Postpaid", "price_base": 249.0, "price_vat": 286.35, "validity_days": 30, "general_data_gb": 9999.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري بدون التزام.", "cancellation_terms_en": "Monthly plan with no commitment.", "multi_sim_supported": true, "multi_sim_details_ar": "تدعم شريحة إضافية لمشاركة الإنترنت", "multi_sim_details_en": "Supports extra SIM for data sharing", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "سولو بلس VIP", "loyalty_program_en": "Solo Plus VIP", "special_perks_ar": "إنترنت 5G لا محدود بالكامل + مكالمات ورسائل مفتوحة لجميع الشبكات + شرائح متعددة", "special_perks_en": "Unlimited 5G internet + Unlimited calls/SMS to all networks + Multi-SIM"}], "network_code": "zain"}, {"id": "redbull", "name_ar": "ريد بُل موبايل (Red Bull MOBILE)", "name_en": "Red Bull MOBILE Saudi", "network": "زين", "type": "MVNO on Zain (مشغل افتراضي)", "website": "https://www.redbullmobile.sa/", "hidden_conditions": {"metering_block_data": "100 KB", "metering_block_voice": "بالثانية (Per second)", "vowifi_supported": false, "vowifi_notes": "خدمة VoWiFi غير معتمدة رسمياً كخدمة قياسية لشرائح ريد بُل.", "volte_supported": true, "throttling_fup": "لا خنق سرعة على جيجاكوين البيانات العامة.", "hotspot_policy": "الهوتسبوت يخصم من رصيد البيانات العامة.", "data_rollover": true, "data_rollover_notes": "نظام الجيجاكوين (Gigacoins): تتحول جميع البيانات المتبقية غير المستخدمة إلى جيجاكوين لا تنتهي صلاحيتها أبداً طالما شريحتك نشطة!"}, "packages": [{"name_ar": "مزاجي 60", "name_en": "Mazaj 60", "price_base": 60.0, "price_vat": 69.0, "validity_days": 30, "general_data_gb": 6.0, "social_data_gb": 6.0, "unlimited_social": false, "local_minutes": 400, "special_perks_ar": "12 جيجاكوين لا تنتهي صلاحيتها", "special_perks_en": "12 Gigacoins that never expire", "sms": 400, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "مزاجي سمارت 75 (جديد)", "name_en": "Mazaj Smart 75", "price_base": 75.0, "price_vat": 86.25, "validity_days": 28, "general_data_gb": 25.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 400, "special_perks_ar": "25 جيجاكوين عامة لا تنتهي + سوشيال ميديا لا محدود", "special_perks_en": "25 non-expiring Gigacoins + unlimited social media", "sms": 400, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "مزاجي 80", "name_en": "Mazaj 80", "price_base": 80.0, "price_vat": 92.0, "validity_days": 30, "general_data_gb": 25.0, "social_data_gb": 35.0, "unlimited_social": false, "local_minutes": 500, "special_perks_ar": "60 جيجاكوين إجمالية لا تنتهي صلاحيتها أبداً (25 عام + 35 سوشيال)", "special_perks_en": "60 total non-expiring Gigacoins (25GB gen + 35GB social)", "sms": 500, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "باقة الضيف 90", "name_en": "Visitor 90", "price_base": 90.0, "price_vat": 103.5, "validity_days": 28, "general_data_gb": 50.0, "social_data_gb": 0.0, "unlimited_social": false, "local_minutes": 300, "special_perks_ar": "50 جيجابايت إنترنت عام صافي بدون تقييد", "special_perks_en": "50GB pure general data without app restrictions", "sms": 45, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "مزاجي 95", "name_en": "Mazaj 95", "price_base": 95.0, "price_vat": 109.25, "validity_days": 30, "general_data_gb": 35.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 800, "special_perks_ar": "35 جيجاكوين عامة لا تنتهي + سوشيال ميديا لا محدود + 800 دقيقة", "special_perks_en": "35 non-expiring Gigacoins + unlimited social + 800 mins", "sms": 800, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "مزاجي ماكس 104.3", "name_en": "Mazaj Max 104.3", "price_base": 104.3, "price_vat": 119.95, "validity_days": 30, "general_data_gb": 40.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 950, "special_perks_ar": "40 جيجاكوين عامة + سوشيال ميديا لا محدود", "special_perks_en": "40 Gigacoins + unlimited social", "sms": 950, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "مزاجي 120", "name_en": "Mazaj 120", "price_base": 120.0, "price_vat": 138.0, "validity_days": 30, "general_data_gb": 50.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 1050, "special_perks_ar": "50 جيجاكوين عامة + سوشيال ميديا لا محدود", "special_perks_en": "50 Gigacoins + unlimited social", "sms": 9999, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "مزاجي 160+", "name_en": "Mazaj 160+", "price_base": 160.0, "price_vat": 184.0, "validity_days": 30, "general_data_gb": 66.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "66 جيجاكوين عامة + سوشيال ومكالمات لا محدودة", "special_perks_en": "66 Gigacoins + unlimited social & calls", "sms": 400, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "مزاجي 360+", "name_en": "Mazaj 360+", "price_base": 360.0, "price_vat": 414.0, "validity_days": 30, "general_data_gb": 9999.0, "social_data_gb": 0.0, "unlimited_social": true, "local_minutes": 9999, "special_perks_ar": "إنترنت لا محدود + 30 جيجاكوين + مكالمات لا محدودة", "special_perks_en": "Unlimited data + 30 Gigacoins + unlimited calls", "sms": 400, "package_type": "prepaid", "contract_type": "no_commitment", "contract_months": 0, "cancellation_terms_ar": "لا ينطبق (مسبق الدفع: بدون أي فواتير، عقود، أو شروط جزائية)", "cancellation_terms_en": "N/A (Prepaid: No bills, contracts, or cancellation penalty fees)", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم (شريحة واحدة فقط)", "multi_sim_details_en": "Not supported (Single SIM only)", "roaming_included_ar": "غير مشمول (يتطلب شحن رصيد تجوال إضافي)", "roaming_included_en": "Not included (Requires separate roaming recharge credit)", "device_subsidy_available": false, "loyalty_program_ar": "برامج شحن عادية", "loyalty_program_en": "Standard recharge perks"}, {"name_ar": "مزاج 120 مفوتر", "name_en": "Mazaj 120 Postpaid", "price_base": 120.0, "price_vat": 138.0, "validity_days": 30, "general_data_gb": 40.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري مسبق الفوترة؛ بدون أي التزام أو شروط جزائية.", "cancellation_terms_en": "Billed monthly plan; no contract commitments or penalties.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "ريد بُل كوينز Gigacoins", "loyalty_program_en": "Red Bull Gigacoins", "special_perks_ar": "40 جيجا نت عام + سوشيال لا محدود + ترحيل الرصيد الدائم بدون انتهاء صلاحية (Gigacoins) + فعاليات ريد بُل", "special_perks_en": "40 GB gen data + Unlimited Social + Non-expiring Gigacoins rollover + Red Bull event perks"}, {"name_ar": "مزاج 160 مفوتر", "name_en": "Mazaj 160 Postpaid", "price_base": 160.0, "price_vat": 184.0, "validity_days": 30, "general_data_gb": 80.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري بدون التزام.", "cancellation_terms_en": "Monthly plan with no commitment.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "ريد بُل كوينز Gigacoins", "loyalty_program_en": "Red Bull Gigacoins", "special_perks_ar": "80 جيجا عام + سوشيال مفتوح + مكالمات لا محدودة + ترحيل جيجاكوينز دائم", "special_perks_en": "80 GB gen data + Unlimited Social + Unlimited calls + Permanent Gigacoins rollover"}, {"name_ar": "مزاج 220 مفوتر", "name_en": "Mazaj 220 Postpaid", "price_base": 220.0, "price_vat": 253.0, "validity_days": 30, "general_data_gb": 9999.0, "social_data_gb": 9999.0, "unlimited_social": true, "local_minutes": 9999, "sms": 9999, "package_type": "postpaid", "contract_type": "no_commitment", "contract_months": 1, "cancellation_terms_ar": "عقد شهري بدون التزام.", "cancellation_terms_en": "Monthly plan with no commitment.", "multi_sim_supported": false, "multi_sim_details_ar": "غير مدعوم", "multi_sim_details_en": "Not supported", "roaming_included_ar": "غير مشمول", "roaming_included_en": "Not included", "device_subsidy_available": false, "loyalty_program_ar": "ريد بُل كوينز Gigacoins VIP", "loyalty_program_en": "Red Bull Gigacoins VIP", "special_perks_ar": "إنترنت 5G لا محدود بالكامل بدون سياسة استخدام عادل + مكالمات ورسائل مفتوحة لجميع الشبكات", "special_perks_en": "Unlimited 5G internet without FUP + Unlimited calls/SMS to all networks"}], "network_code": "zain"}]};

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
