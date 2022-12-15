// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/api/cart/index.ts";
import * as $4 from "./routes/api/cart/items.ts";
import * as $5 from "./routes/index.tsx";
import * as $6 from "./routes/inspect-vscode.ts";
import * as $$0 from "./islands/AddToCart.tsx";
import * as $$1 from "./islands/LiveControls.tsx";
import * as $$2 from "./islands/Minicart.tsx";
import * as $$3 from "./islands/ProductInformation.tsx";
import * as $$4 from "./islands/SearchBar.tsx";
import * as $$5 from "./islands/SearchControls.tsx";
import * as $$6 from "./islands/Slider.tsx";
import * as $$$0 from "./sections/Banner.tsx";
import * as $$$1 from "./sections/BannerImg.tsx";
import * as $$$2 from "./sections/BannnerGrid.tsx";
import * as $$$3 from "./sections/Button.story.tsx";
import * as $$$4 from "./sections/Footer.tsx";
import * as $$$5 from "./sections/Head.tsx";
import * as $$$6 from "./sections/Header.tsx";
import * as $$$7 from "./sections/HomeFilter.tsx";
import * as $$$8 from "./sections/IconCart.tsx";
import * as $$$9 from "./sections/ListLinks.tsx";
import * as $$$10 from "./sections/MarcasConvidadas.tsx";
import * as $$$11 from "./sections/Newsletter.tsx";
import * as $$$12 from "./sections/ProductDetails.tsx";
import * as $$$13 from "./sections/ProductGallery.tsx";
import * as $$$14 from "./sections/ProductShelf.tsx";
import * as $$$15 from "./sections/Search.tsx";
import * as $$$16 from "./sections/SearchControls.tsx";
import * as $$$17 from "./sections/StoreFeatures.tsx";
import * as $$$18 from "./sections/VideoCarousel.tsx";
import * as $$$$0 from "./functions/vtexIntelligentSearch.ts";
import * as $$$$1 from "./functions/vtexProductPage.ts";
import * as $$$$2 from "./functions/vtexSearch.ts";
import * as $$$$3 from "./functions/vtexSearchPage.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/api/cart/index.ts": $3,
    "./routes/api/cart/items.ts": $4,
    "./routes/index.tsx": $5,
    "./routes/inspect-vscode.ts": $6,
  },
  islands: {
    "./islands/AddToCart.tsx": $$0,
    "./islands/LiveControls.tsx": $$1,
    "./islands/Minicart.tsx": $$2,
    "./islands/ProductInformation.tsx": $$3,
    "./islands/SearchBar.tsx": $$4,
    "./islands/SearchControls.tsx": $$5,
    "./islands/Slider.tsx": $$6,
  },
  sections: {
    "./sections/Banner.tsx": $$$0,
    "./sections/BannerImg.tsx": $$$1,
    "./sections/BannnerGrid.tsx": $$$2,
    "./sections/Button.story.tsx": $$$3,
    "./sections/Footer.tsx": $$$4,
    "./sections/Head.tsx": $$$5,
    "./sections/Header.tsx": $$$6,
    "./sections/HomeFilter.tsx": $$$7,
    "./sections/IconCart.tsx": $$$8,
    "./sections/ListLinks.tsx": $$$9,
    "./sections/MarcasConvidadas.tsx": $$$10,
    "./sections/Newsletter.tsx": $$$11,
    "./sections/ProductDetails.tsx": $$$12,
    "./sections/ProductGallery.tsx": $$$13,
    "./sections/ProductShelf.tsx": $$$14,
    "./sections/Search.tsx": $$$15,
    "./sections/SearchControls.tsx": $$$16,
    "./sections/StoreFeatures.tsx": $$$17,
    "./sections/VideoCarousel.tsx": $$$18,
  },
  functions: {
    "./functions/shopifyProductDetailsPage.ts": $$$$0,
    "./functions/shopifyProductList.ts": $$$$1,
    "./functions/shopifyProductListingPage.ts": $$$$2,
    "./functions/vtexProductDetailsPage.ts": $$$$3,
    "./functions/vtexProductList.ts": $$$$4,
    "./functions/vtexProductListingPage.ts": $$$$5,
  },
  schemas: {
    "./sections/Banner.tsx": {
      "inputSchema": {
        "title": " Banner",
        "type": "object",
        "properties": {
          "imgSrc": {
            "title": "Img Src",
            "type": "object",
            "properties": {
              "mobile": {
                "type": "string",
                "title": "Mobile",
              },
              "desktop": {
                "type": "string",
                "title": "Desktop",
              },
            },
            "required": [
              "mobile",
              "desktop",
            ],
          },
          "alt": {
            "type": "string",
            "title": "Alt",
          },
          "text": {
            "type": "string",
            "title": "Text",
          },
          "title": {
            "type": "string",
            "title": "Title",
          },
          "subtitle": {
            "type": "string",
            "title": "Subtitle",
          },
          "link": {
            "type": "string",
            "title": "Link",
          },
          "CTA": {
            "type": "string",
            "title": " C T A",
          },
        },
        "required": [
          "imgSrc",
        ],
      },
      "outputSchema": null,
    },
    "./sections/BannerImg.tsx": {
      "inputSchema": {
        "title": " Banner Img",
        "type": "object",
        "properties": {
          "imgSrc": {
            "title": "Img Src",
            "type": "object",
            "properties": {
              "mobile": {
                "type": "string",
                "title": "Mobile",
              },
              "desktop": {
                "type": "string",
                "title": "Desktop",
              },
            },
            "required": [
              "mobile",
              "desktop",
            ],
          },
          "alt": {
            "type": "string",
            "title": "Alt",
          },
          "textColor": {
            "type": "string",
            "title": "Text Color",
          },
          "text": {
            "type": "string",
            "title": "Text",
          },
          "title": {
            "type": "string",
            "title": "Title",
          },
          "subtitle": {
            "type": "string",
            "title": "Subtitle",
          },
          "link": {
            "type": "string",
            "title": "Link",
          },
          "CTA": {
            "type": "string",
            "title": " C T A",
          },
        },
        "required": [
          "imgSrc",
        ],
      },
      "outputSchema": null,
    },
    "./sections/BannnerGrid.tsx": {
      "inputSchema": {
        "title": " Bannner Grid",
        "type": "object",
        "properties": {
          "images": {
            "type": "array",
            "items": {
              "title": "Banner",
              "type": "object",
              "properties": {
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                },
                "alt": {
                  "type": "string",
                  "title": "Alt",
                  "description": "Image alt text",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                  "description": "When you click you go to",
                },
              },
              "required": [
                "src",
                "alt",
                "href",
              ],
            },
            "title": "Images",
          },
          "title": {
            "type": "string",
            "title": "Title",
          },
        },
        "required": [
          "images",
          "title",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Button.story.tsx": {
      "inputSchema": {
        "title": " Button.story",
        "type": "object",
        "properties": {
          "variant": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "primary",
              },
              {
                "type": "string",
                "const": "secondary",
              },
              {
                "type": "string",
                "const": "tertiary",
              },
              {
                "type": "string",
                "const": "danger",
              },
            ],
            "title": "Variant",
          },
          "size": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "small",
              },
              {
                "type": "string",
                "const": "large",
              },
            ],
            "title": "Size",
          },
          "fit": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "container",
              },
              {
                "type": "string",
                "const": "content",
              },
            ],
            "title": "Fit",
          },
          "loading": {
            "type": "boolean",
            "title": "Loading",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/Footer.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "title": " Head",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "description": {
            "type": "string",
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": "string",
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": "string",
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": "string",
            "title": "Theme Color",
          },
        },
        "required": [
          "url",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": {
        "title": " Header",
        "type": "object",
        "properties": {
          "alerts": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Alerts",
          },
        },
        "required": [
          "alerts",
        ],
      },
      "outputSchema": null,
    },
    "./sections/HomeFilter.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/IconCart.tsx": {
      "inputSchema": {
        "title": " Icon Cart",
        "type": "object",
        "properties": {
          "size": {
            "type": "number",
            "title": "Size",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/ListLinks.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/MarcasConvidadas.tsx": {
      "inputSchema": {
        "title": " Marcas Convidadas",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "mainBanner": {
            "title": "Main Banner",
            "type": "object",
            "properties": {
              "href": {
                "type": "string",
                "title": "Href",
              },
              "smallSrc": {
                "format": "image-uri",
                "type": "string",
                "title": "Small Src",
                "description": "Image src for small screen devices (mobile)",
              },
              "largeSrc": {
                "format": "image-uri",
                "type": "string",
                "title": "Large Src",
                "description": "Image src for large screen devices (desktop)",
              },
              "alt": {
                "type": "string",
                "title": "Alt",
                "description": "Image alt text",
              },
            },
            "required": [
              "href",
              "smallSrc",
              "largeSrc",
              "alt",
            ],
          },
          "banners": {
            "type": "array",
            "items": {
              "title": "Banner",
              "type": "object",
              "properties": {
                "href": {
                  "type": "string",
                  "title": "Href",
                },
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                },
                "alt": {
                  "type": "string",
                  "title": "Alt",
                  "description": "Image alt text",
                },
              },
              "required": [
                "href",
                "src",
                "alt",
              ],
            },
            "title": "Banners",
          },
        },
        "required": [
          "title",
          "mainBanner",
          "banners",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Newsletter.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/ProductDetails.tsx": {
      "inputSchema": {
        "title": " Product Details",
        "type": "object",
        "properties": {
          "page": {
            "$id": "cbcb3fa04ede8a51d20e74d49ed372ff7b56fc33",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ProductGallery.tsx": {
      "inputSchema": {
        "title": " Product Gallery",
        "type": "object",
        "properties": {
          "page": {
            "$id": "d3b8054c8c701987fefabb7ac551f7621c3cd780",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ProductShelf.tsx": {
      "inputSchema": {
        "title": " Product Shelf",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "products": {
            "$id": "974a84d7f51f85a637e6a01e0813804cbcdfd7ac",
            "format": "live-function",
            "type": "string",
            "title": "Products",
          },
        },
        "required": [
          "title",
          "products",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Search.tsx": {
      "inputSchema": {
        "title": " Search",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/SearchControls.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/StoreFeatures.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/VideoCarousel.tsx": {
      "inputSchema": {
        "title": " Video Carousel",
        "type": "object",
        "properties": {
          "videos": {
            "title": "Videos",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "mobile": {
                  "format": "video-uri",
                  "type": "string",
                  "title": "Mobile",
                },
                "desktop": {
                  "format": "video-uri",
                  "type": "string",
                  "title": "Desktop",
                },
                "alt": {
                  "type": "string",
                  "title": "Alt",
                },
                "link": {
                  "type": "string",
                  "title": "Link",
                },
              },
              "required": [
                "mobile",
                "desktop",
                "link",
              ],
            },
          },
          "delay": {
            "type": "number",
            "title": "delay",
            "description": "Time to switch slides in seconds",
            "default": "3",
          },
        },
        "required": [
          "videos",
        ],
      },
      "outputSchema": null,
    },
    "./functions/shopifyProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Shopify Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "cbcb3fa04ede8a51d20e74d49ed372ff7b56fc33",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductList.ts": {
      "inputSchema": {
        "title": "Shopify Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "search term to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "974a84d7f51f85a637e6a01e0813804cbcdfd7ac",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductListingPage.ts": {
      "inputSchema": {
        "title": "Shopify Product Listing Page",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "d3b8054c8c701987fefabb7ac551f7621c3cd780",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Vtex Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "cbcb3fa04ede8a51d20e74d49ed372ff7b56fc33",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductList.ts": {
      "inputSchema": {
        "title": "Vtex Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "query to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "974a84d7f51f85a637e6a01e0813804cbcdfd7ac",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductListingPage.ts": {
      "inputSchema": {
        "title": "Vtex Product Listing Page",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "d3b8054c8c701987fefabb7ac551f7621c3cd780",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
