import Greeter from "./greeter";

describe("greeter", () => {
  it("should work", () => {
    const toto = new Greeter("fabien");
    expect(toto).toBeInstanceOf(Greeter);
  });
});
