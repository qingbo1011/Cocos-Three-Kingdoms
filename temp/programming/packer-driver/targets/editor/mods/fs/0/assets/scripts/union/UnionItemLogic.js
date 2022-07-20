System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, UnionCommand, EventMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, UnionItemLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUnionCommand(extras) {
    _reporterNs.report("UnionCommand", "./UnionCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnion(extras) {
    _reporterNs.report("Union", "./UnionProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../utils/EventMgr", _context.meta, extras);
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
    }, function (_unresolved_2) {
      UnionCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "886edsm2xtOELAzZh8AOlxE", "UnionItemLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", UnionItemLogic = (_dec = ccclass('UnionItemLogic'), _dec2 = property(Label), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class UnionItemLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nameLabel", _descriptor, this);

          _initializerDefineProperty(this, "joinButtonNode", _descriptor2, this);

          _defineProperty(this, "_unionData", null);
        }

        onLoad() {
          this.joinButtonNode.active = false;
        }

        updateItem(data) {
          this._unionData = data;
          this.nameLabel.string = this._unionData.name;
          this.joinButtonNode.active = this.isCanJoin();
        }

        isCanJoin() {
          return !(_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().proxy.isMeInUnion();
        }

        join() {
          (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().unionJoin(this._unionData.id);
        }

        click() {
          var isCanjoin = this.isCanJoin();

          if (!isCanjoin) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("open_my_union", this._unionData);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "joinButtonNode", [_dec3], {
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
//# sourceMappingURL=UnionItemLogic.js.map