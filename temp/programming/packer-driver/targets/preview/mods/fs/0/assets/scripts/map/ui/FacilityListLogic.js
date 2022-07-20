System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ScrollView, Label, FacilityDesLogic, FacilityItemLogic, MapUICommand, EventMgr, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, FacilityListLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFacilityDesLogic(extras) {
    _reporterNs.report("FacilityDesLogic", "./FacilityDesLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacilityItemLogic(extras) {
    _reporterNs.report("FacilityItemLogic", "./FacilityItemLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./MapUICommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacility(extras) {
    _reporterNs.report("Facility", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacilityConfig(extras) {
    _reporterNs.report("FacilityConfig", "./MapUIProxy", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      FacilityDesLogic = _unresolved_2.default;
    }, function (_unresolved_3) {
      FacilityItemLogic = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapUICommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3bc2M+y1dMW7KqDP+WSo+z", "FacilityListLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FacilityListLogic = (_dec = ccclass('FacilityListLogic'), _dec2 = property(ScrollView), _dec(_class = (_class2 = (_temp = class FacilityListLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);

          _defineProperty(this, "_curCityId", 0);

          _defineProperty(this, "_curSelectType", -1);

          _defineProperty(this, "_itemLogics", new Map());
        }

        onLoad() {
          this.initView();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_my_facilities", this.updateView, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_my_facility", this.updateFacility, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("select_facility_item", this.onSelectItem, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("upate_my_roleRes", this.onUpdateMyRoleRes, this);
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);

          this._itemLogics.clear();

          this._itemLogics = null;
        }

        initView() {
          var children = this.scrollView.content.children;

          for (var i = 0; i < children.length; i++) {
            var subChildren = children[i].children;

            for (var j = 0; j < subChildren.length; j++) {
              var item = subChildren[j];

              if (item.name.indexOf("CityFacilityItem") == 0) {
                var type = parseInt(item.name.substring(16));
                var comp = item.addComponent(_crd && FacilityItemLogic === void 0 ? (_reportPossibleCrUseOfFacilityItemLogic({
                  error: Error()
                }), FacilityItemLogic) : FacilityItemLogic);
                comp.labelRate = item.getChildByName("labelRate").getComponent(Label);
                comp.labelName = item.getChildByName("labelName").getComponent(Label);
                comp.labelTime = item.getChildByName("labelTime").getComponent(Label);
                comp.lockNode = item.getChildByName("lockNode");
                comp.labelTime.string = "";
                comp.type = type;

                this._itemLogics.set(type, comp);
              }
            }
          }
        }

        updateView() {
          var dataList = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.getMyFacilitys(this._curCityId);

          if (dataList && dataList.size > 0) {
            dataList.forEach((data, type) => {
              if (this._itemLogics.has(type)) {
                //有数据就更新
                var logic = this._itemLogics.get(type);

                var cfg = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
                  error: Error()
                }), MapUICommand) : MapUICommand).getInstance().proxy.getFacilityCfgByType(type);
                var isUnlock = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
                  error: Error()
                }), MapUICommand) : MapUICommand).getInstance().proxy.isFacilityUnlock(this._curCityId, type);
                logic.setData(this._curCityId, data, cfg, isUnlock);
              }
            });

            if (this._curSelectType == -1) {
              this.setCurSelectType(0); //默认选中主城
            }
          }

          this.updateDesView();
        }

        updateFacility(cityId, data) {
          if (this._curCityId == cityId) {
            if (this._itemLogics.has(data.type)) {
              //有数据就更新
              var logic = this._itemLogics.get(data.type);

              var cfg = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
                error: Error()
              }), MapUICommand) : MapUICommand).getInstance().proxy.getFacilityCfgByType(data.type);
              var isUnlock = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
                error: Error()
              }), MapUICommand) : MapUICommand).getInstance().proxy.isFacilityUnlock(this._curCityId, data.type);
              logic.setData(this._curCityId, data, cfg, isUnlock);
            }

            this._itemLogics.forEach((logic, type) => {
              var cfg = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
                error: Error()
              }), MapUICommand) : MapUICommand).getInstance().proxy.getFacilityCfgByType(logic.data.type);

              for (var i = 0; i < cfg.conditions.length; i++) {
                if (cfg.conditions[i].type == data.type) {
                  //涉及到了解锁条件
                  var _data = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
                    error: Error()
                  }), MapUICommand) : MapUICommand).getInstance().proxy.getMyFacilityByType(this._curCityId, logic.data.type);

                  var _isUnlock = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
                    error: Error()
                  }), MapUICommand) : MapUICommand).getInstance().proxy.isFacilityUnlock(this._curCityId, logic.data.type);

                  logic.setData(this._curCityId, _data, cfg, _isUnlock);
                  break;
                }
              }
            });
          }

          this.updateDesView();
        }

        onUpdateMyRoleRes() {
          this.updateDesView();
        }

        onSelectItem(cityId, type) {
          if (this._curCityId == cityId) {
            this.setCurSelectType(type);
          }
        }

        updateDesView() {
          var data = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.getMyFacilityByType(this._curCityId, this._curSelectType);
          var cfg = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.getFacilityCfgByType(this._curSelectType);
          this.node.getComponent(_crd && FacilityDesLogic === void 0 ? (_reportPossibleCrUseOfFacilityDesLogic({
            error: Error()
          }), FacilityDesLogic) : FacilityDesLogic).setData(this._curCityId, data, cfg);
        }

        onClickClose() {
          this.node.active = false;
        }

        setCurSelectType(type) {
          if (this._curSelectType != type) {
            this._curSelectType = type;
            this.updateDesView();
          }
        }

        setData(data) {
          this._curCityId = data.cityId;
          this.updateView();
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
//# sourceMappingURL=FacilityListLogic.js.map