System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, ArmyCommand, CityArmyItemLogic, MapUICommand, EventMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, CityAboutLogic;

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

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "../MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCityArmyItemLogic(extras) {
    _reporterNs.report("CityArmyItemLogic", "./CityArmyItemLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./MapUICommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCityAddition(extras) {
    _reporterNs.report("CityAddition", "./MapUIProxy", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ArmyCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      CityArmyItemLogic = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapUICommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01d02BSzz5Daow6QBq3fpFr", "CityAboutLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CityAboutLogic = (_dec = ccclass('CityAboutLogic'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = (_temp = class CityAboutLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "armyLayer", _descriptor, this);

          _initializerDefineProperty(this, "armyItem", _descriptor2, this);

          _defineProperty(this, "_armyCnt", 5);

          _defineProperty(this, "_cityData", null);

          _defineProperty(this, "_armyComps", []);
        }

        onEnable() {
          this.initView();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_city_addition", this.onUpdateCityAdditon, this);
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        initView() {
          for (var i = 0; i < this._armyCnt; i++) {
            var item = instantiate(this.armyItem);
            item.parent = this.armyLayer;
            var comp = item.getComponent(_crd && CityArmyItemLogic === void 0 ? (_reportPossibleCrUseOfCityArmyItemLogic({
              error: Error()
            }), CityArmyItemLogic) : CityArmyItemLogic);
            comp.order = i + 1;

            this._armyComps.push(comp);
          }
        }

        onUpdateCityAdditon(cityId) {
          if (this._cityData.cityId == cityId) {
            this.updateArmyList();
          }
        }

        updateArmyList() {
          var additon = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.getMyCityAddition(this._cityData.cityId);
          var armyList = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
            error: Error()
          }), ArmyCommand) : ArmyCommand).getInstance().proxy.getArmyList(this._cityData.cityId);

          for (var i = 0; i < this._armyComps.length; i++) {
            if (i >= additon.armyCnt) {
              //未开启
              this._armyComps[i].isOpenedArmy(false, false);
            } else {
              //已开启
              this._armyComps[i].isOpenedArmy(true, false);

              this._armyComps[i].setArmyData(this._cityData.cityId, armyList[i]);
            }
          }
        }

        setData(data) {
          this._cityData = data;
          this.updateArmyList();
          (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().qryCityFacilities(this._cityData.cityId);
        }

        onClickFacility() {
          //设施
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("open_facility", this._cityData);
        }

        onClickClose() {
          this.node.active = false;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("close_city_about", this._cityData);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "armyLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "armyItem", [_dec3], {
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
//# sourceMappingURL=CityAboutLogic.js.map