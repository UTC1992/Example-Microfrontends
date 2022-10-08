module.exports = {
  "globals": {
    "React": true,
    "google": true,
    "mount": true,
    "mountWithRouter": true,
    "shallow": true,
    "shallowWithRouter": true,
    "context": true,
    "expect": true,
    "jsdom": true,
    "JSX": true
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    'plugin:jest-dom/recommended',
    "prettier",
    "airbnb",
  ],
  "parser": "@typescript-eslint/parser",
  "root": true,
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
    "warnOnUnsupportedTypeScriptVersion": false,
    "project": "./tsconfig.json"
  },
  "rules": {
    "no-console": "error",
    "import/first": "error",
    "react/prop-types": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "max-len": [
      "error",
      {
        "code": 80,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      },
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [
          //".ts",
          ".tsx"
        ]
      }
    ],
    "react/require-default-props": ["error", { "forbidDefaultForRequired": false, "ignoreFunctionalComponents": true }],
    "linebreak-style": "off",
    "no-undef": [
      "error",
      {
        "typeof": true
      }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { "functions": false, "variables": false, "classes": false }
    ],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": [
      "error"
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true
      }
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "exceptions": []
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/indent": [
      "error",
      2
    ],
    "react/jsx-boolean-value": "error",
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "react/jsx-props-no-spreading": [
      "error",
      {
        "html": "ignore",
        "custom": "ignore",
        "explicitSpread": "ignore",
        "exceptions": [
          ""
        ]
      }
    ],
    "space-in-parens": [
      "error",
      "always",
      {
        "exceptions": [
          "{}",
          "[]",
          "()"
        ]
      }
    ],
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": false,
          "object": true
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "components": ["Link"],
        "specialLink": ["hrefLeft", "hrefRight"],
        "aspects": ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": [
          "**/setupTests.ts",
          "**/*.test.ts",
          "**/*.spec.ts",
          "**/*.test.tsx",
          "**/*.spec.tsx"
        ]
      }
    ],
    "react/destructuring-assignment": ["error", "always", { "ignoreClassFields": true}],
    "implicit-arrow-linebreak": 0,
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    'import/order': ['error', {
      "newlines-between": "always-and-inside-groups",
      groups: [['builtin', 'external'], 'internal', 'sibling', 'index', 'parent', 'object'],
      alphabetize: {
        order: 'asc', /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
        caseInsensitive: true /* ignore case. Options: [true, false] */
      }
    }],
    
    
    // enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // disallow redundant `return await`
    'no-return-await': 'error',

    // disallow use of assignment in return statement
    'no-return-assign': ['error', 'always'],

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // disallow use of comma operator
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    'no-throw-literal': 'error',

    // disallow empty functions, except for standalone funcs/arrows
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],
    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    'camelcase': ['error', { 'ignoreDestructuring' : true, 'properties': 'always'}],

    'no-lonely-if': "error",

    'no-unmodified-loop-condition': "error",

    'space-before-blocks': ["error", 'always'],

    'curly': ["error", 'all'],

    'no-await-in-loop': 'error',

    'no-cond-assign': "error",

    'no-constant-condition': ["error", { "checkLoops": false }],

    'no-unreachable-loop': "error",

    'lines-between-class-members': ["error", "always", { "exceptAfterSingleLine": true }],

    'padding-line-between-statements': [
        "error",
        { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
        { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]},
        { blankLine: "always", prev: "directive", next: "*" },
        { blankLine: "any",    prev: "directive", next: "directive" },
        { blankLine: "always", prev: ["case", "default"], next: "*" },
        { blankLine: "always", prev: "*", next: "return" },
    ],

    'block-scoped-var': "error",

    'no-var': 'error',

    'func-call-spacing': ["error", "never"],

    'no-eq-null': "error",
    
    'no-lone-blocks': "error",

    semi: ["error", "never"],
    "@typescript-eslint/semi": "off",
    "no-useless-constructor": "off"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {}
    }
  }
}