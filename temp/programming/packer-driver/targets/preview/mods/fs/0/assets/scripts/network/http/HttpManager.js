System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HttpInvoke, HttpInvokeType, HttpManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfHttpInvoke(extras) {
    _reporterNs.report("HttpInvoke", "./HttpInvoke", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpInvokeType(extras) {
    _reporterNs.report("HttpInvokeType", "./HttpInvoke", _context.meta, extras);
  }

  _export("HttpManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      HttpInvoke = _unresolved_2.HttpInvoke;
      HttpInvokeType = _unresolved_2.HttpInvokeType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e31d22rdiVFVbKjzr1pI/ja", "HttpManager", undefined);

      _export("HttpManager", HttpManager = class HttpManager {
        constructor() {
          _defineProperty(this, "_url", "");
        }

        static getInstance() {
          if (this._instance == null) {
            this._instance = new HttpManager();
          }

          return this._instance;
        }

        setWebUrl(url) {
          if (this._url == "" || this._url != url) {
            this._url = url;
          }
        }

        doGet(name, apiUrl, params, otherData) {
          if (otherData === void 0) {
            otherData = null;
          }

          var invoke = new (_crd && HttpInvoke === void 0 ? (_reportPossibleCrUseOfHttpInvoke({
            error: Error()
          }), HttpInvoke) : HttpInvoke)();
          invoke.init(name, otherData);
          invoke.doSend(this._url + apiUrl, params, (_crd && HttpInvokeType === void 0 ? (_reportPossibleCrUseOfHttpInvokeType({
            error: Error()
          }), HttpInvokeType) : HttpInvokeType).GET);
        }

        doPost(name, apiUrl, params, otherData) {
          if (otherData === void 0) {
            otherData = null;
          }

          var invoke = new (_crd && HttpInvoke === void 0 ? (_reportPossibleCrUseOfHttpInvoke({
            error: Error()
          }), HttpInvoke) : HttpInvoke)();
          invoke.init(name, otherData);
          invoke.doSend(this._url + apiUrl, params, (_crd && HttpInvokeType === void 0 ? (_reportPossibleCrUseOfHttpInvokeType({
            error: Error()
          }), HttpInvokeType) : HttpInvokeType).POST);
        }

      });

      _defineProperty(HttpManager, "_instance", null);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HttpManager.js.map