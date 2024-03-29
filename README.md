# Cross Platform React apps - Make ship happen 🚀

<p>
  <a href="https://aetherspace-green-stack-starter.vercel.app/">
    <img alt="Supports Next.js" longdesc="Supports Next.js" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" />
  </a>
  <a href="https://aetherspace-green-stack-starter.vercel.app/">
    <img alt="Supports Vercel Deployments" longdesc="Supports Vercel Deployments" src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
  <a href="https://aetherspace-green-stack-starter.netlify.app/">
    <img alt="Supports Netlify Deployments" longdesc="Supports Netlify Deployments" src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" />
  </a>
  <a href="https://qr.expo.dev/expo-go?owner=thorrstevens&slug=aetherspace-starter-app&releaseChannel=starter-preview-main&host=exp.host">
    <img alt="Test in Expo GO" longdesc="Test in Expo GO" src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37" />
  </a>
  <a href="https://qr.expo.dev/expo-go?owner=thorrstevens&slug=aetherspace-starter-app&releaseChannel=starter-preview-main&host=exp.host">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=for-the-badge&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <a href="https://qr.expo.dev/expo-go?owner=thorrstevens&slug=aetherspace-starter-app&releaseChannel=starter-preview-main&host=exp.host">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=for-the-badge&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <a href="https://main--62c9a236ee16e6611d719e94.chromatic.com/?path=/story/readme-md--page">
    <img alt="Docs with Storybook" longdesc="Documentated with Storybook" src="https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=fff" />
  </a>
</p>

