// اصلي پروسه د Electron ایپ لپاره
// د Electron ماډلونه وارد کړئ
// د کړکۍ جوړول، ګلوبل شارټ کټونه، IPC، کلیپ بورډ، او نور اړین ماډلونه
// copy right (c) 2026 ipashto-ai. All rights reserved.
const { app, BrowserWindow, globalShortcut, ipcMain, clipboard, nativeTheme } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;
let isQuitting = false;
const configPath = path.join(app.getPath('userData'), 'window-settings.json');

// د کړکۍ تنظیمات خوندي کولو او ترلاسه کولو لپاره د فایل سیسټم کارول
function getSavedSettings() {
  try {
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
  } catch (e) {}
  return { width: 920, height: 600 };
}

// د کړکۍ موقعیت او اندازه خوندي کول کله چې کارونکی کړکۍ بندوي یا حرکت ورکړي
function saveSettings() {
  try {
    if (mainWindow && !mainWindow.isDestroyed()) {
      fs.writeFileSync(configPath, JSON.stringify(mainWindow.getBounds()));
    }
  } catch (e) {}
}

// د اصلي کړکۍ جوړولو فنکشن
function createWindow() {
  const settings = getSavedSettings();

  mainWindow = new BrowserWindow({
    width: settings.width || 920,
    height: settings.height || 600,
    x: settings.x,
    y: settings.y,
    alwaysOnTop: false,
    frame: true,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });

  // HTML فایل ته لاره ورکړئ چې د کړکۍ مینځپانګه به وي
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // د کړکۍ تړل کله چې ټولې تڼۍ وتړل شي
  mainWindow.on('close', (e) => {
    if (!isQuitting) {
      e.preventDefault();
      mainWindow.hide();
    }
  });

  // د کړکۍ اندازه او موقعیت خوندي کول کله چې حرکت ورکړل شي یا اندازه بدله شي
  mainWindow.on('resize', saveSettings);
  mainWindow.on('move', saveSettings);
  
  // پرانیستل کله چې ښکاره شي
  mainWindow.on('show', () => {
    mainWindow.webContents.send('window-shown');
  });
}

// کله چې ایپ چمتو شي، کړکۍ جوړه کړئ او ګلوبل شارټ کټ ثبت کړئ
app.whenReady().then(() => {
  createWindow();

  // Alt+Shift+P سره ښکاره/پټول
  globalShortcut.register('Alt+Shift+P', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });
});

// د کلیپ بورډ IPC هینډلرونه (د HTML سره اړیکه)
ipcMain.on('copy-text', (event, text) => {
  clipboard.writeText(text);
  event.reply('copy-success', true);
});

// د کلیپ بورډ څخه متن لوستل
ipcMain.handle('paste-text', async () => {
  return clipboard.readText();
});

// د اتومات تړلو څخه مخنیوی
app.on('before-quit', () => {
  isQuitting = true;
});

// د ایپ وتلو پر مهال ټول ګلوبل شارټ کټونه غیر فعال کړئ
app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

// د ټولو کړکیو تړل شوي پر مهال ایپ وتلو
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin' && !isQuitting) {
    app.quit();
  }
});
