# Fashion starter by deco.cx

A fully featured starter to help you customize and deploy an ecommerce website
in minutes

<div style="display: flex; justify-content: center; width: 100%">
<img width="600px" height="147px"
    src="https://cdn.discordapp.com/attachments/1043241080679841793/1083140431556116553/image.png" />
</div>

## Features

This starter brings:

<ul>
  <li>Home, product and listing pages</li>
  <li>Content editable via CMS</li>
  <li>A/B test compatible</li>
  <li>Analytics</li>
  <li>Integration with VTEX, Shopify and Oracle</li>
  <li>Minicart with
    <ul>
      <li>Coupons</li>
      <li>Total</li>
      <li>Subtotal</li>
      <li>Promotions</li>
    </ul>
  </li>
  <li>SKU selector</li>
  <li>Full text search</li>
  <li>Search filters</li>
  <li>Search pagination</li>
  <li>SEO optmized
    <ul>
      <li>Meta tags</li>
      <li>Rich results</li>
      <li>OpenGraph</li>
    </ul>
  </li>
  <li>Cookie consent</li>
  <li>Carousel</li>
  <li>Product shelf</li>
  <li>SKU selector</li>
  <li>Breadcrumb</li>
  <li>Search filters</li>
  <li>Dropdown and hamburger menus</li>
  <li>Minicart</li>
  <li>Newsletter</li>
  <li>Footer</li>
  <li>Link Tree</li>
</ul>

## Getting started

