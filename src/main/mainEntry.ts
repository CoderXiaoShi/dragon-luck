import { app, BrowserWindow, Menu, dialog } from 'electron'

let mainWindow: BrowserWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 620,
    height: 620,
    minWidth: 600,
    minHeight: 500,
    center: true,
    autoHideMenuBar: false,
    webPreferences: {
      webSecurity: false,
    },
  });
  mainWindow.webContents.openDevTools({mode: 'detach'})
  mainWindow.loadURL('http://localhost:5173/')


  // 创建自定义菜单模板
  const customMenuTemplate = [
    {
      label: '文件',
      submenu: [
        {
          label: '技术支持',
          click: () => {
            // 处理新建文件的逻辑
            dialog.showMessageBoxSync({
              type: 'question',
              buttons: ['确定',],
              defaultId: 0,
              message: '去抖音搜索 "程序员小石", 然后私信我'
            })
          }
        },
        {
          label: '退出',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            // 处理新建文件的逻辑
            app.quit()
          }
        },
      ]
    },
    // 添加其他菜单项
  ];

  // 创建菜单
  const customMenu = Menu.buildFromTemplate(customMenuTemplate);

  // 设置应用程序菜单
  Menu.setApplicationMenu(customMenu);

});
