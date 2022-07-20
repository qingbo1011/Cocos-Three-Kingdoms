System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, SpriteAtlas, MapResType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, ResLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapResData(extras) {
    _reporterNs.report("MapResData", "../MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResType(extras) {
    _reporterNs.report("MapResType", "../MapProxy", _context.meta, extras);
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
      MapResType = _unresolved_2.MapResType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c340eiDXAVNZpAgR7iJq0lQ", "ResLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ResLogic = (_dec = ccclass('ResLogic'), _dec2 = property(Sprite), _dec3 = property(SpriteAtlas), _dec4 = property(SpriteAtlas), _dec(_class = (_class2 = (_temp = class ResLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spr", _descriptor, this);

          _initializerDefineProperty(this, "resourceAtlas1", _descriptor2, this);

          _initializerDefineProperty(this, "resourceAtlas2", _descriptor3, this);

          _defineProperty(this, "_data", null);
        }

        onLoad() {}

        onDestroy() {}

        setResourceData(data) {
          this._data = data;

          if (data.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).WOOD) {
            //木头
            if (data.level == 1) {
              this.spr.spriteFrame = this.resourceAtlas1.getSpriteFrame("land_ground_1_1");
            } else if (data.level == 2) {
              this.spr.spriteFrame = this.resourceAtlas1.getSpriteFrame("land_ground_2_1");
            } else {
              this.spr.spriteFrame = this.resourceAtlas2.getSpriteFrame("land_2_" + (data.level - 2));
            }
          } else if (data.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).IRON) {
            //铁
            if (data.level == 1) {
              this.spr.spriteFrame = this.resourceAtlas1.getSpriteFrame("land_ground_1_1");
            } else if (data.level == 2) {
              this.spr.spriteFrame = this.resourceAtlas1.getSpriteFrame("land_ground_2_1");
            } else {
              this.spr.spriteFrame = this.resourceAtlas2.getSpriteFrame("land_4_" + (data.level - 2));
            }
          } else if (data.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).STONE) {
            //石头
            if (data.level == 1) {
              this.spr.spriteFrame = this.resourceAtlas1.getSpriteFrame("land_ground_1_1");
            } else if (data.level == 2) {
              this.spr.spriteFrame = this.resourceAtlas1.getSpriteFrame("land_ground_2_1");
            } else {
              this.spr.spriteFrame = this.resourceAtlas2.getSpriteFrame("land_2_" + (data.level - 2));
            }
          } else if (data.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).GRAIN) {
            //田
            if (data.level == 1) {
              this.spr.spriteFrame = this.resourceAtlas1.getSpriteFrame("land_ground_1_1");
            } else if (data.level == 2) {
              this.spr.spriteFrame = this.resourceAtlas1.getSpriteFrame("land_ground_2_1");
            } else {
              this.spr.spriteFrame = this.resourceAtlas2.getSpriteFrame("land_1_" + (data.level - 2));
            }
          } else if (data.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).SYS_FORTRESS) {
            //系统要塞
            this.spr.spriteFrame = this.resourceAtlas2.getSpriteFrame("sys_fortress");
          } else {
            this.spr.spriteFrame = null;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resourceAtlas1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resourceAtlas2", [_dec4], {
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
//# sourceMappingURL=ResLogic.js.map