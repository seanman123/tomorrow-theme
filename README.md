**Step One**

Make sure that you have [@halfhelix/kit](https://www.npmjs.com/package/@halfhelix/kit) installed on your computer globally. This can be done by running `npm i -g @halfhelix/kit`.

**Step Two**

Run `npm i` to install the theme's local dependencies

**Step Three**

Copy the `.env-example` to create a new `.env` file in the root of the repository. In order to do this, you'll need to provide the theme ID (you may need to create a theme in the Shopify instance), the Shopify instance URL and the private app's password.

**Step Four**

Run `kit watch` to start development.

### Deploying

To deploy the theme, run `kit deploy --env production` or `npm run deploy`. This will compile and upload the theme to Shopify.

### Build

If you just want to build the theme, run `kit build --env production` or `npm run build`. This will compile the theme into the configured build directory (this defaults to `./dist`).