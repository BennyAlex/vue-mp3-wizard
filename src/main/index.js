'use strict'
const electron = require('electron')
const {app, BrowserWindow, Menu, MenuItem} = electron

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
function isDev () {
  return process.env.NODE_ENV === 'development'
}

if (!isDev()) {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = isDev() ? `http://localhost:9080` : `file://${__dirname}/index.html`

function createWindow () {
  let options = {
    title: 'mp3-wizard',
    width: 850,
    height: 610,
    show: false,
    backgroundColor: '#5a5a5a',
    frame: false,
    minWidth: 600,
    minHeight: 400,
    center: true,
    fullscreen: false,
    icon: './icon.png'
  }
  mainWindow = new BrowserWindow(options)

  if (isDev()) {
    const menu = new Menu()
    menu.append(new MenuItem({
      label: 'Reload',
      role: 'forcereload',
      accelerator: 'F5'
    }));
    menu.append(new MenuItem({
      label: 'Toggle Developer Tools',
      role: 'toggledevtools',
      accelerator: 'F12'
    }));
    menu.append(new MenuItem({
      label: 'Toggle Fullscreen',
      role: 'togglefullscreen',
      accelerator: 'F11'
    }));
    Menu.setApplicationMenu(menu)
  }
  else {
    mainWindow.setMenu(null)
  }

  mainWindow.loadURL(winURL)
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
