import { app } from "../../app/app";
import { expect } from "chai";

(async (): Promise<void> => {
  const result = await app();
  describe("app", () => {
    it("should return string", (done: Mocha.Done) => {
      expect(result).to.equal("Test string");
      done();
    });
  });

  run();
})();
