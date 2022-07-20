System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetManager, ServerConfig, ChatProxy, EventMgr, ChatCommand, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "../network/socket/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerConfig(extras) {
    _reporterNs.report("ServerConfig", "../config/ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatProxy(extras) {
    _reporterNs.report("ChatProxy", "./ChatProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../utils/EventMgr", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      NetManager = _unresolved_2.NetManager;
    }, function (_unresolved_3) {
      ServerConfig = _unresolved_3.ServerConfig;
    }, function (_unresolved_4) {
      ChatProxy = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b45eDPPhBCyrWDkt6bLbHo", "ChatCommand", undefined);

      _export("default", ChatCommand = class ChatCommand {
        //单例
        static getInstance() {
          if (this._instance == null) {
            this._instance = new ChatCommand();
          }

          return this._instance;
        } //数据model


        static destory() {
          if (this._instance) {
            this._instance.onDestory();

            this._instance = null;
            return true;
          }

          return false;
        } //数据model


        constructor() {
          _defineProperty(this, "_proxy", new (_crd && ChatProxy === void 0 ? (_reportPossibleCrUseOfChatProxy({
            error: Error()
          }), ChatProxy) : ChatProxy)());

          // EventMgr.on(ServerConfig.chat_chat, this.onChat, this)
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).chat_history, this.onChatHistory, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).chat_push, this.onChat, this);
        }

        onChat(data) {
          console.log("onChat:", data);

          if (data.code == 0) {
            if (data.msg.type == 0) {
              this._proxy.updateWorldChat(data.msg);
            } else if (data.msg.type == 1) {
              this._proxy.updateUnionChat(data.msg);
            }

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_chat_history");
          }
        }

        onChatHistory(data) {
          console.log("onChatHistory:", data);

          if (data.code == 0) {
            if (data.msg.type == 0) {
              this._proxy.updateWorldChatList(data.msg.msgs);
            } else if (data.msg.type == 1) {
              this._proxy.updateUnionChatList(data.msg.msgs);
            }

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_chat_history");
          }
        }

        onDestory() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        clearData() {
          this._proxy.clearData();
        }

        get proxy() {
          return this._proxy;
        }

        chat(msg, type = 0) {
          let sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).chat_chat,
            msg: {
              msg: msg,
              type: type
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        join(type, id) {
          let sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).chat_join,
            msg: {
              type: type,
              id: id
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        exit(type, id) {
          let sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).chat_exit,
            msg: {
              type: type,
              id: id
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        chatHistory(type) {
          let sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).chat_history,
            msg: {
              type: type
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

      });

      _defineProperty(ChatCommand, "_instance", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ChatCommand.js.map