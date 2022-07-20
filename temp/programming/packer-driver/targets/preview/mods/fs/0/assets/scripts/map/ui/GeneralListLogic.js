System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ScrollView, Label, GeneralCommand, MapUICommand, EventMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, GeneralListLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../../general/GeneralCommand", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      GeneralCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapUICommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a20fqtxY9BnJziYAott000", "GeneralListLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GeneralListLogic = (_dec = ccclass('GeneralListLogic'), _dec2 = property(ScrollView), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class GeneralListLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);

          _initializerDefineProperty(this, "cntLab", _descriptor2, this);

          _defineProperty(this, "_cunGeneral", []);

          _defineProperty(this, "_type", 0);

          _defineProperty(this, "_position", 0);
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_my_generals", this.initGeneralCfg, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("general_convert", this.initGeneralCfg, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("chosed_general", this.onClickClose, this);
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        onClickClose() {
          this.node.active = false;
        }

        onClickConvert() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("open_general_convert");
          this.node.active = false;
        }

        onTuJianConvert() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("open_general_roster");
          this.node.active = false;
        }

        initGeneralCfg() {
          var basic = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.getBasicGeneral();
          var cnt = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().proxy.getMyActiveGeneralCnt();
          this.cntLab.string = "(" + cnt + "/" + basic.limit + ")";
          var list = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().proxy.getUseGenerals();
          var listTemp = list.concat();
          listTemp.forEach(item => {
            item.type = this._type;
            item.position = this._position;
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

        setData(data, type, position) {
          if (type === void 0) {
            type = 0;
          }

          if (position === void 0) {
            position = 0;
          }

          this._cunGeneral = [];

          if (data && data.length > 0) {
            this._cunGeneral = data;
          }

          this._type = type;
          this._position = position;
          this.initGeneralCfg();
          (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().qryMyGenerals();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cntLab", [_dec3], {
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
//# sourceMappingURL=GeneralListLogic.js.map