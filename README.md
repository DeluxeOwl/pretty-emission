## Local builds for iOS simulator
Requires `node 18.17.0` (lts as of this time).
This is basically your version of the expo go client, which allows you to add native code.

Make sure the iOS simulator is configured: https://docs.expo.dev/workflow/ios-simulator/

Install [expo-dev-client](https://docs.expo.dev/develop/development-builds/installation/).
Could also use `prebuild`
```sh
yarn global add eas-cli
yarn expo install expo-dev-client

# code signing, releasing etc
brew install fastlane
# dep manager for swift/obj-c
brew install cocoapods- [Local builds for iOS simulator](#local-builds-for-ios-simulator)

```

Add to `eas.json`:
```json
{
  "build": {
    "development-simulator": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    }
  }
}
```

```sh
eas build --profile development-simulator --platform ios --local

yarn expo start --dev-client
```

## Adding libraries

Tailwind: need `tailwind.config.js` and to add to settings.json
```json
"tailwindCSS.classAttributes": [
    // ...
    "style"
],
"tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)",
    ["tw.style\\(([^)]*)\\)", "'([^']*)'"]
]
```