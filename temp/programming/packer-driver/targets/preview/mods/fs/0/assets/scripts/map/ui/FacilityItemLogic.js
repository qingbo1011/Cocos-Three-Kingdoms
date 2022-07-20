System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, DateUtil, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, FacilityItemLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacility(extras) {
    _reporterNs.report("Facility", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacilityConfig(extras) {
    _reporterNs.report("FacilityConfig", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../utils/EventMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      DateUtil = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f5e7zqa+ZPr7S2A5qyWEc9", "FacilityItemLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FacilityItemLogic = (_dec = ccclass('FacilityItemLogic'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class FacilityItemLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "labelRate", _descriptor, this);

          _initializerDefineProperty(this, "labelName", _descriptor2, this);

          _initializerDefineProperty(this, "labelTime", _descriptor3, this);

          _initializerDefineProperty(this, "lockNode", _descriptor4, this);

          _defineProperty(this, "type", 0);

          _defineProperty(this, "isUnlock", false);

          _defineProperty(this, "cityId", 0);

          _defineProperty(this, "data", null);

          _defineProperty(this, "cfg", null);
        }

        onLoad() {
          this.node.on(Node.EventType.TOUCH_END, this.onTouchItem, this);
        }

        onDestroy() {
          this.node.off(Node.EventType.TOUCH_END, this.onTouchItem, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        updateItem() {
          this.labelRate.string = this.data.level + "/" + this.cfg.upLevels.length;
          this.labelName.string = this.cfg.name;
          this.lockNode.active = !this.isUnlock;
        }

        onTouchItem() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("select_facility_item", this.cityId, this.data.type);
        }

        setData(cityId, data, cfg, isUnlock) {
          // console.log("setData:", data);
          this.cityId = cityId;
          this.data = data;
          this.cfg = cfg;
          this.isUnlock = isUnlock;

          if (this.data.isUping()) {
            this.startUpTime();
          } else {
            this.stopCountDown();
          }

          this.updateItem();
        }

        countDown() {
          if (this.data.isUping()) {
            this.labelTime.string = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).converSecondStr(this.data.upLastTime());
          } else {
            this.stopCountDown();
          }
        }

        stopCountDown() {
          this.unscheduleAllCallbacks();
          this.labelTime.string = "";
        }

        startUpTime() {
          this.stopCountDown();
          this.schedule(this.countDown, 1.0);
          this.countDown();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelRate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lockNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FacilityItemLogic.js.map