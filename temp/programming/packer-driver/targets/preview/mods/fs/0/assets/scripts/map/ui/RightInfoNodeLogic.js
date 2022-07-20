System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Toggle, ScrollView, Prefab, instantiate, ArmyCommand, MapCommand, RightArmyItemLogic, RightCityItemLogic, RightTagItemLogic, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, RightInfoNodeLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfArmyData(extras) {
    _reporterNs.report("ArmyData", "../../general/ArmyProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyCommand(extras) {
    _reporterNs.report("ArmyCommand", "../../general/ArmyCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRightArmyItemLogic(extras) {
    _reporterNs.report("RightArmyItemLogic", "./RightArmyItemLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "../MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRightCityItemLogic(extras) {
    _reporterNs.report("RightCityItemLogic", "./RightCityItemLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRightTagItemLogic(extras) {
    _reporterNs.report("RightTagItemLogic", "./RightTagItemLogic", _context.meta, extras);
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
      Toggle = _cc.Toggle;
      ScrollView = _cc.ScrollView;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ArmyCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      RightArmyItemLogic = _unresolved_4.default;
    }, function (_unresolved_5) {
      RightCityItemLogic = _unresolved_5.default;
    }, function (_unresolved_6) {
      RightTagItemLogic = _unresolved_6.default;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c999e9VHBRKBYP1yaQT0oPf", "RightInfoNodeLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", RightInfoNodeLogic = (_dec = ccclass('RightInfoNodeLogic'), _dec2 = property([Toggle]), _dec3 = property(ScrollView), _dec4 = property(ScrollView), _dec5 = property(ScrollView), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec(_class = (_class2 = (_temp = class RightInfoNodeLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "toggles", _descriptor, this);

          _initializerDefineProperty(this, "armyScrollView", _descriptor2, this);

          _initializerDefineProperty(this, "cityScrollView", _descriptor3, this);

          _initializerDefineProperty(this, "tagsScrollView", _descriptor4, this);

          _initializerDefineProperty(this, "armyItemPrefabs", _descriptor5, this);

          _initializerDefineProperty(this, "cityItemPrefabs", _descriptor6, this);

          _initializerDefineProperty(this, "tagItemPrefabs", _descriptor7, this);

          _defineProperty(this, "_armys", []);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_army_list", this.onUpdateArmyList, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_army", this.onUpdateArmy, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_tag", this.onUpdateTag, this);
          this.armyScrollView.node.active = true;
          this.cityScrollView.node.active = false;
          this.tagsScrollView.node.active = false;
          this.initArmys();
          this.initCitys();
          this.initTags();
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
          this._armys.length = 0;
          this._armys = null;
        }

        initArmys() {
          var cityId = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity().cityId;
          var datas = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
            error: Error()
          }), ArmyCommand) : ArmyCommand).getInstance().proxy.getArmyList(cityId);
          this.armyScrollView.content.removeAllChildren(true);
          console.log("datas", datas);

          if (datas) {
            this._armys.length = datas.length;

            for (var i = 0; i < datas.length; i++) {
              var item = instantiate(this.armyItemPrefabs);
              item.parent = this.armyScrollView.content;
              this._armys[i] = item;
              item.getComponent(_crd && RightArmyItemLogic === void 0 ? (_reportPossibleCrUseOfRightArmyItemLogic({
                error: Error()
              }), RightArmyItemLogic) : RightArmyItemLogic).order = i + 1;
              item.getComponent(_crd && RightArmyItemLogic === void 0 ? (_reportPossibleCrUseOfRightArmyItemLogic({
                error: Error()
              }), RightArmyItemLogic) : RightArmyItemLogic).setArmyData(datas[i]);
            }
          }
        }

        initCitys() {
          var citys = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.getMyCitys();
          this.cityScrollView.content.removeAllChildren();

          if (citys && citys.length > 0) {
            for (var i = 0; i < citys.length; i++) {
              var item = instantiate(this.cityItemPrefabs);
              item.parent = this.cityScrollView.content;
              item.getComponent(_crd && RightCityItemLogic === void 0 ? (_reportPossibleCrUseOfRightCityItemLogic({
                error: Error()
              }), RightCityItemLogic) : RightCityItemLogic).setArmyData(citys[i]);
            }
          }
        }

        initTags() {
          var tags = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().proxy.getPosTags();
          this.tagsScrollView.content.removeAllChildren();

          for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            var item = instantiate(this.tagItemPrefabs);
            item.parent = this.tagsScrollView.content;
            item.getComponent(_crd && RightTagItemLogic === void 0 ? (_reportPossibleCrUseOfRightTagItemLogic({
              error: Error()
            }), RightTagItemLogic) : RightTagItemLogic).setData(tag);
          }
        }

        onUpdateArmyList(datas) {
          this.initArmys();
        }

        onUpdateArmy(data) {
          if ((_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity().cityId == data.cityId) {
            this._armys[data.order - 1].getComponent(_crd && RightArmyItemLogic === void 0 ? (_reportPossibleCrUseOfRightArmyItemLogic({
              error: Error()
            }), RightArmyItemLogic) : RightArmyItemLogic).setArmyData(data);
          }
        }

        onUpdateTag() {
          this.initTags();
        }

        onClockToggle(toggle) {
          var index = this.toggles.indexOf(toggle);

          if (index == 1) {
            this.armyScrollView.node.active = false;
            this.cityScrollView.node.active = true;
            this.tagsScrollView.node.active = false;
          } else if (index == 0) {
            this.armyScrollView.node.active = true;
            this.cityScrollView.node.active = false;
            this.tagsScrollView.node.active = false;
          } else {
            this.armyScrollView.node.active = false;
            this.cityScrollView.node.active = false;
            this.tagsScrollView.node.active = true;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggles", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "armyScrollView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cityScrollView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tagsScrollView", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "armyItemPrefabs", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cityItemPrefabs", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tagItemPrefabs", [_dec8], {
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
//# sourceMappingURL=RightInfoNodeLogic.js.map