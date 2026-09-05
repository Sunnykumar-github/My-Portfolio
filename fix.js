const fs = require('fs');
const files = [
    's:/Previous/src/components/achievements.tsx',
    's:/Previous/src/components/certifications.tsx',
    's:/Previous/src/components/leadership.tsx',
    's:/Previous/src/components/testimonials.tsx',
    's:/Previous/src/components/why-hire-me.tsx'
];
files.forEach(f => {
    let text = fs.readFileSync(f, 'utf8');
    text = text.replace(/\\`/g, '`').replace(/\\\$/g, '$');
    fs.writeFileSync(f, text);
});
console.log('Fixed escape characters.');
