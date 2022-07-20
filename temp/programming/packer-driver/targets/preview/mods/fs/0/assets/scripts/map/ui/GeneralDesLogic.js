System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Layout, Prefab, Node, instantiate, GeneralCommand, GeneralData, SkillCommand, GeneralItemLogic, GeneralItemType, SkillIconLogic, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _temp, _crd, ccclass, property, GeneralDesLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../../general/GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralData(extras) {
    _reporterNs.report("GeneralData", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillCommand(extras) {
    _reporterNs.report("SkillCommand", "../../skill/SkillCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralItemLogic(extras) {
    _reporterNs.report("GeneralItemLogic", "./GeneralItemLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralItemType(extras) {
    _reporterNs.report("GeneralItemType", "./GeneralItemLogic", _context.meta, extras);
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
      Layout = _cc.Layout;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      GeneralCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      GeneralData = _unresolved_3.GeneralData;
    }, function (_unresolved_4) {
      SkillCommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      GeneralItemLogic = _unresolved_5.default;
      GeneralItemType = _unresolved_5.GeneralItemType;
    }, function (_unresolved_6) {
      SkillIconLogic = _unresolved_6.default;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4986fQ2cPVDc5gTYaRI81t3", "GeneralDesLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GeneralDesLogic = (_dec = ccclass('GeneralDesLogic'), _dec2 = property(Label), _dec3 = property(Layout), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Prefab), _dec14 = property(Node), _dec15 = property([Node]), _dec16 = property([Label]), _dec(_class = (_class2 = (_temp = class GeneralDesLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nameLab", _descriptor, this);

          _initializerDefineProperty(this, "srollLayout", _descriptor2, this);

          _initializerDefineProperty(this, "lvLabel", _descriptor3, this);

          _initializerDefineProperty(this, "foreLabel", _descriptor4, this);

          _initializerDefineProperty(this, "defenseLabel", _descriptor5, this);

          _initializerDefineProperty(this, "speedLabel", _descriptor6, this);

          _initializerDefineProperty(this, "strategyLabel", _descriptor7, this);

          _initializerDefineProperty(this, "destroyLabel", _descriptor8, this);

          _initializerDefineProperty(this, "expLabel", _descriptor9, this);

          _initializerDefineProperty(this, "powerLabel", _descriptor10, this);

          _initializerDefineProperty(this, "costLabel", _descriptor11, this);

          _initializerDefineProperty(this, "generalItemPrefab", _descriptor12, this);

          _initializerDefineProperty(this, "generalItemParent", _descriptor13, this);

          _initializerDefineProperty(this, "skillIcons", _descriptor14, this);

          _initializerDefineProperty(this, "skillNameLab", _descriptor15, this);

          _defineProperty(this, "_currData", null);

          _defineProperty(this, "_cfgData", null);

          _defineProperty(this, "_nameObj", {});

          _defineProperty(this, "_addPrObj", {});

          _defineProperty(this, "_generalNode", null);
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_general", this.updateGeneral, this);
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        onLoad() {
          this._nameObj = {
            force: "武力",
            strategy: "战略",
            defense: "防御",
            speed: "速度",
            destroy: "破坏"
          };
          this._generalNode = instantiate(this.generalItemPrefab);
          this._generalNode.parent = this.generalItemParent;
        }

        updateGeneral() {
          var data = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().proxy.getMyGeneral(this._currData.id);

          if (data) {
            this.setData(this._cfgData, data);
          }
        }

        setData(cfgData, curData) {
          this._currData = curData;
          this._cfgData = cfgData;
          var nextCfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralLevelCfg(this._currData.level + 1);
          var levelExp = nextCfg ? nextCfg.exp : "MAX";
          var maxLevel = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().proxy.getMaxLevel();
          this.lvLabel.string = '等级:' + this._currData.level + "/" + maxLevel;
          this.expLabel.string = "经验:" + curData.exp + "/" + levelExp;
          this.nameLab.string = this._cfgData.name;
          this._addPrObj = {
            force: this._currData.force_added,
            strategy: this._currData.strategy_added,
            defense: this._currData.defense_added,
            speed: this._currData.speed_added,
            destroy: this._currData.destroy_added
          };
          this.foreLabel.string = this.getAttrStr("force");
          this.strategyLabel.string = this.getAttrStr("strategy");
          this.defenseLabel.string = this.getAttrStr("defense");
          this.speedLabel.string = this.getAttrStr("speed");
          this.destroyLabel.string = this.getAttrStr("destroy");

          var com = this._generalNode.getComponent(_crd && GeneralItemLogic === void 0 ? (_reportPossibleCrUseOfGeneralItemLogic({
            error: Error()
          }), GeneralItemLogic) : GeneralItemLogic);

          if (com) {
            com.updateItem(this._currData, (_crd && GeneralItemType === void 0 ? (_reportPossibleCrUseOfGeneralItemType({
              error: Error()
            }), GeneralItemType) : GeneralItemType).GeneralNoThing);
          }

          this.powerLabel.string = "体力:" + curData.physical_power + "/" + cfgData.physical_power_limit;
          this.costLabel.string = "cost:" + cfgData.cost;

          for (var index = 0; index < curData.skills.length; index++) {
            var gSkill = curData.skills[index];
            var icon = this.skillIcons[index];
            var iconNameLab = this.skillNameLab[index];

            if (gSkill == null) {
              icon.getComponent(_crd && SkillIconLogic === void 0 ? (_reportPossibleCrUseOfSkillIconLogic({
                error: Error()
              }), SkillIconLogic) : SkillIconLogic).setData(null, null);
              iconNameLab.string = "";
            } else {
              var skillConf = (_crd && SkillCommand === void 0 ? (_reportPossibleCrUseOfSkillCommand({
                error: Error()
              }), SkillCommand) : SkillCommand).getInstance().proxy.getSkillCfg(gSkill.cfgId);
              var skill = (_crd && SkillCommand === void 0 ? (_reportPossibleCrUseOfSkillCommand({
                error: Error()
              }), SkillCommand) : SkillCommand).getInstance().proxy.getSkill(gSkill.cfgId);

              if (skillConf && skill) {
                icon.getComponent(_crd && SkillIconLogic === void 0 ? (_reportPossibleCrUseOfSkillIconLogic({
                  error: Error()
                }), SkillIconLogic) : SkillIconLogic).setData(skill, gSkill);
                iconNameLab.string = skillConf.name;
              } else {
                icon.getComponent(_crd && SkillIconLogic === void 0 ? (_reportPossibleCrUseOfSkillIconLogic({
                  error: Error()
                }), SkillIconLogic) : SkillIconLogic).setData(null, null);
                iconNameLab.string = "";
              }
            }
          }
        }

        getAttrStr(key) {
          var str = (_crd && GeneralData === void 0 ? (_reportPossibleCrUseOfGeneralData({
            error: Error()
          }), GeneralData) : GeneralData).getPrStr(this._cfgData[key], this._addPrObj[key], this._currData.level, this._cfgData[key + "_grow"]);
          return this._nameObj[key] + ":" + str;
        }

        onClickSkill(event, pos) {
          console.log("event", event, pos);
          var node = event.target;
          var isEmpty = node.getComponent(_crd && SkillIconLogic === void 0 ? (_reportPossibleCrUseOfSkillIconLogic({
            error: Error()
          }), SkillIconLogic) : SkillIconLogic).isEmpty();

          if (isEmpty) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("open_skill", 1, this._currData, pos);
          } else {
            var skill = node.getComponent(_crd && SkillIconLogic === void 0 ? (_reportPossibleCrUseOfSkillIconLogic({
              error: Error()
            }), SkillIconLogic) : SkillIconLogic).getSkill();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("open_skillInfo", skill, 2, this._currData, pos);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "srollLayout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lvLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "foreLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "defenseLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "speedLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "strategyLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "destroyLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "expLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "powerLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "costLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "generalItemPrefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "generalItemParent", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "skillIcons", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "skillNameLab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GeneralDesLogic.js.map