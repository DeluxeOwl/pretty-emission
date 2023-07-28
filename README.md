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
```json5
"tailwindCSS.classAttributes": [
    // ...
    "style"
],
"tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)",
    ["tw.style\\(([^)]*)\\)", "'([^']*)'"]
]
```

`yarn expo install react-native-safe-area-context`
Apparently you need to rebuild after installing some things
Make sure **to use the yarn/npx expo** to install and also use the hook in a separate component.
Avoided these errors:
```
requireNativeComponent: "RNCSafeAreaProvider" was not found in the UIManager

No safe area insets value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.
```

`yarn expo install class-variance-authority`
```json5
{
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

Added jotai

Modified `tailwind.config.js` to add the fonts:
```js
const plugin = require("tailwindcss/plugin");

const fontTypes = [
  "Black",
  "BlackItalic",
  "Bold",
  "BoldItalic",
  "Italic",
  "Light",
  "LightItalic",
  "Medium",
  "MediumItalic",
  "Regular",
];
const fonts = fontTypes.reduce((acc, fontVariant) => {
  return {
    ...acc,
    [`.font-satoshi-${fontVariant.toLowerCase()}`]: {
      fontFamily: `Satoshi${fontVariant}`,
    },
  };
}, {});

/** @type {import('twrnc').Config} */
module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(fonts);
    }),
  ],
};

```

Wrapper `cva`
```ts
export function useStyles<A>(
  callback: (t: ThemeProps) => (...args: A[]) => string
) {
  const theme = useTheme();
  return useCallback(callback(theme), [theme]);
}
```