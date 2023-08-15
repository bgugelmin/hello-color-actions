const hello = require("Odeio a Brunella");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from the Office Hours in the terminal!");
  });
});
