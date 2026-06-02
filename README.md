
---

# 🖥️ پښتو آفلاین کیبورډ | Pashto Offline Keyboard

د پښتو ژبې لپاره یو بشپړ **آفلاین** کیبورډ چې د انټرنیټ اړتیا پرته کار کوي. په Electron باندې جوړ شوی او د Linux (Ubuntu/Debian) لپاره چمتو دی.

A complete **offline** Pashto keyboard that works without internet. Built with Electron and ready for Linux (Ubuntu/Debian).

---

## ✨ ځانګړتیاوې | Features

* 🎯 **۱۰۰٪ آفلاین** – د انټرنیټ اړتیا نشته | 100% Offline
* ⌨️ **درې کیبورډ حالتونه** – عادي، شفټ، کنټرول الټ | 3 Keyboard Modes
* 📋 **کاپي او پیسټ** – د سیسټم کلپ بورډ ملاتړ | Copy/Paste Support
* 🕒 **د متن تاریخچه** – وروستي ۳ متنونه خوندي کوي (په localStorage کې) | Text History (last 3)
* 🎯 **د کرسر موقعیت ساتل** – هرځای ته کیلي دننه کول | Cursor Position Preservation
* 💾 **د کړکۍ موقعیت خوندي کول** – د اپلیکیشن اندازه او ځای یادوي | Remembers Window Position & Size
* 🎨 **ښکلی او کارن-دوستانه انٹرفیس** – RTL ملاتړ | Clean RTL UI
* 🔧 **د اوبنټو ۲۴.۰۴ او ورته توزیعونو سره مطابقت** | Ubuntu 24.04+ Compatible
* ⚡ **د شارټ کټ ملاتړ** – `Alt + Shift + P` سره ښکاره/پټول | Shortcut Support

---

## 📸 انځور | Screenshot

---

## 📦 نصبول او چلول | Installation & Setup

دا پروژه لا تر اوسه په رسمي ډول ریلیز شوې نه ده. د چلولو لپاره لومړی پروژه پخپل کمپیوټر کې کلوون (Clone) کړئ:

```bash
git clone https://github.com/spinzar/pashto-keyboard-public.git
cd pashto-keyboard-public

```

### لار ۱: د اتوماتیک سکریپټ څخه کارول (تر ټولو اسانه)

په پروژه کې یو اتوماتیک سکریپټ (`rebuild.sh`) شامل دی چې ټول اړین ګامونه پخپله ترسره کوي، انحصارونه انسټالوي، اپلیکیشن جوړوي او بیا یې پیلوي:

1. د سکریپټ د اجرا کولو اجازه ورکړئ:

```bash
chmod +x rebuild.sh

```

2. سکریپټ چل کړئ:

```bash
./rebuild.sh

```

### لار ۲: د سرچینې څخه د پیکجونو جوړول (Manual)

که تاسو غواړئ کڅوړې په لاسي ډول د پرانیستلو یا انسټال لپاره چمتو کړئ:

1. ټول اړین پیکجونه انسټال کړئ:

```bash
npm install

```

2. د خپلې خوښې پیکج جوړ کړئ:

```bash
# د اوبنټو لپاره د .deb پیکج جوړول
npm run dist:deb

# د پورټبل AppImage پیکج جوړول
npm run dist:appimage

# دواړه پیکجونه یوځای جوړول
npm run dist

```

جوړ شوي پیکجونه به ستاسو د پروژې په `dist/` فولډر کې ځای پر ځای شي، چې بیا یې په اسانۍ انسټالولی شئ.

---

## 🚀 د استعمال څرنګوالی | How to Use

### 1. اپلیکیشن خلاصول

* که مو له سکریپټ څخه کار اخیستی وي، اپلیکیشن به اتومات خلاص شي.
* په عادي حالت کې د پروژې په فولډر کې `npm start` ووهئ.
* د شارټ کټ لپاره **`Alt + Shift + P`** فشار کړئ (اپلیکیشن به ښکاره او پټ شي).

### 2. متن لیکل

* په ټکسیال (textarea) کې کرسر هغه ځای ته ولرئ چیرې چې غواړئ متن اضافه کړئ.
* د کیبورډ تڼیو باندې کلیک وکړئ.
* تاسو کولی شئ په مستقیم ډول د خپل فزیکي کیبورډ څخه هم وکاروئ.

