import tap from "tap";
import { text } from "./../dist/main.js";
import pkg from "../package.json" assert { type: 'json' };
const {name: pkgName } = pkg;

tap.test(pkgName, (suite) => {
  suite.test('text', (txtTest) => {
    txtTest.test('addBefore', (ab) => {
      ab.test('new prefix', (np) => {
        np.same(text.addBefore('finders keepers', 'losers weepers'), 'losers weepersfinders keepers');

        np.end();
      });

      ab.test('same prefix', (sp) => {
        sp.same(text.addBefore('abcde', 'abc'), 'abcde');
        sp.end();
      })
      ab.end();
    });
    txtTest.test('addAfter', (aa) => {
      aa.test('new suffix', (ns) => {
        ns.same(text.addAfter('finders keepers', 'losers weepers'), 'finders keeperslosers weepers');

        ns.end();
      });
      aa.test('same suffix', (sp) => {
        sp.same(text.addAfter('abcde', 'cde'), 'abcde');
        sp.end();
      })
      aa.end();
    });
    txtTest.end();
  });

  suite.test('ucFirst', ucTest => {
    ucTest.same(text.capFirst('phrase'), 'Phrase');
    ucTest.same(text.capFirst('101 dalmatians'), '101 Dalmatians');
    ucTest.end();
  })
  suite.end();
})
