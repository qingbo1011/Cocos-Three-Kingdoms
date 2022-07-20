System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, inflate, deflate, _crd;

  function _reportPossibleCrUseOfinflate(extras) {
    _reporterNs.report("inflate", "./rawinflate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeflate(extras) {
    _reporterNs.report("deflate", "./rawdeflate", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      inflate = _unresolved_2.inflate;
    }, function (_unresolved_3) {
      deflate = _unresolved_3.deflate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f67bPyKvdArb/JRqKZJS1O", "deflate-js", undefined);

      _export("inflate", inflate);

      _export("deflate", deflate);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=deflate-js.js.map