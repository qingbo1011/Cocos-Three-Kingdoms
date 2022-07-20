System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, RequestObject, NetEvent, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    RequestObject: void 0,
    NetEvent: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e98e2S1izxNM7Ge4lXsdHV/", "NetInterface", undefined);

      _export("RequestObject", RequestObject = class RequestObject {
        constructor() {
          _defineProperty(this, "json", null);

          _defineProperty(this, "rspName", "");

          _defineProperty(this, "autoReconnect", 0);

          _defineProperty(this, "seq", 0);

          _defineProperty(this, "sended", false);

          _defineProperty(this, "otherData", {});

          _defineProperty(this, "startTime", 0);
        }

        destroy() {
          this.json = null;
          this.rspName = "";
          this.autoReconnect = 0;
          this.seq = 0;
          this.sended = false;
          this.otherData = {};
          this.startTime = 0;
        }

      }); // Socket接口


      // 请求对象
      _export("NetEvent", NetEvent = class NetEvent {});

      _defineProperty(NetEvent, "ServerTimeOut", "ServerTimeOut");

      _defineProperty(NetEvent, "ServerConnected", "ServerConnected");

      _defineProperty(NetEvent, "ServerHandShake", "ServerHandShake");

      _defineProperty(NetEvent, "ServerCheckLogin", "ServerCheckLogin");

      _defineProperty(NetEvent, "ServerRequesting", "ServerRequesting");

      _defineProperty(NetEvent, "ServerRequestSucess", "ServerRequestSucess");

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NetInterface.js.map