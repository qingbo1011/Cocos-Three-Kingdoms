System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetEvent, EventMgr, NetTimerData, NetTimer, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfNetEvent(extras) {
    _reporterNs.report("NetEvent", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../utils/EventMgr", _context.meta, extras);
  }

  _export({
    NetTimerData: void 0,
    NetTimer: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      NetEvent = _unresolved_2.NetEvent;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac6aaIAP0tAjaWlhnWaffV9", "NetTimer", undefined);

      _export("NetTimerData", NetTimerData = class NetTimerData {
        constructor() {
          _defineProperty(this, "name", "");

          _defineProperty(this, "seq", 0);

          _defineProperty(this, "timeId", 0);
        }

      });

      _export("NetTimer", NetTimer = class NetTimer {
        constructor() {
          _defineProperty(this, "_tokens", null);

          _defineProperty(this, "_tokenId", 0);
        }

        init() {
          this._tokens = new Map();
          this._tokenId = 0;
        }

        schedule(data, delay) {
          if (delay === void 0) {
            delay = 0;
          }

          var self = this;
          var token = this._tokenId++;
          var id = setTimeout(function () {
            self.handleTimeout(token);
          }, delay);
          var timerData = new NetTimerData();
          timerData.name = data.name;
          timerData.seq = data.seq;
          timerData.timeId = id; // console.log("NetTimer token size:",this._tokens.size,token)

          this._tokens.set(token, timerData);
        }

        handleTimeout(id) {
          if (id === void 0) {
            id = 0;
          }

          var data = this._tokens.get(id);

          if (data) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
              error: Error()
            }), NetEvent) : NetEvent).ServerTimeOut, data);

            this._tokens.delete(id);
          }
        }

        cancel(data) {
          if (data == null) {
            return;
          }

          var id = -1;

          if (typeof data == 'object') {
            id = this.getKey(data);
          } else {
            id = data;
          } // console.log("NetTimer token id:",id)


          if (id >= 0) {
            this._tokens.delete(id);

            clearTimeout(id); // console.log("NetTimer token cancel:",this._tokens.size)
          }
        }

        getKey(data) {
          var return_key = -1;

          this._tokens.forEach((value, key) => {
            if (value.name == data.name && value.seq == data.seq) {
              return_key = key;
            }
          });

          return return_key;
        }

        destroy() {
          var self = this;

          this._tokens.forEach(function (key, value) {
            self.cancel(key);
          });

          this._tokens.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NetTimer.js.map