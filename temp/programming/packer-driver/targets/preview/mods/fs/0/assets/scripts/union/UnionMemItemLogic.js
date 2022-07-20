System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, UnionCommand, EventMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, UnionMemItemLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUnionCommand(extras) {
    _reporterNs.report("UnionCommand", "./UnionCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMember(extras) {
    _reporterNs.report("Member", "./UnionProxy", _context.meta, extras);
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
    }, function (_unresolved_2) {
      UnionCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9d199rGEJKeJhkfaLhKIAn", "UnionMemItemLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", UnionMemItemLogic = (_dec = ccclass('UnionMemItemLogic'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = (_temp = class UnionMemItemLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nameLabel", _descriptor, this);

          _initializerDefineProperty(this, "titleLabel", _descriptor2, this);

          _initializerDefineProperty(this, "posLabel", _descriptor3, this);

          _defineProperty(this, "_menberData", null);
        }

        onLoad() {}

        updateItem(data) {
          this._menberData = data;
          this.titleLabel.string = "(" + this._menberData.titleDes + ")";
          this.nameLabel.string = this._menberData.name;
          this.posLabel.string = "坐标:(" + this._menberData.x + "," + this._menberData.y + ")";
        }

        click() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("clickUnionMemberItem", this._menberData);
        }

        kick() {
          (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().unionKick(this._menberData.rid);
        }

        appoint() {
          (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().unionKick(this._menberData.rid);
        }

        abdicate() {
          (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().unionKick(this._menberData.rid);
        }

        jump() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("close_union");
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("scroll_to_map", this._menberData.x, this._menberData.y);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "posLabel", [_dec4], {
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
//# sourceMappingURL=UnionMemItemLogic.js.map