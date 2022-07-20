System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetManager, UnionProxy, ServerConfig, MapCommand, EventMgr, UnionCommand, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "../network/socket/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnionProxy(extras) {
    _reporterNs.report("UnionProxy", "./UnionProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnion(extras) {
    _reporterNs.report("Union", "./UnionProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerConfig(extras) {
    _reporterNs.report("ServerConfig", "../config/ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "../map/MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../map/MapCommand", _context.meta, extras);
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
      UnionProxy = _unresolved_3.default;
    }, function (_unresolved_4) {
      ServerConfig = _unresolved_4.ServerConfig;
    }, function (_unresolved_5) {
      MapCommand = _unresolved_5.default;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66f67qDJfVM87GmjmfPkye9", "UnionCommand", undefined);

      _export("default", UnionCommand = class UnionCommand {
        //单例
        static getInstance() {
          if (this._instance == null) {
            this._instance = new UnionCommand();
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
          _defineProperty(this, "_proxy", new (_crd && UnionProxy === void 0 ? (_reportPossibleCrUseOfUnionProxy({
            error: Error()
          }), UnionProxy) : UnionProxy)());

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_create, this.onUnionCreate, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_join, this.onUnionJoin, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_list, this.onUnionList, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_member, this.onUnionMember, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_dismiss, this.onUnionDisMiss, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_applyList, this.onUnionApply, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_verify, this.onUnionVerify, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_exit, this.onUnionDisMiss, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_kick, this.onUnionKick, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_appoint, this.onUnionAppoint, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_abdicate, this.onUnionAbdicate, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_modNotice, this.onUnionNotice, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_info, this.onUnionInfo, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_log, this.onUnionLog, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).union_apply_push, this.onUnionApplyPush, this);
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

        onUnionCreate(data, otherData) {
          console.log("onUnionCreate", data);

          if (data.code == 0) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("create_union_success");
            this.unionList();
          }
        }

        onUnionJoin(data, otherData) {
          console.log("onUnionJoin", data);

          if (data.code == 0) {}
        }

        onUnionList(data, otherData) {
          console.log("onUnionList", data);

          if (data.code == 0) {
            this._proxy.updateUnionList(data.msg.list);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_union_list", data.msg.list);
          }
        }

        onUnionMember(data, otherData) {
          console.log("onUnionMember", data);

          if (data.code == 0) {
            this._proxy.updateMemberList(data.msg.id, data.msg.Members);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_union_member", data.msg.Members);
          }
        }

        onUnionDisMiss(data, otherData) {
          console.log("onUnionDisMiss", data);

          if (data.code == 0) {
            this.unionList();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("dismiss_union_success");
          }
        }

        onUnionApply(data, otherData) {
          console.log("onUnionApply", data);

          if (data.code == 0) {
            this._proxy.updateApplyList(data.msg.id, data.msg.applys);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_union_apply", data.msg.applys);
          }
        }

        onUnionVerify(data, otherData) {
          console.log("onUnionVerify", data);

          if (data.code == 0) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("kick_union_success");
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("verify_union_success");
          }
        }

        onUnionKick(data, otherData) {
          console.log("onUnionKick", data);

          if (data.code == 0) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("kick_union_success");
          }
        }

        onUnionAppoint(data, otherData) {
          console.log("onUnionAppoint", data);

          if (data.code == 0) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("union_appoint", data.msg);
          }
        }

        onUnionAbdicate(data, otherData) {
          console.log("onUnionAbdicate", data);

          if (data.code == 0) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("union_abdicate", data.msg);
          }
        }

        onUnionNotice(data, otherData) {
          console.log("onUnionNotice", data);

          if (data.code == 0) {
            this._proxy.updateNotice(data.msg.id, data.msg.text);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("union_notice", data.msg);
          }
        }

        onUnionInfo(data, otherData) {
          console.log("onUnionInfo", data);

          if (data.code == 0) {
            var l = [];
            l.push(data.msg.info);

            this._proxy.updateUnionList(l);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("union_info", data.msg);
          }
        }

        onUnionLog(data, otherData) {
          console.log("onUnionLog", data);

          if (data.code == 0) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("union_log", data.msg.logs);
          }
        }

        onUnionApplyPush(data, otherData) {
          console.log("onUnionApplyPush", data);
          var city = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity();
          var unionData = UnionCommand.getInstance().proxy.getUnion(city.unionId);

          if (unionData && unionData.isMajor(city.rid)) {
            this._proxy.updateApply(city.unionId, data.msg);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_union_apply", data.msg);
          }
        }

        unionCreate(name) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_create,
            msg: {
              name: name
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        unionJoin(id) {
          if (id === void 0) {
            id = 0;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_join,
            msg: {
              id: id
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        unionList() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_list,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        unionInfo(id) {
          if (id === void 0) {
            id = 0;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_info,
            msg: {
              id: id
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        unionMember(id) {
          if (id === void 0) {
            id = 0;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_member,
            msg: {
              id: id
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        unionApplyList(id) {
          if (id === void 0) {
            id = 0;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_applyList,
            msg: {
              id: id
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        unionDismiss() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_dismiss,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        unionVerify(id, decide) {
          if (id === void 0) {
            id = 0;
          }

          if (decide === void 0) {
            decide = 0;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_verify,
            msg: {
              id: id,
              decide: decide
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        unionExit() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_exit,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        unionKick(rid) {
          if (rid === void 0) {
            rid = 0;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_kick,
            msg: {
              rid: rid
            }
          };
          console.log("unionKick");
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        unionAppoint(rid, title) {
          if (rid === void 0) {
            rid = 0;
          }

          if (title === void 0) {
            title = 1;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_appoint,
            msg: {
              rid: rid,
              title: title
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        unionAbdicate(rid) {
          if (rid === void 0) {
            rid = 0;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_abdicate,
            msg: {
              rid: rid
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        modNotice(text) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_modNotice,
            msg: {
              text: text
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        appoint(rid) {
          if (rid === void 0) {
            rid = 0;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_kick,
            msg: {
              rid: rid
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        unionLog() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).union_log,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

      });

      _defineProperty(UnionCommand, "_instance", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UnionCommand.js.map