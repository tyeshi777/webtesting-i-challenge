const enhancer = require("./enhancer.js");
// test away!
describe("enhancer.js", () => {
  describe("succeed() method", () => {
    it("adds 1 to the enhancement", () => {
      const item = { enhancement: 16 };
      const actual = enhancer.succeed(item);
      console.log("FUNCTION", actual);
      expect(actual.enhancement).toBe(17);
      console.log("ACTUAL", actual.enhancement);
    });
    it("enhancement equals 20 doesn't increment", () => {
      const item = {
        enhancement: 20
      };
      const actual = enhancer.succeed(item);

      expect(actual.enhancement).toBe(20);
    });
  });

  describe("fail() method", () => {
    it("decreases the durability by 10", () => {
      const item = { enhancement: 18, durability: 80 };
      const actual = enhancer.fail(item);

      expect(actual.durability).toBe(70);
    });
    it("decreases the durability by 5", () => {
      const item = { enhancement: 10, durability: 60 };
      const actual = enhancer.fail(item);

      expect(actual.durability).toBe(55);
    });
    it("decreases the enhancement by 1", () => {
      const item = { enhancement: 18 };
      const actual = enhancer.fail(item);

      expect(actual.enhancement).toBe(17);
    });
  });
});
