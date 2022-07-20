System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ChatMsg, ChatProxy, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    ChatMsg: void 0,
    default: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1731bS7t6xAEZg/JCDcRUlU", "ChatProxy", undefined);

      _export("ChatMsg", ChatMsg = class ChatMsg {
        constructor() {
          _defineProperty(this, "rid", 0);

          _defineProperty(this, "nick_name", "");

          _defineProperty(this, "type", 0);

          _defineProperty(this, "msg", "");

          _defineProperty(this, "time", 0);
        }

      });

      _export("default", ChatProxy = class ChatProxy {
        constructor() {
          _defineProperty(this, "_worldMsgList", []);

          _defineProperty(this, "_unionMsgList", []);
        }

        clearData() {}

        updateWorldChatList(data) {
          this._worldMsgList = [];

          for (var i = 0; i < data.length; i++) {
            var chat = new ChatMsg();
            chat.msg = data[i].msg;
            chat.rid = data[i].rid;
            chat.type = data[i].type;
            chat.time = data[i].time;
            chat.nick_name = data[i].nickName;

            this._worldMsgList.push(chat);
          }
        }

        updateUnionChatList(data) {
          this._unionMsgList = [];

          for (var i = 0; i < data.length; i++) {
            var chat = new ChatMsg();
            chat.msg = data[i].msg;
            chat.rid = data[i].rid;
            chat.type = data[i].type;
            chat.time = data[i].time;
            chat.nick_name = data[i].nickName;

            this._unionMsgList.push(chat);
          }
        }

        updateWorldChat(data) {
          var chat = new ChatMsg();
          chat.msg = data.msg;
          chat.rid = data.rid;
          chat.type = data.type;
          chat.time = data.time;
          chat.nick_name = data.nickName;

          this._worldMsgList.push(chat);
        }

        updateUnionChat(data) {
          var chat = new ChatMsg();
          chat.msg = data.msg;
          chat.rid = data.rid;
          chat.type = data.type;
          chat.time = data.time;
          chat.nick_name = data.nickName;

          this._unionMsgList.push(chat);
        }

        getWorldChatList() {
          return this._worldMsgList;
        }

        getUnionChatList() {
          return this._unionMsgList;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ChatProxy.js.map