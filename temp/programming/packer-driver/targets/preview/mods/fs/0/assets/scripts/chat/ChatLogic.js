System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EditBox, ScrollView, MapCommand, ChatCommand, ListLogic, EventMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ChatLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "../map/MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../map/MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatCommand(extras) {
    _reporterNs.report("ChatCommand", "./ChatCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatMsg(extras) {
    _reporterNs.report("ChatMsg", "./ChatProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListLogic(extras) {
    _reporterNs.report("ListLogic", "../utils/ListLogic", _context.meta, extras);
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
      EditBox = _cc.EditBox;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      MapCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      ChatCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      ListLogic = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d26ddkfGPNH7KVW3O3wxUST", "ChatLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ChatLogic = (_dec = ccclass('ChatLogic'), _dec2 = property(EditBox), _dec3 = property(ScrollView), _dec(_class = (_class2 = (_temp = class ChatLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "editConent", _descriptor, this);

          _initializerDefineProperty(this, "chatView", _descriptor2, this);

          _defineProperty(this, "_type", 0);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_chat_history", this.updateChat, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("unionChange", this.updateChat, this);
        }

        onEnable() {
          console.log("onEnable");
          this.updateUnion();
          this.updateView();
        }

        updateUnion() {
          var city = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity();

          if (city.unionId > 0) {
            //加入联盟频道
            (_crd && ChatCommand === void 0 ? (_reportPossibleCrUseOfChatCommand({
              error: Error()
            }), ChatCommand) : ChatCommand).getInstance().join(1, city.unionId);
          } else {
            (_crd && ChatCommand === void 0 ? (_reportPossibleCrUseOfChatCommand({
              error: Error()
            }), ChatCommand) : ChatCommand).getInstance().exit(1, 0);
          }
        }

        updateChat(data) {
          if (this._type == 0) {
            var comp = this.chatView.node.getComponent(_crd && ListLogic === void 0 ? (_reportPossibleCrUseOfListLogic({
              error: Error()
            }), ListLogic) : ListLogic);
            var list = (_crd && ChatCommand === void 0 ? (_reportPossibleCrUseOfChatCommand({
              error: Error()
            }), ChatCommand) : ChatCommand).getInstance().proxy.getWorldChatList();
            comp.setData(list);
          } else if (this._type == 1) {
            var comp = this.chatView.node.getComponent(_crd && ListLogic === void 0 ? (_reportPossibleCrUseOfListLogic({
              error: Error()
            }), ListLogic) : ListLogic);
            var list = (_crd && ChatCommand === void 0 ? (_reportPossibleCrUseOfChatCommand({
              error: Error()
            }), ChatCommand) : ChatCommand).getInstance().proxy.getUnionChatList();
            console.log("list:", list);
            comp.setData(list);
          }
        }

        onClickClose() {
          this.node.active = false;
        }

        updateView() {
          console.log("type:", this._type);
          (_crd && ChatCommand === void 0 ? (_reportPossibleCrUseOfChatCommand({
            error: Error()
          }), ChatCommand) : ChatCommand).getInstance().chatHistory(this._type);
        }

        onClickChat() {
          if (this._type == 0) {
            (_crd && ChatCommand === void 0 ? (_reportPossibleCrUseOfChatCommand({
              error: Error()
            }), ChatCommand) : ChatCommand).getInstance().chat(this.editConent.string, this._type);
          } else if (this._type == 1) {
            var city = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity();

            if (city.unionId > 0) {
              (_crd && ChatCommand === void 0 ? (_reportPossibleCrUseOfChatCommand({
                error: Error()
              }), ChatCommand) : ChatCommand).getInstance().chat(this.editConent.string, this._type);
            }
          }

          this.editConent.string = "";
        }

        onClickWorld() {
          this._type = 0;
          this.updateView();
        }

        onClickUnion() {
          this._type = 1;
          this.updateView();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editConent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "chatView", [_dec3], {
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
//# sourceMappingURL=ChatLogic.js.map