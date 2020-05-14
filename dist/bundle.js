(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.testing = {}));
}(this, (function (exports) { 'use strict';

  class A {
    getMessage() {
      return "this is a message from A class";
    }
  }

  class B {
    getMessage() {
      return "this is a message from B class";
    }
  }

  // import A from "./a_directory/a";

  class MyClass {
    constructor() {}

    getAMessage() {
      const a = new A();
      return a.getMessage();
    }

    getBMessage() {
      const b = new B();
      return b.getMessage();
    }
  }

  exports.MyClass = MyClass;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle.js.map
