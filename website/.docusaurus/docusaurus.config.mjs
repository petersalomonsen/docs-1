/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "NEAR Documentation",
  "tagline": "NEAR Protocol Developer Documentation",
  "url": "https://docs.near.org",
  "baseUrl": "/zh-CN/",
  "organizationName": "near",
  "projectName": "docs",
  "markdown": {
    "mermaid": true,
    "format": "mdx",
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    }
  },
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "https://use.fontawesome.com/221fd444f5.js"
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=Source+Code+Pro:ital,wght@0,400;0,600;1,400;1,600&display=swap"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "disableHeaderTitle": true,
    "fonts": {
      "myFont": [
        "Inter",
        "sans-serif"
      ]
    }
  },
  "themes": [
    "@saucelabs/theme-github-codeblock",
    "@docusaurus/theme-mermaid"
  ],
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "breadcrumbs": true,
          "editUrl": "https://github.com/near/docs/edit/master/website",
          "path": "../docs",
          "sidebarPath": "./sidebars.js",
          "routeBasePath": "/"
        },
        "sitemap": {
          "changefreq": "weekly",
          "priority": 0.5
        },
        "googleAnalytics": {
          "trackingID": "UA-100373569-7",
          "anonymizeIP": true
        },
        "blog": {
          "blogTitle": "NEAR Developer Changelog",
          "blogSidebarTitle": "Developer Changelog",
          "blogSidebarCount": "ALL",
          "showReadingTime": false,
          "routeBasePath": "changelog",
          "path": "../changelog"
        },
        "theme": {
          "customCss": "./src/css/custom.scss"
        }
      }
    ]
  ],
  "plugins": [
    "./src/plugins/monaco-editor",
    "./src/plugins/node-polyfills",
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-remote-content",
      {
        "name": "near-changelog",
        "sourceBaseUrl": "https://raw.githubusercontent.com/near/near-releases/main/reports/",
        "outDir": "../changelog",
        "documents": [
          "2023-01-31.md",
          "2023-02-28.md",
          "2023-03-31.md",
          "2023-04-30.md",
          "2023-05-31.md",
          "2023-06-30.md",
          "2023-07-31.md",
          "2023-08-31.md",
          "2023-09-30.md",
          "2023-10-31.md",
          "2023-11-30.md",
          "2023-12-31.md",
          "2024-01-31.md"
        ],
        "noRuntimeDownloads": true
      }
    ]
  ],
  "themeConfig": {
    "prism": {
      "additionalLanguages": [
        "rust",
        "java",
        "python",
        "ruby",
        "go",
        "typescript",
        "jsx"
      ],
      "theme": {
        "plain": {
          "color": "#bfc7d5",
          "backgroundColor": "#292d3e"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(105, 112, 152)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "inserted"
            ],
            "style": {
              "color": "rgb(195, 232, 141)"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(247, 140, 108)"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function"
            ],
            "style": {
              "color": "rgb(130, 170, 255)"
            }
          },
          {
            "types": [
              "punctuation",
              "selector"
            ],
            "style": {
              "color": "rgb(199, 146, 234)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(191, 199, 213)"
            }
          },
          {
            "types": [
              "class-name",
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 203, 107)"
            }
          },
          {
            "types": [
              "tag",
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 114)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(137, 221, 255)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(255, 88, 116)"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "doctype"
            ],
            "style": {
              "color": "rgb(199, 146, 234)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "color": "rgb(178, 204, 214)"
            }
          },
          {
            "types": [
              "url"
            ],
            "style": {
              "color": "rgb(221, 221, 221)"
            }
          }
        ]
      },
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "respectPrefersColorScheme": true,
      "disableSwitch": false
    },
    "navbar": {
      "logo": {
        "alt": "NEAR Logo",
        "src": "img/near_logo.svg",
        "srcDark": "img/near_logo_white.svg"
      },
      "items": [
        {
          "to": "/concepts/welcome",
          "label": "Learn",
          "position": "left"
        },
        {
          "to": "/develop/welcome",
          "label": "Build",
          "position": "left"
        },
        {
          "to": "/tutorials/welcome",
          "label": "Tutorials",
          "position": "left"
        },
        {
          "href": "/api/rpc/introduction",
          "label": "RPC",
          "position": "left"
        },
        {
          "type": "html",
          "value": "<span class=\"separator\"></span>",
          "position": "left"
        },
        {
          "type": "dropdown",
          "label": "Tools",
          "position": "left",
          "items": [
            {
              "label": "🧰 All Tools",
              "href": "/tools/welcome"
            },
            {
              "type": "html",
              "value": "<hr/> <small class=\"subtitle\"> Essentials </small>"
            },
            {
              "label": "NEAR API",
              "href": "/tools/near-api-js/quick-reference"
            },
            {
              "label": "NEAR SDK",
              "href": "/sdk/welcome"
            },
            {
              "label": "NEAR CLI",
              "href": "/tools/near-cli"
            },
            {
              "type": "html",
              "value": "<hr/> <small class=\"subtitle\"> Onboarding </small>"
            },
            {
              "label": "Wallet Selector",
              "href": "/tools/wallet-selector"
            },
            {
              "label": "FastAuth (Email Login)",
              "href": "/tools/fastauth-sdk"
            },
            {
              "label": "Relayers",
              "href": "/develop/relayers/build-relayer"
            },
            {
              "type": "html",
              "value": "<hr/> <small class=\"subtitle\"> IDEs </small>"
            },
            {
              "label": "VSCode Extension ",
              "href": "/bos/dev/vscode"
            },
            {
              "label": "BOS Web IDE (Jutsu)",
              "href": "https://jutsu.ai/editor"
            },
            {
              "label": "Remix IDE Plugin",
              "href": "https://docs.welldonestudio.io/code/getting-started"
            }
          ]
        },
        {
          "type": "dropdown",
          "label": "Resources",
          "position": "left",
          "items": [
            {
              "label": "🎉 Dev Changelog",
              "href": "/changelog"
            },
            {
              "label": "Github",
              "href": "https://github.com/near",
              "className": "header-github-link"
            },
            {
              "type": "html",
              "value": "<hr/><div class=\"subtitle\"> Support </dib>"
            },
            {
              "href": "https://discord.gg/GZ7735Xjce",
              "label": "Discord"
            },
            {
              "href": "https://t.me/neardev",
              "label": "Telegram"
            },
            {
              "type": "html",
              "value": "<hr /><div class=\"subtitle\"> Other Docs </dib>"
            },
            {
              "href": "https://nomicon.io",
              "label": "Protocol Docs"
            },
            {
              "href": "https://near-nodes.io",
              "label": "Validator Docs"
            },
            {
              "href": "https://aurora.dev",
              "label": "Aurora (EVM)"
            }
          ]
        },
        {
          "type": "search",
          "position": "right"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "href": "login",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "image": "img/near_logo.svg",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2023 NEAR Protocol",
      "logo": {
        "src": "img/near_logo.svg"
      },
      "style": "light"
    },
    "algolia": {
      "appId": "0LUM67N2P2",
      "apiKey": "129d0f429e1bb0510f0261dda1e88ed4",
      "indexName": "near",
      "contextualSearch": true,
      "externalUrlRegex": "near-sdk\\.io",
      "searchParameters": {
        "clickAnalytics": true,
        "analytics": true,
        "enableReRanking": true
      },
      "placeholder": "Search the Docs...",
      "searchPagePath": "search"
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    },
    "mermaid": {
      "theme": {
        "dark": "dark",
        "light": "default"
      },
      "options": {}
    }
  },
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en",
      "ko",
      "vi",
      "zh-CN"
    ],
    "localeConfigs": {
      "zh-CN": {
        "label": "简体中文",
        "direction": "ltr"
      }
    },
    "path": "i18n"
  },
  "baseUrlIssueBanner": true,
  "onBrokenAnchors": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "headTags": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};
