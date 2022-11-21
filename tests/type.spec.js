import tap from "tap";
import { type } from "./../dist/main.js";
import pkg from "../package.json" assert { type: 'json' };
const {name: pkgName } = pkg;

tap.test(pkgName, (suite) => {
  suite.test('type', (typeSuite) => {
    typeSuite.test('detection', (det) => {
      det.same(type.describe().type, "undefined");
      det.same(type.describe(true).type, "boolean");
      det.same(type.describe(Symbol('foo')).type, "symbol");
      det.same(type.describe(() => {}).type, "function");
      det.same(type.describe(null).type, "null");
      det.same(type.describe(0).type, "number");
      det.same(type.describe('123').type, "string");
      det.same(type.describe(['123']).type, "array");
      det.same(type.describe({foo: 'bar'}).type, "object");
      det.same(type.describe(new Map([['foo', 'bar']])).type, "map");
      det.end();
    })
    typeSuite.end();
  });

  suite.test('describeNumber', (dn) => {
    dn.same(type.describeNumber('foo'), 'nan');
    dn.same(type.describeNumber(1), 'integer');
    dn.same(type.describeNumber(2.4), 'decimal');
    dn.same(type.describeNumber(Number.POSITIVE_INFINITY), 'infinite')
    dn.end();
  })

  suite.test('documentation', (doc) => {
    console.log('type.describe(null) = ', JSON.stringify(type.describe(null)))
    console.log('type.describe(3) = ', JSON.stringify(type.describe(3)))
    console.log('type.describe([]) = ', JSON.stringify(type.describe([])))

    console.log('type.describe(null, true) = ', JSON.stringify(type.describe(null, true)))
    console.log('type.describe(3, true) = ', JSON.stringify(type.describe(3, true)))
    console.log('type.describe([], true) = ', JSON.stringify(type.describe([], true)))

    console.log('type.describe(null, "family") = ', JSON.stringify(type.describe(null, "family")))
    console.log('type.describe(3, "family") = ', JSON.stringify(type.describe(3, "family")))
    console.log('type.describe([], "family") = ', JSON.stringify(type.describe([], "family")))
 doc.end();
  }, {skip: true});
  suite.end();
})
