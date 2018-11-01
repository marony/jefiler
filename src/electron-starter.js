const application = require('./application');

console.log('electron-starter');
global.application = new application();
global.application.run();
