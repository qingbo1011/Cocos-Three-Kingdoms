System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetEvent, EventMgr, HttpInvoke, _crd, HttpInvokeType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfNetEvent(extras) {
    _reporterNs.report("NetEvent", "../socket/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../utils/EventMgr", _context.meta, extras);
  }

  _export({
    HttpInvoke: void 0,
    HttpInvokeType: void 0
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

      _cclegacy._RF.push({}, "11351i5CKxGVbl0CXFMSsQK", "HttpInvoke", undefined);

      (function (HttpInvokeType) {
        HttpInvokeType[HttpInvokeType["GET"] = 0] = "GET";
        HttpInvokeType[HttpInvokeType["POST"] = 1] = "POST";
      })(HttpInvokeType || _export("HttpInvokeType", HttpInvokeType = {}));

      _export("HttpInvoke", HttpInvoke = class HttpInvoke {
        constructor() {
          _defineProperty(this, "_receiveTime", 15000);

          _defineProperty(this, "_name", "");

          _defineProperty(this, "_otherData", null);
        }

        init(name, _otherData = null) {
          this._name = name;
          this._otherData = _otherData;
        }

        onComplete(data) {
          var json = {};

          if (data) {
            try {
              json = JSON.parse(data.responseText);
            } catch (e) {
              console.log("onComplete--e:", e);
            }
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(this._name, json, this._otherData);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
            error: Error()
          }), NetEvent) : NetEvent).ServerRequestSucess, json);
        }

        doSend(url, params, type) {
          var self = this;
          let xhr = new XMLHttpRequest();
          xhr.timeout = this._receiveTime;
          console.log("doSend:", url, params, type);

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              console.log("onreadystatechange:", xhr.responseText);

              if (xhr.status >= 200 && xhr.status < 400) {
                self.onComplete(xhr);
              } else {
                self.onComplete(null);
              }
            }
          };

          xhr.ontimeout = function () {
            console.log("xhr.ontimeout");
            self.onComplete(null);
          };

          xhr.onerror = function (e) {
            console.log("xhr.onerror:", xhr.readyState, xhr.status, e);
            self.onComplete(null);
          };

          if (type == HttpInvokeType.GET) {
            url += "?" + params;
            xhr.open("GET", url, true);
            xhr.send();
          } else if (type == HttpInvokeType.POST) {
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
            xhr.send(params);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HttpInvoke.js.map