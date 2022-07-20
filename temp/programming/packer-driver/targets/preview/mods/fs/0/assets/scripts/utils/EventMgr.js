System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventHandler, mgr, _crd, EventMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb5c1lZ7SxHJ78RHPpLT7/+", "EventMgr", undefined);

      EventHandler = class EventHandler {
        constructor(handler, target) {
          this.handler = handler;
          this.target = target;
        }

      };
      mgr = class mgr {
        constructor() {
          _defineProperty(this, "events", new Map());

          _defineProperty(this, "targetInName", new Map());
        }

        static instance() {
          if (this._instance == null) {
            this._instance = new mgr();
          }

          return this._instance;
        }

        on(name, handler, target) {
          if (!this.events.has(name)) {
            this.events.set(name, []);
          }

          var events = this.events.get(name);

          for (var i = 0; i < events.length; i++) {
            var _eh = events[i];

            if (_eh.handler == handler && _eh.target == target) {
              //已经添加过了
              console.log("已经添加过了:", name, handler, target);
              return;
            }
          }

          var eh = new EventHandler(handler, target);
          events.push(eh);

          if (!this.targetInName.has(target)) {
            this.targetInName.set(target, new Set());
          }

          var set = this.targetInName.get(target);
          set.add(name);
        }

        off(name, handler, target) {
          if (!this.events.has(name)) {
            return;
          }

          var events = this.events.get(name);

          for (var i = 0; i < events.length; i++) {
            var eh = events[i];

            if (eh.handler == handler && eh.target == target) {
              events.splice(i, i + 1);
              break;
            }
          }
        }

        emit(name) {
          if (!this.events.has(name)) {
            return;
          }

          var events = this.events.get(name);

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          for (var i = 0; i < events.length; i++) {
            var eh = events[i];
            eh.handler.apply(eh.target, args);
          }
        }

        targetOff(target) {
          if (!this.targetInName.has(target)) {
            return;
          }

          var targetInName = this.targetInName.get(target);
          targetInName.forEach(name => {
            if (this.events.has(name)) {
              var events = this.events.get(name);

              for (var i = 0; i < events.length; i++) {
                var eh = events[i];

                if (eh.target == target) {
                  events.splice(i, i + 1);
                  i = i - 1;
                }
              }
            }
          });
          targetInName.clear();
        }

      };

      _defineProperty(mgr, "_instance", null);

      _export("EventMgr", EventMgr = mgr.instance());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EventMgr.js.map