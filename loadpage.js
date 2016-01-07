var page = require('webpage').create(),
  system = require('system'),
  t, address, fileName;

if (system.args.length === 2) {
  console.log('Usage: loadpage.js <some URL> <image file name>');
  phantom.exit();
}
page.viewportSize = { width: 828, height: 1472 };
t = Date.now();
address = system.args[1];
fileName = system.args[2];
page.open(address, function(status) {
  if (status !== 'success') {
    console.log('FAIL to load the address');
  } else {
    t = Date.now() - t;
    page.render(fileName);
    console.log('Loading ' + system.args[1]);
    console.log('Loading time ' + t + ' msec');
  }
  phantom.exit();
});
