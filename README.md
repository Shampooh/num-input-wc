# Number verificator web component
*Story about design and development number input form as web component*

## Problem description

It should be form for mobile number input with a set of various states (`normal`, `hover`, `active`, `error`). 

![Screenshot_1](https://user-images.githubusercontent.com/8533068/64861837-b7676f80-d639-11e9-9132-7e5649826b8e.png)

Form should have specific interface implemented with mask with next values:

  * `"I" - enabled one-symbol input`
  * `"X" - disabled one-symbol input (with X symbol)`
  * `"*" - disabled one-symbol input (with ● symbol)`
  * `<num> - disabled one-symbol input (with num)`
  * `<non-num> - disabled one-symbol input (with non-num)`	

Example: 
```js
const mask = '+7(985)0II-**-**';
```

Additional reqs (*in process*):
1. webpack+npm (not ready)
   https://habr.com/ru/post/309306/ (Пособие по webpack +see comments)
   https://medium.com/walkme-engineering/publishing-a-web-components-library-7a0670e3939f (Publishing a Web Components Library)
2. ~~Cypress integration testing~~ (not ready)
   https://medium.com/@eavichay/easy-unit-tests-for-your-web-components-e26bf88483a9 (Easy Unit-Tests your web-components - showroom)
   https://dev.to/open-wc/testing-workflow-for-web-components-g73 (Testing Workflow for Web Components - @open-wc)
   https://medium.com/@pietmichal/how-to-test-a-web-component-b5d64d5e8bb0 (How To Test a Web Component - vanilla way)
   ?
3. eslint (not ready)
4. git hooks (not ready)
5. CI/CD (Jenkins) (not ready)
6. Docker (not ready)

## Problem solution

  * Web components docs - https://developers.google.com/web/fundamentals/web-components/

  * Custom elemnts MDN - https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements
  
  * Text field design - https://material.io/components/text-fields/# (not ready)
  
  * ~~Integration testing - https://www.cypress.io/ (https://github.com/cypress-io/cypress/issues/144 - ;( )~~
  
## HOW TO

1. Start from root `npm start` (need server because of *ES6 modules are subject to same-origin policy.* - doing smth wrong?..)
2. Open in Chrome http://localhost:3000/
3. Edit `mask` and `error` in `./public/test.js` to see diff

## ETA

**13/09/2019(September 13 2019)**

-------
Other helpful sources for related theme:
https://dev.to/thepassle/web-components-from-zero-to-hero-4n4m (Web Components: from zero to hero)
https://itnext.io/handling-data-with-web-components-9e7e4a452e6e (Handling data with Web Components)
