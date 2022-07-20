System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ScrollView, Node, Prefab, instantiate, UITransform, Vec3, GeneralCommand, GeneralItemLogic, GeneralItemType, EventMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GeneralConvertLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../../general/GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralItemLogic(extras) {
    _reporterNs.report("GeneralItemLogic", "./GeneralItemLogic", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GeneralCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      GeneralItemLogic = _unresolved_3.default;
      GeneralItemType = _unresolved_3.GeneralItemType;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c6e4B4BP1EMI9GWbA4iOCD", "GeneralConvertLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GeneralConvertLogic = (_dec = ccclass('GeneralConvertLogic'), _dec2 = property(ScrollView), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = (_class2 = (_temp = class GeneralConvertLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);

          _initializerDefineProperty(this, "contentNode", _descriptor2, this);

          _initializerDefineProperty(this, "generalPrefab", _descriptor3, this);

          _defineProperty(this, "_cunGeneral", []);

          _defineProperty(this, "_upMap", new Map());

          _defineProperty(this, "_selectMap", new Map());
        }

        onEnable() {
          this.initGeneralCfg();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_general_select", this.onSelectGeneral, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("general_convert", this.onGeneralConvert, this);
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        onClickClose() {
          this.node.active = false;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("open_general");
        }

        initGeneralCfg() {
          var list = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().proxy.getMyGeneralsNotUse();
          var listTemp = list.concat();
          listTemp.forEach(item => {
            item.type = (_crd && GeneralItemType === void 0 ? (_reportPossibleCrUseOfGeneralItemType({
              error: Error()
            }), GeneralItemType) : GeneralItemType).GeneralSelect;
          });

          for (var i = 0; i < listTemp.length; i++) {
            if (this._cunGeneral.indexOf(listTemp[i].id) >= 0) {
              listTemp.splice(i, 1);
              i--;
            }
          }

          var comp = this.scrollView.node.getComponent("ListLogic");
          comp.setData(listTemp);
        }

        onSelectGeneral(cfgData, curData, node) {
          //console.log("curData:", curData, this._upMap.size);
          var has = this._upMap.has(curData.id);

          if (has) {
            var obj = this._upMap.get(curData.id);

            obj.parent = null;

            this._upMap.delete(curData.id);

            var g = this._selectMap.get(curData.id);

            if (g) {
              g.getComponent(_crd && GeneralItemLogic === void 0 ? (_reportPossibleCrUseOfGeneralItemLogic({
                error: Error()
              }), GeneralItemLogic) : GeneralItemLogic).select(false);
            }
          } else {
            if (this._upMap.size >= 9) {
              node.getComponent(_crd && GeneralItemLogic === void 0 ? (_reportPossibleCrUseOfGeneralItemLogic({
                error: Error()
              }), GeneralItemLogic) : GeneralItemLogic).select(false);
              return;
            }

            var g = instantiate(this.generalPrefab);
            g.getComponent(_crd && GeneralItemLogic === void 0 ? (_reportPossibleCrUseOfGeneralItemLogic({
              error: Error()
            }), GeneralItemLogic) : GeneralItemLogic).setData(curData, (_crd && GeneralItemType === void 0 ? (_reportPossibleCrUseOfGeneralItemType({
              error: Error()
            }), GeneralItemType) : GeneralItemType).GeneralSelect);
            g.getComponent(_crd && GeneralItemLogic === void 0 ? (_reportPossibleCrUseOfGeneralItemLogic({
              error: Error()
            }), GeneralItemLogic) : GeneralItemLogic).select(true);
            g.getComponent(UITransform).width *= 0.5;
            g.getComponent(UITransform).height *= 0.5;
            g.scale = new Vec3(0.5, 0.5, 0.5);
            g.parent = this.contentNode;

            this._upMap.set(curData.id, g);

            this._selectMap.set(curData.id, node);
          }
        }

        onGeneralConvert(msg) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("show_toast", "获得金币:" + msg.add_gold);

          this._upMap.forEach(g => {
            g.parent = null;
          });

          this._upMap.clear();

          this._selectMap.clear();

          this.initGeneralCfg();
        }

        onClickOK() {
          var keys = this._upMap.keys();

          var ids = Array.from(keys);
          (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().convert(ids);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "generalPrefab", [_dec4], {
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
//# sourceMappingURL=GeneralConvertLogic.js.map