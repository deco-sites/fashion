<p align="center">
  <a href="https://deco.cx">
    <img alt="Gatsby" src="https://user-images.githubusercontent.com/1315451/224049457-872b944a-0a32-429b-9152-7f4e0c75329a.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Fashion Starter by deco.cx
</h1>

A fully featured starter to help you customize and deploy an ecommerce website
in minutes.

![screenshots](https://user-images.githubusercontent.com/1315451/224065516-8e193f60-a254-46e7-ba3d-01799e108697.png)

## 🎡 Features

This starter brings:

### Pages

- Home
- PLP - Product listing page
- PDP - Product detail page

### Blocks and Components

<ul>
  <li>Minicart with
    <ul>
      <li>Coupons</li>
      <li>Total</li>
      <li>Subtotal</li>
      <li>Promotions</li>
    </ul>
  </li>
  <li>Full text search with
	  <ul>
			<li>Suggestions</li>
			<li>Filters</li>
			<li>Pagination</li>
		</ul>
  </li>
  <li>Product shelf and product page with
	  <ul>
			<li>Images</li>
			<li>SKU selector</li>
		</ul>
  </li>
  <li>Content and navigation with
	  <ul>
			<li>Breadcrumb</li>
			<li>Dropdown and hamburger menus</li>
			<li>Carousel</li>
			<li>Newsletter</li>
			<li>Footer</li>
			<li>Cookie consent</li>
		</ul>
  </li>
</ul>

### Other features

![image](https://user-images.githubusercontent.com/1315451/224068874-14cb4e9e-3b67-40b7-8b0a-b07004056919.png)

<ul>
  <li>PageSpeed performance 98 mobile and 100 desktop</li>
  <li>SEO optimized
    <ul>
      <li>Meta tags</li>
      <li>Rich results</li>
      <li>OpenGraph</li>
    </ul>
  </li>
  <li>Content editable via CMS</li>
  <li>A/B test compatible</li>
  <li>Analytics</li>
  <li>Integration with VTEX, Shopify and Oracle</li>
</ul>

## 🤾🏿‍♂️ Getting started

To execute this website on your machine, clone it to your local machine with
`git clone`, open the terminal and type

```sh
deno task start
```

You should see the following output:

![image](https://user-images.githubusercontent.com/1315451/224055208-23861db0-4c2f-4986-8bc6-da660902571d.png)

Now, open [http://localhost:8000/](http://localhost:8000/). You should see the
fashion starter running on your machine!

To continue from here, you can [perform initial setup](#initial-setup),
[understand folder structure](#understanding-folder-structure), learn how to
create [common design patterns](#recipes) (components) and comply to
[best practices](#best-practices)

## 🎛 Initial setup

Below is a checklist for the store's initial setup. After completing these
tasks, your store will be ready to go live and won't need any further changes on
this repository. If, after changing the content via
[deco.cx's CMS](https://deco.cx/admin), you feel the store is not ready for
going live, you can learn how to [customize the code](#customize-the-store)

### Checklist

1.
   - [ ] Ecommerce platform connected
1.
   - [ ] Fonts added
1.
   - [ ] Logo changed
1.
   - [ ] favicon.ico, robots.txt changed
1.
   - [ ] Design system changed

### 1. Connecting your e-commerce platform

Products, prices and promotions are provided by an ecommerce platform (VTEX,
Shopify, Oracle). To connect to a platform:

Open the
[ecommerce's global config](https://deco.cx/admin/{your-site-id}/workbench?section=deco-sites%2Fstd%2Fsections%2FconfigVTEX.global.tsx)
and set your credentials. Then, open `/components/minicart/Cart.tsx` and
`/routes/api/[...catchall].tsx` and replace `bravtexfashionstore` to your
account name.

After this, your should be using the products provenient from your ecommerce
account

### 2. Adding fonts

1. Copy & paste your font files (.woff/.woff2) to `/static/fonts` folder
2. Open `/components/GlobalTags.tsx` component and replace `@font-face` tags
   accordingly, i.e. change font-family, font-style and font-weight. Now, change
   the src attribute with the right font path.
3. Open twind.config.ts and change the `fontFamily` attribute accordingly.

> WARNING: Do not forget to use the `asset()` function. Not adding it will
> increase the traffic on your site and lead to higher costs

> If your don't know the font-family, font-style and font-weight, ask your
> designer for these values.

### 3. Adding your logo

1. Make sure you have your logo in `.svg` format
2. Open your logo in your text editor and copy its content
3. Open /static/sprites.svg
4. Replace `<symbol id="Logo" .../>` with the content of your logo's `.svg`
   file. Make sure all `<svg />` tags are replaced with `<symbol />` tag and add
   the `id="Logo"` attribute. Also, make sure to have the `xmlns` attribute.

### 4. Adding default assets

Open `static` folder and replace `favicon.ico`, `robots.txt` and
`site.webmanifest` with your own assets

### 5. Changing style (CSS)

1. Run the store (with `deno task start`).
2. Open the
   [design system section](http://localhost:8000/_live/workbench/sections/DesignSystem.story.tsx?key=.%2Fsections%2FDesignSystem.story.tsx)
3. Now, on your text editor, open `twind.config.ts`
4. Change the default, header, badge, etc colors, text colors and border colors
   to better fit your desired design and check how the
   [design system section](http://localhost:8000/_live/workbench/sections/DesignSystem.story.tsx?key=.%2Fsections%2FDesignSystem.story.tsx)
   changes.

## 🧚🏾‍♀️ Customize the store

If you are missing a functionality or the changes in the design system were not
enough for accomplishing your project, you can fully customize all HTML/CSS/JS
generated on your store by changing the code.

### Understanding project structure

This code uses:

1. [Deno](https://deno.land/) as runtime
2. [Preact](https://preactjs.com/) as rendering engine
3. [Fresh](https://fresh.deno.dev/) as meta framework.
4. [Deco.cx](https://www.deco.cx/) as CMS, A/B Tester and Analytics

And it has this folder structure:

```
.
├── components
├── islands
├── routes
├── sdk
├── sections
└── static
```

To better encapsulate the store's code and separate it from framework specific
code, all HTML generator code was placed into `components` folder, whereas all
logic related code was placed under `sdk`. This means that UI elements, like
product shelves, footer, header, product galleries etc are all placed into
`components` whereas code for computing the prices, adding to cart etc are
placed under `sdk`. Other folders and files are framework-specific glue code,
and serve for:

- `functions`: deco.cx folder for adding dynamic data to sections provenient
  from third party APIs, like ecommerce platforms, ERPs, contentful, wordpress
  etc
- `islands`: Fresh based folder for adding JavaScript to the frontend. More info
  at [Fresh's docs](https://fresh.deno.dev/docs/concepts/islands)
- `routes`: Fresh based folder for responding custom routes to the store. More
  info at [Fresh's docs](https://fresh.deno.dev/docs/concepts/routes)
- `sections`: deco.cx folder for making components both editable and composable
- `static`: Fresh based folder for serving static content (assets). Check out
  [Fresh's docs](https://fresh.deno.dev/docs/concepts/static-files) on the CMS.
  Check out [deco.cx's docs](https://www.deco.cx/en/docs)
- `import_map.json`: File containing your dependencies. Check out
  [Deno's docs](https://deno.land/manual@v1.31.0/basics/import_maps)
- `twind.config.ts`: twind configuration file. [twind docs](https://twind.dev/)

### Recipes

Deco.cx's commitment to outstanding UX requires minimal work by user's devices.
This usually means shipping zero or almost to no JavaScript to browsers. This
starter uses state of the art design patterns to create rich UX with HTML and
CSS only.

Sometimes, it may be difficult to understand everything that's going on a
production-ready code like this starter's components. To learn how to create
common UI patterns with HTML and CSS only in a simpler context, take a look at
[deco.cx's recipes](https://www.deco.cx/en/docs/recipes)

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
[deco.cx's docs](https://www.deco.cx/en/docs/best-practices).
