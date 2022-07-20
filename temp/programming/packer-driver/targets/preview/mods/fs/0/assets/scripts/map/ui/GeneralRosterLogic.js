System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Sprite, Layout, color, GeneralCampType, GeneralHeadLogic, GeneralItemType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, GeneralRosterLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGeneralCampType(extras) {
    _reporterNs.report("GeneralCampType", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralConfig(extras) {
    _reporterNs.report("GeneralConfig", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralHeadLogic(extras) {
    _reporterNs.report("GeneralHeadLogic", "./GeneralHeadLogic", _context.meta, extras);
  }

  _export("GeneralItemType", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Layout = _cc.Layout;
      color = _cc.color;
    }, function (_unresolved_2) {
      GeneralCampType = _unresolved_2.GeneralCampType;
    }, function (_unresolved_3) {
      GeneralHeadLogic = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "796ac8y0RhCLL4O+UJVy1OH", "GeneralRosterLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      // /**军队命令*/
      _export("GeneralItemType", GeneralItemType = class GeneralItemType {});

      _defineProperty(GeneralItemType, "GeneralInfo", 0);

      _defineProperty(GeneralItemType, "GeneralDispose", 1);

      _defineProperty(GeneralItemType, "GeneralConScript", 2);

      _defineProperty(GeneralItemType, "GeneralNoThing", 3);

      _defineProperty(GeneralItemType, "GeneralSelect", 4);

      _export("default", GeneralRosterLogic = (_dec = ccclass('GeneralRosterLogic'), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Layout), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = (_class2 = (_temp = class GeneralRosterLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nameLabel", _descriptor, this);

          _initializerDefineProperty(this, "spritePic", _descriptor2, this);

          _initializerDefineProperty(this, "costLabel", _descriptor3, this);

          _initializerDefineProperty(this, "starLayout", _descriptor4, this);

          _initializerDefineProperty(this, "campLabel", _descriptor5, this);

          _initializerDefineProperty(this, "armLabel", _descriptor6, this);

          _defineProperty(this, "_cfg", null);
        }

        setData(cfg) {
          this.updateItem(cfg);
        }

        updateItem(cfg) {
          // console.log("updateItem");
          this._cfg = cfg;
          this.nameLabel.string = this._cfg.name;
          this.spritePic.getComponent(_crd && GeneralHeadLogic === void 0 ? (_reportPossibleCrUseOfGeneralHeadLogic({
            error: Error()
          }), GeneralHeadLogic) : GeneralHeadLogic).setHeadId(this._cfg.cfgId);
          this.showStar(this._cfg.star, 0);

          if (this.costLabel) {
            this.costLabel.string = this._cfg.cost + "";
          }

          if (this._cfg.camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
            error: Error()
          }), GeneralCampType) : GeneralCampType).Han) {
            this.campLabel.string = "汉";
          } else if (this._cfg.camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
            error: Error()
          }), GeneralCampType) : GeneralCampType).Qun) {
            this.campLabel.string = "群";
          } else if (this._cfg.camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
            error: Error()
          }), GeneralCampType) : GeneralCampType).Wei) {
            this.campLabel.string = "魏";
          } else if (this._cfg.camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
            error: Error()
          }), GeneralCampType) : GeneralCampType).Shu) {
            this.campLabel.string = "蜀";
          } else if (this._cfg.camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
            error: Error()
          }), GeneralCampType) : GeneralCampType).Wu) {
            this.campLabel.string = "吴";
          }

          this.armLabel.string = this.armstr(this._cfg.arms);
        }

        showStar(star, star_lv) {
          if (star === void 0) {
            star = 3;
          }

          if (star_lv === void 0) {
            star_lv = 0;
          }

          var childen = this.starLayout.node.children;

          for (var i = 0; i < childen.length; i++) {
            if (i < star) {
              childen[i].active = true;

              if (i < star_lv) {
                childen[i].getComponent(Sprite).color = color(255, 0, 0);
              } else {
                childen[i].getComponent(Sprite).color = color(255, 255, 255);
              }
            } else {
              childen[i].active = false;
            }
          }
        }

        armstr(arms) {
          // console.log("armstr:", arms);
          var str = "";

          if (arms.indexOf(1) >= 0 || arms.indexOf(4) >= 0 || arms.indexOf(7) >= 0) {
            str += "步";
          } else if (arms.indexOf(2) >= 0 || arms.indexOf(5) >= 0 || arms.indexOf(8) >= 0) {
            str += "弓";
          } else if (arms.indexOf(3) >= 0 || arms.indexOf(6) >= 0 || arms.indexOf(9) >= 0) {
            str += "骑";
          }

          return str;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spritePic", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "costLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "starLayout", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "campLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "armLabel", [_dec7], {
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
//# sourceMappingURL=GeneralRosterLogic.js.map