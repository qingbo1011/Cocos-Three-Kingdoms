System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, SpriteAtlas, Node, Vec3, DateUtil, MapCommand, MapResType, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, SysCityLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResType(extras) {
    _reporterNs.report("MapResType", "../MapProxy", _context.meta, extras);
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
      SpriteAtlas = _cc.SpriteAtlas;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      DateUtil = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapResType = _unresolved_4.MapResType;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0edddWPqDJLQpMYy9qVlD6C", "SysCityLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", SysCityLogic = (_dec = ccclass('SysCityLogic'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(SpriteAtlas), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class SysCityLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "upSpr", _descriptor, this);

          _initializerDefineProperty(this, "downSpr", _descriptor2, this);

          _initializerDefineProperty(this, "resourceAtlas", _descriptor3, this);

          _initializerDefineProperty(this, "mianNode", _descriptor4, this);

          _defineProperty(this, "_limitTime", 0);

          _defineProperty(this, "_data", null);
        }

        onLoad() {
          this._limitTime = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().proxy.getWarFree();
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("unionChange", this.onUnionChange, this);
        }

        onDisable() {
          this._data = null;
          this.unscheduleAllCallbacks();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        setCityData(data) {
          // console.log("setCityData:", data);
          this._data = data;
          this.updateUI();
        }

        onUnionChange(rid, unionId, parentId) {
          if (this._data.rid == rid) {
            this._data.unionId = unionId;
            this._data.parentId = parentId;
          }

          this.updateUI();
        }

        updateUI() {
          if (this._data.type != (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).SYS_CITY) {
            this.node.active = false;
            return;
          } else {
            this.node.active = true;
          }

          if (this._data.level >= 8) {
            this.node.scale = new Vec3(1.5, 1.5, 1.5);
          } else if (this._data.level >= 5) {
            this.node.scale = new Vec3(1, 1, 1);
          } else {
            this.node.scale = new Vec3(0.5, 0.5, 0.5);
          }

          if (!this._data.rid) {
            this.upSpr.spriteFrame = null;
            this.downSpr.spriteFrame = null;
          } else if (this._data.rid == (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().buildProxy.myId) {
            this.upSpr.spriteFrame = this.resourceAtlas.getSpriteFrame("blue_2_3");
            this.downSpr.spriteFrame = this.resourceAtlas.getSpriteFrame("blue_1_3");
          } else if (this._data.unionId > 0 && this._data.unionId == (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().buildProxy.myUnionId) {
            this.upSpr.spriteFrame = this.resourceAtlas.getSpriteFrame("green_2_3");
            this.downSpr.spriteFrame = this.resourceAtlas.getSpriteFrame("green_1_3");
          } else if (this._data.unionId > 0 && this._data.unionId == (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().buildProxy.myParentId) {
            this.upSpr.spriteFrame = this.resourceAtlas.getSpriteFrame("purple_2_3");
            this.downSpr.spriteFrame = this.resourceAtlas.getSpriteFrame("purple_1_3");
          } else if (this._data.parentId > 0 && this._data.parentId == (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().buildProxy.myUnionId) {
            this.upSpr.spriteFrame = this.resourceAtlas.getSpriteFrame("yellow_2_3");
            this.downSpr.spriteFrame = this.resourceAtlas.getSpriteFrame("yellow_1_3");
          } else {
            this.upSpr.spriteFrame = this.resourceAtlas.getSpriteFrame("red_2_3");
            this.downSpr.spriteFrame = this.resourceAtlas.getSpriteFrame("red_1_3");
          }

          var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).getServerTime() - this._data.occupyTime;

          console.log("diff", diff, this._limitTime);

          if (this._data.parentId > 0 && diff < this._limitTime) {
            this.mianNode.active = true;
            this.stopCountDown();
            this.schedule(this.countDown, 1.0);
          } else {
            this.mianNode.active = false;
          }
        }

        countDown() {
          var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).getServerTime() - this._data.occupyTime;

          if (diff > this._limitTime) {
            this.stopCountDown();
            this.mianNode.active = false;
          }
        }

        stopCountDown() {
          this.unscheduleAllCallbacks();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "upSpr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "downSpr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resourceAtlas", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mianNode", [_dec5], {
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
//# sourceMappingURL=SysCityLogic.js.map