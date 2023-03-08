# Fashion starter by deco.cx
A fully featured starter to help you customize and deploy an ecommerce website in minutes

## Features
This starter brings:
- Home, product and listing pages
- Content editable via CMS
- A/B test compatible
- Analytics
- Integration with VTEX, Shopify and Oracle
- Minicart with:
  - Coupons
  - Total
  - Subtotal
  - Promotions
- SKU selector
- Full text search 
- Search filters
- Search pagination
- SEO optmized
  - Meta tags
  - Rich results
  - OpenGraph
- Cookie consent

Also, this starter has fully featured components, like: 
- Carousel
- Product shelf
- SKU selector
- Breadcrumb
- Search filters
- Dropdown and hamburger menus
- Minicart
- Newsletter
- Footer

## Getting started
To execute this website on your machine, clone it to your local machine with `git clone`, open the terminal and type
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

Now, open [http://localhost:8000/](http://localhost:8000/). You should see the fashion starter running on your machine! 

To continue from here, you can [perform initial setup](#initial-setup), [understand folder structure](#understanding-folder-structure), learn how to create [common design patterns](#recipes) (components) and comply to [best practices](#best-practices)

## Initial setup
Below is a checklist for the store's initial setup. After completing these tasks, your store will be ready to go live and won't need any further changes on this repository. If, after changing the content via [deco.cx's CMS](https://deco.cx/admin), you feel the store is not ready for going live, you can learn how to [customize the code](#customize-the-store)

Checklist
- [] Ecommerce platform connected
- [] Fonts added
- [] Design system changed

### Connecting your e-commerce platform
Products, prices and promotions are provided by an ecommerce platform (VTEX, Shopify, Oracle). To connect to a platform:

Open the [ecommerce's global config](https://deco.cx/admin/{your-site-id}/workbench?section=deco-sites%2Fstd%2Fsections%2FconfigVTEX.global.tsx) and set your credentials. Then, open `/components/minicart/Cart.tsx` and `/routes/api/[...catchall].tsx` and replace `bravtexfashionstore` to your account name.

After this, your should be using the products provenient from your ecommerce account

### Adding fonts
1. Copy & paste your font files (.woff/.woff2) to `/static/fonts` folder
2. Open `/components/GlobalTags.tsx` component and replace `@font-face` tags accordingly, i.e. change font-family, font-style and font-weight. Now, change the src attribute with the right font path.

> WARNING: Do not forget to use the `asset()` function. Not adding it will increase the traffic on your site and lead to higher costs

> If your don't know the font-family, font-style and font-weight, ask your designer for these values.

### Adding your logo

### Changing style (CSS)

## Customize the store

### Understanding folder structure

### Recipes

### Best practices

