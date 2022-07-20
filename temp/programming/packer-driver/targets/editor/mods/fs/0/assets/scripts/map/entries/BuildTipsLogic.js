System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Node, Label, DateUtil, MapCommand, EventMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, BuildTipsLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapBuildData(extras) {
    _reporterNs.report("MapBuildData", "../MapBuildProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../MapCommand", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Node = _cc.Node;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      DateUtil = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ee880rPRBPSYwCOPv6ns9x", "BuildTipsLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", BuildTipsLogic = (_dec = ccclass('BuildTipsLogic'), _dec2 = property(Sprite), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = (_temp = class BuildTipsLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "warFreeSprite", _descriptor, this);

          _defineProperty(this, "_data", null);

          _defineProperty(this, "_warFreeTime", 0);

          _initializerDefineProperty(this, "giveUpNode", _descriptor2, this);

          _initializerDefineProperty(this, "giveUpLabTime", _descriptor3, this);
        }

        onLoad() {}

        onEnable() {
          this.giveUpNode.active = false;
          this._warFreeTime = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().proxy.getWarFree();
        }

        onDisable() {
          this._data = null;
          this.unscheduleAllCallbacks();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        setBuildData(data) {
          this._data = data;
          this.updateUI();
        }

        updateUI() {
          if (this._data) {
            var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).getServerTime() - this._data.occupyTime;

            var isShow = diff < this._warFreeTime && this._data.rid > 0;
            this.warFreeSprite.node.active = isShow;

            if (isShow) {
              this.stopWarFree();
              this.schedule(this.countDownWarFree, 1.0);
              this.countDownWarFree();
            }

            if (this._data.rid == (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().cityProxy.myId) {
              this.startGiveUp();
            }
          }
        }

        countDownWarFree() {
          var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).getServerTime() - this._data.occupyTime;

          if (diff > this._warFreeTime) {
            this.stopWarFree();
            this.warFreeSprite.node.active = false;
          }
        }

        stopWarFree() {
          this.unschedule(this.countDownWarFree);
        }

        startGiveUp() {
          this.stopGiveUp();
          this.schedule(this.updateGiveUpTime, 1);
          this.updateGiveUpTime();
        }

        stopGiveUp() {
          this.unschedule(this.updateGiveUpTime);
          this.giveUpNode.active = false;
        }

        updateGiveUpTime() {
          if (this._data.isInGiveUp() == false) {
            this.stopGiveUp();
          } else {
            this.giveUpNode.active = true;
            this.giveUpLabTime.string = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).leftTimeStr(this._data.giveUpTime);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "warFreeSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "giveUpNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "giveUpLabTime", [_dec4], {
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
//# sourceMappingURL=BuildTipsLogic.js.map