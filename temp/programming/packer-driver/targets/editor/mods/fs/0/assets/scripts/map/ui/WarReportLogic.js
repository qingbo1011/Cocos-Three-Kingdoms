System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ScrollView, Prefab, instantiate, MapUICommand, WarReportDesLogic, EventMgr, ListLogic, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, WarReportLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./MapUICommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWarReport(extras) {
    _reporterNs.report("WarReport", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWarReportDesLogic(extras) {
    _reporterNs.report("WarReportDesLogic", "./WarReportDesLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../utils/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListLogic(extras) {
    _reporterNs.report("ListLogic", "../../utils/ListLogic", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ScrollView = _cc.ScrollView;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      MapUICommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      WarReportDesLogic = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      ListLogic = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "92a94uCUalIcbfZYVr4eLsB", "WarReportLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", WarReportLogic = (_dec = ccclass('WarReportLogic'), _dec2 = property(ScrollView), _dec3 = property(Prefab), _dec(_class = (_class2 = (_temp = class WarReportLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);

          _initializerDefineProperty(this, "warPortDesPrefab", _descriptor2, this);

          _defineProperty(this, "_warPortDesNode", null);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("upate_war_report", this.initView, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("click_war_report", this.openWarPortDes, this);
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        onClickClose() {
          this.node.active = false;
        }

        initView() {
          var report = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.getWarReport();
          var comp = this.scrollView.node.getComponent(_crd && ListLogic === void 0 ? (_reportPossibleCrUseOfListLogic({
            error: Error()
          }), ListLogic) : ListLogic);
          comp.setData(report);
        }

        updateView() {
          this.initView();
          (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().qryWarReport();
        }

        openWarPortDes(data) {
          console.log("openWarPortDes");

          if (this._warPortDesNode == null) {
            this._warPortDesNode = instantiate(this.warPortDesPrefab);
            this._warPortDesNode.parent = this.node;
          } else {
            this._warPortDesNode.active = true;
          }

          this._warPortDesNode.getComponent(_crd && WarReportDesLogic === void 0 ? (_reportPossibleCrUseOfWarReportDesLogic({
            error: Error()
          }), WarReportDesLogic) : WarReportDesLogic).setData(data);
        }

        allRead() {
          (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().warRead(0);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "warPortDesPrefab", [_dec3], {
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
//# sourceMappingURL=WarReportLogic.js.map