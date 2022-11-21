import tap from "tap";
import { hello } from "./../dist/main.js";
import pkg from "../package.json" assert { type: 'json' };
const {name: pkgName } = pkg;

tap.test(pkgName, (suite) => {
  suite.test('hello', (h) => {
    h.test('basic', (b) => {
      const phrase = hello('World');
      b.same(phrase, "Hello there, World!");
      b.end();
    })
    h.end();
  });
  suite.end();
})
