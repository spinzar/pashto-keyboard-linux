```markdown
# 🖥️ پښتو آفلاین کیبورډ | Pashto Offline Keyboard

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Linux](https://img.shields.io/badge/platform-Linux-FCC624?logo=linux)](https://www.linux.org)
[![Ubuntu](https://img.shields.io/badge/Ubuntu-24.04+-E95420?logo=ubuntu)](https://ubuntu.com)
[![Electron](https://img.shields.io/badge/Electron-30.0.0-47848F?logo=electron)](https://www.electronjs.org)

د پښتو ژبې لپاره یو بشپړ **آفلاین** کیبورډ چې د انټرنیټ اړتیا پرته کار کوي. په Electron باندې جوړ شوی او د Linux (Ubuntu/Debian) لپاره چمتو دی.

A complete **offline** Pashto keyboard that works without internet. Built with Electron and ready for Linux (Ubuntu/Debian).

---

## ✨ ځانګړتیاوې | Features

- 🎯 **۱۰۰٪ آفلاین** – د انټرنیټ اړتیا نشته | 100% Offline
- ⌨️ **درې کیبورډ حالتونه** – عادي، شفټ، کنټرول الټ | 3 Keyboard Modes
- 📋 **کاپي او پیسټ** – د سیسټم کلپ بورډ ملاتړ | Copy/Paste Support
- 🕒 **د متن تاریخچه** – وروستي ۳ متنونه خوندي کوي (په localStorage کې) | Text History (last 3)
- 🎯 **د کرسر موقعیت ساتل** – هرځای ته کیلي دننه کول | Cursor Position Preservation
- 💾 **د کړکۍ موقعیت خوندي کول** – د اپلیکیشن اندازه او ځای یادوي | Remembers Window Position & Size
- 🎨 **ښکلی او کارن-دوستانه انٹرفیس** – RTL ملاتړ | Clean RTL UI
- 🔧 **د اوبنټو ۲۴.۰۴ او ورته توزیعونو سره مطابقت** | Ubuntu 24.04+ Compatible
- ⚡ **د شارټ کټ ملاتړ** – `Alt + Shift + P` سره ښکاره/پټول | Shortcut Support

---

## 📸 انځور | Screenshot

![پښتو کیبورډ سکرین شاټ]https://github.com/spinzar/pashto-keyboard-public/blob/main/assets/icons/Screenshot%20from%202026-06-02%2023-51-46.png



---

## 📦 نصبول | Installation

### لار ۱: د `.deb` پیکج څخه (توصیه شوی)

1.  د وروستي ریلیز څخه `.deb` فایل ډاونلوډ کړئ:
    ```bash
    wget https://github.com/spinzar/pashto-keyboard-public/releases/download/v1.0.0/pashto-keyboard_1.0.0_amd64.deb
    ```
2.  پیکج نصب کړئ:
    ```bash
    sudo dpkg -i pashto-keyboard_1.0.0_amd64.deb
    ```
3.  که کومه تړلې ستونزه وي، حل یې کړئ:
    ```bash
    sudo apt-get install -f
    ```

### لار ۲: د AppImage څخه (پورټبل)

1.  د AppImage فایل ډاونلوډ کړئ:
    ```bash
    wget https://github.com/spinzar/pashto-keyboard-public/releases/download/v1.0.0/PashtoKeyboard-1.0.0.AppImage
    ```
2.  د اجرا کولو اجازه ورکړئ:
    ```bash
    chmod +x PashtoKeyboard-1.0.0.AppImage
    ```
3.  چلول:
    ```bash
    ./PashtoKeyboard-1.0.0.AppImage --no-sandbox
    ```

### لار ۳: د سرچینې څخه جوړول

که تاسو غواړئ پخپله جوړه کړئ:

```bash
git clone https://github.com/spinzar/pashto-keyboard-public.git
cd pashto-keyboard-public
npm install
npm run dist:deb   # د .deb پیکج لپاره
# یا
npm run dist:appimage # د AppImage پیکج لپاره
```

جوړ شوی پیکج به د `dist/` فولډر کې وي.

### لار ۴: د اتوماتیک سکریپټ څخه کارول (rebuild.sh)

په پروژه کې یو اتوماتیک سکریپټ (`rebuild.sh`) شامل دی چې ټول اړین ګامونه پخپله ترسره کوي او اپلیکیشن پیلوي. دا د چټکې ازموینې لپاره ډیر ګټور دی.

1.  د سکریپټ د اجرا کولو اجازه ورکړئ:
    ```bash
    chmod +x rebuild.sh
    ```
2.  سکریپټ چل کړئ:
    ```bash
    ./rebuild.sh
    ```

> **یادونه:** دا سکریپټ به `node_modules` او `dist` پاک کړي، ټول انحصارونه نصب کړي، یوازې **AppImage** جوړه کړي او بیا به یې پیل کړي.

---

## 🚀 د استعمال څرنګوالی | How to Use

### 1. اپلیکیشن خلاصول

- د اپلیکیشن مینو څخه "PashtoKeyboard" لټون وکړئ.
- یا په ټرمینل کې `pashto-keyboard` ټایپ کړئ.
- د شارټ کټ لپاره **`Alt + Shift + P`** فشار کړئ (اپلیکیشن به ښکاره او پټ شي).

### 2. متن لیکل

- په ټکسیال (textarea) کې کرسر هغه ځای ته ولرئ چیرې چې غواړئ متن اضافه کړئ.
- د کیبورډ تڼیو باندې کلیک وکړئ.
- تاسو کولی شئ په مستقیم ډول د خپل فزیکي کیبورډ څخه هم وکاروئ.

### 3. د کیبورډ حالت بدلول

- **عادي** – عادي پښتو توري او عددونه
- **شفټ** – لوی توري (capital)، تشکيل، او ځانګړي نښې
- **کنټرول الټ** – سمبولونه، بریکٹ، او ځانګړي کرکټرونه

### 4. کاپي او پیسټ

- د **کاپي** تڼۍ باندې کلیک وکړئ – ټول متن به کلپ بورډ ته لاړ شي.
- د **پیسټ** تڼۍ باندې کلیک وکړئ – د کلپ بورډ متن به د کرسر په موقعیت کې دننه شي.

### 5. متن پاکول او تاریخچه

- د **پاکول** تڼۍ باندې کلیک وکړئ – ټول متن به له ټکسیال څخه لیرې شي.
- د **تاریخچه** تڼۍ باندې کلیک وکړئ – وروستي ۳ خوندي شوي متنونه به وګورئ او کولی شئ یې بیرته راوګرځوئ.

---

## 🛠️ د پراختیا لپاره | Development

### اړتیاوې | Prerequisites

- Node.js (v20 یا ورته)
- npm (v10 یا ورته)
- د Electron جوړولو لپاره اړین پکيجونه

### د پروژې جوړښت | Project Structure

```
pashto-keyboard-public/
├── assets/
│   └── icons/              # د اپلیکیشن آیکونونه
├── src/
│   ├── main.js             # Electron اصلي پروسه (د کړکۍ موقعیت یاد ساتي)
│   └── index.html          # UI او کیبورډ منطق (د تاریخچې سره)
├── dist/                   # جوړ شوي پیکجونه (deb, AppImage)
├── rebuild.sh              # اتوماتیک جوړونې سکریپټ
├── package.json            # پروژه ترتیبات او انحصارونه
├── LICENSE                 # Apache 2.0 لایسنس
└── README.md               # دا فایل
```

### د پراختیا کمانډونه | Development Commands

```bash
# د پراختیا په حالت کې چلول
npm start

