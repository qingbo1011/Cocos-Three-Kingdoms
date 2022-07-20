System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Layout, Node, Label, Slider, Toggle, LoginCommand, MapCommand, MapUICommand, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, TransformLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLoginCommand(extras) {
    _reporterNs.report("LoginCommand", "../../login/LoginCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../MapCommand", _context.meta, extras);
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
      Layout = _cc.Layout;
      Node = _cc.Node;
      Label = _cc.Label;
      Slider = _cc.Slider;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      LoginCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapUICommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fef59UHwd1FLo1e1IIAnTIj", "TransformLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", TransformLogic = (_dec = ccclass('TransformLogic'), _dec2 = property(Layout), _dec3 = property(Layout), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Slider), _dec(_class = (_class2 = (_temp = class TransformLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "fromLayout", _descriptor, this);

          _initializerDefineProperty(this, "toLayout", _descriptor2, this);

          _initializerDefineProperty(this, "trNode", _descriptor3, this);

          _initializerDefineProperty(this, "trLabel", _descriptor4, this);

          _initializerDefineProperty(this, "rateLabel", _descriptor5, this);

          _initializerDefineProperty(this, "trSlider", _descriptor6, this);

          _defineProperty(this, "_nameObj", {});

          _defineProperty(this, "_keyArr", []);

          _defineProperty(this, "_curFromIndex", -1);

          _defineProperty(this, "_curToIndex", -1);

          _defineProperty(this, "_fromChange", 0);

          _defineProperty(this, "_toChange", 0);
        }

        onLoad() {
          this._nameObj = {
            wood: "木材x",
            iron: "金属x",
            stone: "石材x",
            grain: "谷物x"
          };
          this._keyArr = ["wood", "iron", "stone", "grain"];
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("upate_my_roleRes", this.initView, this);
        }

        getRate() {
          var cityId = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity().cityId;

          var _addition = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.getMyCityAddition(cityId);

          var rate = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.getTransformRate() + _addition.taxRate;

          return rate;
        }

        initView() {
          this.updateView();
          this.updateBtn();
        }

        updateView() {
          var roleRes = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleResData();
          var i = 0;
          var children_from = this.fromLayout.node.children;

          for (var key in this._nameObj) {
            children_from[i].getChildByName("New Label").getComponent(Label).string = this._nameObj[key] + roleRes[key];
            i++;
          }

          i = 0;
          var children_to = this.toLayout.node.children;

          for (var key in this._nameObj) {
            children_to[i].getChildByName("New Label").getComponent(Label).string = this._nameObj[key] + roleRes[key];
            i++;
          }

          var rate = this.getRate();
          this.rateLabel.string = "1 / " + rate / 100;
        }

        updateBtn() {
          this.trSlider.progress = 0.0;
          this.trNode.active = this._curFromIndex == this._curToIndex ? false : true;
          this.updateLable();
        }

        updateLable() {
          var from_index = this.getFromSelectIndex();
          var to_index = this.getToSelectIndex();

          if (from_index < 0 || to_index < 0) {
            this.trLabel.string = "";
          } else {
            var roleRes = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
              error: Error()
            }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleResData();
            var from_key = this._keyArr[from_index];
            this._fromChange = Math.round(roleRes[from_key] * this.trSlider.progress);
            var rate = this.getRate();
            this._toChange = Math.round(this._fromChange * rate / 100);
            this.trLabel.string = this._fromChange + "/" + this._toChange;
          }
        }

        getFromSelectIndex() {
          var children_from = this.fromLayout.node.children;

          for (var i = 0; i < children_from.length; i++) {
            if (children_from[i].getComponent(Toggle).isChecked) {
              return i;
            }
          }

          return -1;
        }

        getToSelectIndex() {
          var children_to = this.toLayout.node.children;

          for (var i = 0; i < children_to.length; i++) {
            if (children_to[i].getComponent(Toggle).isChecked) {
              return i;
            }
          }

          return -1;
        }

        fromToggleHandle(event) {
          console.log("fromToggleHandle:", this.getFromSelectIndex());
          this._curFromIndex = this.getFromSelectIndex();
          this.updateBtn();
        }

        toToggleHandle(event) {
          console.log("toToggleHandle:", this.getToSelectIndex());
          this._curToIndex = this.getToSelectIndex();
          this.updateBtn();
        }

        slideHandle() {
          this.updateLable();
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        onClickClose() {
          this.node.active = false;
        }

        onTransForm() {
          var from = [0, 0, 0, 0];
          var to = [0, 0, 0, 0];
          var from_index = this.getFromSelectIndex();
          var to_index = this.getToSelectIndex();

          if (from_index < 0 || to_index < 0) {
            return;
          }

          from[from_index] = this._fromChange;
          to[to_index] = this._toChange;
          (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().interiorTransform(from, to);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fromLayout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toLayout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "trNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "trLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rateLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "trSlider", [_dec7], {
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
//# sourceMappingURL=TransformLogic.js.map