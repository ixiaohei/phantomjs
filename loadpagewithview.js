var page = require('webpage').create(),
  system = require('system'),
  t, address, fileName, width, height;

if(system.args.length === 4) {
  console.log('Usage: loadpage.js <some URL> <image file name> <width> <height>');
  phantom.exit();
}
t = Date.now();
address = system.args[1];
fileName = system.args[2];
width = system.args[3];
height = system.args[4];
page.viewportSize = {width: 447, height: 627};
page.clipRect = {
  top: 0,
  left: 0,
  width: width,
  height: height
};
page.open(address, function(status) {
  if(status !== 'success') {
    console.log('FAIL to load the address');
  } else {
    t = Date.now() - t;
    console.log('Loading ' + system.args[1]);
    console.log('clip viewport width ' + width + ' height ' + height);
    page.render(fileName);
    console.log('Loading time ' + t + ' msec');
  }
  phantom.exit();
});