# یوازې د .deb پیکج جوړول
npm run dist:deb

# یوازې د AppImage پیکج جوړول
npm run dist:appimage

# دواړه (deb او AppImage) جوړول
npm run dist
```

---

## 🤝 همکاري | Contributing

ستاسو مرستې ته ښه راغلاست ویل کیږي! که تاسو غواړئ په دې پروژه کې مرسته وکړئ:

1.  فورک (Fork) کړئ
2.  د ځانګړتیاوو لپاره نوی برانچ (branch) جوړ کړئ (`git checkout -b feature/amazing-feature`)
3.  بدلونونه کامېټ کړئ (`git commit -m 'Add some amazing feature'`)
4.  برانچ ته پش کړئ (`git push origin feature/amazing-feature`)
5.  د پل راکښنې (Pull Request) پرانیزئ

**ستونزې (Issues):** مهرباني وکړئ که تاسو کومه ستونزه ومومئ، د [GitHub Issues](https://github.com/spinzar/pashto-keyboard-public/issues) له لارې راپور یې کړئ.

---

## 📜 لایسنس | License

دا پروژه د **Apache License 2.0** لاندې خپره شوې ده. تاسو کولی شئ:

- په وړیا توګه یې وکاروئ، ترمیم کړئ، او شریک کړئ.
- په سوداګریزو پروژو کې یې وکاروئ.
- بدلونونه خپاره کړئ.

یوازنی شرط دا دی چې اصلي لایسنس او کاپي رایټ وساتل شي.

د لایسنس بشپړ متن د [LICENSE](LICENSE) فایل کې ولولئ.

---

## 👥 مننه | Acknowledgements

- د [Electron](https://www.electronjs.org) ټیم – د کراس-پلیټفارم ډیسټاپ اپلیکیشنونو جوړولو لپاره
- د پښتو ژبې ټول ویونکي – چې دې پروژې ته یې الهام راکړ

---

## 📞 اړیکه | Contact

- **پرمخوړونکی (Developer):** iPashto AI / spinzar
- **د پروژې لینک (Project Link):** [https://github.com/spinzar/pashto-keyboard-public](https://github.com/spinzar/pashto-keyboard-public)
- **ستونزې (Issues):** [https://github.com/spinzar/pashto-keyboard-public/issues](https://github.com/spinzar/pashto-keyboard-public/issues)

---

### ❤️ ملاتړ

که دا پروژه تاسو سره مرسته وکړه، مهرباني وکړئ د **⭐ ستوري (Star)** په ورکولو سره یې ملاتړ وکړئ.

**پښتو ژبه وساتئ | Keep Pashto Language Alive** 🎯
```