System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7559IVL1JBup4UY18YGBnF", "GameConfig", undefined);

      _export("GameConfig", GameConfig = {
        serverUrl: "ws://127.0.0.1:8003",
        webUrl: "http://127.0.0.1:8088"
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameConfig.js.map