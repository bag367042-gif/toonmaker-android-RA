# TOONMAKER STUDIO - Android project (Capacitor)
Package ID: com.toonmakerstudio.app
Web app: www/index.html (same app as the web link). Settings flags at top of that file: CONFIG = {ADS:false, PREMIUM:false}. No ads or payment code exists yet.

## Build without a computer (phone browser)
1. Create a free GitHub account, make a new repository, upload ALL these files (keep folders; the .github folder is important).
2. Open the repository > Actions > "Build Android APK" > Run workflow.
3. When it turns green, open the run > Artifacts > download toonmaker-debug-apk, install it on your phone and test.
4. If it turns red, copy the error text and send it to Claude.
NOT DONE YET: signed AAB for Play Store (needs a signing key; next step).
