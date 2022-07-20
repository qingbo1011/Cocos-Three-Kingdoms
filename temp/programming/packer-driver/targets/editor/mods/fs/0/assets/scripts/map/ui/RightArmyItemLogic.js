System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, Sprite, UITransform, ArmyCmd, GeneralCommand, ArmyCommand, MapCommand, DateUtil, GeneralHeadLogic, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, RightArmyItemLogic;

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

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "../MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../../utils/DateUtil", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ArmyCmd = _unresolved_2.ArmyCmd;
    }, function (_unresolved_3) {
      GeneralCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      ArmyCommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      MapCommand = _unresolved_5.default;
    }, function (_unresolved_6) {
      DateUtil = _unresolved_6.default;
    }, function (_unresolved_7) {
      GeneralHeadLogic = _unresolved_7.default;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c30485ys+BNt7gLNKBoIP0Q", "RightArmyItemLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", RightArmyItemLogic = (_dec = ccclass('RightArmyItemLogic'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = (_temp = class RightArmyItemLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelInfo", _descriptor, this);

          _initializerDefineProperty(this, "labelPos", _descriptor2, this);

          _initializerDefineProperty(this, "bottomNode", _descriptor3, this);

          _initializerDefineProperty(this, "headIcon", _descriptor4, this);

          _initializerDefineProperty(this, "labelSoldierCnt", _descriptor5, this);

          _initializerDefineProperty(this, "labelStrength", _descriptor6, this);

          _initializerDefineProperty(this, "labelMorale", _descriptor7, this);

          _initializerDefineProperty(this, "btnBack", _descriptor8, this);

          _initializerDefineProperty(this, "btnSetting", _descriptor9, this);

          _defineProperty(this, "order", 0);

          _defineProperty(this, "_data", null);

          _defineProperty(this, "_firstGeneral", null);

          _defineProperty(this, "_qryReturnTime", 0);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_general", this.onUpdateGeneral, this);
          this.node.getComponent(UITransform).height -= this.bottomNode.getComponent(UITransform).height;
          this.bottomNode.active = false;
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
          this._data = null;
        }

        update() {
          if (this._data && (this._data.state > 0 || this._data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
            error: Error()
          }), ArmyCmd) : ArmyCmd).Reclaim)) {
            let nowTime = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).getServerTime();
            let time = 0;

            if (this._data.state > 0) {
              //行军或者撤退中
              time = Math.max(0, this._data.endTime - nowTime);
            } else {
              //屯田中
              time = Math.max(0, (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                error: Error()
              }), GeneralCommand) : GeneralCommand).getInstance().proxy.getCommonCfg().reclamation_time * 1000 - (nowTime - this._data.endTime)); // if (time == 0 && nowTime - this._qryReturnTime > 2000) {
              //     //屯田结束 主动请求撤退
              //     this._qryReturnTime = nowTime;
              //     this.onClickBack();
              // }
            }

            this.labelPos.string = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).converSecondStr(time);
          }
        }

        onUpdateGeneral() {}

        onClickTop() {
          this.bottomNode.active = !this.bottomNode.active;

          if (this.bottomNode.active) {
            this.node.getComponent(UITransform).height += this.bottomNode.getComponent(UITransform).height;
          } else {
            this.node.getComponent(UITransform).height -= this.bottomNode.getComponent(UITransform).height;
          }
        }

        onClickBack() {
          if (this._data) {
            let cityData = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity();
            (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().generalAssignArmy(this._data.id, (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Return, cityData.x, cityData.y, null);
          }
        }

        onClickSetting() {
          if (this._data) {
            let cityData = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().cityProxy.getMyCityById(this._data.cityId);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("open_army_setting", this._data.cityId, this.order);
          }
        }

        updateGeneralByData() {
          let stateStr = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
            error: Error()
          }), ArmyCommand) : ArmyCommand).getInstance().getArmyStateDes(this._data);
          var teamName = "";

          if (this._firstGeneral) {
            let cfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(this._firstGeneral.cfgId);
            teamName = cfg.name;
            this.headIcon.getComponent(_crd && GeneralHeadLogic === void 0 ? (_reportPossibleCrUseOfGeneralHeadLogic({
              error: Error()
            }), GeneralHeadLogic) : GeneralHeadLogic).setHeadId(this._firstGeneral.cfgId);
            this.labelStrength.string = "体力 " + this._firstGeneral.physical_power + "/" + cfg.physical_power_limit;
          }

          this.labelInfo.string = stateStr + " " + teamName + "队";
        }

        updateItem() {
          if (this._data && this._data.generals[0] != 0) {
            // console.log("updateItem", this._data);
            this.node.active = true;
            this._firstGeneral = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.getMyGeneral(this._data.generals[0]);
            this.updateGeneralByData();
            this.labelPos.string = "(" + this._data.x + ", " + this._data.y + ")";
            this.labelSoldierCnt.string = "骑兵 " + (this._data.soldiers[0] + this._data.soldiers[1] + this._data.soldiers[2]);

            if (this._data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Idle) {
              this.btnSetting.active = true;
              let cityData = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
                error: Error()
              }), MapCommand) : MapCommand).getInstance().cityProxy.getMyCityById(this._data.cityId);

              if (cityData && cityData.x == this._data.fromX && cityData.y == this._data.fromY) {
                //代表在城池里面
                this.btnBack.active = false;
              } else {
                //代表在城外据点待命
                this.btnBack.active = true;
              }
            } else if (this._data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Conscript) {
              this.btnSetting.active = false;
              this.btnBack.active = false;
            } else if (this._data.state == 0 && this._data.cmd != (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Reclaim) {
              //停留的时候才能配置队伍和撤退
              this.btnSetting.active = false;
              this.btnBack.active = true;
            } else {
              this.btnSetting.active = false;
              this.btnBack.active = false;
            }
          } else {
            this._firstGeneral = null;
            this.node.active = false;
          }
        }

        setArmyData(data) {
          this._data = data;
          this.updateItem();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelInfo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelPos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bottomNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "headIcon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelSoldierCnt", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelStrength", [_dec7], {
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnBack", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnSetting", [_dec10], {
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
//# sourceMappingURL=RightArmyItemLogic.js.map