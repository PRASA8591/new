const fs = require('fs');
const html = fs.readFileSync('main.html', 'utf8');
const scriptStart = html.indexOf('<script type="module">');
const scriptEnd = html.lastIndexOf('</script>');
const scriptContent = html.substring(scriptStart + 22, scriptEnd);
fs.writeFileSync('temp.js', scriptContent);
