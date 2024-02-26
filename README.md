# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Views on this project

| Name            | page           | url             | original                                                           | Comment                                 |
| --------------- | -------------- | --------------- | ------------------------------------------------------------------ | --------------------------------------- |
| Home            | index          | /               | [https://boxed.gg/](https://boxed.gg/)                             | banner and sections with a lot of cards |
| Daily Rewards   | rewards        | /rewards        | [https://boxed.gg/rewards](https://boxed.gg/rewards)               | banner and 12 cards<br>                 |
| Boxes           | boxes          | /boxes          | [https://boxed.gg/boxes](https://boxed.gg/boxes)                   | Filters and 41 cards                    |
| Categories      | \-             | \-              |                                                                    | (open a modal in current page)          |
| How It Works    | howitworks     | /howitworks     | [https://boxed.gg/howitworks](https://boxed.gg/howitworks)         | Hero, 4 cards and FAQ                   |
| FAQ             | faq            | /faq            | [https://boxed.gg/faq](https://boxed.gg/faq)                       | FAQ along an image and a button         |
| Support         | support        | /support        | [https://boxed.gg/support](https://boxed.gg/support)               | Title and 3 cards                       |
| Terms           | terms          | /terms          | [https://boxed.gg/terms](https://boxed.gg/terms)                   | Wall of text                            |
| Privacy         | privacy        | /privacy        | [https://boxed.gg/privacy](https://boxed.gg/privacy)               | Wall of text                            |
| Purchase Terms  | purchaseterms  | /purchaseterms  | [https://boxed.gg/purchaseterms](https://boxed.gg/purchaseterms)   | Wall of text                            |
| Referral Program | referralprogram | /referralprogram | [https://boxed.gg/referralprogram](https://boxed.gg/referralprogram) | Wall of text                       |
| Shipping        | shipping       | /shipping       | [https://boxed.gg/shipping](https://boxed.gg/shipping)             | Wall of text                            |
| Register        | signup         | /signup         | [https://boxed.gg/signup](https://boxed.gg/signup)                 | Form                                    |
| Login           | login          | /login          | [https://boxed.gg/login](https://boxed.gg/login)                   | Form                                    |
| Forgot Paswword | forgotpassword | /forgotpassword | [https://boxed.gg/forgotpassword](https://boxed.gg/forgotpassword) | Form                                    |
| Enter your Username | enterusername | /enterusername | [https://boxed.gg/enterusername](https://boxed.gg/enterusername) | Form                                    |
| Verify          | verify         | /verify/:email  | [https://boxed.gg/verify](https://boxed.gg/verify)                 | Form                                    |

## Acknowledges

- https://grid.layoutit.com/ to create the main grid
- https://font.download/font/apercu font
- https://sentry.io/answers/how-to-style-a-checkbox-using-css/ checkbox style
