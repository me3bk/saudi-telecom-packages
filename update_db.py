import json

with open('/home/speedlo/Projects/saudi-telecom-packages/packages.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

for p in db['providers']:
    # Add clean network_code
    net_str = p['network'].lower()
    if 'stc' in net_str:
        p['network_code'] = 'stc'
    elif 'موبايلي' in net_str or 'mobily' in net_str:
        p['network_code'] = 'mobily'
    elif 'زين' in net_str or 'zain' in net_str:
        p['network_code'] = 'zain'
    else:
        p['network_code'] = 'other'

    # Ensure each package has sms count
    for pkg in p['packages']:
        name = pkg['name_en'].lower()
        if 'sms' not in pkg:
            if 'solo 74' in name or 'solo 99' in name:
                pkg['sms'] = 450
            elif 'solo' in name and ('149' in name or '179' in name or '199' in name or 'infinite' in name):
                pkg['sms'] = 9999
            elif 'mazaj 60' in name:
                pkg['sms'] = 400
            elif 'mazaj smart' in name:
                pkg['sms'] = 400
            elif 'mazaj 80' in name:
                pkg['sms'] = 500
            elif 'mazaj 95' in name:
                pkg['sms'] = 800
            elif 'mazaj max' in name:
                pkg['sms'] = 950
            elif 'visitor 90' in name:
                pkg['sms'] = 45
            elif 'mazaj 120' in name or 'mazaj 130' in name or 'mazaj 160' in name or 'mazaj 360' in name:
                pkg['sms'] = 9999
            elif 'yaqoot' in name or '1x' in name or '3x' in name or '5x' in name:
                pkg['sms'] = 9999 if '385' in name or '220' in name else 300
            elif 'hero' in name or '360' in name or '409' in name:
                pkg['sms'] = 9999
            else:
                pkg['sms'] = 0

with open('/home/speedlo/Projects/saudi-telecom-packages/packages.json', 'w', encoding='utf-8') as f:
    json.dump(db, f, ensure_ascii=False, indent=2)

print("Updated packages.json with network_code and sms fields!")
