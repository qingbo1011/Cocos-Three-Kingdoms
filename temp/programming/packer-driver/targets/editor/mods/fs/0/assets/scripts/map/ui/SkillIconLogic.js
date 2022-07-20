System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SpriteFrame, Label, Sprite, SkillCommand, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, SkillIconLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfgSkill(extras) {
    _reporterNs.report("gSkill", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillCommand(extras) {
    _reporterNs.report("SkillCommand", "../../skill/SkillCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "../../skill/SkillProxy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SpriteFrame = _cc.SpriteFrame;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      SkillCommand = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "11559QlfDNF86kg5ya1McF9", "SkillIconLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", SkillIconLogic = (_dec = ccclass('SkillIconLogic'), _dec2 = property([SpriteFrame]), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class SkillIconLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sps", _descriptor, this);

          _initializerDefineProperty(this, "lvLab", _descriptor2, this);

          _defineProperty(this, "_data", null);
        }

        setData(data, gdata) {
          this._data = data;

          if (this._data == null) {
            this.getComponent(Sprite).spriteFrame = null;
          } else {
            var conf = (_crd && SkillCommand === void 0 ? (_reportPossibleCrUseOfSkillCommand({
              error: Error()
            }), SkillCommand) : SkillCommand).getInstance().proxy.getSkillCfg(data.cfgId);

            if (conf.trigger <= this.sps.length) {
              this.getComponent(Sprite).spriteFrame = this.sps[conf.trigger - 1];
            } else {
              this.getComponent(Sprite).spriteFrame = null;
            }
          }

          if (gdata) {
            if (this.lvLab) {
              this.lvLab.string = "lv:" + gdata.lv;
            }
          } else {
            if (this.lvLab) {
              this.lvLab.string = "";
            }
          }
        }

        isEmpty() {
          return this._data == null;
        }

        getSkill() {
          return this._data;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sps", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lvLab", [_dec3], {
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
//# sourceMappingURL=SkillIconLogic.js.map