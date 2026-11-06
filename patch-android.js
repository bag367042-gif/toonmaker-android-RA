// Patches the generated android project: portrait mode, version numbers.
const fs=require('fs');
const man='android/app/src/main/AndroidManifest.xml';
let m=fs.readFileSync(man,'utf8');
if(!m.includes('screenOrientation')) m=m.replace('<activity','<activity android:screenOrientation="portrait"');
fs.writeFileSync(man,m);
const g='android/app/build.gradle';
let b=fs.readFileSync(g,'utf8');
b=b.replace(/versionCode\s+\d+/,'versionCode '+(process.env.VERSION_CODE||1)).replace(/versionName\s+"[^"]*"/,'versionName "'+(process.env.VERSION_NAME||'1.0.0')+'"');
fs.writeFileSync(g,b);
console.log('patched');
