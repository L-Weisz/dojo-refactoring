import { helloWorld } from "../HelloWorld";

test('should return Hello, world!', () => {
  expect(helloWorld()).toBe("Hello, world!");
});
