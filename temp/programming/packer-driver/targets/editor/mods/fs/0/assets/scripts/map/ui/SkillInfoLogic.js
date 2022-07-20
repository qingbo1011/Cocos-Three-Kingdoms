System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, Button, GeneralCommand, SkillCommand, SkillIconLogic, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp, _crd, ccclass, property, SkillInfoLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSkillConf(extras) {
    _reporterNs.report("SkillConf", "../../config/skill/Skill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillOutline(extras) {
    _reporterNs.report("SkillOutline", "../../config/skill/Skill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../../general/GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralData(extras) {
    _reporterNs.report("GeneralData", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillCommand(extras) {
    _reporterNs.report("SkillCommand", "../../skill/SkillCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "../../skill/SkillProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillIconLogic(extras) {
    _reporterNs.report("SkillIconLogic", "./SkillIconLogic", _context.meta, extras);
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
      Button = _cc.Button;
    }, function (_unresolved_2) {
      GeneralCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      SkillCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      SkillIconLogic = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f6b5w4AgNGCLo7mvmDqYgj", "SkillInfoLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", SkillInfoLogic = (_dec = ccclass('SkillInfoLogic'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Button), _dec(_class = (_class2 = (_temp = class SkillInfoLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nameLab", _descriptor, this);

          _initializerDefineProperty(this, "icon", _descriptor2, this);

          _initializerDefineProperty(this, "lvLab", _descriptor3, this);

          _initializerDefineProperty(this, "triggerLab", _descriptor4, this);

          _initializerDefineProperty(this, "targetLab", _descriptor5, this);

          _initializerDefineProperty(this, "armLab", _descriptor6, this);

          _initializerDefineProperty(this, "rateLab", _descriptor7, this);

          _initializerDefineProperty(this, "curDesLab", _descriptor8, this);

          _initializerDefineProperty(this, "nextDesLab", _descriptor9, this);

          _initializerDefineProperty(this, "learnBtn", _descriptor10, this);

          _initializerDefineProperty(this, "lvBtn", _descriptor11, this);

          _initializerDefineProperty(this, "giveUpBtn", _descriptor12, this);

          _defineProperty(this, "_data", null);

          _defineProperty(this, "_cfg", null);

          _defineProperty(this, "_general", null);

          _defineProperty(this, "_type", 0);

          _defineProperty(this, "_skillPos", -1);
        }

        onEnable() {
          this.learnBtn.node.active = false;
        }

        onClickClose() {
          this.node.active = false;
        }

        setData(data, type, general, skillPos) {
          console.log("setData Skill:", data, general);
          var conf = (_crd && SkillCommand === void 0 ? (_reportPossibleCrUseOfSkillCommand({
            error: Error()
          }), SkillCommand) : SkillCommand).getInstance().proxy.getSkillCfg(data.cfgId);
          this.icon.getComponent(_crd && SkillIconLogic === void 0 ? (_reportPossibleCrUseOfSkillIconLogic({
            error: Error()
          }), SkillIconLogic) : SkillIconLogic).setData(data, null);
          var outLine = (_crd && SkillCommand === void 0 ? (_reportPossibleCrUseOfSkillCommand({
            error: Error()
          }), SkillCommand) : SkillCommand).getInstance().proxy.outLine;
          this._cfg = conf;
          this._data = data;
          this._type = type;
          this._general = general;
          this._skillPos = skillPos;
          this.learnBtn.node.active = type == 1;
          this.giveUpBtn.node.active = type == 2;
          this.nameLab.string = conf.name;
          let isShowLv = false;
          let lv = 0;

          if (type == 2) {
            for (let index = 0; index < general.skills.length; index++) {
              const gskill = general.skills[index];

              if (gskill && gskill.cfgId == data.cfgId && gskill.lv <= conf.levels.length) {
                isShowLv = true;
                lv = gskill.lv;
                break;
              }
            }
          }

          this.lvBtn.node.active = isShowLv;

          if (isShowLv) {
            this.lvLab.string = "lv:" + lv;
          } else {
            this.lvLab.string = "";
          }

          this.triggerLab.string = outLine.trigger_type.list[conf.trigger - 1].des;
          this.rateLab.string = conf.levels[0].probability + "%";
          this.targetLab.string = outLine.target_type.list[conf.target - 1].des;
          this.armLab.string = this.armstr(conf.arms);
          var des1 = conf.des;

          for (let index = 0; index < conf.levels[0].effect_value.length; index++) {
            var str = conf.levels[0].effect_value[index] + "";
            des1 = des1.replace("%n%", str);
          }

          this.curDesLab.string = des1;
          var des2 = conf.des;

          for (let index = 0; index < conf.levels[1].effect_value.length; index++) {
            var str = conf.levels[1].effect_value[index] + "";
            des2 = des2.replace("%n%", str);
          }

          this.nextDesLab.string = des2;
        }

        armstr(arms) {
          // console.log("armstr:", arms);
          var str = "";

          if (arms.indexOf(1) >= 0 || arms.indexOf(4) >= 0 || arms.indexOf(7) >= 0) {
            str += "步";
          }

          if (arms.indexOf(2) >= 0 || arms.indexOf(5) >= 0 || arms.indexOf(8) >= 0) {
            str += "弓";
          }

          if (arms.indexOf(3) >= 0 || arms.indexOf(6) >= 0 || arms.indexOf(9) >= 0) {
            str += "骑";
          }

          return str;
        }

        onClickLearn() {
          if (this._general) {
            (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().upSkill(this._general.id, this._cfg.cfgId, this._skillPos);
            this.node.active = false;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("close_skill");
          }
        }

        onClickLv() {
          if (this._general) {
            (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().lvSkill(this._general.id, this._skillPos);
            this.node.active = false;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("close_skill");
          }
        }

        onClickForget() {
          if (this._general) {
            (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().downSkill(this._general.id, this._cfg.cfgId, this._skillPos);
            this.node.active = false;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("close_skill");
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lvLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "triggerLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "targetLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "armLab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rateLab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "curDesLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nextDesLab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "learnBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lvBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "giveUpBtn", [_dec13], {
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
//# sourceMappingURL=SkillInfoLogic.js.map