System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, Prefab, EditBox, Slider, instantiate, ArmyCmd, GeneralCommand, ArmyCommand, GeneralCampType, MapUICommand, MapCommand, CityGeneralItemLogic, LoginCommand, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _temp, _crd, ccclass, property, CityArmySettingLogic;

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

  function _reportPossibleCrUseOfGeneralCampType(extras) {
    _reporterNs.report("GeneralCampType", "../../general/GeneralProxy", _context.meta, extras);
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

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "../MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCityAddition(extras) {
    _reporterNs.report("CityAddition", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacility(extras) {
    _reporterNs.report("Facility", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCityGeneralItemLogic(extras) {
    _reporterNs.report("CityGeneralItemLogic", "./CityGeneralItemLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginCommand(extras) {
    _reporterNs.report("LoginCommand", "../../login/LoginCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConscript(extras) {
    _reporterNs.report("Conscript", "../../config/Basci", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      EditBox = _cc.EditBox;
      Slider = _cc.Slider;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ArmyCmd = _unresolved_2.ArmyCmd;
    }, function (_unresolved_3) {
      GeneralCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      ArmyCommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      GeneralCampType = _unresolved_5.GeneralCampType;
    }, function (_unresolved_6) {
      MapUICommand = _unresolved_6.default;
    }, function (_unresolved_7) {
      MapCommand = _unresolved_7.default;
    }, function (_unresolved_8) {
      CityGeneralItemLogic = _unresolved_8.default;
    }, function (_unresolved_9) {
      LoginCommand = _unresolved_9.default;
    }, function (_unresolved_10) {
      EventMgr = _unresolved_10.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa97fYmP8FGvpEI11YSLMZR", "CityArmySettingLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CityArmySettingLogic = (_dec = ccclass('CityArmySettingLogic'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Prefab), _dec14 = property([EditBox]), _dec15 = property([Slider]), _dec16 = property([Node]), _dec(_class = (_class2 = (_temp = class CityArmySettingLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelId", _descriptor, this);

          _initializerDefineProperty(this, "labelCost", _descriptor2, this);

          _initializerDefineProperty(this, "labelSoldierCnt", _descriptor3, this);

          _initializerDefineProperty(this, "labelSpeed", _descriptor4, this);

          _initializerDefineProperty(this, "labelAtkCity", _descriptor5, this);

          _initializerDefineProperty(this, "labelAddition", _descriptor6, this);

          _initializerDefineProperty(this, "labelAdditionTip", _descriptor7, this);

          _initializerDefineProperty(this, "additionTouchNode", _descriptor8, this);

          _initializerDefineProperty(this, "additionTipNode", _descriptor9, this);

          _initializerDefineProperty(this, "labelResCost", _descriptor10, this);

          _initializerDefineProperty(this, "generalLayer", _descriptor11, this);

          _initializerDefineProperty(this, "generalPrefab", _descriptor12, this);

          _initializerDefineProperty(this, "editBoxs", _descriptor13, this);

          _initializerDefineProperty(this, "sliders", _descriptor14, this);

          _initializerDefineProperty(this, "tipNodes", _descriptor15, this);

          _defineProperty(this, "_generalCnt", 3);

          _defineProperty(this, "_order", 0);

          _defineProperty(this, "_cityId", 0);

          _defineProperty(this, "_cityData", null);

          _defineProperty(this, "_isUnlock", false);

          _defineProperty(this, "_data", null);

          _defineProperty(this, "_addition", null);

          _defineProperty(this, "_gengeralLogics", []);

          _defineProperty(this, "_soldiers", null);

          _defineProperty(this, "_totalSoldiers", null);

          _defineProperty(this, "_curConscripts", null);

          _defineProperty(this, "_conTimes", null);

          _defineProperty(this, "_conCnts", null);
        }

        onLoad() {
          this.initView();
          this.additionTipNode.active = false;
          this.additionTouchNode.on(Node.EventType.TOUCH_START, this.onShowAdditionTip, this);
          this.additionTouchNode.on(Node.EventType.TOUCH_END, this.onHideAdditionTip, this);
          this.additionTouchNode.on(Node.EventType.TOUCH_CANCEL, this.onHideAdditionTip, this);
        }

        onDestroy() {
          this._gengeralLogics.length = 0;
        }

        onEnable() {
          this._soldiers = [0, 0, 0];
          this._totalSoldiers = [0, 0, 0];
          this._curConscripts = [0, 0, 0];
          this._conTimes = [0, 0, 0];
          this._conCnts = [0, 0, 0];
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_army", this.onUpdateArmy, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("chosed_general", this.onChooseGeneral, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_city_addition", this.onUpdateAddition, this);
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
          this._data = null;
          this._addition = null;
          this._cityData = null;
        }

        initView() {
          for (let i = 0; i < this._generalCnt; i++) {
            let item = instantiate(this.generalPrefab);
            item.parent = this.generalLayer;
            let comp = item.getComponent(_crd && CityGeneralItemLogic === void 0 ? (_reportPossibleCrUseOfCityGeneralItemLogic({
              error: Error()
            }), CityGeneralItemLogic) : CityGeneralItemLogic);
            comp.index = i;

            this._gengeralLogics.push(comp);
          }
        }

        onShowAdditionTip() {
          if (this._data && this.labelAddition.string != "无") {
            this.additionTipNode.active = true;
          }
        }

        onHideAdditionTip() {
          this.additionTipNode.active = false;
        }

        clearSoldiers() {
          for (let i = 0; i < this._generalCnt; i++) {
            this._soldiers[i] = 0;
            this._totalSoldiers[i] = 0;
          }
        }

        onUpdateArmy(armyData) {
          if (armyData.cityId == this._cityId && armyData.order == this._order) {
            this.setData(this._cityId, this._order);
          }
        }

        onUpdateAddition(cityId) {
          if (this._cityId == cityId) {
            this.setData(this._cityId, this._order);
          }
        }

        onChooseGeneral(cfgData, curData, position) {
          (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
            error: Error()
          }), ArmyCommand) : ArmyCommand).getInstance().generalDispose(this._cityData.cityId, curData.id, this._order, Number(position), this._cityData);
        }

        updateView() {
          let comp = null;
          let generalData = null;
          let generalCfg = null;
          let isUnlock = false;
          let totalCost = 0;
          let soldierCnt = 0;
          let totalSoldierCnt = 0;
          this.clearSoldiers();

          if (this._isUnlock) {
            for (let i = 0; i < this._gengeralLogics.length; i++) {
              comp = this._gengeralLogics[i];
              generalData = null;
              isUnlock = true;

              if (i == 2) {
                //只有第二个副将才需要判断是否解锁
                isUnlock = this._addition.vanguardCnt >= this._order;
              }

              if (this._data && this._data.generals[i] > 0) {
                generalData = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                  error: Error()
                }), GeneralCommand) : GeneralCommand).getInstance().proxy.getMyGeneral(this._data.generals[i]);
                generalCfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                  error: Error()
                }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(generalData.cfgId);
                totalCost += generalCfg.cost;
                this._soldiers[i] = this._data.soldiers[i];
                this._totalSoldiers[i] = generalData.level * 100 + this._addition.soldierCnt;
                soldierCnt += this._soldiers[i];
                totalSoldierCnt += this._totalSoldiers[i];
                this._conTimes[i] = this._data.conTimes[i];
                this._conCnts[i] = this._data.conCnts[i];
              }

              if (isUnlock == false || generalData == null) {
                this.tipNodes[i].active = true;
                this.editBoxs[i].node.active = false;
                this.sliders[i].node.active = false;
              } else {
                this.tipNodes[i].active = false;
                this.editBoxs[i].node.active = true;
                this.sliders[i].node.active = true;
                let totalValue = this._totalSoldiers[i] - this._soldiers[i];

                if (this._data && this._data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
                  error: Error()
                }), ArmyCmd) : ArmyCmd).Conscript) {
                  var can = this._conCnts[i] == 0;
                  this.sliders[i].enabled = can;
                  this.editBoxs[i].string = "0";
                  this.sliders[i].progress = 0;
                  this.editBoxs[i].enabled = can;
                } else if (this._data && this._data.cmd > (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
                  error: Error()
                }), ArmyCmd) : ArmyCmd).Idle || totalValue <= 0) {
                  //不可征兵
                  this.editBoxs[i].string = "0";
                  this.sliders[i].progress = 0;
                  this.editBoxs[i].enabled = false;
                  this.sliders[i].enabled = false;
                  this.setCurConscriptForIndex(i, 0);
                } else {
                  this.editBoxs[i].enabled = true;
                  this.sliders[i].enabled = true;
                  let curValue = 0;

                  if (this.editBoxs[i].string != "") {
                    curValue = Math.max(0, Math.min(parseInt(this.editBoxs[i].string), totalValue));
                  }

                  this.setCurConscriptForIndex(i, curValue);
                }
              }

              comp.setData(this._cityId, this._order, generalData, this._soldiers[i], this._totalSoldiers[i], this._conCnts[i], this._conTimes[i], isUnlock);
            }
          }

          this.labelId.string = "部队" + this._order;
          this.labelCost.string = totalCost + "/" + (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.getMyCityCost(this._cityId);
          this.labelSoldierCnt.string = soldierCnt + "/" + totalSoldierCnt;
          this.labelAddition.string = "无";

          if (this._data) {
            let generals = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().getArmyGenerals(this._data);
            let speed = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().getArmySpeed(generals);
            this.labelSpeed.string = speed.toFixed(2);
            let destroy = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().getArmyDestroy(generals);
            this.labelAtkCity.string = destroy.toFixed(2);
            let camp = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().getArmyCamp(generals);

            if (camp > 0) {
              if (camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
                error: Error()
              }), GeneralCampType) : GeneralCampType).Han && this._addition.han > 0) {
                this.labelAdditionTip.string = "汉阵营加成：" + this._addition.han;
                this.labelAddition.string = "阵营";
              } else if (camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
                error: Error()
              }), GeneralCampType) : GeneralCampType).Qun && this._addition.han > 0) {
                this.labelAdditionTip.string = "群阵营加成：" + this._addition.qun;
                this.labelAddition.string = "阵营";
              } else if (camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
                error: Error()
              }), GeneralCampType) : GeneralCampType).Wei && this._addition.han > 0) {
                this.labelAdditionTip.string = "魏阵营加成：" + this._addition.wei;
                this.labelAddition.string = "阵营";
              } else if (camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
                error: Error()
              }), GeneralCampType) : GeneralCampType).Shu && this._addition.han > 0) {
                this.labelAdditionTip.string = "蜀阵营加成：" + this._addition.shu;
                this.labelAddition.string = "阵营";
              } else if (camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
                error: Error()
              }), GeneralCampType) : GeneralCampType).Wu && this._addition.han > 0) {
                this.labelAdditionTip.string = "吴阵营加成：" + this._addition.wu;
                this.labelAddition.string = "阵营";
              }
            }
          } else {
            this.labelSpeed.string = "0";
          }

          this.updateResCost();
        }

        setCurConscriptForIndex(index, cnt = 0) {
          let maxCnt = this._totalSoldiers[index] - this._soldiers[index];
          cnt = Math.min(cnt, maxCnt);
          let percent = cnt / maxCnt;
          this.editBoxs[index].string = cnt + "";
          this.sliders[index].progress = percent;
          this._curConscripts[index] = cnt;
        }

        getTotalConscriptCnt() {
          let totalCnt = 0;

          for (let i = 0; i < this._curConscripts.length; i++) {
            totalCnt += this._curConscripts[i];
          }

          return totalCnt;
        }

        updateResCost() {
          let totalCnt = this.getTotalConscriptCnt();

          if (totalCnt > 0) {
            var myRoleRes = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
              error: Error()
            }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleResData();
            var baseCost = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
              error: Error()
            }), MapUICommand) : MapUICommand).getInstance().proxy.getConscriptBaseCost();
            let str = "消耗:  " + "金币:" + totalCnt * baseCost.cost_gold + "/" + myRoleRes.gold;
            str += " 木材:" + totalCnt * baseCost.cost_wood + "/" + myRoleRes.wood;
            str += " 金属:" + totalCnt * baseCost.cost_iron + "/" + myRoleRes.iron;
            str += " 谷物:" + totalCnt * baseCost.cost_grain + "/" + myRoleRes.grain;
            this.labelResCost.string = str;
          } else {
            this.labelResCost.string = "";
          }
        }

        onChangeEditBox(editBox) {
          let index = this.editBoxs.indexOf(editBox);

          if (index >= 0) {
            this.setCurConscriptForIndex(index, parseInt(this.editBoxs[index].string));
            this.updateResCost();
          }
        }

        onChangeSlider(slider) {
          let index = this.sliders.indexOf(slider);

          if (index >= 0) {
            let maxCnt = this._totalSoldiers[index] - this._soldiers[index];
            this.setCurConscriptForIndex(index, Math.floor(this.sliders[index].progress * maxCnt));
            this.updateResCost();
          }
        }

        onClickQuick() {
          if (this._data && this._data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
            error: Error()
          }), ArmyCmd) : ArmyCmd).Idle || this._data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
            error: Error()
          }), ArmyCmd) : ArmyCmd).Conscript) {
            for (let i = 0; i < this._totalSoldiers.length; i++) {
              if (this._conCnts[i] > 0) {
                //正在征兵的不能重复征兵
                this.setCurConscriptForIndex(i, 0);
              } else {
                let maxCnt = this._totalSoldiers[i] - this._soldiers[i];

                if (maxCnt > 0) {
                  this.setCurConscriptForIndex(i, maxCnt);
                }
              }
            }

            this.updateResCost();
          }
        }

        onClickSure() {
          if (this._data && this._data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
            error: Error()
          }), ArmyCmd) : ArmyCmd).Idle || this._data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
            error: Error()
          }), ArmyCmd) : ArmyCmd).Conscript) {
            let totalCnt = this.getTotalConscriptCnt();

            if (totalCnt > 0) {
              (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
                error: Error()
              }), ArmyCommand) : ArmyCommand).getInstance().generalConscript(this._data.id, this._curConscripts, null);
            }
          }
        }

        onClickPrev() {
          this._curConscripts = [0, 0, 0];

          if (this._order == 1) {
            //第一个就跳到最后一个
            this.setData(this._cityId, this._addition.armyCnt);
          } else {
            this.setData(this._cityId, this._order - 1);
          }
        }

        onClickNext() {
          this._curConscripts = [0, 0, 0];

          if (this._order == this._addition.armyCnt) {
            //最后一个就跳到第一个
            this.setData(this._cityId, 1);
          } else {
            this.setData(this._cityId, this._order + 1);
          }
        }

        onClickClose() {
          this.node.active = false;
        }

        setData(cityId, order = 1) {
          this._curConscripts = [0, 0, 0];
          this._cityId = cityId;
          this._order = order;
          this._cityData = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.getMyCityById(this._cityId);
          this._data = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
            error: Error()
          }), ArmyCommand) : ArmyCommand).getInstance().proxy.getArmyByOrder(order, cityId);
          this._addition = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.getMyCityAddition(cityId);
          this._isUnlock = this._addition.armyCnt >= this._order;
          let facility = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.getMyFacilitys(this._cityId);

          if (facility == null) {
            (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
              error: Error()
            }), MapUICommand) : MapUICommand).getInstance().qryCityFacilities(this._cityId);
          }

          this.updateView();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelCost", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelSoldierCnt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelSpeed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelAtkCity", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelAddition", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labelAdditionTip", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "additionTouchNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "additionTipNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "labelResCost", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "generalLayer", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "generalPrefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "editBoxs", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "sliders", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "tipNodes", [_dec16], {
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
//# sourceMappingURL=CityArmySettingLogic.js.map