System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ScrollView, ListLogic, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, WarReportDesLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfListLogic(extras) {
    _reporterNs.report("ListLogic", "../../utils/ListLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWarReport(extras) {
    _reporterNs.report("WarReport", "./MapUIProxy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      ListLogic = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3afac34OzVAlI0uuCzbHccw", "WarReportDesLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", WarReportDesLogic = (_dec = ccclass('WarReportDesLogic'), _dec2 = property(ScrollView), _dec(_class = (_class2 = (_temp = class WarReportDesLogic extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_curData", null);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);
        }

        onLoad() {}

        setData(data) {
          this._curData = data;
          console.log("WarReportDesLogic rounds:", this._curData.rounds);
          var comp = this.scrollView.node.getComponent(_crd && ListLogic === void 0 ? (_reportPossibleCrUseOfListLogic({
            error: Error()
          }), ListLogic) : ListLogic);
          comp.setData(this._curData.rounds);
        }

        onClickClose() {
          this.node.active = false;
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
//# sourceMappingURL=WarReportDesLogic.js.map