To execute this website on your machine, clone it to your local machine with
`git clone` and make sure [deno is installed](https://deno.land/manual@v1.31.1/getting_started/installation).

Then open the terminal, change the directory to where fashion was cloned and type

```sh
deno task start
```

You should see the following output

```
$ deno task start
Task start deno run -A --watch=static/,sections/,functions/ dev.ts
Watcher Process started.
Starting live middleware: siteId=538 site=std
The manifest has been generated for 6 routes, 5 islands, 17 sections and 16 functions.
Githooks setup successfully: pre-commit
Starting live middleware: siteId=239 site=fashion
Listening on http://localhost:8000/
```

Now, open [http://localhost:8000/](http://localhost:8000/). You should see the
fashion starter running on your machine!

To continue from here, you can [perform initial setup](#initial-setup),
[understand folder structure](#understanding-folder-structure), learn how to
create [common design patterns](#recipes) (components) and comply to
[best practices](#best-practices)

## Initial setup

Below is a checklist for the store's initial setup. After completing these
tasks, your store will be ready to go live and won't need any further changes on
this repository. If, after changing the content via
[deco.cx's CMS](https://deco.cx/admin), you feel the store is not ready for
going live, you can learn how to [customize the code](#customize-the-store)

Checklist

- [ ] Ecommerce platform connected
- [ ] Fonts added
- [ ] Logo changed
- [ ] favicon.ico, robots.txt changed
- [ ] Design system changed

### Connecting your e-commerce platform

Products, prices and promotions are provided by an ecommerce platform (VTEX,
Shopify, Oracle). To connect to a platform:

Open the
[ecommerce's global config](https://deco.cx/admin/{your-site-id}/workbench?section=deco-sites%2Fstd%2Fsections%2FconfigVTEX.global.tsx)
and set your credentials. Then, open `/components/minicart/Cart.tsx` and
`/routes/api/[...catchall].tsx` and replace `bravtexfashionstore` to your
account name.

After this, your should be using the products provenient from your ecommerce
account

### Adding fonts

1. Copy & paste your font files (.woff/.woff2) to `/static/fonts` folder
2. Open `/components/GlobalTags.tsx` component and replace `@font-face` tags
   accordingly, i.e. change font-family, font-style and font-weight. Now, change
   the src attribute with the right font path.
3. Open twind.config.ts and change the `fontFamily` attribute accordingly.

> WARNING: Do not forget to use the `asset()` function. Not adding it will
> increase the traffic on your site and lead to higher costs

> If your don't know the font-family, font-style and font-weight, ask your
> designer for these values.

### Adding your logo

1. Make sure you have your logo in `.svg` format
2. Open your logo in your text editor and copy its content
3. Open /static/sprites.svg
4. Replace `<symbol id="Logo" .../>` with the content of your logo's `.svg`
   file. Make sure all `<svg />` tags are replaced with `<symbol />` tag and add
   the `id="Logo"` attribute. Also, make sure to have the `xmlns` attribute.

### Adding default assets

Open `static` folder and replace `favicon.ico`, `robots.txt` and
`site.webmanifest` with your own assets

### Changing style (CSS)

1. Run the store (with `deno task start`).
2. Open the
   [design system section](http://localhost:8000/_live/workbench/sections/DesignSystem.story.tsx?key=.%2Fsections%2FDesignSystem.story.tsx)
3. Now, on your text editor, open `twind.config.ts`
4. Change the default, header, badge, etc colors, text colors and border colors
   to better fit your desired design and check how the
   [design system section](http://localhost:8000/_live/workbench/sections/DesignSystem.story.tsx?key=.%2Fsections%2FDesignSystem.story.tsx)
   changes.

## Customize the store

If you are missing a functionality or the changes in the design system were not
enough for accomplishing your project, you can fully customize all HTML/CSS/JS
generated on your store by changing the code.

### Understanding project structure

This code uses:

1. [Deno](https://deno.land/) as runtime
2. [Preact](https://preactjs.com/) as rendering engine
3. [Fresh](https://fresh.deno.dev/) as meta framework.
4. [Deco.cx](https://www.deco.cx/) as CMS, A/B Tester and Analytics

To better encapsulate the store's code and separate it from framework specific
code, all HTML generator code was placed into `components` folder, whereas all
logic related code was placed under `sdk`. This means that UI elements, like
product shelves, footer, header, product galleries etc are all placed into
`components` whereas code for computing the prices, adding to cart etc are
placed under `sdk`. Other folders are framework-specific glue code, and serve
for:

1. `islands`: Fresh based folder for adding JavaScript to the frontend. More
   info at [Fresh's docs](https://fresh.deno.dev/docs/concepts/islands)
1. `routes`: Fresh based folder for responding custom routes to the store. More
   info at [Fresh's docs](https://fresh.deno.dev/docs/concepts/routes)
1. `static`: Fresh based folder for serving static content (assets). Check out
   [Fresh's docs](https://fresh.deno.dev/docs/concepts/static-files)
1. `import_map.json`: File containing your dependencies. Check out
   [Deno's docs](https://deno.land/manual@v1.31.0/basics/import_maps)
1. `twind.config.ts`: twind configuration file. [twind docs](https://twind.dev/)
1. `sections`: deco.cx folder for making components both editable and composable
   on the CMS. Check out [deco.cx's docs](https://www.deco.cx/docs/en)
1. `functions`: deco.cx folder for adding dynamic data to sections provenient
   from third party APIs, like ecommerce platforms, ERPs, contentful, wordpress
   etc

### Recipes

Deco.cx's commitment to outstanding UX requires minimal work by user's devices.
This usually means shipping zero or almost to no JavaScript to browsers. This
starter uses state of the art design patterns to create rich UX with HTML and
CSS only.

Sometimes, it may be difficult to understand everything that's going on a
production-ready code like this starter's components. To learn how to create
common UI patterns with HTML and CSS only in a simpler context, take a look at
[deco.cx's recipes](https://www.deco.cx/docs/en/recipes/customizable-sections)

### Best practices

The best practices for managing the project on the long run rely around
respecting folder structure. This means:

1. Add `.tsx` files on `components` folder only
1. Add preact hooks on `sdk` folder.
1. To make a component editable, create it on the `components` folder and add an
   `export { default }` on the `sections` folder
1. To add JavaScript to the browser, create a component on the `components`
   folder and add an `export { default }` on the islands folder

Check performance best practices on
[deco.cx's docs](https://www.deco.cx/docs).


# Thanks to all contributors!

<a href="https://github.com/deco-sites/fashion/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=deco-sites/fashion" />
</a>
