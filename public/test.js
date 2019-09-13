import NumInput from './lib/input.js'

const mask = '+7(985)0II-XX-**';
const error = true;

let wc = document.querySelector("num-input-wc");

wc.mask = mask;
wc.error = error;