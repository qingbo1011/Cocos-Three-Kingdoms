System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, Sprite, ProgressBar, ArmyCmd, GeneralCommand, ArmyCommand, GeneralHeadLogic, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, ArmySelectItemLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfArmyCmd(extras) {
    _reporterNs.report("ArmyCmd", "../../general/ArmyProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyData(extras) {
    _reporterNs.report("ArmyData", "../../general/ArmyProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../../general/GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyCommand(extras) {
    _reporterNs.report("ArmyCommand", "../../general/ArmyCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralCommonConfig(extras) {
    _reporterNs.report("GeneralCommonConfig", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralConfig(extras) {
    _reporterNs.report("GeneralConfig", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralData(extras) {
    _reporterNs.report("GeneralData", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralHeadLogic(extras) {
    _reporterNs.report("GeneralHeadLogic", "./GeneralHeadLogic", _context.meta, extras);
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
      Node = _cc.Node;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      ArmyCmd = _unresolved_2.ArmyCmd;
    }, function (_unresolved_3) {
      GeneralCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      ArmyCommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      GeneralHeadLogic = _unresolved_5.default;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6319eCy2xhDcZf//aLKf5Ld", "ArmySelectItemLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ArmySelectItemLogic = (_dec = ccclass('ArmySelectItemLogic'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(ProgressBar), _dec(_class = (_class2 = (_temp = class ArmySelectItemLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tipNode", _descriptor, this);

          _initializerDefineProperty(this, "labelTip", _descriptor2, this);

          _initializerDefineProperty(this, "headIcon", _descriptor3, this);

          _initializerDefineProperty(this, "labelLv", _descriptor4, this);

          _initializerDefineProperty(this, "labelName", _descriptor5, this);

          _initializerDefineProperty(this, "labelState", _descriptor6, this);

          _initializerDefineProperty(this, "labelMorale", _descriptor7, this);

          _initializerDefineProperty(this, "labelSoldierCnt", _descriptor8, this);

          _initializerDefineProperty(this, "labelVice1", _descriptor9, this);

          _initializerDefineProperty(this, "labelVice2", _descriptor10, this);

          _initializerDefineProperty(this, "progressSoldier", _descriptor11, this);

          _defineProperty(this, "_data", null);

          _defineProperty(this, "_cmd", 0);

          _defineProperty(this, "_toX", 0);

          _defineProperty(this, "_toY", 0);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_army", this.onUpdateArmy, this);
          this.tipNode.active = false;
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
          this._data = null;
        }

        onUpdateArmy(armyData) {
          if (armyData.id == this._data.id) {
            this.setArmyData(armyData, this._cmd, this._toX, this._toY);
          }
        }

        onClickItem() {
          if (this.tipNode.active == false) {
            (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().generalAssignArmy(this._data.id, this._cmd, this._toX, this._toY);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("close_army_select_ui");
          } else {
            console.log("军队忙");
          }
        }

        updateItem() {
          if (this._data && this._data.generals[0] != 0) {
            console.log("updateItem", this._data);
            let commonCfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.getCommonCfg();
            let generals = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().getArmyGenerals(this._data);
            let firstGeneralCfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(generals[0].cfgId);
            let power = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().getArmyPhysicalPowerByGenerals(generals);
            let curSoldierCnt = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().getArmyCurSoldierCnt(this._data);
            let totalSoldierCnt = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().getArmyTotalSoldierCntByGenerals(generals);

            if (this._data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Conscript) {
              //体力不足
              this.tipNode.active = true;
              this.labelTip.string = "征兵中...";
            } else if (power < commonCfg.recovery_physical_power) {
              //体力不足
              this.tipNode.active = true;
              this.labelTip.string = "体力不足";
            } else if (this._data.soldiers[0] <= 0) {
              //兵力不足
              this.tipNode.active = true;
              this.labelTip.string = "主将兵力不足";
            } else if (this._data.state > 0) {
              //行军中
              this.tipNode.active = true;
              this.labelTip.string = "行军中...";
            } else if (this._data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Reclaim) {
              //屯田中
              this.tipNode.active = true;
              this.labelTip.string = "屯田中...";
            } else {
              this.tipNode.active = false;
            }

            this.headIcon.getComponent(_crd && GeneralHeadLogic === void 0 ? (_reportPossibleCrUseOfGeneralHeadLogic({
              error: Error()
            }), GeneralHeadLogic) : GeneralHeadLogic).setHeadId(generals[0].cfgId);
            this.labelLv.string = generals[0].level + "";
            this.labelName.string = firstGeneralCfg.name;
            this.labelState.string = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().getArmyStateDes(this._data);
            this.labelSoldierCnt.string = curSoldierCnt + "/" + totalSoldierCnt;
            this.progressSoldier.progress = curSoldierCnt / totalSoldierCnt;

            if (generals[1]) {
              let sencondGeneralCfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                error: Error()
              }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(generals[1].cfgId);
              this.labelVice1.string = sencondGeneralCfg.name;
            } else {
              this.labelVice1.string = "";
            }

            if (generals[2]) {
              let thirdGeneralCfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                error: Error()
              }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(generals[2].cfgId);
              this.labelVice2.string = thirdGeneralCfg.name;
            } else {
              this.labelVice2.string = "";
            }
          }
        }

        setArmyData(data, cmd, x, y) {
          this._data = data;
          this._cmd = cmd;
          this._toX = x;
          this._toY = y; // console.log("setArmyData", arguments);

          this.updateItem();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelTip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "headIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelLv", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelState", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labelMorale", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "labelSoldierCnt", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "labelVice1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "labelVice2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "progressSoldier", [_dec12], {
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
//# sourceMappingURL=ArmySelectItemLogic.js.map