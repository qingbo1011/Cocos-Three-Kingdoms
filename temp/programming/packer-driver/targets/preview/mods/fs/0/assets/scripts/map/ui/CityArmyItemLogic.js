System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, Sprite, ArmyCmd, GeneralCommand, ArmyCommand, MapUICommand, GeneralHeadLogic, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _temp, _crd, ccclass, property, CityArmyItemLogic;

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

  function _reportPossibleCrUseOfGeneralConfig(extras) {
    _reporterNs.report("GeneralConfig", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralData(extras) {
    _reporterNs.report("GeneralData", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./MapUICommand", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ArmyCmd = _unresolved_2.ArmyCmd;
    }, function (_unresolved_3) {
      GeneralCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      ArmyCommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      MapUICommand = _unresolved_5.default;
    }, function (_unresolved_6) {
      GeneralHeadLogic = _unresolved_6.default;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac85e6RrC9Gs7UwkWDptes6", "CityArmyItemLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CityArmyItemLogic = (_dec = ccclass('CityArmyItemLogic'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec(_class = (_class2 = (_temp = class CityArmyItemLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "infoNode", _descriptor, this);

          _initializerDefineProperty(this, "maskNode", _descriptor2, this);

          _initializerDefineProperty(this, "tipNode", _descriptor3, this);

          _initializerDefineProperty(this, "labelTip", _descriptor4, this);

          _initializerDefineProperty(this, "headIcon", _descriptor5, this);

          _initializerDefineProperty(this, "labelId", _descriptor6, this);

          _initializerDefineProperty(this, "labelState", _descriptor7, this);

          _initializerDefineProperty(this, "labelLv", _descriptor8, this);

          _initializerDefineProperty(this, "labelName", _descriptor9, this);

          _initializerDefineProperty(this, "labelArms", _descriptor10, this);

          _initializerDefineProperty(this, "labelSoldierCnt", _descriptor11, this);

          _initializerDefineProperty(this, "labelVice1", _descriptor12, this);

          _initializerDefineProperty(this, "labelVice2", _descriptor13, this);

          _defineProperty(this, "order", 0);

          _defineProperty(this, "_cityId", 0);

          _defineProperty(this, "_data", null);

          _defineProperty(this, "_isOpened", true);

          _defineProperty(this, "_isOut", true);
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
          if (this._data && armyData.id == this._data.id) {
            this.setArmyData(this._cityId, armyData);
          }
        }

        onClickItem() {
          if (this.maskNode.active == false) {
            if (this._isOut) {
              if (this._data) {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emit("open_army_setting", this._cityId, this._data.order);
              }
            } else {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit("open_army_setting", this._cityId, this.order);
            }
          }
        }

        updateItem() {
          console.log("cityarmyitem:", this._data);

          if (this._isOpened == false) {
            return;
          }

          if (this._data && this._data.generals[0] != 0) {
            //有数据 并且配置了第一个将
            this.tipNode.active = false;
            this.infoNode.active = true;
            var generals = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().getArmyGenerals(this._data);
            var firstGeneralCfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(generals[0].cfgId);
            var curSoldierCnt = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().getArmyCurSoldierCnt(this._data);
            var totalSoldierCnt = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().getArmyTotalSoldierCntByGenerals(generals);

            if (this._data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Reclaim) {
              //屯田中
              this.labelState.string = "屯田中...";
            } else if (this._data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Conscript) {
              this.labelState.string = "征兵中...";
            } else if (this._data.cmd > 0) {
              this.labelState.string = "队伍外派中...";
            } else {
              this.labelState.string = "";
            }

            this.labelId.string = this.order + "";
            this.headIcon.getComponent(_crd && GeneralHeadLogic === void 0 ? (_reportPossibleCrUseOfGeneralHeadLogic({
              error: Error()
            }), GeneralHeadLogic) : GeneralHeadLogic).setHeadId(generals[0].cfgId);
            this.labelLv.string = generals[0].level + "";
            this.labelName.string = firstGeneralCfg.name;
            this.labelSoldierCnt.string = curSoldierCnt + "/" + totalSoldierCnt; // this.labelArms.string = "";

            if (generals[1]) {
              var sencondGeneralCfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                error: Error()
              }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(generals[1].cfgId);
              this.labelVice1.string = sencondGeneralCfg.name;
            } else {
              this.labelVice1.string = "无";
            }

            if (generals[2]) {
              var thirdGeneralCfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                error: Error()
              }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(generals[2].cfgId);
              this.labelVice2.string = thirdGeneralCfg.name;
            } else {
              this.labelVice2.string = "无";
            }
          } else {
            if (this._isOut) {
              this.tipNode.active = true;
              this.infoNode.active = false;
              this.labelTip.string = "暂无队伍";
            } else {
              this.tipNode.active = true;
              this.infoNode.active = false;
              this.labelTip.string = "点击编制队伍";
            }
          }
        }

        isOpenedArmy(bool, isOut) {
          this._isOpened = bool;
          this.infoNode.active = false;
          this.maskNode.active = !this._isOpened;
          this.tipNode.active = !this._isOpened;
          this._isOut = isOut;

          if (this._isOpened == false) {
            if (this._isOut) {
              this.labelTip.string = " 等级" + this.order + "开启";
            } else {
              var desName = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
                error: Error()
              }), MapUICommand) : MapUICommand).getInstance().proxy.getFacilityCfgByType(13).name;
              this.labelTip.string = desName + " 等级" + this.order + "开启";
            }
          }
        }

        setArmyData(cityId, data) {
          this._cityId = cityId;
          this._data = data;
          this.updateItem();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "infoNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelTip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "headIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelId", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labelState", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "labelLv", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "labelName", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "labelArms", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "labelSoldierCnt", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "labelVice1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "labelVice2", [_dec14], {
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
//# sourceMappingURL=CityArmyItemLogic.js.map