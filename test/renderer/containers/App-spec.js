import assert from 'power-assert';
import clearRequire from 'clear-require';
import proxyquire from 'proxyquire';


/** @test {App} */
describe('renderer/containers/App', () => {
  let App = null;
  beforeEach(() => {
    clearRequire('dacho');
    App = proxyquire('../../../src/js/renderer/containers/App', {
      '../helpers/ipc': proxyquire('../../../src/js/renderer/helpers/ipc', {
        './browser-depends': {
          window: {require: () => {
            return {};
          }}
        }
      })
    });
  });
  it('is defined', () => {
    assert(App);
  });
});
