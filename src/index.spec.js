import MyClass from "./index";

describe("trying to test my class who depends of another class", () => {
  let test;
  beforeAll(() => {
    test = new MyClass();
  });

  it("should return the A message", () => {
    const myMessage = test.getAMessage();
    expect(myMessage).toBe("this is a message from A class");
  });

  it("should return the B message", () => {
    const myMessage = test.getBMessage();
    expect(myMessage).toBe("this is a message from B class");
  });
});
