{
  "definitions": {
    "Resolvable": {
      "$id": "Resolvable",
      "title": "Select from saved",
      "required": [
        "__resolveType"
      ],
      "additionalProperties": false,
      "properties": {
        "__resolveType": {
          "type": "string",
          "not": {
            "enum": [
              "deco-sites/std/functions/butterCMSAds.ts",
              "deco-sites/std/functions/butterCMSBrands.ts",
              "deco-sites/std/functions/butterCMSCategories.ts",
              "deco-sites/std/functions/butterCMSFeaturedPosts.ts",
              "deco-sites/std/functions/butterCMSPage.ts",
              "deco-sites/std/functions/butterCMSPlaces.ts",
              "deco-sites/std/functions/butterCMSPostDetail.ts",
              "deco-sites/std/functions/butterCMSPosts.ts",
              "deco-sites/std/functions/butterCMSRelatedPosts.ts",
              "deco-sites/std/functions/occProductDetailsPage.ts",
              "deco-sites/std/functions/requestToParam.ts",
              "deco-sites/std/functions/shopifyProductDetailsPage.ts",
              "deco-sites/std/functions/shopifyProductList.ts",
              "deco-sites/std/functions/shopifyProductListingPage.ts",
              "deco-sites/std/functions/vndaProductDetailsPage.ts",
              "deco-sites/std/functions/vndaProductList.ts",
              "deco-sites/std/functions/vndaProductListingPage.ts",
              "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts",
              "deco-sites/std/functions/vtexLegacyProductList.ts",
              "deco-sites/std/functions/vtexLegacyProductListingPage.ts",
              "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts",
              "deco-sites/std/functions/vtexNavbar.ts",
              "deco-sites/std/functions/vtexProductDetailsPage.ts",
              "deco-sites/std/functions/vtexProductList.ts",
              "deco-sites/std/functions/vtexProductListingPage.ts",
              "deco-sites/std/functions/vtexSuggestions.ts",
              "deco-sites/std/functions/vtexWishlist.ts",
              "deco-sites/std/accounts/occ.ts",
              "deco-sites/std/accounts/shopify.ts",
import * as i1$0 from "$live/loaders/workflows/get.ts";
              "deco-sites/std/accounts/yourViews.ts",
              "deco-sites/std/loaders/vtex/cart.ts",
              "deco-sites/std/loaders/vtex/intelligentSearch/productDetailsPage.ts",
              "deco-sites/std/loaders/vtex/intelligentSearch/productList.ts",
              "deco-sites/std/loaders/vtex/intelligentSearch/productListingPage.ts",
              "deco-sites/std/loaders/vtex/intelligentSearch/suggestions.ts",
              "deco-sites/std/loaders/vtex/legacy/productDetailsPage.ts",
              "deco-sites/std/loaders/vtex/legacy/productList.ts",
              "deco-sites/std/loaders/vtex/legacy/productListingPage.ts",
              "deco-sites/std/loaders/vtex/legacy/relatedProductsLoader.ts",
              "deco-sites/std/loaders/vtex/navbar.ts",
              "deco-sites/std/loaders/vtex/user.ts",
              "deco-sites/std/loaders/vtex/wishlist.ts",
              "./islands/AddToCartButton.tsx",
              "./islands/HeaderButton.tsx",
              "./islands/HeaderModals.tsx",
              "./islands/HeaderSearchMenu.tsx",
              "./islands/ProductImageZoom.tsx",
              "./islands/SearchControls.tsx",
              "./islands/ShippingSimulation.tsx",
              "./islands/SliderJS.tsx",
              "./islands/WishlistButton.tsx",
              "$live/handlers/devPage.ts",
              "$live/handlers/fresh.ts",
              "$live/handlers/proxy.ts",
              "$live/handlers/router.ts",
              "$live/handlers/routesSelection.ts",
              "$live/pages/LivePage.tsx",
              "$live/sections/PageInclude.tsx",
              "$live/sections/Slot.tsx",
              "$live/sections/UseSlot.tsx",
              "deco-sites/fashion/sections/BannerGrid.tsx",
              "deco-sites/fashion/sections/BannerPLP.tsx",
              "deco-sites/fashion/sections/Carousel.tsx",
              "deco-sites/fashion/sections/CookieConsent.tsx",
              "deco-sites/fashion/sections/DesignSystem.tsx",
              "deco-sites/fashion/sections/Features.tsx",
              "deco-sites/fashion/sections/Footer.tsx",
              "deco-sites/fashion/sections/Header.tsx",
              "deco-sites/fashion/sections/Highlights.tsx",
              "deco-sites/fashion/sections/LinkTree.tsx",
              "deco-sites/fashion/sections/ProductDetails.tsx",
              "deco-sites/fashion/sections/ProductShelf.tsx",
              "deco-sites/fashion/sections/SearchResult.tsx",
              "deco-sites/fashion/sections/WhatsApp.tsx",
              "deco-sites/fashion/sections/WishlistGallery.tsx",
              "deco-sites/std/sections/Analytics.tsx",
              "deco-sites/std/sections/configButterCMS.global.tsx",
              "deco-sites/std/sections/configOCC.global.tsx",
              "deco-sites/std/sections/configShopify.global.tsx",
              "deco-sites/std/sections/configVNDA.global.tsx",
              "deco-sites/std/sections/configVTEX.global.tsx",
              "deco-sites/std/sections/configYourViews.global.tsx",
              "deco-sites/std/sections/SEO.tsx",
              "deco-sites/std/sections/SEOPDP.tsx",
              "deco-sites/std/sections/SEOPLP.tsx",
              "$live/matchers/MatchAlways.ts",
              "$live/matchers/MatchDate.ts",
              "$live/matchers/MatchEnvironment.ts",
              "$live/matchers/MatchHost.ts",
              "$live/matchers/MatchMulti.ts",
              "$live/matchers/MatchRandom.ts",
              "$live/matchers/MatchSite.ts",
              "$live/matchers/MatchUserAgent.ts",
              "$live/flags/audience.ts",
              "$live/flags/everyone.ts",
              "deco-sites/std/actions/vtex/cart/addItems.ts",
              "deco-sites/std/actions/vtex/cart/getInstallment.ts",
              "deco-sites/std/actions/vtex/cart/removeItemAttachment.ts",
              "deco-sites/std/actions/vtex/cart/removeItems.ts",
              "deco-sites/std/actions/vtex/cart/simulation.ts",
              "deco-sites/std/actions/vtex/cart/updateAttachment.ts",
              "deco-sites/std/actions/vtex/cart/updateCoupons.ts",
              "deco-sites/std/actions/vtex/cart/updateItemAttachment.ts",
              "deco-sites/std/actions/vtex/cart/updateItemPrice.ts",
              "deco-sites/std/actions/vtex/cart/updateItems.ts",
              "deco-sites/std/actions/vtex/cart/updateProfile.ts",
              "deco-sites/std/actions/vtex/cart/updateUser.ts",
              "deco-sites/std/actions/vtex/wishlist/addItem.ts",
              "deco-sites/std/actions/vtex/wishlist/removeItem.ts"
            ]
          }
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@Category": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "title": "Name"
        },
        "slug": {
          "type": "string",
          "title": "Slug"
        }
      },
      "required": [
        "name",
        "slug"
      ],
      "title": "Category"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@omitYm9keSxzZW8sdGFncw==BlogPost": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "title": "Title"
        },
        "image": {
          "type": "string",
          "title": "Image"
        },
        "imageAlt": {
          "type": "string",
          "title": "Image Alt"
        },
        "publishedAt": {
          "type": "string",
          "title": "Published At"
        },
        "category": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@Category",
          "title": "Category"
        },
        "slug": {
          "type": "string",
          "title": "Slug"
        },
        "author": {
          "type": "string",
          "title": "Author"
        }
      },
      "required": [
        "title",
        "image",
        "imageAlt",
        "publishedAt",
        "category",
        "slug",
        "author"
      ],
      "title": "omitYm9keSxzZW8sdGFncw==BlogPost"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@9a2995a069d16968ece72775e2605f51&omitYm9keSxzZW8sdGFncw==BlogPost": {
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@omitYm9keSxzZW8sdGFncw==BlogPost"
        },
        {
          "type": "object",
          "properties": {
            "summary": {
              "type": "string",
              "title": "Summary"
            },
            "ctaText": {
              "type": [
                "string",
                "null"
              ],
              "title": "Cta Text"
            }
          },
          "required": [
            "summary"
          ]
        }
      ],
      "title": "9a2995a069d16968ece72775e2605f51&omitYm9keSxzZW8sdGFncw==BlogPost"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@9a2995a069d16968ece72775e2605f51&omitYm9keSxzZW8sdGFncw==BlogPost[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@9a2995a069d16968ece72775e2605f51&omitYm9keSxzZW8sdGFncw==BlogPost"
      },
      "title": "9a2995a069d16968ece72775e2605f51&omitYm9keSxzZW8sdGFncw==BlogPost[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@BlogSectionPosts": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "title": "Title"
            },
            "posts": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@9a2995a069d16968ece72775e2605f51&omitYm9keSxzZW8sdGFncw==BlogPost[]",
              "title": "Posts"
            }
          },
          "required": [
            "title",
            "posts"
          ],
          "title": "deco-sites/std/commerce/butterCMS/types.ts@BlogSectionPosts"
        },
        {
          "title": "Butter CMS Featured Ads Loader",
          "description": "Usefull for shelves and static galleries.",
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/butterCMSAds.ts"
              ],
              "default": "deco-sites/std/functions/butterCMSAds.ts"
            }
          }
        },
        {
          "title": "Butter CMS Featured Posts Loader",
          "description": "Usefull for shelves and static galleries.",
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/butterCMSFeaturedPosts.ts"
              ],
              "default": "deco-sites/std/functions/butterCMSFeaturedPosts.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@BlogPlace": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "title": "Name"
        },
        "slug": {
          "type": "string",
          "title": "Slug"
        }
      },
      "required": [
        "name",
        "slug"
      ],
      "title": "BlogPlace"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@BlogPlace[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@BlogPlace"
      },
      "title": "BlogPlace[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@BlogSectionPlaces": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "title": "Title"
            },
            "places": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@BlogPlace[]",
              "title": "Places"
            }
          },
          "required": [
            "title",
            "places"
          ],
          "title": "deco-sites/std/commerce/butterCMS/types.ts@BlogSectionPlaces"
        },
        {
          "title": "Butter CMS Featured Brands Loader",
          "description": "Usefull for list featured blog's brands.",
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/butterCMSBrands.ts"
              ],
              "default": "deco-sites/std/functions/butterCMSBrands.ts"
            }
          }
        },
        {
          "title": "Butter CMS Featured Places Loader",
          "description": "Usefull for listing places",
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/butterCMSPlaces.ts"
              ],
              "default": "deco-sites/std/functions/butterCMSPlaces.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@Category[]": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@Category"
          },
          "title": "deco-sites/std/commerce/butterCMS/types.ts@Category[]"
        },
        {
          "title": "Butter CMS Categories Loader",
          "description": "Usefull for list blog's categories",
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/butterCMSCategories.ts"
              ],
              "default": "deco-sites/std/functions/butterCMSCategories.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@BlogPage": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "type": "object",
          "properties": {
            "title": {
              "type": [
                "string",
                "null"
              ],
              "title": "Title"
            },
            "breadcrumbList": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@Category[]",
              "title": "Breadcrumb List"
            }
          },
          "required": [],
          "title": "deco-sites/std/commerce/butterCMS/types.ts@BlogPage"
        },
        {
          "title": "Butter CMS Page Loader",
          "description": "Works com any page to retrive page informations like title or breadcrumb",
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/butterCMSPage.ts"
              ],
              "default": "deco-sites/std/functions/butterCMSPage.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@SEO": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "title": "Title"
        },
        "description": {
          "type": "string",
          "title": "Description"
        }
      },
      "required": [
        "title",
        "description"
      ],
      "title": "SEO"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@BlogPost": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "title": "Title"
            },
            "image": {
              "type": "string",
              "title": "Image"
            },
            "imageAlt": {
              "type": "string",
              "title": "Image Alt"
            },
            "publishedAt": {
              "type": "string",
              "title": "Published At"
            },
            "category": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@Category",
              "title": "Category"
            },
            "slug": {
              "type": "string",
              "title": "Slug"
            },
            "author": {
              "type": "string",
              "title": "Author"
            },
            "tags": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "title": "Tags"
            },
            "body": {
              "type": "string",
              "title": "Body"
            },
            "seo": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@SEO",
              "title": "Seo"
            }
          },
          "required": [
            "title",
            "image",
            "imageAlt",
            "publishedAt",
            "category",
            "slug",
            "author",
            "tags",
            "body",
            "seo"
          ],
          "title": "deco-sites/std/commerce/butterCMS/types.ts@BlogPost"
        },
        {
          "title": "Butter CMS Post Detail Loader",
          "description": "Works on routes of type /blog/:slug",
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/butterCMSPostDetail.ts"
              ],
              "default": "deco-sites/std/functions/butterCMSPostDetail.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@Pagination": {
      "type": "object",
      "properties": {
        "currentPage": {
          "type": "number",
          "title": "Current Page"
        },
        "nextPage": {
          "type": "number",
          "title": "Next Page"
        },
        "previousPage": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "type": "null"
            }
          ],
          "title": "Previous Page"
        },
        "count": {
          "type": "number",
          "title": "Count"
        },
        "pageSize": {
          "type": "number",
          "title": "Page Size"
        }
      },
      "required": [
        "currentPage",
        "nextPage",
        "previousPage",
        "count",
        "pageSize"
      ],
      "title": "Pagination"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@Pagination|null": {
      "anyOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@Pagination"
        },
        {
          "type": "null"
        }
      ],
      "title": "Pagination|null"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@BlogPostList": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "type": "object",
          "properties": {
            "posts": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@9a2995a069d16968ece72775e2605f51&omitYm9keSxzZW8sdGFncw==BlogPost[]",
              "title": "Posts"
            },
            "pagination": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL3R5cGVzLnRz@Pagination|null",
              "title": "Pagination"
            }
          },
          "required": [
            "posts",
            "pagination"
          ],
          "title": "deco-sites/std/commerce/butterCMS/types.ts@BlogPostList"
        },
        {
          "title": "Butter CMS Posts Loader",
          "description": "Usefull for paginated galleries.",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1Bvc3RzLnRz@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/butterCMSPosts.ts"
              ],
              "default": "deco-sites/std/functions/butterCMSPosts.ts"
            }
          }
        },
        {
          "title": "Butter CMS Related Posts Loader",
          "description": "Usefull for paginated or not galleries. Works on routes of type /blog/:slug",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1JlbGF0ZWRQb3N0cy50cw==@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/butterCMSRelatedPosts.ts"
              ],
              "default": "deco-sites/std/functions/butterCMSRelatedPosts.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1Bvc3RzLnRz@Props": {
      "type": "object",
      "properties": {
        "pageSize": {
          "type": "number",
          "description": "Used to declare the size of results",
          "title": "Page Size"
        }
      },
      "required": [
        "pageSize"
      ],
      "title": "deco-sites/std/functions/butterCMSPosts.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1JlbGF0ZWRQb3N0cy50cw==@Props": {
      "type": "object",
      "properties": {
        "pageSize": {
          "type": "number",
          "title": "Page Size"
        },
        "withPagination": {
          "type": [
            "boolean",
            "null"
          ],
          "title": "With Pagination"
        }
      },
      "required": [
        "pageSize"
      ],
      "title": "deco-sites/std/functions/butterCMSRelatedPosts.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Thing": {
      "title": "Thing"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ImageObject": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Thing"
        }
      ],
      "properties": {
        "@type": {
          "type": "string",
          "const": "ImageObject",
          "title": "@type"
        }
      },
      "required": [
        "@type"
      ],
      "title": "ImageObject"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ImageObject[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ImageObject"
      },
      "title": "ImageObject[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing": {
      "type": "object",
      "properties": {
        "@id": {
          "type": [
            "string",
            "null"
          ],
          "title": "@id"
        },
        "additionalType": {
          "type": [
            "string",
            "null"
          ],
          "title": "Additional Type"
        },
        "alternateName": {
          "type": [
            "string",
            "null"
          ],
          "title": "Alternate Name"
        },
        "description": {
          "type": [
            "string",
            "null"
          ],
          "title": "Description"
        },
        "disambiguatingDescription": {
          "type": [
            "string",
            "null"
          ],
          "title": "Disambiguating Description"
        },
        "identifier": {
          "type": [
            "string",
            "null"
          ],
          "title": "Identifier"
        },
        "image": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ImageObject[]",
          "title": "Image"
        },
        "name": {
          "type": [
            "string",
            "null"
          ],
          "title": "Name"
        },
        "sameAs": {
          "type": [
            "string",
            "null"
          ],
          "title": "Same As"
        },
        "subjectOf": {
          "type": [
            "string",
            "null"
          ],
          "title": "Subject Of"
        },
        "url": {
          "type": [
            "string",
            "null"
          ],
          "title": "Url"
        }
      },
      "required": [],
      "title": "omitQHR5cGU=Thing"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ListItem": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing"
        }
      ],
      "properties": {
        "@type": {
          "type": "string",
          "const": "ListItem",
          "title": "@type"
        },
        "item": {
          "title": "Item"
        },
        "position": {
          "type": "number",
          "title": "Position"
        }
      },
      "required": [
        "@type",
        "item",
        "position"
      ],
      "title": "ListItem"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ListItem[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ListItem"
      },
      "title": "ListItem[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=ItemList": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing"
        }
      ],
      "properties": {
        "itemListElement": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ListItem[]",
          "title": "Item List Element"
        },
        "numberOfItems": {
          "type": "number",
          "title": "Number Of Items"
        }
      },
      "required": [
        "itemListElement",
        "numberOfItems"
      ],
      "title": "omitQHR5cGU=ItemList"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@BreadcrumbList": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=ItemList"
        }
      ],
      "properties": {
        "@type": {
          "type": "string",
          "const": "BreadcrumbList",
          "title": "@type"
        }
      },
      "required": [
        "@type"
      ],
      "title": "BreadcrumbList"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@PropertyValue": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing"
        }
      ],
      "properties": {
        "@type": {
          "type": "string",
          "const": "PropertyValue",
          "title": "@type"
        },
        "maxValue": {
          "type": [
            "number",
            "null"
          ],
          "title": "Max Value"
        },
        "minValue": {
          "type": [
            "number",
            "null"
          ],
          "title": "Min Value"
        },
        "propertyID": {
          "type": [
            "string",
            "null"
          ],
          "title": "Property I D"
        },
        "unitCode": {
          "type": [
            "string",
            "null"
          ],
          "title": "Unit Code"
        },
        "unitText": {
          "type": [
            "string",
            "null"
          ],
          "title": "Unit Text"
        },
        "value": {
          "type": [
            "string",
            "null"
          ],
          "title": "Value"
        },
        "valueReference": {
          "type": [
            "string",
            "null"
          ],
          "title": "Value Reference"
        }
      },
      "required": [
        "@type"
      ],
      "title": "PropertyValue"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@PropertyValue[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@PropertyValue"
      },
      "title": "PropertyValue[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@AggregateRating": {
      "type": "object",
      "properties": {
        "@type": {
          "type": "string",
          "const": "AggregateRating",
          "title": "@type"
        },
        "ratingCount": {
          "type": [
            "number",
            "null"
          ],
          "title": "Rating Count"
        },
        "reviewCount": {
          "type": [
            "number",
            "null"
          ],
          "title": "Review Count"
        },
        "ratingValue": {
          "type": [
            "number",
            "null"
          ],
          "title": "Rating Value"
        }
      },
      "required": [
        "@type"
      ],
      "title": "AggregateRating"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductLeaf": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Product"
        }
      ],
      "properties": {},
      "required": [],
      "title": "ProductLeaf"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductLeaf[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductLeaf"
      },
      "title": "ProductLeaf[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductGroup": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing"
        }
      ],
      "properties": {
        "@type": {
          "type": "string",
          "const": "ProductGroup",
          "title": "@type"
        },
        "hasVariant": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductLeaf[]",
          "title": "Has Variant"
        },
        "productGroupID": {
          "type": "string",
          "title": "Product Group I D"
        },
        "additionalProperty": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@PropertyValue[]",
          "title": "Additional Property"
        },
        "model": {
          "type": [
            "string",
            "null"
          ],
          "title": "Model"
        }
      },
      "required": [
        "@type",
        "hasVariant",
        "productGroupID",
        "additionalProperty"
      ],
      "title": "ProductGroup"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@QuantitativeValue": {
      "type": "object",
      "properties": {
        "value": {
          "type": [
            "number",
            "null"
          ],
          "title": "Value"
        }
      },
      "required": [],
      "title": "QuantitativeValue"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=PriceSpecification": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing"
        }
      ],
      "properties": {
        "eligibleQuantity": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@QuantitativeValue",
          "title": "Eligible Quantity"
        },
        "price": {
          "type": "number",
          "title": "Price"
        },
        "priceCurrency": {
          "type": [
            "string",
            "null"
          ],
          "title": "Price Currency"
        }
      },
      "required": [
        "price"
      ],
      "title": "omitQHR5cGU=PriceSpecification"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@UnitPriceSpecification": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=PriceSpecification"
        }
      ],
      "properties": {
        "@type": {
          "type": "string",
          "const": "UnitPriceSpecification",
          "title": "@type"
        },
        "priceComponentType": {
          "anyOf": [
            {
              "type": "string",
              "const": "https://schema.org/ActivationFee"
            },
            {
              "type": "string",
              "const": "https://schema.org/CleaningFee"
            },
            {
              "type": "string",
              "const": "https://schema.org/DistanceFee"
            },
            {
              "type": "string",
              "const": "https://schema.org/Downpayment"
            },
            {
              "type": "string",
              "const": "https://schema.org/Installment"
            },
            {
              "type": "string",
              "const": "https://schema.org/Subscription"
            }
          ],
          "type": "string",
          "title": "Price Component Type"
        },
        "priceType": {
          "anyOf": [
            {
              "type": "string",
              "const": "https://schema.org/InvoicePrice"
            },
            {
              "type": "string",
              "const": "https://schema.org/ListPrice"
            },
            {
              "type": "string",
              "const": "https://schema.org/MinimumAdvertisedPrice"
            },
            {
              "type": "string",
              "const": "https://schema.org/MSRP"
            },
            {
              "type": "string",
              "const": "https://schema.org/SalePrice"
            },
            {
              "type": "string",
              "const": "https://schema.org/SRP"
            }
          ],
          "type": "string",
          "title": "Price Type"
        },
        "billingDuration": {
          "type": [
            "number",
            "null"
          ],
          "title": "Billing Duration"
        },
        "billingIncrement": {
          "type": [
            "number",
            "null"
          ],
          "title": "Billing Increment"
        }
      },
      "required": [
        "@type",
        "priceType"
      ],
      "title": "UnitPriceSpecification"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@UnitPriceSpecification[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@UnitPriceSpecification"
      },
      "title": "UnitPriceSpecification[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Offer": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing"
        }
      ],
      "properties": {
        "@type": {
          "type": "string",
          "const": "Offer",
          "title": "@type"
        },
        "availability": {
          "anyOf": [
            {
              "type": "string",
              "const": "https://schema.org/BackOrder"
            },
            {
              "type": "string",
              "const": "https://schema.org/Discontinued"
            },
            {
              "type": "string",
              "const": "https://schema.org/InStock"
            },
            {
              "type": "string",
              "const": "https://schema.org/InStoreOnly"
            },
            {
              "type": "string",
              "const": "https://schema.org/LimitedAvailability"
            },
            {
              "type": "string",
              "const": "https://schema.org/OnlineOnly"
            },
            {
              "type": "string",
              "const": "https://schema.org/OutOfStock"
            },
            {
              "type": "string",
              "const": "https://schema.org/PreOrder"
            },
            {
              "type": "string",
              "const": "https://schema.org/PreSale"
            },
            {
              "type": "string",
              "const": "https://schema.org/SoldOut"
            }
          ],
          "type": "string",
          "title": "Availability"
        },
        "gtin": {
          "type": [
            "string",
            "null"
          ],
          "title": "Gtin"
        },
        "inventoryLevel": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@QuantitativeValue",
          "title": "Inventory Level"
        },
        "itemCondition": {
          "anyOf": [
            {
              "type": "string",
              "const": "https://schema.org/DamagedCondition"
            },
            {
              "type": "string",
              "const": "https://schema.org/NewCondition"
            },
            {
              "type": "string",
              "const": "https://schema.org/RefurbishedCondition"
            },
            {
              "type": "string",
              "const": "https://schema.org/UsedCondition"
            }
          ],
          "type": "string",
          "title": "Item Condition"
        },
        "price": {
          "type": "number",
          "title": "Price"
        },
        "priceSpecification": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@UnitPriceSpecification[]",
          "title": "Price Specification"
        },
        "priceValidUntil": {
          "type": [
            "string",
            "null"
          ],
          "title": "Price Valid Until"
        },
        "seller": {
          "type": [
            "string",
            "null"
          ],
          "title": "Seller"
        },
        "sku": {
          "type": [
            "string",
            "null"
          ],
          "title": "Sku"
        }
      },
      "required": [
        "@type",
        "availability",
        "inventoryLevel",
        "price",
        "priceSpecification"
      ],
      "title": "Offer"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Offer[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Offer"
      },
      "title": "Offer[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@AggregateOffer": {
      "type": "object",
      "properties": {
        "@type": {
          "type": "string",
          "const": "AggregateOffer",
          "title": "@type"
        },
        "highPrice": {
          "type": "number",
          "title": "High Price"
        },
        "lowPrice": {
          "type": "number",
          "title": "Low Price"
        },
        "offerCount": {
          "type": "number",
          "title": "Offer Count"
        },
        "offers": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Offer[]",
          "title": "Offers"
        },
        "priceCurrency": {
          "type": [
            "string",
            "null"
          ],
          "title": "Price Currency"
        }
      },
      "required": [
        "@type",
        "highPrice",
        "lowPrice",
        "offerCount",
        "offers"
      ],
      "title": "AggregateOffer"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Review": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing"
        }
      ],
      "properties": {
        "@type": {
          "type": "string",
          "const": "Review",
          "title": "@type"
        },
        "itemReviewed": {
          "type": [
            "string",
            "null"
          ],
          "title": "Item Reviewed"
        },
        "negativeNotes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "title": "Negative Notes"
        },
        "positiveNotes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "title": "Positive Notes"
        },
        "reviewAspect": {
          "type": [
            "string",
            "null"
          ],
          "title": "Review Aspect"
        },
        "reviewBody": {
          "type": [
            "string",
            "null"
          ],
          "title": "Review Body"
        },
        "reviewRating": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@AggregateRating",
          "title": "Review Rating"
        }
      },
      "required": [
        "@type"
      ],
      "title": "Review"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Product": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing"
        }
      ],
      "properties": {
        "@type": {
          "type": "string",
          "const": "Product",
          "title": "@type"
        },
        "additionalProperty": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@PropertyValue[]",
          "title": "Additional Property"
        },
        "aggregateRating": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@AggregateRating",
          "title": "Aggregate Rating"
        },
        "award": {
          "type": [
            "string",
            "null"
          ],
          "title": "Award"
        },
        "brand": {
          "type": [
            "string",
            "null"
          ],
          "title": "Brand"
        },
        "category": {
          "type": [
            "string",
            "null"
          ],
          "title": "Category"
        },
        "gtin": {
          "type": [
            "string",
            "null"
          ],
          "title": "Gtin"
        },
        "inProductGroupWithID": {
          "type": [
            "string",
            "null"
          ],
          "title": "In Product Group With I D"
        },
        "isVariantOf": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductGroup",
          "title": "Is Variant Of"
        },
        "offers": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@AggregateOffer",
          "title": "Offers"
        },
        "productID": {
          "type": "string",
          "title": "Product I D"
        },
        "productionDate": {
          "type": [
            "string",
            "null"
          ],
          "title": "Production Date"
        },
        "releaseDate": {
          "type": [
            "string",
            "null"
          ],
          "title": "Release Date"
        },
        "review": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Review",
          "title": "Review"
        },
        "sku": {
          "type": "string",
          "title": "Sku"
        },
        "isAccessoryOrSparePartFor": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductLeaf[]",
          "title": "Is Accessory Or Spare Part For"
        }
      },
      "required": [
        "@type",
        "productID",
        "sku"
      ],
      "title": "Product"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductDetailsPage": {
      "type": "object",
      "properties": {
        "@type": {
          "type": "string",
          "const": "ProductDetailsPage",
          "title": "@type"
        },
        "breadcrumbList": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@BreadcrumbList",
          "title": "Breadcrumb List"
        },
        "product": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Product",
          "title": "Product"
        }
      },
      "required": [
        "@type",
        "breadcrumbList",
        "product"
      ],
      "title": "ProductDetailsPage"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductDetailsPage|null": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductDetailsPage"
        },
        {
          "type": "null"
        },
        {
          "title": "Oracle Commerce Cloud Product Page Loader",
          "description": "Works on routes of type /:slug/p",
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/occProductDetailsPage.ts"
              ],
              "default": "deco-sites/std/functions/occProductDetailsPage.ts"
            }
          }
        },
        {
          "title": "Shopify Product Page Loader",
          "description": "Works on routes of type /:slug/p",
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/shopifyProductDetailsPage.ts"
              ],
              "default": "deco-sites/std/functions/shopifyProductDetailsPage.ts"
            }
          }
        },
        {
          "title": "VTEX Product Page Loader",
          "description": "Works on routes of type /:slug/p",
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vndaProductDetailsPage.ts"
              ],
              "default": "deco-sites/std/functions/vndaProductDetailsPage.ts"
            }
          }
        },
        {
          "title": "VTEX product details page - legacy (deprecated)",
          "description": "Works on routes of type /:slug/p",
          "deprecated": true,
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts"
              ],
              "default": "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts"
            }
          }
        },
        {
          "title": "VTEX product details page - Intelligent Search (deprecated)",
          "description": "Works on routes of type /:slug/p",
          "deprecated": true,
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vtexProductDetailsPage.ts"
              ],
              "default": "deco-sites/std/functions/vtexProductDetailsPage.ts"
            }
          }
        },
        {
          "title": "VTEX product details page - Intelligent Search",
          "description": "Works on routes of type /:slug/p",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3REZXRhaWxzUGFnZS50cw==@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/loaders/vtex/intelligentSearch/productDetailsPage.ts"
              ],
              "default": "deco-sites/std/loaders/vtex/intelligentSearch/productDetailsPage.ts"
            }
          }
        },
        {
          "title": "VTEX product details page - Portal",
          "description": "Works on routes of type /:slug/p",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0RGV0YWlsc1BhZ2UudHM=@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/loaders/vtex/legacy/productDetailsPage.ts"
              ],
              "default": "deco-sites/std/loaders/vtex/legacy/productDetailsPage.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3JlcXVlc3RUb1BhcmFtLnRz@RequestURLParam": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "type": "string",
          "title": "deco-sites/std/functions/requestToParam.ts@RequestURLParam"
        },
        {
          "title": "Get params from request parameters",
          "description": "Set param to slug for routes of type /:slug",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3JlcXVlc3RUb1BhcmFtLnRz@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/requestToParam.ts"
              ],
              "default": "deco-sites/std/functions/requestToParam.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3JlcXVlc3RUb1BhcmFtLnRz@Props": {
      "type": "object",
      "properties": {
        "param": {
          "type": "string",
          "default": "slug",
          "description": "Param name to extract from the Request URL",
          "title": "Param"
        }
      },
      "required": [
        "param"
      ],
      "title": "deco-sites/std/functions/requestToParam.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Product[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Product"
      },
      "title": "Product[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Product[]|null": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Product[]"
        },
        {
          "type": "null"
        },
        {
          "title": "Product list loader",
          "description": "Usefull for shelves and static galleries.",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Nob3BpZnlQcm9kdWN0TGlzdC50cw==@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/shopifyProductList.ts"
              ],
              "default": "deco-sites/std/functions/shopifyProductList.ts"
            }
          }
        },
        {
          "title": "Product list loader",
          "description": "Usefull for shelves and static galleries.",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3ZuZGFQcm9kdWN0TGlzdC50cw==@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vndaProductList.ts"
              ],
              "default": "deco-sites/std/functions/vndaProductList.ts"
            }
          }
        },
        {
          "title": "VTEX product list - legacy (deprecated)",
          "description": "Usefull for shelves and static galleries.",
          "deprecated": true,
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lQcm9kdWN0TGlzdC50cw==@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vtexLegacyProductList.ts"
              ],
              "default": "deco-sites/std/functions/vtexLegacyProductList.ts"
            }
          }
        },
        {
          "title": "VTEX related products - legacy (deprecated)",
          "description": "Works on routes of type /:slug/p",
          "deprecated": true,
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lSZWxhdGVkUHJvZHVjdHNMb2FkZXIudHM=@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts"
              ],
              "default": "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts"
            }
          }
        },
        {
          "title": "VTEX product list - Intelligent Search (deprecated)",
          "description": "Usefull for shelves and static galleries.",
          "deprecated": true,
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhQcm9kdWN0TGlzdC50cw==@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vtexProductList.ts"
              ],
              "default": "deco-sites/std/functions/vtexProductList.ts"
            }
          }
        },
        {
          "title": "VTEX product list - Intelligent Search",
          "description": "Usefull for shelves and galleries.",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@partialCollectionProps&partialProductIDProps&partialQueryProps"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/loaders/vtex/intelligentSearch/productList.ts"
              ],
              "default": "deco-sites/std/loaders/vtex/intelligentSearch/productList.ts"
            }
          }
        },
        {
          "title": "VTEX product list - Portal",
          "description": "Usefull for shelves and static galleries.",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdC50cw==@partialCollectionProps&partialProductIDProps&partialTermProps"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/loaders/vtex/legacy/productList.ts"
              ],
              "default": "deco-sites/std/loaders/vtex/legacy/productList.ts"
            }
          }
        },
        {
          "title": "VTEX related products - Portal",
          "description": "Works on routes of type /:slug/p",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9yZWxhdGVkUHJvZHVjdHNMb2FkZXIudHM=@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/loaders/vtex/legacy/relatedProductsLoader.ts"
              ],
              "default": "deco-sites/std/loaders/vtex/legacy/relatedProductsLoader.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Nob3BpZnlQcm9kdWN0TGlzdC50cw==@Props": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "search term to use on search",
          "title": "Query"
        },
        "count": {
          "type": "number",
          "description": "total number of items to display",
          "title": "Count"
        }
      },
      "required": [
        "query",
        "count"
      ],
      "title": "deco-sites/std/functions/shopifyProductList.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterBase": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "title": "Label"
        },
        "key": {
          "type": "string",
          "title": "Key"
        }
      },
      "required": [
        "label",
        "key"
      ],
      "title": "FilterBase"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterToggleValue": {
      "type": "object",
      "properties": {
        "quantity": {
          "type": "number",
          "title": "Quantity"
        },
        "label": {
          "type": "string",
          "title": "Label"
        },
        "value": {
          "type": "string",
          "title": "Value"
        },
        "selected": {
          "type": "boolean",
          "title": "Selected"
        },
        "url": {
          "type": "string",
          "title": "Url"
        }
      },
      "required": [
        "quantity",
        "label",
        "value",
        "selected",
        "url"
      ],
      "title": "FilterToggleValue"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterToggleValue[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterToggleValue"
      },
      "title": "FilterToggleValue[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterToggle": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterBase"
        }
      ],
      "properties": {
        "@type": {
          "type": "string",
          "const": "FilterToggle",
          "title": "@type"
        },
        "values": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterToggleValue[]",
          "title": "Values"
        },
        "quantity": {
          "type": "number",
          "title": "Quantity"
        }
      },
      "required": [
        "@type",
        "values",
        "quantity"
      ],
      "title": "FilterToggle"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterRangeValue": {
      "type": "object",
      "properties": {
        "min": {
          "type": "number",
          "title": "Min"
        },
        "max": {
          "type": "number",
          "title": "Max"
        }
      },
      "required": [
        "min",
        "max"
      ],
      "title": "FilterRangeValue"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterRange": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterBase"
        }
      ],
      "properties": {
        "@type": {
          "type": "string",
          "const": "FilterRange",
          "title": "@type"
        },
        "values": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterRangeValue",
          "title": "Values"
        }
      },
      "required": [
        "@type",
        "values"
      ],
      "title": "FilterRange"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterRange|FilterToggle": {
      "anyOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterToggle"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterRange"
        }
      ],
      "title": "FilterRange|FilterToggle"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterRange|FilterToggle[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterRange|FilterToggle"
      },
      "title": "FilterRange|FilterToggle[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@SortOption": {
      "type": "object",
      "properties": {
        "value": {
          "type": "string",
          "title": "Value"
        },
        "label": {
          "type": "string",
          "title": "Label"
        }
      },
      "required": [
        "value",
        "label"
      ],
      "title": "SortOption"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@SortOption[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@SortOption"
      },
      "title": "SortOption[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage": {
      "type": "object",
      "properties": {
        "@type": {
          "type": "string",
          "const": "ProductListingPage",
          "title": "@type"
        },
        "breadcrumb": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@BreadcrumbList",
          "title": "Breadcrumb"
        },
        "filters": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@FilterRange|FilterToggle[]",
          "title": "Filters"
        },
        "products": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Product[]",
          "title": "Products"
        },
        "pageInfo": {
          "type": "object",
          "properties": {
            "currentPage": {
              "type": "number",
              "title": "Current Page"
            },
            "nextPage": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Next Page"
            },
            "previousPage": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Previous Page"
            },
            "records": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Records"
            },
            "recordPerPage": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Record Per Page"
            }
          },
          "required": [
            "currentPage",
            "nextPage",
            "previousPage"
          ],
          "title": "Page Info"
        },
        "sortOptions": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@SortOption[]",
          "title": "Sort Options"
        }
      },
      "required": [
        "@type",
        "breadcrumb",
        "filters",
        "products",
        "pageInfo",
        "sortOptions"
      ],
      "title": "ProductListingPage"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage|null": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage"
        },
        {
          "type": "null"
        },
        {
          "title": "Product listing page loader",
          "description": "Returns data ready for search pages like category,brand pages",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Nob3BpZnlQcm9kdWN0TGlzdGluZ1BhZ2UudHM=@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/shopifyProductListingPage.ts"
              ],
              "default": "deco-sites/std/functions/shopifyProductListingPage.ts"
            }
          }
        },
        {
          "title": "Product listing page loader",
          "description": "Returns data ready for search pages like category,brand pages",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3ZuZGFQcm9kdWN0TGlzdGluZ1BhZ2UudHM=@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vndaProductListingPage.ts"
              ],
              "default": "deco-sites/std/functions/vndaProductListingPage.ts"
            }
          }
        },
        {
          "title": "VTEX product listing page - legacy (deprecated)",
          "description": "Returns data ready for search pages like category,brand pages",
          "deprecated": true,
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdGluZ1BhZ2UudHM=@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vtexLegacyProductListingPage.ts"
              ],
              "default": "deco-sites/std/functions/vtexLegacyProductListingPage.ts"
            }
          }
        },
        {
          "title": "VTEX product listing page - Intelligent Search (deprecated)",
          "description": "Returns data ready for search pages like category,brand pages",
          "deprecated": true,
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0aW5nUGFnZS50cw==@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vtexProductListingPage.ts"
              ],
              "default": "deco-sites/std/functions/vtexProductListingPage.ts"
            }
          }
        },
        {
          "title": "Product list loader",
          "description": "Usefull for shelves and static galleries.",
          "deprecated": true,
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhXaXNobGlzdC50cw==@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vtexWishlist.ts"
              ],
              "default": "deco-sites/std/functions/vtexWishlist.ts"
            }
          }
        },
        {
          "title": "VTEX product listing page - Intelligent Search",
          "description": "Returns data ready for search pages like category,brand pages",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0aW5nUGFnZS50cw==@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/loaders/vtex/intelligentSearch/productListingPage.ts"
              ],
              "default": "deco-sites/std/loaders/vtex/intelligentSearch/productListingPage.ts"
            }
          }
        },
        {
          "title": "VTEX product listing page - Portal",
          "description": "Returns data ready for search pages like category,brand pages",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdGluZ1BhZ2UudHM=@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/loaders/vtex/legacy/productListingPage.ts"
              ],
              "default": "deco-sites/std/loaders/vtex/legacy/productListingPage.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Nob3BpZnlQcm9kdWN0TGlzdGluZ1BhZ2UudHM=@Props": {
      "type": "object",
      "properties": {
        "query": {
          "type": [
            "string",
            "null"
          ],
          "description": "overides the query term",
          "title": "Query"
        },
        "count": {
          "type": "number",
          "title": "Count",
          "description": "number of products per page to display"
        }
      },
      "required": [
        "count"
      ],
      "title": "deco-sites/std/functions/shopifyProductListingPage.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3ZuZGFQcm9kdWN0TGlzdC50cw==@Props": {
      "type": "object",
      "properties": {
        "limit": {
          "type": "number",
          "description": "total number of items to display",
          "title": "Limit"
        },
        "term": {
          "type": [
            "string",
            "null"
          ],
          "description": "query to use on search",
          "title": "Term"
        },
        "wildcard": {
          "type": [
            "boolean",
            "null"
          ],
          "description": "search for term anywhere",
          "title": "Wildcard"
        },
        "sort": {
          "anyOf": [
            {
              "type": "string",
              "const": "newest"
            },
            {
              "type": "string",
              "const": "oldest"
            },
            {
              "type": "string",
              "const": "lowest_price"
            },
            {
              "type": "string",
              "const": "highest_price"
            }
          ],
          "type": "string",
          "description": "search sort parameter",
          "title": "Sort"
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "search for products that have certain tag",
          "title": "Tags"
        }
      },
      "required": [
        "limit"
      ],
      "title": "deco-sites/std/functions/vndaProductList.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3ZuZGFQcm9kdWN0TGlzdGluZ1BhZ2UudHM=@Props": {
      "type": "object",
      "properties": {
        "term": {
          "type": [
            "string",
            "null"
          ],
          "description": "overides the query term",
          "title": "Term"
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "filter products by tag",
          "title": "Tags"
        },
        "count": {
          "type": "number",
          "title": "Count",
          "description": "number of products per page to display"
        }
      },
      "required": [
        "count"
      ],
      "title": "deco-sites/std/functions/vndaProductListingPage.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lQcm9kdWN0TGlzdC50cw==@Props": {
      "type": "object",
      "properties": {
        "count": {
          "type": "number",
          "description": "total number of items to display",
          "title": "Count"
        },
        "query": {
          "type": [
            "string",
            "null"
          ],
          "description": "query to use on search",
          "title": "Query"
        },
        "collection": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Collection ID or (Product Cluster id). For more info: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search .",
          "pattern": "\\d*",
          "title": "Collection"
        }
      },
      "required": [
        "count"
      ],
      "title": "deco-sites/std/functions/vtexLegacyProductList.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdGluZ1BhZ2UudHM=@Props": {
      "type": "object",
      "properties": {
        "term": {
          "type": [
            "string",
            "null"
          ],
          "description": "overides the query term",
          "title": "Term"
        },
        "count": {
          "type": "number",
          "title": "Count",
          "description": "number of products per page to display"
        },
        "ft": {
          "type": [
            "string",
            "null"
          ],
          "description": "FullText term",
          "title": "Ft"
        },
        "fq": {
          "type": [
            "string",
            "null"
          ],
          "title": "Fq"
        },
        "map": {
          "type": [
            "string",
            "null"
          ],
          "description": "map param",
          "title": "Map"
        },
        "sort": {
          "anyOf": [
            {
              "type": "string",
              "const": "OrderByPriceDESC"
            },
            {
              "type": "string",
              "const": "OrderByPriceASC"
            },
            {
              "type": "string",
              "const": "OrderByTopSaleDESC"
            },
            {
              "type": "string",
              "const": "OrderByReviewRateDESC"
            },
            {
              "type": "string",
              "const": "OrderByNameASC"
            },
            {
              "type": "string",
              "const": "OrderByNameDESC"
            },
            {
              "type": "string",
              "const": "OrderByReleaseDateDESC"
            },
            {
              "type": "string",
              "const": "OrderByBestDiscountDESC"
            },
            {
              "type": "string",
              "const": "OrderByScoreDESC"
            },
            {
              "type": "string",
              "const": ""
            }
          ],
          "type": "string",
          "title": "Sort"
        },
        "filters": {
          "anyOf": [
            {
              "type": "string",
              "const": "dynamic"
            },
            {
              "type": "string",
              "const": "static"
            }
          ],
          "type": "string",
          "title": "Filters",
          "description": "Set to static to not change the facets when the user filters the search. Dynamic will only show the filters containing products after each filter action"
        },
        "pageOffset": {
          "type": [
            "number",
            "null"
          ],
          "title": "Page Offset",
          "description": "Set the starting page offset. Default to 1.",
          "default": "1"
        }
      },
      "required": [
        "count"
      ],
      "title": "deco-sites/std/packs/vtex/loaders/legacy/productListingPage.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lSZWxhdGVkUHJvZHVjdHNMb2FkZXIudHM=@Props": {
      "type": "object",
      "properties": {
        "crossSelling": {
          "anyOf": [
            {
              "type": "string",
              "const": "whosawalsosaw"
            },
            {
              "type": "string",
              "const": "whosawalsobought"
            },
            {
              "type": "string",
              "const": "whoboughtalsobought"
            },
            {
              "type": "string",
              "const": "showtogether"
            },
            {
              "type": "string",
              "const": "accessories"
            },
            {
              "type": "string",
              "const": "similars"
            },
            {
              "type": "string",
              "const": "suggestions"
            }
          ],
          "type": "string",
          "title": "Cross Selling",
          "description": "VTEX Cross Selling API. This loader only works on routes of type /:slug/p"
        },
        "count": {
          "type": [
            "number",
            "null"
          ],
          "title": "Count"
        }
      },
      "required": [],
      "title": "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@NavItem": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "title": "Label"
        },
        "href": {
          "type": "string",
          "title": "Href"
        },
        "image": {
          "type": "object",
          "properties": {
            "src": {
              "type": [
                "string",
                "null"
              ],
              "title": "Src"
            },
            "alt": {
              "type": [
                "string",
                "null"
              ],
              "title": "Alt"
            }
          },
          "required": [],
          "title": "Image"
        }
      },
      "required": [
        "label",
        "href"
      ],
      "title": "NavItem"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Navbar": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@NavItem"
        }
      ],
      "properties": {
        "children": {
          "type": "array",
          "items": {
            "type": "object"
          },
          "title": "Children"
        }
      },
      "required": [],
      "title": "Navbar"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Navbar[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Navbar"
      },
      "title": "Navbar[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Navbar[]|null": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Navbar[]"
        },
        {
          "type": "null"
        },
        {
          "title": "deco-sites/std/functions/vtexNavbar.ts",
          "deprecated": true,
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhOYXZiYXIudHM=@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vtexNavbar.ts"
              ],
              "default": "deco-sites/std/functions/vtexNavbar.ts"
            }
          }
        },
        {
          "title": "deco-sites/std/loaders/vtex/navbar.ts",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL25hdmJhci50cw==@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/loaders/vtex/navbar.ts"
              ],
              "default": "deco-sites/std/loaders/vtex/navbar.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhOYXZiYXIudHM=@Props": {
      "type": "object",
      "properties": {
        "levels": {
          "type": [
            "number",
            "null"
          ],
          "description": "Number of levels of categories to be returned",
          "default": "2",
          "title": "Levels"
        }
      },
      "required": [],
      "title": "deco-sites/std/functions/vtexNavbar.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhQcm9kdWN0TGlzdC50cw==@Props": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "query to use on search",
          "title": "Query"
        },
        "count": {
          "type": "number",
          "description": "total number of items to display",
          "title": "Count"
        },
        "sort": {
          "anyOf": [
            {
              "type": "string",
              "const": ""
            },
            {
              "type": "string",
              "const": "price:desc"
            },
            {
              "type": "string",
              "const": "price:asc"
            },
            {
              "type": "string",
              "const": "orders:desc"
            },
            {
              "type": "string",
              "const": "name:desc"
            },
            {
              "type": "string",
              "const": "name:asc"
            },
            {
              "type": "string",
              "const": "release:desc"
            },
            {
              "type": "string",
              "const": "discount:desc"
            }
          ],
          "type": "string",
          "description": "search sort parameter",
          "title": "Sort"
        },
        "collection": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "title": "Collection",
          "pattern": "\\d*"
        }
      },
      "required": [
        "query",
        "count"
      ],
      "title": "deco-sites/std/functions/vtexProductList.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedFacet": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string",
          "title": "Key"
        },
        "value": {
          "type": "string",
          "title": "Value"
        }
      },
      "required": [
        "key",
        "value"
      ],
      "title": "SelectedFacet"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedFacet[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedFacet"
      },
      "title": "SelectedFacet[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0aW5nUGFnZS50cw==@Props": {
      "type": "object",
      "properties": {
        "query": {
          "type": [
            "string",
            "null"
          ],
          "description": "overides the query term",
          "title": "Query"
        },
        "count": {
          "type": "number",
          "title": "Count",
          "description": "number of products per page to display"
        },
        "sort": {
          "anyOf": [
            {
              "type": "string",
              "const": "price:desc"
            },
            {
              "type": "string",
              "const": "price:asc"
            },
            {
              "type": "string",
              "const": "orders:desc"
            },
            {
              "type": "string",
              "const": "name:desc"
            },
            {
              "type": "string",
              "const": "name:asc"
            },
            {
              "type": "string",
              "const": "release:desc"
            },
            {
              "type": "string",
              "const": "discount:desc"
            },
            {
              "type": "string",
              "const": ""
            }
          ],
          "type": "string",
          "title": "Sort"
        },
        "fuzzy": {
          "anyOf": [
            {
              "type": "string",
              "const": "automatic"
            },
            {
              "type": "string",
              "const": "disabled"
            },
            {
              "type": "string",
              "const": "enabled"
            }
          ],
          "type": "string",
          "title": "Fuzzy"
        },
        "selectedFacets": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedFacet[]",
          "title": "Selected Facets",
          "description": "Override selected facets from url"
        },
        "hideUnavailableItems": {
          "type": [
            "boolean",
            "null"
          ],
          "title": "Hide Unavailable Items",
          "description": "Do not return out of stock items"
        },
        "pageOffset": {
          "type": [
            "number",
            "null"
          ],
          "title": "Page Offset",
          "description": "Set the starting page offset. Default to 1.",
          "default": "1"
        }
      },
      "required": [
        "count"
      ],
      "title": "deco-sites/std/packs/vtex/loaders/intelligentSearch/productListingPage.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Search": {
      "type": "object",
      "properties": {
        "term": {
          "type": "string",
          "title": "Term"
        }
      },
      "required": [
        "term"
      ],
      "title": "Search"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Search[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Search"
      },
      "title": "Search[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Suggestion": {
      "type": "object",
      "properties": {
        "searches": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Search[]",
          "title": "Searches"
        },
        "products": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Product[]",
          "title": "Products"
        }
      },
      "required": [],
      "title": "Suggestion"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Suggestion|null": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Suggestion"
        },
        {
          "type": "null"
        },
        {
          "title": "VTEX search suggestions - Intelligent Search (deprecated)",
          "deprecated": true,
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhTdWdnZXN0aW9ucy50cw==@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/functions/vtexSuggestions.ts"
              ],
              "default": "deco-sites/std/functions/vtexSuggestions.ts"
            }
          }
        },
        {
          "title": "VTEX search suggestions - Intelligent Search",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3N1Z2dlc3Rpb25zLnRz@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/loaders/vtex/intelligentSearch/suggestions.ts"
              ],
              "default": "deco-sites/std/loaders/vtex/intelligentSearch/suggestions.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhTdWdnZXN0aW9ucy50cw==@Props": {
      "type": "object",
      "properties": {
        "query": {
          "type": [
            "string",
            "null"
          ],
          "title": "Query"
        },
        "count": {
          "type": [
            "number",
            "null"
          ],
          "description": "limit the number of searches",
          "default": "4",
          "title": "Count"
        }
      },
      "required": [],
      "title": "deco-sites/std/functions/vtexSuggestions.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhXaXNobGlzdC50cw==@Props": {
      "type": "object",
      "properties": {
        "count": {
          "type": "number",
          "title": "Count",
          "description": "Number of products per page to display",
          "default": "12"
        }
      },
      "required": [
        "count"
      ],
      "title": "deco-sites/std/functions/vtexWishlist.ts@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL2FjY291bnQudHM=@Account": {
      "type": "object",
      "properties": {},
      "required": [],
      "title": "Account"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2Uvb2NjL2NsaWVudC50cw==@ConfigOCC": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL2FjY291bnQudHM=@Account"
        }
      ],
      "properties": {
        "baseUrl": {
          "type": "string",
          "title": "Base Url"
        },
        "nrpp": {
          "type": [
            "string",
            "null"
          ],
          "title": "Nrpp"
        }
      },
      "required": [
        "baseUrl"
      ],
      "title": "deco-sites/std/commerce/occ/client.ts@ConfigOCC"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2Uvc2hvcGlmeS9jbGllbnQudHM=@ConfigShopify": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL2FjY291bnQudHM=@Account"
        }
      ],
      "properties": {
        "storeName": {
          "type": "string",
          "description": "Shopify store name.",
          "title": "Store Name"
        },
        "storefrontAccessToken": {
          "type": "string",
          "description": "Shopify storefront access token.",
          "title": "Storefront Access Token"
        }
      },
      "required": [
        "storeName",
        "storefrontAccessToken"
      ],
      "title": "deco-sites/std/commerce/shopify/client.ts@ConfigShopify"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2Uvdm5kYS90eXBlcy50cw==@ConfigVNDA": {
      "type": "object",
      "properties": {
        "domain": {
          "type": "string",
          "description": "Your VNDA domain name. For example, https://mystore.vnda.com.br",
          "title": "Domain"
        },
        "authToken": {
          "type": "string",
          "description": "The token generated from admin panel. Read here: https://developers.vnda.com.br/docs/chave-de-acesso-e-requisicoes. Do not add any other permissions than catalog.",
          "title": "Auth Token"
        },
        "useSandbox": {
          "type": "boolean",
          "description": "Define if sandbox environment should be used",
          "title": "Use Sandbox"
        },
        "defaultPriceCurrency": {
          "type": "string",
          "description": "Default price currency.",
          "default": "USD",
          "title": "Default Price Currency"
        }
      },
      "required": [
        "domain",
        "authToken",
        "useSandbox",
        "defaultPriceCurrency"
      ],
      "title": "deco-sites/std/commerce/vnda/types.ts@ConfigVNDA"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY2NvdW50cy92dGV4LnRz@Account": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL2FjY291bnQudHM=@Account"
        }
      ],
      "properties": {
        "account": {
          "type": "string",
          "description": "VTEX Account name. For more info, read here: https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC.",
          "title": "Account"
        },
        "defaultLocale": {
          "type": "string",
          "description": "Locale used for VTEX Intelligent Search client.",
          "title": "Default Locale"
        },
        "defaultPriceCurrency": {
          "type": "string",
          "description": "Default price currency.",
          "default": "USD",
          "title": "Default Price Currency"
        },
        "defaultSalesChannel": {
          "type": "string",
          "description": "VTEX sales channel. This will be the default sales channel your site. For more info, read here: https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV",
          "title": "Default Sales Channel"
        },
        "defaultRegionId": {
          "type": [
            "string",
            "null"
          ],
          "title": "Default Region Id"
        },
        "defaultHideUnnavailableItems": {
          "type": [
            "boolean",
            "null"
          ],
          "title": "Default Hide Unnavailable Items"
        }
      },
      "required": [
        "account",
        "defaultLocale",
        "defaultPriceCurrency",
        "defaultSalesChannel"
      ],
      "title": "deco-sites/std/packs/vtex/accounts/vtex.ts@Account"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UveW91clZpZXdzL2NsaWVudC50cw==@ConfigYourViews": {
      "type": "object",
      "properties": {
        "token": {
          "type": "string",
          "title": "Token"
        },
        "appId": {
          "type": "string",
          "title": "App Id"
        }
      },
      "required": [
        "token",
        "appId"
      ],
      "title": "deco-sites/std/commerce/yourViews/client.ts@ConfigYourViews"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Fields": {
      "type": "object",
      "properties": {
        "ean": {
          "type": [
            "string",
            "null"
          ],
          "title": "Ean"
        },
        "itemIndex": {
          "type": [
            "string",
            "null"
          ],
          "title": "Item Index"
        },
        "skuName": {
          "type": [
            "string",
            "null"
          ],
          "title": "Sku Name"
        }
      },
      "required": [],
      "title": "Fields"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Message": {
      "type": "object",
      "properties": {
        "code": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Code"
        },
        "text": {
          "type": "string",
          "title": "Text"
        },
        "status": {
          "type": "string",
          "title": "Status"
        },
        "fields": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Fields",
          "title": "Fields"
        }
      },
      "required": [
        "code",
        "text",
        "status",
        "fields"
      ],
      "title": "Message"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Message[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Message"
      },
      "title": "Message[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AdditionalInfo": {
      "type": "object",
      "properties": {
        "dimension": {
          "type": "null",
          "title": "Dimension"
        },
        "brandName": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Brand Name"
        },
        "brandId": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Brand Id"
        },
        "offeringInfo": {
          "type": "null",
          "title": "Offering Info"
        },
        "offeringType": {
          "type": "null",
          "title": "Offering Type"
        },
        "offeringTypeId": {
          "type": "null",
          "title": "Offering Type Id"
        }
      },
      "required": [
        "dimension",
        "brandName",
        "brandId",
        "offeringInfo",
        "offeringType",
        "offeringTypeId"
      ],
      "title": "AdditionalInfo"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PriceTag": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "title": "Name"
        },
        "value": {
          "type": "number",
          "title": "Value"
        },
        "rawValue": {
          "type": "number",
          "title": "Raw Value"
        },
        "isPercentual": {
          "type": "boolean",
          "title": "Is Percentual"
        },
        "identifier": {
          "type": "string",
          "title": "Identifier"
        },
        "owner": {
          "type": "string",
          "title": "Owner"
        }
      },
      "required": [
        "name",
        "value",
        "rawValue",
        "isPercentual",
        "identifier",
        "owner"
      ],
      "title": "PriceTag"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PriceTag[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PriceTag"
      },
      "title": "PriceTag[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SellingPrice": {
      "type": "object",
      "properties": {
        "value": {
          "type": "number",
          "title": "Value"
        },
        "quantity": {
          "type": "number",
          "title": "Quantity"
        }
      },
      "required": [
        "value",
        "quantity"
      ],
      "title": "SellingPrice"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SellingPrice[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SellingPrice"
      },
      "title": "SellingPrice[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PriceDefinition": {
      "type": "object",
      "properties": {
        "calculatedSellingPrice": {
          "type": "number",
          "title": "Calculated Selling Price"
        },
        "total": {
          "type": "number",
          "title": "Total"
        },
        "sellingPrices": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SellingPrice[]",
          "title": "Selling Prices"
        }
      },
      "required": [
        "calculatedSellingPrice",
        "total",
        "sellingPrices"
      ],
      "title": "PriceDefinition"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Component": {
      "type": "object",
      "properties": {
        "uniqueId": {
          "type": "string",
          "title": "Unique Id"
        },
        "id": {
          "type": "string",
          "title": "Id"
        },
        "productId": {
          "type": "null",
          "title": "Product Id"
        },
        "productRefId": {
          "type": "null",
          "title": "Product Ref Id"
        },
        "refId": {
          "type": "string",
          "title": "Ref Id"
        },
        "ean": {
          "type": "string",
          "title": "Ean"
        },
        "name": {
          "type": "string",
          "title": "Name"
        },
        "skuName": {
          "type": "null",
          "title": "Sku Name"
        },
        "modalType": {
          "type": "null",
          "title": "Modal Type"
        },
        "parentItemIndex": {
          "type": "null",
          "title": "Parent Item Index"
        },
        "parentAssemblyBinding": {
          "type": "null",
          "title": "Parent Assembly Binding"
        },
        "assemblies": {
          "type": "array",
          "items": {},
          "title": "Assemblies"
        },
        "priceValidUntil": {
          "type": "null",
          "title": "Price Valid Until"
        },
        "tax": {
          "type": "number",
          "title": "Tax"
        },
        "price": {
          "type": "number",
          "title": "Price"
        },
        "listPrice": {
          "type": "null",
          "title": "List Price"
        },
        "manualPrice": {
          "type": "null",
          "title": "Manual Price"
        },
        "manualPriceAppliedBy": {
          "type": "null",
          "title": "Manual Price Applied By"
        },
        "sellingPrice": {
          "type": "number",
          "title": "Selling Price"
        },
        "rewardValue": {
          "type": "number",
          "title": "Reward Value"
        },
        "isGift": {
          "type": "boolean",
          "title": "Is Gift"
        },
        "additionalInfo": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AdditionalInfo",
          "title": "Additional Info"
        },
        "preSaleDate": {
          "type": "null",
          "title": "Pre Sale Date"
        },
        "productCategoryIds": {
          "type": "null",
          "title": "Product Category Ids"
        },
        "productCategories": {
          "title": "Product Categories",
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "quantity": {
          "type": "number",
          "title": "Quantity"
        },
        "seller": {
          "type": "null",
          "title": "Seller"
        },
        "sellerChain": {
          "type": "array",
          "items": {
            "type": "null"
          },
          "title": "Seller Chain"
        },
        "imageUrl": {
          "type": "null",
          "title": "Image Url"
        },
        "detailUrl": {
          "type": "null",
          "title": "Detail Url"
        },
        "components": {
          "type": "array",
          "items": {},
          "title": "Components"
        },
        "bundleItems": {
          "type": "array",
          "items": {},
          "title": "Bundle Items"
        },
        "attachments": {
          "type": "array",
          "items": {},
          "title": "Attachments"
        },
        "attachmentOfferings": {
          "type": "array",
          "items": {},
          "title": "Attachment Offerings"
        },
        "offerings": {
          "type": "array",
          "items": {},
          "title": "Offerings"
        },
        "priceTags": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PriceTag[]",
          "title": "Price Tags"
        },
        "availability": {
          "type": "null",
          "title": "Availability"
        },
        "measurementUnit": {
          "type": "string",
          "title": "Measurement Unit"
        },
        "unitMultiplier": {
          "type": "number",
          "title": "Unit Multiplier"
        },
        "manufacturerCode": {
          "type": "null",
          "title": "Manufacturer Code"
        },
        "priceDefinition": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PriceDefinition",
          "title": "Price Definition"
        }
      },
      "required": [
        "uniqueId",
        "id",
        "productId",
        "productRefId",
        "refId",
        "ean",
        "name",
        "skuName",
        "modalType",
        "parentItemIndex",
        "parentAssemblyBinding",
        "assemblies",
        "priceValidUntil",
        "tax",
        "price",
        "listPrice",
        "manualPrice",
        "manualPriceAppliedBy",
        "sellingPrice",
        "rewardValue",
        "isGift",
        "additionalInfo",
        "preSaleDate",
        "productCategoryIds",
        "productCategories",
        "quantity",
        "seller",
        "sellerChain",
        "imageUrl",
        "detailUrl",
        "components",
        "bundleItems",
        "attachments",
        "attachmentOfferings",
        "offerings",
        "priceTags",
        "availability",
        "measurementUnit",
        "unitMultiplier",
        "manufacturerCode",
        "priceDefinition"
      ],
      "title": "Component"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Component[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Component"
      },
      "title": "Component[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Name": {
      "title": "Name"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Ean": {
      "type": "object",
      "properties": {
        "maximumNumberOfCharacters": {
          "type": "number",
          "title": "Maximum Number Of Characters"
        },
        "domain": {
          "type": "array",
          "items": {},
          "title": "Domain"
        }
      },
      "required": [
        "maximumNumberOfCharacters",
        "domain"
      ],
      "title": "Ean"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Schema": {
      "type": "object",
      "properties": {
        "Sku": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Ean",
          "title": " Sku"
        },
        "Price": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Ean",
          "title": " Price"
        },
        "Qtde": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Ean",
          "title": " Qtde"
        },
        "EAN": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Ean",
          "title": " E A N"
        },
        "Measuremt_unit": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Ean",
          "title": " Measuremt_unit"
        },
        "Unit_multiplier": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Ean",
          "title": " Unit_multiplier"
        },
        "Quantity": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Ean",
          "title": " Quantity"
        }
      },
      "required": [
        "Sku",
        "Price",
        "EAN",
        "Measuremt_unit",
        "Unit_multiplier",
        "Quantity"
      ],
      "title": "Schema"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AttachmentOffering": {
      "type": "object",
      "properties": {
        "name": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Name",
          "title": "Name"
        },
        "required": {
          "type": "boolean",
          "title": "Required"
        },
        "schema": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Schema",
          "title": "Schema"
        }
      },
      "required": [
        "name",
        "required",
        "schema"
      ],
      "title": "AttachmentOffering"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AttachmentOffering[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AttachmentOffering"
      },
      "title": "AttachmentOffering[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@OrderFormItem": {
      "type": "object",
      "properties": {
        "uniqueId": {
          "type": "string",
          "title": "Unique Id"
        },
        "id": {
          "type": "string",
          "title": "Id"
        },
        "productId": {
          "type": "string",
          "title": "Product Id"
        },
        "productRefId": {
          "type": "string",
          "title": "Product Ref Id"
        },
        "refId": {
          "type": "string",
          "title": "Ref Id"
        },
        "ean": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Ean"
        },
        "name": {
          "type": "string",
          "title": "Name"
        },
        "skuName": {
          "type": "string",
          "title": "Sku Name"
        },
        "modalType": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Modal Type"
        },
        "parentItemIndex": {
          "type": "null",
          "title": "Parent Item Index"
        },
        "parentAssemblyBinding": {
          "type": "null",
          "title": "Parent Assembly Binding"
        },
        "assemblies": {
          "type": "array",
          "items": {},
          "title": "Assemblies"
        },
        "priceValidUntil": {
          "title": "Price Valid Until"
        },
        "tax": {
          "type": "number",
          "title": "Tax"
        },
        "price": {
          "type": "number",
          "title": "Price"
        },
        "listPrice": {
          "type": "number",
          "title": "List Price"
        },
        "manualPrice": {
          "type": "null",
          "title": "Manual Price"
        },
        "manualPriceAppliedBy": {
          "type": "null",
          "title": "Manual Price Applied By"
        },
        "sellingPrice": {
          "type": "number",
          "title": "Selling Price"
        },
        "rewardValue": {
          "type": "number",
          "title": "Reward Value"
        },
        "isGift": {
          "type": "boolean",
          "title": "Is Gift"
        },
        "additionalInfo": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AdditionalInfo",
          "title": "Additional Info"
        },
        "preSaleDate": {
          "type": "null",
          "title": "Pre Sale Date"
        },
        "productCategoryIds": {
          "type": "string",
          "title": "Product Category Ids"
        },
        "productCategories": {
          "type": "object",
          "properties": {},
          "required": [],
          "title": "Product Categories"
        },
        "quantity": {
          "type": "number",
          "title": "Quantity"
        },
        "seller": {
          "type": "string",
          "title": "Seller"
        },
        "sellerChain": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "title": "Seller Chain"
        },
        "imageUrl": {
          "type": "string",
          "title": "Image Url"
        },
        "detailUrl": {
          "type": "string",
          "title": "Detail Url"
        },
        "components": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Component[]",
          "title": "Components"
        },
        "bundleItems": {
          "type": "array",
          "items": {},
          "title": "Bundle Items"
        },
        "attachments": {
          "type": "array",
          "items": {},
          "title": "Attachments"
        },
        "attachmentOfferings": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AttachmentOffering[]",
          "title": "Attachment Offerings"
        },
        "offerings": {
          "type": "array",
          "items": {},
          "title": "Offerings"
        },
        "priceTags": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PriceTag[]",
          "title": "Price Tags"
        },
        "availability": {
          "type": "string",
          "title": "Availability"
        },
        "measurementUnit": {
          "type": "string",
          "title": "Measurement Unit"
        },
        "unitMultiplier": {
          "type": "number",
          "title": "Unit Multiplier"
        },
        "manufacturerCode": {
          "type": "null",
          "title": "Manufacturer Code"
        },
        "priceDefinition": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PriceDefinition",
          "title": "Price Definition"
        }
      },
      "required": [
        "uniqueId",
        "id",
        "productId",
        "productRefId",
        "refId",
        "ean",
        "name",
        "skuName",
        "modalType",
        "parentItemIndex",
        "parentAssemblyBinding",
        "assemblies",
        "priceValidUntil",
        "tax",
        "price",
        "listPrice",
        "manualPrice",
        "manualPriceAppliedBy",
        "sellingPrice",
        "rewardValue",
        "isGift",
        "additionalInfo",
        "preSaleDate",
        "productCategoryIds",
        "productCategories",
        "quantity",
        "seller",
        "sellerChain",
        "imageUrl",
        "detailUrl",
        "components",
        "bundleItems",
        "attachments",
        "attachmentOfferings",
        "offerings",
        "priceTags",
        "availability",
        "measurementUnit",
        "unitMultiplier",
        "manufacturerCode",
        "priceDefinition"
      ],
      "title": "OrderFormItem"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@OrderFormItem[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@OrderFormItem"
      },
      "title": "OrderFormItem[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Totalizer": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "name": {
          "type": "string",
          "title": "Name"
        },
        "value": {
          "type": "number",
          "title": "Value"
        },
        "alternativeTotals": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Totalizer"
          },
          "title": "Alternative Totals"
        }
      },
      "required": [
        "id",
        "name",
        "value"
      ],
      "title": "Totalizer"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Totalizer[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Totalizer"
      },
      "title": "Totalizer[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Address": {
      "type": "object",
      "properties": {
        "addressType": {
          "type": "string",
          "title": "Address Type"
        },
        "receiverName": {
          "type": "null",
          "title": "Receiver Name"
        },
        "addressId": {
          "type": "string",
          "title": "Address Id"
        },
        "isDisposable": {
          "type": "boolean",
          "title": "Is Disposable"
        },
        "postalCode": {
          "type": "string",
          "title": "Postal Code"
        },
        "city": {
          "type": "string",
          "title": "City"
        },
        "state": {
          "type": "string",
          "title": "State"
        },
        "country": {
          "type": "string",
          "title": "Country"
        },
        "street": {
          "type": "string",
          "title": "Street"
        },
        "number": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Number"
        },
        "neighborhood": {
          "type": "string",
          "title": "Neighborhood"
        },
        "complement": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Complement"
        },
        "reference": {
          "type": "null",
          "title": "Reference"
        },
        "geoCoordinates": {
          "type": "array",
          "items": {
            "type": "number"
          },
          "title": "Geo Coordinates"
        }
      },
      "required": [
        "addressType",
        "receiverName",
        "addressId",
        "isDisposable",
        "postalCode",
        "city",
        "state",
        "country",
        "street",
        "number",
        "neighborhood",
        "complement",
        "reference",
        "geoCoordinates"
      ],
      "title": "Address"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedSla": {
      "title": "SelectedSla"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedSla|null": {
      "anyOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedSla"
        },
        {
          "type": "null"
        }
      ],
      "title": "SelectedSla|null"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedDeliveryChannel": {
      "title": "SelectedDeliveryChannel"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@DeliveryID": {
      "type": "object",
      "properties": {
        "courierId": {
          "type": "string",
          "title": "Courier Id"
        },
        "warehouseId": {
          "type": "string",
          "title": "Warehouse Id"
        },
        "dockId": {
          "type": "string",
          "title": "Dock Id"
        },
        "courierName": {
          "type": "string",
          "title": "Courier Name"
        },
        "quantity": {
          "type": "number",
          "title": "Quantity"
        },
        "kitItemDetails": {
          "type": "array",
          "items": {},
          "title": "Kit Item Details"
        }
      },
      "required": [
        "courierId",
        "warehouseId",
        "dockId",
        "courierName",
        "quantity",
        "kitItemDetails"
      ],
      "title": "DeliveryID"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@DeliveryID[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@DeliveryID"
      },
      "title": "DeliveryID[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AvailableDeliveryWindow": {
      "type": "object",
      "properties": {
        "startDateUtc": {
          "title": "Start Date Utc"
        },
        "endDateUtc": {
          "title": "End Date Utc"
        },
        "price": {
          "type": "number",
          "title": "Price"
        },
        "lisPrice": {
          "type": "number",
          "title": "Lis Price"
        },
        "tax": {
          "type": "number",
          "title": "Tax"
        }
      },
      "required": [
        "startDateUtc",
        "endDateUtc",
        "price",
        "lisPrice",
        "tax"
      ],
      "title": "AvailableDeliveryWindow"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AvailableDeliveryWindow[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AvailableDeliveryWindow"
      },
      "title": "AvailableDeliveryWindow[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Address|null": {
      "anyOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Address"
        },
        {
          "type": "null"
        }
      ],
      "title": "Address|null"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PickupStoreInfo": {
      "type": "object",
      "properties": {
        "isPickupStore": {
          "type": "boolean",
          "title": "Is Pickup Store"
        },
        "friendlyName": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Friendly Name"
        },
        "address": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Address|null",
          "title": "Address"
        },
        "additionalInfo": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Additional Info"
        },
        "dockId": {
          "type": "null",
          "title": "Dock Id"
        }
      },
      "required": [
        "isPickupStore",
        "friendlyName",
        "address",
        "additionalInfo",
        "dockId"
      ],
      "title": "PickupStoreInfo"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Sla": {
      "type": "object",
      "properties": {
        "id": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedSla",
          "title": "Id"
        },
        "deliveryChannel": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedDeliveryChannel",
          "title": "Delivery Channel"
        },
        "name": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedSla",
          "title": "Name"
        },
        "deliveryIds": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@DeliveryID[]",
          "title": "Delivery Ids"
        },
        "shippingEstimate": {
          "type": "string",
          "title": "Shipping Estimate"
        },
        "shippingEstimateDate": {
          "type": "null",
          "title": "Shipping Estimate Date"
        },
        "lockTTL": {
          "type": "null",
          "title": "Lock T T L"
        },
        "availableDeliveryWindows": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AvailableDeliveryWindow[]",
          "title": "Available Delivery Windows"
        },
        "deliveryWindow": {
          "type": "null",
          "title": "Delivery Window"
        },
        "price": {
          "type": "number",
          "title": "Price"
        },
        "listPrice": {
          "type": "number",
          "title": "List Price"
        },
        "tax": {
          "type": "number",
          "title": "Tax"
        },
        "pickupStoreInfo": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PickupStoreInfo",
          "title": "Pickup Store Info"
        },
        "pickupPointId": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Pickup Point Id"
        },
        "pickupDistance": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "type": "null"
            }
          ],
          "title": "Pickup Distance"
        },
        "polygonName": {
          "type": "string",
          "title": "Polygon Name"
        },
        "transitTime": {
          "type": "string",
          "title": "Transit Time"
        }
      },
      "required": [
        "id",
        "deliveryChannel",
        "name",
        "deliveryIds",
        "shippingEstimate",
        "shippingEstimateDate",
        "lockTTL",
        "availableDeliveryWindows",
        "deliveryWindow",
        "price",
        "listPrice",
        "tax",
        "pickupStoreInfo",
        "pickupPointId",
        "pickupDistance",
        "polygonName",
        "transitTime"
      ],
      "title": "Sla"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Sla[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Sla"
      },
      "title": "Sla[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@DeliveryChannel": {
      "type": "object",
      "properties": {
        "id": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedDeliveryChannel",
          "title": "Id"
        }
      },
      "required": [
        "id"
      ],
      "title": "DeliveryChannel"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@DeliveryChannel[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@DeliveryChannel"
      },
      "title": "DeliveryChannel[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@LogisticsInfo": {
      "type": "object",
      "properties": {
        "itemIndex": {
          "type": "number",
          "title": "Item Index"
        },
        "selectedSla": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedSla|null",
          "title": "Selected Sla"
        },
        "selectedDeliveryChannel": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SelectedDeliveryChannel",
          "title": "Selected Delivery Channel"
        },
        "addressId": {
          "type": "string",
          "title": "Address Id"
        },
        "slas": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Sla[]",
          "title": "Slas"
        },
        "shipsTo": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "title": "Ships To"
        },
        "itemId": {
          "type": "string",
          "title": "Item Id"
        },
        "deliveryChannels": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@DeliveryChannel[]",
          "title": "Delivery Channels"
        }
      },
      "required": [
        "itemIndex",
        "selectedSla",
        "selectedDeliveryChannel",
        "addressId",
        "slas",
        "shipsTo",
        "itemId",
        "deliveryChannels"
      ],
      "title": "LogisticsInfo"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@LogisticsInfo[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@LogisticsInfo"
      },
      "title": "LogisticsInfo[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Address[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Address"
      },
      "title": "Address[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@BusinessHour": {
      "type": "object",
      "properties": {
        "DayOfWeek": {
          "type": "number",
          "title": " Day Of Week"
        },
        "OpeningTime": {
          "type": "string",
          "title": " Opening Time"
        },
        "ClosingTime": {
          "type": "string",
          "title": " Closing Time"
        }
      },
      "required": [
        "DayOfWeek",
        "OpeningTime",
        "ClosingTime"
      ],
      "title": "BusinessHour"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@BusinessHour[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@BusinessHour"
      },
      "title": "BusinessHour[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PickupPoint": {
      "type": "object",
      "properties": {
        "friendlyName": {
          "type": "string",
          "title": "Friendly Name"
        },
        "address": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Address",
          "title": "Address"
        },
        "additionalInfo": {
          "type": "string",
          "title": "Additional Info"
        },
        "id": {
          "type": "string",
          "title": "Id"
        },
        "businessHours": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@BusinessHour[]",
          "title": "Business Hours"
        }
      },
      "required": [
        "friendlyName",
        "address",
        "additionalInfo",
        "id",
        "businessHours"
      ],
      "title": "PickupPoint"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PickupPoint[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PickupPoint"
      },
      "title": "PickupPoint[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ShippingData": {
      "type": "object",
      "properties": {
        "address": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Address",
          "title": "Address"
        },
        "logisticsInfo": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@LogisticsInfo[]",
          "title": "Logistics Info"
        },
        "selectedAddresses": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Address[]",
          "title": "Selected Addresses"
        },
        "availableAddresses": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Address[]",
          "title": "Available Addresses"
        },
        "pickupPoints": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PickupPoint[]",
          "title": "Pickup Points"
        }
      },
      "required": [
        "address",
        "logisticsInfo",
        "selectedAddresses",
        "availableAddresses",
        "pickupPoints"
      ],
      "title": "ShippingData"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ClientProfileData": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "title": "Email"
        },
        "firstName": {
          "type": "null",
          "title": "First Name"
        },
        "lastName": {
          "type": "null",
          "title": "Last Name"
        },
        "document": {
          "type": "null",
          "title": "Document"
        },
        "documentType": {
          "type": "null",
          "title": "Document Type"
        },
        "phone": {
          "type": "null",
          "title": "Phone"
        },
        "corporateName": {
          "type": "null",
          "title": "Corporate Name"
        },
        "tradeName": {
          "type": "null",
          "title": "Trade Name"
        },
        "corporateDocument": {
          "type": "null",
          "title": "Corporate Document"
        },
        "stateInscription": {
          "type": "null",
          "title": "State Inscription"
        },
        "corporatePhone": {
          "type": "null",
          "title": "Corporate Phone"
        },
        "isCorporate": {
          "type": "boolean",
          "title": "Is Corporate"
        },
        "profileCompleteOnLoading": {
          "type": "boolean",
          "title": "Profile Complete On Loading"
        },
        "profileErrorOnLoading": {
          "type": "boolean",
          "title": "Profile Error On Loading"
        },
        "customerClass": {
          "type": "null",
          "title": "Customer Class"
        }
      },
      "required": [
        "email",
        "firstName",
        "lastName",
        "document",
        "documentType",
        "phone",
        "corporateName",
        "tradeName",
        "corporateDocument",
        "stateInscription",
        "corporatePhone",
        "isCorporate",
        "profileCompleteOnLoading",
        "profileErrorOnLoading",
        "customerClass"
      ],
      "title": "ClientProfileData"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ClientProfileData|null": {
      "anyOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ClientProfileData"
        },
        {
          "type": "null"
        }
      ],
      "title": "ClientProfileData|null"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Installment": {
      "type": "object",
      "properties": {
        "Value": {
          "type": "number",
          "title": " Value"
        },
        "InterestRate": {
          "type": "number",
          "title": " Interest Rate"
        },
        "TotalValuePlusInterestRate": {
          "type": "number",
          "title": " Total Value Plus Interest Rate"
        },
        "NumberOfInstallments": {
          "type": "number",
          "title": " Number Of Installments"
        },
        "PaymentSystemName": {
          "type": "string",
          "title": " Payment System Name"
        },
        "PaymentSystemGroupName": {
          "type": "string",
          "title": " Payment System Group Name"
        },
        "Name": {
          "type": "string",
          "title": " Name"
        }
      },
      "required": [
        "Value",
        "InterestRate",
        "TotalValuePlusInterestRate",
        "NumberOfInstallments",
        "PaymentSystemName",
        "PaymentSystemGroupName",
        "Name"
      ],
      "title": "Installment"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Installment[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Installment"
      },
      "title": "Installment[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ID": {
      "title": "ID"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@CartInstallment": {
      "type": "object",
      "properties": {
        "count": {
          "type": "number",
          "title": "Count"
        },
        "hasInterestRate": {
          "type": "boolean",
          "title": "Has Interest Rate"
        },
        "interestRate": {
          "type": "number",
          "title": "Interest Rate"
        },
        "value": {
          "type": "number",
          "title": "Value"
        },
        "total": {
          "type": "number",
          "title": "Total"
        },
        "sellerMerchantInstallments": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Installment[]",
          "title": "Seller Merchant Installments"
        },
        "id": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ID",
          "title": "Id"
        }
      },
      "required": [
        "count",
        "hasInterestRate",
        "interestRate",
        "value",
        "total"
      ],
      "title": "CartInstallment"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@CartInstallment[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@CartInstallment"
      },
      "title": "CartInstallment[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@InstallmentOption": {
      "type": "object",
      "properties": {
        "paymentSystem": {
          "type": "string",
          "title": "Payment System"
        },
        "bin": {
          "type": "null",
          "title": "Bin"
        },
        "paymentName": {
          "type": "null",
          "title": "Payment Name"
        },
        "paymentGroupName": {
          "type": "null",
          "title": "Payment Group Name"
        },
        "value": {
          "type": "number",
          "title": "Value"
        },
        "installments": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@CartInstallment[]",
          "title": "Installments"
        }
      },
      "required": [
        "paymentSystem",
        "bin",
        "paymentName",
        "paymentGroupName",
        "value",
        "installments"
      ],
      "title": "InstallmentOption"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@InstallmentOption[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@InstallmentOption"
      },
      "title": "InstallmentOption[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@CardCodeRegex": {
      "title": "CardCodeRegex"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@CardCodeRegex|null": {
      "anyOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@CardCodeRegex"
        },
        {
          "type": "null"
        }
      ],
      "title": "CardCodeRegex|null"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Validator": {
      "type": "object",
      "properties": {
        "regex": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Regex"
        },
        "mask": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Mask"
        },
        "cardCodeRegex": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@CardCodeRegex|null",
          "title": "Card Code Regex"
        },
        "cardCodeMask": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Card Code Mask"
        },
        "weights": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "number"
              }
            },
            {
              "type": "null"
            }
          ],
          "title": "Weights"
        },
        "useCvv": {
          "type": "boolean",
          "title": "Use Cvv"
        },
        "useExpirationDate": {
          "type": "boolean",
          "title": "Use Expiration Date"
        },
        "useCardHolderName": {
          "type": "boolean",
          "title": "Use Card Holder Name"
        },
        "useBillingAddress": {
          "type": "boolean",
          "title": "Use Billing Address"
        }
      },
      "required": [
        "regex",
        "mask",
        "cardCodeRegex",
        "cardCodeMask",
        "weights",
        "useCvv",
        "useExpirationDate",
        "useCardHolderName",
        "useBillingAddress"
      ],
      "title": "Validator"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PaymentSystem": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "title": "Id"
        },
        "name": {
          "type": "string",
          "title": "Name"
        },
        "groupName": {
          "type": "string",
          "title": "Group Name"
        },
        "validator": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Validator",
          "title": "Validator"
        },
        "stringId": {
          "type": "string",
          "title": "String Id"
        },
        "template": {
          "type": "string",
          "title": "Template"
        },
        "requiresDocument": {
          "type": "boolean",
          "title": "Requires Document"
        },
        "displayDocument": {
          "type": "boolean",
          "title": "Display Document"
        },
        "isCustom": {
          "type": "boolean",
          "title": "Is Custom"
        },
        "description": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Description"
        },
        "requiresAuthentication": {
          "type": "boolean",
          "title": "Requires Authentication"
        },
        "dueDate": {
          "title": "Due Date"
        },
        "availablePayments": {
          "type": "null",
          "title": "Available Payments"
        }
      },
      "required": [
        "id",
        "name",
        "groupName",
        "validator",
        "stringId",
        "template",
        "requiresDocument",
        "displayDocument",
        "isCustom",
        "description",
        "requiresAuthentication",
        "dueDate",
        "availablePayments"
      ],
      "title": "PaymentSystem"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PaymentSystem[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PaymentSystem"
      },
      "title": "PaymentSystem[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PaymentData": {
      "type": "object",
      "properties": {
        "updateStatus": {
          "type": "string",
          "title": "Update Status"
        },
        "installmentOptions": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@InstallmentOption[]",
          "title": "Installment Options"
        },
        "paymentSystems": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PaymentSystem[]",
          "title": "Payment Systems"
        },
        "payments": {
          "type": "array",
          "items": {},
          "title": "Payments"
        },
        "giftCards": {
          "type": "array",
          "items": {},
          "title": "Gift Cards"
        },
        "giftCardMessages": {
          "type": "array",
          "items": {},
          "title": "Gift Card Messages"
        },
        "availableAccounts": {
          "type": "array",
          "items": {},
          "title": "Available Accounts"
        },
        "availableTokens": {
          "type": "array",
          "items": {},
          "title": "Available Tokens"
        },
        "availableAssociations": {
          "title": "Available Associations",
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      },
      "required": [
        "updateStatus",
        "installmentOptions",
        "paymentSystems",
        "payments",
        "giftCards",
        "giftCardMessages",
        "availableAccounts",
        "availableTokens",
        "availableAssociations"
      ],
      "title": "PaymentData"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@MarketingData": {
      "type": "object",
      "properties": {
        "utmSource": {
          "type": "string",
          "title": "Utm Source"
        },
        "utmMedium": {
          "type": "null",
          "title": "Utm Medium"
        },
        "utmCampaign": {
          "type": "string",
          "title": "Utm Campaign"
        },
        "utmipage": {
          "type": "null",
          "title": "Utmipage"
        },
        "utmiPart": {
          "type": "null",
          "title": "Utmi Part"
        },
        "utmiCampaign": {
          "type": "null",
          "title": "Utmi Campaign"
        },
        "coupon": {
          "type": "null",
          "title": "Coupon"
        },
        "marketingTags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "title": "Marketing Tags"
        }
      },
      "required": [
        "utmSource",
        "utmMedium",
        "utmCampaign",
        "utmipage",
        "utmiPart",
        "utmiCampaign",
        "coupon",
        "marketingTags"
      ],
      "title": "MarketingData"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Seller": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "name": {
          "type": "string",
          "title": "Name"
        },
        "logo": {
          "type": "string",
          "title": "Logo"
        }
      },
      "required": [
        "id",
        "name",
        "logo"
      ],
      "title": "Seller"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Seller[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Seller"
      },
      "title": "Seller[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ClientPreferencesData": {
      "type": "object",
      "properties": {
        "locale": {
          "type": "string",
          "title": "Locale"
        },
        "optinNewsLetter": {
          "type": "null",
          "title": "Optin News Letter"
        }
      },
      "required": [
        "locale",
        "optinNewsLetter"
      ],
      "title": "ClientPreferencesData"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@CurrencyFormatInfo": {
      "type": "object",
      "properties": {
        "currencyDecimalDigits": {
          "type": "number",
          "title": "Currency Decimal Digits"
        },
        "currencyDecimalSeparator": {
          "type": "string",
          "title": "Currency Decimal Separator"
        },
        "currencyGroupSeparator": {
          "type": "string",
          "title": "Currency Group Separator"
        },
        "currencyGroupSize": {
          "type": "number",
          "title": "Currency Group Size"
        },
        "startsWithCurrencySymbol": {
          "type": "boolean",
          "title": "Starts With Currency Symbol"
        }
      },
      "required": [
        "currencyDecimalDigits",
        "currencyDecimalSeparator",
        "currencyGroupSeparator",
        "currencyGroupSize",
        "startsWithCurrencySymbol"
      ],
      "title": "CurrencyFormatInfo"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@StorePreferencesData": {
      "type": "object",
      "properties": {
        "countryCode": {
          "type": "string",
          "title": "Country Code"
        },
        "saveUserData": {
          "type": "boolean",
          "title": "Save User Data"
        },
        "timeZone": {
          "type": "string",
          "title": "Time Zone"
        },
        "currencyCode": {
          "type": "string",
          "title": "Currency Code"
        },
        "currencyLocale": {
          "type": "number",
          "title": "Currency Locale"
        },
        "currencySymbol": {
          "type": "string",
          "title": "Currency Symbol"
        },
        "currencyFormatInfo": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@CurrencyFormatInfo",
          "title": "Currency Format Info"
        }
      },
      "required": [
        "countryCode",
        "saveUserData",
        "timeZone",
        "currencyCode",
        "currencyLocale",
        "currencySymbol",
        "currencyFormatInfo"
      ],
      "title": "StorePreferencesData"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AssemblyOption": {
      "type": "object",
      "properties": {
        "id": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Name",
          "title": "Id"
        },
        "name": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Name",
          "title": "Name"
        },
        "required": {
          "type": "boolean",
          "title": "Required"
        },
        "inputValues": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Schema",
          "title": "Input Values"
        },
        "composition": {
          "type": "null",
          "title": "Composition"
        }
      },
      "required": [
        "id",
        "name",
        "required",
        "inputValues",
        "composition"
      ],
      "title": "AssemblyOption"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AssemblyOption[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AssemblyOption"
      },
      "title": "AssemblyOption[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ItemMetadataItem": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "seller": {
          "type": "string",
          "title": "Seller"
        },
        "name": {
          "type": "string",
          "title": "Name"
        },
        "skuName": {
          "type": "string",
          "title": "Sku Name"
        },
        "productId": {
          "type": "string",
          "title": "Product Id"
        },
        "refId": {
          "type": "string",
          "title": "Ref Id"
        },
        "ean": {
          "anyOf": [
            {
              "type": "null"
            },
            {
              "type": "string"
            }
          ],
          "title": "Ean"
        },
        "imageUrl": {
          "type": "string",
          "title": "Image Url"
        },
        "detailUrl": {
          "type": "string",
          "title": "Detail Url"
        },
        "assemblyOptions": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@AssemblyOption[]",
          "title": "Assembly Options"
        }
      },
      "required": [
        "id",
        "seller",
        "name",
        "skuName",
        "productId",
        "refId",
        "ean",
        "imageUrl",
        "detailUrl",
        "assemblyOptions"
      ],
      "title": "ItemMetadataItem"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ItemMetadataItem[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ItemMetadataItem"
      },
      "title": "ItemMetadataItem[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ItemMetadata": {
      "type": "object",
      "properties": {
        "items": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ItemMetadataItem[]",
          "title": "Items"
        }
      },
      "required": [
        "items"
      ],
      "title": "ItemMetadata"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@MatchedParameters": {
      "type": "object",
      "properties": {
        "Seller@CatalogSystem": {
          "type": "string",
          "title": " Seller@ Catalog System"
        },
        "productCluster@CatalogSystem": {
          "type": [
            "string",
            "null"
          ],
          "title": "Product Cluster@ Catalog System"
        },
        "zipCode@Shipping": {
          "type": [
            "string",
            "null"
          ],
          "title": "Zip Code@ Shipping"
        },
        "slaIds": {
          "type": [
            "string",
            "null"
          ],
          "title": "Sla Ids"
        }
      },
      "required": [
        "Seller@CatalogSystem"
      ],
      "title": "MatchedParameters"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@RateAndBenefitsIdentifier": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "name": {
          "type": "string",
          "title": "Name"
        },
        "featured": {
          "type": "boolean",
          "title": "Featured"
        },
        "description": {
          "type": "string",
          "title": "Description"
        },
        "matchedParameters": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@MatchedParameters",
          "title": "Matched Parameters"
        },
        "additionalInfo": {
          "type": "null",
          "title": "Additional Info"
        }
      },
      "required": [
        "id",
        "name",
        "featured",
        "description",
        "matchedParameters",
        "additionalInfo"
      ],
      "title": "RateAndBenefitsIdentifier"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@RateAndBenefitsIdentifier[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@RateAndBenefitsIdentifier"
      },
      "title": "RateAndBenefitsIdentifier[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@RatesAndBenefitsData": {
      "type": "object",
      "properties": {
        "rateAndBenefitsIdentifiers": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@RateAndBenefitsIdentifier[]",
          "title": "Rate And Benefits Identifiers"
        },
        "teaser": {
          "type": "array",
          "items": {},
          "title": "Teaser"
        }
      },
      "required": [
        "rateAndBenefitsIdentifiers",
        "teaser"
      ],
      "title": "RatesAndBenefitsData"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@OrderForm": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "type": "object",
          "properties": {
            "orderFormId": {
              "type": "string",
              "title": "Order Form Id"
            },
            "salesChannel": {
              "type": "string",
              "title": "Sales Channel"
            },
            "loggedIn": {
              "type": "boolean",
              "title": "Logged In"
            },
            "isCheckedIn": {
              "type": "boolean",
              "title": "Is Checked In"
            },
            "storeId": {
              "type": "null",
              "title": "Store Id"
            },
            "checkedInPickupPointId": {
              "type": "null",
              "title": "Checked In Pickup Point Id"
            },
            "allowManualPrice": {
              "type": "boolean",
              "title": "Allow Manual Price"
            },
            "canEditData": {
              "type": "boolean",
              "title": "Can Edit Data"
            },
            "userProfileId": {
              "type": "null",
              "title": "User Profile Id"
            },
            "userType": {
              "type": "null",
              "title": "User Type"
            },
            "ignoreProfileData": {
              "type": "boolean",
              "title": "Ignore Profile Data"
            },
            "value": {
              "type": "number",
              "title": "Value"
            },
            "messages": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Message[]",
              "title": "Messages"
            },
            "items": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@OrderFormItem[]",
              "title": "Items"
            },
            "selectableGifts": {
              "type": "array",
              "items": {},
              "title": "Selectable Gifts"
            },
            "totalizers": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Totalizer[]",
              "title": "Totalizers"
            },
            "shippingData": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ShippingData",
              "title": "Shipping Data"
            },
            "clientProfileData": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ClientProfileData|null",
              "title": "Client Profile Data"
            },
            "paymentData": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@PaymentData",
              "title": "Payment Data"
            },
            "marketingData": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@MarketingData",
              "title": "Marketing Data"
            },
            "sellers": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@Seller[]",
              "title": "Sellers"
            },
            "clientPreferencesData": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ClientPreferencesData",
              "title": "Client Preferences Data"
            },
            "commercialConditionData": {
              "type": "null",
              "title": "Commercial Condition Data"
            },
            "storePreferencesData": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@StorePreferencesData",
              "title": "Store Preferences Data"
            },
            "giftRegistryData": {
              "type": "null",
              "title": "Gift Registry Data"
            },
            "openTextField": {
              "type": "null",
              "title": "Open Text Field"
            },
            "invoiceData": {
              "type": "null",
              "title": "Invoice Data"
            },
            "customData": {
              "type": "null",
              "title": "Custom Data"
            },
            "itemMetadata": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ItemMetadata",
              "title": "Item Metadata"
            },
            "hooksData": {
              "type": "null",
              "title": "Hooks Data"
            },
            "ratesAndBenefitsData": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@RatesAndBenefitsData",
              "title": "Rates And Benefits Data"
            },
            "subscriptionData": {
              "type": "null",
              "title": "Subscription Data"
            },
            "merchantContextData": {
              "type": "null",
              "title": "Merchant Context Data"
            },
            "itemsOrdination": {
              "type": "null",
              "title": "Items Ordination"
            }
          },
          "required": [
            "orderFormId",
            "salesChannel",
            "loggedIn",
            "isCheckedIn",
            "storeId",
            "checkedInPickupPointId",
            "allowManualPrice",
            "canEditData",
            "userProfileId",
            "userType",
            "ignoreProfileData",
            "value",
            "messages",
            "items",
            "selectableGifts",
            "totalizers",
            "shippingData",
            "clientProfileData",
            "paymentData",
            "marketingData",
            "sellers",
            "clientPreferencesData",
            "commercialConditionData",
            "storePreferencesData",
            "giftRegistryData",
            "openTextField",
            "invoiceData",
            "customData",
            "itemMetadata",
            "hooksData",
            "ratesAndBenefitsData",
            "subscriptionData",
            "merchantContextData",
            "itemsOrdination"
          ],
          "title": "deco-sites/std/packs/vtex/types.ts@OrderForm"
        },
        {
          "title": "deco-sites/std/loaders/vtex/cart.ts",
          "docs": "https://developers.vtex.com/docs/api-reference/checkout-api#get-/api/checkout/pub/orderForm",
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/loaders/vtex/cart.ts"
              ],
              "default": "deco-sites/std/loaders/vtex/cart.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3REZXRhaWxzUGFnZS50cw==@Props": {
      "type": "object",
      "properties": {
        "slug": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3JlcXVlc3RUb1BhcmFtLnRz@RequestURLParam",
          "title": "Slug"
        }
      },
      "required": [
        "slug"
      ],
      "title": "deco-sites/std/packs/vtex/loaders/intelligentSearch/productDetailsPage.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@CommonProps": {
      "type": "object",
      "properties": {
        "hideUnavailableItems": {
          "type": [
            "boolean",
            "null"
          ],
          "title": "Hide Unavailable Items",
          "description": "Do not return out of stock items"
        }
      },
      "required": [],
      "title": "CommonProps"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@partialCollectionProps": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@CommonProps"
        }
      ],
      "properties": {
        "collection": {
          "type": "string",
          "title": "Collection",
          "pattern": "\\d*"
        },
        "sort": {
          "anyOf": [
            {
              "type": "string",
              "const": "price:desc"
            },
            {
              "type": "string",
              "const": "price:asc"
            },
            {
              "type": "string",
              "const": "orders:desc"
            },
            {
              "type": "string",
              "const": "name:desc"
            },
            {
              "type": "string",
              "const": "name:asc"
            },
            {
              "type": "string",
              "const": "release:desc"
            },
            {
              "type": "string",
              "const": "discount:desc"
            },
            {
              "type": "string",
              "const": ""
            }
          ],
          "type": "string",
          "description": "search sort parameter",
          "title": "Sort"
        },
        "count": {
          "type": "number",
          "description": "total number of items to display",
          "title": "Count"
        }
      },
      "required": [],
      "title": "partialCollectionProps"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@partialQueryProps": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@CommonProps"
        }
      ],
      "properties": {
        "query": {
          "type": "string",
          "description": "query to use on search",
          "title": "Query"
        },
        "sort": {
          "anyOf": [
            {
              "type": "string",
              "const": "price:desc"
            },
            {
              "type": "string",
              "const": "price:asc"
            },
            {
              "type": "string",
              "const": "orders:desc"
            },
            {
              "type": "string",
              "const": "name:desc"
            },
            {
              "type": "string",
              "const": "name:asc"
            },
            {
              "type": "string",
              "const": "release:desc"
            },
            {
              "type": "string",
              "const": "discount:desc"
            },
            {
              "type": "string",
              "const": ""
            }
          ],
          "type": "string",
          "description": "search sort parameter",
          "title": "Sort"
        },
        "count": {
          "type": "number",
          "description": "total number of items to display",
          "title": "Count"
        }
      },
      "required": [],
      "title": "partialQueryProps"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ProductID": {
      "type": "string",
      "description": "Equivalent to sku ID in VTEX platform",
      "title": "ProductID"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ProductID[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ProductID"
      },
      "title": "ProductID[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@partialProductIDProps": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@CommonProps"
        }
      ],
      "properties": {
        "ids": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ProductID[]",
          "description": "SKU ids to retrieve",
          "title": "Ids"
        }
      },
      "required": [],
      "title": "partialProductIDProps"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@partialCollectionProps&partialProductIDProps&partialQueryProps": {
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@partialCollectionProps"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@partialQueryProps"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@partialProductIDProps"
        }
      ],
      "title": "deco-sites/std/packs/vtex/loaders/intelligentSearch/productList.ts@partialCollectionProps&partialProductIDProps&partialQueryProps"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3N1Z2dlc3Rpb25zLnRz@Props": {
      "type": "object",
      "properties": {
        "query": {
          "type": [
            "string",
            "null"
          ],
          "title": "Query"
        },
        "count": {
          "type": [
            "number",
            "null"
          ],
          "description": "limit the number of searches",
          "default": "4",
          "title": "Count"
        }
      },
      "required": [],
      "title": "deco-sites/std/packs/vtex/loaders/intelligentSearch/suggestions.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0RGV0YWlsc1BhZ2UudHM=@Props": {
      "type": "object",
      "properties": {
        "slug": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3JlcXVlc3RUb1BhcmFtLnRz@RequestURLParam",
          "title": "Slug"
        }
      },
      "required": [
        "slug"
      ],
      "title": "deco-sites/std/packs/vtex/loaders/legacy/productDetailsPage.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdC50cw==@partialCollectionProps": {
      "type": "object",
      "properties": {
        "collection": {
          "type": "string",
          "description": "Collection ID or (Product Cluster id). For more info: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search .",
          "pattern": "\\d*",
          "title": "Collection"
        },
        "sort": {
          "anyOf": [
            {
              "type": "string",
              "const": "OrderByPriceDESC"
            },
            {
              "type": "string",
              "const": "OrderByPriceASC"
            },
            {
              "type": "string",
              "const": "OrderByTopSaleDESC"
            },
            {
              "type": "string",
              "const": "OrderByReviewRateDESC"
            },
            {
              "type": "string",
              "const": "OrderByNameASC"
            },
            {
              "type": "string",
              "const": "OrderByNameDESC"
            },
            {
              "type": "string",
              "const": "OrderByReleaseDateDESC"
            },
            {
              "type": "string",
              "const": "OrderByBestDiscountDESC"
            },
            {
              "type": "string",
              "const": "OrderByScoreDESC"
            },
            {
              "type": "string",
              "const": ""
            }
          ],
          "type": "string",
          "description": "search sort parameter",
          "title": "Sort"
        },
        "count": {
          "type": "number",
          "description": "total number of items to display",
          "title": "Count"
        }
      },
      "required": [],
      "title": "partialCollectionProps"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdC50cw==@partialTermProps": {
      "type": "object",
      "properties": {
        "term": {
          "type": [
            "string",
            "null"
          ],
          "description": "term to use on search",
          "title": "Term"
        },
        "sort": {
          "anyOf": [
            {
              "type": "string",
              "const": "OrderByPriceDESC"
            },
            {
              "type": "string",
              "const": "OrderByPriceASC"
            },
            {
              "type": "string",
              "const": "OrderByTopSaleDESC"
            },
            {
              "type": "string",
              "const": "OrderByReviewRateDESC"
            },
            {
              "type": "string",
              "const": "OrderByNameASC"
            },
            {
              "type": "string",
              "const": "OrderByNameDESC"
            },
            {
              "type": "string",
              "const": "OrderByReleaseDateDESC"
            },
            {
              "type": "string",
              "const": "OrderByBestDiscountDESC"
            },
            {
              "type": "string",
              "const": "OrderByScoreDESC"
            },
            {
              "type": "string",
              "const": ""
            }
          ],
          "type": "string",
          "description": "search sort parameter",
          "title": "Sort"
        },
        "count": {
          "type": "number",
          "description": "total number of items to display",
          "title": "Count"
        }
      },
      "required": [],
      "title": "partialTermProps"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdC50cw==@partialProductIDProps": {
      "type": "object",
      "properties": {
        "ids": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@ProductID[]",
          "description": "SKU ids to retrieve",
          "title": "Ids"
        }
      },
      "required": [],
      "title": "partialProductIDProps"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdC50cw==@partialCollectionProps&partialProductIDProps&partialTermProps": {
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdC50cw==@partialCollectionProps"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdC50cw==@partialTermProps"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdC50cw==@partialProductIDProps"
        }
      ],
      "title": "deco-sites/std/packs/vtex/loaders/legacy/productList.ts@partialCollectionProps&partialProductIDProps&partialTermProps"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9yZWxhdGVkUHJvZHVjdHNMb2FkZXIudHM=@Props": {
      "type": "object",
      "properties": {
        "crossSelling": {
          "anyOf": [
            {
              "type": "string",
              "const": ""
            },
            {
              "anyOf": [
                {
                  "type": "string",
                  "const": "whosawalsosaw"
                },
                {
                  "type": "string",
                  "const": "whosawalsobought"
                },
                {
                  "type": "string",
                  "const": "whoboughtalsobought"
                },
                {
                  "type": "string",
                  "const": "showtogether"
                },
                {
                  "type": "string",
                  "const": "accessories"
                },
                {
                  "type": "string",
                  "const": "similars"
                },
                {
                  "type": "string",
                  "const": "suggestions"
                }
              ],
              "type": "string"
            }
          ],
          "type": "string",
          "title": "Cross Selling",
          "description": "VTEX Cross Selling API. This loader only works on routes of type /:slug/p"
        },
        "count": {
          "type": [
            "number",
            "null"
          ],
          "title": "Count"
        },
        "slug": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3JlcXVlc3RUb1BhcmFtLnRz@RequestURLParam",
          "description": "the product slug",
          "title": "Slug"
        }
      },
      "required": [
        "slug"
      ],
      "title": "deco-sites/std/packs/vtex/loaders/legacy/relatedProductsLoader.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL25hdmJhci50cw==@Props": {
      "type": "object",
      "properties": {
        "levels": {
          "type": [
            "number",
            "null"
          ],
          "description": "Number of levels of categories to be returned",
          "default": "2",
          "title": "Levels"
        }
      },
      "required": [],
      "title": "deco-sites/std/packs/vtex/loaders/navbar.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL3VzZXIudHM=@User": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "title": "Email"
        }
      },
      "required": [
        "email"
      ],
      "title": "User"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL3VzZXIudHM=@User|null": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL3VzZXIudHM=@User"
        },
        {
          "type": "null"
        },
        {
          "title": "deco-sites/std/loaders/vtex/user.ts",
          "type": "object",
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/loaders/vtex/user.ts"
              ],
              "default": "deco-sites/std/loaders/vtex/user.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@WishlistItem": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "productId": {
          "type": "string",
          "title": "Product Id"
        },
        "sku": {
          "type": "string",
          "title": "Sku"
        },
        "title": {
          "type": "string",
          "title": "Title"
        }
      },
      "required": [
        "id",
        "productId",
        "sku",
        "title"
      ],
      "title": "WishlistItem"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@WishlistItem[]": {
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@WishlistItem"
          },
          "title": "deco-sites/std/packs/vtex/types.ts@WishlistItem[]"
        },
        {
          "title": "deco-sites/std/loaders/vtex/wishlist.ts",
          "type": "object",
          "allOf": [
            {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL3dpc2hsaXN0LnRz@Props"
            }
          ],
          "required": [
            "__resolveType"
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-sites/std/loaders/vtex/wishlist.ts"
              ],
              "default": "deco-sites/std/loaders/vtex/wishlist.ts"
            }
          }
        }
      ]
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL3dpc2hsaXN0LnRz@Props": {
      "type": "object",
      "properties": {
        "count": {
          "type": "number",
          "title": "Count",
          "description": "Number of products per page to display",
          "default": "12"
        }
      },
      "required": [
        "count"
      ],
      "title": "deco-sites/std/packs/vtex/loaders/wishlist.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SKU": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "title": "Id"
        },
        "quantity": {
          "type": "number",
          "title": "Quantity"
        },
        "seller": {
          "type": "string",
          "title": "Seller"
        }
      },
      "required": [
        "id",
        "quantity",
        "seller"
      ],
      "title": "SKU"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvU2hpcHBpbmdTaW11bGF0aW9uLnRzeA==@Props": {
      "type": "object",
      "properties": {
        "items": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC90eXBlcy50cw==@SKU"
          },
          "title": "Items"
        }
      },
      "required": [
        "items"
      ],
      "title": "deco-sites/fashion/components/ui/ShippingSimulation.tsx@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL3BhZ2UudHM=@Page": {
      "$ref": "#/root/pages",
      "title": "Page"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvaGFuZGxlcnMvZGV2UGFnZS50cw==@DevConfig": {
      "type": "object",
      "properties": {
        "page": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL3BhZ2UudHM=@Page",
          "title": "Page"
        }
      },
      "required": [
        "page"
      ],
      "title": "/Users/marcoscandeia/workspace/live/handlers/devPage.ts@DevConfig"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvaGFuZGxlcnMvZnJlc2gudHM=@FreshConfig": {
      "type": "object",
      "properties": {
        "page": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL3BhZ2UudHM=@Page",
          "title": "Page"
        }
      },
      "required": [
        "page"
      ],
      "title": "/Users/marcoscandeia/workspace/live/handlers/fresh.ts@FreshConfig"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvaGFuZGxlcnMvcHJveHkudHM=@Props": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string",
          "description": "the proxy url.",
          "title": "Url"
        },
        "basePath": {
          "type": [
            "string",
            "null"
          ],
          "description": "the base path of the url.",
          "title": "Base Path"
        }
      },
      "required": [
        "url"
      ],
      "title": "/Users/marcoscandeia/workspace/live/handlers/proxy.ts@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL2hhbmRsZXIudHM=@Handler": {
      "$ref": "#/root/handlers",
      "title": "Handler"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Route": {
      "type": "object",
      "properties": {
        "pathTemplate": {
          "type": "string",
          "title": "Path Template"
        },
        "handler": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL2hhbmRsZXIudHM=@Handler",
          "title": "Handler"
        }
      },
      "required": [
        "pathTemplate",
        "handler"
      ],
      "title": "Route"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Route[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Route"
      },
      "title": "Route[]"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvaGFuZGxlcnMvcm91dGVyLnRz@RouterConfig": {
      "type": "object",
      "properties": {
        "base": {
          "type": [
            "string",
            "null"
          ],
          "title": "Base"
        },
        "routes": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Route[]",
          "title": "Routes"
        }
      },
      "required": [
        "routes"
      ],
      "title": "/Users/marcoscandeia/workspace/live/handlers/router.ts@RouterConfig"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvaGFuZGxlcnMvcm91dGVzU2VsZWN0aW9uLnRz@SelectionConfig": {
      "type": "object",
      "properties": {
        "audiences": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/JGxpdmUvZmxhZ3MvYXVkaWVuY2UudHM="
              },
              {
                "$ref": "#/definitions/JGxpdmUvZmxhZ3MvZXZlcnlvbmUudHM="
              }
            ]
          },
          "title": "Audiences"
        }
      },
      "required": [
        "audiences"
      ],
      "title": "/Users/marcoscandeia/workspace/live/handlers/routesSelection.ts@SelectionConfig"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL3NlY3Rpb24udHM=@Section": {
      "$ref": "#/root/sections",
      "title": "Section"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL3NlY3Rpb24udHM=@Section[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL3NlY3Rpb24udHM=@Section"
      },
      "title": "Section[]"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvcGFnZXMvTGl2ZVBhZ2UudHN4@Props": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "title": "Name"
        },
        "fold": {
          "type": [
            "number",
            "null"
          ],
          "title": "Fold"
        },
        "layout": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL3BhZ2UudHM=@Page",
          "title": "Layout"
        },
        "sections": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL3NlY3Rpb24udHM=@Section[]",
          "title": "Sections"
        }
      },
      "required": [
        "name",
        "sections"
      ],
      "title": "/Users/marcoscandeia/workspace/live/pages/LivePage.tsx@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvc2VjdGlvbnMvUGFnZUluY2x1ZGUudHN4@Props": {
      "type": "object",
      "properties": {
        "page": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL3BhZ2UudHM=@Page",
          "title": "Page"
        }
      },
      "required": [
        "page"
      ],
      "title": "/Users/marcoscandeia/workspace/live/sections/PageInclude.tsx@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvc2VjdGlvbnMvU2xvdC50c3g=@Props": {
      "type": "object",
      "properties": {
        "required": {
          "type": [
            "boolean",
            "null"
          ],
          "description": "Enforces the slot to be fulfilled.",
          "title": "Required"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "anyOf": [
                {
                  "type": "string",
                  "const": "content"
                },
                {
                  "type": "string",
                  "const": "footer"
                },
                {
                  "type": "string",
                  "const": "header"
                },
                {
                  "type": "string",
                  "const": "analytics"
                },
                {
                  "type": "string",
                  "const": "design-system"
                },
                {
                  "type": "string",
                  "const": "SEO"
                }
              ],
              "type": "string"
            }
          ],
          "type": "string",
          "description": "The name of the slot.",
          "default": "content",
          "title": "Name"
        }
      },
      "required": [],
      "title": "/Users/marcoscandeia/workspace/live/sections/Slot.tsx@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvc2VjdGlvbnMvVXNlU2xvdC50c3g=@Props": {
      "type": "object",
      "properties": {
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "anyOf": [
                {
                  "type": "string",
                  "const": "content"
                },
                {
                  "type": "string",
                  "const": "footer"
                },
                {
                  "type": "string",
                  "const": "header"
                },
                {
                  "type": "string",
                  "const": "analytics"
                },
                {
                  "type": "string",
                  "const": "design-system"
                },
                {
                  "type": "string",
                  "const": "SEO"
                }
              ],
              "type": "string"
            }
          ],
          "type": "string",
          "title": "Name"
        },
        "sections": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL3NlY3Rpb24udHM=@Section[]",
          "title": "Sections"
        }
      },
      "required": [
        "name",
        "sections"
      ],
      "title": "/Users/marcoscandeia/workspace/live/sections/UseSlot.tsx@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy90eXBlcy50cw==@Image": {
      "type": "string",
      "format": "image-uri",
      "title": "Image"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyR3JpZC50c3g=@Banner": {
      "type": "object",
      "properties": {
        "srcMobile": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy90eXBlcy50cw==@Image",
          "title": "Src Mobile"
        },
        "srcDesktop": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy90eXBlcy50cw==@Image",
          "title": "Src Desktop"
        },
        "alt": {
          "type": "string",
          "description": "Image alt text",
          "title": "Alt"
        },
        "href": {
          "type": "string",
          "description": "When you click you go to",
          "title": "Href"
        }
      },
      "required": [
        "srcMobile",
        "alt",
        "href"
      ],
      "title": "Banner"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyR3JpZC50c3g=@Banner[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyR3JpZC50c3g=@Banner"
      },
      "title": "Banner[]"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyR3JpZC50c3g=@Props": {
      "type": "object",
      "properties": {
        "title": {
          "type": [
            "string",
            "null"
          ],
          "title": "Title"
        },
        "itemsPerLine": {
          "type": "object",
          "properties": {
            "mobile": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 1
                },
                {
                  "type": "number",
                  "const": 2
                }
              ],
              "type": "number",
              "title": "Mobile"
            },
            "desktop": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 1
                },
                {
                  "type": "number",
                  "const": 2
                },
                {
                  "type": "number",
                  "const": 4
                },
                {
                  "type": "number",
                  "const": 6
                },
                {
                  "type": "number",
                  "const": 8
                }
              ],
              "type": "number",
              "title": "Desktop"
            }
          },
          "required": [],
          "title": "Items Per Line",
          "description": "Default is 2 for mobile and all for desktop"
        },
        "borderRadius": {
          "type": "object",
          "properties": {
            "mobile": {
              "anyOf": [
                {
                  "type": "string",
                  "const": "none"
                },
                {
                  "type": "string",
                  "const": "sm"
                },
                {
                  "type": "string",
                  "const": "md"
                },
                {
                  "type": "string",
                  "const": "lg"
                },
                {
                  "type": "string",
                  "const": "xl"
                },
                {
                  "type": "string",
                  "const": "2xl"
                },
                {
                  "type": "string",
                  "const": "3xl"
                },
                {
                  "type": "string",
                  "const": "full"
                }
              ],
              "type": "string",
              "title": "Mobile"
            },
            "desktop": {
              "anyOf": [
                {
                  "type": "string",
                  "const": "none"
                },
                {
                  "type": "string",
                  "const": "sm"
                },
                {
                  "type": "string",
                  "const": "md"
                },
                {
                  "type": "string",
                  "const": "lg"
                },
                {
                  "type": "string",
                  "const": "xl"
                },
                {
                  "type": "string",
                  "const": "2xl"
                },
                {
                  "type": "string",
                  "const": "3xl"
                },
                {
                  "type": "string",
                  "const": "full"
                }
              ],
              "type": "string",
              "title": "Desktop"
            }
          },
          "required": [],
          "title": "Border Radius",
          "description": "Item's border radius in px"
        },
        "banners": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyR3JpZC50c3g=@Banner[]",
          "title": "Banners"
        }
      },
      "required": [
        "itemsPerLine",
        "borderRadius",
        "banners"
      ],
      "title": "deco-sites/fashion/components/ui/BannerGrid.tsx@Props"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyUExQLnRzeA==@Banner": {
      "type": "object",
      "properties": {
        "matcher": {
          "type": "string",
          "description": "RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category",
          "title": "Matcher"
        },
        "title": {
          "type": [
            "string",
            "null"
          ],
          "description": "text to be rendered on top of the image",
          "title": "Title"
        },
        "subtitle": {
          "type": [
            "string",
            "null"
          ],
          "description": "text to be rendered on top of the image",
          "title": "Subtitle"
        },
        "image": {
          "type": "object",
          "properties": {
            "desktop": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy90eXBlcy50cw==@Image",
              "title": "Desktop"
            },
            "mobile": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy90eXBlcy50cw==@Image",
              "title": "Mobile"
            },
            "alt": {
              "type": [
                "string",
                "null"
              ],
              "title": "Alt"
            }
          },
          "required": [
            "desktop",
            "mobile"
          ],
          "title": "Image"
        }
      },
      "required": [
        "matcher",
        "image"
      ],
      "title": "Banner"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyUExQLnRzeA==@Banner[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyUExQLnRzeA==@Banner"
      },
      "title": "Banner[]"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyUExQLnRzeA==@Props": {
      "type": "object",
      "properties": {
        "page": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage|null",
          "title": "Page"
        },
        "banners": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyUExQLnRzeA==@Banner[]",
          "title": "Banners"
        }
      },
      "required": [],
      "title": "deco-sites/fashion/components/ui/BannerPLP.tsx@Props"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyQ2Fyb3VzZWwudHN4@Banner": {
      "type": "object",
      "properties": {
        "desktop": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy90eXBlcy50cw==@Image",
          "description": "desktop otimized image",
          "title": "Desktop"
        },
        "mobile": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy90eXBlcy50cw==@Image",
          "description": "mobile otimized image",
          "title": "Mobile"
        },
        "alt": {
          "type": "string",
          "description": "Image's alt text",
          "title": "Alt"
        },
        "action": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "title": "Href"
            },
            "title": {
              "type": "string",
              "title": "Title"
            },
            "subTitle": {
              "type": "string",
              "title": "Sub Title"
            },
            "label": {
              "type": "string",
              "title": "Label"
            }
          },
          "required": [
            "href",
            "title",
            "subTitle",
            "label"
          ],
          "title": "Action"
        }
      },
      "required": [
        "desktop",
        "mobile",
        "alt"
      ],
      "title": "Banner"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyQ2Fyb3VzZWwudHN4@Banner[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyQ2Fyb3VzZWwudHN4@Banner"
      },
      "title": "Banner[]"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyQ2Fyb3VzZWwudHN4@Props": {
      "type": "object",
      "properties": {
        "images": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyQ2Fyb3VzZWwudHN4@Banner[]",
          "title": "Images"
        },
        "preload": {
          "type": [
            "boolean",
            "null"
          ],
          "description": "Check this option when this banner is the biggest image on the screen for image optimizations",
          "title": "Preload"
        },
        "interval": {
          "type": [
            "number",
            "null"
          ],
          "title": "Interval",
          "description": "time (in seconds) to start the carousel autoplay"
        }
      },
      "required": [],
      "title": "deco-sites/fashion/components/ui/BannerCarousel.tsx@Props"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Rlc2lnblN5c3RlbS50c3g=@Colors": {
      "type": "object",
      "properties": {
        "primary": {
          "type": "string",
          "format": "color",
          "default": "#003232",
          "title": "Primary"
        },
        "primary-focus": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a darker tone of primary if not specified",
          "title": "Primary-focus"
        },
        "primary-content": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a readable tone of primary if not specified",
          "title": "Primary-content"
        },
        "secondary": {
          "type": "string",
          "format": "color",
          "default": "#8C3D3D",
          "title": "Secondary"
        },
        "secondary-focus": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a darker tone of secondary if not specified",
          "title": "Secondary-focus"
        },
        "secondary-content": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a readable tone of secondary if not specified",
          "title": "Secondary-content"
        },
        "accent": {
          "type": "string",
          "format": "color",
          "default": "#00FF7F",
          "title": "Accent"
        },
        "accent-focus": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a darker tone of accent if not specified",
          "title": "Accent-focus"
        },
        "accent-content": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a readable tone of accent if not specified",
          "title": "Accent-content"
        },
        "neutral": {
          "type": "string",
          "format": "color",
          "default": "#333333",
          "title": "Neutral"
        },
        "neutral-focus": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a darker tone of neutral if not specified",
          "title": "Neutral-focus"
        },
        "neutral-content": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a readable tone of neutral if not specified",
          "title": "Neutral-content"
        },
        "base-100": {
          "type": "string",
          "format": "color",
          "default": "#FFFFFF",
          "title": "Base-100"
        },
        "base-200": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a darker tone of base-100 if not specified",
          "title": "Base-200"
        },
        "base-300": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a darker tone of base-200 if not specified",
          "title": "Base-300"
        },
        "base-content": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a readable tone of base-100 if not specified",
          "title": "Base-content"
        },
        "success": {
          "type": "string",
          "format": "color",
          "default": "#EAFAF2",
          "title": "Success"
        },
        "success-content": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a readable success of neutral if not specified",
          "title": "Success-content"
        },
        "warning": {
          "type": "string",
          "format": "color",
          "default": "#FFF8E6",
          "title": "Warning"
        },
        "warning-content": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a readable tone of warning if not specified",
          "title": "Warning-content"
        },
        "error": {
          "type": "string",
          "format": "color",
          "default": "#FFE9E5",
          "title": "Error"
        },
        "error-content": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a readable tone of error if not specified",
          "title": "Error-content"
        },
        "info": {
          "type": "string",
          "format": "color",
          "default": "#F0F5FF",
          "title": "Info"
        },
        "info-content": {
          "type": [
            "string",
            "null"
          ],
          "format": "color",
          "description": "Will be a readable tone of info if not specified",
          "title": "Info-content"
        }
      },
      "required": [
        "primary",
        "secondary",
        "accent",
        "neutral",
        "base-100",
        "success",
        "warning",
        "error",
        "info"
      ],
      "title": "Colors"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Rlc2lnblN5c3RlbS50c3g=@Miscellaneous": {
      "type": "object",
      "properties": {
        "--rounded-box": {
          "type": "string",
          "default": "1rem",
          "title": "--rounded-box",
          "description": "border radius rounded-box utility class, used in card and other large boxes"
        },
        "--rounded-btn": {
          "type": "string",
          "default": "0.5rem",
          "title": "--rounded-btn",
          "description": "border radius rounded-btn utility class, used in buttons and similar element"
        },
        "--rounded-badge": {
          "type": "string",
          "default": "1.9rem",
          "title": "--rounded-badge",
          "description": "border radius rounded-badge utility class, used in badges and similar"
        },
        "--animation-btn": {
          "type": "string",
          "default": "0.25s",
          "title": "--animation-btn",
          "description": "duration of animation when you click on button"
        },
        "--animation-input": {
          "type": "string",
          "default": "0.2s",
          "title": "--animation-input",
          "description": "duration of animation for inputs like checkbox, toggle, radio, etc"
        },
        "--btn-text-case": {
          "type": "string",
          "default": "uppercase",
          "title": "--btn-text-case",
          "description": "set default text transform for buttons"
        },
        "--btn-focus-scale": {
          "type": "string",
          "default": "0.95",
          "title": "--btn-focus-scale",
          "description": "scale transform of button when you focus on it"
        },
        "--border-btn": {
          "type": "string",
          "default": "1px",
          "title": "--border-btn",
          "description": "border width of buttons"
        },
        "--tab-border": {
          "type": "string",
          "default": "1px",
          "title": "--tab-border",
          "description": "border width of tabs"
        },
        "--tab-radius": {
          "type": "string",
          "default": "0.5rem",
          "title": "--tab-radius",
          "description": "border radius of tabs"
        }
      },
      "required": [
        "--rounded-box",
        "--rounded-btn",
        "--rounded-badge",
        "--animation-btn",
        "--animation-input",
        "--btn-text-case",
        "--btn-focus-scale",
        "--border-btn",
        "--tab-border",
        "--tab-radius"
      ],
      "title": "Miscellaneous"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Rlc2lnblN5c3RlbS50c3g=@Font": {
      "type": "object",
      "properties": {
        "fontFamily": {
          "type": "string",
          "default": "'Albert Sans'",
          "title": "Font Family"
        },
        "styleInnerHtml": {
          "type": "string",
          "title": "Style Inner Html"
        }
      },
      "required": [
        "fontFamily",
        "styleInnerHtml"
      ],
      "title": "Font"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Rlc2lnblN5c3RlbS50c3g=@Props": {
      "type": "object",
      "properties": {
        "colors": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Rlc2lnblN5c3RlbS50c3g=@Colors",
          "title": "Colors"
        },
        "miscellaneous": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Rlc2lnblN5c3RlbS50c3g=@Miscellaneous",
          "title": "Miscellaneous"
        },
        "fonts": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Rlc2lnblN5c3RlbS50c3g=@Font",
          "title": "Fonts"
        }
      },
      "required": [],
      "title": "deco-sites/fashion/sections/DesignSystem.tsx@Props"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvRmVhdHVyZXMudHN4@Feature": {
      "type": "object",
      "properties": {
        "icon": {
          "anyOf": [
            {
              "type": "string",
              "const": "ChevronLeft"
            },
            {
              "type": "string",
              "const": "ChevronRight"
            },
            {
              "type": "string",
              "const": "ChevronUp"
            },
            {
              "type": "string",
              "const": "ChevronDown"
            },
            {
              "type": "string",
              "const": "QuestionMarkCircle"
            },
            {
              "type": "string",
              "const": "User"
            },
            {
              "type": "string",
              "const": "ShoppingCart"
            },
            {
              "type": "string",
              "const": "Bars3"
            },
            {
              "type": "string",
              "const": "Heart"
            },
            {
              "type": "string",
              "const": "MagnifyingGlass"
            },
            {
              "type": "string",
              "const": "XMark"
            },
            {
              "type": "string",
              "const": "Plus"
            },
            {
              "type": "string",
              "const": "Minus"
            },
            {
              "type": "string",
              "const": "MapPin"
            },
            {
              "type": "string",
              "const": "Phone"
            },
            {
              "type": "string",
              "const": "Elo"
            },
            {
              "type": "string",
              "const": "Mastercard"
            },
            {
              "type": "string",
              "const": "Visa"
            },
            {
              "type": "string",
              "const": "Pix"
            },
            {
              "type": "string",
              "const": "Logo"
            },
            {
              "type": "string",
              "const": "Facebook"
            },
            {
              "type": "string",
              "const": "Instagram"
            },
            {
              "type": "string",
              "const": "Tiktok"
            },
            {
              "type": "string",
              "const": "Truck"
            },
            {
              "type": "string",
              "const": "Discount"
            },
            {
              "type": "string",
              "const": "Return"
            },
            {
              "type": "string",
              "const": "CreditCard"
            },
            {
              "type": "string",
              "const": "Deco"
            },
            {
              "type": "string",
              "const": "Discord"
            },
            {
              "type": "string",
              "const": "Trash"
            },
            {
              "type": "string",
              "const": "FilterList"
            },
            {
              "type": "string",
              "const": "WhatsApp"
            },
            {
              "type": "string",
              "const": "ArrowsPointingOut"
            }
          ],
          "type": "string",
          "description": "Image src",
          "title": "Icon"
        },
        "title": {
          "type": "string",
          "description": "Title",
          "title": "Title"
        },
        "description": {
          "type": "string",
          "description": "Description and Image alt text",
          "title": "Description"
        }
      },
      "required": [
        "icon",
        "title",
        "description"
      ],
      "title": "Feature"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvRmVhdHVyZXMudHN4@Feature[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvRmVhdHVyZXMudHN4@Feature"
      },
      "title": "Feature[]"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvRmVhdHVyZXMudHN4@Props": {
      "type": "object",
      "properties": {
        "features": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvRmVhdHVyZXMudHN4@Feature[]",
          "title": "Features"
        }
      },
      "required": [
        "features"
      ],
      "title": "deco-sites/fashion/components/ui/Features.tsx@Props"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@StringItem": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "title": "Label"
        },
        "href": {
          "type": "string",
          "title": "Href"
        }
      },
      "required": [
        "label",
        "href"
      ],
      "title": "StringItem"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@IconItem": {
      "type": "object",
      "properties": {
        "icon": {
          "anyOf": [
            {
              "type": "string",
              "const": "ChevronLeft"
            },
            {
              "type": "string",
              "const": "ChevronRight"
            },
            {
              "type": "string",
              "const": "ChevronUp"
            },
            {
              "type": "string",
              "const": "ChevronDown"
            },
            {
              "type": "string",
              "const": "QuestionMarkCircle"
            },
            {
              "type": "string",
              "const": "User"
            },
            {
              "type": "string",
              "const": "ShoppingCart"
            },
            {
              "type": "string",
              "const": "Bars3"
            },
            {
              "type": "string",
              "const": "Heart"
            },
            {
              "type": "string",
              "const": "MagnifyingGlass"
            },
            {
              "type": "string",
              "const": "XMark"
            },
            {
              "type": "string",
              "const": "Plus"
            },
            {
              "type": "string",
              "const": "Minus"
            },
            {
              "type": "string",
              "const": "MapPin"
            },
            {
              "type": "string",
              "const": "Phone"
            },
            {
              "type": "string",
              "const": "Elo"
            },
            {
              "type": "string",
              "const": "Mastercard"
            },
            {
              "type": "string",
              "const": "Visa"
            },
            {
              "type": "string",
              "const": "Pix"
            },
            {
              "type": "string",
              "const": "Logo"
            },
            {
              "type": "string",
              "const": "Facebook"
            },
            {
              "type": "string",
              "const": "Instagram"
            },
            {
              "type": "string",
              "const": "Tiktok"
            },
            {
              "type": "string",
              "const": "Truck"
            },
            {
              "type": "string",
              "const": "Discount"
            },
            {
              "type": "string",
              "const": "Return"
            },
            {
              "type": "string",
              "const": "CreditCard"
            },
            {
              "type": "string",
              "const": "Deco"
            },
            {
              "type": "string",
              "const": "Discord"
            },
            {
              "type": "string",
              "const": "Trash"
            },
            {
              "type": "string",
              "const": "FilterList"
            },
            {
              "type": "string",
              "const": "WhatsApp"
            },
            {
              "type": "string",
              "const": "ArrowsPointingOut"
            }
          ],
          "type": "string",
          "title": "Icon"
        }
      },
      "required": [
        "icon"
      ],
      "title": "IconItem"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@IconItem|StringItem": {
      "anyOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@StringItem"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@IconItem"
        }
      ],
      "title": "IconItem|StringItem"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@IconItem|StringItem[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@IconItem|StringItem"
      },
      "title": "IconItem|StringItem[]"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@Section": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "title": "Label"
        },
        "children": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@IconItem|StringItem[]",
          "title": "Children"
        }
      },
      "required": [
        "label",
        "children"
      ],
      "title": "Section"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@Section[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@Section"
      },
      "title": "Section[]"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@Props": {
      "type": "object",
      "properties": {
        "sections": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@Section[]",
          "title": "Sections"
        }
      },
      "required": [],
      "title": "deco-sites/fashion/components/footer/Footer.tsx@Props"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaGJhci50c3g=@EditableProps": {
      "type": "object",
      "properties": {
        "placeholder": {
          "type": [
            "string",
            "null"
          ],
          "title": "Placeholder",
          "description": "Search bar default placeholder message",
          "default": "What are you looking for?"
        },
        "action": {
          "type": [
            "string",
            "null"
          ],
          "title": "Action",
          "description": "When user clicks on the search button, navigate it to",
          "default": "/s"
        },
        "name": {
          "type": [
            "string",
            "null"
          ],
          "title": "Name",
          "description": "Querystring param used when navigating the user",
          "default": "q"
        },
        "query": {
          "type": [
            "string",
            "null"
          ],
          "title": "Query"
        }
      },
      "required": [],
      "title": "EditableProps"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci50c3g=@NavItem": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "title": "Label"
        },
        "href": {
          "type": "string",
          "title": "Href"
        },
        "children": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "label": {
                "type": "string",
                "title": "Label"
              },
              "href": {
                "type": "string",
                "title": "Href"
              },
              "children": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "label": {
                      "type": "string",
                      "title": "Label"
                    },
                    "href": {
                      "type": "string",
                      "title": "Href"
                    }
                  },
                  "required": [
                    "label",
                    "href"
                  ]
                },
                "title": "Children"
              }
            },
            "required": [
              "label",
              "href"
            ]
          },
          "title": "Children"
        },
        "image": {
          "type": "object",
          "properties": {
            "src": {
              "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy90eXBlcy50cw==@Image",
              "title": "Src"
            },
            "alt": {
              "type": [
                "string",
                "null"
              ],
              "title": "Alt"
            }
          },
          "required": [],
          "title": "Image"
        }
      },
      "required": [
        "label",
        "href"
      ],
      "title": "NavItem"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci50c3g=@NavItem[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci50c3g=@NavItem"
      },
      "title": "NavItem[]"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci50c3g=@Props": {
      "type": "object",
      "properties": {
        "alerts": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "title": "Alerts"
        },
        "searchbar": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaGJhci50c3g=@EditableProps",
          "title": "Searchbar"
        },
        "navItems": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci50c3g=@NavItem[]",
          "title": "Nav Items",
          "description": "Navigation items used both on mobile and desktop menus"
        },
        "products": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Product[]|null",
          "title": "Products",
          "description": "Product suggestions displayed on search"
        },
        "suggestions": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Suggestion|null",
          "title": "Suggestions"
        }
      },
      "required": [
        "alerts"
      ],
      "title": "deco-sites/fashion/components/header/Header.tsx@Props"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvSGlnaGxpZ2h0cy50c3g=@Highlight": {
      "type": "object",
      "properties": {
        "src": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy90eXBlcy50cw==@Image",
          "title": "Src"
        },
        "alt": {
          "type": "string",
          "title": "Alt"
        },
        "href": {
          "type": "string",
          "title": "Href"
        },
        "label": {
          "type": "string",
          "title": "Label"
        }
      },
      "required": [
        "src",
        "alt",
        "href",
        "label"
      ],
      "title": "Highlight"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvSGlnaGxpZ2h0cy50c3g=@Highlight[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvSGlnaGxpZ2h0cy50c3g=@Highlight"
      },
      "title": "Highlight[]"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvSGlnaGxpZ2h0cy50c3g=@Props": {
      "type": "object",
      "properties": {
        "highlights": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvSGlnaGxpZ2h0cy50c3g=@Highlight[]",
          "title": "Highlights"
        },
        "title": {
          "type": "string",
          "title": "Title"
        }
      },
      "required": [
        "title"
      ],
      "title": "deco-sites/fashion/components/ui/Highlights.tsx@Props"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvTGlua1RyZWUudHN4@Link": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "title": "Label"
        },
        "href": {
          "type": "string",
          "title": "Href"
        }
      },
      "required": [
        "label",
        "href"
      ],
      "title": "Link"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvTGlua1RyZWUudHN4@Link[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvTGlua1RyZWUudHN4@Link"
      },
      "title": "Link[]"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvTGlua1RyZWUudHN4@Social": {
      "type": "object",
      "properties": {
        "label": {
          "anyOf": [
            {
              "type": "string",
              "const": "Instagram"
            },
            {
              "type": "string",
              "const": "Facebook"
            }
          ],
          "type": "string",
          "title": "Label"
        },
        "href": {
          "type": "string",
          "title": "Href"
        }
      },
      "required": [
        "label",
        "href"
      ],
      "title": "Social"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvTGlua1RyZWUudHN4@Social[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvTGlua1RyZWUudHN4@Social"
      },
      "title": "Social[]"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvTGlua1RyZWUudHN4@Props": {
      "type": "object",
      "properties": {
        "title": {
          "type": [
            "string",
            "null"
          ],
          "title": "Title"
        },
        "description": {
          "type": [
            "string",
            "null"
          ],
          "title": "Description"
        },
        "links": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvTGlua1RyZWUudHN4@Link[]",
          "title": "Links"
        },
        "bgImage": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy90eXBlcy50cw==@Image",
          "title": "Bg Image"
        },
        "avatar": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy90eXBlcy50cw==@Image",
          "title": "Avatar"
        },
        "social": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvTGlua1RyZWUudHN4@Social[]",
          "title": "Social"
        }
      },
      "required": [],
      "title": "deco-sites/fashion/components/ui/LinkTree.tsx@Props"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0RGV0YWlscy50c3g=@Props": {
      "type": "object",
      "properties": {
        "page": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductDetailsPage|null",
          "title": "Page"
        },
        "variant": {
          "anyOf": [
            {
              "type": "string",
              "const": "front-back"
            },
            {
              "type": "string",
              "const": "slider"
            },
            {
              "type": "string",
              "const": "auto"
            }
          ],
          "type": "string",
          "title": "Variant",
          "description": "Ask for the developer to remove this option since this is here to help development only and should not be used in production"
        }
      },
      "required": [
        "page"
      ],
      "title": "deco-sites/fashion/components/product/ProductDetails.tsx@Props"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0U2hlbGYudHN4@Props": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "title": "Title"
        },
        "products": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@Product[]|null",
          "title": "Products"
        },
        "itemsPerPage": {
          "type": [
            "number",
            "null"
          ],
          "title": "Items Per Page"
        }
      },
      "required": [
        "title",
        "products"
      ],
      "title": "deco-sites/fashion/components/product/ProductShelf.tsx@Props"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0R2FsbGVyeS50c3g=@Columns": {
      "type": "object",
      "properties": {
        "mobile": {
          "type": [
            "number",
            "null"
          ],
          "title": "Mobile"
        },
        "desktop": {
          "type": [
            "number",
            "null"
          ],
          "title": "Desktop"
        }
      },
      "required": [],
      "title": "Columns"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaFJlc3VsdC50c3g=@Props": {
      "type": "object",
      "properties": {
        "page": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage|null",
          "title": "Page"
        },
        "variant": {
          "anyOf": [
            {
              "type": "string",
              "const": "aside"
            },
            {
              "type": "string",
              "const": "drawer"
            }
          ],
          "type": "string",
          "description": "Use drawer for mobile like behavior on desktop. Aside for rendering the filters alongside the products",
          "title": "Variant"
        },
        "columns": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0R2FsbGVyeS50c3g=@Columns",
          "description": "Number of products per line on grid",
          "title": "Columns"
        }
      },
      "required": [
        "page",
        "columns"
      ],
      "title": "deco-sites/fashion/components/search/SearchResult.tsx@Props"
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvV2hhdHNBcHAudHN4@Props": {
      "type": "object",
      "properties": {
        "phone": {
          "type": [
            "number",
            "null"
          ],
          "title": "Phone"
        }
      },
      "required": [],
      "title": "deco-sites/fashion/components/ui/WhatsApp.tsx@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy9BbmFseXRpY3MudHN4@Props": {
      "type": "object",
      "properties": {
        "trackingIds": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "google tag manager container id. For more info: https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation .",
          "title": "Tracking Ids"
        }
      },
      "required": [],
      "title": "deco-sites/std/components/Analytics.tsx@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL2NsaWVudC50cw==@Locale": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "title": "Label"
        },
        "authToken": {
          "type": "string",
          "title": "Auth Token"
        }
      },
      "required": [
        "label",
        "authToken"
      ],
      "title": "Locale"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL2NsaWVudC50cw==@Locale[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL2NsaWVudC50cw==@Locale"
      },
      "title": "Locale[]"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL2NsaWVudC50cw==@ConfigButterCMS": {
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL2FjY291bnQudHM=@Account"
        }
      ],
      "properties": {
        "locales": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL2NsaWVudC50cw==@Locale[]",
          "title": "Locales"
        },
        "defaultLocale": {
          "type": "string",
          "description": "Default value: en-us",
          "default": "en-us",
          "title": "Default Locale"
        },
        "apiVersion": {
          "type": [
            "string",
            "null"
          ],
          "description": "Default value: v2",
          "default": "v2",
          "title": "Api Version"
        }
      },
      "required": [
        "locales",
        "defaultLocale"
      ],
      "title": "deco-sites/std/commerce/butterCMS/client.ts@ConfigButterCMS"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy9zZW8vU0VPQmFzZS50c3g=@Props": {
      "type": "object",
      "properties": {
        "title": {
          "type": [
            "string",
            "null"
          ],
          "title": "Title"
        },
        "description": {
          "type": [
            "string",
            "null"
          ],
          "title": "Description"
        },
        "canonical": {
          "type": [
            "string",
            "null"
          ],
          "title": "Canonical",
          "default": "https://example.com"
        },
        "imageUrl": {
          "type": [
            "string",
            "null"
          ],
          "title": "Image Url"
        },
        "themeColor": {
          "type": [
            "string",
            "null"
          ],
          "title": "Theme Color"
        }
      },
      "required": [],
      "title": "deco-sites/std/components/seo/SEOBase.tsx@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy9zZW8vU0VPUERQLnRzeA==@Props": {
      "type": "object",
      "properties": {
        "page": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductDetailsPage|null",
          "title": "Page"
        },
        "titleTemplate": {
          "type": "string",
          "title": "Title Template",
          "description": "add a %s whenever you want it to be replaced with the product name",
          "default": "%s | Fashion Store"
        },
        "description": {
          "type": [
            "string",
            "null"
          ],
          "title": "Description",
          "description": "If not set, the product description will be used instead"
        },
        "themeColor": {
          "type": [
            "string",
            "null"
          ],
          "title": "Theme Color"
        }
      },
      "required": [
        "page",
        "titleTemplate"
      ],
      "title": "deco-sites/std/components/seo/SEOPDP.tsx@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy9zZW8vU0VPUExQLnRzeA==@Props": {
      "type": "object",
      "properties": {
        "page": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage|null",
          "title": "Page"
        },
        "title": {
          "type": [
            "string",
            "null"
          ],
          "title": "Title"
        },
        "description": {
          "type": [
            "string",
            "null"
          ],
          "title": "Description"
        },
        "url": {
          "type": [
            "string",
            "null"
          ],
          "title": "Url"
        },
        "imageUrl": {
          "type": [
            "string",
            "null"
          ],
          "title": "Image Url"
        },
        "themeColor": {
          "type": [
            "string",
            "null"
          ],
          "title": "Theme Color"
        }
      },
      "required": [
        "page"
      ],
      "title": "deco-sites/std/components/seo/SEOPLP.tsx@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hEYXRlLnRz@Props": {
      "type": "object",
      "properties": {
        "start": {
          "type": [
            "string",
            "null"
          ],
          "format": "date-time",
          "title": "Start"
        },
        "end": {
          "type": [
            "string",
            "null"
          ],
          "format": "date-time",
          "title": "End"
        }
      },
      "required": [],
      "title": "/Users/marcoscandeia/workspace/live/matchers/MatchDate.ts@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hFbnZpcm9ubWVudC50cw==@Props": {
      "type": "object",
      "properties": {
        "environment": {
          "anyOf": [
            {
              "type": "string",
              "const": "production"
            },
            {
              "type": "string",
              "const": "development"
            }
          ],
          "type": "string",
          "title": "Environment"
        }
      },
      "required": [
        "environment"
      ],
      "title": "/Users/marcoscandeia/workspace/live/matchers/MatchEnvironment.ts@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hIb3N0LnRz@Props": {
      "type": "object",
      "properties": {
        "includes": {
          "type": [
            "string",
            "null"
          ],
          "title": "Includes"
        },
        "match": {
          "type": [
            "string",
            "null"
          ],
          "title": "Match"
        }
      },
      "required": [],
      "title": "/Users/marcoscandeia/workspace/live/matchers/MatchHost.ts@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL21hdGNoZXIudHM=@Matcher": {
      "$ref": "#/root/matchers",
      "title": "Matcher"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL21hdGNoZXIudHM=@Matcher[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL21hdGNoZXIudHM=@Matcher"
      },
      "title": "Matcher[]"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hNdWx0aS50cw==@Props": {
      "type": "object",
      "properties": {
        "op": {
          "anyOf": [
            {
              "type": "string",
              "const": "or"
            },
            {
              "type": "string",
              "const": "and"
            }
          ],
          "type": "string",
          "title": "Op"
        },
        "matchers": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL21hdGNoZXIudHM=@Matcher[]",
          "title": "Matchers"
        }
      },
      "required": [
        "op",
        "matchers"
      ],
      "title": "/Users/marcoscandeia/workspace/live/matchers/MatchMulti.ts@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hSYW5kb20udHM=@Props": {
      "type": "object",
      "properties": {
        "traffic": {
          "type": "number",
          "title": "Traffic"
        }
      },
      "required": [
        "traffic"
      ],
      "title": "/Users/marcoscandeia/workspace/live/matchers/MatchRandom.ts@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hTaXRlLnRz@Props": {
      "type": "object",
      "properties": {
        "siteId": {
          "type": "number",
          "title": "Site Id"
        }
      },
      "required": [
        "siteId"
      ],
      "title": "/Users/marcoscandeia/workspace/live/matchers/MatchSite.ts@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hVc2VyQWdlbnQudHM=@Props": {
      "type": "object",
      "properties": {
        "includes": {
          "type": [
            "string",
            "null"
          ],
          "title": "Includes"
        },
        "match": {
          "type": [
            "string",
            "null"
          ],
          "title": "Match"
        }
      },
      "required": [],
      "title": "/Users/marcoscandeia/workspace/live/matchers/MatchUserAgent.ts@Props"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Override": {
      "type": "object",
      "properties": {
        "use": {
          "type": "string",
          "title": "Use"
        },
        "insteadOf": {
          "type": "string",
          "title": "Instead Of"
        }
      },
      "required": [
        "use",
        "insteadOf"
      ],
      "title": "Override"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Override[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Override"
      },
      "title": "Override[]"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Audience": {
      "type": "object",
      "properties": {
        "matcher": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL21hdGNoZXIudHM=@Matcher",
          "title": "Matcher"
        },
        "name": {
          "type": "string",
          "title": "Name"
        },
        "routes": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Route[]",
          "title": "Routes"
        },
        "overrides": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Override[]",
          "title": "Overrides"
        }
      },
      "required": [
        "matcher",
        "name"
      ],
      "title": "/Users/marcoscandeia/workspace/live/flags/audience.ts@Audience"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvZXZlcnlvbmUudHM=@EveryoneConfig": {
      "type": "object",
      "properties": {
        "routes": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Route[]",
          "title": "Routes"
        },
        "overrides": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Override[]",
          "title": "Overrides"
        }
      },
      "required": [],
      "title": "/Users/marcoscandeia/workspace/live/flags/everyone.ts@EveryoneConfig"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@Item": {
      "type": "object",
      "properties": {
        "quantity": {
          "type": "number",
          "title": "Quantity"
        },
        "seller": {
          "type": "string",
          "title": "Seller"
        },
        "id": {
          "type": "string",
          "title": "Id"
        },
        "index": {
          "type": [
            "number",
            "null"
          ],
          "title": "Index"
        },
        "price": {
          "type": [
            "number",
            "null"
          ],
          "title": "Price"
        }
      },
      "required": [
        "quantity",
        "seller",
        "id"
      ],
      "title": "Item"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@Item[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@Item"
      },
      "title": "Item[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@Props": {
      "type": "object",
      "properties": {
        "orderItems": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@Item[]",
          "title": "Order Items"
        },
        "allowedOutdatedData": {
          "type": "array",
          "items": {
            "type": "string",
            "const": "paymentData"
          },
          "title": "Allowed Outdated Data"
        }
      },
      "required": [
        "orderItems"
      ],
      "title": "deco-sites/std/packs/vtex/actions/cart/addItems.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvZ2V0SW5zdGFsbG1lbnQudHM=@Props": {
      "type": "object",
      "properties": {
        "paymentSystem": {
          "type": "number",
          "title": "Payment System"
        }
      },
      "required": [
        "paymentSystem"
      ],
      "title": "deco-sites/std/packs/vtex/actions/cart/getInstallment.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvcmVtb3ZlSXRlbUF0dGFjaG1lbnQudHM=@Props": {
      "type": "object",
      "properties": {
        "index": {
          "type": "number",
          "description": "index of the item in the cart.items array you want to edit",
          "title": "Index"
        },
        "attachment": {
          "type": "string",
          "description": "attachment name",
          "title": "Attachment"
        },
        "content": {
          "title": "Content",
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "expectedOrderFormSections": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "title": "Expected Order Form Sections"
        },
        "noSplitItem": {
          "type": [
            "boolean",
            "null"
          ],
          "title": "No Split Item"
        }
      },
      "required": [
        "index",
        "attachment",
        "content"
      ],
      "title": "deco-sites/std/packs/vtex/actions/cart/removeItemAttachment.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvc2ltdWxhdGlvbi50cw==@Item": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "title": "Id"
        },
        "quantity": {
          "type": "number",
          "title": "Quantity"
        },
        "seller": {
          "type": "string",
          "title": "Seller"
        }
      },
      "required": [
        "id",
        "quantity",
        "seller"
      ],
      "title": "Item"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvc2ltdWxhdGlvbi50cw==@Item[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvc2ltdWxhdGlvbi50cw==@Item"
      },
      "title": "Item[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvc2ltdWxhdGlvbi50cw==@Props": {
      "type": "object",
      "properties": {
        "items": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvc2ltdWxhdGlvbi50cw==@Item[]",
          "title": "Items"
        },
        "postalCode": {
          "type": "string",
          "title": "Postal Code"
        },
        "country": {
          "type": "string",
          "title": "Country"
        }
      },
      "required": [
        "items",
        "postalCode",
        "country"
      ],
      "title": "deco-sites/std/packs/vtex/actions/cart/simulation.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlQXR0YWNobWVudC50cw==@Props": {
      "type": "object",
      "properties": {
        "attachment": {
          "type": "string",
          "title": "Attachment"
        },
        "expectedOrderFormSections": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "title": "Expected Order Form Sections"
        },
        "body": {
          "type": "object",
          "title": "Body"
        }
      },
      "required": [
        "attachment",
        "body"
      ],
      "title": "deco-sites/std/packs/vtex/actions/cart/updateAttachment.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlQ291cG9ucy50cw==@Props": {
      "type": "object",
      "properties": {
        "text": {
          "type": "string",
          "title": "Text"
        }
      },
      "required": [
        "text"
      ],
      "title": "deco-sites/std/packs/vtex/actions/cart/updateCoupons.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbUF0dGFjaG1lbnQudHM=@Props": {
      "type": "object",
      "properties": {
        "index": {
          "type": "number",
          "description": "index of the item in the cart.items array you want to edit",
          "title": "Index"
        },
        "attachment": {
          "type": "string",
          "description": "attachment name",
          "title": "Attachment"
        },
        "content": {
          "title": "Content",
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "expectedOrderFormSections": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "title": "Expected Order Form Sections"
        },
        "noSplitItem": {
          "type": [
            "boolean",
            "null"
          ],
          "title": "No Split Item"
        }
      },
      "required": [
        "index",
        "attachment",
        "content"
      ],
      "title": "deco-sites/std/packs/vtex/actions/cart/updateItemAttachment.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbVByaWNlLnRz@Props": {
      "type": "object",
      "properties": {
        "itemIndex": {
          "type": "number",
          "title": "Item Index"
        },
        "price": {
          "type": "number",
          "title": "Price"
        }
      },
      "required": [
        "itemIndex",
        "price"
      ],
      "title": "deco-sites/std/packs/vtex/actions/cart/updateItemPrice.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@Item": {
      "type": "object",
      "properties": {
        "quantity": {
          "type": "number",
          "title": "Quantity"
        },
        "index": {
          "type": "number",
          "title": "Index"
        }
      },
      "required": [
        "quantity",
        "index"
      ],
      "title": "Item"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@Item[]": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@Item"
      },
      "title": "Item[]"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@Props": {
      "type": "object",
      "properties": {
        "orderItems": {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@Item[]",
          "title": "Order Items"
        },
        "allowedOutdatedData": {
          "type": "array",
          "items": {
            "type": "string",
            "const": "paymentData"
          },
          "title": "Allowed Outdated Data"
        }
      },
      "required": [
        "orderItems"
      ],
      "title": "deco-sites/std/packs/vtex/actions/cart/updateItems.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlUHJvZmlsZS50cw==@Props": {
      "type": "object",
      "properties": {
        "ignoreProfileData": {
          "type": "boolean",
          "title": "Ignore Profile Data"
        }
      },
      "required": [
        "ignoreProfileData"
      ],
      "title": "deco-sites/std/packs/vtex/actions/cart/updateProfile.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL3dpc2hsaXN0L2FkZEl0ZW0udHM=@Props": {
      "type": "object",
      "properties": {
        "productId": {
          "type": "string",
          "title": "Product Id"
        },
        "sku": {
          "type": "string",
          "title": "Sku"
        }
      },
      "required": [
        "productId",
        "sku"
      ],
      "title": "deco-sites/std/packs/vtex/actions/wishlist/addItem.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL3dpc2hsaXN0L3JlbW92ZUl0ZW0udHM=@Props": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        }
      },
      "required": [
        "id"
      ],
      "title": "deco-sites/std/packs/vtex/actions/wishlist/removeItem.ts@Props"
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU0Fkcy50cw==": {
      "title": "Butter CMS Featured Ads Loader",
      "description": "Usefull for shelves and static galleries.",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/butterCMSAds.ts"
          ],
          "default": "deco-sites/std/functions/butterCMSAds.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU0JyYW5kcy50cw==": {
      "title": "Butter CMS Featured Brands Loader",
      "description": "Usefull for list featured blog's brands.",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/butterCMSBrands.ts"
          ],
          "default": "deco-sites/std/functions/butterCMSBrands.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU0NhdGVnb3JpZXMudHM=": {
      "title": "Butter CMS Categories Loader",
      "description": "Usefull for list blog's categories",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/butterCMSCategories.ts"
          ],
          "default": "deco-sites/std/functions/butterCMSCategories.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU0ZlYXR1cmVkUG9zdHMudHM=": {
      "title": "Butter CMS Featured Posts Loader",
      "description": "Usefull for shelves and static galleries.",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/butterCMSFeaturedPosts.ts"
          ],
          "default": "deco-sites/std/functions/butterCMSFeaturedPosts.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1BhZ2UudHM=": {
      "title": "Butter CMS Page Loader",
      "description": "Works com any page to retrive page informations like title or breadcrumb",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/butterCMSPage.ts"
          ],
          "default": "deco-sites/std/functions/butterCMSPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1BsYWNlcy50cw==": {
      "title": "Butter CMS Featured Places Loader",
      "description": "Usefull for listing places",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/butterCMSPlaces.ts"
          ],
          "default": "deco-sites/std/functions/butterCMSPlaces.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1Bvc3REZXRhaWwudHM=": {
      "title": "Butter CMS Post Detail Loader",
      "description": "Works on routes of type /blog/:slug",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/butterCMSPostDetail.ts"
          ],
          "default": "deco-sites/std/functions/butterCMSPostDetail.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1Bvc3RzLnRz": {
      "title": "Butter CMS Posts Loader",
      "description": "Usefull for paginated galleries.",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1Bvc3RzLnRz@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/butterCMSPosts.ts"
          ],
          "default": "deco-sites/std/functions/butterCMSPosts.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1JlbGF0ZWRQb3N0cy50cw==": {
      "title": "Butter CMS Related Posts Loader",
      "description": "Usefull for paginated or not galleries. Works on routes of type /blog/:slug",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1JlbGF0ZWRQb3N0cy50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/butterCMSRelatedPosts.ts"
          ],
          "default": "deco-sites/std/functions/butterCMSRelatedPosts.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL29jY1Byb2R1Y3REZXRhaWxzUGFnZS50cw==": {
      "title": "Oracle Commerce Cloud Product Page Loader",
      "description": "Works on routes of type /:slug/p",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/occProductDetailsPage.ts"
          ],
          "default": "deco-sites/std/functions/occProductDetailsPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3JlcXVlc3RUb1BhcmFtLnRz": {
      "title": "Get params from request parameters",
      "description": "Set param to slug for routes of type /:slug",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3JlcXVlc3RUb1BhcmFtLnRz@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/requestToParam.ts"
          ],
          "default": "deco-sites/std/functions/requestToParam.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Nob3BpZnlQcm9kdWN0RGV0YWlsc1BhZ2UudHM=": {
      "title": "Shopify Product Page Loader",
      "description": "Works on routes of type /:slug/p",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/shopifyProductDetailsPage.ts"
          ],
          "default": "deco-sites/std/functions/shopifyProductDetailsPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Nob3BpZnlQcm9kdWN0TGlzdC50cw==": {
      "title": "Product list loader",
      "description": "Usefull for shelves and static galleries.",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Nob3BpZnlQcm9kdWN0TGlzdC50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/shopifyProductList.ts"
          ],
          "default": "deco-sites/std/functions/shopifyProductList.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Nob3BpZnlQcm9kdWN0TGlzdGluZ1BhZ2UudHM=": {
      "title": "Product listing page loader",
      "description": "Returns data ready for search pages like category,brand pages",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Nob3BpZnlQcm9kdWN0TGlzdGluZ1BhZ2UudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/shopifyProductListingPage.ts"
          ],
          "default": "deco-sites/std/functions/shopifyProductListingPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3ZuZGFQcm9kdWN0RGV0YWlsc1BhZ2UudHM=": {
      "title": "VTEX Product Page Loader",
      "description": "Works on routes of type /:slug/p",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vndaProductDetailsPage.ts"
          ],
          "default": "deco-sites/std/functions/vndaProductDetailsPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3ZuZGFQcm9kdWN0TGlzdC50cw==": {
      "title": "Product list loader",
      "description": "Usefull for shelves and static galleries.",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3ZuZGFQcm9kdWN0TGlzdC50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vndaProductList.ts"
          ],
          "default": "deco-sites/std/functions/vndaProductList.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3ZuZGFQcm9kdWN0TGlzdGluZ1BhZ2UudHM=": {
      "title": "Product listing page loader",
      "description": "Returns data ready for search pages like category,brand pages",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3ZuZGFQcm9kdWN0TGlzdGluZ1BhZ2UudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vndaProductListingPage.ts"
          ],
          "default": "deco-sites/std/functions/vndaProductListingPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lQcm9kdWN0RGV0YWlsc1BhZ2UudHM=": {
      "title": "VTEX product details page - legacy (deprecated)",
      "description": "Works on routes of type /:slug/p",
      "deprecated": true,
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts"
          ],
          "default": "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lQcm9kdWN0TGlzdC50cw==": {
      "title": "VTEX product list - legacy (deprecated)",
      "description": "Usefull for shelves and static galleries.",
      "deprecated": true,
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lQcm9kdWN0TGlzdC50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vtexLegacyProductList.ts"
          ],
          "default": "deco-sites/std/functions/vtexLegacyProductList.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lQcm9kdWN0TGlzdGluZ1BhZ2UudHM=": {
      "title": "VTEX product listing page - legacy (deprecated)",
      "description": "Returns data ready for search pages like category,brand pages",
      "deprecated": true,
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdGluZ1BhZ2UudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vtexLegacyProductListingPage.ts"
          ],
          "default": "deco-sites/std/functions/vtexLegacyProductListingPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lSZWxhdGVkUHJvZHVjdHNMb2FkZXIudHM=": {
      "title": "VTEX related products - legacy (deprecated)",
      "description": "Works on routes of type /:slug/p",
      "deprecated": true,
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lSZWxhdGVkUHJvZHVjdHNMb2FkZXIudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts"
          ],
          "default": "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhOYXZiYXIudHM=": {
      "title": "deco-sites/std/functions/vtexNavbar.ts",
      "deprecated": true,
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhOYXZiYXIudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vtexNavbar.ts"
          ],
          "default": "deco-sites/std/functions/vtexNavbar.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhQcm9kdWN0RGV0YWlsc1BhZ2UudHM=": {
      "title": "VTEX product details page - Intelligent Search (deprecated)",
      "description": "Works on routes of type /:slug/p",
      "deprecated": true,
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vtexProductDetailsPage.ts"
          ],
          "default": "deco-sites/std/functions/vtexProductDetailsPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhQcm9kdWN0TGlzdC50cw==": {
      "title": "VTEX product list - Intelligent Search (deprecated)",
      "description": "Usefull for shelves and static galleries.",
      "deprecated": true,
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhQcm9kdWN0TGlzdC50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vtexProductList.ts"
          ],
          "default": "deco-sites/std/functions/vtexProductList.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhQcm9kdWN0TGlzdGluZ1BhZ2UudHM=": {
      "title": "VTEX product listing page - Intelligent Search (deprecated)",
      "description": "Returns data ready for search pages like category,brand pages",
      "deprecated": true,
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0aW5nUGFnZS50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vtexProductListingPage.ts"
          ],
          "default": "deco-sites/std/functions/vtexProductListingPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhTdWdnZXN0aW9ucy50cw==": {
      "title": "VTEX search suggestions - Intelligent Search (deprecated)",
      "deprecated": true,
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhTdWdnZXN0aW9ucy50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vtexSuggestions.ts"
          ],
          "default": "deco-sites/std/functions/vtexSuggestions.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhXaXNobGlzdC50cw==": {
      "title": "Product list loader",
      "description": "Usefull for shelves and static galleries.",
      "deprecated": true,
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhXaXNobGlzdC50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/functions/vtexWishlist.ts"
          ],
          "default": "deco-sites/std/functions/vtexWishlist.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWNjb3VudHMvb2NjLnRz": {
      "title": "deco-sites/std/accounts/occ.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2Uvb2NjL2NsaWVudC50cw==@ConfigOCC"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/accounts/occ.ts"
          ],
          "default": "deco-sites/std/accounts/occ.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWNjb3VudHMvc2hvcGlmeS50cw==": {
      "title": "deco-sites/std/accounts/shopify.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2Uvc2hvcGlmeS9jbGllbnQudHM=@ConfigShopify"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/accounts/shopify.ts"
          ],
          "default": "deco-sites/std/accounts/shopify.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWNjb3VudHMvdm5kYS50cw==": {
      "title": "deco-sites/std/accounts/vnda.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2Uvdm5kYS90eXBlcy50cw==@ConfigVNDA"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/accounts/vnda.ts"
          ],
          "default": "deco-sites/std/accounts/vnda.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWNjb3VudHMvdnRleC50cw==": {
      "title": "deco-sites/std/accounts/vtex.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY2NvdW50cy92dGV4LnRz@Account"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/accounts/vtex.ts"
          ],
          "default": "deco-sites/std/accounts/vtex.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWNjb3VudHMveW91clZpZXdzLnRz": {
      "title": "deco-sites/std/accounts/yourViews.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UveW91clZpZXdzL2NsaWVudC50cw==@ConfigYourViews"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/accounts/yourViews.ts"
          ],
          "default": "deco-sites/std/accounts/yourViews.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2NhcnQudHM=": {
      "title": "deco-sites/std/loaders/vtex/cart.ts",
      "docs": "https://developers.vtex.com/docs/api-reference/checkout-api#get-/api/checkout/pub/orderForm",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/loaders/vtex/cart.ts"
          ],
          "default": "deco-sites/std/loaders/vtex/cart.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3REZXRhaWxzUGFnZS50cw==": {
      "title": "VTEX product details page - Intelligent Search",
      "description": "Works on routes of type /:slug/p",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3REZXRhaWxzUGFnZS50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/loaders/vtex/intelligentSearch/productDetailsPage.ts"
          ],
          "default": "deco-sites/std/loaders/vtex/intelligentSearch/productDetailsPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz": {
      "title": "VTEX product list - Intelligent Search",
      "description": "Usefull for shelves and galleries.",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz@partialCollectionProps&partialProductIDProps&partialQueryProps"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/loaders/vtex/intelligentSearch/productList.ts"
          ],
          "default": "deco-sites/std/loaders/vtex/intelligentSearch/productList.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0aW5nUGFnZS50cw==": {
      "title": "VTEX product listing page - Intelligent Search",
      "description": "Returns data ready for search pages like category,brand pages",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0aW5nUGFnZS50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/loaders/vtex/intelligentSearch/productListingPage.ts"
          ],
          "default": "deco-sites/std/loaders/vtex/intelligentSearch/productListingPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2ludGVsbGlnZW50U2VhcmNoL3N1Z2dlc3Rpb25zLnRz": {
      "title": "VTEX search suggestions - Intelligent Search",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2ludGVsbGlnZW50U2VhcmNoL3N1Z2dlc3Rpb25zLnRz@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/loaders/vtex/intelligentSearch/suggestions.ts"
          ],
          "default": "deco-sites/std/loaders/vtex/intelligentSearch/suggestions.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2xlZ2FjeS9wcm9kdWN0RGV0YWlsc1BhZ2UudHM=": {
      "title": "VTEX product details page - Portal",
      "description": "Works on routes of type /:slug/p",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0RGV0YWlsc1BhZ2UudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/loaders/vtex/legacy/productDetailsPage.ts"
          ],
          "default": "deco-sites/std/loaders/vtex/legacy/productDetailsPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2xlZ2FjeS9wcm9kdWN0TGlzdC50cw==": {
      "title": "VTEX product list - Portal",
      "description": "Usefull for shelves and static galleries.",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdC50cw==@partialCollectionProps&partialProductIDProps&partialTermProps"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/loaders/vtex/legacy/productList.ts"
          ],
          "default": "deco-sites/std/loaders/vtex/legacy/productList.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2xlZ2FjeS9wcm9kdWN0TGlzdGluZ1BhZ2UudHM=": {
      "title": "VTEX product listing page - Portal",
      "description": "Returns data ready for search pages like category,brand pages",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9wcm9kdWN0TGlzdGluZ1BhZ2UudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/loaders/vtex/legacy/productListingPage.ts"
          ],
          "default": "deco-sites/std/loaders/vtex/legacy/productListingPage.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2xlZ2FjeS9yZWxhdGVkUHJvZHVjdHNMb2FkZXIudHM=": {
      "title": "VTEX related products - Portal",
      "description": "Works on routes of type /:slug/p",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL2xlZ2FjeS9yZWxhdGVkUHJvZHVjdHNMb2FkZXIudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/loaders/vtex/legacy/relatedProductsLoader.ts"
          ],
          "default": "deco-sites/std/loaders/vtex/legacy/relatedProductsLoader.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L25hdmJhci50cw==": {
      "title": "deco-sites/std/loaders/vtex/navbar.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL25hdmJhci50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/loaders/vtex/navbar.ts"
          ],
          "default": "deco-sites/std/loaders/vtex/navbar.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L3VzZXIudHM=": {
      "title": "deco-sites/std/loaders/vtex/user.ts",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/loaders/vtex/user.ts"
          ],
          "default": "deco-sites/std/loaders/vtex/user.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L3dpc2hsaXN0LnRz": {
      "title": "deco-sites/std/loaders/vtex/wishlist.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9sb2FkZXJzL3dpc2hsaXN0LnRz@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/loaders/vtex/wishlist.ts"
          ],
          "default": "deco-sites/std/loaders/vtex/wishlist.ts"
        }
      }
    },
    "Li9pc2xhbmRzL0FkZFRvQ2FydEJ1dHRvbi50c3g=": {
      "title": "./islands/AddToCartButton.tsx",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "./islands/AddToCartButton.tsx"
          ],
          "default": "./islands/AddToCartButton.tsx"
        }
      }
    },
    "Li9pc2xhbmRzL0hlYWRlckJ1dHRvbi50c3g=": {
      "title": "./islands/HeaderButton.tsx",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "./islands/HeaderButton.tsx"
          ],
          "default": "./islands/HeaderButton.tsx"
        }
      }
    },
    "Li9pc2xhbmRzL0hlYWRlck1vZGFscy50c3g=": {
      "title": "./islands/HeaderModals.tsx",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "./islands/HeaderModals.tsx"
          ],
          "default": "./islands/HeaderModals.tsx"
        }
      }
    },
    "Li9pc2xhbmRzL0hlYWRlclNlYXJjaE1lbnUudHN4": {
      "title": "./islands/HeaderSearchMenu.tsx",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "./islands/HeaderSearchMenu.tsx"
          ],
          "default": "./islands/HeaderSearchMenu.tsx"
        }
      }
    },
    "Li9pc2xhbmRzL1Byb2R1Y3RJbWFnZVpvb20udHN4": {
      "title": "./islands/ProductImageZoom.tsx",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "./islands/ProductImageZoom.tsx"
          ],
          "default": "./islands/ProductImageZoom.tsx"
        }
      }
    },
    "Li9pc2xhbmRzL1NlYXJjaENvbnRyb2xzLnRzeA==": {
      "title": "./islands/SearchControls.tsx",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "./islands/SearchControls.tsx"
          ],
          "default": "./islands/SearchControls.tsx"
        }
      }
    },
    "Li9pc2xhbmRzL1NoaXBwaW5nU2ltdWxhdGlvbi50c3g=": {
      "title": "./islands/ShippingSimulation.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvU2hpcHBpbmdTaW11bGF0aW9uLnRzeA==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "./islands/ShippingSimulation.tsx"
          ],
          "default": "./islands/ShippingSimulation.tsx"
        }
      }
    },
    "Li9pc2xhbmRzL1NsaWRlckpTLnRzeA==": {
      "title": "./islands/SliderJS.tsx",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "./islands/SliderJS.tsx"
          ],
          "default": "./islands/SliderJS.tsx"
        }
      }
    },
    "Li9pc2xhbmRzL1dpc2hsaXN0QnV0dG9uLnRzeA==": {
      "title": "./islands/WishlistButton.tsx",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "./islands/WishlistButton.tsx"
          ],
          "default": "./islands/WishlistButton.tsx"
        }
      }
    },
    "JGxpdmUvaGFuZGxlcnMvZGV2UGFnZS50cw==": {
      "title": "Private Fresh Page",
      "description": "Useful for pages under development.",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvaGFuZGxlcnMvZGV2UGFnZS50cw==@DevConfig"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/handlers/devPage.ts"
          ],
          "default": "$live/handlers/devPage.ts"
        }
      }
    },
    "JGxpdmUvaGFuZGxlcnMvZnJlc2gudHM=": {
      "title": "Fresh Page",
      "description": "Renders a fresh page.",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvaGFuZGxlcnMvZnJlc2gudHM=@FreshConfig"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/handlers/fresh.ts"
          ],
          "default": "$live/handlers/fresh.ts"
        }
      }
    },
    "JGxpdmUvaGFuZGxlcnMvcHJveHkudHM=": {
      "title": "Proxy Handler",
      "description": "Proxies request to the target url.",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvaGFuZGxlcnMvcHJveHkudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/handlers/proxy.ts"
          ],
          "default": "$live/handlers/proxy.ts"
        }
      }
    },
    "JGxpdmUvaGFuZGxlcnMvcm91dGVyLnRz": {
      "title": "$live/handlers/router.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvaGFuZGxlcnMvcm91dGVyLnRz@RouterConfig"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/handlers/router.ts"
          ],
          "default": "$live/handlers/router.ts"
        }
      }
    },
    "JGxpdmUvaGFuZGxlcnMvcm91dGVzU2VsZWN0aW9uLnRz": {
      "title": "Routes Selection",
      "description": "Select routes based on the target audience.",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvaGFuZGxlcnMvcm91dGVzU2VsZWN0aW9uLnRz@SelectionConfig"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/handlers/routesSelection.ts"
          ],
          "default": "$live/handlers/routesSelection.ts"
        }
      }
    },
    "JGxpdmUvcGFnZXMvTGl2ZVBhZ2UudHN4": {
      "title": "$live/pages/LivePage.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvcGFnZXMvTGl2ZVBhZ2UudHN4@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/pages/LivePage.tsx"
          ],
          "default": "$live/pages/LivePage.tsx"
        }
      }
    },
    "JGxpdmUvc2VjdGlvbnMvUGFnZUluY2x1ZGUudHN4": {
      "title": "$live/sections/PageInclude.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvc2VjdGlvbnMvUGFnZUluY2x1ZGUudHN4@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/sections/PageInclude.tsx"
          ],
          "default": "$live/sections/PageInclude.tsx"
        }
      }
    },
    "JGxpdmUvc2VjdGlvbnMvU2xvdC50c3g=": {
      "title": "$live/sections/Slot.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvc2VjdGlvbnMvU2xvdC50c3g=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/sections/Slot.tsx"
          ],
          "default": "$live/sections/Slot.tsx"
        }
      }
    },
    "JGxpdmUvc2VjdGlvbnMvVXNlU2xvdC50c3g=": {
      "title": "$live/sections/UseSlot.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvc2VjdGlvbnMvVXNlU2xvdC50c3g=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/sections/UseSlot.tsx"
          ],
          "default": "$live/sections/UseSlot.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Jhbm5lckdyaWQudHN4": {
      "title": "deco-sites/fashion/sections/BannerGrid.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyR3JpZC50c3g=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/BannerGrid.tsx"
          ],
          "default": "deco-sites/fashion/sections/BannerGrid.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Jhbm5lclBMUC50c3g=": {
      "title": "deco-sites/fashion/sections/BannerPLP.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyUExQLnRzeA==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/BannerPLP.tsx"
          ],
          "default": "deco-sites/fashion/sections/BannerPLP.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Nhcm91c2VsLnRzeA==": {
      "title": "deco-sites/fashion/sections/Carousel.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvQmFubmVyQ2Fyb3VzZWwudHN4@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/Carousel.tsx"
          ],
          "default": "deco-sites/fashion/sections/Carousel.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Nvb2tpZUNvbnNlbnQudHN4": {
      "title": "deco-sites/fashion/sections/CookieConsent.tsx",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/CookieConsent.tsx"
          ],
          "default": "deco-sites/fashion/sections/CookieConsent.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Rlc2lnblN5c3RlbS50c3g=": {
      "title": "deco-sites/fashion/sections/DesignSystem.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Rlc2lnblN5c3RlbS50c3g=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/DesignSystem.tsx"
          ],
          "default": "deco-sites/fashion/sections/DesignSystem.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0ZlYXR1cmVzLnRzeA==": {
      "title": "deco-sites/fashion/sections/Features.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvRmVhdHVyZXMudHN4@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/Features.tsx"
          ],
          "default": "deco-sites/fashion/sections/Features.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Zvb3Rlci50c3g=": {
      "title": "deco-sites/fashion/sections/Footer.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3g=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/Footer.tsx"
          ],
          "default": "deco-sites/fashion/sections/Footer.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0hlYWRlci50c3g=": {
      "title": "deco-sites/fashion/sections/Header.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci50c3g=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/Header.tsx"
          ],
          "default": "deco-sites/fashion/sections/Header.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0hpZ2hsaWdodHMudHN4": {
      "title": "deco-sites/fashion/sections/Highlights.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvSGlnaGxpZ2h0cy50c3g=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/Highlights.tsx"
          ],
          "default": "deco-sites/fashion/sections/Highlights.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0xpbmtUcmVlLnRzeA==": {
      "title": "deco-sites/fashion/sections/LinkTree.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvTGlua1RyZWUudHN4@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/LinkTree.tsx"
          ],
          "default": "deco-sites/fashion/sections/LinkTree.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL1Byb2R1Y3REZXRhaWxzLnRzeA==": {
      "title": "deco-sites/fashion/sections/ProductDetails.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0RGV0YWlscy50c3g=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/ProductDetails.tsx"
          ],
          "default": "deco-sites/fashion/sections/ProductDetails.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL1Byb2R1Y3RTaGVsZi50c3g=": {
      "title": "deco-sites/fashion/sections/ProductShelf.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0U2hlbGYudHN4@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/ProductShelf.tsx"
          ],
          "default": "deco-sites/fashion/sections/ProductShelf.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL1NlYXJjaFJlc3VsdC50c3g=": {
      "title": "deco-sites/fashion/sections/SearchResult.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaFJlc3VsdC50c3g=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/SearchResult.tsx"
          ],
          "default": "deco-sites/fashion/sections/SearchResult.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL1doYXRzQXBwLnRzeA==": {
      "title": "deco-sites/fashion/sections/WhatsApp.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvdWkvV2hhdHNBcHAudHN4@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/WhatsApp.tsx"
          ],
          "default": "deco-sites/fashion/sections/WhatsApp.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL1dpc2hsaXN0R2FsbGVyeS50c3g=": {
      "title": "deco-sites/fashion/sections/WishlistGallery.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaFJlc3VsdC50c3g=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/fashion/sections/WishlistGallery.tsx"
          ],
          "default": "deco-sites/fashion/sections/WishlistGallery.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvQW5hbHl0aWNzLnRzeA==": {
      "title": "deco-sites/std/sections/Analytics.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy9BbmFseXRpY3MudHN4@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/sections/Analytics.tsx"
          ],
          "default": "deco-sites/std/sections/Analytics.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvY29uZmlnQnV0dGVyQ01TLmdsb2JhbC50c3g=": {
      "title": "deco-sites/std/sections/configButterCMS.global.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UvYnV0dGVyQ01TL2NsaWVudC50cw==@ConfigButterCMS"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/sections/configButterCMS.global.tsx"
          ],
          "default": "deco-sites/std/sections/configButterCMS.global.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvY29uZmlnT0NDLmdsb2JhbC50c3g=": {
      "title": "deco-sites/std/sections/configOCC.global.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2Uvb2NjL2NsaWVudC50cw==@ConfigOCC"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/sections/configOCC.global.tsx"
          ],
          "default": "deco-sites/std/sections/configOCC.global.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvY29uZmlnU2hvcGlmeS5nbG9iYWwudHN4": {
      "title": "deco-sites/std/sections/configShopify.global.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2Uvc2hvcGlmeS9jbGllbnQudHM=@ConfigShopify"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/sections/configShopify.global.tsx"
          ],
          "default": "deco-sites/std/sections/configShopify.global.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvY29uZmlnVk5EQS5nbG9iYWwudHN4": {
      "title": "deco-sites/std/sections/configVNDA.global.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2Uvdm5kYS90eXBlcy50cw==@ConfigVNDA"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/sections/configVNDA.global.tsx"
          ],
          "default": "deco-sites/std/sections/configVNDA.global.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvY29uZmlnVlRFWC5nbG9iYWwudHN4": {
      "title": "deco-sites/std/sections/configVTEX.global.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY2NvdW50cy92dGV4LnRz@Account"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/sections/configVTEX.global.tsx"
          ],
          "default": "deco-sites/std/sections/configVTEX.global.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvY29uZmlnWW91clZpZXdzLmdsb2JhbC50c3g=": {
      "title": "deco-sites/std/sections/configYourViews.global.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tbWVyY2UveW91clZpZXdzL2NsaWVudC50cw==@ConfigYourViews"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/sections/configYourViews.global.tsx"
          ],
          "default": "deco-sites/std/sections/configYourViews.global.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvU0VPLnRzeA==": {
      "title": "deco-sites/std/sections/SEO.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy9zZW8vU0VPQmFzZS50c3g=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/sections/SEO.tsx"
          ],
          "default": "deco-sites/std/sections/SEO.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvU0VPUERQLnRzeA==": {
      "title": "deco-sites/std/sections/SEOPDP.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy9zZW8vU0VPUERQLnRzeA==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/sections/SEOPDP.tsx"
          ],
          "default": "deco-sites/std/sections/SEOPDP.tsx"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvU0VPUExQLnRzeA==": {
      "title": "deco-sites/std/sections/SEOPLP.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvY29tcG9uZW50cy9zZW8vU0VPUExQLnRzeA==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/sections/SEOPLP.tsx"
          ],
          "default": "deco-sites/std/sections/SEOPLP.tsx"
        }
      }
    },
    "JGxpdmUvbWF0Y2hlcnMvTWF0Y2hBbHdheXMudHM=": {
      "title": "$live/matchers/MatchAlways.ts",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/matchers/MatchAlways.ts"
          ],
          "default": "$live/matchers/MatchAlways.ts"
        }
      }
    },
    "JGxpdmUvbWF0Y2hlcnMvTWF0Y2hEYXRlLnRz": {
      "title": "$live/matchers/MatchDate.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hEYXRlLnRz@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/matchers/MatchDate.ts"
          ],
          "default": "$live/matchers/MatchDate.ts"
        }
      }
    },
    "JGxpdmUvbWF0Y2hlcnMvTWF0Y2hFbnZpcm9ubWVudC50cw==": {
      "title": "$live/matchers/MatchEnvironment.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hFbnZpcm9ubWVudC50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/matchers/MatchEnvironment.ts"
          ],
          "default": "$live/matchers/MatchEnvironment.ts"
        }
      }
    },
    "JGxpdmUvbWF0Y2hlcnMvTWF0Y2hIb3N0LnRz": {
      "title": "$live/matchers/MatchHost.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hIb3N0LnRz@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/matchers/MatchHost.ts"
          ],
          "default": "$live/matchers/MatchHost.ts"
        }
      }
    },
    "JGxpdmUvbWF0Y2hlcnMvTWF0Y2hNdWx0aS50cw==": {
      "title": "$live/matchers/MatchMulti.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hNdWx0aS50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/matchers/MatchMulti.ts"
          ],
          "default": "$live/matchers/MatchMulti.ts"
        }
      }
    },
    "JGxpdmUvbWF0Y2hlcnMvTWF0Y2hSYW5kb20udHM=": {
      "title": "$live/matchers/MatchRandom.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hSYW5kb20udHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/matchers/MatchRandom.ts"
          ],
          "default": "$live/matchers/MatchRandom.ts"
        }
      }
    },
    "JGxpdmUvbWF0Y2hlcnMvTWF0Y2hTaXRlLnRz": {
      "title": "$live/matchers/MatchSite.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hTaXRlLnRz@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/matchers/MatchSite.ts"
          ],
          "default": "$live/matchers/MatchSite.ts"
        }
      }
    },
    "JGxpdmUvbWF0Y2hlcnMvTWF0Y2hVc2VyQWdlbnQudHM=": {
      "title": "$live/matchers/MatchUserAgent.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvbWF0Y2hlcnMvTWF0Y2hVc2VyQWdlbnQudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/matchers/MatchUserAgent.ts"
          ],
          "default": "$live/matchers/MatchUserAgent.ts"
        }
      }
    },
    "JGxpdmUvZmxhZ3MvYXVkaWVuY2UudHM=": {
      "title": "Audience",
      "description": "Select routes based on the matched audience.",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvYXVkaWVuY2UudHM=@Audience"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/flags/audience.ts"
          ],
          "default": "$live/flags/audience.ts"
        }
      }
    },
    "JGxpdmUvZmxhZ3MvZXZlcnlvbmUudHM=": {
      "title": "Audience Everyone",
      "description": "Always match regardless of the current user",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvZmxhZ3MvZXZlcnlvbmUudHM=@EveryoneConfig"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "$live/flags/everyone.ts"
          ],
          "default": "$live/flags/everyone.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvYWRkSXRlbXMudHM=": {
      "title": "deco-sites/std/actions/vtex/cart/addItems.ts",
      "docs": "https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/items",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/cart/addItems.ts"
          ],
          "default": "deco-sites/std/actions/vtex/cart/addItems.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvZ2V0SW5zdGFsbG1lbnQudHM=": {
      "title": "deco-sites/std/actions/vtex/cart/getInstallment.ts",
      "docs": "https://developers.vtex.com/docs/api-reference/checkout-api#get-/api/checkout/pub/orderForm/-orderFormId-/installments",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvZ2V0SW5zdGFsbG1lbnQudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/cart/getInstallment.ts"
          ],
          "default": "deco-sites/std/actions/vtex/cart/getInstallment.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvcmVtb3ZlSXRlbUF0dGFjaG1lbnQudHM=": {
      "title": "deco-sites/std/actions/vtex/cart/removeItemAttachment.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvcmVtb3ZlSXRlbUF0dGFjaG1lbnQudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/cart/removeItemAttachment.ts"
          ],
          "default": "deco-sites/std/actions/vtex/cart/removeItemAttachment.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvcmVtb3ZlSXRlbXMudHM=": {
      "title": "deco-sites/std/actions/vtex/cart/removeItems.ts",
      "docs": "https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/items/removeAll",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/cart/removeItems.ts"
          ],
          "default": "deco-sites/std/actions/vtex/cart/removeItems.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvc2ltdWxhdGlvbi50cw==": {
      "title": "deco-sites/std/actions/vtex/cart/simulation.ts",
      "docs": "https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvc2ltdWxhdGlvbi50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/cart/simulation.ts"
          ],
          "default": "deco-sites/std/actions/vtex/cart/simulation.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlQXR0YWNobWVudC50cw==": {
      "title": "deco-sites/std/actions/vtex/cart/updateAttachment.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlQXR0YWNobWVudC50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/cart/updateAttachment.ts"
          ],
          "default": "deco-sites/std/actions/vtex/cart/updateAttachment.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlQ291cG9ucy50cw==": {
      "title": "deco-sites/std/actions/vtex/cart/updateCoupons.ts",
      "docs": "https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/coupons",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlQ291cG9ucy50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/cart/updateCoupons.ts"
          ],
          "default": "deco-sites/std/actions/vtex/cart/updateCoupons.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlSXRlbUF0dGFjaG1lbnQudHM=": {
      "title": "deco-sites/std/actions/vtex/cart/updateItemAttachment.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbUF0dGFjaG1lbnQudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/cart/updateItemAttachment.ts"
          ],
          "default": "deco-sites/std/actions/vtex/cart/updateItemAttachment.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlSXRlbVByaWNlLnRz": {
      "title": "deco-sites/std/actions/vtex/cart/updateItemPrice.ts",
      "docs": "https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orderForm/-orderFormId-/items/-itemIndex-/price",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbVByaWNlLnRz@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/cart/updateItemPrice.ts"
          ],
          "default": "deco-sites/std/actions/vtex/cart/updateItemPrice.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlSXRlbXMudHM=": {
      "title": "deco-sites/std/actions/vtex/cart/updateItems.ts",
      "docs": "https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/items/update",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/cart/updateItems.ts"
          ],
          "default": "deco-sites/std/actions/vtex/cart/updateItems.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlUHJvZmlsZS50cw==": {
      "title": "deco-sites/std/actions/vtex/cart/updateProfile.ts",
      "docs": "https://developers.vtex.com/docs/api-reference/checkout-api#patch-/api/checkout/pub/orderForm/-orderFormId-/profile",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL2NhcnQvdXBkYXRlUHJvZmlsZS50cw==@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/cart/updateProfile.ts"
          ],
          "default": "deco-sites/std/actions/vtex/cart/updateProfile.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlVXNlci50cw==": {
      "title": "deco-sites/std/actions/vtex/cart/updateUser.ts",
      "docs": "https://developers.vtex.com/docs/api-reference/checkout-api#get-/checkout/changeToAnonymousUser/-orderFormId-",
      "type": "object",
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/cart/updateUser.ts"
          ],
          "default": "deco-sites/std/actions/vtex/cart/updateUser.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L3dpc2hsaXN0L2FkZEl0ZW0udHM=": {
      "title": "deco-sites/std/actions/vtex/wishlist/addItem.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL3dpc2hsaXN0L2FkZEl0ZW0udHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/wishlist/addItem.ts"
          ],
          "default": "deco-sites/std/actions/vtex/wishlist/addItem.ts"
        }
      }
    },
    "ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L3dpc2hsaXN0L3JlbW92ZUl0ZW0udHM=": {
      "title": "deco-sites/std/actions/vtex/wishlist/removeItem.ts",
      "type": "object",
      "allOf": [
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvcGFja3MvdnRleC9hY3Rpb25zL3dpc2hsaXN0L3JlbW92ZUl0ZW0udHM=@Props"
        }
      ],
      "required": [
        "__resolveType"
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "deco-sites/std/actions/vtex/wishlist/removeItem.ts"
          ],
          "default": "deco-sites/std/actions/vtex/wishlist/removeItem.ts"
        }
      }
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvcm91dGVzL19taWRkbGV3YXJlLnRz@MiddlewareConfig": {
      "type": "object",
      "properties": {
        "state": {
          "title": "State",
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/Resolvable"
          },
          "description": "Configure your loaders global state."
        }
      },
      "required": [
        "state"
      ],
      "title": "/Users/marcoscandeia/workspace/live/routes/_middleware.ts@MiddlewareConfig",
      "description": "Global configurations for ./routes/_middleware.ts route"
    },
    "L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvcm91dGVzL1suLi5jYXRjaGFsbF0udHN4@Entrypoint": {
      "type": "object",
      "properties": {
        "handler": {
          "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvYmxvY2tzL2hhbmRsZXIudHM=@Handler",
          "description": "configure how to handle requests.",
          "title": "Handler"
        }
      },
      "required": [
        "handler"
      ],
      "title": "/Users/marcoscandeia/workspace/live/routes/[...catchall].tsx@Entrypoint",
      "description": "Site entrypoint, configure your audiences and routes."
    }
  },
  "root": {
    "functions": {
      "title": "functions",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU0Fkcy50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU0JyYW5kcy50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU0NhdGVnb3JpZXMudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU0ZlYXR1cmVkUG9zdHMudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1BhZ2UudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1BsYWNlcy50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1Bvc3REZXRhaWwudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1Bvc3RzLnRz"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL2J1dHRlckNNU1JlbGF0ZWRQb3N0cy50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL29jY1Byb2R1Y3REZXRhaWxzUGFnZS50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3JlcXVlc3RUb1BhcmFtLnRz"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Nob3BpZnlQcm9kdWN0RGV0YWlsc1BhZ2UudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Nob3BpZnlQcm9kdWN0TGlzdC50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Nob3BpZnlQcm9kdWN0TGlzdGluZ1BhZ2UudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3ZuZGFQcm9kdWN0RGV0YWlsc1BhZ2UudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3ZuZGFQcm9kdWN0TGlzdC50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3ZuZGFQcm9kdWN0TGlzdGluZ1BhZ2UudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lQcm9kdWN0RGV0YWlsc1BhZ2UudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lQcm9kdWN0TGlzdC50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lQcm9kdWN0TGlzdGluZ1BhZ2UudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhMZWdhY3lSZWxhdGVkUHJvZHVjdHNMb2FkZXIudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhOYXZiYXIudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhQcm9kdWN0RGV0YWlsc1BhZ2UudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhQcm9kdWN0TGlzdC50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhQcm9kdWN0TGlzdGluZ1BhZ2UudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhTdWdnZXN0aW9ucy50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvZnVuY3Rpb25zL3Z0ZXhXaXNobGlzdC50cw=="
        }
      ]
    },
    "accounts": {
      "title": "accounts",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWNjb3VudHMvb2NjLnRz"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWNjb3VudHMvc2hvcGlmeS50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWNjb3VudHMvdm5kYS50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWNjb3VudHMvdnRleC50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWNjb3VudHMveW91clZpZXdzLnRz"
        }
      ]
    },
    "loaders": {
    "$live/loaders/workflows/get.ts": i1$0,
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2NhcnQudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3REZXRhaWxzUGFnZS50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0LnRz"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2ludGVsbGlnZW50U2VhcmNoL3Byb2R1Y3RMaXN0aW5nUGFnZS50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2ludGVsbGlnZW50U2VhcmNoL3N1Z2dlc3Rpb25zLnRz"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2xlZ2FjeS9wcm9kdWN0RGV0YWlsc1BhZ2UudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2xlZ2FjeS9wcm9kdWN0TGlzdC50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2xlZ2FjeS9wcm9kdWN0TGlzdGluZ1BhZ2UudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L2xlZ2FjeS9yZWxhdGVkUHJvZHVjdHNMb2FkZXIudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L25hdmJhci50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L3VzZXIudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvbG9hZGVycy92dGV4L3dpc2hsaXN0LnRz"
        }
      ]
    },
    "islands": {
      "title": "islands",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/Li9pc2xhbmRzL0FkZFRvQ2FydEJ1dHRvbi50c3g="
        },
        {
          "$ref": "#/definitions/Li9pc2xhbmRzL0hlYWRlckJ1dHRvbi50c3g="
        },
        {
          "$ref": "#/definitions/Li9pc2xhbmRzL0hlYWRlck1vZGFscy50c3g="
        },
        {
          "$ref": "#/definitions/Li9pc2xhbmRzL0hlYWRlclNlYXJjaE1lbnUudHN4"
        },
        {
          "$ref": "#/definitions/Li9pc2xhbmRzL1Byb2R1Y3RJbWFnZVpvb20udHN4"
        },
        {
          "$ref": "#/definitions/Li9pc2xhbmRzL1NlYXJjaENvbnRyb2xzLnRzeA=="
        },
        {
          "$ref": "#/definitions/Li9pc2xhbmRzL1NoaXBwaW5nU2ltdWxhdGlvbi50c3g="
        },
        {
          "$ref": "#/definitions/Li9pc2xhbmRzL1NsaWRlckpTLnRzeA=="
        },
        {
          "$ref": "#/definitions/Li9pc2xhbmRzL1dpc2hsaXN0QnV0dG9uLnRzeA=="
        }
      ]
    },
    "handlers": {
      "title": "handlers",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/JGxpdmUvaGFuZGxlcnMvZGV2UGFnZS50cw=="
        },
        {
          "$ref": "#/definitions/JGxpdmUvaGFuZGxlcnMvZnJlc2gudHM="
        },
        {
          "$ref": "#/definitions/JGxpdmUvaGFuZGxlcnMvcHJveHkudHM="
        },
        {
          "$ref": "#/definitions/JGxpdmUvaGFuZGxlcnMvcm91dGVyLnRz"
        },
        {
          "$ref": "#/definitions/JGxpdmUvaGFuZGxlcnMvcm91dGVzU2VsZWN0aW9uLnRz"
        }
      ]
    },
    "pages": {
      "title": "pages",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/JGxpdmUvcGFnZXMvTGl2ZVBhZ2UudHN4"
        }
      ]
    },
    "sections": {
      "title": "sections",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/JGxpdmUvc2VjdGlvbnMvUGFnZUluY2x1ZGUudHN4"
        },
        {
          "$ref": "#/definitions/JGxpdmUvc2VjdGlvbnMvU2xvdC50c3g="
        },
        {
          "$ref": "#/definitions/JGxpdmUvc2VjdGlvbnMvVXNlU2xvdC50c3g="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Jhbm5lckdyaWQudHN4"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Jhbm5lclBMUC50c3g="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Nhcm91c2VsLnRzeA=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Nvb2tpZUNvbnNlbnQudHN4"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Rlc2lnblN5c3RlbS50c3g="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0ZlYXR1cmVzLnRzeA=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Zvb3Rlci50c3g="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0hlYWRlci50c3g="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0hpZ2hsaWdodHMudHN4"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0xpbmtUcmVlLnRzeA=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL1Byb2R1Y3REZXRhaWxzLnRzeA=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL1Byb2R1Y3RTaGVsZi50c3g="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL1NlYXJjaFJlc3VsdC50c3g="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL1doYXRzQXBwLnRzeA=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL1dpc2hsaXN0R2FsbGVyeS50c3g="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvQW5hbHl0aWNzLnRzeA=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvY29uZmlnQnV0dGVyQ01TLmdsb2JhbC50c3g="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvY29uZmlnT0NDLmdsb2JhbC50c3g="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvY29uZmlnU2hvcGlmeS5nbG9iYWwudHN4"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvY29uZmlnVk5EQS5nbG9iYWwudHN4"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvY29uZmlnVlRFWC5nbG9iYWwudHN4"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvY29uZmlnWW91clZpZXdzLmdsb2JhbC50c3g="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvU0VPLnRzeA=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvU0VPUERQLnRzeA=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvc2VjdGlvbnMvU0VPUExQLnRzeA=="
        }
      ]
    },
    "matchers": {
      "title": "matchers",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/JGxpdmUvbWF0Y2hlcnMvTWF0Y2hBbHdheXMudHM="
        },
        {
          "$ref": "#/definitions/JGxpdmUvbWF0Y2hlcnMvTWF0Y2hEYXRlLnRz"
        },
        {
          "$ref": "#/definitions/JGxpdmUvbWF0Y2hlcnMvTWF0Y2hFbnZpcm9ubWVudC50cw=="
        },
        {
          "$ref": "#/definitions/JGxpdmUvbWF0Y2hlcnMvTWF0Y2hIb3N0LnRz"
        },
        {
          "$ref": "#/definitions/JGxpdmUvbWF0Y2hlcnMvTWF0Y2hNdWx0aS50cw=="
        },
        {
          "$ref": "#/definitions/JGxpdmUvbWF0Y2hlcnMvTWF0Y2hSYW5kb20udHM="
        },
        {
          "$ref": "#/definitions/JGxpdmUvbWF0Y2hlcnMvTWF0Y2hTaXRlLnRz"
        },
        {
          "$ref": "#/definitions/JGxpdmUvbWF0Y2hlcnMvTWF0Y2hVc2VyQWdlbnQudHM="
        }
      ]
    },
    "flags": {
      "title": "flags",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/JGxpdmUvZmxhZ3MvYXVkaWVuY2UudHM="
        },
        {
          "$ref": "#/definitions/JGxpdmUvZmxhZ3MvZXZlcnlvbmUudHM="
        }
      ]
    },
    "actions": {
      "title": "actions",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvYWRkSXRlbXMudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvZ2V0SW5zdGFsbG1lbnQudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvcmVtb3ZlSXRlbUF0dGFjaG1lbnQudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvcmVtb3ZlSXRlbXMudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvc2ltdWxhdGlvbi50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlQXR0YWNobWVudC50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlQ291cG9ucy50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlSXRlbUF0dGFjaG1lbnQudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlSXRlbVByaWNlLnRz"
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlSXRlbXMudHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlUHJvZmlsZS50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L2NhcnQvdXBkYXRlVXNlci50cw=="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L3dpc2hsaXN0L2FkZEl0ZW0udHM="
        },
        {
          "$ref": "#/definitions/ZGVjby1zaXRlcy9zdGQvYWN0aW9ucy92dGV4L3dpc2hsaXN0L3JlbW92ZUl0ZW0udHM="
        }
      ]
    },
    "entrypoint": {
      "type": "object",
      "required": [
        "./routes/_middleware.ts",
        "./routes/[...catchall].tsx",
        "./routes/index.tsx"
      ],
      "properties": {
        "./routes/_middleware.ts": {
          "anyOf": [
            {
              "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvcm91dGVzL19taWRkbGV3YXJlLnRz@MiddlewareConfig"
            }
          ]
        },
        "./routes/[...catchall].tsx": {
          "anyOf": [
            {
              "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvcm91dGVzL1suLi5jYXRjaGFsbF0udHN4@Entrypoint"
            }
          ]
        },
        "./routes/index.tsx": {
          "anyOf": [
            {
              "$ref": "#/definitions/L1VzZXJzL21hcmNvc2NhbmRlaWEvd29ya3NwYWNlL2xpdmUvcm91dGVzL1suLi5jYXRjaGFsbF0udHN4@Entrypoint"
            }
          ]
        }
      }
    },
    "state": {
      "allOf": [
        {
          "$ref": "#/root/entrypoint"
        }
      ],
      "additionalProperties": {
        "anyOf": [
          {
            "$ref": "#/root/functions"
          },
          {
            "$ref": "#/root/accounts"
          },
          {
            "$ref": "#/root/loaders"
          },
          {
            "$ref": "#/root/islands"
          },
          {
            "$ref": "#/root/handlers"
          },
          {
            "$ref": "#/root/pages"
          },
          {
            "$ref": "#/root/sections"
          },
          {
            "$ref": "#/root/matchers"
          },
          {
            "$ref": "#/root/flags"
          },
          {
            "$ref": "#/root/actions"
          }
        ]
      }
    }
  }
}
import * as i1$2 from "$live/handlers/redirect.ts";
import * as i1$5 from "$live/handlers/workflowRunner.ts";
import * as i1$$$$$$0 from "$live/actions/workflows/run.ts";
import * as i1$$$$$$1 from "$live/actions/workflows/start.ts";
    "$live/actions/workflows/run.ts": i1$$$$$$0,
    "$live/actions/workflows/start.ts": i1$$$$$$1,
    "$live/handlers/redirect.ts": i1$2,
    "$live/handlers/workflowRunner.ts": i1$5,
    "deco-sites/std/loaders/vtexLegacyProductDetailsPage.ts": i2$$$0,
    "deco-sites/std/loaders/vtexLegacyRelatedProductsLoader.ts": i2$$$1,