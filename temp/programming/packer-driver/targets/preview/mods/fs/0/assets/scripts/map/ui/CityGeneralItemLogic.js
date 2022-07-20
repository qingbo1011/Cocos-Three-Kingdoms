System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, Sprite, ProgressBar, ArmyCommand, GeneralCommand, GeneralCampType, DateUtil, GeneralHeadLogic, MapUICommand, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _temp, _crd, ccclass, property, CityGeneralItemLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfArmyCommand(extras) {
    _reporterNs.report("ArmyCommand", "../../general/ArmyCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyData(extras) {
    _reporterNs.report("ArmyData", "../../general/ArmyProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../../general/GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralCampType(extras) {
    _reporterNs.report("GeneralCampType", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralConfig(extras) {
    _reporterNs.report("GeneralConfig", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralData(extras) {
    _reporterNs.report("GeneralData", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralHeadLogic(extras) {
    _reporterNs.report("GeneralHeadLogic", "./GeneralHeadLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./MapUICommand", _context.meta, extras);
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
      ArmyCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      GeneralCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      GeneralCampType = _unresolved_4.GeneralCampType;
    }, function (_unresolved_5) {
      DateUtil = _unresolved_5.default;
    }, function (_unresolved_6) {
      GeneralHeadLogic = _unresolved_6.default;
    }, function (_unresolved_7) {
      MapUICommand = _unresolved_7.default;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d98d+7X19NRqXnWzppXCW7", "CityGeneralItemLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CityGeneralItemLogic = (_dec = ccclass('CityGeneralItemLogic'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Sprite), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(ProgressBar), _dec18 = property(Node), _dec(_class = (_class2 = (_temp = class CityGeneralItemLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "infoNode", _descriptor, this);

          _initializerDefineProperty(this, "addNode", _descriptor2, this);

          _initializerDefineProperty(this, "lockNode", _descriptor3, this);

          _initializerDefineProperty(this, "btnDown", _descriptor4, this);

          _initializerDefineProperty(this, "labelTitle", _descriptor5, this);

          _initializerDefineProperty(this, "headIcon", _descriptor6, this);

          _initializerDefineProperty(this, "labelLv", _descriptor7, this);

          _initializerDefineProperty(this, "labelName", _descriptor8, this);

          _initializerDefineProperty(this, "labelArms", _descriptor9, this);

          _initializerDefineProperty(this, "labelSoldierCnt", _descriptor10, this);

          _initializerDefineProperty(this, "labelCost", _descriptor11, this);

          _initializerDefineProperty(this, "labelCamp", _descriptor12, this);

          _initializerDefineProperty(this, "labelTip", _descriptor13, this);

          _initializerDefineProperty(this, "labelConTime", _descriptor14, this);

          _initializerDefineProperty(this, "labelConCnt", _descriptor15, this);

          _initializerDefineProperty(this, "progressBar", _descriptor16, this);

          _initializerDefineProperty(this, "conBg", _descriptor17, this);

          _defineProperty(this, "index", 0);

          _defineProperty(this, "_order", 0);

          _defineProperty(this, "_cityId", 0);

          _defineProperty(this, "_data", null);

          _defineProperty(this, "_soldierCnt", 0);

          _defineProperty(this, "_totalSoldierCnt", 0);

          _defineProperty(this, "_conCnt", 0);

          _defineProperty(this, "_conTime", 0);

          _defineProperty(this, "_isUnlock", false);
        }

        onLoad() {
          this.schedule(this.updateCon, 1.0);
        }

        onEnable() {
          this.conBg.active = false;
        }

        onDestroy() {
          this._data = null;
        }

        onClickDown() {
          (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
            error: Error()
          }), ArmyCommand) : ArmyCommand).getInstance().generalDispose(this._cityId, this._data.id, this._data.order, -1, null);
        }

        onClickItem() {
          if (this._data) {
            //点击展示武将信息
            var cfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(this._data.cfgId);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("open_general_des", cfg, this._data);
          } else if (this.addNode.active) {
            //上阵武将
            var generalArr = this.getAllGenerals();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("open_general_choose", generalArr, this.index);
          }
        }

        getAllGenerals() {
          var cityArmyData = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
            error: Error()
          }), ArmyCommand) : ArmyCommand).getInstance().proxy.getArmyList(this._cityId);
          var general = null;
          var arr = [];

          for (var i = 0; i < cityArmyData.length; i++) {
            if (cityArmyData[i]) {
              arr = arr.concat(cityArmyData[i].generals);

              for (var j = 0; j < cityArmyData[i].generals.length; j++) {
                if (cityArmyData[i].generals[j] > 0) {
                  general = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                    error: Error()
                  }), GeneralCommand) : GeneralCommand).getInstance().proxy.getMyGeneral(cityArmyData[i].generals[j]);

                  if (general) {
                    arr = arr.concat((_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                      error: Error()
                    }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralIds(general.cfgId));
                  }
                }
              }
            }
          }

          return arr;
        }

        updateItem() {
          if (this.index == 0) {
            this.labelTitle.string = "主将";
          } else {
            this.labelTitle.string = "副将";
          }

          if (this._isUnlock == false) {
            //未解锁
            this.infoNode.active = false;
            this.addNode.active = false;
            this.lockNode.active = true;
            this.btnDown.active = false;
            var desName = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
              error: Error()
            }), MapUICommand) : MapUICommand).getInstance().proxy.getFacilityCfgByType(14).name;
            this.labelTip.string = desName + " 等级" + this._order + "开启";
            this.conBg.active = false;
          } else if (this._data == null) {
            //未配置武将
            this.infoNode.active = false;
            this.addNode.active = true;
            this.lockNode.active = false;
            this.btnDown.active = false;
            this.conBg.active = false;
          } else {
            //展示武将信息
            this.infoNode.active = true;
            this.addNode.active = false;
            this.lockNode.active = false;
            this.btnDown.active = true;
            this.updateCon();
            var cfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(this._data.cfgId);
            this.headIcon.getComponent(_crd && GeneralHeadLogic === void 0 ? (_reportPossibleCrUseOfGeneralHeadLogic({
              error: Error()
            }), GeneralHeadLogic) : GeneralHeadLogic).setHeadId(this._data.cfgId);
            this.labelLv.string = this._data.level + "";
            this.labelName.string = cfg.name;
            this.labelSoldierCnt.string = this._soldierCnt + "/" + this._totalSoldierCnt;
            this.progressBar.progress = this._soldierCnt / this._totalSoldierCnt;
            this.labelCost.string = "Cost " + cfg.cost;

            switch (this._data.config.camp) {
              case (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
                error: Error()
              }), GeneralCampType) : GeneralCampType).Han:
                this.labelCamp.string = "汉";
                break;

              case (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
                error: Error()
              }), GeneralCampType) : GeneralCampType).Qun:
                this.labelCamp.string = "群";
                break;

              case (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
                error: Error()
              }), GeneralCampType) : GeneralCampType).Wei:
                this.labelCamp.string = "魏";
                break;

              case (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
                error: Error()
              }), GeneralCampType) : GeneralCampType).Shu:
                this.labelCamp.string = "蜀";
                break;

              case (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
                error: Error()
              }), GeneralCampType) : GeneralCampType).Wu:
                this.labelCamp.string = "吴";
                break;

              default:
                this.labelCamp.string = "无";
                break;
            }
          }
        }

        updateCon() {
          if ((_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).isAfterServerTime(this._conTime * 1000)) {
            this.conBg.active = false;
            this.labelConTime.string = "";
            this.labelConCnt.string = "";
          } else {
            this.conBg.active = true;
            this.labelConTime.string = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).leftTimeStr(this._conTime * 1000);
            this.labelConCnt.string = "+" + this._conCnt;
          }
        }

        setData(cityId, order, data, soldierCnt, totalSoldierCnt, conCnt, conTime, isUnlock) {
          this._cityId = cityId;
          this._order = order;
          this._data = data;
          this._soldierCnt = soldierCnt;
          this._totalSoldierCnt = totalSoldierCnt;
          this._conCnt = conCnt;
          this._conTime = conTime;
          this._isUnlock = isUnlock;
          this.updateItem();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "infoNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "addNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lockNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnDown", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelTitle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "headIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labelLv", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "labelName", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "labelArms", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "labelSoldierCnt", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "labelCost", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "labelCamp", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "labelTip", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "labelConTime", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "labelConCnt", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "conBg", [_dec18], {
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
//# sourceMappingURL=CityGeneralItemLogic.js.map