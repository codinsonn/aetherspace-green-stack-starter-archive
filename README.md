# Cross Platform React apps - GREEN stack starter template

### Getting Started ⚡️

Use this repo as a starter template for all your full-stack cross platform app development needs {...💚} Build for Web, PWA, Static, SSR, iOS, Android, Mac, Linux, Windows, REST and/or GraphQL all in one 👇

Install packages: `yarn install`

Run on web: `yarn dev-web`

Run on mobile: `yarn dev-mobile`

Run on desktop: `yarn dev-desktop` (⚠️ WIP, coming soon)

### Table of contents
💚 - [What is the GREEN stack?](#what-is-the-green-stack)  
🚀 - [What is Aetherspace?](#what-is-aetherspace)  
🤖 - [Why start with a monorepo?](#why-monorepo)  
📦 - [Where to install new packages?](#package-management)  
⚙️ - [Codegen and universal routing.](#codegen-universal-routing)  
👾 - [Benefits and next steps.](#benefits-next-steps)  
🤷‍♂️ - [When *not* to use the GREEN stack.](#when-not-to-use-green-stack)  
💡 - [Inspirations and alternatives.](#inspirations-alternatives)  

## What the hell is the GREEN stack? 💚 <a name="what-is-the-green-stack"></a>

In short GREEN stands for these 5 core technologies:

- **G**raphQL for typed and self documenting apis
- **R**eact-Native and React-Native-Web for write-once UI
- **E**lectron for enabling and building desktop features
- **E**xpo for easy web + mobile development and testing
- **N**ext.js for SEO, Static Exports, API, SSR & Web-Vitals

The core idea this tech stack enables you to achieve boils down to writing your app code or features once with Javascript and React, yet make it available on any platform or device without double implementations or the need for different development teams.

> Think of it as Unity for React Apps. Just like Unity aims to make cross console game development a lot easier for (indie) game devs, the GREEN stack aims to do the same for cross-platform app development.

It allows you to move fast and save time.

## Ok, what is 'Aetherspace' then? 🚀 <a name="what-is-aetherspace"></a>

Aetherspace is an opinionated framework I've made that fills in the gaps of working and building with the GREEN stack:

- How should I handle responsive design?
- How do I avoid layout shift when react-native styling does not support media queries or classnames?
- What's the best way to style and animate my UI elements for both web and mobile?

Just to name a few.

While the stack itself is very powerfull, figuring out how to get set up and do certain things can be frustrating and time consuming. To save you time figuring it all out on your own, *Aetherspace* contains a bunch of packages, utils and best-practices to set you up for a free and easy ride to cross-platform success.

> Aetherspace is also fully optional. Usage of the UI primitives, React hooks and JS utils provided by `packages/@aetherspace` is recommended but not required.

> Provided you throw out the examples and edit some helper scripts in the `package.json` files, you could even delete the package entirely and still be left with a great GREEN stack starter.

More on Aetherspace in the **⚙️ Codegen and universal routing** and **👾 Benefits and Next steps** section.

## But why start with a monorepo? 🤖 <a name="why-monorepo"></a>

One very annoying thing about figuring stuff out on your own is when packages you're using require custom configuration for webpack, babel or otherwise. It often happens that updating e.g. a single `babel.config.js` used for both React-Native and Next.js will fix usage on either, but then break the other.

Using a monorepo with different entry points for Next.js and Expo allows us to keep configs more seperate, and therefore allow more confident updating of packages and configs without accidentally breaking other platforms.

In this starter template, we've opted to use yarn workspaces. We'll list some basics in the next section, but for a deeper understanding please refer to their documentation for more info.

## How and where do I manage packages with yarn workspaces? 📦 <a name="package-management"></a>

This starter monorepo has two types of workspaces:
- `/apps/*` for all expo & next.js versions of your apps
- `/packages/*` for all shared dependencies / library code used in multiple apps

#### Keep your apps seperate with `/apps/*` workspaces:

For every app you're building in this monorepo, you'll need a few folders:

- `/apps/app-project` - Where most of your `app-project` UI, logic and Screens will live. 📦 `package.json` shouldn't have any dependencies.
- `/apps/app-project-next` - Entry for web where only next.js related config/setup for `app-project` should live. 📦 `package.json` should list only next.js related dependencies & polyfills.
- `/apps/app-project-expo` - Entry for mobile where only expo related config/setup for `app-project` should live. 📦 `package.json` should list all react(-native) and non next.js related dependencies.

In each of these folders own `package.json` file, a `name` property should be specified to identify that workspace. This name can then be referenced during installs via e.g.

```bash
yarn workspace @project/app-project-next add next-images
```

```bash
yarn workspace @project/app-project-expo add moti
```

> It's also advised to see app workspaces as fully seperate from other apps:

> For example, `/apps/app-project` should not import or reference anything from `/apps/some-other-app`. If you do need to embed a certain screen or component from one app in another, it's best to extract it to its own shared library workspace instead 👇

#### Write shared library code in `/packages/*` workspaces:

Packages aim to provide common building blocks or logic for both apps *and* other packages. They do not need to differentiate between entry points with `/packages/...-next` and `/packages/...-expo`.

Like `/apps/` workspaces, they do also require their own `package.json` and `name`, and installing dependencies can work exactly the same:

```bash
yarn workspace @aetherspace add -D @types/react
```

However, unless you will be publishing the package to NPM, it may be best to just install any dependencies in the consuming apps's `/apps/...-next` or `/apps/...-expo` workspace instead.

> A good example of a library package usable by multiple app workspaces is the 
`/packages/@aetherspace` workspace. It contains UI primitives like `AetherView`, `AetherImage` & `AetherLink` that are small wrappers for & recommended over react-native's own `View`, `Text` & `Image` components.

## Codegen, registries and enabling universal routing ⚙️ <a name="codegen-universal-routing"></a>

`@aetherspace` comes with codegen in the form of node scripts runnable with:

```bash
yarn workspace @aetherspace run aether-script {scriptName} {options}
```

One area where this definitely helps is routing. As you likely know, next.js uses file based routing with the `/pages/` directory. However, mobile navigation, namely navigators, stacks and screens, are a whole other concept entirely.

Meaning that adding a new route for web, will also require a manual change in app navigation for Expo. Resulting in double work that could get forgotten.

Luckily, `/packages/@aetherspace` has a node script that analyses the pages directory in an `/apps/...-next` app, and generates a `@generated/screensRegistry` file automatically based on that, linking route paths to screens. This registry can then be used in `/apps/...-expo` to automagically build a mobile stack navigator for you ⚡️

> Essentially bringing the power of directory based routing to Expo 🎉 (... *with some extra steps)

For more codegen benefits in this starter, check out `CODEGEN.md`

## All stack and template benefits + next steps 👾 <a name="benefits-next-steps"></a>

If you've read the sections above, It's likely the **ease** of use, **time saving** capabilities and **scalability** of this stack & template are clear.

The starter repo does come with some opinionated extra packages and abilities though. So here's a list of what you can start doing out of the box:

- Use `<AetherView tw="sm:px-2">` or `tailwind-rn` directly to style UI responsively on web, server and mobile with tailwind.
- Animate custom experiences with `<AetherView.Animated>` or use `react-native-reanimated` and `moti` directly.
- Bring the power of GraphQL to JSON or REST apis with `aetherResolver()` and Schemas.
- Document your components AND apis with Storybook.
- Add illustrations or icons with `react-native-svg`
- Link pages and screens cross platform with `<AetherLink>`
- Build mobile release previews for Expo Go when pushing to branches with Github Actions.
- Deploy to vercel with `yarn deploy` or `vercel --prod --no-clipboard` ([view live](https://aetherspace-green-stack-starter-monorepo.vercel.app/))
- [Deploy to netlify](https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/) ([view live](https://aetherspace-green-stack-starter-monorepo.netlify.app/))

If you'd like to continue learning about Aetherspace and the GREEN stack, there are more detailed guides and tips in `CODEGEN.md`, `STYLING.md` & `ANIMATING.md`

### 💼 Why this makes sense from a business perspective 💸

Whether you're a startup or established company, having both web and mobile apps is a great competitive advantage. There are many stories of market leaders suddenly being overtaken because the competition were able to move faster or had more platforms their solution was available on.

The real value of the GREEN stack lies in that it provides budgetting flexibility, while allowing teams to remain small, yet move fast when building new features. This flexibility can then more easily be reflected in either or all of these benefits:

- More 💰 for the entire team
- More 🕗 for less binding deadlines or more expirimentation
- More budget to market the product (self or client)
- ...

<details>
<summary>Show full 🕗🕗 to 💰💰💰 Comparison</summary>

---

Let's talk Return on Investment:

> 🕗 = time required = dev(s) / teams / resources invested  
> 💰 = deliverable sale value = costs to build + profit margin  
> ROI = 🕗 -> *sold for* -> 💰

Web only project ROI = 🕗🕗 -> 💰💰
- 🕗 Web Front-End 💰
- 🕗 General Back-End (REST / GraphQL + Templ. / SSR) 💰

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

---

</details>

## When not to use the GREEN stack? 🤷‍♂️ <a name="when-not-to-use-green-stack"></a>

The GREEN stack will be an unlikely fit when your project...
- ... is web only 👉 Just use `next.js`
- ... is mobile only 👉 Just use `Expo`
- ... is desktop only 👉 Use `Electron` + `React` / `Vue` / `Svelte`
- ... is very Bluetooth / AR / VR heavy 👉 Go native with `Swift` / `Java`
- ... is a console game 👉 Use [`Unity`](https://unity.com/download) instead
- ... is not using React 👉 Use `Svelte` / `Vue` + `Ionic`
- ... is using React, but there's no real need for SSR, SEO or Web-Vitals (e.g. Admin pages) 👉 Use `Expo`
- ... is using React, but the project is too far along and there's no budget, time or people to refactor 🤷‍♂️

If your project has required dependencies / SDKs / libraries that are either not available in JS, are not extractable to API calls or cannot function cross-platform, this may also not be a good solution for your use-case*.

> *However, for JS libs, your *could* always try adding cross platform support yourself with `patch-package` 🤷‍♂️

## Inspirations and alternatives 💡 <a name="inspirations-alternatives"></a>

This starter template is heavily inspired by:
- [axeldelafosse/expo-next-monorepo-example](https://github.com/axeldelafosse/expo-next-monorepo-example)
- [nandorojo/expo-next-monorepo](https://github.com/nandorojo/expo-next-monorepo)

If you only need Expo in a monorepo, they have an example:  
https://github.com/byCedric/eas-monorepo-example

Alternatively, if you prefer a non-monorepo setup or would like to figure things out yourself, you may want to check out the official Expo docs:  
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
- [Moti Docs](https://moti.fyi/)

---

# Made by Thorr ⚡ ([@codinsonn.dev](https://codinsonn.dev))

#### You can usually find me:

🐙 Coding at about 50 wtf's / hr on [Github](https://github.com/codinsonn)

🐦 Tweeting about Dev Memes and JS Dreams on [Twitter](https://twitter.com/codinsonn)

📸 Sharing JS, React and UI/UX tips on [Instagram](https://www.instagram.com/codinsonn.dev)

🤷‍♂️ Creating and selling dev stickers/merch on [Redbubble](https://www.redbubble.com/people/AetherspaceOne/shop)
