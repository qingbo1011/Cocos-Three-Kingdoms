System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Prefab, Node, ScrollView, instantiate, GeneralCommand, GeneralItemType, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, GeneralComposeLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../../general/GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralConfig(extras) {
    _reporterNs.report("GeneralConfig", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralData(extras) {
    _reporterNs.report("GeneralData", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralItemType(extras) {
    _reporterNs.report("GeneralItemType", "./GeneralItemLogic", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      GeneralCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      GeneralItemType = _unresolved_3.GeneralItemType;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "146edJ13EBM/Zet/NdH3Y5F", "GeneralComposeLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GeneralComposeLogic = (_dec = ccclass('GeneralComposeLogic'), _dec2 = property(Label), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(ScrollView), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class GeneralComposeLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nameLab", _descriptor, this);

          _initializerDefineProperty(this, "generalItemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "generalItemParent", _descriptor3, this);

          _initializerDefineProperty(this, "scrollView", _descriptor4, this);

          _initializerDefineProperty(this, "composeNode", _descriptor5, this);

          _defineProperty(this, "_currData", null);

          _defineProperty(this, "_cfgData", null);

          _defineProperty(this, "_generalNode", null);

          _defineProperty(this, "_gIdsArr", []);
        }

        onLoad() {
          this._generalNode = instantiate(this.generalItemPrefab);
          this._generalNode.parent = this.generalItemParent;
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_general_select", this.selectItem, this);
          this.updataView();
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        selectItem(cfg, curData) {
          var index = this._gIdsArr.indexOf(curData.id);

          if (index >= 0) {
            this._gIdsArr.splice(index, 1);
          } else {
            this._gIdsArr.push(curData.id);
          }

          this.updataView();
        }

        setData(cfgData, curData) {
          this._currData = curData;
          this._cfgData = cfgData;
          this._gIdsArr = [];

          var com = this._generalNode.getComponent("GeneralItemLogic");

          if (com) {
            com.updateItem(this._currData, (_crd && GeneralItemType === void 0 ? (_reportPossibleCrUseOfGeneralItemType({
              error: Error()
            }), GeneralItemType) : GeneralItemType).GeneralNoThing);
          }

          this.nameLab.string = this._cfgData.name;
          this.updateGeneral();
          this.updataView();
        }

        updateGeneral() {
          let list = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().proxy.getComposeGenerals(this._cfgData.cfgId, this._currData.id);
          let listTemp = list.concat();
          listTemp.forEach(item => {
            item.type = (_crd && GeneralItemType === void 0 ? (_reportPossibleCrUseOfGeneralItemType({
              error: Error()
            }), GeneralItemType) : GeneralItemType).GeneralSelect;
          });
          var comp = this.scrollView.node.getComponent("ListLogic");
          comp.setData(listTemp);
        }

        updataView() {
          this.composeNode.active = this._gIdsArr.length > 0 && this._currData.star_lv < this._cfgData.star;
        }

        onCompose() {
          (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().composeGeneral(this._currData.id, this._gIdsArr);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "generalItemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "generalItemParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "composeNode", [_dec6], {
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
//# sourceMappingURL=GeneralComposeLogic.js.map