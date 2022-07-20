System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, SpriteFrame, SkillCommand, SkillIconLogic, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, SkillItemLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSkillCommand(extras) {
    _reporterNs.report("SkillCommand", "../../skill/SkillCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "../../skill/SkillProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillIconLogic(extras) {
    _reporterNs.report("SkillIconLogic", "./SkillIconLogic", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      SkillCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      SkillIconLogic = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9bc6dMKpg1GiIuTE0qLi5ow", "SkillItemLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", SkillItemLogic = (_dec = ccclass('SkillItemLogic'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property([SpriteFrame]), _dec(_class = (_class2 = (_temp = class SkillItemLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nameLab", _descriptor, this);

          _initializerDefineProperty(this, "limitLab", _descriptor2, this);

          _initializerDefineProperty(this, "icon", _descriptor3, this);

          _initializerDefineProperty(this, "sps", _descriptor4, this);

          _defineProperty(this, "_skill", null);
        }

        onEnable() {}

        updateItem(skill) {
          var conf = (_crd && SkillCommand === void 0 ? (_reportPossibleCrUseOfSkillCommand({
            error: Error()
          }), SkillCommand) : SkillCommand).getInstance().proxy.getSkillCfg(skill.cfgId);
          this._skill = skill;
          this.nameLab.string = conf.name;
          this.icon.getComponent(_crd && SkillIconLogic === void 0 ? (_reportPossibleCrUseOfSkillIconLogic({
            error: Error()
          }), SkillIconLogic) : SkillIconLogic).setData(skill, null);
          this.limitLab.string = this._skill.generals.length + "/" + conf.limit;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "limitLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sps", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SkillItemLogic.js.map