> This project was bootstrapped with the ***unsupported / legacy version*** of the [GREEN stack starter template](https://github.com/sponsors/codinsonn), the repo setup for all your full-stack cross platform app development needs {...💚} Enabling the project to be built for Web, PWA, Static, SSR, iOS, Android, Mac, Linux, Windows, REST and GraphQL all at once 👇

> This repo is archived / unsupported and will no longer recieve updates.  
> ***For a feature complete version 👉 [Aetherspace/green-stack-starter](https://github.com/sponsors/codinsonn)***

### Getting Started ⚡️

Install packages: `yarn install`

Run on web: `yarn dev-web`

Run on mobile: `yarn dev-mobile`

Run on desktop: `yarn dev-desktop` (⚠️ WIP, coming soon)

---

<details>
<summary><b>{...💚} GREEN stack & Template Benefits? 🚀</b></summary>

---

# Cross Platform React apps - GREEN stack starter template

### Table of contents
💚 - [What is the GREEN stack?](#what-is-the-green-stack)  
🤖 - [Why start with a monorepo?](#why-monorepo)  
📁 - [File structure and installing new packages.](#package-management)  
👾 - [Benefits and next steps.](#benefits-next-steps)  
💼 - [Why this makes sense from a business perspective](#why-this-makes-sense-from-a-business-perspective)  
🤷‍♂️ - [When *not* to use the GREEN stack.](#when-not-to-use-green-stack)  
💡 - [Inspirations and alternatives.](#inspirations-alternatives)  

## What the hell is the GREEN stack? 💚 <a name="what-is-the-green-stack"></a>

In short GREEN stands for these 5 core technologies:

- **G**raphQL for typed and self documenting APIs
- **R**eact-Native and React-Native-Web for write-once UI
- **E**lectron for enabling and building desktop features
- **E**xpo for easy web + mobile development and testing
- **N**ext.js for SEO, Static Exports, API, SSR & Web-Vitals

The core idea this tech stack enables you to achieve boils down to writing your app code or features once with Javascript and React, yet make it available on any platform or device without double implementations or the need for different development teams.

### It allows you to move fast, save time and deliver more 🎉

> Think of it as Unity for React Apps. Just like Unity aims to make cross console game development a lot easier for (indie) game devs, the GREEN stack aims to do the same for cross-platform app development.

## But why start with a monorepo? 🤖 <a name="why-monorepo"></a>

One very annoying thing about figuring stuff out on your own is when packages you're using require custom configuration for webpack, babel or otherwise. It often happens that updating e.g. a single `babel.config.js` used for both React-Native and Next.js will fix usage on either, but then break the other.

Using a monorepo with different entry points for Next.js and Expo allows us to keep configs more seperate, and therefore allow more confident updating of packages and configs without accidentally breaking other platforms.

In this starter template, we've opted to use yarn workspaces. We'll list some basics in the next section, but for a deeper understanding please refer to their documentation for more info.

## 📁 File structure and package management 📦 <a name="package-management"></a>

This starter monorepo has two types of workspaces:
- `/apps/*` for all expo & next.js versions of your apps
- `/packages/*` for all shared dependencies / library code used in multiple apps

```
├── apps/
│   └── {app-name}/ 👉 Where all cross-platform code for {app-name} lives
│       └── components/ ➡️ Molecules / Atoms / Common UI used in 'screens/'
│       └── graphql/ ➡️ Shared code for the GraphQL API client (optional)
│       └── resolvers/ ➡️ Shared resolvers used in both REST or GraphQL API
│       └── screens/ ➡️ Page templates used in App.tsx and next.js's 'pages/' directory
│       └── package.json ➡️ config required by yarn-workspaces, no dependencies
│
│   └── {app-name}-expo/ 👉 Where all Expo & mobile specific config for {app-name} lives
│       └── assets/ ➡️ app icons & other static assets (e.g. fonts)
│       └── app.json ➡️ Expo app config (e.g. landscape / tablet support)
│       └── App.tsx ➡️ Mobile Entrypoint & Navigation Setup (using '{app-name}/screens/')
│       └── babel.config.js ➡️ Babel transpilation config for Expo
│       └── index.js ➡️ Mobile entrypoint loader for App.tsx
│       └── metro.config.js ➡️ Metro bundler config for react-native
│       └── package.json ➡️ yarn-workspace config, lists expo & non-next.js dependencies
│       └── tsconfig.json ➡️ Typescript config for Expo
│       └── webpack.config.js ➡️ Enables PWA browser testing with Expo (no SSR)
│
│   └── {app-name}-next/ 👉 Where all Next.js, Server & API config for {app-name} lives
│       └── public/ ➡️ favicon & other static assets (e.g. fonts)
│       └── src/
│           └── pages/ ➡️ directory based routes (using '{app-name}/screens/')
│               └── api/ ➡️ directory based api routes (using '{app-name}/resolvers/')
│                   └── graphql.ts ➡️ GraphQL client from '{app-name}/graphql/'
│               └── _app.tsx ➡️ App Layout Wrapper (e.g. headers / footers / navigation)
│               └── _document.tsx ➡️ HTML wrapper for head, body & meta tags (+ SSR styles)
│               └── index.tsx ➡️ Homepage (e.g. using '{app-name}/screens/HomeScreen.tsx')
│       └── babel.config.js ➡️ Babel transpilation config for Next.js
│       └── next.config.js ➡️ Next.js config, modules to transpile & plugins to support
│       └── package.json ➡️ yarn-workspaces config, lists ONLY next.js dependencies
│       └── tsconfig.json ➡️ Typescript config for Next.js
│
├── packages/
│   └── {comp-lib}/ 👉 Code shared across apps, ideally same structure as 'apps/{app-name}'
│       └── package.json ➡️ yarn-workspace config, doesn't need deps unless published
│
├── node_modules/ ➡️ Contains all modules for this monorepo
└── package.json  ➡️ Root yarn-workspaces configuration + helper scripts, no deps
```

```
💡 `{app-name}` & `{comp-lib}` are just placeholders and you **can** have multiple of these
```

#### 📦 Keep your apps seperate with `/apps/*` workspaces:

For every app you're building in this monorepo, you'll need a few folders:

- `/apps/app` - Where most of your app's UI, logic and Screens will live.
    Shouldn't have any dependencies.
- `/apps/app-next` - Entry for web where only next.js related config/setup for an app should live.
    Should list only next.js related dependencies & polyfills.
- `/apps/app-expo` - Entry for mobile where only expo related config/setup for an app should live.
    Should list all react(-native) and non next.js related dependencies.

In each of these folders own `package.json` file, a `name` property should be specified to identify that workspace. This name can then be referenced during installs via e.g.

```bash
yarn workspace app-next add next-images
```

```bash
yarn workspace app-expo add moti
```

> It's also advised to see app workspaces as fully seperate from other apps:

> For example, `/apps/app` should not import or reference anything from `/apps/some-other-app`. If you do need to embed a certain screen or component from one app in another, it's best to extract it to its own shared library workspace instead (toggle below for info 👇)

<details>
<summary>💡 `/packages/*` workspaces for e.g. component libraries</summary>

#### Write shared library code in `/packages/*` workspaces:

Packages aim to provide common building blocks or logic for both apps *and* other packages. They do not need to differentiate between entry points with `/packages/...-next` and `/packages/...-expo`.

Like `/apps/` workspaces, they do also require their own `package.json` and `name`, and installing dependencies can work exactly the same:

```bash
yarn workspace component-library add -D @types/react
```

However, unless you will be publishing the package to NPM, it may be best to just install any dependencies in the consuming apps' `/apps/{app-name}-next` or `/apps/{app-name}-expo` workspace instead.

</details>

## 👾 Stack and Template benefits + Next steps 👾 <a name="benefits-next-steps"></a>

If you've read the sections above, It's likely the **ease** of use, **time saving** capabilities and **scalability** of this stack & template are clear.

The starter repo comes with, or recommends installing, some opinionated extra packages.  
Here's a list of what you can start doing next:

- Link pages and screens cross platform with `expo-next-react-navigation`
- Use tailwind to style UI responsively on web / mobile with `tailwind-rn`
- Animate UI elements with `react-native-reanimated` / `moti`
- Add illustrations or icons with `react-native-svg`
- Add auth with [AuthSession](https://docs.expo.dev/versions/latest/sdk/auth-session/) ([Expo Examples](https://docs.expo.dev/guides/authentication/))
- Document your components and APIs with Storybook.
- Deploy to vercel with `yarn deploy` or `vercel --prod --no-clipboard` ([view live](https://aetherspace-green-stack-starter-monorepo.vercel.app/))
- Deploy to netlify [via this guide](https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/) ([view live](https://aetherspace-green-stack-starter-monorepo.netlify.app/))

If you'd like to continue learning about the GREEN stack, there are more detailed guides, tips and best-practices in:
- `AETHERSPACE.md`, `NAVIGATION.md` & `API.md` (Aetherspace & Codegen)  
- `STYLING.md`, `ANIMATING.md` & `DOCUMENTING.md` (GREEN stack How-tos)

## 💼 Why this makes sense from a business perspective 💸 <a name="why-this-makes-sense-from-a-business-perspective"></a>

Whether you're a startup or established company, having both web and mobile apps is a great competitive advantage. There are many stories of market leaders suddenly being overtaken because the competition were able to move faster or had more devices their solution was available on for their customers.

This stack makes it near effortless to enable extra platforms. It helps keep teams small and enables them to move fast when building new pages or features for phones, tablets and/or the web.

**More deliverables for less time invested in turn means flexibility in one or more of these areas:**
- ... negotiation room about budget or deadlines (in case of client work)
- ... 💰 to be distributed among the entire team
- ... 🕗 available for experimentation
- ... budget available to market the product

<details>
<summary>Show full 🕗🕗 to 💰💰💰 Comparison</summary>

---

Let's talk Return on Investment:

> 🕗 = time required = devs / teams / resources invested  
> 💰 = deliverable sale value = costs to build + profit margin  
> ROI = 🕗 -> *sold for* -> 💰

Web only project ROI = 🕗🕗 -> 💰💰
- 🕗 Web Front-End 💰
- 🕗 General Back-End (REST / GraphQL + Templates / SSR) 💰

Native iOS + Android project ROI = 🕗🕗🕗 -> 💰💰💰
- 🕗 iOS App with Swift 💰
- 🕗 Android app with Java 💰
- 🕗 API Back-End (REST / GraphQL) 💰

React-Native Mobile App ROI = 🕗🕗 -> 💰💰 to 💰💰💰
- 🕗 iOS + Android App with RN 💰(💰)
- 🕗 API Back-End (REST / GraphQL) 💰

Expo Mobile + PWA ROI = 🕗🕗 ->💰💰 to 💰💰💰💰
- 🕗 iOS + Android + PWA with Expo & RN (Web without SSR) 💰(💰💰)
- 🕗 API Back-End (REST / GraphQL) 💰

> Now, things get *really* interesting when you try to compare full cross-platform apps

Full Cross Platform with Separate Dev Teams ROI = 🕗🕗🕗🕗🕗🕗🕗 -> 💰💰💰💰💰💰💰
- 🕗 Web Front-End 💰
- 🕗 iOS App with Swift 💰
- 🕗 Android app with Java 💰
- 🕗 Windows App Dev Team 💰
- 🕗 MacOS App Dev Team 💰
- 🕗 Linux App Dev Team 💰
- 🕗 API Back-End (REST / GraphQL) 💰

Full Cross Platform with GREEN stack ROI = 🕗🕗 -> 💰💰 to 💰💰💰💰💰💰💰
- 🕗 Web (PWA & SSR & Web Vitals) + iOS + Android + Windows + MacOS + Linux 💰(💰💰💰💰💰)
- 🕗 Back-End (REST + GraphQL + SSR + Static Exports + ISSG + universal JS utils thanks to Next.js) 💰

#### Key takeaway: Always upsell more plaforms / devices the app could run on

---

</details>

## When not to use the GREEN stack? 🤷‍♂️ <a name="when-not-to-use-green-stack"></a>

The GREEN stack is unlikely to be the best fit when your project...
- ... will always be web only 👉 Use `next.js`
- ... will always be mobile only 👉 Use `Expo`
- ... will always be desktop only 👉 Use `Electron` + `React` / `Vue` / `Svelte`
- ... is very Bluetooth / AR / VR / XR heavy 👉 Go native with `Swift` / `Java`
- ... is a console game 👉 Use [`Unity`](https://unity.com/download) instead
- ... is not using React 👉 Use `Svelte` / `Vue` + `Ionic`
- ... has no real need for Server Rendering, SEO or Web-Vitals 👉 Use `Expo` (+ Web Support)
- ... is using React, but the project is too far along and has no budget, time or people to refactor 🤷‍♂️

If your project has required dependencies / SDKs / libraries that are either not available in JS, are not extractable to API calls or cannot function cross-platform, this may also not be a good solution for your use-case*.

```
🛠 * However, for JS libs, you could always try adding cross platform support yourself with `patch-package`
```

## 💡 Inspirations and alternatives 💡 <a name="inspirations-alternatives"></a>

This starter template is heavily inspired by these Expo + Next.js monorepos:
- [axeldelafosse/expo-next-monorepo-example](https://github.com/axeldelafosse/expo-next-monorepo-example)
- [nandorojo/expo-next-monorepo](https://github.com/nandorojo/expo-next-monorepo)

If you only need Expo in a monorepo, they have an official example:  
https://github.com/byCedric/eas-monorepo-example

Alternatively, if you prefer a non-monorepo setup or **would** like to figure things out yourself, you can check out the official guide on the Expo docs:  
https://docs.expo.dev/guides/using-nextjs/

Next.js also has a bunch of examples you may consider:
- [next/examples/with-react-native-web](https://github.com/vercel/next.js/tree/canary/examples/with-react-native-web)
- [next/examples/with-expo-typescript](https://github.com/vercel/next.js/tree/canary/examples/with-expo-typescript)
- [next/examples/with-expo](https://github.com/vercel/next.js/tree/canary/examples/with-expo)

#### 📚 Other relevant docs:
- [Yan Workspaces Docs](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
- [Expo Docs](https://docs.expo.dev/)
- [Next.js Docs](https://nextjs.org/docs/getting-started)
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [React Navigation Docs](https://reactnavigation.org/docs/getting-started)
- [React-Native-Web Docs](https://necolas.github.io/react-native-web/docs/)
- [Apollo GraphQL Docs](https://www.apollographql.com/docs/)
- [Reanimated Docs](https://docs.swmansion.com/react-native-reanimated/docs)

---

# Made by Thorr ⚡ ([@codinsonn.dev](https://codinsonn.dev))

#### You can usually find me:

🐙 Coding at about 50 wtf's / hr on [Github](https://github.com/codinsonn)

🐦 Tweeting about Dev Memes and JS Dreams on [Twitter](https://twitter.com/codinsonn)

📸 Sharing JS, React and UI/UX tips on [Instagram](https://www.instagram.com/codinsonn.dev)

🤷‍♂️ Creating and selling dev stickers/merch on [Redbubble](https://www.redbubble.com/people/AetherspaceOne/shop)

</details>

---
