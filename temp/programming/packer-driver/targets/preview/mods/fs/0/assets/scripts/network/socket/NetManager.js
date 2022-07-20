System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetNode, NetManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfNetNode(extras) {
    _reporterNs.report("NetNode", "./NetNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConnectOptions(extras) {
    _reporterNs.report("NetConnectOptions", "./NetNode", _context.meta, extras);
  }

  _export("NetManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      NetNode = _unresolved_2.NetNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "939d6fiK9FNRYAJoaQEMk36", "NetManager", undefined);

      _export("NetManager", NetManager = class NetManager {
        static getInstance() {
          if (this._instance == null) {
            this._instance = new NetManager();
          }

          return this._instance;
        }

        constructor() {
          _defineProperty(this, "_netNode", null);

          this._netNode = new (_crd && NetNode === void 0 ? (_reportPossibleCrUseOfNetNode({
            error: Error()
          }), NetNode) : NetNode)();

          this._netNode.init();
        }

        connect(options) {
          this._netNode.connect(options);
        }

        send(send_data, otherData, force) {
          if (otherData === void 0) {
            otherData = {};
          }

          if (force === void 0) {
            force = false;
          }

          if (send_data.seq == undefined) {
            send_data.seq = 0;
          }

          this._netNode.send(send_data, otherData, force);
        }

        close(code, reason) {
          this._netNode.closeSocket(code, reason);
        }

        changeConnect(options) {
          this._netNode.changeConect(options);
        }

        tryConnet() {
          this._netNode.tryConnet();
        }

      });

      _defineProperty(NetManager, "_instance", null);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NetManager.js.map