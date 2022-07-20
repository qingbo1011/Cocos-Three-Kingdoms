System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Button, LoginCommand, DateUtil, Tools, MapUICommand, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, CollectLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLoginCommand(extras) {
    _reporterNs.report("LoginCommand", "../../login/LoginCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTools(extras) {
    _reporterNs.report("Tools", "../../utils/Tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./MapUICommand", _context.meta, extras);
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
      Button = _cc.Button;
    }, function (_unresolved_2) {
      LoginCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      DateUtil = _unresolved_3.default;
    }, function (_unresolved_4) {
      Tools = _unresolved_4.Tools;
    }, function (_unresolved_5) {
      MapUICommand = _unresolved_5.default;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27056sAcxxLwK4+e9Pp87Fb", "CollectLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CollectLogic = (_dec = ccclass('CollectLogic'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Button), _dec(_class = (_class2 = (_temp = class CollectLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cdLab", _descriptor, this);

          _initializerDefineProperty(this, "timesLab", _descriptor2, this);

          _initializerDefineProperty(this, "goldLab", _descriptor3, this);

          _initializerDefineProperty(this, "collectBtn", _descriptor4, this);

          _defineProperty(this, "_data", null);
        }

        onEnable() {
          console.log("add interior_openCollect");
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("interior_openCollect", this.onOpenCollect, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("interior_collect", this.onCollect, this);
          var roleRes = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleResData();
          this.goldLab.string = (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
            error: Error()
          }), Tools) : Tools).numberToShow(roleRes.gold_yield);
          (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().interiorOpenCollect();
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        onOpenCollect(msg) {
          console.log("onOpenCollect:", msg);
          this._data = msg;
          this.startCountDown();
        }

        onCollect(msg) {
          console.log("onOpenCollect:", msg);
          this._data = msg;
          this.startCountDown();
        }

        onClickClose() {
          this.node.active = false;
        }

        onClickCollect() {
          (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().interiorCollect();
        }

        startCountDown() {
          this.stopCountDown();
          this.schedule(this.countDown, 1.0);
          this.countDown();
        }

        countDown() {
          this.timesLab.string = this._data.cur_times + "/" + this._data.limit;
          var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).leftTime(this._data.next_time);

          if (diff > 0) {
            this.cdLab.string = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).leftTimeStr(this._data.next_time);
            this.collectBtn.interactable = false;
          } else {
            this.cdLab.string = "目前可以征收";
            this.collectBtn.interactable = true;
          }
        }

        stopCountDown() {
          this.unschedule(this.countDown);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cdLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timesLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "goldLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "collectBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CollectLogic.js.map