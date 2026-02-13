const fs = require('fs');
const path = require('path');

const uiDir = path.join(__dirname, 'components', 'ui');

fs.readdirSync(uiDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(uiDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove version numbers from imports
    content = content.replace(/@radix-ui\/([^"@]*@[\d.]+)/g, '@radix-ui/$1');
    content = content.replace(/lucide-react@[\d.]+/g, 'lucide-react');
    content = content.replace(/class-variance-authority@[\d.]+/g, 'class-variance-authority');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
  }
});

console.log('All imports fixed!');
