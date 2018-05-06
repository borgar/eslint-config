/* eslint-disable no-unused-vars, no-undef */

// ====================
// === declarations ===
// ====================

// 1 line per variable
const a = 1;
const b = 2;
const c = 2;

// allow multi spaces when aligned
const rowing   = 1;
const jumping  = 2;
const swinging = 2;   // multi spaces before comment

// allow lax-spacing in json-style structures
const myTable = [
  [ 'foo',    1,   12, 12, 1234 ], // multi spaces before comment
  [ 'foo', 1234,  123,  1,   12 ],
  [ 'foo',   12, 1234,  1, 1234 ]
];

// object props quoting and lax value spacing
const obj1 = {
  foo1: 123,
  foo2: 123
};
const obj2 = {
  'fo-o1': 123,
  'foo1':  123,
  'foo2':  123
};


// =================
// === functions ===
// =================

// space after name when declaring a function
function myFunc (val = 1) {
  const n = 10;
  const i = 20;
  return (val * i * (val / n));
}

// no space when calling a function
myFunc(10 + 10);

// arrow functions
const arr = [ 1, 2, 3 ].map(d => d * d);
arr.forEach(d => {
  myFunc(d);
});

function* generator () {
  yield 1;
}


// =============
// === loops ===
// =============

for (let i = 0; i < 10; i++) {
  myFunc(i);
}

let i = 0;
while (i < 10) {
  myFunc(i++);
}


// =============
// === class ===
// =============

class Bar extends Foo {

  static who () {
    return 'Bar';
  }

  constructor (init = 0) {
    super();
    this.value = init;
  }

  get val () {
    return this.value;
  }

  inc () {
    this.value++;
  }

};

