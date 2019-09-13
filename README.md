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

Additional reqs:
1. webpack+npm
2. Cypress testing
3. eslint
4. git hooks
5. CI/CD (Jenkins)
6. Docker

## Problem solution

  * Web components docs - https://developers.google.com/web/fundamentals/web-components/

  * Custom elemnts MDN - https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements
  
  * Text field design - https://material.io/components/text-fields/#

## ETA

**13/09/2019(September 13 2019)**
