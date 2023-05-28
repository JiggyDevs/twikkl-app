<div style="text-align: center; align-self: center" >
    <img 
        src="https://github.com/JiggyDevs/twikkl-app/blob/master/assets/imgs/logos/logo.png?raw=true" 
        height="250" width="250"  alt="TwikkL Icon"
    />
</div>

- [Intro](#intro)
- [Demo](#demo)
- [Getting started](#getting-started)
- [Deploy locally](#deploy-locally)
- [Navigation](#navigation)
- [Styling](#styling)
- [Contributing](#contributing)

## Intro

Welcome ! This is the place to get started with **TwikkL** app. We introduce you to the very interesting topics and
aspects. Also, we give support to mobile dev community to learn.

This app is intended to be a cross-platform
[_DApp_](https://www.investopedia.com/terms/d/decentralized-applications-dapps.asp)
(for Android and iOS), that makes live-streaming, record, share videos and provide services.

NOTE:  
If you are an experienced person and want to give us your support or point of view or if you are a beginner who would
like to ask some questions feel free to contact us in [Discussions](https://github.com/JiggyDevs/twikkl-app/discussions)
.

## Demo

This following demo animated image, represents the actual version of the app. Yes, it's still new 🤣

<details>
  <summary>Expand 👈</summary>
  <img alt="demo-here" src="docs/demo/demo-2.gif"/>
</details>

## Getting started

Before you start make sure that you have at least ~15 minutes ⏱ to set up your dev environment.

The most important techs used are :

1. [ReactJS](https://react.dev/)
2. [React Native](https://reactnative.dev/) (Without need for RN CLI)
3. Expo [Managed](https://docs.expo.dev/archive/managed-vs-bare/#managed-workflow)
4. [React Native Paper](https://callstack.github.io/react-native-paper/) (This is a UI library)
5. [Expo Router](https://docs.expo.dev/guides/routing-and-navigation) (Smart routing)

NOTE:  
Don't worry if you don't know few of these, it's fine 😅. But if you are totally new to these, then we recommend you to
learn some basics. If so, we suggest you to follow
the [React Native basics guide](https://reactnative.dev/docs/getting-started)

Next, make sure to install the following tools on your local machine and Os:

1. Node.js (We recommend [LTS version](https://nodejs.org/en/) v16 or higher)
2. A JavaScript IDE such as VsCode/Webstorm etc...
3. Git installed (visit [the GitHub's guide on how to set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git))

You can run the app for free, by using [Expo Go App](https://expo.dev/client) (available on Android
and iOS), it makes you run the app on a physical device.

If you want to use emulator or iOS simulator, we recommend you to visit the following links:

- [Android emulator setup guide](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator setup guide](https://docs.expo.dev/workflow/ios-simulator/)

If you want to run the app on web navigator like Chrome or Mozilla, then you'll have
to [add few additional dependencies](https://docs.expo.dev/workflow/web/).

## Deploy locally

Once you're ready with the tools mentioned above, you can import source code using _Git CLI_ with the following command:

```
git clone https://github.com/JiggyDevs/twikkl-app.git
```

2. Next, install the app using npm: `npm install`)

3. run the following command from the project root directory:

```
npx expo start
```

NOTE:  
If you're looking to use [Yarn](https://yarnpkg.com/) then you have to delete the [package-lock.json](package-lock.json)
file just after the clone. Then, use `yarn install` to install dependencies.

## Navigation

We use [Expo Router](https://expo.github.io/router/docs) as a small framework to manage routing.
All screens are defined under [/app](/app) folder. Currently, there are few pages to test
the navigation (Register and Home).

We think that navigation business logic can become much better as the app grow and state management is up.

## Styling

The styling integration must follow the design prototype, which is currently exposed as few examples
under [/docs](/docs/design-imgs) folder.

If you are interested in watching all examples (the design roadmap), we invite you to use
our [Figma link](https://www.figma.com/file/TtG5t7l8EQIA4BwfFMRAAI/TwikkL?node-id=418%3A36&t=rxx6eB7V3se1yrOr-1)
😉, just create a free account, and you're to download it.

Also, notice the theme setup in [theme.ts](/src/configs/theme.ts) file, this configuration is made
following [React Native Paper theming guide](https://callstack.github.io/react-native-paper/docs/guides/theming/).

Finally, as for the icons, following the [Expo icons guide](https://docs.expo.dev/guides/icons/) we
use [IcoMoon](https://icomoon.io/) tool to generate our own icon-set.

## Contributing

Please see the [contributing](CONTRIBUTING.md) guide for detailed instructions on how to get started with us. We accept
any sort of help that can make this project better, even a word like "Good luck!" 😍.
