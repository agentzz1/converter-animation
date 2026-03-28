const fs = require('fs');
const path = '/c/Users/maogo/converter-animation/index.html';
const html = fs.readFileSync('/dev/stdin', 'utf8');
fs.writeFileSync(path, html);
console.log('Written: ' + html.length + ' bytes');
