# viroreacttest
Bring to light bugs from viroreact to improve this awesome library.

## setup
Get an api key from https://viromedia.com/signup/ and replace inside index.js

## to run the project in debug mode
npm run android

## to run the project in release mode
cd androi/app

keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

change values in android/gradle.properties

npm run "android start release"
