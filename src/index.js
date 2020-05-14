// import A from "./a_directory/a";
// import B from "./b_directory/b";

import A from "global/A";
import B from "global/B";

export class MyClass {
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
