// This file contains all the examples mentioned in the readme

exports['asynchronousTest'] = function(test) {
  setTimeout(function() {
    // make an assertion (these are just commonjs assertions)
    test.ok(true);
    // finish the test
    test.finished();
  },50);
};

exports['synchronousTest'] = function(test) {
  test.ok(true);
  test.finished();
};

exports['test assertions expected (fails)'] = function(test) {
  test.numAssertions = 3;

  test.ok(true);
  test.finished();
  // this test will fail!
}

exports['test catch sync error'] = function(test) {
  var e = new Error();

  test.uncaughtExceptionHandler = function(err) {
    test.equal(e, err);
    test.finished();
  }

  throw e;
};

if (module == require.main) {
  require('../async_testing').run(__filename, process.ARGV);
}
