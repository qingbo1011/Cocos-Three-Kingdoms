System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, MapCommand, EventMgr, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, BuildTagLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResData(extras) {
    _reporterNs.report("MapResData", "../MapProxy", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      MapCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9679bRymfRC4rbwCB1VkeGz", "BuildTagLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", BuildTagLogic = (_dec = ccclass('BuildTagLogic'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class BuildTagLogic extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_data", null);

          _initializerDefineProperty(this, "tagIconNode", _descriptor, this);
        }

        onLoad() {
          this.tagIconNode.active = false;
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_tag", this.onUpdateTag, this);
        }

        onDisable() {
          this._data = null;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        setResourceData(data) {
          this._data = data;
          this.updateUI();
        }

        updateUI() {
          if (this._data) {
            this.tagIconNode.active = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().proxy.isPosTag(this._data.x, this._data.y);
          }
        }

        onUpdateTag() {
          this.updateUI();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tagIconNode", [_dec2], {
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
//# sourceMappingURL=BuildTagLogic.js.map