### 3. د کیبورډ حالت بدلول

* **عادي** – عادي پښتو توري او عددونه
* **شفټ** – لوی توري (capital)، تشکيل، او ځانګړي نښې
* **کنټرول الټ** – سمبولونه، بریکٹ، او ځانګړي کرکټرونه

### 4. کاپي او پیسټ

* د **کاپي** تڼۍ باندې کلیک وکړئ – ټول متن به کلپ بورډ ته لاړ شي.
* د **پیسټ** تڼۍ باندې کلیک وکړئ – د کلپ بورډ متن به د کرسر په موقعیت کې دننه شي.

### 5. متن پاکول او تاریخچه

* د **پاکول** تڼۍ باندې کلیک وکړئ – ټول متن به له ټکسیال څخه لیرې شي.
* د **تاریخچه** تڼۍ باندې کلیک وکړئ – وروستي ۳ خوندي شوي متنونه به وګورئ او کولی شئ یې بیرته راوګرځوئ.

---

## 🛠️ د پروژې جوړښت | Project Structure

```
pashto-keyboard-public/
├── assets/
│   └── icons/              # د اپلیکیشن آیکونونه او سکرین شاټونه
├── src/
│   ├── main.js             # Electron اصلي پروسه (د کړکۍ موقعیت یاد ساتي)
│   └── index.html          # UI او کیبورډ منطق (د تاریخچې سره)
├── dist/                   # جوړ شوي پیکجونه (deb, AppImage)
├── rebuild.sh              # اتوماتیک جوړونې سکریپټ
├── package.json            # پروژه ترتیبات او انحصارونه
├── LICENSE                 # Apache 2.0 لایسنس
└── README.md               # دا فایل

```

---

## 🤝 همکاري | Contributing

ستاسو مرستې ته ښه راغلاست ویل کیږي! که تاسو غواړئ په دې پروژه کې مرسته وکړئ:

1. فورک (Fork) کړئ
2. د ځانګړتیاوو لپاره نوی برانچ (branch) جوړ کړئ (`git checkout -b feature/amazing-feature`)
3. بدلونونه کامېټ کړئ (`git commit -m 'Add some amazing feature'`)
4. برانچ ته پش کړئ (`git push origin feature/amazing-feature`)
5. د پل راکښنې (Pull Request) پرانیزئ

**ستونزې (Issues):** مهرباني وکړئ که تاسو کومه ستونزه ومومئ، د [GitHub Issues](https://www.google.com/search?q=https%3A%2F%2Fgithub.com%2Fspinzar%2Fpashto-keyboard-public%2Fissues) له لارې راپور یې کړئ.

---

## 📜 لایسنس | License

دا پروژه د **Apache License 2.0** لاندې خپره شوې ده. تاسو کولی شئ:

* په وړیا توګه یې وکاروئ، ترمیم کړئ، او شریک کړئ.
* په سوداګریزو پروژو کې یې وکاروئ.
* بدلونونه خپاره کړئ.

یوازنی شرط دا دی چې اصلي لایسنس او کاپي رایټ وساتل شي.

د لایسنس بشپړ متن د [LICENSE](https://www.google.com/search?q=LICENSE) فایل کې ولولئ.

---

## 👥 مننه | Acknowledgements

* د [Electron](https://www.electronjs.org) ټیم – د کراس-پلیټفارم ډیسټاپ اپلیکیشنونو جوړولو لپاره
* د پښتو ژبې ټول ویونکي – چې دې پروژې ته یې الهام راکړ

---

## 📞 اړیکه | Contact

* **پرمخوړونکی (Developer):** iPashto AI / spinzar
* **د پروژې لینک (Project Link):** [https://github.com/spinzar/pashto-keyboard-public](https://www.google.com/search?q=https%3A%2F%2Fgithub.com%2Fspinzar%2Fpashto-keyboard-public)
* **ستونزې (Issues):** [https://github.com/spinzar/pashto-keyboard-public/issues](https://www.google.com/search?q=https%3A%2F%2Fgithub.com%2Fspinzar%2Fpashto-keyboard-public%2Fissues)

---

### ❤️ ملاتړ

که دا پروژه تاسو سره مهرباني وکړه، مهرباني وکړئ د **⭐ ستوري (Star)** په ورکولو سره یې ملاتړ وکړئ.

**پښتو ژبه وساتئ | Keep Pashto Language Alive** 🎯