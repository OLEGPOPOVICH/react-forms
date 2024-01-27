const path = require('path');

const appPaths = {
  // папка с исходниками приложения
  appDir: path.resolve(__dirname, '../../src'),
  // папка с общими элементами приложения (утилиты, компоненты и т.п.)
  appShared: path.resolve(__dirname, '../../src/shared'),
  // точка входа в приложение
  appIndex: path.resolve(__dirname, '../../src/index.tsx'),
  // HTML шаблон приложения
  appHTMLTemplate: path.resolve(__dirname, '../../public/index.html'),
};

module.exports = appPaths;
