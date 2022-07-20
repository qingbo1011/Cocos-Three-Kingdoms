System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ScrollView, Node, instantiate, UnionCommand, MapCommand, UnionMemberItemOpLogic, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, UnionMemberLogic;

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

  function _reportPossibleCrUseOfUnion(extras) {
    _reporterNs.report("Union", "./UnionProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "../map/MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../map/MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnionMemberItemOpLogic(extras) {
    _reporterNs.report("UnionMemberItemOpLogic", "./UnionMemberItemOpLogic", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      UnionCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      UnionMemberItemOpLogic = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40590P3vN9AW56SQ1N8wVu3", "UnionMemberLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", UnionMemberLogic = (_dec = ccclass('UnionMemberLogic'), _dec2 = property(ScrollView), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class UnionMemberLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "memberView", _descriptor, this);

          _initializerDefineProperty(this, "disMissButton", _descriptor2, this);

          _initializerDefineProperty(this, "exitButton", _descriptor3, this);

          _initializerDefineProperty(this, "opNode", _descriptor4, this);

          _defineProperty(this, "_op", null);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_union_member", this.updateMember, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("kick_union_success", this.getMember, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("union_appoint", this.getMember, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("union_abdicate", this.getMember, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("clickUnionMemberItem", this.onClickItem, this);
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        click() {
          if (this._op != null) {
            this._op.active = false;
          }
        }

        onClickItem(menberData) {
          if (this._op == null) {
            var node = instantiate(this.opNode);
            node.parent = this.node;
            this._op = node;
          }

          this._op.active = true;

          this._op.getComponent(_crd && UnionMemberItemOpLogic === void 0 ? (_reportPossibleCrUseOfUnionMemberItemOpLogic({
            error: Error()
          }), UnionMemberItemOpLogic) : UnionMemberItemOpLogic).setData(menberData);
        }

        updateMember(data) {
          var city = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity();
          var unionData = (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().proxy.getUnion(city.unionId);
          var comp = this.memberView.node.getComponent("ListLogic");
          var list = (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().proxy.getMemberList(unionData.id).concat();
          comp.setData(list);
          this.updateBtn();
        }

        updateBtn() {
          var city = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity();
          var unionData = (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().proxy.getUnion(city.unionId);

          if (unionData.getChairman().rid == city.rid) {
            this.exitButton.active = false;
            this.disMissButton.active = true;
          } else {
            this.exitButton.active = true;
            this.disMissButton.active = false;
          }
        }

        getMember() {
          var city = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity();
          var unionData = (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().proxy.getUnion(city.unionId);
          (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().unionMember(unionData.id);
        }

        onEnable() {
          this.updateBtn();
          this.getMember();
        }

        dismiss() {
          (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().unionDismiss();
        }

        exit() {
          (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().unionExit();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "memberView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "disMissButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "exitButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "opNode", [_dec5], {
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
//# sourceMappingURL=UnionMemberLogic.js.map