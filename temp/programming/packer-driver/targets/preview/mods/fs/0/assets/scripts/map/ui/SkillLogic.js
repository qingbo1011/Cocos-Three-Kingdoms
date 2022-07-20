System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ScrollView, SkillCommand, Skill, EventMgr, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, SkillLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGeneralData(extras) {
    _reporterNs.report("GeneralData", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillCommand(extras) {
    _reporterNs.report("SkillCommand", "../../skill/SkillCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "../../skill/SkillProxy", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      SkillCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      Skill = _unresolved_3.Skill;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4147bvBrdJI75wdJqsKWHl9", "SkillLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", SkillLogic = (_dec = ccclass('SkillLogic'), _dec2 = property(ScrollView), _dec(_class = (_class2 = (_temp = class SkillLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);

          _defineProperty(this, "_general", null);

          _defineProperty(this, "_type", 0);

          _defineProperty(this, "_skillPos", -1);
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("skill_list_info", this.onSkillList, this);
          (_crd && SkillCommand === void 0 ? (_reportPossibleCrUseOfSkillCommand({
            error: Error()
          }), SkillCommand) : SkillCommand).getInstance().qrySkillList();
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        onSkillList() {
          var skills = (_crd && SkillCommand === void 0 ? (_reportPossibleCrUseOfSkillCommand({
            error: Error()
          }), SkillCommand) : SkillCommand).getInstance().proxy.skills;
          var skillConfs = (_crd && SkillCommand === void 0 ? (_reportPossibleCrUseOfSkillCommand({
            error: Error()
          }), SkillCommand) : SkillCommand).getInstance().proxy.skillConfs;
          var arr = [];

          for (var i = 0; i < skillConfs.length; i++) {
            var found = false;
            var cfg = skillConfs[i];
            var dSkill = new (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill)();
            dSkill.cfgId = cfg.cfgId;
            dSkill.generals = [];

            for (var j = 0; j < skills.length; j++) {
              var skill = skills[j];

              if (skill.cfgId == cfg.cfgId) {
                found = true;
                arr.push(skill);
                break;
              }
            }

            if (found == false) {
              arr.push(dSkill);
            }
          }

          var comp = this.scrollView.node.getComponent("ListLogic");
          comp.setData(arr);
        }

        onClickClose() {
          this.node.active = false;
        }

        onClickItem(data, target) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("open_skillInfo", data, this._type, this._general, this._skillPos);
        }
        /** type:0普通展示、type:1 学习、2:武将查看 **/


        setData(type, general, skillPos) {
          this._type = type;
          this._general = general;
          this._skillPos = skillPos;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
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
//# sourceMappingURL=SkillLogic.js.map