System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, SpriteAtlas, MapCommand, EventMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, ResBuildLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      MapCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "596a6o645FAyoUbUtvUeoKK", "ResBuildLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ResBuildLogic = (_dec = ccclass('ResBuildLogic'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(SpriteAtlas), _dec(_class = (_class2 = (_temp = class ResBuildLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "upSpr", _descriptor, this);

          _initializerDefineProperty(this, "downSpr", _descriptor2, this);

          _initializerDefineProperty(this, "resourceAtlas", _descriptor3, this);

          _defineProperty(this, "_data", null);
        }

        onLoad() {}

        onDestroy() {}

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("unionChange", this.onUnionChange, this);
        }

        onDisable() {
          this._data = null;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        onUnionChange(rid, unionId, parentId) {
          if (this._data.rid == rid) {
            this._data.unionId = unionId;
            this._data.parentId = parentId;
          }

          this.updateUI();
        }

        setBuildData(data) {
          this._data = data;
          this.updateUI();
        }

        updateUI() {
          if (this._data) {
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
          }
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ResBuildLogic.js.map